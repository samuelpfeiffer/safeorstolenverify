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
const FREE_LIMIT = 2;

export interface VerifyInput {
  identifier: string;
  itemType?: string | null;
  fingerprint?: string | null;
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
    signal: AbortSignal.timeout(SOURCE_TIMEOUT_MS),
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
    details: payload?.details,
  };
}

async function runSource(
  provider: string,
  slug: string,
  body: Record<string, unknown>,
): Promise<SourceResult> {
  const startedAt = Date.now();
  try {
    const payload = await callSource(slug, body);
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
      admin.from('stolen_items').select('*').in('serial_number', candidates).limit(5),
      admin.from('stolen_items').select('*').in('imei', candidates).limit(5),
      admin.from('stolen_items').select('*').in('vin', candidates).limit(5),
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
        message: 'Item found in SafeOrStolen stolen items registry',
        details: { matches: matches.length },
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

    return {
      provider: 'SafeOrStolen Database',
      status: 'safe',
      confidence: 85,
      message: 'Not found in SafeOrStolen stolen items registry',
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
 * Free-usage allowance and plan limits, scoped to the account.
 * The database counter is authoritative; server instances are stateless.
 */
export async function checkUsageGate(
  admin: AdminClient,
  userId: string,
  fingerprint: string | null,
): Promise<GateResult> {
  let sub: any = null;

  const byUser = await admin
    .from('subscriptions')
    .select('*')
    .eq('status', 'active')
    .eq('user_id', userId)
    .maybeSingle();
  sub = byUser.data ?? null;

  if (!sub && fingerprint) {
    const byFingerprint = await admin
      .from('subscriptions')
      .select('*')
      .eq('status', 'active')
      .eq('fingerprint', fingerprint)
      .maybeSingle();
    sub = byFingerprint.data ?? null;
  }

  if (sub) {
    const used = sub.checks_used_this_month ?? 0;
    if (sub.plan === 'single' && used >= 1) {
      return { allowed: false, reason: 'single_used', plan: 'single' };
    }
    if (sub.plan === 'basic' && used >= 50) {
      return { allowed: false, reason: 'monthly_limit', plan: 'basic', checksLimit: 50 };
    }

    await admin
      .from('subscriptions')
      .update({ checks_used_this_month: used + 1, updated_at: new Date().toISOString() })
      .eq('id', sub.id);

    return {
      allowed: true,
      plan: sub.plan,
      checksRemaining: sub.plan === 'basic' ? 50 - (used + 1) : null,
    };
  }

  const { data: profile } = await admin
    .from('profiles')
    .select('subscription_tier, subscription_end')
    .eq('id', userId)
    .maybeSingle();

  if (profile?.subscription_tier) {
    const paidTiers = [
      'unlimited',
      'starter',
      'personal',
      'professional',
      'enterprise',
      'pay_per_use',
    ];
    const active =
      paidTiers.includes(profile.subscription_tier) &&
      (!profile.subscription_end || new Date(profile.subscription_end) > new Date());
    if (active) {
      return { allowed: true, plan: profile.subscription_tier, checksRemaining: null };
    }
  }

  // Free tier: account-scoped, adopting this browser's pre-signup row so
  // earlier free checks still count.
  const { data: byAccount } = await admin
    .from('usage_tracking')
    .select('*')
    .eq('user_id', userId)
    .order('last_check_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  let usage: any = byAccount ?? null;

  if (!usage && fingerprint) {
    const { data: byFingerprint } = await admin
      .from('usage_tracking')
      .select('*')
      .eq('fingerprint', fingerprint)
      .maybeSingle();
    usage = byFingerprint ?? null;
  }

  if (!usage) {
    await admin.from('usage_tracking').insert({
      fingerprint: fingerprint ?? `user:${userId}`,
      user_id: userId,
      check_count: 1,
      last_check_at: new Date().toISOString(),
    });
    return { allowed: true, plan: 'free', checksRemaining: FREE_LIMIT - 1 };
  }

  // Lifetime allowance: 2 free checks total per account, never reset.
  // Sum every usage row tied to this account so extra rows can't add checks.
  const { data: allRows } = await admin
    .from('usage_tracking')
    .select('check_count')
    .eq('user_id', userId);
  const lifetimeUsed = Math.max(
    usage.check_count ?? 0,
    (allRows ?? []).reduce((s: number, r: any) => s + (r.check_count ?? 0), 0),
  );

  if (lifetimeUsed >= FREE_LIMIT) {
    return {
      allowed: false,
      reason: 'free_limit',
      plan: 'free',
      checksUsed: lifetimeUsed,
      checksLimit: FREE_LIMIT,
    };
  }

  const newCount = (usage.check_count ?? 0) + 1;
  await admin
    .from('usage_tracking')
    .update({ check_count: newCount, last_check_at: new Date().toISOString(), user_id: userId })
    .eq('id', usage.id);

  return { allowed: true, plan: 'free', checksRemaining: FREE_LIMIT - newCount };
}

/**
 * Run the full verification for an authenticated user.
 */
export async function runVerification(
  admin: AdminClient,
  userId: string,
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
    tasks.push(runSource('IMEI_Verification', 'verify-imei', { identifier: cleanIdentifier }));
  }
  if (sources.includes('vehicle')) {
    // Plates search TheftAZ (Arizona law enforcement records) by plate; VINs get the full vehicle check.
    const body =
      itemType === 'plate'
        ? { plate: normalizedIdentifier, state: 'AZ' }
        : { identifier: cleanIdentifier };
    tasks.push(runSource('Vehicle_Verification', 'verify-vehicle', body));
  }
  if (sources.includes('hotgunz')) {
    tasks.push(runSource('HotGunz', 'verify-hotgunz', { identifier: cleanIdentifier }));
  }
  if (sources.includes('webscraper')) {
    tasks.push(runWebScraper(cleanIdentifier, itemType));
  }
  if (sources.includes('ai')) {
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
    await admin.from('verification_searches').insert({
      user_id: userId,
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
    });
  } catch (error) {
    console.error('[verify] failed to record search:', error);
  }

  try {
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
