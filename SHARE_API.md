# SHARE_API — replace grok.me `/_serverFn/*` for salon share/join

Analysis of the recovered OCHE client (pretty-printed Vite/TanStack Start bundles).  
**Server handlers are not in this repo** — shapes below are inferred strictly from client call sites and field usage. Do not implement yet; this doc is the contract.

Source of truth in tree:

| File | Role |
|---|---|
| `NOTES.md` | Endpoint hash table (confirmed) |
| `assets/store-oche-v3.js` | ServerFn stubs `Wo`/`Go`/`Ko`/`qo`/`Jo`/`Yo` + Zustand actions |
| `assets/use-share-sync-oche-v3.js` | Poll loop (`Go` + `qo`) + publish/claim UI |

---

## 1. Exact function names and roles

### Low-level TanStack serverFn stubs (`store-oche-v3.js` ~5172–5188)

Created as `$({ method: 'POST' }).handler(H('<sha256>'))`.  
`H(id)` (~2626) builds a callable that `POST`s to `/_serverFn/<id>` with header `x-tsr-serverFn: true`.

| Alias | Endpoint hash | Role (from client usage) |
|---|---|---|
| **`Wo`** | `7f4e3f032fcf7c4cb14e52351ae7c4a3f17bfd1ed3d3cf4e8872c7f52e8eed97` | **Publish** — create a new shared room from a snapshot + host secret; returns salon code + version |
| **`Go`** | `6165e10729ac21b04395fdeea6b426080f0acf4aa4f7ef1d397ca7c0423db2cc` | **Get / join / poll** — fetch room row by salon `code` (no secret). Also used every 2.5s as poll |
| **`Ko`** | `88b15306dc3db8589cf15518d959a5303188288ea251a93164702332256a27d6` | **Push / sync** — host optimistic-concurrency write of snapshot; may return conflict row |
| **`qo`** | `938ab3d952db33a97db700439ad33d2d365f95de73ae5b0527a968fa1dcab1fd` | **Ensure / re-create** — host only; when poll (`Go`) returns null, re-upsert room under same `code` |
| **`Jo`** | `5c173591e37e1805780b1845cc207a49da81ea00cd889d3759427be643a71ace` | **Close** — host closes room for everyone |
| **`Yo`** | `b82024bf3f48eb4564d0dca47bd0b9087bcad434a1fa44dbf53ab3e6fc0ef54f` | **Claim host** — verify marker (`hostSecret`) against room; returns `{ ok }` |

### Zustand store wrappers (`ts` / exported as `t`) — same file ~5337–5509

| Store method | Calls | Does |
|---|---|---|
| `publishTournament(tournamentId)` | `Wo` | If no `shareCode` yet: `snapshotOf` → `Wo` → set `shareCode` + `shareVersion`. Deduped via `Qo` Map. Returns `code` or `null` |
| `pushTournament(tournamentId)` | `Ko` (maybe twice) | Host push after local edits. On success: bump `shareVersion`. On conflict: merge via `jo`, `ingestSnapshot`, retry `Ko`. On `forbidden` / closed: stop or `deleteTournament` |
| `joinTournament(code)` | `Go` | If row missing / `closed` / no `payload` → `null`; else `ingestSnapshot(payload, version)` → return `tournament.id` |
| `closeTournament(tournamentId)` | `Jo` | Host only (`Mo`); then local `deleteTournament` |
| `claimHost(tournamentId, rawSecret)` | `Yo` | Normalize secret with `Po`; require `length >= 6`; on `.ok` store `hostSecret` on tournament |
| `snapshotOf(tournamentId)` | (local) | `{ tournament: No(t), players, matches }` — **strips `hostSecret`** from tournament before wire |
| `ingestSnapshot(snapshot, version)` | (local) | Merge players/matches; keep **local** `hostSecret`; set `shareVersion` / `shareCode` |

### UI / sync hook (`use-share-sync-oche-v3.js`)

