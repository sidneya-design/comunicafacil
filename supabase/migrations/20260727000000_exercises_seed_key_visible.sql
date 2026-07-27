-- ========================================================
-- Exercícios: compatibilidade com seed_key e visible
-- ========================================================
-- O front usa seed_key para identificar containers dedicados de
-- exercícios e visible para controlar publicação. Em ambientes onde a
-- tabela exercises já existia sem essas colunas, o app caía para o
-- fallback local. Esta migration normaliza o schema e também faz um
-- backfill dos exercícios já conhecidos pelo título.

alter table if exists public.exercises
    add column if not exists seed_key text;

alter table if exists public.exercises
    add column if not exists visible boolean not null default false;

update public.exercises
set visible = coalesce(visible, false);

update public.exercises
set seed_key = 'memory-cards-container'
where coalesce(seed_key, '') = '' and title like 'Cartas do Jogo da Memória%';

update public.exercises
set seed_key = 'alphabet-memory-cards-container'
where coalesce(seed_key, '') = '' and title like 'Cartas do Jogo da Memória do Alfabeto%';

update public.exercises
set seed_key = 'naming-game-container'
where coalesce(seed_key, '') = '' and title like 'Jogo de Reconhecimento%';

update public.exercises
set seed_key = 'afasia-game-container'
where coalesce(seed_key, '') = '' and title like 'Reconhecimento de Imagem%';

update public.exercises
set seed_key = 'jogo2-cards-container'
where coalesce(seed_key, '') = '' and title like 'Cartas da Trilha de Aprendizado de Forças%';

create index if not exists exercises_seed_key_idx
    on public.exercises (seed_key)
    where seed_key is not null;
