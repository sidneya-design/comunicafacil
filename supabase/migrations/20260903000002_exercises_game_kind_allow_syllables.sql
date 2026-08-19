-- ========================================================
-- Libera game_kind = 'syllables' em exercises
-- ========================================================
-- exercises_game_kind_check (20260831000000_multi_deck_naming_afasia.sql)
-- só permitia 'naming'/'afasia'. O Exercício de Sílabas (novo tipo,
-- saveSyllablesExerciseToDB em app.js) usa game_kind = 'syllables' e
-- estava sendo barrado nessa constraint na hora de salvar — reproduzido
-- direto no banco de staging: "new row for relation exercises violates
-- check constraint exercises_game_kind_check".
alter table public.exercises drop constraint if exists exercises_game_kind_check;
alter table public.exercises add constraint exercises_game_kind_check
    check (game_kind is null or game_kind in ('naming', 'afasia', 'syllables'));
