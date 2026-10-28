/**
 * Server-only verification engine.
 *
 * Runs the account gate, fans out to the verification sources, and decides
 * the verdict. Lives in the app's own backend so it ships with the normal
 * publish pipeline.
 *
 * SERVER ONLY — never import this from a component or a client module.
 */

import { toCanonicalItemType, type CanonicalItemType } from '@/lib/itemType';
import {
  decideVerdict,
  normalizeSourceStatus,
  statusFromRiskLevel,
  type SourceResult,
  type VerdictStatus,
} from './verdict';

export const VERIFY_BUILD_ID = 'app-server-verify-2026-09-19-1';

const SOURCE_TIMEOUT_MS = 20_000;
// Oct 21 2026 (owner decision): 1 free check, then $0.99 buys 2 checks (at most 1 phone blacklist search).
const FREE_LIMIT = 1;
const SINGLE_CHECKS = 2;
// Oct 21 2026 (owner decision): NO free week. The normal rules always apply: 1 free check, then pay.
// Kept as a function so existing callers still compile; it always returns false.
export function isLaunchFree(): boolean {
  return false;
}

export interface VerifyInput {
  identifier: string;
  itemType?: string | null;
  fingerprint?: string | null;
  /** General area of the checker (city/region), used only in owner alerts. */
  area?: string | null;
  /** Two-letter state that issued a license plate. Defaults to AZ. */
  plateState?: string | null;
}

export interface VerifyResponse {
  identifier: string;
  itemType: CanonicalItemType;
  finalStatus: VerdictStatus;
  confidence: number | null;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  providers: SourceResult[];
  checkedSources: string[];
  checksRemaining: number | null;
  plan: string;
  timestamp: string;
  /** verification_searches row id; a paid certificate is issued from this saved check. */
  checkId?: string | null;
}

export interface GateDenied {
  allowed: false;
  reason: 'free_limit' | 'monthly_limit' | 'single_used';
  plan: string;
  checksUsed?: number;
  checksLimit?: number;
}

export interface GateAllowed {
  allowed: true;
  plan: string;
  checksRemaining: number | null;
  /** subscriptions row id of the $0.99 purchase being used (for its 1 phone blacklist search). */
  singleSubId?: string;
}

export type GateResult = GateAllowed | GateDenied;

type AdminClient = Awaited<
  typeof import('@/integrations/supabase/client.server')
>['supabaseAdmin'];

/** Which sources apply to an item type. Mirrors the previous routing. */
function sourcesForItemType(itemType: CanonicalItemType): string[] {
  switch (itemType) {
    case 'bicycle':
      return ['bikeindex', 'webscraper', 'ai'];
    case 'phone':
      return ['imei', 'webscraper', 'ai'];
    case 'vehicle':
    case 'plate':
      return ['vehicle', 'webscraper', 'ai'];
    case 'firearm':
      return ['hotgunz', 'webscraper', 'ai'];
    default:
      return ['webscraper', 'ai'];
  }
}

/**
 * Call one of the existing verification services over HTTP. These services
 * are unchanged by this migration.
 */
