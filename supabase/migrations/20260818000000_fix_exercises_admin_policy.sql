-- ========================================================
-- Corrige policy legada que anula o isolamento do banco de exercícios
-- ========================================================
-- Achado durante o teste da Fase 7: a policy "Permitir modificação para
-- admins em exercises" (pré-existente em produção, de um mecanismo anterior
-- não documentado neste repo, deliberadamente não tocada na Fase 3 — ver
-- nota em 20260812000000_exercises_tenant_scope.sql) é `for all` com
-- `using (true) / with check (true)`. Como `for all` cobre SELECT também
-- (não só INSERT/UPDATE/DELETE), essa policy sozinha libera LEITURA (e
-- ESCRITA) de QUALQUER exercício pra QUALQUER usuário autenticado — o que
-- anula por completo o `can_view_exercise()` recém-criado: um paciente ou
-- médico não relacionado conseguia ler o banco de exercícios de outro
-- médico mesmo sem nenhuma liberação em patient_exercise_flags.
--
-- O nome da policy ("para admins") deixa claro que a intenção original era
-- restringir a admins — o `using(true)` foi bug, não comportamento
-- desejado. Corrigir para `is_admin()` não tira nenhuma capacidade de
-- ninguém que hoje depende dela pra escrever: editor/dono já tem a policy
-- "Modificação isolada por perfil em exercises" (user_id = auth.uid() OR
-- is_editor_or_admin()), e médico tem a nova "Escrita de médicos em
-- exercises do próprio banco". Leitura pública já é coberta por "Leitura
-- pública de exercises" (can_view_exercise), que preserva o padrão aditivo
-- de sempre (linha sem company/patient/doctor_user_id = pública, igual a
-- hoje).
drop policy if exists "Permitir modificação para admins em exercises" on public.exercises;
create policy "Permitir modificação para admins em exercises" on public.exercises
    for all to authenticated
    using (public.is_admin())
    with check (public.is_admin());