| Export | Uses | Does |
|---|---|---|
| `h` (as `t`) — poll effect | **`Go` as `s`**, **`qo` as `a`** | Every **2500 ms**: `Go({ data: { code } })`. Closed/empty → delete local. `null` + host → `qo({ code, payload, hostSecret })` then ingest. Newer remote → ingest; if local has extra fixture winners (`Ao`) and host → `pushTournament` |
| `m` (as `n`) — share card | `publishTournament`, `claimHost` | Auto-publish if host & no code; share link `/salle/<code>`; claim-host form |
| `p` (as `r`) — close UI | `closeTournament` | Confirm close for everyone |

### Helpers (same store file)

| Fn | Lines | Behavior |
|---|---|---|
| `io()` | ~4403 | Generate **6-char** `hostSecret` from alphabet `ABCDEFGHJKLMNPQRSTUVWXYZ23456789` |
| `Fo(code)` | ~4979 | Validate salon code: `/^[A-HJ-NP-Z2-9]{6}$/` (no I/O/0/1) |
| `Po(secret)` | ~4973 | Normalize marker: upper, strip non `[A-Z0-9-]`, slice 80 |
| `Mo(t)` / export `a` | ~4965 | Host? `!!t.hostSecret` |
| `No(t)` | ~4968 | Clone tournament **without** `hostSecret` (for payload) |
| `jo(remote, local)` | ~4942 | Merge snapshots (prefer remote base + local fixture winners / completed matches) |
| `Ao(remote, local)` | ~4933 | Count of local fixture winners missing on remote (triggers host re-push after poll) |
| `es(id, fn)` | ~5216 | Serialize async pushes per tournament id (`$o` Map) |

`hostSecret` is created in `po()` (~4637) when a tournament starts (`startTournament` → `publishTournament`).

---

## 2. Request / response JSON shapes

### Wire protocol today (TanStack Start)

All six are **POST**. Client envelope (via `ti` / `ii` / `ni` ~2478–2531):

```http
POST /_serverFn/<hash>
x-tsr-serverFn: true
content-type: application/json
accept: <tanstack>, application/x-ndjson, application/json

{"data":{ ...fields... }}
```

(`context` may be present if middleware sets it; share call sites only pass `data`.)

Response is TanStack-deserialized (`x-tss-serialized` / JSON). A replacement API can return **plain JSON** with the same logical fields — wrappers should **not** require TanStack framing.

Call signature everywhere in app code:

```js
await Wo({ data: { /* fields */ } })
```

---

### Shared domain types (logical)

```ts
/** Snapshot published on the wire — tournament has NO hostSecret */
type ShareSnapshot = {
  tournament: Tournament & {
    shareCode?: string;
    shareVersion?: number;
    // hostSecret intentionally absent (stripped by No())
  };
  players: Player[];   // { id, name, createdAt }
  matches: Match[];    // all matches with tournamentId === tournament.id
};

/** Room row returned by Go / qo / Ko.row */
type ShareRoomRow = {
  version: number;
  payload: ShareSnapshot | null;
  closed: boolean;
  // other columns may exist; client only reads these three
};
```

Alphabet for **salon `code`** (client-validated) and typical **`hostSecret`** (client-generated):  
`A-H J-N P-Z 2-9` (32 chars). Codes length **6**. Marker input allows longer after `Po`, but generated secrets are 6 chars.

---

### `Wo` — publish

**Request `data`:**

```json
{
  "payload": { "tournament": { "...": "..." }, "players": [], "matches": [] },
  "hostSecret": "K7M2PX"
}
```

| Field | Type | Notes |
|---|---|---|
| `payload` | `ShareSnapshot` | From `snapshotOf` → `No(tournament)` |
| `hostSecret` | `string` | Local tournament `hostSecret` (`io()`) |

**Response** (required fields used):

```json
{ "code": "Q2XMVY", "version": 1 }
```

| Field | Used as |
|---|---|
| `code` | Stored in `tournament.shareCode`; must match `Fo` |
| `version` | Stored in `tournament.shareVersion` |

Errors: thrown → store returns `null` (silent catch).