async function callSource(
  slug: string,
  body: Record<string, unknown>,
  timeoutMs: number = SOURCE_TIMEOUT_MS,
): Promise<unknown> {
  const url = process.env['SUPABASE_URL'];
  const key = process.env['SUPABASE_SERVICE_ROLE_KEY'];
  if (!url || !key) throw new Error('Supabase server environment is not configured');

  const response = await fetch(`${url}/functions/v1/${slug}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
      apikey: key,
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(timeoutMs),
  });

  const text = await response.text();
  if (!response.ok) {
    const err = new Error(`[${slug}] ${response.status}: ${text.slice(0, 300)}`) as Error & {
      status?: number;
      body?: any;
    };
    err.status = response.status;
    try { err.body = text ? JSON.parse(text) : null; } catch { err.body = null; }
    throw err;
  }
  return text ? JSON.parse(text) : null;
}

function sourceFromPayload(provider: string, payload: any): SourceResult {
  return {
    provider,
    status: normalizeSourceStatus(payload?.status),
    confidence: typeof payload?.confidence === 'number' ? payload.confidence : 0,
    message: typeof payload?.message === 'string' ? payload.message : 'Check completed',
    // 'suspicious' from a real database = possible match; keep it as a flag, never a verdict.
    details:
      payload?.status === 'suspicious'
        ? { ...(payload?.details ?? {}), possibleMatch: true }
        : payload?.details,
  };
}

async function runSource(
  provider: string,
  slug: string,
  body: Record<string, unknown>,
  timeoutMs?: number,
): Promise<SourceResult> {
  const startedAt = Date.now();
  try {
    const payload = await callSource(slug, body, timeoutMs);
    return { ...sourceFromPayload(provider, payload), responseTime: Date.now() - startedAt };
  } catch (error) {
    // A 400 means the user's input was bad (e.g. an invalid VIN). Show the real reason.
    const e = error as { status?: number; body?: any };
    if (e?.status === 400 && typeof e.body?.message === 'string') {
      return {
        provider,
        status: 'error',
        confidence: 0,
        message: e.body.message,
        details: { invalidInput: true, ...(e.body.details ?? {}) },
        responseTime: Date.now() - startedAt,
      };
    }
    console.error(`[verify] source ${provider} failed:`, error);
    return {
      provider,
      status: 'error',
      confidence: 0,
      message: `${provider} unavailable`,
      responseTime: Date.now() - startedAt,
    };
  }
}

/** Web scraper returns a success envelope rather than a bare status. */
async function runWebScraper(
  identifier: string,
  itemType: CanonicalItemType,
): Promise<SourceResult> {
  const startedAt = Date.now();
  try {
    const payload: any = await callSource('web-scraper-verification', { identifier, itemType });
    if (!payload || payload.success !== true) {
      return {
        provider: 'Web_Scraper',
        status: 'unknown',
        confidence: 0,
        message: 'No web scraper results',
        responseTime: Date.now() - startedAt,
      };
    }
    return {
      provider: 'Web_Scraper',
      status: normalizeSourceStatus(payload.status),
      confidence: typeof payload.confidence === 'number' ? payload.confidence : 70,
      message: payload.message ?? 'Web scraping completed',
      details: { databases_searched: payload.sources?.length ?? 0, sources: payload.sources ?? [] },
      responseTime: Date.now() - startedAt,
    };
  } catch (error) {
    console.error('[verify] source Web_Scraper failed:', error);
    return {
      provider: 'Web_Scraper',
      status: 'error',
      confidence: 0,
      message: 'Web scraper unavailable',
      responseTime: Date.now() - startedAt,
    };
  }
}

/**
 * AI analysis. Its verdict comes ONLY from the structured risk_level enum —
 * never from the free-text recommendation.
 */
async function runAIAnalysis(
  identifier: string,
  itemType: CanonicalItemType,
): Promise<SourceResult> {
  const startedAt = Date.now();
  try {
    const payload: any = await callSource('ai-safety-advisor', {
      identifier,
      itemType,
      requestType: 'verification_analysis',
    });

    const analysis = payload?.analysis;
    if (!analysis) {
      return {
        provider: 'AI_Analysis',
        status: 'unknown',
        confidence: 0,
        message: 'No AI analysis results',
        responseTime: Date.now() - startedAt,
      };
    }

    const status = statusFromRiskLevel(analysis.risk_level);
    console.log(
      `[verify] BUILD ${VERIFY_BUILD_ID} AI risk_level=${analysis.risk_level} -> ${status}`,
    );

    // AI is advisory only: status is always 'unknown' and confidence 0.
    return {
      provider: 'AI_Analysis',
      status,
      confidence: 0,
      message: analysis.summary ?? 'AI analysis completed',
      details: {
        advisory: true,
        risk_level: analysis.risk_level,
        reasoning: analysis.reasoning,
        recommendation: analysis.recommendation,
      },
      responseTime: Date.now() - startedAt,
    };
  } catch (error) {
    console.error('[verify] source AI_Analysis failed:', error);
    return {
      provider: 'AI_Analysis',
      status: 'error',
      confidence: 0,
      message: 'AI analysis unavailable',
      responseTime: Date.now() - startedAt,
    };
  }
}

/** Our own stolen-items records. Exact normalized match only. */
async function runInternalRegistry(
  admin: AdminClient,
  cleanIdentifier: string,
  normalizedIdentifier: string,
): Promise<SourceResult> {
  const startedAt = Date.now();
  const isSafeIdentifier = /^[A-Z0-9]{3,50}$/.test(normalizedIdentifier);
  // Matches shorter than 6 characters are too collision-prone to accuse anyone.
  const canReturnStolen = isSafeIdentifier && normalizedIdentifier.length >= 6;

  if (!isSafeIdentifier) {
    return {
      provider: 'SafeOrStolen Database',
      status: 'unknown',
      confidence: 0,
      message: 'Identifier format not supported for registry lookup',
      responseTime: Date.now() - startedAt,
    };
  }

  const candidates = Array.from(new Set([cleanIdentifier, normalizedIdentifier]));
  const normalize = (value: unknown) =>
    typeof value === 'string' ? value.trim().toUpperCase().replace(/[\s-]/g, '') : '';

  try {
    const [bySerial, byImei, byVin] = await Promise.all([
      admin.from('stolen_items').select('*').in('serial_number', candidates).in('status', ['active', 'reported']).limit(5),
      admin.from('stolen_items').select('*').in('imei', candidates).in('status', ['active', 'reported']).limit(5),
      admin.from('stolen_items').select('*').in('vin', candidates).in('status', ['active', 'reported']).limit(5),
    ]);

    const seen = new Set<string>();
    const matches: any[] = [];
    for (const res of [bySerial, byImei, byVin]) {
      if (res.error || !res.data) continue;
      for (const row of res.data as any[]) {
        const hit =
          normalize(row.serial_number) === normalizedIdentifier ||
          normalize(row.imei) === normalizedIdentifier ||
          normalize(row.vin) === normalizedIdentifier;
        if (hit && !seen.has(row.id)) {
          seen.add(row.id);
          matches.push(row);
        }
      }
    }

    if (matches.length > 0 && canReturnStolen) {
      return {
        provider: 'SafeOrStolen Database',
        status: 'stolen',
        confidence: 98,
        message: `Reported stolen to SafeOrStolen on ${new Date(matches[0].created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
        // Public-safe fields only: never reporter identity, contact, police number or photos.
        details: {
          matches: matches.length,
          reportId: matches[0].id,
          reportedAt: matches[0].created_at,
          policeReportProvided: !!(matches[0].police_report_provided || matches[0].police_report_number),
          generalArea: matches[0].state ?? null,
          reportIds: matches.map((m: any) => m.id),
        },
        responseTime: Date.now() - startedAt,
      };
    }

    if (matches.length > 0) {
      return {
        provider: 'SafeOrStolen Database',
        status: 'unknown',
        confidence: 0,
        message: 'Identifier too short to confirm a registry match',
        responseTime: Date.now() - startedAt,
      };
    }

    // Not being in our own registry is not evidence the item is clean, so this
    // must never produce a "safe" verdict on its own. Only outside theft
    // databases (BikeIndex, phone blacklist, etc.) can clear an item.
    return {
      provider: 'SafeOrStolen Database',
      status: 'unknown',
      confidence: 0,
      message: 'No report in the SafeOrStolen registry',
      details: { checked: true },
      responseTime: Date.now() - startedAt,
    };
  } catch (error) {
    console.error('[verify] internal registry lookup failed:', error);
    return {
      provider: 'SafeOrStolen Database',
      status: 'error',
      confidence: 0,
      message: 'Registry lookup unavailable',
      responseTime: Date.now() - startedAt,
    };
  }
}

