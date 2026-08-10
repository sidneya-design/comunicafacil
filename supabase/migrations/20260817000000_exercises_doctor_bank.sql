-- ========================================================
-- Multi-tenant: banco de exercícios do médico + liberação por paciente
-- ========================================================
-- Ver /Users/geniantis/.claude/plans/nifty-doodling-stearns.md (Fase 7).
-- Modelo: o médico cria exercícios no próprio "banco" (doctor_user_id),
-- ninguém mais vê por padrão — nem paciente. Depois, na tela de cada
-- paciente (mesmo padrão de patient_module_flags/Módulos), o médico liga
-- quais exercícios daquele banco ficam visíveis pra aquele paciente
-- específico. 100% aditivo: doctor_user_id nulo (todo exercício de hoje,
-- inclusive os já escopados por patient_id direto na Fase 3) mantém o
-- comportamento de sempre.

alter table public.exercises
    add column if not exists doctor_user_id uuid references auth.users(id);

create table if not exists public.patient_exercise_flags (
    patient_id uuid not null references public.patients(id) on delete cascade,
    exercise_id bigint not null references public.exercises(id) on delete cascade,
    visible boolean not null default true,
    updated_at timestamptz not null default now(),
    primary key (patient_id, exercise_id)
);
alter table public.patient_exercise_flags enable row level security;

create policy "Leitura de patient_exercise_flags" on public.patient_exercise_flags
    for select to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id)
           or patient_id = public.current_patient_id());

create policy "Escrita de médicos em patient_exercise_flags de seus pacientes"
    on public.patient_exercise_flags for all to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id))
    with check (public.is_admin() or public.is_doctor_of_patient(patient_id));

-- Função dedicada pra exercises (não reaproveita can_view_scoped_content —
-- exercício precisa checar o próprio id contra patient_exercise_flags, as
-- outras tabelas escopadas não precisam desse nível de granularidade).
create or replace function public.can_view_exercise(
    target_exercise_id bigint,
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
        -- o médico sempre vê o próprio banco, incl. exercícios ainda não
        -- liberados pra nenhum paciente
        or (target_doctor_user_id is not null and target_doctor_user_id = auth.uid())
        -- paciente vê se o médico liberou esse exercício específico pra ele
        or (target_doctor_user_id is not null and exists (
                select 1 from public.patient_exercise_flags pef
                join public.patients p on p.id = pef.patient_id
                where pef.exercise_id = target_exercise_id
                  and p.user_id = auth.uid()
                  and pef.visible = true
            ))
        or (target_company_id is not null and target_patient_id is null
            and public.user_company_id() = target_company_id);
$$;
grant execute on function public.can_view_exercise(bigint, uuid, uuid, uuid) to authenticated;

drop policy if exists "Leitura pública de exercises" on public.exercises;
create policy "Leitura pública de exercises" on public.exercises
    for select using (public.can_view_exercise(id, company_id, patient_id, doctor_user_id));

drop policy if exists "Leitura pública de exercise_items" on public.exercise_items;
create policy "Leitura pública de exercise_items" on public.exercise_items
    for select using (
        exists (select 1 from public.exercises e where e.id = exercise_items.exercise_id
                and public.can_view_exercise(e.id, e.company_id, e.patient_id, e.doctor_user_id))
    );

drop policy if exists "Escrita de médicos em exercises de seus pacientes" on public.exercises;
create policy "Escrita de médicos em exercises do próprio banco" on public.exercises
    for all to authenticated
    using (doctor_user_id is not null and doctor_user_id = auth.uid())
    with check (doctor_user_id is not null and doctor_user_id = auth.uid());

drop policy if exists "Escrita de médicos em exercise_items de seus pacientes" on public.exercise_items;
create policy "Escrita de médicos em exercise_items do próprio banco" on public.exercise_items
    for all to authenticated
    using (exists (select 1 from public.exercises e where e.id = exercise_items.exercise_id
                    and e.doctor_user_id is not null and e.doctor_user_id = auth.uid()))
    with check (exists (select 1 from public.exercises e where e.id = exercise_items.exercise_id
                    and e.doctor_user_id is not null and e.doctor_user_id = auth.uid()));
