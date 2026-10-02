import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { runParallelVerification } from './parallel-verification.ts';
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

// RULES (Sept 2026 - no-hallucination fix):
// 1. Only real data sources (theft registries/databases) can produce a STOLEN verdict.
// 2. AI_Analysis is advisory only. It can never set the verdict.
// 3. Web page mentions are "possible match", never "reported stolen".
// 4. "Not found" in our own registry is not evidence of safety.
// 5. (Sept 27) Bad input (e.g. invalid VIN) and data mismatches (e.g. VIN vs. listing) are shown
//    to the user as high-risk warnings, never hidden as "unavailable".
// 6. (Sept 30) PAYWALL: paid lookups that cost us money (phone blacklist) only run for paying
//    customers. Paid status is decided HERE on the server, never trusted from the browser.

const AI_SOURCES = new Set(['AI_Analysis']);
const WEB_SOURCES = new Set(['Web_Scraper']);
const INTERNAL_REGISTRY = 'SafeOrStolen Database';
const PAID_TIERS = ['unlimited', 'starter', 'personal', 'professional', 'enterprise', 'pay_per_use'];

// Owner rule (Sept 30 2026): never name our data suppliers to users. Describe the TYPE of source only.
const DISPLAY: Record<string, string> = {
  'SafeOrStolen Database': 'the SafeOrStolen registry',
  'BikeIndex': 'a national stolen-bicycle registry',
  'HotGunz': 'a stolen-firearm database',
  'IMEI_Verification': 'the lost and stolen phone blacklist',
  'Vehicle_Verification': 'law-enforcement vehicle records',
  'Web_Scraper': 'a public web search',
  'AI_Analysis': 'an AI risk review',
};
const displayName = (p: string) => DISPLAY[p] || String(p).replace(/_/g, ' ');
const SCRUB: Array<[RegExp, string]> = [
  [/\s*\(via IMEI\.info\)/gi, ''], [/IMEI\.info/gi, 'the phone blacklist'],
  [/Bike ?Index stolen bike registry/gi, 'national stolen-bicycle registry'],
  [/the Bike ?Index registry/gi, 'a national stolen-bicycle registry'], [/Bike ?Index/gi, 'a national bike registry'],
  [/HotGunz/gi, 'a stolen-firearm database'],
  [/\s*\(TheftAZ[^)]*\)/gi, ''], [/TheftAZ/gi, 'Arizona law-enforcement records'],
  [/NHTSA/g, 'federal'],
];
const scrub = (t: any) => (typeof t === 'string' ? SCRUB.reduce((s, [r, v]) => s.replace(r, v), t) : t);
const cap = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);
function scrubDetails(d: any) {
  if (!d || typeof d !== 'object') return d;
  const o = { ...d };
  if (Array.isArray(o.databases)) o.databases = o.databases.map(scrub);
  if (Array.isArray(o.notChecked)) o.notChecked = o.notChecked.map(scrub);
  if (o.blacklistProvider) o.blacklistProvider = 'phone_blacklist';
  return o;
}

interface VerificationRequest {
  identifier: string;
  itemType: string;
  userId?: string;
  fingerprint?: string;
}

function isPhoneType(t: string): boolean {
  const s = (t || '').toLowerCase();
  return s.includes('phone') || s.includes('mobile') || s.includes('imei') || s.includes('cell');
}

// Oct 1 2026: phone blacklist searches cost us money (about 42 cents each), so they are counted.
//  - Single check ($0.99): exactly 1 phone blacklist search.
//  - $10/month plan: 20 phone blacklist searches per 30 days. Everything else stays unlimited.
//  - Subscribers who signed up before Oct 2 2026 keep true unlimited (they were promised it).
//  - Expired plans do not count as paid.
const PHONE_CAP_PER_MONTH = 20;
const GRANDFATHER_BEFORE = new Date('2026-10-02T00:00:00Z');
const UNLIMITED_PLANS = ['pro', 'unlimited', 'enterprise', 'professional', 'personal', 'starter', 'pay_per_use'];

type Allowance = { allowed: boolean; reason: 'free' | 'ok' | 'single_used' | 'monthly_cap' };

const cleanFp = (fp?: string) => (typeof fp === 'string' && /^[A-Za-z0-9_\-:.]{6,200}$/.test(fp.trim()) ? fp.trim() : '');

