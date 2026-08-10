-- ========================================================
-- Multi-tenant: módulos ligados/desligados por paciente individual
-- ========================================================
-- Ver /Users/geniantis/.claude/plans/nifty-doodling-stearns.md (Fase 5a).
-- Evolução do toggle global existente (module_flags, afeta todo mundo
-- igual): aqui um médico liga/desliga um módulo só pro próprio paciente.
-- 100% aditivo — sem linha aqui, o paciente cai no comportamento de hoje
-- (flag global de module_flags), igual a qualquer outro usuário.

create table if not exists public.patient_module_flags (
    patient_id uuid not null references public.patients(id) on delete cascade,
    module_id text not null,
    visible boolean not null default true,
    updated_at timestamptz not null default now(),
    primary key (patient_id, module_id)
);

alter table public.patient_module_flags enable row level security;

create policy "Leitura de patient_module_flags" on public.patient_module_flags
    for select to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id)
           or patient_id = public.current_patient_id());

create policy "Escrita de médicos em patient_module_flags de seus pacientes"
    on public.patient_module_flags for all to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id))
    with check (public.is_admin() or public.is_doctor_of_patient(patient_id));