/**
 * Oct 23 2026: Chicago Police "Find My Car" public search, live (stolen vehicles + stolen plates).
 * Only STLVEH (stolen vehicle) and STLPLT (stolen plates) records count; tows/repos/lost plates are ignored.
 */
async function runChicagoPolice(normalizedIdentifier: string, itemType: string, plateState?: string | null): Promise<SourceResult> {
  const startedAt = Date.now();
  const id = normalizedIdentifier.replace(/[^A-Z0-9]/g, '');
  const isPlate = itemType === 'plate';
  if (isPlate ? id.length < 2 : id.length !== 17) {
    return { provider: 'Chicago_Police_Records', status: 'unknown', confidence: 0, message: 'Not searchable in Chicago police records', responseTime: Date.now() - startedAt };
  }
  const url = `https://publicsearch2.chicagopolice.org/FindMyCar/Vehicle/Results?${isPlate ? 'LCS_PLT' : 'VIN'}=${encodeURIComponent(id)}`;
  try {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 12_000);
    const res = await fetch(url, { signal: ctl.signal, headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SafeOrStolen/1.0; +https://safeorstolen.com)' } });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const clean = (x: string) => x.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
    const body = html.split(/<tbody[^>]*>/i)[1]?.split(/<\/tbody>/i)[0] ?? '';
    const rows = [...body.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map((m) => [...m[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((c) => clean(c[1])));
    const hits = rows.filter((c) => c.length >= 8 && (c[0] === 'STLVEH' || c[0] === 'STLPLT'))
      .filter((c) => (isPlate ? c[4].replace(/[^A-Z0-9]/gi, '').toUpperCase() === id : c[3].replace(/[^A-Z0-9]/gi, '').toUpperCase() === id))
      .filter((c) => !(isPlate && plateState && /^[A-Z]{2}$/.test(plateState) && c[5] && c[5].toUpperCase() !== plateState));
    if (hits.length === 0) {
      return { provider: 'Chicago_Police_Records', status: 'unknown', confidence: 0, message: 'No match in Chicago police stolen-vehicle records', details: { checked: true }, responseTime: Date.now() - startedAt };
    }
    const c = hits[0];
    const car = [c[6], c[7], c[8]].filter(Boolean).join(' ');
    const what = c[0] === 'STLPLT' ? 'stolen license plates' : 'a stolen vehicle';
    if (!isPlate && c[0] === 'STLVEH') {
      return {
        provider: 'Chicago_Police_Records', status: 'stolen', confidence: 90,
        message: `Chicago Police list this VIN as a stolen vehicle (${car}${c[4] ? `, plate ${c[4]} ${c[5] || ''}`.trimEnd() : ''}, report ${c[1]}). Do not buy it. Contact the Chicago Police Department with the VIN.`,
        details: { checked: true, found: true }, responseTime: Date.now() - startedAt,
      };
    }
    return {
      provider: 'Chicago_Police_Records', status: 'unknown', confidence: 0,
      message: `⚠️ POSSIBLE MATCH: Chicago Police list this plate as ${what}${car ? ` (${car}${c[5] ? `, ${c[5]} plates` : ''})` : ''}, report ${c[1]}. If the vehicle or plate in front of you matches, do not buy it and contact the Chicago Police Department.`,
      details: { checked: true, possibleMatch: true }, responseTime: Date.now() - startedAt,
    };
  } catch (error) {
    console.error('[verify] Chicago police lookup failed:', error);
    return { provider: 'Chicago_Police_Records', status: 'error', confidence: 0, message: 'Chicago police records unavailable', responseTime: Date.now() - startedAt };
  }
}

/**
 * Oct 23 2026: police stolen-vehicle and stolen-plate records (theft_records, item_type vehicle/plate).
 * First source: Alaska's statewide stolen vehicle hot sheet (current reports).
 * A VIN is unique, so a VIN match is a real theft report. Plate numbers repeat across states, so a
 * plate match is a POSSIBLE match: we show the vehicle so the buyer can compare.
 */
async function runPoliceVehicleRecords(
  admin: AdminClient,
  normalizedIdentifier: string,
  itemType: string,
  plateState?: string | null,
): Promise<SourceResult> {
  const startedAt = Date.now();
  const id = normalizedIdentifier.replace(/[^A-Z0-9]/g, '');
  const isPlate = itemType === 'plate';
  if (id.length < (isPlate ? 2 : 11)) {
    return { provider: 'Police_Vehicle_Records', status: 'unknown', confidence: 0, message: 'Too short to search police stolen-vehicle records', responseTime: Date.now() - startedAt };
  }
  try {
    const { data, error } = await admin
      .from('theft_records')
      .select('make, model, description, state, agency, reported_date, status')
      .eq('item_type', isPlate ? 'plate' : 'vehicle')
      .eq('identifier_norm', id)
      .eq('status', 'stolen')
      .limit(5);
    if (error) throw error;
    let rows = (data ?? []) as any[];
    if (isPlate && plateState && /^[A-Z]{2}$/.test(plateState)) rows = rows.filter((r) => !r.state || r.state === plateState);
    if (rows.length === 0) {
      return { provider: 'Police_Vehicle_Records', status: 'unknown', confidence: 0, message: 'No match in Alaska police stolen-vehicle records', details: { checked: true }, responseTime: Date.now() - startedAt };
    }
    const r = rows[0];
    const car = [r.model, r.make].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
    const extra = [r.description, r.state ? `${r.state} plates` : ''].filter(Boolean).join(', ');
    const when = r.reported_date ? ` on ${r.reported_date}` : '';
    if (!isPlate) {
      return {
        provider: 'Police_Vehicle_Records', status: 'stolen', confidence: 90,
        message: `A police report lists this VIN as stolen: ${car}${extra ? ` (${extra})` : ''}, reported${when}${r.agency ? ` to ${r.agency}` : ''}. Do not buy it. Contact that police department with the VIN.`,
        details: { checked: true, found: true, matches: rows.length }, responseTime: Date.now() - startedAt,
      };
    }
    return {
      provider: 'Police_Vehicle_Records', status: 'unknown', confidence: 0,
      message: `⚠️ POSSIBLE MATCH: A police report lists a stolen vehicle with this plate: ${car}${extra ? ` (${extra})` : ''}, reported${when}${r.agency ? ` to ${r.agency}` : ''}. If the vehicle in front of you matches, do not buy it and contact that police department.`,
      details: { checked: true, possibleMatch: true }, responseTime: Date.now() - startedAt,
    };
  } catch (error) {
    console.error('[verify] police vehicle records lookup failed:', error);
    return { provider: 'Police_Vehicle_Records', status: 'error', confidence: 0, message: 'Police stolen-vehicle records unavailable', responseTime: Date.now() - startedAt };
  }
}

/**
 * Police firearm theft and loss reports from 34 states (theft_records).
 * Gun serial numbers repeat across manufacturers, so a serial match alone is a
 * POSSIBLE match: we show the reported make so the buyer can compare it to the
 * gun in front of them. It never produces a "stolen" verdict by itself.
 * A make whose latest report is "recovered" is not shown.
 */
async function runPoliceTheftRecords(
  admin: AdminClient,
  normalizedIdentifier: string,
): Promise<SourceResult> {
  const startedAt = Date.now();
  const serial = normalizedIdentifier.replace(/[^A-Z0-9]/g, '');
  if (serial.length < 5) {
    return {
      provider: 'Police_Theft_Records',
      status: 'unknown',
      confidence: 0,
      message: 'Serial too short to search police theft records',
      responseTime: Date.now() - startedAt,
    };
  }

  try {
    const { data, error } = await admin
      .from('theft_records')
      .select('make, model, caliber, state, reported_year, reported_date, status')
      .eq('item_type', 'firearm')
      .eq('identifier_norm', serial)
      .limit(25);
    if (error) throw error;

    // Latest report per make decides whether that make is still outstanding.
    const latestByMake = new Map<string, any>();
    for (const row of (data ?? []) as any[]) {
      const make = (row.make || 'Unknown make').trim().toUpperCase();
      const prev = latestByMake.get(make);
      const year = (r: any) => r?.reported_date ?? String(r?.reported_year ?? '');
      if (!prev || year(row) > year(prev)) latestByMake.set(make, row);
    }
    const open = [...latestByMake.entries()]
      .filter(([, r]) => r.status === 'stolen' || r.status === 'lost')
      .map(([make, r]) => ({
        make,
        model: r.model || null,
        caliber: r.caliber || null,
        state: r.state || null,
        year: r.reported_year ?? null,
        status: r.status as 'stolen' | 'lost',
      }));

    if (open.length === 0) {
      return {
        provider: 'Police_Theft_Records',
        status: 'unknown',
        confidence: 0,
        message: 'No match in police theft records from 33 states and DC',
        details: { checked: true },
        responseTime: Date.now() - startedAt,
      };
    }

    const describe = (m: (typeof open)[number]) =>
      [m.make, m.model].filter(Boolean).join(' ') +
      ` (reported ${m.status}${m.state ? ` in ${m.state}` : ''}${m.year ? `, ${m.year}` : ''})`;
    const listed = open.slice(0, 3).map(describe).join('; ');
    const makes = open.slice(0, 3).map((m) => m.make).join(' or ');
    return {
      provider: 'Police_Theft_Records',
      status: 'unknown',
      confidence: 0,
      message: `⚠️ POSSIBLE MATCH: A police report lists a gun with this serial number: ${listed}. Different manufacturers can use the same serial number, so check the make stamped on the gun. If it is made by ${makes}, do not buy it. Contact your local police with the serial number.`,
      details: { checked: true, possibleMatch: true, matches: open.slice(0, 10) },
      responseTime: Date.now() - startedAt,
    };
  } catch (error) {
    console.error('[verify] police theft records lookup failed:', error);
    return {
      provider: 'Police_Theft_Records',
      status: 'error',
      confidence: 0,
      message: 'Police theft records unavailable',
      responseTime: Date.now() - startedAt,
    };
  }
}

async function sendOwnerAlert(admin: AdminClient, reportId: string, area: string | null) {
  const { data: recent } = await admin
    .from('owner_alert_log').select('id')
    .eq('stolen_item_id', reportId)
    .gte('created_at', new Date(Date.now() - 3600_000).toISOString())
    .limit(1);
  if (recent && recent.length) return; // at most one alert per report per hour
  const { data: item } = await admin
    .from('stolen_items').select('id,user_id,item_type,brand,model,contact_pref').eq('id', reportId).maybeSingle();
  if (!item?.user_id || item.contact_pref === 'none') return;
  await admin.from('owner_alert_log').insert({ stolen_item_id: reportId, general_area: area });
  const apiKey = process.env['RESEND_API_KEY'];
  if (!apiKey) return;
  const { data: userData } = await admin.auth.admin.getUserById(item.user_id);
  const email = userData?.user?.email;
  if (!email) return;
  const name = [item.brand, item.model].filter(Boolean).join(' ') || item.item_type;
  const when = new Date().toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'long', timeStyle: 'short' }) + ' UTC';
  const esc = (v: string) => v.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  const html = `<p>Your reported ${esc(name)} was just checked on SafeOrStolen.</p>
<p><strong>When:</strong> ${esc(when)}<br/><strong>General area:</strong> ${esc(area || 'Not available')}</p>
<p>We never share who ran a check. If you think your item is being sold, contact the police department that took your report and give them this date and time. Do not try to recover the item yourself.</p>
<p>If you got your item back, mark it recovered in My items: https://safeorstolen.com/my-items</p>`;
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'SafeOrStolen <support@safeorstolen.com>',
      to: [email],
      subject: `Your reported ${name} was just checked`,
      html,
    }),
  });
}