async function countPaidPhoneLookups(supabase: any, userId: string | null, fingerprint: string, since: Date): Promise<number> {
  let total = 0;
  if (userId) {
    const { count } = await supabase.from('verification_searches').select('id', { count: 'exact', head: true })
      .eq('user_id', userId).eq('result->>paidLookup', 'true').gte('created_at', since.toISOString());
    total += count || 0;
  }
  if (fingerprint) {
    const { count } = await supabase.from('verification_searches').select('id', { count: 'exact', head: true })
      .eq('fingerprint', fingerprint).eq('result->>paidLookup', 'true').gte('created_at', since.toISOString());
    total += count || 0;
  }
  return total;
}

async function phoneLookupAllowance(supabase: any, userId: string | null, fingerprintRaw?: string): Promise<Allowance> {
  try {
    const fingerprint = cleanFp(fingerprintRaw);
    const now = new Date();
    const subs: any[] = [];
    if (userId) {
      const { data } = await supabase.from('subscriptions').select('plan, checks_limit, period_end, created_at').eq('status', 'active').eq('user_id', userId);
      subs.push(...(data || []));
    }
    if (fingerprint) {
      const { data } = await supabase.from('subscriptions').select('plan, checks_limit, period_end, created_at').eq('status', 'active').eq('fingerprint', fingerprint);
      subs.push(...(data || []));
    }
    const live = subs.filter((x) => !x.period_end || new Date(x.period_end) > now);

    // Legacy paid tier stored on the profile (older accounts): keep them working.
    if (!live.length && userId) {
      const { data: p } = await supabase.from('profiles').select('subscription_tier, subscription_end').eq('id', userId).maybeSingle();
      if (p && PAID_TIERS.includes(p.subscription_tier) && (!p.subscription_end || new Date(p.subscription_end) > now)) return { allowed: true, reason: 'ok' };
    }
    if (!live.length) return { allowed: false, reason: 'free' };

    let blocked: Allowance['reason'] = 'free';
    for (const sub of live) {
      const plan = String(sub.plan || '').toLowerCase();
      const created = new Date(sub.created_at);
      const isUnlimited = UNLIMITED_PLANS.includes(plan) || (sub.checks_limit || 0) >= 1000;
      if (isUnlimited) {
        if (created < GRANDFATHER_BEFORE) return { allowed: true, reason: 'ok' };
        const since = new Date(now.getTime() - 30 * 24 * 3600 * 1000);
        const used = await countPaidPhoneLookups(supabase, userId, fingerprint, since);
        if (used < PHONE_CAP_PER_MONTH) return { allowed: true, reason: 'ok' };
        blocked = 'monthly_cap';
      } else {
        // Limited plans (single = 1, older "basic" plans = their own limit)
        const limit = Math.max(1, sub.checks_limit || 1);
        const used = await countPaidPhoneLookups(supabase, userId, fingerprint, created);
        if (used < limit) return { allowed: true, reason: 'ok' };
        if (blocked !== 'monthly_cap') blocked = 'single_used';
      }
    }
    return { allowed: false, reason: blocked };
  } catch (e) {
    console.error('[verify-item] allowance check error:', e);
    return { allowed: false, reason: 'free' };
  }
}

