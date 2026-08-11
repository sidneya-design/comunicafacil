-- ========================================================
-- Conteúdo global do admin passa a exigir liberação do médico
-- ========================================================
-- Até agora, Vídeo/Exercício/Jogo (todos vivem em exercises, exceto vídeo
-- que é medias) criados pelo admin sem médico dono (doctor_user_id null)
-- ficavam automaticamente visíveis pra QUALQUER paciente, sem passar pelo
-- médico dele. Pedido explícito: isso muda — paciente só vê conteúdo do
-- admin se o PRÓPRIO médico liberar (mesma lista de liberação do banco
-- próprio do médico, patient_exercise_flags/patient_media_flags).
--
-- Decisão confirmada: contas sem médico nem paciente (roles viewer/editor,
-- uso individual fora de clínica) TAMBÉM deixam de ver conteúdo global por
-- padrão — não há quem libere pra elas, então ficam sem ver até que algo
-- mude nesse modelo (fora de escopo aqui).
--
-- Médico continua vendo todo conteúdo global do admin sem precisar de
-- liberação — precisa disso pra poder navegar/escolher o que liberar (e
-- pro "Banco de Prontos" continuar funcionando).
--
-- Escopo desta migration: só exercises/exercise_items e medias (Vídeo,
-- Exercício, Jogo — jogos vivem em exercises via seed_key). Tópicos e
-- Virtudes NÃO foram pedidos aqui, ficam com o comportamento de hoje
-- (global = público) até um pedido explícito de estender.

create or replace function public.can_view_exercise(
    target_exercise_id bigint,
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
        -- paciente vê exercício/jogo (do próprio médico OU global do admin)
        -- só se o médico dele liberou especificamente
        or exists (
            select 1 from public.patient_exercise_flags pef
            join public.patients p on p.id = pef.patient_id
            where pef.exercise_id = target_exercise_id
              and p.user_id = auth.uid()
              and pef.visible = true
        );
$$;

create or replace function public.can_view_media(
    target_media_id bigint,
    target_company_id uuid,
    target_patient_id uuid,
    target_doctor_user_id uuid
)
returns boolean language sql stable security definer set search_path = public
as $$
    select
        public.is_admin()
        or (target_company_id is null and target_patient_id is null and target_doctor_user_id is null and public.is_doctor())
        or (target_patient_id is not null and public.current_patient_id() = target_patient_id)
        or (target_patient_id is not null and public.is_doctor_of_patient(target_patient_id))
        or (target_doctor_user_id is not null and target_doctor_user_id = auth.uid())
        or (target_company_id is not null and target_patient_id is null
            and public.user_company_id() = target_company_id)
        or exists (
            select 1 from public.patient_media_flags pmf
            join public.patients p on p.id = pmf.patient_id
            where pmf.media_id = target_media_id
              and p.user_id = auth.uid()
              and pmf.visible = true
        );
$$;