/**
 * Free-usage allowance and plan limits, scoped to the account.
 * The database counter is authoritative; server instances are stateless.
 */
const ANON_LIFETIME_PER_IP = 6;

async function sha256Hex(v: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(v));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** No-account visitors: 2 lifetime free checks per browser, plus a lifetime cap per connection (bot protection). Nothing resets. */
async function anonymousGate(
  admin: AdminClient,
  fingerprint: string,
  clientIp: string | null,
): Promise<GateResult> {
  const ipKey = clientIp ? `ip:${(await sha256Hex(clientIp)).slice(0, 32)}` : null;
  const { data, error } = await admin.rpc('claim_lifetime_free_check' as never, {
    p_user_id: null, p_fingerprint: fingerprint, p_ip_key: ipKey,
  } as never);
  if (error || data !== true) return { allowed: false, reason: 'free_limit', plan: 'free', checksLimit: FREE_LIMIT };
  return { allowed: true, plan: 'free', checksRemaining: 0 };
}

/** Monthly plan includes 20 phone blacklist searches a month; a single check includes one. */
const MONTHLY_PHONE_BLACKLIST_LIMIT = 20;

async function phoneBlacklistAllowed(
  admin: AdminClient,
  userId: string | null,
  gate: GateAllowed,
): Promise<boolean> {
  if (gate.plan === 'free' && !isLaunchFree()) return false;
  if (gate.plan === 'single') {
    if (!gate.singleSubId) return false;
    // Claim this purchase's one phone blacklist search (only if not used yet).
    const { data: claimed } = await admin
      .from('subscriptions')
      .update({ phone_lookups_used: 1, updated_at: new Date().toISOString() })
      .eq('id', gate.singleSubId)
      .eq('phone_lookups_used', 0)
      .select('id');
    return !!claimed && claimed.length > 0;
  }
  if (!userId) return true;
  const monthStart = new Date();
  monthStart.setUTCDate(1);
  monthStart.setUTCHours(0, 0, 0, 0);
  const { count } = await admin
    .from('verification_searches')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)
    .in('item_type', ['phone', 'imei'])
    .gte('created_at', monthStart.toISOString());
  return (count ?? 0) < MONTHLY_PHONE_BLACKLIST_LIMIT;
}