---

### `Go` — get / join / poll

**Request `data`:**

```json
{ "code": "Q2XMVY" }
```

**Response:** `ShareRoomRow | null | undefined` (falsy = missing).

Client checks:

```js
!n || n.closed || !n.payload  // join → null / poll → delete local
n.version                     // compare to local shareVersion
n.payload                     // ingestSnapshot
```

---

### `Ko` — push (optimistic concurrency)

**Request `data`:**

```json
{
  "code": "Q2XMVY",
  "version": 3,
  "payload": { "tournament": {}, "players": [], "matches": [] },
  "hostSecret": "K7M2PX"
}
```

| Field | Notes |
|---|---|
| `version` | Local `shareVersion ?? 0` — expected current server version |
| `hostSecret` | Required for auth |

**Response** (discriminated by `ok`):

**Success:**

```json
{
  "ok": true,
  "row": { "version": 4, "payload": { "...": "..." }, "closed": false }
}
```

Client: if `!a.row.payload` → return; else set `shareVersion = a.row.version`.

**Forbidden (wrong marker):**

```json
{ "ok": false, "reason": "forbidden" }
```

(`row` optional; client returns immediately on `reason === "forbidden"`.)

**Conflict / closed / stale** (`ok === false`, not forbidden):

```json
{
  "ok": false,
  "row": { "version": 5, "payload": { "...": "..." }, "closed": false }
}
```

Client: if `row.closed || !row.payload` → `deleteTournament`; else merge `jo(row.payload, local)`, ingest, **retry** `Ko` with `version: row.version` and merged snapshot.

---

### `qo` — ensure room (host recovery)

**Request `data`:**

```json
{
  "code": "Q2XMVY",
  "payload": { "tournament": {}, "players": [], "matches": [] },
  "hostSecret": "K7M2PX"
}
```

**Response:** same shape as **`Go`** (`ShareRoomRow | null`).  
Used only when poll got `null` and local device still has `hostSecret` — intended semantics: **create/restore room under that exact `code`** if allowed.

---

### `Jo` — close

**Request `data`:**

```json
{ "code": "Q2XMVY", "hostSecret": "K7M2PX" }
```

**Response:** ignored (any throw → close fails, UI error).  
Expected side effect: room becomes `closed: true` (and/or payload cleared) so later `Go`/`Ko` see `closed` / missing payload.

---

### `Yo` — claim host

**Request `data`:**

```json
{ "code": "Q2XMVY", "hostSecret": "K7M2PX" }
```

(`hostSecret` already passed through `Po` in the store.)

**Response:**

```json
{ "ok": true }
```

or `{ "ok": false }`. Client only reads `.ok`.

---

## 3. Where `fetch` / `POST` to `/_serverFn/...` happens

### Primitive

```text
H(hash)                          store ~2626–2634
  → url = "/_serverFn/" + hash
  → (...args) => ti(url, args, serverFns.fetch ?? fetch)

ti(url, [{ method, data, ...}], fetch)   ~2478–2506
  → headers: x-tsr-serverFn: true
  → POST body: JSON of { data } (via ii/ni/ri)
  → i(url, { method, headers, body })
```

### Stub binding (~5172–5188)

```js
var Wo = $({ method: `POST` }).handler(H(`7f4e3f03…eed97`)),
    Go = $({ method: `POST` }).handler(H(`6165e107…db2cc`)),
    Ko = $({ method: `POST` }).handler(H(`88b15306…6a27d6`)),
    qo = $({ method: `POST` }).handler(H(`938ab3d9…cab1fd`)),
    Jo = $({ method: `POST` }).handler(H(`5c173591…71ace`)),
    Yo = $({ method: `POST` }).handler(H(`b82024bf…0ef54f`));
```

`$().handler(extractedFn)` wraps so `Wo({ data })` runs client middleware then `extractedFn` (= `H(...)` POST).

### Call sites

