-- ========================================================
-- Estilo de texto (tamanho/cor/fonte) pro Exercício de Sílabas
-- ========================================================
-- Novo tipo de exercício (game_kind = 'syllables', ver app.js
-- saveSyllablesExerciseToDB) onde tamanho/cor/fonte do texto valem pra todo
-- o deck de uma vez (não por palavra) — aplicado tanto na palavra escrita
-- quanto no texto em sílabas na apresentação (renderCurrentPlaylistItem).
alter table public.exercises
    add column if not exists syllables_size integer,
    add column if not exists syllables_color text,
    add column if not exists syllables_font text;