/**
 * Oct 5 2026 fix: guests who paid (stripe-webhook stores the purchase against their browser
 * fingerprint) were sent straight to the free gate, so the check they bought was never used.
 * Use a paid guest purchase before any free check.
 */
async function guestPaidGate(admin: AdminClient, fingerprint: string): Promise<GateAllowed | null> {
  const { data: rows } = await admin
    .from('subscriptions')
    .select('*')
    .eq('status', 'active')
    .eq('fingerprint', fingerprint)
    .is('user_id', null);
  const now = new Date();
  const list: any[] = rows ?? [];
  const monthly = list.find((r) => r.plan !== 'single' && (!r.period_end || new Date(r.period_end) > now));
  if (monthly) return { allowed: true, plan: monthly.plan, checksRemaining: null };
  const single = list.find((r) => r.plan === 'single' && (r.checks_used_this_month ?? 0) < SINGLE_CHECKS);
  if (!single) return null;
  // Claim it only if still unused, so two tabs can't spend one purchase twice.
  let claim = admin
    .from('subscriptions')
    .update({ checks_used_this_month: (single.checks_used_this_month ?? 0) + 1, updated_at: now.toISOString() })
    .eq('id', single.id);
  claim = single.checks_used_this_month == null
    ? claim.is('checks_used_this_month', null)
    : claim.eq('checks_used_this_month', single.checks_used_this_month);
  const { data: claimed } = await claim.select('id');
  if (!claimed || claimed.length === 0) return null;
  return { allowed: true, plan: 'single', checksRemaining: SINGLE_CHECKS - ((single.checks_used_this_month ?? 0) + 1), singleSubId: single.id };
}

