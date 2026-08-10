-- ========================================================
-- Multi-tenant: escopa exercises/exercise_items por empresa/paciente
-- ========================================================
-- Ver /Users/geniantis/.claude/plans/nifty-doodling-stearns.md (Fase 3).
-- 100% aditivo: company_id/patient_id nulos (todo exercício de hoje) mantêm
-- a MESMA visibilidade pública que já existe — só fica restrito quando
-- alguém explicitamente atribuir um desses campos a um exercício.

alter table public.exercises
    add column if not exists company_id uuid references public.companies(id) on delete restrict,
    add column if not exists patient_id uuid references public.patients(id) on delete restrict;

create or replace function public.can_view_scoped_content(target_company_id uuid, target_patient_id uuid)
returns boolean language sql stable security definer set search_path = public
as $$
    select
        (target_company_id is null and target_patient_id is null)  -- padrão: igual a hoje
        or public.is_admin()
        or (target_patient_id is not null and public.current_patient_id() = target_patient_id)
        or (target_patient_id is not null and public.is_doctor_of_patient(target_patient_id))
        or (target_company_id is not null and target_patient_id is null
            and public.user_company_id() = target_company_id);
$$;
grant execute on function public.can_view_scoped_content(uuid, uuid) to authenticated;

-- Substitui a policy pública existente. IMPORTANTE: em produção o nome real
-- desta policy é "Permitir leitura pública de exercises" (não o nome que o
-- histórico de migrations deste repo sugeria — ela foi criada fora daqui).
-- Sem derrubar a policy pelo nome CERTO, a antiga (using true) continua
-- valendo em paralelo (policies de SELECT se somam por OR) e a restrição
-- nova não teria efeito nenhum. Confirmado via dump direto da produção antes
-- de aplicar esta migration.
-- Pra toda linha de hoje (company_id/patient_id nulos), a 1ª condição do
-- can_view_scoped_content já é verdadeira — visibilidade idêntica a "using
-- (true)" pra 100% dos dados atuais.
drop policy if exists "Permitir leitura pública de exercises" on public.exercises;
drop policy if exists "Leitura pública de exercises" on public.exercises;
create policy "Leitura pública de exercises" on public.exercises
    for select using (public.can_view_scoped_content(company_id, patient_id));

-- Não mexemos nas policies pré-existentes "Leitura isolada por perfil em
-- exercises" / "Modificação isolada por perfil em exercises" (baseadas em
-- exercises.user_id) nem em "Permitir modificação para admins em exercises"
-- — são de um mecanismo anterior, não documentado neste repo, e alterá-las
-- está fora do escopo desta mudança (risco de regressão em algo que não
-- fomos nós que construímos).

drop policy if exists "Leitura pública de exercise_items" on public.exercise_items;
create policy "Leitura pública de exercise_items" on public.exercise_items
    for select using (
        exists (select 1 from public.exercises e where e.id = exercise_items.exercise_id
                and public.can_view_scoped_content(e.company_id, e.patient_id))
    );
-- Sem isso, exercise_items vazaria o conteúdo de um exercício privado mesmo
-- com "exercises" já restrito.

drop policy if exists "Escrita de médicos em exercises de seus pacientes" on public.exercises;
create policy "Escrita de médicos em exercises de seus pacientes" on public.exercises
    for all to authenticated
    using (patient_id is not null and public.is_doctor_of_patient(patient_id))
    with check (patient_id is not null and public.is_doctor_of_patient(patient_id));

drop policy if exists "Escrita de médicos em exercise_items de seus pacientes" on public.exercise_items;
create policy "Escrita de médicos em exercise_items de seus pacientes" on public.exercise_items
    for all to authenticated
    using (exists (select 1 from public.exercises e where e.id = exercise_items.exercise_id
                    and e.patient_id is not null and public.is_doctor_of_patient(e.patient_id)))
    with check (exists (select 1 from public.exercises e where e.id = exercise_items.exercise_id
                    and e.patient_id is not null and public.is_doctor_of_patient(e.patient_id)));
