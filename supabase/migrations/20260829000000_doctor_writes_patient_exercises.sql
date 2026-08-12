-- ========================================================
-- Médico responsável pelo paciente edita exercícios escopados a ele
-- ========================================================
-- Faltava: exercises com patient_id preenchido (mas doctor_user_id nulo —
-- ex.: migrados direto pra um paciente, sem passar pelo banco do médico)
-- só tinham policy de escrita pra admin ou pro dono via doctor_user_id.
-- Médico responsável pelo paciente (is_doctor_of_patient) não conseguia
-- editar nada com patient_id de um paciente seu. Escopo: só o médico
-- responsável — paciente continua sem escrita (só leitura/uso), mesmo
-- padrão do resto do app (equipe edita, paciente consome).

create policy "Escrita de médicos em exercises de seus pacientes" on public.exercises
    for all to authenticated
    using (patient_id is not null and public.is_doctor_of_patient(patient_id))
    with check (patient_id is not null and public.is_doctor_of_patient(patient_id));

create policy "Escrita de médicos em exercise_items de seus pacientes" on public.exercise_items
    for all to authenticated
    using (exists (select 1 from public.exercises e where e.id = exercise_items.exercise_id
                    and e.patient_id is not null and public.is_doctor_of_patient(e.patient_id)))
    with check (exists (select 1 from public.exercises e where e.id = exercise_items.exercise_id
                    and e.patient_id is not null and public.is_doctor_of_patient(e.patient_id)));
