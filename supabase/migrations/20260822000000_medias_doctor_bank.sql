-- ========================================================
-- Multi-tenant: banco de Mídias do médico + liberação por paciente
-- ========================================================
-- Ver ~/.claude/plans/floofy-crafting-fiddle.md (Fase 19). Mesmo padrão de
-- exercises/topics/virtues, mas SEM policy de escrita nova: a existente
-- "Modificação isolada por perfil em medias" (user_id = auth.uid() OR
-- is_editor_or_admin()) já libera um médico escrever linha com o próprio
-- user_id — só a leitura precisa de uma função dedicada.

alter table public.medias
    add column if not exists doctor_user_id uuid references auth.users(id);

create table if not exists public.patient_media_flags (
    patient_id uuid not null references public.patients(id) on delete cascade,
    media_id bigint not null references public.medias(id) on delete cascade,
    visible boolean not null default true,
    updated_at timestamptz not null default now(),
    primary key (patient_id, media_id)
);
alter table public.patient_media_flags enable row level security;

create policy "Leitura de patient_media_flags" on public.patient_media_flags
    for select to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id)
           or patient_id = public.current_patient_id());

create policy "Escrita de médicos em patient_media_flags de seus pacientes"
    on public.patient_media_flags for all to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id))
    with check (public.is_admin() or public.is_doctor_of_patient(patient_id));

create or replace function public.can_view_media(
    target_media_id bigint,
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
                select 1 from public.patient_media_flags pmf
                join public.patients p on p.id = pmf.patient_id
                where pmf.media_id = target_media_id
                  and p.user_id = auth.uid()
                  and pmf.visible = true
            ))
        or (target_company_id is not null and target_patient_id is null
            and public.user_company_id() = target_company_id);
$$;
grant execute on function public.can_view_media(bigint, uuid, uuid, uuid) to authenticated;

-- Substitui só "Leitura pública de medias" (can_view_scoped_content) pela
-- versão com granularidade de médico. "Leitura isolada por perfil em
-- medias" (user_id = auth.uid() OR is_editor_or_admin()) fica intocada —
-- garante que quem fez upload sempre continua vendo o próprio arquivo.
drop policy if exists "Leitura pública de medias" on public.medias;
create policy "Leitura pública de medias" on public.medias
    for select using (public.can_view_media(id, company_id, patient_id, doctor_user_id));