serve(async (req) => {
  const corsResponse = handleCorsPreFlight(req);
  if (corsResponse) return corsResponse;

  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    let authenticatedUserId: string | null = null;
    const authHeader = req.headers.get('Authorization');
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      const { data: { user } } = await supabaseClient.auth.getUser(token);
      if (user) authenticatedUserId = user.id;
    }

    const { identifier, itemType, fingerprint } = await req.json() as VerificationRequest;

    if (!identifier || identifier.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Identifier is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    if (!authenticatedUserId && !fingerprint) {
      return new Response(JSON.stringify({ error: 'Fingerprint required for anonymous verification', code: 'FINGERPRINT_REQUIRED' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const startTime = Date.now();
    const cleanIdentifier = identifier.trim().toUpperCase();
    const providers: any[] = [];
    const phone = isPhoneType(itemType || '');
    // Only phone checks cost us money, so only they go through the allowance check.
    const allowance: Allowance = phone ? await phoneLookupAllowance(supabaseClient, authenticatedUserId, fingerprint) : { allowed: false, reason: 'free' };
    const paid = allowance.allowed;
    console.log(`[verify-item] type=${itemType} paid=${paid}`);

    // Internal registry: a match is real evidence; no match is NOT evidence of safety.
    try {
      const { data: stolenItems, error } = await supabaseClient
        .from('stolen_items')
        .select('*')
        .or(`serial_number.ilike.%${cleanIdentifier}%,imei.ilike.%${cleanIdentifier}%,vin.ilike.%${cleanIdentifier}%`)
        .limit(5);

      if (!error && stolenItems && stolenItems.length > 0) {
        providers.push({ provider: INTERNAL_REGISTRY, status: 'stolen', confidence: 98,
          message: 'Item found in SafeOrStolen stolen items registry', details: { matches: stolenItems.length }, displayName: displayName(INTERNAL_REGISTRY),
          responseTime: Date.now() - startTime });
      } else {
        providers.push({ provider: INTERNAL_REGISTRY, status: 'unknown', confidence: 0,
          message: 'No report in the SafeOrStolen registry', displayName: displayName(INTERNAL_REGISTRY), responseTime: Date.now() - startTime });
      }
    } catch (dbError) {
      console.error('[verify-item] Database check error:', dbError);
    }

    try {
      const parallelResult = await runParallelVerification(supabaseClient, {
        identifier: cleanIdentifier, itemType: itemType || 'unknown', includeWebScraping: true, includeAI: true, paid
      });
      const sources = parallelResult.details?.all_sources || [parallelResult];
      for (const source of sources) {
        if (!providers.find(p => p.provider === source.source)) {
          providers.push({ provider: source.source, status: source.status, confidence: source.confidence,
            message: scrub(source.message), details: scrubDetails(source.details), displayName: displayName(source.source), responseTime: source.responseTime || (Date.now() - startTime) });
        }
      }
    } catch (parallelError) {
      console.error('[verify-item] Parallel verification error:', parallelError);
    }

    const dataSources = providers.filter(p => !AI_SOURCES.has(p.provider) && !WEB_SOURCES.has(p.provider));
    const webSources = providers.filter(p => WEB_SOURCES.has(p.provider));
    const aiSources = providers.filter(p => AI_SOURCES.has(p.provider));

    const stolenFrom = dataSources.filter(p => p.status === 'stolen');
    const lostFrom = dataSources.filter(p => p.status === 'lost');
    const invalidFrom = dataSources.filter(p => p.status === 'error' && p.details?.invalidInput);
    const suspiciousFrom = dataSources.filter(p => p.status === 'suspicious');
    const cleanFrom = dataSources.filter(p => p.status === 'safe' && p.confidence > 0);
    const webFlag = webSources.filter(p => p.status === 'stolen');

    let finalStatus: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
    let riskLevel: 'low' | 'medium' | 'high' | 'critical';
    let message: string;
    let confidence: number;

    if (stolenFrom.length > 0) {
      finalStatus = 'stolen';
      riskLevel = 'critical';
      confidence = Math.max(...stolenFrom.map(p => p.confidence));
      message = `🚨 THEFT REPORT FOUND: ${cap(stolenFrom.map(p => displayName(p.provider)).join(', '))} lists this item as lost or stolen. Do NOT purchase until this is resolved with police.`;
    } else if (lostFrom.length > 0) {
      finalStatus = 'lost';
      riskLevel = 'high';
      confidence = Math.max(...lostFrom.map(p => p.confidence));
      message = `⚠️ LOST REPORT FOUND: ${cap(lostFrom.map(p => displayName(p.provider)).join(', '))} lists this item as lost. Exercise extreme caution.`;
    } else if (invalidFrom.length > 0) {
      finalStatus = 'unknown';
      riskLevel = 'high';
      confidence = 0;
      message = `⚠️ CHECK THIS NUMBER: ${invalidFrom[0].message} Re-enter it carefully. If the seller's paperwork or the item itself shows this exact number, treat that as a serious red flag.`;
    } else if (suspiciousFrom.length > 0) {
      finalStatus = 'unknown';
      riskLevel = 'high';
      confidence = 0;
      message = scrub(suspiciousFrom[0].message) || '⚠️ The details do not match. Do not buy until this is explained.';
    } else if (webFlag.length > 0) {
      finalStatus = 'unknown';
      riskLevel = 'high';
      confidence = 50;
      message = '⚠️ POSSIBLE MATCH: A web page may mention this number in a theft context. This is not an official report. Ask the seller for proof of ownership before buying.';
    } else if (cleanFrom.length > 0) {
      finalStatus = 'safe';
      riskLevel = 'low';
      confidence = Math.round(cleanFrom.reduce((s, p) => s + p.confidence, 0) / cleanFrom.length);
      const names = cleanFrom.map(p => displayName(p.provider)).join(', ');
      message = `✅ NO THEFT REPORTS FOUND in ${names}. No check can guarantee an item was never stolen, so keep your receipt and the seller's info.`;
    } else if (phone && !paid) {
      finalStatus = 'unknown';
      riskLevel = 'medium';
      confidence = 0;
      message = allowance.reason === 'monthly_cap'
        ? `🔒 This IMEI number is real and correctly formed. You've used this month's ${PHONE_CAP_PER_MONTH} phone blacklist searches on your plan. Run a single full check for $0.99 to search the lost and stolen phone blacklist now.`
        : allowance.reason === 'single_used'
          ? '🔒 This IMEI number is real and correctly formed. Your single check has already been used. Run another full check for $0.99 to search the lost and stolen phone blacklist.'
          : '🔒 FREE CHECK DONE: This IMEI number is real and correctly formed. The official lost and stolen phone blacklist search is part of the full check. Run the full check before you hand over any money.';
    } else {
      finalStatus = 'unknown';
      riskLevel = 'medium';
      confidence = 0;
      // Oct 1 2026: if a real database answered (e.g. state stolen-gun or vehicle records), say so
      // instead of claiming nothing could be checked.
      const answered = dataSources.find(p => p.provider !== INTERNAL_REGISTRY && (p.details?.databases?.length || 0) > 0 && p.message);
      message = answered
        ? `ℹ️ ${scrub(answered.message)}`
        : '⚠️ NO THEFT REPORTS FOUND, but no theft database for this item type could confirm it. Ask the seller for proof of ownership and keep a record of the sale.';
    }

    const imeiProvider = providers.find(p => p.provider === 'IMEI_Verification');
    const paidLookup = !!(paid && imeiProvider?.details?.blacklistChecked);

    const aiNotes = aiSources.map(p => ({ note: scrub(p.message), riskLevel: p.details?.risk_level, reasoning: p.details?.reasoning })).filter(n => n.note);

    const result: Record<string, unknown> = {
      identifier: cleanIdentifier,
      itemType: itemType || 'unknown',
      finalStatus, confidence, riskLevel, message,
      providers,
      aiNotes,
      aiDisclaimer: aiNotes.length ? 'AI notes are general guidance only and never determine whether an item is stolen.' : undefined,
      checkedSources: providers.map(p => p.provider),
      checkedSourceNames: providers.map(p => displayName(p.provider)),
      paidCheck: paid,
      upgradeRequired: phone && !paid,
      upgradeReason: phone && !paid ? allowance.reason : undefined,
      timestamp: new Date().toISOString(),
    };

    try {
      const { data: inserted } = await supabaseClient
        .from('verification_searches')
        .insert({
          user_id: authenticatedUserId,
          serial_number: cleanIdentifier,
          item_type: itemType || 'unknown',
          fingerprint: authenticatedUserId ? null : fingerprint,
          result: { status: finalStatus, confidence, riskLevel, message, paid, paidLookup,
            providers: providers.map(p => ({ provider: p.provider, status: p.status, confidence: p.confidence })),
            checkedSources: providers.map(p => p.provider), verdictRules: 'v4-paywall' },
        })
        .select('id, share_token')
        .single();
      if (inserted?.share_token) {
        result.shareToken = inserted.share_token;
        result.shareUrl = `https://safeorstolen.com/verification/shared/${inserted.share_token}`;
      }
    } catch (searchError) {
      console.error('[verify-item] Failed to store search:', searchError);
    }

    if (authenticatedUserId) {
      const { error: storeError } = await supabaseClient
        .from('verification_results')
        .insert({
          user_id: authenticatedUserId,
          serial_number: cleanIdentifier,
          item_type: itemType || 'unknown',
          verification_status: finalStatus,
          confidence_score: confidence,
          api_source: 'verify-item',
          api_response: { providers, riskLevel, message, aiNotes },
          risk_assessment: { riskLevel, finalStatus },
        });
      if (storeError) console.error('[verify-item] Failed to store result:', storeError);
      result.savedToDashboard = !storeError;
    } else {
      result.savedToDashboard = false;
    }

    console.log(`[verify-item] Complete in ${Date.now() - startTime}ms - Status: ${finalStatus}`);
    return new Response(JSON.stringify(result), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

  } catch (error) {
    console.error('[verify-item] Internal error:', error);
    return new Response(JSON.stringify({
      error: 'Verification failed', code: 'INTERNAL_ERROR', finalStatus: 'error', riskLevel: 'medium',
      message: 'Unable to complete verification. Please try again.', providers: [], checkedSources: [],
      timestamp: new Date().toISOString(),
    }), { status: 500, headers: { ...getCorsHeaders(req.headers.get('origin')), 'Content-Type': 'application/json' } });
  }
});
