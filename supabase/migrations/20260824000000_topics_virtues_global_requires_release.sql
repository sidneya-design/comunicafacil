-- ========================================================
-- Mesmo conceito da Fase 21 (exercises/medias), agora em topics/virtues
-- ========================================================
-- Conteúdo global do admin em Tópicos e Virtudes também deixa de ser
-- automático pro paciente — precisa de liberação do próprio médico dele,
-- mesma lista/mecanismo do banco próprio (patient_topic_flags/
-- patient_virtue_flags). Médico continua vendo tudo global, pra poder
-- navegar/escolher o que liberar.

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
