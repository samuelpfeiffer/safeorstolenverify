import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

// Rate limit configuration
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10; // 10 requests per minute per IP
const MAX_REQUESTS_AUTHENTICATED = 30; // Higher limit for authenticated users

// In-memory rate limiting (resets on function cold start, but provides basic protection)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

/**
 * Check rate limit for a given identifier (IP or user ID)
 */
function checkRateLimit(identifier: string, isAuthenticated: boolean): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const limit = isAuthenticated ? MAX_REQUESTS_AUTHENTICATED : MAX_REQUESTS_PER_WINDOW;
  
  const entry = rateLimitStore.get(identifier);
  
  if (!entry || entry.resetAt < now) {
    // New window
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: limit - 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
  }
  
  if (entry.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }
  
  entry.count++;
  return { allowed: true, remaining: limit - entry.count, resetAt: entry.resetAt };
}

/**
 * Clean up expired rate limit entries periodically
 */
function cleanupRateLimits() {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt < now) {
      rateLimitStore.delete(key);
    }
  }
}

/**
 * Get client IP from request headers
 */
function getClientIP(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
         req.headers.get('x-real-ip') ||
         req.headers.get('cf-connecting-ip') ||
         'unknown';
}

/**
 * IMEI Verification Edge Function (HONEST VERSION Sept 28 2026: never 'safe' without a real blacklist answer)
 * Validates IMEI numbers and checks blacklist status
 * Uses IMEI.info API for comprehensive device verification
 * 
 * Security: Rate limited to prevent abuse
 */
serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  // Cleanup expired entries periodically
  if (Math.random() < 0.1) cleanupRateLimits();

  try {
    // Get client identifier for rate limiting
    const clientIP = getClientIP(req);
    const authHeader = req.headers.get('authorization');
    let userId: string | null = null;
    let isAuthenticated = false;

    // Check if user is authenticated
    if (authHeader) {
      try {
        const supabaseUrl = Deno.env.get('SUPABASE_URL');
        const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');
        
        if (supabaseUrl && supabaseAnonKey) {
          const supabase = createClient(supabaseUrl, supabaseAnonKey, {
            global: { headers: { Authorization: authHeader } }
          });
          
          const { data: { user } } = await supabase.auth.getUser();
          if (user) {
            userId = user.id;
            isAuthenticated = true;
          }
        }
      } catch (authError) {
        console.log('[IMEI] Auth check failed, treating as anonymous');
      }
    }

    // Rate limit check
    const rateLimitId = userId || clientIP;
    const rateLimitResult = checkRateLimit(rateLimitId, isAuthenticated);
    
    if (!rateLimitResult.allowed) {
      console.log(`[IMEI] Rate limit exceeded for ${rateLimitId}`);
      
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Rate limit exceeded',
          status: 'error',
          confidence: 0,
          source: 'IMEI_Verification',
          message: 'Too many requests. Please wait before trying again.',
          retryAfter: Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)
        }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'Retry-After': Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000).toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.resetAt.toString()
          } 
        }
      );
    }

    const { identifier, itemType } = await req.json();
    const startTime = Date.now();

    if (!identifier || identifier.trim().length === 0) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'IMEI is required',
          status: 'error',
          confidence: 0,
          source: 'IMEI_Verification'
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Clean IMEI - remove spaces, dashes
    const cleanImei = identifier.replace(/[\s\-]/g, '').trim();
    
    // Validate IMEI format (15 digits for standard IMEI, 16 for IMEISV)
    if (!/^\d{15,16}$/.test(cleanImei)) {
      return new Response(
        JSON.stringify({
          success: false,
          status: 'error',
          confidence: 0,
          source: 'IMEI_Verification',
          message: 'Invalid IMEI format. IMEI must be 15-16 digits.',
          details: { providedLength: cleanImei.length, expectedLength: '15-16' }
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate IMEI checksum using Luhn algorithm
    const isValidChecksum = validateLuhn(cleanImei.substring(0, 15));
    
    console.log(`[IMEI] Verifying IMEI: ${cleanImei.substring(0, 8)}******* (checksum valid: ${isValidChecksum}, user: ${userId || 'anonymous'})`);

    // Parse TAC (Type Allocation Code) - first 8 digits identify manufacturer/model
    const tac = cleanImei.substring(0, 8);
    const deviceInfo = getDeviceInfoFromTAC(tac);

    // Try IMEI.info API if key is available
    const imeiInfoApiKey = Deno.env.get('IMEI_INFO_API_KEY');
    let apiResult = null;
    let blacklistStatus = 'unknown';
    let apiConfidence = 70;

    if (imeiInfoApiKey) {
      try {
        console.log('[IMEI] Checking IMEI.info API...');
        const apiResponse = await fetch('https://api.imei.info/check', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${imeiInfoApiKey}`
          },
          body: JSON.stringify({ imei: cleanImei })
        });

        if (apiResponse.ok) {
          apiResult = await apiResponse.json();
          console.log('[IMEI] IMEI.info response received');
          
          // Check blacklist status from API
          if (apiResult.blacklist_status) {
            if (apiResult.blacklist_status === 'blacklisted' || apiResult.blacklist_status === 'stolen') {
              blacklistStatus = 'stolen';
              apiConfidence = 95;
            } else if (apiResult.blacklist_status === 'clean') {
              blacklistStatus = 'safe';
              apiConfidence = 90;
            }
          }
        }
      } catch (apiError) {
        console.error('[IMEI] IMEI.info API error:', apiError);
      }
    }

    // Also check IMEI lookup API if available
    const imeiLookupApiKey = Deno.env.get('IMEI_LOOKUP_API_KEY');
    if (imeiLookupApiKey && blacklistStatus === 'unknown') {
      try {
        console.log('[IMEI] Checking IMEI Lookup API...');
        const lookupResponse = await fetch(`https://api.imeilookup.org/v1/check/${cleanImei}`, {
          headers: {
            'Authorization': `Bearer ${imeiLookupApiKey}`
          }
        });

        if (lookupResponse.ok) {
          const lookupResult = await lookupResponse.json();
          if (lookupResult.blacklisted === true || lookupResult.stolen === true) {
            blacklistStatus = 'stolen';
            apiConfidence = 92;
          } else if (lookupResult.blacklisted === false) {
            blacklistStatus = 'safe';
            apiConfidence = 88;
          }
        }
      } catch (lookupError) {
        console.error('[IMEI] IMEI Lookup API error:', lookupError);
      }
    }

    // Determine final status (HONEST VERSION, Sept 28 2026):
    // Only a real blacklist answer can say "safe" or "stolen". A valid checksum
    // only proves the number is well-formed, not that the phone is clean.
    const blacklistChecked = blacklistStatus !== 'unknown';

    if (!isValidChecksum && !blacklistChecked) {
      return new Response(
        JSON.stringify({
          success: false,
          status: 'error',
          confidence: 0,
          source: 'IMEI_Verification',
          message: "This IMEI fails the built-in math check, so it is mistyped, fake, or altered. Dial *#06# on the phone to see the real IMEI and compare. If the seller's phone shows this exact number, treat that as a serious red flag.",
          details: { checksumValid: false, invalidInput: true, databases: [] },
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const finalStatus = blacklistChecked ? blacklistStatus : 'unknown';
    const finalConfidence = blacklistChecked ? apiConfidence : 0;
    const databases: string[] = [];
    if (blacklistChecked) databases.push(apiResult ? 'IMEI.info blacklist check' : 'IMEI Lookup blacklist check');

    const result = {
      success: true,
      status: finalStatus,
      confidence: finalConfidence,
      source: 'IMEI_Verification',
      message: getStatusMessage(finalStatus, deviceInfo, blacklistChecked),
      details: {
        imei: cleanImei.substring(0, 8) + '*******',
        checksumValid: isValidChecksum,
        tac,
        deviceInfo,
        blacklistChecked,
        apiResult: apiResult ? {
          manufacturer: apiResult.brand || apiResult.manufacturer,
          model: apiResult.model || apiResult.model_name,
          deviceType: apiResult.device_type,
          blacklistStatus: apiResult.blacklist_status
        } : null,
        databases, // ONLY sources that actually answered
        notChecked: blacklistChecked ? [] : ['Phone blacklists (no blacklist service answered)'],
      },
      responseTime: Date.now() - startTime
    };

    console.log(`[IMEI] Complete in ${result.responseTime}ms - Status: ${result.status}`);

    return new Response(
      JSON.stringify(result),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.resetAt.toString()
        } 
      }
    );

  } catch (error) {
    console.error('[IMEI] Unhandled error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        status: 'error',
        confidence: 0,
        source: 'IMEI_Verification',
        message: 'IMEI verification failed. Please try again.'
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

/**
 * Validate IMEI using Luhn algorithm (checksum validation)
 */
function validateLuhn(imei: string): boolean {
  let sum = 0;
  for (let i = 0; i < imei.length; i++) {
    let digit = parseInt(imei[i], 10);
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}

/**
 * Get device info from TAC (Type Allocation Code)
 * First 8 digits of IMEI identify manufacturer and model
 */
function getDeviceInfoFromTAC(tac: string): { manufacturer: string; modelRange: string } | null {
  // Common TAC prefixes (simplified mapping)
  const tacPrefixes: Record<string, { manufacturer: string; modelRange: string }> = {
    '35': { manufacturer: 'Various', modelRange: 'Mobile Device' },
    '86': { manufacturer: 'Various', modelRange: 'Mobile Device' },
    '01': { manufacturer: 'Various', modelRange: 'Mobile Device' },
    '35332907': { manufacturer: 'Apple', modelRange: 'iPhone 11 Series' },
    '35407210': { manufacturer: 'Apple', modelRange: 'iPhone 12 Series' },
    '35890011': { manufacturer: 'Apple', modelRange: 'iPhone 13 Series' },
    '35397110': { manufacturer: 'Apple', modelRange: 'iPhone 14 Series' },
    '86167704': { manufacturer: 'Samsung', modelRange: 'Galaxy S Series' },
    '35238910': { manufacturer: 'Samsung', modelRange: 'Galaxy A Series' },
    '86882104': { manufacturer: 'Google', modelRange: 'Pixel Series' },
  };

  // Check for exact match first
  if (tacPrefixes[tac]) {
    return tacPrefixes[tac];
  }

  // Check for prefix matches
  for (const [prefix, info] of Object.entries(tacPrefixes)) {
    if (tac.startsWith(prefix)) {
      return info;
    }
  }

  return { manufacturer: 'Unknown', modelRange: 'Mobile Device' };
}

/**
 * Generate user-friendly status message
 */
function getStatusMessage(status: string, deviceInfo: any, blacklistChecked: boolean): string {
  const device = deviceInfo && deviceInfo.manufacturer !== 'Unknown' && deviceInfo.manufacturer !== 'Various'
    ? `${deviceInfo.manufacturer} ${deviceInfo.modelRange}` : 'phone';

  switch (status) {
    case 'stolen':
      return `🚨 BLACKLISTED: This ${device} IMEI is reported lost or stolen on a phone blacklist. Do NOT purchase.`;
    case 'safe':
      return `✅ NOT BLACKLISTED: This ${device} IMEI was not on the phone blacklist we searched.`;
    default:
      return blacklistChecked
        ? `This ${device} IMEI could not be confirmed.`
        : `The IMEI number is valid, but no phone blacklist could be searched right now, so its theft status is not confirmed. Ask the seller to show the phone unlocked, signed out of iCloud or Google, and check with the carrier before you pay.`;
  }
}