async function claimGuestPurchasesByEmail(admin: AdminClient, userId: string): Promise<boolean> {
  try {
    const { data: u } = await admin.auth.admin.getUserById(userId);
    const email = u?.user?.email?.trim().toLowerCase();
    // Only a confirmed email can claim, so nobody can take a purchase by signing up with someone else's address.
    if (!email || !u?.user?.email_confirmed_at) return false;
    const { data: buys } = await admin
      .from('purchases')
      .select('stripe_session_id')
      .eq('guest_email', email)
      .eq('status', 'completed');
    const ids = (buys ?? []).map((b: any) => b.stripe_session_id).filter((v: unknown): v is string => typeof v === 'string' && v.length > 0);
    if (ids.length === 0) return false;
    const { data: moved } = await admin
      .from('subscriptions')
      .update({ user_id: userId, updated_at: new Date().toISOString() })
      .in('stripe_subscription_id', ids)
      .is('user_id', null)
      .select('id');
    return (moved?.length ?? 0) > 0;
  } catch (e) {
    console.error('[gate] guest purchase claim failed', e);
    return false;
  }
}

export async function checkUsageGate(
  admin: AdminClient,
  userId: string | null,
  fingerprint: string | null,
  clientIp: string | null = null,
): Promise<GateResult> {
  if (!userId) {
    if (!fingerprint) return { allowed: false, reason: 'free_limit', plan: 'free', checksLimit: FREE_LIMIT };
    const paid = await guestPaidGate(admin, fingerprint);
    if (paid) return paid;
    return anonymousGate(admin, fingerprint, clientIp);
  }
  // A user can have several rows (e.g. two single-check purchases), so load
  // them all instead of maybeSingle(), which returns nothing when >1 match.
  const byUser = await admin
    .from('subscriptions')
    .select('*')
    .eq('status', 'active')
    .eq('user_id', userId);
  let subRows: any[] = byUser.data ?? [];

  // Oct 5 2026: a guest purchase paid with this account's (confirmed) email moves to the account,
  // so a customer can use it from any device after signing in.
  if (subRows.length === 0 && (await claimGuestPurchasesByEmail(admin, userId))) {
    const again = await admin.from('subscriptions').select('*').eq('status', 'active').eq('user_id', userId);
    subRows = again.data ?? [];
  }

  if (subRows.length === 0 && fingerprint) {
    const byFingerprint = await admin
      .from('subscriptions')
      .select('*')
      .eq('status', 'active')
      .eq('fingerprint', fingerprint);
    subRows = byFingerprint.data ?? [];
  }

  // Monthly rows are written once at checkout and never updated on renewal or
  // cancellation, so a lapsed period_end is not trusted here; renewals are
  // checked against profiles.subscription_end (kept current by stripe-webhook).
  // A single-check purchase stays valid until it is used.
  const now = new Date();
  const usable = (r: any) =>
    r.plan === 'single'
      ? (r.checks_used_this_month ?? 0) < SINGLE_CHECKS
      : !r.period_end || new Date(r.period_end) > now;
  const sub: any =
    subRows.find((r) => r.plan !== 'single' && usable(r)) ??
    subRows.find((r) => r.plan === 'single' && usable(r)) ??
    null;
  const hasUsedSingle = subRows.some((r) => r.plan === 'single' && !usable(r));

  if (sub) {
    const used = sub.checks_used_this_month ?? 0;
    if (sub.plan === 'single' && used >= SINGLE_CHECKS) {
      return { allowed: false, reason: 'single_used', plan: 'single' };
    }
    if (sub.plan === 'basic' && used >= 50) {
      return { allowed: false, reason: 'monthly_limit', plan: 'basic', checksLimit: 50 };
    }

    let claim = admin.from('subscriptions')
      .update({ checks_used_this_month: used + 1, updated_at: new Date().toISOString() })
      .eq('id', sub.id);
    claim = sub.checks_used_this_month == null
      ? claim.is('checks_used_this_month', null)
      : claim.eq('checks_used_this_month', used);
    const { data: claimed, error: claimError } = await claim.select('id');
    if (claimError || !claimed?.length) return { allowed: false, reason: 'single_used', plan: sub.plan };

    return {
      allowed: true,
      plan: sub.plan,
      checksRemaining: sub.plan === 'basic' ? 50 - (used + 1) : sub.plan === 'single' ? SINGLE_CHECKS - (used + 1) : null,
      ...(sub.plan === 'single' ? { singleSubId: sub.id } : {}),
    };
  }

  const { data: profile } = await admin
    .from('profiles')
    .select('subscription_tier, subscription_end')
    .eq('id', userId)
    .maybeSingle();

  if (profile?.subscription_tier) {
    // Recurring plans only. 'pay_per_use' is a one-time purchase with no end
    // date, so treating it as a plan here gave unlimited checks forever; its
    // single check is counted through the subscriptions row above.
    const paidTiers = [
      'unlimited',
      'starter',
      'personal',
      'professional',
      'enterprise',
    ];
    const active =
      paidTiers.includes(profile.subscription_tier) &&
      (!profile.subscription_end || new Date(profile.subscription_end) > new Date());
    if (active) {
      return { allowed: true, plan: profile.subscription_tier, checksRemaining: null };
    }
  }

  if (hasUsedSingle) {
    return { allowed: false, reason: 'single_used', plan: 'single' };
  }

  const { data, error } = await admin.rpc('claim_lifetime_free_check' as never, {
    p_user_id: userId, p_fingerprint: fingerprint ?? `user:${userId}`, p_ip_key: null,
  } as never);
  if (error || data !== true) return { allowed: false, reason: 'free_limit', plan: 'free', checksLimit: FREE_LIMIT };
  return { allowed: true, plan: 'free', checksRemaining: 0 };
}

