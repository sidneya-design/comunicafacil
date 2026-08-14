-- ========================================================
-- Corrige bypass de isolamento multi-tenant via "uploaded_by/user_id = auth.uid()"
-- em books, exercises e medias
-- ========================================================
-- Achado em revisão de segurança (2026-08-14). As policies de escrita
-- dessas três tabelas combinam, via OR, uma cláusula de autopropriedade
-- (uploaded_by/user_id = auth.uid()) com a cláusula real de isolamento por
-- paciente/médico (is_doctor_of_patient(patient_id) / doctor_user_id =
-- auth.uid()). Como o próprio usuário controla o valor de uploaded_by/
-- user_id no INSERT, ele sempre consegue satisfazer a primeira cláusula
-- sozinho — e a partir daí patient_id/doctor_user_id/company_id nunca são
-- validados contra a relação real do usuário.
--
-- Exploração confirmada: um paciente (ou médico não relacionado) insere
-- uma linha com uploaded_by = próprio auth.uid() e patient_id/
-- doctor_user_id apontando pra outro tenant. A linha passa a aparecer na
-- biblioteca/banco da vítima (can_view_book/can_view_exercise/can_view_media
-- já leem esses campos pra decidir visibilidade).
--
-- Fix: a cláusula de autopropriedade só vale quando as colunas de escopo
-- (patient_id/doctor_user_id/company_id) OU não estão sendo setadas, OU
-- apontam pra uma relação que o próprio usuário realmente tem. Não tira
-- nenhuma capacidade legítima:
--   - upload solto (todas as colunas de escopo nulas) continua liberado
--     pra qualquer autenticado, igual hoje;
--   - médico setando patient_id de um paciente seu: is_doctor_of_patient
--     já dá true, então continua liberado;
--   - médico setando doctor_user_id = ele mesmo: já é o próprio uid;
--   - editor/admin: cláusula própria (is_editor_or_admin()) intocada.

-- ---------- books ----------
drop policy if exists "Modificação isolada por perfil em books" on public.books;
drop policy if exists "Atualização isolada por perfil em books" on public.books;

create policy "Modificação isolada por perfil em books"
    on public.books for insert to authenticated
    with check (
        public.is_editor_or_admin()
        or (
            uploaded_by = auth.uid()
            and (patient_id is null or public.is_doctor_of_patient(patient_id))
            and (doctor_user_id is null or doctor_user_id = auth.uid())
            and (company_id is null or company_id = public.user_company_id())
        )
    );

create policy "Atualização isolada por perfil em books"
    on public.books for update to authenticated
    using (
        uploaded_by = auth.uid()
        or public.is_editor_or_admin()
        or (patient_id is not null and public.is_doctor_of_patient(patient_id))
    )
    with check (
        public.is_editor_or_admin()
        or (
            uploaded_by = auth.uid()
            and (patient_id is null or public.is_doctor_of_patient(patient_id))
            and (doctor_user_id is null or doctor_user_id = auth.uid())
            and (company_id is null or company_id = public.user_company_id())
        )
    );

-- ---------- exercises ----------
-- Policy legada nunca tocada desde a Fase 3 (ver notas em
-- 20260812000000_exercises_tenant_scope.sql e 20260818000000_fix_exercises_
-- admin_policy.sql) — mesmo bug: user_id = auth.uid() sem checar
-- patient_id/doctor_user_id/company_id.
drop policy if exists "Modificação isolada por perfil em exercises" on public.exercises;

create policy "Modificação isolada por perfil em exercises"
    on public.exercises for all to authenticated
    using (
        user_id = auth.uid()
        or public.is_editor_or_admin()
        or (patient_id is not null and public.is_doctor_of_patient(patient_id))
        or (doctor_user_id is not null and doctor_user_id = auth.uid())
    )
    with check (
        public.is_editor_or_admin()
        or (
            user_id = auth.uid()
            and (patient_id is null or public.is_doctor_of_patient(patient_id))
            and (doctor_user_id is null or doctor_user_id = auth.uid())
            and (company_id is null or company_id = public.user_company_id())
        )
    );

-- ---------- medias ----------
-- Mesmo bug, referenciado nas notas de 20260816000000_books_medias_tenant_
-- scope.sql e 20260822000000_medias_doctor_bank.sql.
drop policy if exists "Modificação isolada por perfil em medias" on public.medias;

create policy "Modificação isolada por perfil em medias"
    on public.medias for all to authenticated
    using (
        user_id = auth.uid()
        or public.is_editor_or_admin()
        or (doctor_user_id is not null and doctor_user_id = auth.uid())
    )
    with check (
        public.is_editor_or_admin()
        or (
            user_id = auth.uid()
            and (patient_id is null or public.is_doctor_of_patient(patient_id))
            and (doctor_user_id is null or doctor_user_id = auth.uid())
            and (company_id is null or company_id = public.user_company_id())
        )
    );
