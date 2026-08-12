-- ========================================================
-- Médico lê uso (tempo, atividades, sessões) dos próprios pacientes
-- ========================================================
-- usage_sessions/usage_events só tinham policy de leitura pra admin
-- (is_admin()) ou o próprio usuário (user_id = auth.uid()) — médico não
-- conseguia ver nada de uso dos pacientes dele. Aba "Uso e insights" nova
-- em "Meus Pacientes" depende disso.

create policy "Médicos leem uso dos próprios pacientes em usage_sessions" on public.usage_sessions
    for select to authenticated
    using (exists (select 1 from public.patients p where p.user_id = usage_sessions.user_id and p.doctor_user_id = auth.uid()));

create policy "Médicos leem uso dos próprios pacientes em usage_events" on public.usage_events
    for select to authenticated
    using (exists (select 1 from public.patients p where p.user_id = usage_events.user_id and p.doctor_user_id = auth.uid()));