| Alias | Call site | File:line (approx.) |
|---|---|---|
| `Wo` | `publishTournament` | `store-oche-v3.js` ~5402 |
| `Go` | `joinTournament` | `store` ~5482 |
| `Go` | poll in `h` — import `r as s` | `use-share-sync` ~286 (`s({ data: { code: u } })`) |
| `Ko` | `pushTournament` (×1–2) | `store` ~5433, ~5459 |
| `qo` | poll recovery — import `n as a` | `use-share-sync` ~297 (`a({ data: { code, payload, hostSecret } })`) |
| `Jo` | `closeTournament` | `store` ~5343 |
| `Yo` | `claimHost` | `store` ~5497 |

### Exports bridging store → share-sync

```js
// store exports
qo as n,   // → use-share-sync: n as a
Go as r,   // → use-share-sync: r as s
ts as t,   // zustand store
Mo as a, Fo as i, Ao as o, …
```

```js
// use-share-sync-oche-v3.js
import { a as r, i, n as a, o, r as s, t as c } from "./store-oche-v3.js";
// r=Mo, i=Fo, a=qo, o=Ao, s=Go, c=store
```

Join UI does **not** call `Go` directly — only `store.joinTournament`:

- `join-form-oche-v3.js` → `joinTournament`
- `salle._code-oche-v3.js` → `joinTournament`

---

## 4. Minimal replacement plan (no implementation yet)

### Goal

One module `assets/share-backend.js` talking to **Supabase REST** (or any simple HTTP API), preserving the **exact `{ data }` in / result out** contracts above so store + share-sync stay almost untouched.

### 4.1 New module API

```js
// assets/share-backend.js  (proposed exports)
export async function publish(data)      // Wo body → { code, version }
export async function getRoom(data)      // Go body → ShareRoomRow | null
export async function push(data)         // Ko body → { ok, reason?, row }
export async function ensure(data)       // qo body → ShareRoomRow | null
export async function closeRoom(data)    // Jo body → void / ok
export async function claimHost(data)    // Yo body → { ok: boolean }

// Optional TanStack-shaped adapters (keep call sites identical):
export const Wo = ({ data }) => publish(data);
export const Go = ({ data }) => getRoom(data);
export const Ko = ({ data }) => push(data);
export const qo = ({ data }) => ensure(data);
export const Jo = ({ data }) => closeRoom(data);
export const Yo = ({ data }) => claimHost(data);
```

Config via globals or import.meta / hardcoded at top:

- `SUPABASE_URL`, `SUPABASE_ANON_KEY` (RLS policies must allow the ops below; prefer Edge Functions if secrets must stay off-client — see note).

**Security note:** today `hostSecret` is the only auth; it is sent from the browser. Same model on Supabase: either anon key + RLS that checks `host_secret` in request (via RPC) or a tiny Edge Function that holds the service role and verifies the secret server-side. Prefer **RPCs / Edge Functions** so clients cannot UPDATE without proving the marker.

### 4.2 Smallest surgical edits

**A. `store-oche-v3.js` — replace stub definitions only (~5172–5188)**

Replace the six `$({ method:'POST' }).handler(H(...))` lines with imports from `./share-backend.js` (or assign adapters). Keep names `Wo`, `Go`, `Ko`, `qo`, `Jo`, `Yo` and the same exports (`Go as r`, `qo as n`, …).

Do **not** rewrite `publishTournament` / `pushTournament` / `joinTournament` / `closeTournament` / `claimHost` if adapters accept `{ data }` and return the same result shapes.

**B. `use-share-sync-oche-v3.js` — ideally zero edits**

It already imports `Go`/`qo` via store re-exports. If store still exports them, poll keeps working.

**C. Optional cleanup later**

- Delete dead TanStack serverFn machinery only if nothing else needs `H` / `$` (large; not minimal).
- Point `NOTES.md` at this file.

**D. What not to change**

- `snapshotOf` / `No` / `jo` / `Ao` / `Fo` / `Po` / `io` / poll interval 2500
- Route `/salle/$code` and join forms

### 4.3 Suggested function → SQL/RPC mapping

