import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

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
    console.log(`[BikeIndex] Searching for serial: ${cleanSerial}`);

    // Search Bike Index API for stolen bicycles
    const searchUrl = `https://bikeindex.org/api/v3/search?serial=${encodeURIComponent(cleanSerial)}&stolenness=all`;
    
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
    const bikes = data.bikes || [];
    
    console.log(`[BikeIndex] Found ${bikes.length} bikes matching serial`);

    // Check if any bikes are stolen
    const stolenBikes = bikes.filter((bike: any) => bike.stolen === true);
    const isStolen = stolenBikes.length > 0;

    const result = {
      success: true,
      status: isStolen ? 'stolen' : (bikes.length > 0 ? 'found' : 'safe'),
      confidence: isStolen ? 95 : (bikes.length > 0 ? 80 : 85),
      source: 'BikeIndex',
      message: isStolen 
        ? `⚠️ STOLEN: Found ${stolenBikes.length} stolen bike(s) with this serial number`
        : (bikes.length > 0 
          ? `Found ${bikes.length} registered bike(s), none reported stolen`
          : 'No bikes found with this serial number in Bike Index'),
      details: {
        totalMatches: bikes.length,
        stolenMatches: stolenBikes.length,
        databaseSize: '1,000,000+ registered bikes',
        stolenDatabase: '200,000+ stolen bikes tracked',
        bikes: stolenBikes.slice(0, 5).map((bike: any) => ({
          title: bike.title,
          stolen: bike.stolen,
          stolenLocation: bike.stolen_location,
          dateStolen: bike.date_stolen,
          manufacturer: bike.manufacturer_name,
          frame_model: bike.frame_model,
          year: bike.year,
          primaryColors: bike.frame_colors,
          thumb: bike.thumb
        }))
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
        message: error.message || 'Bike Index verification failed',
        error: error.message
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
