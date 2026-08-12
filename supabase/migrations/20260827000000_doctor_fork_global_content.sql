-- ========================================================
-- Médico edita conteúdo global do admin via fork (cópia própria)
-- ========================================================
-- Pedido: médico poder editar exercícios/tópicos/virtudes que o admin
-- disponibilizou (hoje só dá pra liberar pro paciente, não editar — a
-- linha é compartilhada por todos os médicos). Decisão: em vez de deixar
-- editar a linha global direto (um médico quebraria o que outro médico/
-- paciente está usando), a primeira edição cria uma cópia isolada no banco
-- do próprio médico (doctor_user_id = ele), e as edições seguintes na
-- mesma pasta/exercício reaproveitam essa cópia em vez de duplicar de novo.
--
-- forked_from aponta pra linha global de origem. Nula pra tudo que não é
-- fork (100% aditivo — nenhuma linha existente muda). Índice parcial só
-- nas linhas que são fork, pra achar rápido "esse médico já tem cópia
-- dessa pasta?" (where doctor_user_id = me and forked_from = origem).

alter table public.exercises add column if not exists forked_from bigint references public.exercises(id) on delete set null;
alter table public.topics add column if not exists forked_from bigint references public.topics(id) on delete set null;
alter table public.virtues add column if not exists forked_from bigint references public.virtues(id) on delete set null;

create index if not exists exercises_forked_from_idx on public.exercises (doctor_user_id, forked_from) where forked_from is not null;
create index if not exists topics_forked_from_idx on public.topics (doctor_user_id, forked_from) where forked_from is not null;
create index if not exists virtues_forked_from_idx on public.virtues (doctor_user_id, forked_from) where forked_from is not null;
