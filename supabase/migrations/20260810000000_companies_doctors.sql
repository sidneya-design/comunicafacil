-- ========================================================
-- Multi-tenant: empresas (companies) e vínculo médico↔empresa
-- ========================================================
-- 100% aditivo: nenhuma tabela existente é alterada além de ampliar o
-- check de user_roles.role (novos valores, nenhum valor antigo invalidado).
-- Ver /Users/geniantis/.claude/plans/nifty-doodling-stearns.md para o
-- desenho completo (Fase 1 do plano médico→paciente).

create table if not exists public.companies (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    active boolean not null default true,
    created_by uuid references auth.users(id),
    created_at timestamptz not null default now()
);

-- Um médico pertence a uma empresa (hoje: relação 1:1). Tabela própria
-- em vez de coluna em user_roles para não mexer na tabela mais sensível
-- do RBAC além do necessário.
create table if not exists public.company_members (
    user_id uuid primary key references auth.users(id) on delete cascade,
    company_id uuid not null references public.companies(id) on delete restrict,
    created_at timestamptz not null default now()
);

-- Amplia (não reduz) os papéis válidos: nenhuma linha existente vira inválida.
alter table public.user_roles drop constraint if exists user_roles_role_check;
alter table public.user_roles
    add constraint user_roles_role_check check (role in ('viewer','editor','admin','doctor','patient'));

create or replace function public.user_company_id()
returns uuid language sql stable security definer set search_path = public
as $$
    select company_id from public.company_members where user_id = auth.uid();
$$;

create or replace function public.is_doctor()
returns boolean language sql stable security definer set search_path = public
as $$
    select exists (select 1 from public.user_roles where user_id = auth.uid() and role = 'doctor');
$$;

grant execute on function public.user_company_id() to authenticated;
grant execute on function public.is_doctor() to authenticated;

alter table public.companies enable row level security;
alter table public.company_members enable row level security;

-- Leitura: admin vê tudo; um médico vê só a própria empresa/vínculo.
-- Sem policy de insert/update/delete (mesmo padrão de user_roles): toda
-- escrita passa pela Edge Function admin-users, que usa service_role.
drop policy if exists "Leitura de companies" on public.companies;
create policy "Leitura de companies" on public.companies
    for select to authenticated
    using (public.is_admin() or id = public.user_company_id());

drop policy if exists "Leitura de company_members" on public.company_members;
create policy "Leitura de company_members" on public.company_members
    for select to authenticated
    using (public.is_admin() or user_id = auth.uid());
