-- ========================================================
-- Hardening (Fase 14): seed_key único por linha em exercises
-- ========================================================
-- Fases 10-13 passaram a derivar seed_keys por médico a partir de uma base
-- fixa (ex.: 'naming-game-container:doctor:<uuid>') pra containers de jogo
-- (naming/afasia/jogo2/complete-frase) ficarem isolados por médico. Sem uma
-- constraint de unicidade, uma corrida de "getOrCreateGameContainer" (dois
-- cliques rápidos em "Novo Exercício"/"Gerenciar" antes do primeiro insert
-- voltar) poderia criar dois containers com a mesma seed_key pro mesmo
-- médico, e o resolveGameContainer/lastMergedExercises.find(...) do
-- front passaria a pegar um dos dois de forma imprevisível.
--
-- 100% aditivo: só cria a constraint, não toca em nenhuma linha existente.
-- Confirmado antes de aplicar (staging, 2026-08-11) que não há duplicatas:
--   select seed_key, count(*) from exercises
--   where seed_key is not null group by 1 having count(*) > 1;
-- retornou vazio. Se essa mesma checagem não retornar vazio em produção na
-- hora do rollout, investigar as duplicatas antes de aplicar esta migration
-- lá — não redefinir os dados só pra fazer a constraint passar.

create unique index if not exists exercises_seed_key_uniq
    on public.exercises (seed_key)
    where seed_key is not null;
