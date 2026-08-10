-- ========================================================
-- Multi-tenant: médico cria/edita o Carômetro dos próprios pacientes
-- ========================================================
-- Ver /Users/geniantis/.claude/plans/nifty-doodling-stearns.md (Fase 5c).
-- 100% aditivo: só ADICIONA uma policy de escrita pro médico. As policies
-- de escrita já existentes ("Admins escrevem carometro_sectors/people",
-- que liberam editor OU admin) ficam intocadas.

create policy "Escrita de médicos em carometro_sectors de seus pacientes"
    on public.carometro_sectors for all to authenticated
    using (patient_id is not null and public.is_doctor_of_patient(patient_id))
    with check (patient_id is not null and public.is_doctor_of_patient(patient_id));

create policy "Escrita de médicos em carometro_people de seus pacientes"
    on public.carometro_people for all to authenticated
    using (exists (select 1 from public.carometro_sectors s
                   where s.id = carometro_people.sector_id
                     and s.patient_id is not null and public.is_doctor_of_patient(s.patient_id)))
    with check (exists (select 1 from public.carometro_sectors s
                   where s.id = carometro_people.sector_id
                     and s.patient_id is not null and public.is_doctor_of_patient(s.patient_id)));
