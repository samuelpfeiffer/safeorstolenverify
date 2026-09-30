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
 * Bike Index API Integration
 * Free public API - https://bikeindex.org/documentation/api_v3
 * Searches stolen bicycle database by serial number
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
    const { identifier, itemType } = await req.json();
    const startTime = Date.now();

    if (!identifier || identifier.trim().length === 0) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Serial number is required',
          status: 'error',
          confidence: 0,
          source: 'BikeIndex'
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const cleanSerial = identifier.trim().toUpperCase();

    // Placeholder "serials" (e.g. UNKNOWN) match many unrelated stolen bikes. Reject them.
    const compact = cleanSerial.replace(/[^A-Z0-9]/g, '');
    const PLACEHOLDERS = ['UNKNOWN', 'NONE', 'NA', 'NOSERIAL', 'NOSN', 'NOTAVAILABLE', 'NOTSURE', 'UNK', 'NULL', 'MISSING', 'ABSENT'];
    if (compact.length < 4 || PLACEHOLDERS.includes(compact) || /^(.)\1+$/.test(compact)) {
      return new Response(
        JSON.stringify({
          success: false, status: 'error', confidence: 0, source: 'BikeIndex',
          message: "That doesn't look like a real bike serial number. Look under the bottom bracket, where the pedal cranks meet the frame, and enter the full number stamped there. A missing or scratched-off serial is a red flag.",
          details: { invalidInput: true, databases: [] },
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    console.log(`[BikeIndex] Searching for serial: ${cleanSerial}`);

    // Search Bike Index API for stolen bicycles
    const searchUrl = `https://bikeindex.org/api/v3/search?serial=${encodeURIComponent(cleanSerial)}&stolenness=stolen`; // stolen-only: ~0.3s vs ~4.7s for 'all' (Sept 28 2026)
    
    const response = await fetch(searchUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'SafeOrStolen/1.0 (https://safeorstolen.com)'
      }
    });

    if (!response.ok) {
      console.error(`[BikeIndex] API error: ${response.status}`);
      return new Response(
        JSON.stringify({
          success: false,
          status: 'error',
          confidence: 0,
          source: 'BikeIndex',
          message: 'Bike Index API unavailable',
          responseTime: Date.now() - startTime
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const bikes = (data.bikes || []).filter((bike: any) => bike.stolen === true);

    // Exact serial match only (BikeIndex search can return similar serials).
    const norm = (v: unknown) => String(v ?? '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    const target = norm(cleanSerial);
    const exact = bikes.filter((bike: any) => norm(bike.serial) === target);
    const similar = bikes.filter((bike: any) => norm(bike.serial) !== target);

    console.log(`[BikeIndex] stolen exact=${exact.length} similar=${similar.length}`);

    const pick = (list: any[]) => list.slice(0, 5).map((bike: any) => ({
      title: bike.title,
      serial: bike.serial,
      stolen: bike.stolen,
      stolenLocation: bike.stolen_location,
      dateStolen: bike.date_stolen,
      manufacturer: bike.manufacturer_name,
      frame_model: bike.frame_model,
      year: bike.year,
      primaryColors: bike.frame_colors,
      thumb: bike.thumb,
      url: bike.url,
    }));

    const result = {
      success: true,
      status: exact.length > 0 ? 'stolen' : similar.length > 0 ? 'suspicious' : 'safe',
      confidence: exact.length > 0 ? 95 : similar.length > 0 ? 0 : 85,
      source: 'BikeIndex',
      message: exact.length > 0
        ? `🚨 STOLEN: BikeIndex lists ${exact.length === 1 ? 'a bike' : `${exact.length} bikes`} with this exact serial number as stolen.`
        : similar.length > 0
          ? `⚠️ POSSIBLE MATCH: BikeIndex lists a stolen bike with a similar, but not identical, serial number. Compare the serial on the frame carefully before you buy.`
          : 'No stolen bike with this serial number in the BikeIndex registry.',
      details: {
        stolenMatches: exact.length,
        similarStolenMatches: similar.length,
        bikes: pick(exact.length > 0 ? exact : similar),
        databases: ['BikeIndex stolen bike registry'],
      },
      responseTime: Date.now() - startTime
    };

    console.log(`[BikeIndex] Complete in ${result.responseTime}ms - Status: ${result.status}`);

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[BikeIndex] Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        status: 'error',
        confidence: 0,
        source: 'BikeIndex',
        message: (error instanceof Error ? error.message : String(error)) || 'Bike Index verification failed',
        error: (error instanceof Error ? error.message : String(error))
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
