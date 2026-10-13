-- ========================================================
-- Espelho: frases do próprio terapeuta, sem liberação por paciente
-- ========================================================
-- Decisão de produto (substitui 20261013000004): cada terapeuta monta o
-- próprio Espelho para os seus pacientes, então não há etapa de liberação.
--   * frase do terapeuta sem paciente (patient_id nulo): todos os pacientes
--     DESTE terapeuta veem;
--   * frase com patient_id: só aquele paciente vê (e o terapeuta dele);
--   * nada de banco compartilhado por empresa nem frase global pro paciente;
--   * admin/editor continuam vendo e gerenciando tudo.
-- Frase criada "dentro" do paciente agora grava doctor_user_id também (o app
-- antes gravava só patient_id, e a regra de escrita recusava).

drop policy if exists "Leitura de mirror_phrases" on public.mirror_phrases;
drop policy if exists "Escrita de médicos no banco da empresa em mirror_phrases" on public.mirror_phrases;
drop function if exists public.can_view_mirror_phrase(bigint, uuid, uuid, uuid);
drop function if exists public.can_view_mirror_phrase(uuid, uuid, uuid);
drop table if exists public.patient_mirror_flags;

create or replace function public.can_view_mirror_phrase(
    target_patient_id uuid,
    target_doctor_user_id uuid
)
returns boolean language sql stable security definer set search_path = public
as $$
    select
        public.is_editor_or_admin()
        -- terapeuta: as próprias frases (gerais e de cada paciente)
        or (target_doctor_user_id is not null and target_doctor_user_id = auth.uid())
        or (target_patient_id is not null and public.is_doctor_of_patient(target_patient_id))
        -- paciente: as frases feitas só pra ele...
        or (target_patient_id is not null and public.current_patient_id() = target_patient_id)
        -- ...e as gerais do próprio terapeuta
        or (target_patient_id is null and target_doctor_user_id is not null and exists (
                select 1 from public.patients p
                where p.user_id = auth.uid() and p.doctor_user_id = target_doctor_user_id
            ));
$$;
grant execute on function public.can_view_mirror_phrase(uuid, uuid) to authenticated;

create policy "Leitura de mirror_phrases" on public.mirror_phrases
    for select using (public.can_view_mirror_phrase(patient_id, doctor_user_id));

-- Escrita: admin/editor em tudo; terapeuta só nas próprias frases, e frase de
-- paciente só se o paciente for dele.
drop policy if exists "Escrita de admin e médicos em mirror_phrases do próprio banco" on public.mirror_phrases;
create policy "Escrita de admin e médicos em mirror_phrases do próprio banco" on public.mirror_phrases
    for all to authenticated
    using (public.is_editor_or_admin()
           or (doctor_user_id is not null and doctor_user_id = auth.uid()))
    with check (public.is_editor_or_admin()
           or (doctor_user_id is not null and doctor_user_id = auth.uid()
               and (patient_id is null or public.is_doctor_of_patient(patient_id))));
