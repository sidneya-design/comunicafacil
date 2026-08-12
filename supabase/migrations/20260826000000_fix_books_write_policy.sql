-- ========================================================
-- Corrige policies de escrita legadas de books (achado da Fase 6, não
-- corrigido na hora por estar fora de escopo — ver nota em
-- 20260816000000_books_medias_tenant_scope.sql)
-- ========================================================
-- Em produção (confirmado via backup) a escrita de `books` está liberada
-- por duas policies:
--   "Escrita pública de books"          — INSERT, role PUBLIC, check(true)
--   "Atualização de books para autenticados" — UPDATE, using(true)
-- Isso é pior que o bug já corrigido em exercises (Fase 7): ali o
-- `using(true)` exigia pelo menos `authenticated`; aqui o INSERT nem exige
-- login. Qualquer pessoa (mesmo sem conta) insere linha em `books`, e
-- qualquer usuário autenticado edita/apaga QUALQUER livro — inclusive de
-- pacientes/médicos sem relação nenhuma.
--
-- Diferente de exercises/medias, books NUNCA teve uma policy de escrita
-- isolada por dono rodando em paralelo (a Fase 6 dependeu inteiramente
-- dessa policy aberta pro médico conseguir subir livro pro próprio
-- paciente) — não dá pra só apertar pra is_admin() como em exercises, isso
-- quebraria o upload de livro de todo médico. Em vez disso: introduz a
-- mesma policy "isolada por perfil" que exercises/medias já têm
-- (uploaded_by = auth.uid() OR is_editor_or_admin()), mais uma cláusula
-- extra pra não regredir livros já existentes hoje sem uploaded_by
-- preenchido (upload nunca gravou essa coluna até agora — corrigido junto
-- em book-reader.js): médico responsável pelo paciente do livro continua
-- podendo editar/apagar, mesmo em linhas antigas com uploaded_by nulo.
drop policy if exists "Escrita pública de books" on public.books;
drop policy if exists "Atualização de books para autenticados" on public.books;

create policy "Modificação isolada por perfil em books" on public.books
    for all to authenticated
    using (
        uploaded_by = auth.uid()
        or public.is_editor_or_admin()
        or (patient_id is not null and public.is_doctor_of_patient(patient_id))
    )
    with check (
        uploaded_by = auth.uid()
        or public.is_editor_or_admin()
        or (patient_id is not null and public.is_doctor_of_patient(patient_id))
    );
