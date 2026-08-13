-- ========================================================
-- Banco privado do médico fica privado até de admin
-- ========================================================
-- can_view_book (20260901000002) copiou o padrão de exercises/topics/
-- virtues/medias: is_admin() sempre vê tudo, sem exceção — pensado pra
-- admin poder moderar/navegar todo conteúdo. Pedido explícito aqui, ao
-- contrário dos outros tipos: livro que um médico sobe pro próprio banco
-- (doctor_user_id preenchido, ainda não liberado pra ninguém) deve ficar
-- privado até do admin — só o próprio médico vê, até liberar pra um
-- paciente (aí o paciente também passa a ver, via patient_book_flags).
--
-- Não mexe no resto: admin continua vendo catálogo global, livros
-- escopados a paciente/empresa. Também não mexe na policy de ESCRITA
-- (ver 20260901000006 — essa aqui é só sobre aparecer na listagem).

create or replace function public.can_view_book(
    target_book_id uuid,
    target_company_id uuid,
    target_patient_id uuid,
    target_doctor_user_id uuid
)
returns boolean language sql stable security definer set search_path = public
as $$
    select
        (target_doctor_user_id is null and public.is_admin())
        or (target_company_id is null and target_patient_id is null and target_doctor_user_id is null and public.is_doctor())
        or (target_patient_id is not null and public.current_patient_id() = target_patient_id)
        or (target_patient_id is not null and public.is_doctor_of_patient(target_patient_id))
        or (target_doctor_user_id is not null and target_doctor_user_id = auth.uid())
        or (target_company_id is not null and target_patient_id is null
            and public.user_company_id() = target_company_id)
        or exists (
            select 1 from public.patient_book_flags pbf
            join public.patients p on p.id = pbf.patient_id
            where pbf.book_id = target_book_id
              and p.user_id = auth.uid()
              and pbf.visible = true
        );
$$;
