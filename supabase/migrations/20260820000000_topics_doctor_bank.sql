-- ========================================================
-- Multi-tenant: banco de Tópicos do médico + liberação por paciente
-- ========================================================
-- Ver ~/.claude/plans/floofy-crafting-fiddle.md (Fase 17). Mesmo padrão de
-- exercises (Fase 7): médico cria pastas de Tópicos no próprio "banco"
-- (doctor_user_id), ninguém mais vê por padrão. Na tela de cada paciente,
-- o médico liga quais pastas daquele banco ficam visíveis pra aquele
-- paciente específico. 100% aditivo: doctor_user_id/company_id/patient_id
-- nulos (toda pasta de hoje) mantêm o comportamento de sempre (pública).

alter table public.topics
    add column if not exists doctor_user_id uuid references auth.users(id),
    add column if not exists company_id uuid references public.companies(id) on delete restrict,
    add column if not exists patient_id uuid references public.patients(id) on delete restrict;

create table if not exists public.patient_topic_flags (
    patient_id uuid not null references public.patients(id) on delete cascade,
    topic_id bigint not null references public.topics(id) on delete cascade,
    visible boolean not null default true,
    updated_at timestamptz not null default now(),
    primary key (patient_id, topic_id)
);
alter table public.patient_topic_flags enable row level security;

create policy "Leitura de patient_topic_flags" on public.patient_topic_flags
    for select to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id)
           or patient_id = public.current_patient_id());

create policy "Escrita de médicos em patient_topic_flags de seus pacientes"
    on public.patient_topic_flags for all to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id))
    with check (public.is_admin() or public.is_doctor_of_patient(patient_id));

-- Cópia estrutural de can_view_exercise() (20260817000000), reusando os
-- mesmos helpers já existentes (is_admin/is_doctor_of_patient/
-- current_patient_id/user_company_id) — nenhuma função nova.
create or replace function public.can_view_topic(
    target_topic_id bigint,
    target_company_id uuid,
    target_patient_id uuid,
    target_doctor_user_id uuid
)
returns boolean language sql stable security definer set search_path = public
as $$
    select
        (target_company_id is null and target_patient_id is null and target_doctor_user_id is null)
        or public.is_admin()
        or (target_patient_id is not null and public.current_patient_id() = target_patient_id)
        or (target_patient_id is not null and public.is_doctor_of_patient(target_patient_id))
        or (target_doctor_user_id is not null and target_doctor_user_id = auth.uid())
        or (target_doctor_user_id is not null and exists (
                select 1 from public.patient_topic_flags ptf
                join public.patients p on p.id = ptf.patient_id
                where ptf.topic_id = target_topic_id
                  and p.user_id = auth.uid()
                  and ptf.visible = true
            ))
        or (target_company_id is not null and target_patient_id is null
            and public.user_company_id() = target_company_id);
$$;
grant execute on function public.can_view_topic(bigint, uuid, uuid, uuid) to authenticated;

drop policy if exists "Leitura pública de topics" on public.topics;
create policy "Leitura pública de topics" on public.topics
    for select using (public.can_view_topic(id, company_id, patient_id, doctor_user_id));

drop policy if exists "Leitura pública de topic_items" on public.topic_items;
create policy "Leitura pública de topic_items" on public.topic_items
    for select using (
        exists (select 1 from public.topics t where t.id = topic_items.topic_id
                and public.can_view_topic(t.id, t.company_id, t.patient_id, t.doctor_user_id))
    );

-- Aditiva: não mexe em "Escrita restrita a editores/admins em topics"
-- (is_editor_or_admin(), já existente) — médico não tem esse papel, então
-- isto é uma capacidade nova, não uma relaxação da policy antiga.
create policy "Escrita de médicos em topics do próprio banco" on public.topics
    for all to authenticated
    using (doctor_user_id is not null and doctor_user_id = auth.uid())
    with check (doctor_user_id is not null and doctor_user_id = auth.uid());

create policy "Escrita de médicos em topic_items do próprio banco" on public.topic_items
    for all to authenticated
    using (exists (select 1 from public.topics t where t.id = topic_items.topic_id
                    and t.doctor_user_id is not null and t.doctor_user_id = auth.uid()))
    with check (exists (select 1 from public.topics t where t.id = topic_items.topic_id
                    and t.doctor_user_id is not null and t.doctor_user_id = auth.uid()));
