-- ========================================================
-- Rastreamento de Uso e Insights (Sessões e Eventos)
-- ========================================================

-- 1. Tabela: usage_sessions (Armazena as sessões de uso de cada usuário)
create table if not exists public.usage_sessions (
    id text primary key,
    user_id uuid references auth.users(id) on delete cascade not null,
    email text not null,
    role text not null,
    start_at timestamp with time zone not null default timezone('utc'::text, now()),
    end_at timestamp with time zone,
    status text not null default 'active',
    active_seconds integer not null default 0,
    views jsonb not null default '{}'::jsonb,
    activities jsonb not null default '{}'::jsonb,
    events_count integer not null default 0,
    last_activity_at timestamp with time zone,
    last_seen_at timestamp with time zone not null default timezone('utc'::text, now())
);

-- 2. Tabela: usage_events (Armazena eventos/ações pontuais ocorridos nas sessões)
create table if not exists public.usage_events (
    id text primary key,
    timestamp timestamp with time zone not null default timezone('utc'::text, now()),
    user_id uuid references auth.users(id) on delete cascade not null,
    email text not null,
    role text not null,
    type text not null,
    label text not null,
    group_name text not null default '',
    view_name text not null default '',
    detail text not null default '',
    value integer not null default 1
);

-- Habilitar RLS (Row Level Security) em ambas as tabelas
alter table public.usage_sessions enable row level security;
alter table public.usage_events enable row level security;

-- Remover políticas antigas se existirem (para evitar erros de duplicidade)
drop policy if exists "Admins podem ler todas as sessoes" on public.usage_sessions;
drop policy if exists "Usuarios podem ler suas próprias sessoes" on public.usage_sessions;
drop policy if exists "Usuarios podem criar suas próprias sessoes" on public.usage_sessions;
drop policy if exists "Usuarios podem atualizar suas próprias sessoes" on public.usage_sessions;

drop policy if exists "Admins podem ler todos os eventos" on public.usage_events;
drop policy if exists "Usuarios podem ler seus próprios eventos" on public.usage_events;
drop policy if exists "Usuarios podem criar seus próprios eventos" on public.usage_events;

-- Criar políticas de segurança para public.usage_sessions
create policy "Admins podem ler todas as sessoes" on public.usage_sessions
    for select to authenticated using (public.is_admin());

create policy "Usuarios podem ler suas próprias sessoes" on public.usage_sessions
    for select to authenticated using (user_id = auth.uid());

create policy "Usuarios podem criar suas próprias sessoes" on public.usage_sessions
    for insert to authenticated with check (user_id = auth.uid());

create policy "Usuarios podem atualizar suas próprias sessoes" on public.usage_sessions
    for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Criar políticas de segurança para public.usage_events
create policy "Admins podem ler todos os eventos" on public.usage_events
    for select to authenticated using (public.is_admin());

create policy "Usuarios podem ler seus próprios eventos" on public.usage_events
    for select to authenticated using (user_id = auth.uid());

create policy "Usuarios podem criar seus próprios eventos" on public.usage_events
    for insert to authenticated with check (user_id = auth.uid());
