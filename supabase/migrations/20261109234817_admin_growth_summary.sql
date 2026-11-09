-- Aggregate-only dashboard RPC. Called by the Edge Function AFTER admin authentication.
-- No personal identifiers, item identifiers, tokens or customer details are returned.
create or replace function public.admin_growth_summary(p_days integer default 30)
returns jsonb
language plpgsql
stable
security invoker
set search_path = ''
as $$
declare
  end_at timestamptz := statement_timestamp();
  start_at timestamptz;
  output jsonb;
begin
  if p_days is null or p_days < 1 or p_days > 90 then
    raise exception 'Choose a window between 1 and 90 days';
  end if;
  start_at := end_at - make_interval(days => p_days);
  with searches as materialized (
    select item_type, result,
      case when user_id is not null then 'u:' || user_id::text
           when nullif(fingerprint, '') is not null then 'f:' || fingerprint
           else null end as identity
    from public.verification_searches
    where created_at >= start_at and created_at < end_at
  ), payments as materialized (
    select status, amount, currency
    from public.purchases
    where created_at >= start_at and created_at < end_at
  ), identities as (
    select identity, count(*) as records
    from searches where identity is not null group by identity
  )
  select jsonb_build_object(
    'generatedAt', end_at, 'startDate', start_at, 'endDate', end_at, 'days', p_days,
    'searchRecords', (select count(*) from searches),
    'recordsWithResults', (select count(*) from searches where result is not null and result <> '{}'::jsonb),
    'recordedIdentities', (select count(*) from identities),
    'repeatIdentities', (select count(*) from identities where records > 1),
    'unidentifiedSearchRecords', (select count(*) from searches where identity is null),
    'completedPayments', (select count(*) from payments where status = 'completed' and amount > 0 and lower(currency) = 'usd'),
    'usdGrossCents', (select coalesce(sum(amount), 0) from payments where status = 'completed' and amount > 0 and lower(currency) = 'usd'),
    'expiredCheckouts', (select count(*) from payments where status = 'expired'),
    'pendingCheckouts', (select count(*) from payments where status = 'pending'),
    'otherCurrencyCompleted', (select count(*) from payments where status = 'completed' and amount > 0 and lower(currency) <> 'usd'),
    'categories', coalesce((select jsonb_agg(x order by x.records desc) from (
      select coalesce(nullif(item_type, ''), 'unknown') as category,
        count(*) as records,
        count(*) filter (where result is not null and result <> '{}'::jsonb) as with_results
      from searches group by 1
    ) x), '[]'::jsonb),
    'paymentAmounts', coalesce((select jsonb_agg(x order by x.records desc) from (
      select amount as cents, count(*) as records from payments
      where status = 'completed' and amount > 0 and lower(currency) = 'usd'
      group by amount
    ) x), '[]'::jsonb)
  ) into output;
  return output;
end;
$$;

-- Explicitly remove PostgreSQL's default PUBLIC execute permission.
revoke all on function public.admin_growth_summary(integer) from public, anon, authenticated;
grant execute on function public.admin_growth_summary(integer) to service_role;
comment on function public.admin_growth_summary(integer) is
  'Admin Edge Function only: aggregate recorded searches and completed payment records; not unique humans or reconciled net revenue.';
