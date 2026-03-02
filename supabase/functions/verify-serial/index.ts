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
 * Electronics/Serial Number Verification Edge Function
 * Checks serial numbers against StolenRegister, SNDeep, and internal database
 */
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
    const { serial, identifier, itemType } = await req.json();
    const startTime = Date.now();

    const serialNumber = (serial || identifier || '').replace(/[\s]/g, '').toUpperCase();

    if (!serialNumber) {
      return new Response(
        JSON.stringify({
          success: false,
          status: 'error',
          confidence: 0,
          source: 'Serial_Verification',
          message: 'Serial number is required'
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[Serial] Verifying serial: ${serialNumber} (type: ${itemType || 'unknown'})`);

    // Check multiple sources in parallel
    const results = await Promise.allSettled([
      checkStolenRegister(serialNumber),
      checkSNDeep(serialNumber),
      checkAppleStolenMacs(serialNumber),
    ]);

    // Aggregate results
    const validResults = results
      .filter((r): r is PromiseFulfilledResult<any> => r.status === 'fulfilled')
      .map(r => r.value)
      .filter(r => r.status !== 'error');

    // Check for stolen reports
    const stolenResult = validResults.find(r => r.status === 'stolen');
    if (stolenResult) {
      return new Response(
        JSON.stringify({
          success: true,
          status: 'stolen',
          confidence: stolenResult.confidence || 90,
          source: 'Serial_Verification',
          message: `🚨 STOLEN: This ${itemType || 'item'} has been reported stolen via ${stolenResult.source}`,
          details: {
            serial: serialNumber,
            itemType: itemType || 'electronics',
            stolenSource: stolenResult.source,
            allSources: validResults,
            databases: ['StolenRegister', 'SNDeep.info', 'StolenMacs']
          },
          responseTime: Date.now() - startTime
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // All clear
    const clearResults = validResults.filter(r => r.status === 'safe' || r.status === 'clear');
    const confidence = clearResults.length > 0 
      ? Math.round(clearResults.reduce((sum, r) => sum + (r.confidence || 70), 0) / clearResults.length)
      : 60;

    return new Response(
      JSON.stringify({
        success: true,
        status: 'safe',
        confidence: confidence,
        source: 'Serial_Verification',
        message: `✅ CLEAR: Serial number not found in ${validResults.length} stolen item database(s).`,
        details: {
          serial: serialNumber,
          itemType: itemType || 'electronics',
          sourcesChecked: validResults.length,
          allSources: validResults,
          databases: ['StolenRegister', 'SNDeep.info', 'StolenMacs']
        },
        responseTime: Date.now() - startTime
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[Serial] Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        status: 'error',
        confidence: 0,
        source: 'Serial_Verification',
        message: error.message || 'Serial verification failed',
        error: error.message
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

/**
 * Check StolenRegister.com
 */
async function checkStolenRegister(serial: string): Promise<any> {
  try {
    const url = `https://www.stolenregister.com/check?serial=${encodeURIComponent(serial)}`;
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'text/html,application/xhtml+xml',
        'User-Agent': 'SafeOrStolen/1.0 (https://safeorstolen.com)'
      }
    });

    if (response.ok) {
      const html = await response.text();
      const lowerHtml = html.toLowerCase();
      
      if (lowerHtml.includes('reported') && lowerHtml.includes('stolen')) {
        return { source: 'StolenRegister', status: 'stolen', confidence: 85 };
      }
      if (lowerHtml.includes('not found') || lowerHtml.includes('no records')) {
        return { source: 'StolenRegister', status: 'safe', confidence: 75 };
      }
    }
    return { source: 'StolenRegister', status: 'unknown', confidence: 0 };
  } catch (error) {
    console.error('[StolenRegister] Error:', error);
    return { source: 'StolenRegister', status: 'error', confidence: 0 };
  }
}

/**
 * Check SNDeep.info
 */
async function checkSNDeep(serial: string): Promise<any> {
  try {
    const url = `https://sndeep.info/en/search?serial=${encodeURIComponent(serial)}`;
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'text/html,application/xhtml+xml',
        'User-Agent': 'SafeOrStolen/1.0 (https://safeorstolen.com)'
      }
    });

    if (response.ok) {
      const html = await response.text();
      const lowerHtml = html.toLowerCase();
      
      if (lowerHtml.includes('blacklisted') || lowerHtml.includes('stolen')) {
        return { source: 'SNDeep', status: 'stolen', confidence: 80 };
      }
      if (lowerHtml.includes('clean') || lowerHtml.includes('not found')) {
        return { source: 'SNDeep', status: 'safe', confidence: 72 };
      }
    }
    return { source: 'SNDeep', status: 'unknown', confidence: 0 };
  } catch (error) {
    console.error('[SNDeep] Error:', error);
    return { source: 'SNDeep', status: 'error', confidence: 0 };
  }
}

/**
 * Check StolenMacs (Apple computers)
 */
async function checkAppleStolenMacs(serial: string): Promise<any> {
  // Only check if serial looks like an Apple serial (starts with C02, W8, F1, etc.)
  const appleSerialPrefixes = ['C02', 'C07', 'C1M', 'C2P', 'D25', 'DQ2', 'DXK', 'F1', 'F2', 'W8', 'W9', 'FK', 'GM'];
  const isAppleSerial = appleSerialPrefixes.some(prefix => serial.startsWith(prefix));
  
  if (!isAppleSerial) {
    return { source: 'StolenMacs', status: 'not_applicable', confidence: 0, message: 'Not an Apple device' };
  }

  try {
    const url = `https://www.mark-up.com/stolen/?search=${encodeURIComponent(serial)}`;
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'text/html,application/xhtml+xml',
        'User-Agent': 'SafeOrStolen/1.0 (https://safeorstolen.com)'
      }
    });

    if (response.ok) {
      const html = await response.text();
      const lowerHtml = html.toLowerCase();
      
      if (lowerHtml.includes('stolen') || lowerHtml.includes('reported')) {
        return { source: 'StolenMacs', status: 'stolen', confidence: 82, message: 'Apple device reported stolen' };
      }
      return { source: 'StolenMacs', status: 'safe', confidence: 70, message: 'Not found in StolenMacs database' };
    }
    return { source: 'StolenMacs', status: 'unknown', confidence: 0 };
  } catch (error) {
    console.error('[StolenMacs] Error:', error);
    return { source: 'StolenMacs', status: 'error', confidence: 0 };
  }
}
