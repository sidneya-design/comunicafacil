-- ========================================================
-- Multi-tenant: banco de Virtudes/Fomes e Forças do médico + liberação por paciente
-- ========================================================
-- Ver ~/.claude/plans/floofy-crafting-fiddle.md (Fase 18). Repetição exata
-- do padrão de topics (Fase 17) e exercises (Fase 7) em virtues.

alter table public.virtues
    add column if not exists doctor_user_id uuid references auth.users(id),
    add column if not exists company_id uuid references public.companies(id) on delete restrict,
    add column if not exists patient_id uuid references public.patients(id) on delete restrict;

create table if not exists public.patient_virtue_flags (
    patient_id uuid not null references public.patients(id) on delete cascade,
    virtue_id bigint not null references public.virtues(id) on delete cascade,
    visible boolean not null default true,
    updated_at timestamptz not null default now(),
    primary key (patient_id, virtue_id)
);
alter table public.patient_virtue_flags enable row level security;

create policy "Leitura de patient_virtue_flags" on public.patient_virtue_flags
    for select to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id)
           or patient_id = public.current_patient_id());

create policy "Escrita de médicos em patient_virtue_flags de seus pacientes"
    on public.patient_virtue_flags for all to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id))
    with check (public.is_admin() or public.is_doctor_of_patient(patient_id));

create or replace function public.can_view_virtue(
    target_virtue_id bigint,
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
                select 1 from public.patient_virtue_flags pvf
                join public.patients p on p.id = pvf.patient_id
                where pvf.virtue_id = target_virtue_id
                  and p.user_id = auth.uid()
                  and pvf.visible = true
            ))
        or (target_company_id is not null and target_patient_id is null
            and public.user_company_id() = target_company_id);
$$;
grant execute on function public.can_view_virtue(bigint, uuid, uuid, uuid) to authenticated;

drop policy if exists "Leitura pública de virtues" on public.virtues;
create policy "Leitura pública de virtues" on public.virtues
    for select using (public.can_view_virtue(id, company_id, patient_id, doctor_user_id));

drop policy if exists "Leitura pública de virtue_items" on public.virtue_items;
create policy "Leitura pública de virtue_items" on public.virtue_items
    for select using (
        exists (select 1 from public.virtues v where v.id = virtue_items.virtue_id
                and public.can_view_virtue(v.id, v.company_id, v.patient_id, v.doctor_user_id))
    );

-- Aditiva: não mexe em "Escrita restrita a editores/admins em virtues".
create policy "Escrita de médicos em virtues do próprio banco" on public.virtues
    for all to authenticated
    using (doctor_user_id is not null and doctor_user_id = auth.uid())
    with check (doctor_user_id is not null and doctor_user_id = auth.uid());

create policy "Escrita de médicos em virtue_items do próprio banco" on public.virtue_items
    for all to authenticated
    using (exists (select 1 from public.virtues v where v.id = virtue_items.virtue_id
                    and v.doctor_user_id is not null and v.doctor_user_id = auth.uid()))
    with check (exists (select 1 from public.virtues v where v.id = virtue_items.virtue_id
                    and v.doctor_user_id is not null and v.doctor_user_id = auth.uid()));
