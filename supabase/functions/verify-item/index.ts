import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { runParallelVerification } from '../_shared/parallel-verification.ts';
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

interface VerificationRequest {
  identifier: string;
  itemType: string;
  userId?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  const corsResponse = handleCorsPreFlight(req);
  if (corsResponse) return corsResponse;

  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);

  try {
    // SECURITY: Require authentication for all verification requests
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      console.log('[verify-item] Unauthorized request - no auth header');
      return new Response(
        JSON.stringify({ 
          error: 'Authentication required',
          code: 'AUTH_REQUIRED',
          message: 'Please sign in to verify items'
        }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate the JWT token
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(token);

    if (authError || !user) {
      console.log('[verify-item] Invalid token:', authError?.message);
      return new Response(
        JSON.stringify({ 
          error: 'Invalid or expired token',
          code: 'INVALID_TOKEN',
          message: 'Your session has expired. Please sign in again.'
        }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { identifier, itemType, userId } = await req.json() as VerificationRequest;
    
    // Use authenticated user's ID, ignore client-provided userId for security
    const authenticatedUserId = user.id;

    if (!identifier || identifier.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Identifier is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[verify-item] Authenticated verification for user ${authenticatedUserId}, ${itemType}: ${identifier}`);
    const startTime = Date.now();

    const cleanIdentifier = identifier.trim().toUpperCase();
    const providers: any[] = [];

    // 1. Check internal stolen_items database first
    try {
      const { data: stolenItems, error } = await supabaseClient
        .from('stolen_items')
        .select('*')
        .or(`serial_number.ilike.%${cleanIdentifier}%,imei.ilike.%${cleanIdentifier}%,vin.ilike.%${cleanIdentifier}%`)
        .limit(5);

      if (!error && stolenItems && stolenItems.length > 0) {
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
          user_id: authenticatedUserId,
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
          user_id: authenticatedUserId,
          serial_number: cleanIdentifier,
          item_type: itemType || 'unknown',
          status: finalStatus,
          confidence_score: avgConfidence,
          api_source: 'verify-item',
          verification_status: finalStatus,
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
    console.error('[verify-item] Internal error:', error);
    
    // Get CORS headers for error response
    const origin = req.headers.get('origin');
    const errorCorsHeaders = getCorsHeaders(origin);
    
    return new Response(
      JSON.stringify({ 
        error: 'Verification failed',
        code: 'INTERNAL_ERROR',
        finalStatus: 'error',
        riskLevel: 'medium',
        message: 'Unable to complete verification. Please try again.',
        providers: [],
        checkedSources: [],
        timestamp: new Date().toISOString(),
      }),
      { status: 500, headers: { ...errorCorsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
