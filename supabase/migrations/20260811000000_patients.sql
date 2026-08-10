-- ========================================================
-- Multi-tenant: pacientes (com login próprio) vinculados a um médico
-- ========================================================
-- Ver /Users/geniantis/.claude/plans/nifty-doodling-stearns.md (Fase 2).

create table if not exists public.patients (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null unique references auth.users(id) on delete cascade,
    doctor_user_id uuid not null references auth.users(id),
    company_id uuid not null references public.companies(id) on delete restrict,
    name text,
    active boolean not null default true,
    created_at timestamptz not null default now()
);

create or replace function public.current_patient_id()
returns uuid language sql stable security definer set search_path = public
as $$
    select id from public.patients where user_id = auth.uid();
$$;

create or replace function public.is_doctor_of_patient(target_patient_id uuid)
returns boolean language sql stable security definer set search_path = public
as $$
    select exists (
        select 1 from public.patients
        where id = target_patient_id and doctor_user_id = auth.uid()
    );
$$;

grant execute on function public.current_patient_id() to authenticated;
grant execute on function public.is_doctor_of_patient(uuid) to authenticated;

alter table public.patients enable row level security;

drop policy if exists "Leitura de patients" on public.patients;
create policy "Leitura de patients" on public.patients
    for select to authenticated
    using (public.is_admin() or doctor_user_id = auth.uid() or user_id = auth.uid());
-- Escrita só via Edge Function (service_role) — mesmo padrão de user_roles/company_members.
