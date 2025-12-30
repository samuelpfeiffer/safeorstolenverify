import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { runParallelVerification } from '../_shared/parallel-verification.ts';
import { validateSerialNumber, validateVIN, validateIMEI, checkRateLimit } from '../_shared/validation.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface VerificationRequest {
  identifier: string;
  itemType: string;
  userId?: string;
}

/**
 * Escapes special characters for ILIKE patterns to prevent pattern injection
 */
function escapeILikePattern(input: string): string {
  return input
    .replace(/\\/g, '\\\\')
    .replace(/%/g, '\\%')
    .replace(/_/g, '\\_');
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { identifier, itemType, userId } = await req.json() as VerificationRequest;

    if (!identifier || identifier.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Identifier is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate input based on item type
    const itemTypeLower = (itemType || '').toLowerCase();
    let cleanIdentifier: string;

    if (itemTypeLower === 'vehicle' || itemTypeLower === 'car' || itemTypeLower === 'motorcycle') {
      const vinValidation = validateVIN(identifier);
      if (!vinValidation.success) {
        return new Response(
          JSON.stringify({ error: vinValidation.error }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      cleanIdentifier = vinValidation.data!;
    } else if (itemTypeLower === 'phone' || itemTypeLower === 'smartphone') {
      const imeiValidation = validateIMEI(identifier);
      if (!imeiValidation.success) {
        return new Response(
          JSON.stringify({ error: imeiValidation.error }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      cleanIdentifier = imeiValidation.data!;
    } else {
      const serialValidation = validateSerialNumber(identifier);
      if (!serialValidation.success) {
        return new Response(
          JSON.stringify({ error: serialValidation.error }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      cleanIdentifier = serialValidation.data!;
    }

    console.log(`[verify-item] Validated identifier: ${cleanIdentifier} (type: ${itemTypeLower})`);
    const startTime = Date.now();

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Rate limiting check
    const rateLimitId = userId || req.headers.get('CF-Connecting-IP') || req.headers.get('X-Forwarded-For') || 'anonymous';
    const rateLimit = await checkRateLimit(supabaseClient, rateLimitId, 'verify_item', 20, 60);
    if (!rateLimit.allowed) {
      console.log(`[verify-item] Rate limit exceeded for ${rateLimitId}`);
      return new Response(
        JSON.stringify({ 
          error: 'Too many verification requests. Please try again later.',
          remaining: 0
        }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const providers: any[] = [];

    // Escape special ILIKE characters to prevent pattern injection
    const escapedIdentifier = escapeILikePattern(cleanIdentifier);

    // 1. Check internal stolen_items database first (exact match first, then pattern)
    try {
      // Try exact match first for better performance and security
      const { data: exactMatches, error: exactError } = await supabaseClient
        .from('stolen_items')
        .select('*')
        .or(`serial_number.eq.${cleanIdentifier},imei.eq.${cleanIdentifier},vin.eq.${cleanIdentifier}`)
        .limit(5);

      let stolenItems = exactMatches;

      // Only do pattern search if no exact matches found
      if (!exactError && (!exactMatches || exactMatches.length === 0)) {
        const { data: patternMatches, error: patternError } = await supabaseClient
          .from('stolen_items')
          .select('*')
          .or(`serial_number.ilike.%${escapedIdentifier}%,imei.ilike.%${escapedIdentifier}%,vin.ilike.%${escapedIdentifier}%`)
          .limit(5);
        
        if (!patternError) {
          stolenItems = patternMatches;
        }
      }

      if (stolenItems && stolenItems.length > 0) {
        providers.push({
          provider: 'SafeOrStolen Database',
          status: 'stolen',
          confidence: 98,
          message: 'Item found in SafeOrStolen stolen items registry',
          details: { matches: stolenItems.length },
          responseTime: Date.now() - startTime,
        });
      } else {
        providers.push({
          provider: 'SafeOrStolen Database',
          status: 'safe',
          confidence: 85,
          message: 'Not found in SafeOrStolen stolen items registry',
          responseTime: Date.now() - startTime,
        });
      }
    } catch (dbError) {
      console.error('[verify-item] Database check error:', dbError);
    }

    // 2. Run enhanced parallel verification with item-type-specific sources
    try {
      console.log(`[verify-item] Running enhanced parallel verification for ${itemType}...`);
      
      const parallelResult = await runParallelVerification(supabaseClient, {
        identifier: cleanIdentifier,
        itemType: itemType || 'unknown',
        includeWebScraping: true,
        includeAI: true
      });

      // Add results from parallel verification
      if (parallelResult.details?.all_sources) {
        for (const source of parallelResult.details.all_sources) {
          // Avoid duplicate providers
          const existingProvider = providers.find(p => p.provider === source.source);
          if (!existingProvider) {
            providers.push({
              provider: source.source,
              status: source.status,
              confidence: source.confidence,
              message: source.message,
              details: source.details,
              responseTime: source.responseTime || (Date.now() - startTime),
            });
          }
        }
      } else {
        providers.push({
          provider: parallelResult.source,
          status: parallelResult.status,
          confidence: parallelResult.confidence,
          message: parallelResult.message,
          details: parallelResult.details,
          responseTime: Date.now() - startTime,
        });
      }
      
      console.log(`[verify-item] Parallel verification added ${providers.length - 1} additional sources`);
    } catch (parallelError) {
      console.error('[verify-item] Parallel verification error:', parallelError);
    }

    // 3. Check external verification cache
    try {
      const { data: cachedResult } = await supabaseClient
        .from('external_verification_cache')
        .select('*')
        .eq('identifier', cleanIdentifier)
        .gt('expires_at', new Date().toISOString())
        .single();

      if (cachedResult) {
        const cachedData = cachedResult.result as any;
        providers.push({
          provider: cachedResult.source || 'Cached Verification',
          status: cachedData.status || 'safe',
          confidence: cachedData.confidence || 75,
          message: 'Previously verified - cached result',
          details: cachedData,
          responseTime: Date.now() - startTime,
        });
      }
    } catch (cacheError) {
      // Cache miss is fine, continue
    }

    // Aggregate results
    const hasStolenReport = providers.some(p => p.status === 'stolen');
    const hasLostReport = providers.some(p => p.status === 'lost');
    const successfulChecks = providers.filter(p => p.status !== 'error' && p.confidence > 0);
    const avgConfidence = successfulChecks.length > 0
      ? Math.round(successfulChecks.reduce((sum, p) => sum + p.confidence, 0) / successfulChecks.length)
      : 0;

    let finalStatus: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
    let riskLevel: 'low' | 'medium' | 'high' | 'critical';
    let message: string;

    if (hasStolenReport) {
      finalStatus = 'stolen';
      riskLevel = 'critical';
      message = '🚨 STOLEN: This item has been reported as stolen. Do NOT purchase.';
    } else if (hasLostReport) {
      finalStatus = 'lost';
      riskLevel = 'high';
      message = '⚠️ LOST: This item has been reported as lost. Exercise extreme caution.';
    } else if (successfulChecks.length > 0) {
      finalStatus = 'safe';
      riskLevel = 'low';
      message = `✅ SAFE: Checked ${successfulChecks.length} source(s). No theft reports found.`;
    } else {
      finalStatus = 'unknown';
      riskLevel = 'medium';
      message = '⚠️ INCONCLUSIVE: Unable to verify. Proceed with caution.';
    }

    const result = {
      identifier: cleanIdentifier,
      itemType: itemType || 'unknown',
      finalStatus,
      confidence: avgConfidence,
      riskLevel,
      message,
      providers,
      checkedSources: providers.map(p => p.provider),
      timestamp: new Date().toISOString(),
    };

    // Store result in verification_searches (main search log)
    try {
      await supabaseClient
        .from('verification_searches')
        .insert({
          user_id: userId || null,
          serial_number: cleanIdentifier,
          item_type: itemType || 'unknown',
          result: { 
            status: finalStatus, 
            confidence: avgConfidence,
            riskLevel,
            message,
            providers: providers.map(p => ({ provider: p.provider, status: p.status, confidence: p.confidence })),
            checkedSources: providers.map(p => p.provider)
          },
        });
      console.log('[verify-item] Search recorded in verification_searches');
    } catch (searchError) {
      console.error('[verify-item] Failed to store search:', searchError);
    }

    // Also store in verification_results for detailed analysis
    try {
      await supabaseClient
        .from('verification_results')
        .insert({
          user_id: userId || null,
          serial_number: cleanIdentifier,
          item_type: itemType || 'unknown',
          status: finalStatus,
          confidence_score: avgConfidence,
          source: 'verify-item',
          details: { providers, riskLevel, message },
        });
    } catch (storeError) {
      console.error('[verify-item] Failed to store result:', storeError);
    }

    console.log(`[verify-item] Complete in ${Date.now() - startTime}ms - Status: ${finalStatus}`);

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[verify-item] Error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Verification failed',
        finalStatus: 'error',
        riskLevel: 'medium',
        message: '❌ ERROR: Unable to complete verification. Please try again.',
        providers: [],
        checkedSources: [],
        timestamp: new Date().toISOString(),
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
