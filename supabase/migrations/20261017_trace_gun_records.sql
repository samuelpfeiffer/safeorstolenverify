
create table if not exists public.trace_gun_records (
  id bigserial primary key,
  serial text not null,
  make text,
  model text,
  caliber text,
  state text,
  agency text,
  status text,
  offense text,
  record_date text,
  case_number text
);
create index if not exists trace_gun_serial_idx on public.trace_gun_records (upper(serial));
