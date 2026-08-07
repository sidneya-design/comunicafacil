import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Injetadas automaticamente pelo runtime de Edge Functions do Supabase.
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;

const VALID_ROLES = ["viewer", "editor", "admin"];

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Identifica quem está chamando através do token da sessão (enviado
    // pelo front no header Authorization). Isto usa a anon key só para
    // decodificar/validar o JWT do usuário, nunca para bypassar RLS.
    const authHeader = req.headers.get("Authorization") ?? "";
    const token = authHeader.replace(/^Bearer\s+/i, "");
    if (!token) return json({ error: "Não autenticado." }, 401);

    const callerClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data: callerData, error: callerErr } = await callerClient.auth.getUser();
    if (callerErr || !callerData?.user) return json({ error: "Sessão inválida." }, 401);
    const caller = callerData.user;

    // Cliente com service_role: só usado depois de confirmar que quem
    // chamou é admin. Ele é o único capaz de criar/listar/deletar
    // usuários do Supabase Auth e de escrever em user_roles (que tem
    // RLS bloqueando escrita para qualquer outro papel).
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const { data: callerRole } = await admin
      .from("user_roles")
      .select("role")
      .eq("user_id", caller.id)
      .maybeSingle();

    if (callerRole?.role !== "admin") {
      return json({ error: "Apenas administradores podem gerenciar usuários." }, 403);
    }

    const { action, payload } = await req.json();

    switch (action) {
      case "list": {
        const { data: usersPage, error } = await admin.auth.admin.listUsers({ perPage: 200 });
        if (error) throw error;

        const { data: roles, error: rolesErr } = await admin.from("user_roles").select("user_id, role");
        if (rolesErr) throw rolesErr;

        const roleMap = new Map((roles ?? []).map((r: { user_id: string; role: string }) => [r.user_id, r.role]));
        const users = usersPage.users.map((u) => ({
          id: u.id,
          email: u.email,
          name: u.user_metadata?.full_name || "",
          created_at: u.created_at,
          last_sign_in_at: u.last_sign_in_at,
          role: roleMap.get(u.id) ?? "viewer",
        }));

        return json({ users });
      }

      case "create": {
        const { email, password, role, name } = payload ?? {};
        if (!email || !password) return json({ error: "E-mail e senha são obrigatórios." }, 400);
        if (String(password).length < 6) return json({ error: "A senha precisa ter ao menos 6 caracteres." }, 400);
        const finalRole = VALID_ROLES.includes(role) ? role : "viewer";

        const { data: created, error } = await admin.auth.admin.createUser({
          email,
          password,
          email_confirm: true,
          user_metadata: name ? { full_name: name } : undefined,
        });
        if (error) throw error;

        const { error: roleErr } = await admin
          .from("user_roles")
          .upsert({ user_id: created.user!.id, role: finalRole });
        if (roleErr) throw roleErr;

        return json({ user: { id: created.user!.id, email: created.user!.email, role: finalRole } });
      }

      case "setRole": {
        const { userId, role } = payload ?? {};
        if (!userId || !VALID_ROLES.includes(role)) return json({ error: "Papel inválido." }, 400);
        if (userId === caller.id) return json({ error: "Você não pode alterar o próprio papel." }, 400);

        const { error } = await admin.from("user_roles").upsert({ user_id: userId, role });
        if (error) throw error;

        return json({ ok: true });
      }

      case "setName": {
        const { userId, name } = payload ?? {};
        if (!userId) return json({ error: "userId é obrigatório." }, 400);

        const { error } = await admin.auth.admin.updateUserById(userId, { user_metadata: { full_name: name } });
        if (error) throw error;

        return json({ ok: true });
      }

      case "setPassword": {
        const { userId, password } = payload ?? {};
        if (!userId) return json({ error: "userId é obrigatório." }, 400);
        if (!password || String(password).length < 6) {
          return json({ error: "A senha precisa ter ao menos 6 caracteres." }, 400);
        }

        const { error } = await admin.auth.admin.updateUserById(userId, { password });
        if (error) throw error;

        return json({ ok: true });
      }

      case "delete": {
        const { userId } = payload ?? {};
        if (!userId) return json({ error: "userId é obrigatório." }, 400);
        if (userId === caller.id) return json({ error: "Você não pode excluir a própria conta." }, 400);

        const { error } = await admin.auth.admin.deleteUser(userId);
        if (error) throw error;

        return json({ ok: true });
      }

      default:
        return json({ error: `Ação desconhecida: ${action}` }, 400);
    }
  } catch (error) {
    console.error("Erro na Edge Function admin-users:", error);
    return json({ error: error instanceof Error ? error.message : String(error) }, 500);
  }
});
