-- ========================================================
-- Multi-tenant: banco de Livros do médico + liberação por paciente
-- ========================================================
-- Mesmo padrão de exercises/topics/virtues/medias (Fases 7/19-24). Livro
-- não tinha passado por essa transição: hoje nasce direto público (upload
-- fora de contexto de paciente) ou direto vinculado a um paciente (upload
-- de dentro do perfil dele) — sem etapa intermediária de liberação. Ver
-- ~/.claude/plans/spicy-percolating-leaf.md.
--
-- books.id é uuid (diferente de exercises/topics/virtues/medias, que usam
-- bigint identity) — patient_book_flags.book_id acompanha esse tipo.
--
-- Vai direto pra forma final de can_view_* (com o gate is_doctor() pro
-- conteúdo global, igual ao que medias/exercises só ganharam depois via
-- 20260823000000) — sem motivo pra reproduzir aqui o hiato inseguro que
-- eles tiveram por um tempo.
--
-- Sem migration de escrita nova: "Modificação isolada por perfil em
-- books" (uploaded_by = auth.uid() OR is_editor_or_admin() OR
-- is_doctor_of_patient(patient_id)) já cobre o médico gerenciar o próprio
-- upload, já que todo livro do banco também grava uploaded_by.
--
-- Efeito colateral esperado e confirmado com o usuário: livros hoje na
-- "biblioteca geral" (todos os 3 campos nulos) somem da visão do paciente
-- até o médico religar cada um na tela nova — sem backfill automático,
-- igual já aconteceu nas migrations anteriores desse padrão (nenhuma fez
-- backfill).

alter table public.books add column if not exists doctor_user_id uuid references auth.users(id);

create table if not exists public.patient_book_flags (
    patient_id uuid not null references public.patients(id) on delete cascade,
    book_id uuid not null references public.books(id) on delete cascade,
    visible boolean not null default true,
    updated_at timestamptz not null default now(),
    primary key (patient_id, book_id)
);
alter table public.patient_book_flags enable row level security;

create policy "Leitura de patient_book_flags" on public.patient_book_flags
    for select to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id) or patient_id = public.current_patient_id());

create policy "Escrita de médicos em patient_book_flags de seus pacientes"
    on public.patient_book_flags for all to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id))
    with check (public.is_admin() or public.is_doctor_of_patient(patient_id));

create or replace function public.can_view_book(
    target_book_id uuid,
    target_company_id uuid,
    target_patient_id uuid,
    target_doctor_user_id uuid
)
returns boolean language sql stable security definer set search_path = public
as $$
    select
        public.is_admin()
        -- médico vê todo conteúdo global do admin, pra navegar/liberar
        or (target_company_id is null and target_patient_id is null and target_doctor_user_id is null and public.is_doctor())
        or (target_patient_id is not null and public.current_patient_id() = target_patient_id)
        or (target_patient_id is not null and public.is_doctor_of_patient(target_patient_id))
        or (target_doctor_user_id is not null and target_doctor_user_id = auth.uid())
        or (target_company_id is not null and target_patient_id is null
            and public.user_company_id() = target_company_id)
        -- paciente vê livro (do próprio médico OU global do admin) só se
        -- o médico dele liberou especificamente
        or exists (
            select 1 from public.patient_book_flags pbf
            join public.patients p on p.id = pbf.patient_id
            where pbf.book_id = target_book_id
              and p.user_id = auth.uid()
              and pbf.visible = true
        );
$$;
grant execute on function public.can_view_book(uuid, uuid, uuid, uuid) to authenticated;

drop policy if exists "Leitura pública de books" on public.books;
create policy "Leitura pública de books" on public.books
    for select using (public.can_view_book(id, company_id, patient_id, doctor_user_id));