| Client | Backend op |
|---|---|
| `publish` | Generate unused 6-char `code` (same alphabet); `INSERT` version=1; return `{ code, version }` |
| `getRoom` | `SELECT version, payload, closed WHERE code = $1`; return null if no row |
| `push` | `UPDATE … WHERE code=$1 AND version=$2 AND host_secret=$3 AND NOT closed RETURNING *`; if 0 rows: if secret mismatch → `{ ok:false, reason:'forbidden' }`; else `{ ok:false, row:current }` |
| `ensure` | If row missing: `INSERT` with given `code`/`host_secret`/`payload` version=1; if exists and secret matches: optional refresh; if secret wrong → null or closed-like failure |
| `closeRoom` | `UPDATE closed=true WHERE code AND host_secret` |
| `claimHost` | `SELECT 1 WHERE code AND host_secret AND NOT closed` → `{ ok: boolean }` |

Version bump: `version = version + 1` on successful push (and set `payload`).

---

## 5. Suggested Supabase schema (SQL)

```sql
-- Alphabet: A-H J-N P-Z 2-9 (no I, O, 0, 1), length 6
create table public.share_rooms (
  code         text primary key
               check (code ~ '^[A-HJ-NP-Z2-9]{6}$'),
  host_secret  text not null,
  version      integer not null default 1
               check (version >= 1),
  payload      jsonb,                    -- ShareSnapshot; null if wiped
  closed       boolean not null default false,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index share_rooms_updated_at_idx on public.share_rooms (updated_at desc);

-- Optional: auto-touch updated_at
create or replace function public.share_rooms_touch()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

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
    -- host re-open: optional policy — here we reopen
    update share_rooms
       set closed = false, payload = p_payload, version = version + 1, host_secret = p_host_secret
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
begin
  update share_rooms
     set closed = true
   where code = p_code and host_secret = p_host_secret;
  if not found then
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
grant execute on function public.share_publish(jsonb, text) to anon, authenticated;
grant execute on function public.share_get(text) to anon, authenticated;
grant execute on function public.share_push(text, int, jsonb, text) to anon, authenticated;
grant execute on function public.share_ensure(text, jsonb, text) to anon, authenticated;
grant execute on function public.share_close(text, text) to anon, authenticated;
grant execute on function public.share_claim_host(text, text) to anon, authenticated;
```

Client `share-backend.js` would `POST` to  
`/rest/v1/rpc/share_publish` etc. with `apikey` + `Authorization: Bearer <anon>` and JSON args matching the RPC parameter names (`p_payload`, …), then map return jsonb → the shapes in §2.

---

## 6. Flow cheat-sheet

```text
Host startTournament
  → po() sets hostSecret=io()
  → publishTournament → Wo({ payload: snapshotOf (No hostSecret), hostSecret })
  → { code, version } stored

Guest join /salle/:code
  → joinTournament → Go({ code }) → ingestSnapshot

Host edits (score, reshuffle, …)
  → pushTournament → Ko({ code, version, payload, hostSecret })
  → ok? bump version : merge+retry | forbidden | closed→delete

All devices with shareCode
  → useShareSync poll 2.5s → Go({ code })
  → null + host → qo ensure
  → newer version → ingest; if host has extra local winners → push again

Host claim on another phone
  → claimHost → Yo({ code, hostSecret: Po(input) }) → ok → store hostSecret

Host close
  → Jo({ code, hostSecret }) → delete local
```

---

## 7. Open points (server not in repo)

1. Exact conflict `reason` strings besides `"forbidden"` — only `"forbidden"` is branched on.
2. Whether `Go` returns a row for **closed** rooms (`closed: true`) vs `null` — client handles both (`closed` / missing payload → treat as gone).
3. Whether `qo` may reopen a closed room — suggested SQL reopens for host; confirm desired product behavior before implement.
4. TTL / GC of old rooms — not present client-side; add `updated_at` sweep if hosting yourself.
5. Live grok.me probe without Build Mode → **403**; replacement removes that dependency entirely.
