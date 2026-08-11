-- ========================================================
-- Carômetro: mesmo padrão de exercises/medias/topics/virtues (Fases 21-22)
-- ========================================================
-- Setor global (patient_id nulo, hoje só admin cria) deixa de ser
-- automático pro paciente — precisa de liberação do médico dele, mesma
-- ideia de patient_exercise_flags/patient_media_flags/etc. Setor já
-- vinculado direto a um paciente (patient_id preenchido) não muda nada —
-- já era só daquele paciente + médico dele + admin.
--
-- Não mexe em can_view_scoped_content() (função compartilhada, usada
-- também por books) — cria uma função dedicada aqui, mesmo padrão de
-- can_view_media()/can_view_topic()/can_view_virtue().

create table if not exists public.patient_carometro_flags (
    patient_id uuid not null references public.patients(id) on delete cascade,
    sector_id text not null references public.carometro_sectors(id) on delete cascade,
    visible boolean not null default true,
    updated_at timestamptz not null default now(),
    primary key (patient_id, sector_id)
);
alter table public.patient_carometro_flags enable row level security;

create policy "Leitura de patient_carometro_flags" on public.patient_carometro_flags
    for select to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id)
           or patient_id = public.current_patient_id());

create policy "Escrita de médicos em patient_carometro_flags de seus pacientes"
    on public.patient_carometro_flags for all to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id))
    with check (public.is_admin() or public.is_doctor_of_patient(patient_id));

create or replace function public.can_view_carometro_sector(
    target_sector_id text,
    target_patient_id uuid
)
returns boolean language sql stable security definer set search_path = public
as $$
    select
        public.is_admin()
        -- médico vê setor global do admin, pra poder liberar por paciente
        or (target_patient_id is null and public.is_doctor())
        or (target_patient_id is not null and public.current_patient_id() = target_patient_id)
        or (target_patient_id is not null and public.is_doctor_of_patient(target_patient_id))
        or exists (
            select 1 from public.patient_carometro_flags pcf
            join public.patients p on p.id = pcf.patient_id
            where pcf.sector_id = target_sector_id
              and p.user_id = auth.uid()
              and pcf.visible = true
        );
$$;
grant execute on function public.can_view_carometro_sector(text, uuid) to authenticated;

drop policy if exists "Leitura publica carometro_sectors" on public.carometro_sectors;
create policy "Leitura publica carometro_sectors" on public.carometro_sectors
    for select using (public.can_view_carometro_sector(id, patient_id));

drop policy if exists "Leitura publica carometro_people" on public.carometro_people;
create policy "Leitura publica carometro_people" on public.carometro_people
    for select using (
        exists (select 1 from public.carometro_sectors s
                where s.id = carometro_people.sector_id
                  and public.can_view_carometro_sector(s.id, s.patient_id))
    );
