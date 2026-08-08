-- Stolen registry mirror: local index of open stolen-item sources.
-- Run manually (self-managed DB).

create table if not exists public.stolen_registry (
  id uuid primary key default gen_random_uuid(),
  source text not null,
  source_record_id text,
  item_type text not null,
  serial_normalized text not null,
  serial_raw text,
  manufacturer text,
  model text,
  date_stolen timestamptz,
  location text,
  source_url text,
  synced_at timestamptz not null default now(),
  unique (source, source_record_id)
);

create index if not exists idx_stolen_registry_serial
  on public.stolen_registry (serial_normalized);
create index if not exists idx_stolen_registry_type_serial
  on public.stolen_registry (item_type, serial_normalized);

-- Grants (PostgREST needs explicit privileges on the public schema)
grant select on public.stolen_registry to anon;
grant select on public.stolen_registry to authenticated;
grant all on public.stolen_registry to service_role;

-- RLS: public read, writes restricted to service_role
alter table public.stolen_registry enable row level security;

drop policy if exists "stolen_registry_public_read" on public.stolen_registry;
create policy "stolen_registry_public_read"
  on public.stolen_registry
  for select
  to anon, authenticated
  using (true);

drop policy if exists "stolen_registry_service_write" on public.stolen_registry;
create policy "stolen_registry_service_write"
  on public.stolen_registry
  for all
  to service_role
  using (true)
  with check (true);
