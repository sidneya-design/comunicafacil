-- ========================================================
-- Multi-tenant: escopa books e medias por paciente (Fase 6)
-- ========================================================
-- Ver /Users/geniantis/.claude/plans/nifty-doodling-stearns.md (Fase 6).
-- Mesmo padrão de exercises (Fase 3): 100% aditivo, company_id/patient_id
-- nulos (todo livro/mídia de hoje) mantêm a MESMA visibilidade pública que
-- já existe. Nomes reais das policies de produção confirmados via backup
-- antes de escrever esta migration (mesmo cuidado da Fase 3/4).
--
-- Escrita: NÃO precisa de policy nova pro médico. "Escrita pública de
-- books" (INSERT, role public, check true) e "Atualização de books para
-- autenticados" (UPDATE, using true) já liberam geral — mais permissivo
-- que qualquer coisa que criaríamos. Em medias, "Modificação isolada por
-- perfil em medias" (user_id = auth.uid() OR is_editor_or_admin()) já
-- libera qualquer autenticado escrever linhas com o próprio user_id. Não
-- mexemos nessas policies de escrita pré-existentes — fora de escopo.

alter table public.books
    add column if not exists company_id uuid references public.companies(id) on delete restrict,
    add column if not exists patient_id uuid references public.patients(id) on delete restrict;

drop policy if exists "Leitura pública de books" on public.books;
create policy "Leitura pública de books" on public.books
    for select using (public.can_view_scoped_content(company_id, patient_id));

alter table public.medias
    add column if not exists company_id uuid references public.companies(id) on delete restrict,
    add column if not exists patient_id uuid references public.patients(id) on delete restrict;

drop policy if exists "Leitura pública de medias" on public.medias;
create policy "Leitura pública de medias" on public.medias
    for select using (public.can_view_scoped_content(company_id, patient_id));
