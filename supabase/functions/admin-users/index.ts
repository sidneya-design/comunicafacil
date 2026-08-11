import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Injetadas automaticamente pelo runtime de Edge Functions do Supabase.
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;

const VALID_ROLES = ["viewer", "editor", "admin", "doctor"];

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

        const { data: members, error: membersErr } = await admin.from("company_members").select("user_id, company_id");
        if (membersErr) throw membersErr;

        const roleMap = new Map((roles ?? []).map((r: { user_id: string; role: string }) => [r.user_id, r.role]));
        const companyMap = new Map((members ?? []).map((m: { user_id: string; company_id: string }) => [m.user_id, m.company_id]));
        const users = usersPage.users.map((u) => ({
          id: u.id,
          email: u.email,
          name: u.user_metadata?.full_name || "",
          created_at: u.created_at,
          last_sign_in_at: u.last_sign_in_at,
          role: roleMap.get(u.id) ?? "viewer",
          companyId: companyMap.get(u.id) ?? null,
          // banned_until vem preenchido (data futura) quando setActive(false) foi usado.
          active: !u.banned_until || new Date(u.banned_until) <= new Date(),
        }));

        return json({ users });
      }

      case "create": {
        const { email, password, role, name, companyId } = payload ?? {};
        if (!email || !password) return json({ error: "E-mail e senha são obrigatórios." }, 400);
        if (String(password).length < 6) return json({ error: "A senha precisa ter ao menos 6 caracteres." }, 400);
        const finalRole = VALID_ROLES.includes(role) ? role : "viewer";
        if (finalRole === "doctor" && !companyId) {
          return json({ error: "Selecione a empresa do médico." }, 400);
        }

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

        // Empresa não é mais exclusiva de médico — admin pode vincular
        // qualquer papel a uma empresa (ex.: alguém que ainda vai virar
        // paciente, mas já precisa estar associado à empresa desde já).
        if (companyId) {
          const { error: memberErr } = await admin
            .from("company_members")
            .upsert({ user_id: created.user!.id, company_id: companyId });
          if (memberErr) throw memberErr;
        }

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

      case "setCompany": {
        const { userId, companyId } = payload ?? {};
        if (!userId) return json({ error: "userId é obrigatório." }, 400);

        if (companyId) {
          const { error } = await admin
            .from("company_members")
            .upsert({ user_id: userId, company_id: companyId });
          if (error) throw error;
        } else {
          // company_members.company_id é not null — "sem empresa" é a linha
          // inteira não existir, não um valor vazio.
          const { error } = await admin.from("company_members").delete().eq("user_id", userId);
          if (error) throw error;
        }

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

      // Desativa/reativa sem apagar (médico/paciente removido não pode logar, mas
      // os dados e o conteúdo vinculado a ele continuam íntegros no banco).
      case "setActive": {
        const { userId, active } = payload ?? {};
        if (!userId) return json({ error: "userId é obrigatório." }, 400);
        if (userId === caller.id) return json({ error: "Você não pode desativar a própria conta." }, 400);

        const { error } = await admin.auth.admin.updateUserById(userId, {
          ban_duration: active ? "none" : "876000h",
        });
        if (error) throw error;

        return json({ ok: true });
      }

      case "listCompanies": {
        const { data, error } = await admin.from("companies").select("*").order("name");
        if (error) throw error;
        return json({ companies: data });
      }

      case "createCompany": {
        const { name, doctorEmail, doctorPassword, doctorName } = payload ?? {};
        if (!name || !String(name).trim()) return json({ error: "Nome da empresa é obrigatório." }, 400);
        if (doctorEmail && (!doctorPassword || String(doctorPassword).length < 6)) {
          return json({ error: "A senha do médico precisa ter ao menos 6 caracteres." }, 400);
        }

        const { data: company, error } = await admin
          .from("companies")
          .insert({ name: String(name).trim(), created_by: caller.id })
          .select()
          .single();
        if (error) throw error;

        // Médico responsável é opcional — se informado, cria junto (mesmo
        // padrão de "create" pra doctor, mas a empresa já é a recém-criada).
        let doctor: { id: string; email: string } | null = null;
        if (doctorEmail) {
          const { data: createdDoctor, error: doctorErr } = await admin.auth.admin.createUser({
            email: doctorEmail,
            password: doctorPassword,
            email_confirm: true,
            user_metadata: doctorName ? { full_name: doctorName } : undefined,
          });
          if (doctorErr) {
            // Empresa já foi criada — não desfaz (não é destrutivo deixar uma
            // empresa sem médico, o admin sempre pode vincular um depois).
            return json({ company, error: `Empresa criada, mas o médico não pôde ser criado: ${doctorErr.message}` }, 200);
          }
          const { error: roleErr } = await admin
            .from("user_roles")
            .upsert({ user_id: createdDoctor.user!.id, role: "doctor" });
          if (roleErr) throw roleErr;
          const { error: memberErr } = await admin
            .from("company_members")
            .upsert({ user_id: createdDoctor.user!.id, company_id: company.id });
          if (memberErr) throw memberErr;
          doctor = { id: createdDoctor.user!.id, email: createdDoctor.user!.email! };
        }

        return json({ company, doctor });
      }

      default:
        return json({ error: `Ação desconhecida: ${action}` }, 400);
    }
  } catch (error) {
    console.error("Erro na Edge Function admin-users:", error);
    return json({ error: error instanceof Error ? error.message : String(error) }, 500);
  }
});
