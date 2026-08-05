import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import nodemailer from "npm:nodemailer@9.0.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;
const GMAIL_SMTP_USER = Deno.env.get("GMAIL_SMTP_USER") ?? "";
const GMAIL_APP_PASSWORD = (Deno.env.get("GMAIL_APP_PASSWORD") ?? "").replace(/\s/g, "");
const APP_PUBLIC_URL = Deno.env.get("APP_PUBLIC_URL") ?? "";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (!GMAIL_SMTP_USER || !GMAIL_APP_PASSWORD) {
      return json({ error: "O Gmail ainda não foi configurado no servidor." }, 503);
    }

    const authHeader = req.headers.get("Authorization") ?? "";
    const token = authHeader.replace(/^Bearer\s+/i, "");
    if (!token) return json({ error: "Não autenticado." }, 401);

    const callerClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data: callerData, error: callerError } = await callerClient.auth.getUser();
    if (callerError || !callerData?.user) return json({ error: "Sessão inválida." }, 401);

    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    const { data: callerRole, error: roleError } = await admin
      .from("user_roles")
      .select("role")
      .eq("user_id", callerData.user.id)
      .maybeSingle();
    if (roleError) throw roleError;
    if (!["editor", "admin"].includes(callerRole?.role ?? "")) {
      return json({ error: "Apenas editores e administradores podem enviar avisos." }, 403);
    }

    const body = await req.json();
    const title = String(body?.title ?? "").trim().slice(0, 160);
    const category = String(body?.category ?? "Atividade").trim().slice(0, 40);
    if (!title) return json({ error: "O título da atividade é obrigatório." }, 400);

    const { data: usersPage, error: usersError } = await admin.auth.admin.listUsers({ perPage: 1000 });
    if (usersError) throw usersError;

    const { data: roles, error: rolesError } = await admin
      .from("user_roles")
      .select("user_id, role")
      .eq("role", "viewer");
    if (rolesError) throw rolesError;

    const viewerIds = new Set((roles ?? []).map((role: { user_id: string }) => role.user_id));
    const recipients = usersPage.users
      .filter((user) => viewerIds.has(user.id) && user.email && !user.banned_until)
      .map((user) => user.email!);

    if (recipients.length === 0) {
      return json({ recipientCount: 0, message: "Nenhum usuário final com e-mail foi encontrado." });
    }

    const safeTitle = escapeHtml(title);
    const categoryKey = category.toLowerCase();
    const genderAdjective = ["categoria", "atividade"].includes(categoryKey) ? "Nova" : "Novo";
    const introArticle = ["categoria", "atividade"].includes(categoryKey) ? "A" : "O";
    const introCategory = categoryKey === "jogo" ? "jogo" : categoryKey;
    const introText = `${introArticle} ${introCategory} <strong>${safeTitle}</strong> já está disponível para você.`;
    const linkHtml = APP_PUBLIC_URL
      ? `<p style="margin:20px 0 0"><a href="${escapeHtml(APP_PUBLIC_URL)}" style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:14px 22px;border-radius:10px;font-weight:700;font-size:16px;line-height:1">Abrir Comunica Fácil</a></p>`
      : "";

    // O Supabase bloqueia SMTP nas portas 25 e 587. O Gmail usa TLS direto na 465.
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: GMAIL_SMTP_USER, pass: GMAIL_APP_PASSWORD },
    });

    await transporter.sendMail({
      from: `Comunica Fácil <${GMAIL_SMTP_USER}>`,
      to: GMAIL_SMTP_USER,
      bcc: recipients,
      subject: `${genderAdjective} ${categoryKey} disponível: ${title}`,
      text: `Olá! ${introArticle} ${introCategory} "${title}" já está disponível para você. ${APP_PUBLIC_URL ? `Abra o Comunica Fácil: ${APP_PUBLIC_URL}` : ""}`.trim(),
      html: `<div style="margin:0;background:#ffffff;font-family:Arial,sans-serif;color:#1f2937"><div style="max-width:560px;padding:28px 24px 32px"><h1 style="margin:0 0 18px;font-size:28px;line-height:1.15;color:#2563eb;font-weight:800">Novidade no Comunica Fácil</h1><p style="margin:0 0 14px;font-size:18px;line-height:1.5;color:#111827">Olá!</p><p style="margin:0;font-size:18px;line-height:1.6;color:#1f2937">${introText}</p>${linkHtml}<p style="margin:18px 0 0;font-size:14px;line-height:1.5;color:#6b7280">Este é um aviso automático do Comunica Fácil.</p></div></div>`,
    });

    return json({ recipientCount: recipients.length });
  } catch (error) {
    console.error("Erro ao enviar aviso de atividade:", error);
    return json({ error: error instanceof Error ? error.message : String(error) }, 500);
  }
});
