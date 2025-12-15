import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { runParallelVerification } from '../_shared/parallel-verification.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface VerificationRequest {
  identifier: string;
  itemType: string;
  userId?: string;
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

    console.log(`[verify-item] Starting verification for ${itemType}: ${identifier}`);
    const startTime = Date.now();

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

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

    // 2. Run parallel verification with web scraping + AI
    try {
      const parallelResult = await runParallelVerification(supabaseClient, {
        identifier: cleanIdentifier,
        itemType: itemType || 'unknown',
        includeWebScraping: true,
        includeAI: true,
        additionalSources: []
      });

      // Add results from parallel verification
      if (parallelResult.details?.all_sources) {
        for (const source of parallelResult.details.all_sources) {
          providers.push({
            provider: source.source,
            status: source.status,
            confidence: source.confidence,
            message: source.message,
            responseTime: Date.now() - startTime,
          });
        }
      } else {
        providers.push({
          provider: parallelResult.source,
          status: parallelResult.status,
          confidence: parallelResult.confidence,
          message: parallelResult.message,
          responseTime: Date.now() - startTime,
        });
      }
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

    // Store result in database
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