/**
 * Run the full verification for an authenticated user.
 */
export async function runVerification(
  admin: AdminClient,
  userId: string | null,
  input: VerifyInput,
  gate: GateAllowed,
): Promise<VerifyResponse> {
  const itemType = toCanonicalItemType(input.itemType ?? undefined);
  const cleanIdentifier = input.identifier.trim().toUpperCase();
  const normalizedIdentifier = cleanIdentifier.replace(/[\s-]/g, '');

  const tasks: Promise<SourceResult>[] = [
    runInternalRegistry(admin, cleanIdentifier, normalizedIdentifier),
  ];

  const sources = sourcesForItemType(itemType);
  if (sources.includes('bikeindex')) {
    tasks.push(runSource('BikeIndex', 'verify-bikeindex', { identifier: cleanIdentifier }));
  }
  if (sources.includes('imei')) {
    // Oct 5 2026 fix: the paid blacklist search never ran (verify-imei only runs it when told the
    // check is paid, and nothing told it). Paid checks now get it; the lookup can take ~30s.
    const blacklist = await phoneBlacklistAllowed(admin, userId, gate);
    tasks.push(
      runSource('IMEI_Verification', 'verify-imei', { identifier: cleanIdentifier, paid: blacklist }, blacklist ? 45_000 : undefined),
    );
  }
  if (sources.includes('vehicle')) {
    // Plates are searched against Arizona law-enforcement stolen-vehicle records with the state that
    // issued the plate (a Texas-plated car stolen in Arizona is listed under TX). VINs get the full
    // vehicle check. Records come from Arizona agencies only, whatever the plate state.
    const plateState = /^[A-Z]{2}$/.test(input.plateState ?? '') ? input.plateState! : 'AZ';
    const body =
      itemType === 'plate'
        ? { plate: normalizedIdentifier, state: plateState }
        : { identifier: cleanIdentifier };
    tasks.push(runSource('Vehicle_Verification', 'verify-vehicle', body));
    tasks.push(runPoliceVehicleRecords(admin, normalizedIdentifier, itemType, input.plateState ?? null));
    tasks.push(runChicagoPolice(normalizedIdentifier, itemType, input.plateState ?? null));
  }
  if (sources.includes('hotgunz')) {
    // verify-hotgunz now searches the Ohio Attorney General stolen gun database (Sept 28 2026).
    tasks.push(runSource('Firearm_Verification', 'verify-hotgunz', { identifier: cleanIdentifier }));
    tasks.push(runPoliceTheftRecords(admin, normalizedIdentifier));
  }
  // Oct 28 2026 (owner): web search and AI review cost money per call (credits ran out before), so they run
  // on paid checks only. Free checks still search every police, registry and SafeOrStolen record.
  const paidCheck = gate.plan !== 'free';
  if (sources.includes('webscraper') && paidCheck) {
    tasks.push(runWebScraper(cleanIdentifier, itemType));
  }
  if (sources.includes('ai') && paidCheck) {
    tasks.push(runAIAnalysis(cleanIdentifier, itemType));
  }

  const settled = await Promise.allSettled(tasks);
  const providers: SourceResult[] = settled.map((entry, index) =>
    entry.status === 'fulfilled'
      ? entry.value
      : {
          provider: `Source ${index + 1}`,
          status: 'error' as const,
          confidence: 0,
          message: 'Source unavailable',
        },
  );

  const verdict = decideVerdict(providers);

  // Owner alert: tell the reporter their item was just checked (never who checked).
  const registry = providers.find((p) => p.provider === 'SafeOrStolen Database');
  const reportIds = (registry?.status === 'stolen' && (registry.details as any)?.reportIds) || [];
  for (const reportId of reportIds as string[]) {
    try {
      await sendOwnerAlert(admin, reportId, input.area ?? null);
    } catch (error) {
      console.error('[verify] owner alert failed:', error);
    }
  }

  const result: VerifyResponse = {
    identifier: cleanIdentifier,
    itemType,
    finalStatus: verdict.finalStatus,
    confidence: verdict.confidence,
    riskLevel: verdict.riskLevel,
    message: verdict.message,
    providers,
    checkedSources: providers.map((p) => p.provider),
    checksRemaining: gate.checksRemaining,
    plan: gate.plan,
    timestamp: new Date().toISOString(),
  };

  try {
    const { data: saved } = await admin.from('verification_searches').insert({
      user_id: userId,
      fingerprint: userId ? null : (input.fingerprint ?? null),
      serial_number: cleanIdentifier,
      item_type: itemType,
      result: {
        status: result.finalStatus,
        confidence: result.confidence,
        riskLevel: result.riskLevel,
        message: result.message,
        providers: providers.map((p) => ({
          provider: p.provider,
          status: p.status,
          confidence: p.confidence,
        })),
        checkedSources: result.checkedSources,
      },
    }).select('id').single();
    result.checkId = saved?.id ?? null;
  } catch (error) {
    console.error('[verify] failed to record search:', error);
  }

  // Dashboard history only exists for signed-in users.
  if (userId) try {
    // Column set matches the table: there is no `status`/`details` column —
    // the verdict lives in verification_status, the detail in risk_assessment.
    await admin.from('verification_results').insert({
      user_id: userId,
      serial_number: cleanIdentifier,
      item_type: itemType,
      api_source: 'app-server-verify',
      verification_status: result.finalStatus,
      confidence_score: result.confidence,
      risk_assessment: {
        riskLevel: result.riskLevel,
        message: result.message,
        providers: providers.map((p) => ({
          provider: p.provider,
          status: p.status,
          confidence: p.confidence,
        })),
      },
    });
  } catch (error) {
    console.error('[verify] failed to record result:', error);
  }

  return result;
}
