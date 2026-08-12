-- ========================================================
-- Reconhecimento de Palavras / Imagem: vários decks por médico
-- ========================================================
-- Até agora esses 2 jogos eram um container único por médico (get-or-create
-- por seed_key fixa) — todo cadastro entrava no mesmo. Pedido: médico criar
-- vários decks distintos do mesmo tipo (ex: "Animais", "Cores"), cada um
-- virando um card próprio, liberável por paciente individualmente — mesmo
-- padrão que os exercícios normais (slide-deck) já têm.
--
-- game_kind marca o tipo pra front saber que abrir/como jogar, sem depender
-- mais de seed_key (que é único por linha — não dava pra ter 2 decks do
-- mesmo tipo). Deck novo nasce com seed_key nulo; containers singleton
-- antigos (seed_key preenchido) continuam existindo, migrados abaixo pra já
-- aparecerem como o primeiro deck de cada tipo, sem perder conteúdo.

alter table public.exercises add column if not exists game_kind text;
alter table public.exercises add constraint exercises_game_kind_check
    check (game_kind is null or game_kind in ('naming', 'afasia'));

-- Migra os containers singleton existentes (se houver) pro modelo novo:
-- ganham game_kind, o seed_key sai (não precisa mais, e assim libera outros
-- decks do mesmo médico usarem a mesma seed_key base se algum código antigo
-- ainda a criar por engano).
update public.exercises set game_kind = 'naming', seed_key = null
    where seed_key is not null and (seed_key = 'naming-game-container' or seed_key like 'naming-game-container:doctor:%');
update public.exercises set game_kind = 'afasia', seed_key = null
    where seed_key is not null and (seed_key = 'afasia-game-container' or seed_key like 'afasia-game-container:doctor:%');
