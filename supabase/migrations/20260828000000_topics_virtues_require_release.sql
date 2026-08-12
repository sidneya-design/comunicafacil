-- ========================================================
-- Tópicos e Virtudes passam a exigir liberação do médico
-- ========================================================
-- Extensão explícita do que a 20260823000000 fez pra exercises/medias:
-- naquela hora, Tópicos e Virtudes ficaram de fora por decisão consciente
-- ("fica com o comportamento de hoje até um pedido explícito de
-- estender"). Esse pedido chegou agora — paciente só vê pasta/categoria
-- global do admin se o PRÓPRIO médico liberar (patient_topic_flags/
-- patient_virtue_flags, que já existem desde as Fases 17-18 mas só eram
-- checados pra conteúdo com doctor_user_id preenchido, nunca pro global).
--
-- Médico continua vendo todo conteúdo global sem precisar de liberação
-- (precisa disso pra escolher o que liberar). Pasta/categoria já vinculada
-- direto a um paciente (patient_id preenchido) não muda nada.

create or replace function public.can_view_topic(
    target_topic_id bigint,
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
            select 1 from public.patient_topic_flags ptf
            join public.patients p on p.id = ptf.patient_id
            where ptf.topic_id = target_topic_id
              and p.user_id = auth.uid()
              and ptf.visible = true
        );
$$;

create or replace function public.can_view_virtue(
    target_virtue_id bigint,
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
            select 1 from public.patient_virtue_flags pvf
            join public.patients p on p.id = pvf.patient_id
            where pvf.virtue_id = target_virtue_id
              and p.user_id = auth.uid()
              and pvf.visible = true
        );
$$;
