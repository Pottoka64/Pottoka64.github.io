/**
 * OCHE share adapters — same `{ data }` in / result shapes as SHARE_API.md.
 * Talks to Supabase SECURITY DEFINER RPCs (see supabase/share_rooms.sql).
 */
import { SHARE, isShareConfigured } from './share-config.js';

function headers() {
  const key = SHARE.supabaseAnonKey;
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation',
  };
}

function rpcUrl(name) {
  const base = String(SHARE.supabaseUrl).replace(/\/$/, '');
  return `${base}/rest/v1/rpc/${name}`;
}

async function rpc(name, args) {
  if (!isShareConfigured()) return null;
  const res = await fetch(rpcUrl(name), {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(args),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`share rpc ${name} ${res.status}: ${text.slice(0, 200)}`);
  }
  // empty body → null
  const text = await res.text();
  if (!text || text === 'null') return null;
  return JSON.parse(text);
}

/** Wo — publish new room → { code, version } */
export async function publish(data) {
  if (!isShareConfigured()) return null;
  const { payload, hostSecret } = data || {};
  return rpc('share_publish', {
    p_payload: payload,
    p_host_secret: hostSecret,
  });
}

/** Go — get / join / poll → ShareRoomRow | null */
export async function getRoom(data) {
  if (!isShareConfigured()) return null;
  const { code } = data || {};
  return rpc('share_get', { p_code: code });
}

/** Ko — host push with optimistic concurrency → { ok, reason?, row? } */
export async function push(data) {
  if (!isShareConfigured()) return { ok: false, reason: 'forbidden' };
  const { code, version, payload, hostSecret } = data || {};
  const out = await rpc('share_push', {
    p_code: code,
    p_version: version ?? 0,
    p_payload: payload,
    p_host_secret: hostSecret,
  });
  return out ?? { ok: false, reason: 'forbidden' };
}

/** qo — ensure / re-create under exact code → ShareRoomRow | null */
export async function ensure(data) {
  if (!isShareConfigured()) return null;
  const { code, payload, hostSecret } = data || {};
  return rpc('share_ensure', {
    p_code: code,
    p_payload: payload,
    p_host_secret: hostSecret,
  });
}

/** Jo — close room (host) */
export async function closeRoom(data) {
  if (!isShareConfigured()) throw new Error('Share not configured');
  const { code, hostSecret } = data || {};
  return rpc('share_close', {
    p_code: code,
    p_host_secret: hostSecret,
  });
}

/** Yo — claim host → { ok: boolean } */
export async function claimHost(data) {
  if (!isShareConfigured()) return { ok: false };
  const { code, hostSecret } = data || {};
  const out = await rpc('share_claim_host', {
    p_code: code,
    p_host_secret: hostSecret,
  });
  return out ?? { ok: false };
}

// TanStack-shaped adapters — keep call sites: await Wo({ data })
export const Wo = ({ data }) => publish(data);
export const Go = ({ data }) => getRoom(data);
export const Ko = ({ data }) => push(data);
export const qo = ({ data }) => ensure(data);
export const Jo = ({ data }) => closeRoom(data);
export const Yo = ({ data }) => claimHost(data);
