-- ========================================================
-- Adiciona uploaded_by em books (faltou na 20260826000000)
-- ========================================================
-- A migration 20260826000000_fix_books_write_policy.sql criou a policy
-- "Modificação isolada por perfil em books" usando `uploaded_by = auth.uid()`
-- e o comentário dela diz que o `book-reader.js` foi ajustado pra gravar
-- essa coluna no INSERT — mas nenhuma migration chegou a criar a coluna em
-- si. Checado ao vivo em staging (`information_schema.columns`): a coluna
-- não existe. Resultado: 20260826000000 nunca rodou de verdade (teria
-- falhado na criação da policy, coluna inexistente), e as policies antigas
-- e abertas de INSERT/UPDATE seguem valendo em produção/staging até hoje.
--
-- Cria a coluna antes de (re)aplicar a policy de 20260826000000. Livros
-- antigos ficam com uploaded_by nulo — já previsto na policy (fallback por
-- is_editor_or_admin()/is_doctor_of_patient(patient_id)).
alter table public.books
    add column if not exists uploaded_by uuid references auth.users(id) on delete set null;
