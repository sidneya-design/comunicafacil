-- ========================================================
-- RBAC: papéis de usuário (viewer / editor / admin)
-- ========================================================
-- Substitui o antigo campo booleano user_roles.is_admin por um papel
-- com 3 níveis, usado tanto pelo front (mostrar/esconder botões de
-- edição e a aba Admin) quanto pelas policies de RLS abaixo (proteção
-- real, já que o app é 100% client-side com a anon key exposta).
--
-- Nota: schema.sql (core_cards, virtues, virtue_items, topics,
-- topic_items) descreve um schema que NUNCA foi aplicado neste projeto
-- Supabase — hoje essas áreas rodam só em IndexedDB local. As tabelas
-- que realmente existem em produção são: exercises, exercise_items,
-- medias, game_flags, user_roles. Por isso todo bloco abaixo é
-- condicional a to_regclass(...) is not null: aplica nas que existem
-- agora e não quebra quando/se as outras forem criadas depois.

-- 1. Tabela user_roles: ajusta a que já existe (user_id uuid PK ->
-- auth.users, is_admin boolean) para o novo modelo de papel.
alter table public.user_roles add column if not exists role text;

update public.user_roles set role = case when is_admin then 'admin' else 'viewer' end
where role is null;

alter table public.user_roles alter column role set default 'viewer';
alter table public.user_roles alter column role set not null;

alter table public.user_roles drop constraint if exists user_roles_role_check;
alter table public.user_roles
    add constraint user_roles_role_check check (role in ('viewer', 'editor', 'admin'));

-- A FK original não tinha ON DELETE CASCADE: deletar um usuário do Auth
-- pela Edge Function admin-users falharia com violação de FK enquanto
-- existisse a linha correspondente em user_roles.
alter table public.user_roles drop constraint if exists user_roles_user_id_fkey;
alter table public.user_roles
    add constraint user_roles_user_id_fkey foreign key (user_id) references auth.users(id) on delete cascade;

-- Backfill de usuários que já existem no Auth mas nunca ganharam linha
-- em user_roles (hoje: Albert, Eduardo, Vinicius) — ficam como 'viewer'.
insert into public.user_roles (user_id, role)
select u.id, 'viewer' from auth.users u
where not exists (select 1 from public.user_roles ur where ur.user_id = u.id);

-- Bloqueio explícito herdado do app.js: este e-mail nunca deve virar
-- editor/admin por engano.
update public.user_roles
set role = 'viewer'
where role <> 'viewer'
  and user_id = (select id from auth.users where email = 'albert.h@geniantis.org');

-- is_admin fica obsoleto a partir de agora (role é a fonte da verdade).
alter table public.user_roles drop column if exists is_admin;

-- 2. Trigger: todo novo usuário do Supabase Auth ganha automaticamente
-- uma linha em user_roles com papel 'viewer' (evita usuário sem role
-- ao ser criado fora do painel admin, ex: direto no dashboard).
create or replace function public.handle_new_user_role()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
    insert into public.user_roles (user_id, role)
    values (new.id, 'viewer')
    on conflict (user_id) do nothing;
    return new;
end;
$$;

drop trigger if exists on_auth_user_created_role on auth.users;
create trigger on_auth_user_created_role
    after insert on auth.users
    for each row execute function public.handle_new_user_role();

-- 3. Helpers usados nas policies de RLS. security definer + search_path
-- fixo para não recursar em RLS e não ficar vulnerável a search_path hijack.
create or replace function public.is_editor_or_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
    select exists (
        select 1 from public.user_roles
        where user_id = auth.uid() and role in ('editor', 'admin')
    );
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
    select exists (
        select 1 from public.user_roles
        where user_id = auth.uid() and role = 'admin'
    );
$$;

grant execute on function public.is_editor_or_admin() to authenticated;
grant execute on function public.is_admin() to authenticated;

-- 4. RLS da própria tabela user_roles: hoje "Permitir leitura publica
-- dos roles" deixa QUALQUER UM (até anon, sem login) ler o papel de
-- todo mundo. Troca por: cada usuário só lê o próprio papel. Toda
-- escrita (criar/deletar usuário, trocar papel) acontece
-- exclusivamente pela Edge Function admin-users, que usa a
-- service_role key e portanto ignora RLS — não existe policy de
-- insert/update/delete aqui de propósito.
drop policy if exists "Permitir leitura publica dos roles" on public.user_roles;
drop policy if exists "select own role" on public.user_roles;
create policy "select own role" on public.user_roles
    for select to authenticated
    using (user_id = auth.uid());

-- 5. Tabelas de conteúdo: hoje "Enable all access for all users on X"
-- libera leitura E ESCRITA para o role "public" do Postgres, ou seja,
-- inclusive requisições feitas só com a anon key, sem nenhum login.
-- A partir daqui: leitura pública continua (o board precisa ser lido
-- sem fricção), escrita passa a exigir papel editor/admin.
do $$
declare
    t text;
begin
    foreach t in array array['core_cards','virtues','virtue_items','exercises','topics','topic_items','medias','exercise_items']
    loop
        if to_regclass('public.' || t) is not null then
            execute format('alter table public.%I enable row level security', t);

            -- Nomes de policy "legadas" possíveis nesta tabela (schema.sql
            -- antigo ou os nomes "Enable ..." usados fora deste repo).
            execute format('drop policy if exists %I on public.%I', 'Permitir leitura pública de ' || t, t);
            execute format('drop policy if exists %I on public.%I', 'Permitir modificação para admins em ' || t, t);
            execute format('drop policy if exists %I on public.%I', 'Enable read access for all users on ' || t, t);
            execute format('drop policy if exists %I on public.%I', 'Enable all access for all users on ' || t, t);
            execute format('drop policy if exists %I on public.%I', 'Leitura pública de ' || t, t);
            execute format('drop policy if exists %I on public.%I', 'Escrita restrita a editores/admins em ' || t, t);

            execute format(
                'create policy %I on public.%I for select using (true)',
                'Leitura pública de ' || t, t
            );
            execute format(
                'create policy %I on public.%I for all to authenticated using (public.is_editor_or_admin()) with check (public.is_editor_or_admin())',
                'Escrita restrita a editores/admins em ' || t, t
            );
        end if;
    end loop;
end $$;

-- game_flags: mesmo problema (policy "Usuários logados podem alterar"
-- na prática vale para o role public, não só authenticated).
do $$
begin
    if to_regclass('public.game_flags') is not null then
        execute 'alter table public.game_flags enable row level security';
        execute 'drop policy if exists "Qualquer um pode ler game_flags" on public.game_flags';
        execute 'drop policy if exists "Usuários logados podem alterar game_flags" on public.game_flags';
        execute 'drop policy if exists "Leitura pública de game_flags" on public.game_flags';
        execute 'drop policy if exists "Escrita restrita a editores/admins em game_flags" on public.game_flags';
        execute 'create policy "Leitura pública de game_flags" on public.game_flags for select using (true)';
        execute 'create policy "Escrita restrita a editores/admins em game_flags" on public.game_flags for all to authenticated using (public.is_editor_or_admin()) with check (public.is_editor_or_admin())';
    end if;
end $$;
