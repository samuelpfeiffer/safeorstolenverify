/**
 * Search logging, repeat-lookup risk signals and burst rate limits (Nov 19 2026).
 *
 * Every check is written to public.search_events with the identifier, connection
 * and browser SHA-256 hashed, so raw serial numbers and IP addresses are never
 * stored here. The same table drives:
 *  - a risk signal when one number is checked from many different connections in
 *    a week (a common sign an item is being shopped around or flipped), and
 *  - hourly and per-minute caps so scrapers can't copy the database.
 *
 * Everything here fails open: if logging or counting errors, the check still runs.
 * Server-only. Never import from browser code.
 */

import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

type Admin = SupabaseClient<Database>;

// Thresholds. Paid plans already pay per check, so these only stop automated bulk copying.
// A full 100-row bulk run (the largest the app allows) fits inside every window.
export const LIMITS = {
  perMinute: 120,
  perHour: 300,
  perDay: 1000,
};
export const SIGNAL = {
  watchConnections: 5,
  highConnections: 15,
};

const SALT = process.env['SEARCH_HASH_SALT'] || 'safeorstolen-search-v1';

export const normalizeIdentifier = (v: string) => v.trim().toUpperCase().replace(/[\s-]/g, '');

export async function hashValue(value: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${SALT}:${value}`));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

export type RateLimitResult = { allowed: true } | { allowed: false; retryAfterSeconds: number; window: 'minute' | 'hour' | 'day' };

/** Burst limits per account (signed in) or per connection (guests). */
export async function checkRateLimit(admin: Admin, userId: string | null, ipHash: string | null): Promise<RateLimitResult> {
  if (!userId && !ipHash) return { allowed: true };
  try {
    const since = (ms: number) => new Date(Date.now() - ms).toISOString();
    const count = async (ms: number) => {
      let q = admin.from('search_events').select('id', { count: 'exact', head: true }).gte('created_at', since(ms));
      q = userId ? q.eq('user_id', userId) : q.eq('ip_hash', ipHash as string);
      const { count: c, error } = await q;
      if (error) throw error;
      return c ?? 0;
    };
    const [minute, hour, day] = await Promise.all([count(60_000), count(3_600_000), count(86_400_000)]);
    if (minute >= LIMITS.perMinute) return { allowed: false, retryAfterSeconds: 60, window: 'minute' };
    if (hour >= LIMITS.perHour) return { allowed: false, retryAfterSeconds: 3600, window: 'hour' };
    if (day >= LIMITS.perDay) return { allowed: false, retryAfterSeconds: 86_400, window: 'day' };
    return { allowed: true };
  } catch (e) {
    console.error('[searchSignals] rate limit check failed (allowing):', e);
    return { allowed: true };
  }
}

export async function logSearch(
  admin: Admin,
  row: { identifierHash: string; itemType: string | null; userId: string | null; ipHash: string | null; fingerprintHash: string | null },
): Promise<void> {
  try {
    const { error } = await admin.from('search_events').insert({
      identifier_hash: row.identifierHash,
      item_type: row.itemType,
      user_id: row.userId,
      ip_hash: row.ipHash,
      fingerprint_hash: row.fingerprintHash,
    });
    if (error) console.error('[searchSignals] log insert failed:', error);
  } catch (e) {
    console.error('[searchSignals] log failed:', e);
  }
}

export type LookupActivity = {
  level: 'normal' | 'watch' | 'high';
  checksLast7Days: number;
  differentConnectionsLast7Days: number;
  message: string | null;
};

/** How often this number was checked in the last 7 days, and from how many places. */
export async function getLookupActivity(admin: Admin, identifierHash: string): Promise<LookupActivity | null> {
  try {
    const { data, error } = await admin.rpc('search_risk_signal', { p_identifier_hash: identifierHash, p_days: 7 });
    if (error || !data) return null;
    const row = Array.isArray(data) ? data[0] : data;
    const checks = Number(row?.total_checks ?? 0);
    const places = Number(row?.distinct_connections ?? 0);
    const level: LookupActivity['level'] =
      places >= SIGNAL.highConnections ? 'high' : places >= SIGNAL.watchConnections ? 'watch' : 'normal';
    const message =
      level === 'normal'
        ? null
        : `This number was checked ${checks} times from ${places} different places in the last 7 days. ` +
          (level === 'high'
            ? 'That is unusually high. Items that are being resold quickly or shopped around often show this pattern, so take extra care: meet in a safe public place, confirm the seller owns it, and get a written bill of sale.'
            : 'That is more than usual. It can simply mean the item is listed for sale, but it is worth confirming the seller owns it before you pay.');
    return { level, checksLast7Days: checks, differentConnectionsLast7Days: places, message };
  } catch (e) {
    console.error('[searchSignals] risk signal failed:', e);
    return null;
  }
}
