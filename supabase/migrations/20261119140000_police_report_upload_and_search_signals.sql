-- Nov 19 2026: proprietary data moat (Phase 1)
-- 1) Victim reports carry an uploaded police report that an admin confirms before the report goes live.
-- 2) Every check is logged (hashed identifier + hashed connection) so repeated lookups of the same
--    number from many places can be flagged, and so lookups can be rate limited against scrapers.

alter table public.stolen_items
  add column if not exists police_report_path text,
  add column if not exists police_report_verified boolean not null default false,
  add column if not exists police_report_verified_at timestamptz;

create table if not exists public.search_events (
  id bigserial primary key,
  identifier_hash text not null,
  item_type text,
  user_id uuid,
  ip_hash text,
  fingerprint_hash text,
  created_at timestamptz not null default now()
);

create index if not exists search_events_identifier_time_idx on public.search_events (identifier_hash, created_at desc);
create index if not exists search_events_user_time_idx on public.search_events (user_id, created_at desc) where user_id is not null;
create index if not exists search_events_ip_time_idx on public.search_events (ip_hash, created_at desc) where ip_hash is not null;

-- Service role only. No browser access at all.
alter table public.search_events enable row level security;
revoke all on public.search_events from anon, authenticated;

comment on table public.search_events is
  'One row per check. Identifier, IP and browser are SHA-256 hashed; raw values are never stored. Used for repeat-lookup risk signals and rate limits. Service role only.';

-- Repeat-lookup signal for one identifier over the last N days.
create or replace function public.search_risk_signal(p_identifier_hash text, p_days integer default 7)
returns table (total_checks bigint, distinct_connections bigint, distinct_accounts bigint, first_seen timestamptz)
language sql
stable
security definer
set search_path = public
as $$
  select count(*)::bigint,
         count(distinct ip_hash)::bigint,
         count(distinct user_id)::bigint,
         min(created_at)
  from public.search_events
  where identifier_hash = p_identifier_hash
    and created_at > now() - make_interval(days => greatest(1, least(p_days, 90)));
$$;

revoke all on function public.search_risk_signal(text, integer) from public, anon, authenticated;

-- Admin view: numbers looked up from 5+ different connections in the last 7 days.
create or replace function public.search_risk_hotlist(p_min_connections integer default 5)
returns table (identifier_hash text, item_type text, total_checks bigint, distinct_connections bigint, distinct_accounts bigint, last_seen timestamptz)
language sql
stable
security definer
set search_path = public
as $$
  select identifier_hash,
         max(item_type),
         count(*)::bigint,
         count(distinct ip_hash)::bigint,
         count(distinct user_id)::bigint,
         max(created_at)
  from public.search_events
  where created_at > now() - interval '7 days'
  group by identifier_hash
  having count(distinct ip_hash) >= greatest(2, p_min_connections)
  order by count(distinct ip_hash) desc, max(created_at) desc
  limit 200;
$$;

revoke all on function public.search_risk_hotlist(integer) from public, anon, authenticated;
