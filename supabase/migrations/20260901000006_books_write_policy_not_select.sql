-- ========================================================
-- Policy de escrita de books não deve mais cobrir SELECT
-- ========================================================
-- "Modificação isolada por perfil em books" é `for all`, que inclui SELECT
-- — mesmo com can_view_book (20260901000005) bloqueando admin de ver o
-- banco privado do médico na policy dedicada de leitura, essa policy `for
-- all` ainda libera SELECT pra is_editor_or_admin() em paralelo (policies
-- permissivas se combinam com OR), então o bloqueio não tinha efeito
-- nenhum na prática — confirmado testando direto no banco.
--
-- Troca `for all` por `for insert, update, delete` explícito — mantém
-- admin/editor podendo escrever/moderar qualquer livro (não mexe nisso),
-- só tira a permissão de LEITURA que vinha de brinde. SELECT passa a
-- depender só da policy "Leitura pública de books" (can_view_book).

drop policy if exists "Modificação isolada por perfil em books" on public.books;

create policy "Modificação isolada por perfil em books"
    on public.books for insert to authenticated
    with check (
        uploaded_by = auth.uid()
        or public.is_editor_or_admin()
        or (patient_id is not null and public.is_doctor_of_patient(patient_id))
    );

create policy "Atualização isolada por perfil em books"
    on public.books for update to authenticated
    using (
        uploaded_by = auth.uid()
        or public.is_editor_or_admin()
        or (patient_id is not null and public.is_doctor_of_patient(patient_id))
    )
    with check (
        uploaded_by = auth.uid()
        or public.is_editor_or_admin()
        or (patient_id is not null and public.is_doctor_of_patient(patient_id))
    );

create policy "Exclusão isolada por perfil em books"
    on public.books for delete to authenticated
    using (
        uploaded_by = auth.uid()
        or public.is_editor_or_admin()
        or (patient_id is not null and public.is_doctor_of_patient(patient_id))
    );
