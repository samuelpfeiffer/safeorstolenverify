import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

// Rate limiting
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(identifier: string): { allowed: boolean; resetAt: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);
  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, resetAt: now + RATE_LIMIT_WINDOW_MS };
  }
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, resetAt: entry.resetAt };
  }
  entry.count++;
  return { allowed: true, resetAt: entry.resetAt };
}

/**
 * Firearm Verification (rewritten Sept 28 2026)
 * Searches the Ohio Attorney General's stolen gun database (Ohio law enforcement
 * records via LEADS). HotGunz was removed: its site is down and the old parser
 * flagged any page containing the word "stolen" as a stolen gun.
 * "stolen" ONLY on an exact serial match in Ohio's results.
 */
// Input validation patterns (security)
const SERIAL_NUMBER_REGEX = /^[A-Z0-9\-_]{3,50}$/i;
const DANGEROUS_PATTERNS = [
  /<script/i, /javascript:/i, /on\w+=/i, /eval\(/i,
  /union\s+select/i, /drop\s+table/i, /insert\s+into/i, /delete\s+from/i
];

function validateSerialInput(serial: string): { valid: boolean; sanitized?: string; error?: string } {
  if (!serial || typeof serial !== 'string') {
    return { valid: false, error: 'Serial number is required' };
  }
  
  const trimmed = serial.trim();
  if (trimmed.length === 0) {
    return { valid: false, error: 'Serial number is required' };
  }
  
  if (trimmed.length < 3) {
    return { valid: false, error: 'Serial number too short (minimum 3 characters)' };
  }
  
  if (trimmed.length > 50) {
    return { valid: false, error: 'Serial number too long (maximum 50 characters)' };
  }
  
  // Check for dangerous patterns (XSS/SQL injection)
  for (const pattern of DANGEROUS_PATTERNS) {
    if (pattern.test(trimmed)) {
      console.warn(`[Firearm] Blocked dangerous input pattern: ${pattern}`);
      return { valid: false, error: 'Invalid characters detected' };
    }
  }
  
  // Only allow alphanumeric, hyphens, and underscores
  const sanitized = trimmed.toUpperCase().replace(/[^A-Z0-9\-_]/g, '');
  
  if (!SERIAL_NUMBER_REGEX.test(sanitized)) {
    return { valid: false, error: 'Serial number contains invalid characters. Only letters, numbers, hyphens, and underscores allowed.' };
  }
  
  return { valid: true, sanitized };
}

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  // Rate limit by IP
  const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('cf-connecting-ip') || 'unknown';
  const rl = checkRateLimit(clientIP);
  if (!rl.allowed) {
    return new Response(
      JSON.stringify({ success: false, error: 'Rate limit exceeded', retryAfter: Math.ceil((rl.resetAt - Date.now()) / 1000) }),
      { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
    );
  }

  try {
    const { identifier, itemType } = await req.json();
    const startTime = Date.now();

    // Validate and sanitize input
    const validation = validateSerialInput(identifier);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: validation.error,
          status: 'error',
          confidence: 0,
          source: 'Stolen Firearms Database'
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const cleanSerial = validation.sanitized!;
    console.log(`[Firearm] Searching serial: ${cleanSerial.slice(0, 3)}***`);

    // Altered / obliterated serial = high-risk warning, not a database result.
    const atfSuspicious = checkATFPatterns(cleanSerial);
    if (atfSuspicious.suspicious) {
      return new Response(
        JSON.stringify({
          success: false, status: 'error', confidence: 0, source: 'Firearm_Verification',
          message: `${atfSuspicious.reason}. An altered or missing serial number is a serious red flag. Do not buy this firearm, and contact local police.`,
          details: { invalidInput: true, databases: [] },
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Ohio Attorney General stolen gun search (LEADS: Ohio law enforcement records).
    const ohio = await searchOhioStolenGuns(cleanSerial);

    const finalStatus = ohio.found ? 'stolen' : 'unknown';
    const confidence = ohio.found ? 95 : 0;
    const databases = ohio.checked ? [OHIO_LABEL] : [];

    let message: string;
    if (ohio.found) {
      message = `🚨 REPORTED STOLEN in Ohio law enforcement records (Ohio Attorney General stolen gun database). Do NOT buy this firearm. Contact ${ohio.agency ? ohio.agency : 'the reporting agency or local police'}.`;
    } else if (ohio.possible) {
      message = `⚠️ POSSIBLE MATCH: Ohio's stolen gun database returned a similar serial number, but not an exact match. Compare the serial carefully and ask local police to run it before you buy.`;
    } else if (ohio.checked) {
      message = 'Not reported stolen in Ohio law enforcement records (Ohio Attorney General stolen gun database) as of today. That search covers Ohio reports only. Private buyers cannot search the national FBI database, so buy through a licensed dealer (FFL) or ask local police to run the serial.';
    } else {
      message = "Ohio's stolen gun database could not be searched right now, so this firearm's theft status is not confirmed. Buy through a licensed dealer (FFL) or ask local police to run the serial.";
    }

    const result = {
      success: true,
      status: ohio.possible && !ohio.found ? 'suspicious' : finalStatus,
      confidence,
      source: 'Firearm_Verification',
      message,
      details: {
        serialNumber: cleanSerial,
        ohio,
        databases, // ONLY sources that actually answered
        notChecked: [
          ...(ohio.checked ? [] : ['Ohio stolen gun database (did not respond)']),
          'FBI NCIC (law enforcement and licensed dealers only)',
        ],
        floridaSearchUrl: 'https://pas.fdle.state.fl.us/pas/restricted/PAS/StolenGun.jsf',
      },
      responseTime: Date.now() - startTime
    };

    console.log(`[Firearm] Complete in ${result.responseTime}ms - Status: ${result.status} ohioChecked=${ohio.checked}`);

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[Firearm] Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        status: 'error',
        confidence: 0,
        source: 'Stolen Firearms Database',
        message: (error instanceof Error ? error.message : String(error)) || 'Firearm verification failed',
        error: (error instanceof Error ? error.message : String(error))
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

/**
 * Check for suspicious ATF patterns in firearm serial numbers
 */
function checkATFPatterns(serial: string): { suspicious: boolean; reason?: string } {
  // Check for obliterated/altered serial patterns
  const suspiciousPatterns = [
    /^0+$/,  // All zeros
    /^X+$/i, // All X's (common replacement)
    /UNKNOWN/i,
    /OBLITERATED/i,
    /ILLEGIBLE/i,
    /NONE/i,
    /NA$/i,
    /^[A-Z]$/i, // Single letter
    /^\d$/,  // Single digit
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(serial)) {
      return { 
        suspicious: true, 
        reason: 'Serial number appears altered, obliterated, or invalid' 
      };
    }
  }

  // Check minimum length (most firearms have 3+ character serials)
  if (serial.length < 3) {
    return { 
      suspicious: true, 
      reason: 'Serial number unusually short' 
    };
  }

  // Check for common manufacturer prefixes (validates format)
  const validPrefixes = ['SN', 'S/N', 'NO', 'NS'];
  const cleanSerial = serial.replace(/^(SN|S\/N|NO|NS)[\s\-:]*/i, '');
  
  if (cleanSerial.length === 0) {
    return { 
      suspicious: true, 
      reason: 'No actual serial number after prefix' 
    };
  }

  return { suspicious: false };
}

const OHIO_URL = 'https://www.ohioattorneygeneral.gov/stolengun';
const OHIO_LABEL = 'Ohio Attorney General stolen gun database (Ohio law enforcement records via LEADS)';
type OhioResult = { checked: boolean; found: boolean; possible: boolean; total?: number; agency?: string; message: string };

/**
 * Ohio Attorney General stolen gun search. Public, no captcha.
 * "found" ONLY when the results include this exact serial number.
 */
async function searchOhioStolenGuns(serial: string): Promise<OhioResult> {
  const UA = 'Mozilla/5.0 (compatible; SafeOrStolen/1.0; +https://safeorstolen.com)';
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 12000);
  try {
    const first = await fetch(OHIO_URL, { headers: { 'User-Agent': UA }, signal: ctrl.signal });
    if (!first.ok) return { checked: false, found: false, possible: false, message: `Ohio HTTP ${first.status}` };
    const html = await first.text();
    const cookies = (first.headers as any).getSetCookie?.() ?? [];
    const cookieHeader = cookies.map((c: string) => c.split(';')[0]).join('; ');
    const val = (name: string) => {
      const esc = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const m = html.match(new RegExp(`name="${esc}"[^>]*value="([^"]*)"`)) || html.match(new RegExp(`value="([^"]*)"[^>]*name="${esc}"`));
      return m ? m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&') : '';
    };
    const P = 'p$lt$zoneContent$pageplaceholder1$p$lt$zoneRight$StolenGunSearch$';
    const form = new URLSearchParams();
    for (const n of ['__CMSCsrfToken', '__EVENTTARGET', '__EVENTARGUMENT',
      'p_lt_zoneContent_pageplaceholder1_p_lt_zoneRight_TabsLayout_tabs_ClientState', 'lng',
      '__VIEWSTATEGENERATOR', '__SCROLLPOSITIONX', '__SCROLLPOSITIONY', '__VIEWSTATEENCRYPTED',
      'p$lt$zoneSearch$cmssearchbox$txtWord']) form.append(n, val(n));
    form.append(P + 'txtSerialNumber', serial);
    form.append(P + 'BtnSearch.x', '20');
    form.append(P + 'BtnSearch.y', '10');
    form.append('__VIEWSTATE', val('__VIEWSTATE'));

    const res = await fetch(OHIO_URL, {
      method: 'POST',
      headers: {
        'User-Agent': UA, 'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://www.ohioattorneygeneral.gov', 'Referer': OHIO_URL,
        ...(cookieHeader ? { 'Cookie': cookieHeader } : {}),
      },
      body: form.toString(),
      signal: ctrl.signal,
    });
    if (!res.ok) return { checked: false, found: false, possible: false, message: `Ohio HTTP ${res.status}` };
    const text = (await res.text())
      .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');
    const m = text.match(/Total result\(s\):\s*(\d+)/i);
    if (!m) {
      console.error('[Firearm] Ohio: no result count found');
      return { checked: false, found: false, possible: false, message: 'Ohio result not recognized' };
    }
    const total = parseInt(m[1], 10);
    if (total === 0) return { checked: true, found: false, possible: false, total, message: 'Not reported stolen in Ohio' };

    const i = text.search(/Total result\(s\):/i);
    const section = text.slice(i, i + 3000).toUpperCase();
    const exact = new RegExp(`(^|[^A-Z0-9])${serial.replace(/[-_]/g, '[-_ ]?')}([^A-Z0-9]|$)`).test(section);
    const agencyMatch = section.match(/(?:REPORTING AGENCY|AGENCY)[:\s]+([A-Z0-9 .,'&-]{3,80}?)(?:\s{2}|PHONE|$)/);
    if (exact) {
      return { checked: true, found: true, possible: false, total, agency: agencyMatch?.[1]?.trim(), message: 'Reported stolen in Ohio' };
    }
    return { checked: true, found: false, possible: true, total, message: 'Similar serial in Ohio results' };
  } catch (e) {
    console.error('[Firearm] Ohio search error:', e);
    return { checked: false, found: false, possible: false, message: 'Ohio unavailable' };
  } finally {
    clearTimeout(timer);
  }
}
