import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;
const MAX_REQUESTS_AUTHENTICATED = 30;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(identifier: string, isAuthenticated: boolean): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const limit = isAuthenticated ? MAX_REQUESTS_AUTHENTICATED : MAX_REQUESTS_PER_WINDOW;
  const entry = rateLimitStore.get(identifier);
  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: limit - 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
  }
  if (entry.count >= limit) return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  entry.count++;
  return { allowed: true, remaining: limit - entry.count, resetAt: entry.resetAt };
}

function cleanupRateLimits() {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) if (value.resetAt < now) rateLimitStore.delete(key);
}

function getClientIP(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || req.headers.get('cf-connecting-ip') || 'unknown';
}

/**
 * IMEI Verification (HONEST VERSION): never 'safe' or 'stolen' without a real blacklist answer.
 * Sept 30 2026: IMEI.info fixed (real API at dash.imei.info; secrets IMEI_INFO_API_KEY + IMEI_INFO_SERVICE_ID=28).
 * Sept 30 2026 PAYWALL: the paid blacklist lookup (costs us money per call) ONLY runs when
 *   1) the call comes from our own server (verify-item, using the service role key), AND
 *   2) verify-item says the customer is paid (body.paid === true).
 * Direct public calls and free checks never touch the paid API.
 */
serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));
  if (Math.random() < 0.1) cleanupRateLimits();

  try {
    const clientIP = getClientIP(req);
    const authHeader = req.headers.get('authorization') || '';
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    const isInternal = !!serviceKey && authHeader === `Bearer ${serviceKey}`;

    let userId: string | null = null;
    let isAuthenticated = false;
    if (authHeader && !isInternal) {
      try {
        const supabaseUrl = Deno.env.get('SUPABASE_URL');
        const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');
        if (supabaseUrl && supabaseAnonKey) {
          const supabase = createClient(supabaseUrl, supabaseAnonKey, { global: { headers: { Authorization: authHeader } } });
          const { data: { user } } = await supabase.auth.getUser();
          if (user) { userId = user.id; isAuthenticated = true; }
        }
      } catch (_e) { console.log('[IMEI] Auth check failed, treating as anonymous'); }
    }

    if (!isInternal) {
      const rateLimitId = userId || clientIP;
      const rateLimitResult = checkRateLimit(rateLimitId, isAuthenticated);
      if (!rateLimitResult.allowed) {
        const retry = Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000);
        return new Response(JSON.stringify({ success: false, error: 'Rate limit exceeded', status: 'error', confidence: 0, source: 'IMEI_Verification', message: 'Too many requests. Please wait before trying again.', retryAfter: retry }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Retry-After': retry.toString() } });
      }
    }

    const body = await req.json();
    const identifier: string = body?.identifier || '';
    const paid = isInternal && body?.paid === true;
    const startTime = Date.now();
    if (!identifier || identifier.trim().length === 0) {
      return new Response(JSON.stringify({ success: false, error: 'IMEI is required', status: 'error', confidence: 0, source: 'IMEI_Verification' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const cleanImei = identifier.replace(/[\s\-]/g, '').trim();
    if (!/^\d{15,16}$/.test(cleanImei)) {
      return new Response(JSON.stringify({ success: false, status: 'error', confidence: 0, source: 'IMEI_Verification', message: 'Invalid IMEI format. IMEI must be 15-16 digits.', details: { providedLength: cleanImei.length, expectedLength: '15-16' } }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const isValidChecksum = validateLuhn(cleanImei.substring(0, 15));
    console.log(`[IMEI] Verifying IMEI: ${cleanImei.substring(0, 8)}******* (checksum valid: ${isValidChecksum}, internal: ${isInternal}, paid: ${paid})`);
    const tac = cleanImei.substring(0, 8);
    const deviceInfo = getDeviceInfoFromTAC(tac);

    if (!isValidChecksum) {
      return new Response(JSON.stringify({
        success: false, status: 'error', confidence: 0, source: 'IMEI_Verification',
        message: "This IMEI fails the built-in math check, so it is mistyped, fake, or altered. Dial *#06# on the phone to see the real IMEI and compare. If the seller's phone shows this exact number, treat that as a serious red flag.",
        details: { checksumValid: false, invalidInput: true, databases: [] },
      }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // ---- FREE CHECK: no paid lookup ----
    if (!paid) {
      const freeResult = {
        success: true, status: 'unknown', confidence: 0, source: 'IMEI_Verification',
        message: 'FREE CHECK: This IMEI number is real and correctly formed (not fake or mistyped). The official lost-and-stolen phone blacklist search is part of the full check. Run the full check to see if this phone is reported lost or stolen before you pay the seller.',
        details: { imei: cleanImei.substring(0, 8) + '*******', checksumValid: true, tac, deviceInfo, blacklistChecked: false, blacklistLocked: true, databases: [], notChecked: ['Phone blacklist (included in the full check)'] },
        responseTime: Date.now() - startTime,
      };
      console.log('[IMEI] Free check - paid blacklist skipped');
      return new Response(JSON.stringify(freeResult), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // ---- PAID CHECK ----
    let apiResult: any = null;
    let blacklistStatus = 'unknown';
    let apiConfidence = 70;
    let imeiInfoAnswered = false;

    const imeiInfoApiKey = Deno.env.get('IMEI_INFO_API_KEY');
    if (imeiInfoApiKey) {
      try {
        const r = await imeiInfoBlacklistCheck(imeiInfoApiKey, cleanImei);
        apiResult = r.raw;
        console.log('[IMEI] IMEI.info service', r.serviceLabel, 'http', r.http, 'verdict', r.verdict);
        if (r.verdict === 'stolen') { blacklistStatus = 'stolen'; apiConfidence = 95; imeiInfoAnswered = true; }
        else if (r.verdict === 'safe') { blacklistStatus = 'safe'; apiConfidence = 90; imeiInfoAnswered = true; }
      } catch (e) { console.error('[IMEI] IMEI.info API error:', e); }
    } else {
      console.log('[IMEI] IMEI_INFO_API_KEY not set');
    }

    const blacklistChecked = blacklistStatus !== 'unknown';
    const finalStatus = blacklistChecked ? blacklistStatus : 'unknown';
    const finalConfidence = blacklistChecked ? apiConfidence : 0;
    const res = (apiResult && (apiResult.result || apiResult)) || null;
    const result = {
      success: true, status: finalStatus, confidence: finalConfidence, source: 'IMEI_Verification',
      message: getStatusMessage(finalStatus, deviceInfo, blacklistChecked, res),
      details: {
        imei: cleanImei.substring(0, 8) + '*******', checksumValid: true, tac, deviceInfo, blacklistChecked,
        apiResult: res ? { manufacturer: res.manufacturer || res.brand_name || res.brand, model: res.model || res.model_name, blacklistStatus: imeiInfoAnswered ? res.blacklist_status : undefined } : null,
        blacklistProvider: imeiInfoAnswered ? 'IMEI.info' : null,
        providerRaw: imeiInfoAnswered ? res : null,
        databases: blacklistChecked ? ['Lost and stolen phone blacklist (via IMEI.info)'] : [],
        notChecked: blacklistChecked ? [] : ['Phone blacklists (no blacklist service answered)'],
      },
      responseTime: Date.now() - startTime,
    };
    console.log(`[IMEI] Complete in ${result.responseTime}ms - Status: ${result.status} blacklistChecked=${blacklistChecked}`);
    return new Response(JSON.stringify(result), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('[IMEI] Unhandled error:', error);
    return new Response(JSON.stringify({ success: false, status: 'error', confidence: 0, source: 'IMEI_Verification', message: 'IMEI verification failed. Please try again.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});

const IMEI_INFO_BASE = 'https://dash.imei.info';

async function imeiInfoBlacklistCheck(key: string, imei: string): Promise<{ verdict: 'stolen' | 'safe' | 'unknown'; raw: any; http: number; serviceLabel: string }> {
  const k = encodeURIComponent(key);
  const serviceId = (Deno.env.get('IMEI_INFO_SERVICE_ID') || '').trim();
  if (!serviceId || serviceId === '0') {
    console.log('[IMEI] IMEI_INFO_SERVICE_ID not set - no blacklist lookup');
    return { verdict: 'unknown', raw: null, http: 0, serviceLabel: 'no service id' };
  }
  const res = await fetchWithTimeout(`${IMEI_INFO_BASE}/api-sync/check/${encodeURIComponent(serviceId)}/?API_KEY=${k}&imei=${imei}&format=json`, 30000);
  let raw: any = await res.json().catch(() => null);
  let http = res.status;
  const hid = raw?.history_id ?? (http === 202 ? raw?.id : undefined);
  if (http === 202 && hid) {
    for (let i = 0; i < 5; i++) {
      await new Promise((r) => setTimeout(r, 2500));
      const h = await fetchWithTimeout(`${IMEI_INFO_BASE}/api/search_history/${hid}/?API_KEY=${k}&format=json`, 10000);
      const hj = await h.json().catch(() => null);
      if (hj && hj.result) { raw = hj; http = 200; break; }
    }
  }
  if (http !== 200) { console.log('[IMEI] IMEI.info non-200 body', JSON.stringify(raw).slice(0, 500)); return { verdict: 'unknown', raw: null, http, serviceLabel: `service ${serviceId}` }; }
  const r0 = raw?.result ?? raw;
  if (r0?.detail) { console.log('[IMEI] IMEI.info error', r0.detail); return { verdict: 'unknown', raw: null, http, serviceLabel: `service ${serviceId}` }; }
  // The official field is blacklist_status. Use it first (older removed reports must not count).
  const bs = String(r0?.blacklist_status ?? '').toLowerCase().trim();
  let verdict: 'stolen' | 'safe' | 'unknown';
  if (bs) verdict = /^(blacklisted|black listed|stolen|lost|blocked|barred)/.test(bs) ? 'stolen' : (/^(clean|not blacklisted|no)\b/.test(bs) ? 'safe' : 'unknown');
  else verdict = readBlacklistVerdict(r0);
  return { verdict, raw, http, serviceLabel: `service ${serviceId}` };
}

function validateLuhn(imei: string): boolean {
  let sum = 0;
  for (let i = 0; i < imei.length; i++) {
    let digit = parseInt(imei[i], 10);
    if (i % 2 === 1) { digit *= 2; if (digit > 9) digit -= 9; }
    sum += digit;
  }
  return sum % 10 === 0;
}

function getDeviceInfoFromTAC(tac: string): { manufacturer: string; modelRange: string } | null {
  const tacPrefixes: Record<string, { manufacturer: string; modelRange: string }> = {
    '35332907': { manufacturer: 'Apple', modelRange: 'iPhone 11 Series' },
    '35407210': { manufacturer: 'Apple', modelRange: 'iPhone 12 Series' },
    '35890011': { manufacturer: 'Apple', modelRange: 'iPhone 13 Series' },
    '35397110': { manufacturer: 'Apple', modelRange: 'iPhone 14 Series' },
    '86167704': { manufacturer: 'Samsung', modelRange: 'Galaxy S Series' },
    '35238910': { manufacturer: 'Samsung', modelRange: 'Galaxy A Series' },
    '86882104': { manufacturer: 'Google', modelRange: 'Pixel Series' },
  };
  return tacPrefixes[tac] || { manufacturer: 'Unknown', modelRange: 'Mobile Device' };
}

function getStatusMessage(status: string, deviceInfo: any, blacklistChecked: boolean, res: any): string {
  const apiName = res && res.model ? `${res.model}` : '';
  const device = apiName || (deviceInfo && deviceInfo.manufacturer !== 'Unknown' ? `${deviceInfo.manufacturer} ${deviceInfo.modelRange}` : 'phone');
  switch (status) {
    case 'stolen': return `🚨 BLACKLISTED: This ${device} is reported lost or stolen on the phone blacklist. Do NOT purchase.`;
    case 'safe': return `✅ NOT BLACKLISTED: This ${device} was not reported lost or stolen on the phone blacklist we searched.`;
    default: return blacklistChecked
      ? `This ${device} IMEI could not be confirmed.`
      : `The IMEI number is valid, but the phone blacklist could not be searched right now. Please try again in a few minutes.`;
  }
}

async function fetchWithTimeout(url: string, ms: number): Promise<Response> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try { return await fetch(url, { signal: ctrl.signal, headers: { Accept: 'application/json' } }); } finally { clearTimeout(t); }
}

function readBlacklistVerdict(resp: any): 'stolen' | 'safe' | 'unknown' {
  if (!resp || typeof resp !== 'object') return 'unknown';
  const pairs: Array<[string, string]> = [];
  const walk = (o: any) => { for (const [k, v] of Object.entries(o)) { if (v && typeof v === 'object') walk(v); else pairs.push([String(k), String(v ?? '')]); } };
  walk(resp);
  const relevant = pairs.filter(([k]) => /^(black ?list(_| )?status|gsma.*status|status)$/i.test(k));
  if (relevant.length === 0) return 'unknown';
  const vals = relevant.map(([, v]) => v.trim().toLowerCase());
  if (vals.some((v) => /^(blacklisted|stolen|lost|blocked|barred)/.test(v))) return 'stolen';
  if (vals.every((v) => /^(clean|not blacklisted)/.test(v))) return 'safe';
  return 'unknown';
}
