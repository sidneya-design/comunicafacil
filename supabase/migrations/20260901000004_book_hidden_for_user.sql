-- ========================================================
-- Ocultar livro da própria biblioteca (não apaga, não afeta ninguém)
-- ========================================================
-- Médico pode não querer ver, na biblioteca geral dele, um livro global do
-- admin (ou de outro médico) — sem ser dono, não pode apagar de verdade
-- (apagaria pra todo mundo). Isso dá uma opção de "excluir só pra mim":
-- oculta da lista de quem clicou, sem tocar no livro nem afetar outros
-- médicos/pacientes. Mesmo espírito de book_reading_progress
-- (20260901000003) — ação sempre permitida pro próprio usuário, não
-- depende de quem é dono do livro.

create table if not exists public.book_hidden_for_user (
    user_id uuid not null references auth.users(id) on delete cascade,
    book_id uuid not null references public.books(id) on delete cascade,
    hidden_at timestamptz not null default now(),
    primary key (user_id, book_id)
);
alter table public.book_hidden_for_user enable row level security;

create policy "Usuário gerencia os próprios livros ocultos"
    on public.book_hidden_for_user for all to authenticated
    using (user_id = auth.uid())
    with check (user_id = auth.uid());
