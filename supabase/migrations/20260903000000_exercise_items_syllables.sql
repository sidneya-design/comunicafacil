-- ========================================================
-- Adiciona syllables em exercise_items
-- ========================================================
-- Novo campo opcional pro slide de exercício: o médico digita a palavra já
-- separada por sílaba (ex.: "ca-sa"). Quando preenchido, o player mostra
-- esse texto no lugar da imagem/pictograma automático (ver app.js,
-- renderCurrentPlaylistItem). Slides sem esse campo continuam com o
-- comportamento de imagem de sempre.
alter table public.exercise_items
    add column if not exists syllables text;
