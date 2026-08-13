-- ========================================================
-- Progresso de leitura por usuário (não mais na linha do livro)
-- ========================================================
-- `books.last_page/last_location/last_read_at` gravava o progresso na
-- própria linha do livro — compartilhado por todo mundo que lê aquele
-- livro. Dois problemas: (1) dono é quem controla a policy de UPDATE de
-- `books`, então quem lê um livro que não é seu (banco de outro médico,
-- catálogo global) nunca conseguia salvar progresso nem remover da fileira
-- "Continuar Lendo" — falhava silencioso ou com "sessão sem permissão"; (2)
-- dois leitores diferentes do mesmo livro global sobrescreviam o progresso
-- um do outro.
--
-- Nova tabela por usuário, sempre editável pelo próprio dono da leitura,
-- sem depender de quem é dono do livro. "Remover de Continuar Lendo" vira
-- só apagar a própria linha aqui — reaparece se o usuário ler de novo.
--
-- Sem migração dos dados antigos de books.last_page/last_location/
-- last_read_at (já eram compartilhados/pouco confiáveis) — mesmo padrão de
-- corte limpo já usado nas outras migrations de hoje.

create table if not exists public.book_reading_progress (
    user_id uuid not null references auth.users(id) on delete cascade,
    book_id uuid not null references public.books(id) on delete cascade,
    last_page integer,
    last_location text,
    last_read_at timestamptz not null default now(),
    primary key (user_id, book_id)
);
alter table public.book_reading_progress enable row level security;

create policy "Usuário gerencia o próprio progresso de leitura"
    on public.book_reading_progress for all to authenticated
    using (user_id = auth.uid())
    with check (user_id = auth.uid());
