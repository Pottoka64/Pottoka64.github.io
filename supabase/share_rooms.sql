-- OCHE share_rooms — paste into Supabase SQL editor
-- Alphabet: A-H J-N P-Z 2-9 (no I, O, 0, 1), length 6
-- Table is locked down; clients call SECURITY DEFINER RPCs only.

create table if not exists public.share_rooms (
  code         text primary key
               check (code ~ '^[A-HJ-NP-Z2-9]{6}$'),
  host_secret  text not null,
  version      integer not null default 1
               check (version >= 1),
  payload      jsonb,
  closed       boolean not null default false,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists share_rooms_updated_at_idx
  on public.share_rooms (updated_at desc);

create or replace function public.share_rooms_touch()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists share_rooms_touch_trg on public.share_rooms;
create trigger share_rooms_touch_trg
  before update on public.share_rooms
  for each row execute function public.share_rooms_touch();

-- RPCs keep host_secret checks off raw table UPDATE from anon
create or replace function public.share_publish(
  p_payload jsonb,
  p_host_secret text
) returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code text;
  v_alphabet text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  i int;
  j int;
begin
  if p_host_secret is null or length(p_host_secret) < 6 then
    raise exception 'invalid host_secret';
  end if;
  for i in 1..32 loop
    v_code := '';
    for j in 1..6 loop
      v_code := v_code || substr(v_alphabet, 1 + floor(random()*32)::int, 1);
    end loop;
    begin
      insert into share_rooms (code, host_secret, version, payload, closed)
      values (v_code, p_host_secret, 1, p_payload, false);
      return jsonb_build_object('code', v_code, 'version', 1);
    exception when unique_violation then
      null; -- retry
    end;
  end loop;
  raise exception 'could not allocate code';
end;
$$;

create or replace function public.share_get(p_code text)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select case when exists (select 1 from share_rooms r where r.code = p_code)
    then (select jsonb_build_object(
            'version', r.version,
            'payload', r.payload,
            'closed',  r.closed
          ) from share_rooms r where r.code = p_code)
    else null
  end;
$$;

create or replace function public.share_push(
  p_code text,
  p_version int,
  p_payload jsonb,
  p_host_secret text
) returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  r share_rooms%rowtype;
  updated share_rooms%rowtype;
begin
  select * into r from share_rooms where code = p_code;
  if not found then
    return jsonb_build_object(
      'ok', false,
      'row', jsonb_build_object('version', 0, 'payload', null, 'closed', true)
    );
  end if;
  if r.host_secret is distinct from p_host_secret then
    return jsonb_build_object('ok', false, 'reason', 'forbidden');
  end if;
  if r.closed then
    return jsonb_build_object(
      'ok', false,
      'row', jsonb_build_object('version', r.version, 'payload', r.payload, 'closed', true)
    );
  end if;
  if r.version is distinct from p_version then
    return jsonb_build_object(
      'ok', false,
      'row', jsonb_build_object('version', r.version, 'payload', r.payload, 'closed', r.closed)
    );
  end if;

  update share_rooms
     set payload = p_payload,
         version = version + 1
   where code = p_code and version = p_version
   returning * into updated;

  if not found then
    select * into r from share_rooms where code = p_code;
    return jsonb_build_object(
      'ok', false,
      'row', jsonb_build_object('version', r.version, 'payload', r.payload, 'closed', r.closed)
    );
  end if;

  return jsonb_build_object(
    'ok', true,
    'row', jsonb_build_object(
      'version', updated.version,
      'payload', updated.payload,
      'closed',  updated.closed
    )
  );
end;
$$;

create or replace function public.share_ensure(
  p_code text,
  p_payload jsonb,
  p_host_secret text
) returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  r share_rooms%rowtype;
begin
  if p_code !~ '^[A-HJ-NP-Z2-9]{6}$' then
    return null;
  end if;
  select * into r from share_rooms where code = p_code;
  if not found then
    insert into share_rooms (code, host_secret, version, payload, closed)
    values (p_code, p_host_secret, 1, p_payload, false)
    returning * into r;
  elsif r.host_secret is distinct from p_host_secret then
    return null;
  elsif r.closed then
    -- host re-open
    update share_rooms
       set closed = false,
           payload = p_payload,
           version = version + 1,
           host_secret = p_host_secret
     where code = p_code
     returning * into r;
  end if;
  return jsonb_build_object(
    'version', r.version,
    'payload', r.payload,
    'closed',  r.closed
  );
end;
$$;

create or replace function public.share_close(
  p_code text,
  p_host_secret text
) returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  n int;
begin
  update share_rooms
     set closed = true
   where code = p_code and host_secret = p_host_secret;
  get diagnostics n = row_count;
  if n = 0 then
    raise exception 'forbidden or missing';
  end if;
  return jsonb_build_object('ok', true);
end;
$$;

create or replace function public.share_claim_host(
  p_code text,
  p_host_secret text
) returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'ok',
    exists (
      select 1 from share_rooms
      where code = p_code
        and host_secret = p_host_secret
        and closed = false
    )
  );
$$;

-- Lock down table; expose only RPCs to anon/authenticated
alter table public.share_rooms enable row level security;
-- no policies on table → deny direct access with anon key
revoke all on public.share_rooms from anon, authenticated;
grant execute on function public.share_publish(jsonb, text) to anon, authenticated;
grant execute on function public.share_get(text) to anon, authenticated;
grant execute on function public.share_push(text, int, jsonb, text) to anon, authenticated;
grant execute on function public.share_ensure(text, jsonb, text) to anon, authenticated;
grant execute on function public.share_close(text, text) to anon, authenticated;
grant execute on function public.share_claim_host(text, text) to anon, authenticated;
