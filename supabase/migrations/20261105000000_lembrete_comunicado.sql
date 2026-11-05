-- ========================================================
-- Lembretes: tipo "comunicado" além do "hora de praticar"
-- ========================================================
-- Na aba Lembretes o médico/admin escolhe o tipo:
--   - 'reminder' (o de sempre): texto padrão "fulano lembrou você de
--     praticar" + recado opcional;
--   - 'announcement': o texto vai exatamente como foi escrito (novidades,
--     avisos), sem o texto padrão de lembrete. O texto é obrigatório.
-- As linhas que já existem ficam como 'reminder'.
alter table public.patient_reminders
    add column if not exists kind text not null default 'reminder'
    check (kind in ('reminder', 'announcement'));
