import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { runParallelVerification } from '../_shared/parallel-verification.ts';
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { toCanonicalItemType } from '../_shared/itemType.ts';

interface VerificationRequest {
  identifier: string;
  itemType: string;
  userId?: string;
  fingerprint?: string;
}

// Anonymous checks are allowed only if check-gate has just granted this
// fingerprint a free check (row exists, within the free limit, recent).
const ANON_FREE_LIMIT = 2;
const ANON_GRANT_WINDOW_MS = 10 * 60 * 1000;

serve(async (req) => {
  // Handle CORS preflight
  const corsResponse = handleCorsPreFlight(req);
  if (corsResponse) return corsResponse;

  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);

  try {
    console.log('[verify-item-public] build:anon-gate-v2');
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const body = await req.json() as VerificationRequest;
    const { identifier, itemType: rawItemType, fingerprint } = body;
    // Canonicalize item_type at the single server-side write boundary
    const itemType = toCanonicalItemType(rawItemType);

    // Resolve identity: a valid JWT wins; otherwise fall back to the
    // fingerprint free-check grant. Client-supplied userId is never trusted.
    let authenticatedUserId: string | null = null;
    const authHeader = req.headers.get('Authorization');
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? '';
    const token = authHeader?.replace('Bearer ', '').trim() ?? '';

    if (token && token !== anonKey) {
      // A non-user token (the project's publishable/anon key) simply resolves to
      // no user — fall through to the gated anonymous path rather than 401.
      const { data: { user } } = await supabaseClient.auth.getUser(token);
      authenticatedUserId = user?.id ?? null;
    }

    if (!authenticatedUserId) {
      // Anonymous path — must present a fingerprint that check-gate just cleared.
      if (!fingerprint || typeof fingerprint !== 'string' || fingerprint.length > 128) {
        return new Response(
          JSON.stringify({ error: 'fingerprint required', code: 'GATE_REQUIRED' }),
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const { data: usage } = await supabaseClient
        .from('usage_tracking')
        .select('check_count, last_check_at')
        .eq('fingerprint', fingerprint)
        .maybeSingle();

      const lastCheck = usage?.last_check_at ? new Date(usage.last_check_at).getTime() : 0;
      const fresh = Date.now() - lastCheck < ANON_GRANT_WINDOW_MS;
      const withinLimit = (usage?.check_count ?? 0) <= ANON_FREE_LIMIT;

      if (!usage || !fresh || !withinLimit) {
        console.log('[verify-item-public] Anonymous gate rejected for fingerprint');
        return new Response(
          JSON.stringify({
            error: 'Free check limit reached',
            code: 'GATE_BLOCKED',
            message: 'Create a free account to continue verifying items.'
          }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    if (!identifier || identifier.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Identifier is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[verify-item-public] Verification for ${authenticatedUserId ?? 'anonymous'}, ${itemType}: ${identifier}`);

    const startTime = Date.now();

    const cleanIdentifier = identifier.trim().toUpperCase();
    // Normalized form: uppercase, spaces and hyphens stripped
    const normalizedIdentifier = cleanIdentifier.replace(/[\s\-]/g, '');
    // Strict allow-list. Anything outside this never touches a query.
    const isSafeIdentifier = /^[A-Z0-9]{3,50}$/.test(normalizedIdentifier);
    // Registry matches shorter than 6 chars are too collision-prone to accuse anyone.
    const canReturnStolen = isSafeIdentifier && normalizedIdentifier.length >= 6;
    // Candidate exact values (parameterized, never interpolated into a filter string)
    const exactCandidates = Array.from(new Set([cleanIdentifier, normalizedIdentifier]));
    const normalize = (v: unknown) =>
      typeof v === 'string' ? v.trim().toUpperCase().replace(/[\s\-]/g, '') : '';

    const providers: any[] = [];

    // 1. Check internal stolen_items database first (EXACT match only)
    try {
      if (!isSafeIdentifier) {
        console.warn('[verify-item-public] Skipping internal registry check: identifier failed sanitization');
        providers.push({
          provider: 'SafeOrStolen Database',
          status: 'unknown',
          confidence: 0,
          message: 'Identifier format not supported for registry lookup',
          responseTime: Date.now() - startTime,
        });
      } else {
        // Three separate parameterized queries, unioned in JS. No raw .or() interpolation.
        const [bySerial, byImei, byVin] = await Promise.all([
          supabaseClient.from('stolen_items').select('*').in('serial_number', exactCandidates).limit(5),
          supabaseClient.from('stolen_items').select('*').in('imei', exactCandidates).limit(5),
          supabaseClient.from('stolen_items').select('*').in('vin', exactCandidates).limit(5),
        ]);

        const seen = new Set<string>();
        const matches: any[] = [];
        for (const res of [bySerial, byImei, byVin]) {
          if (res.error || !res.data) continue;
          for (const row of res.data) {
            // Re-verify exact normalized equality defensively
            const hit =
              normalize(row.serial_number) === normalizedIdentifier ||
              normalize(row.imei) === normalizedIdentifier ||
              normalize(row.vin) === normalizedIdentifier;
            if (hit && !seen.has(row.id)) {
              seen.add(row.id);
              matches.push(row);
            }
          }
        }

        if (matches.length > 0 && canReturnStolen) {
          providers.push({
            provider: 'SafeOrStolen Database',
            status: 'stolen',
            confidence: 98,
            message: 'Item found in SafeOrStolen stolen items registry',
            details: { matches: matches.length },
            responseTime: Date.now() - startTime,
          });
        } else if (matches.length > 0) {
          providers.push({
            provider: 'SafeOrStolen Database',
            status: 'unknown',
            confidence: 0,
            message: 'Identifier too short to confirm a registry match',
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
      }
    } catch (dbError) {
      console.error('[verify-item-public] Database check error:', dbError);
    }

    // 1b. Check mirrored stolen registries (stolen_registry) — EXACT normalized match only
    try {
      if (!isSafeIdentifier) {
        console.warn('[verify-item-public] Skipping stolen_registry check: identifier failed sanitization');
      } else {
        const { data: mirrored, error: mirrorError } = await supabaseClient
          .from('stolen_registry')
          .select('*')
          .eq('serial_normalized', normalizedIdentifier)
          .limit(5);

        const hit = !mirrorError && mirrored && mirrored.length > 0 ? mirrored[0] : null;

        if (hit && canReturnStolen) {
          const providerName = hit.source === 'bikeindex' ? 'Bike Index' : String(hit.source);
          const parts: string[] = ['Match found in mirrored stolen registry'];
          if (hit.manufacturer) parts.push(`Manufacturer: ${hit.manufacturer}`);
          if (hit.model) parts.push(`Model: ${hit.model}`);
          if (hit.date_stolen) parts.push(`Date stolen: ${new Date(hit.date_stolen).toISOString().slice(0, 10)}`);
          if (hit.location) parts.push(`Location: ${hit.location}`);
          if (hit.source_url) parts.push(`Source: ${hit.source_url}`);
          providers.push({
            provider: providerName,
            status: 'stolen',
            confidence: 95,
            message: parts.join(' · '),
            details: { source: hit.source, source_url: hit.source_url },
            responseTime: Date.now() - startTime,
          });
        } else if (hit) {
          providers.push({
            provider: 'Mirrored Stolen Registries',
            status: 'unknown',
            confidence: 0,
            message: 'Identifier too short to confirm a registry match',
            responseTime: Date.now() - startTime,
          });
        } else {
          providers.push({
            provider: 'Mirrored Stolen Registries',
            status: 'safe',
            confidence: 80,
            message: 'Not found in mirrored stolen registries',
            responseTime: Date.now() - startTime,
          });
        }
      }
    } catch (mirrorErr) {
      console.error('[verify-item-public] stolen_registry check error:', mirrorErr);
    }


    // 2. Run enhanced parallel verification with item-type-specific sources
    try {
      console.log(`[verify-item-public] Running enhanced parallel verification for ${itemType}...`);
      
      const parallelResult = await runParallelVerification(supabaseClient, {
        identifier: cleanIdentifier,
        itemType,
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
      
      console.log(`[verify-item-public] Parallel verification added ${providers.length - 1} additional sources`);
    } catch (parallelError) {
      console.error('[verify-item-public] Parallel verification error:', parallelError);
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
    // Only sources that actually answered count toward confidence.
    // "unknown" (and errored) sources are excluded entirely; if nothing
    // answered, confidence is null rather than a misleading low number.
    const answeredChecks = providers.filter(
      p => p.status !== 'error' && p.status !== 'unknown' && p.confidence > 0
    );
    const avgConfidence: number | null = answeredChecks.length > 0
      ? Math.round(answeredChecks.reduce((sum, p) => sum + p.confidence, 0) / answeredChecks.length)
      : null;
    const successfulChecks = answeredChecks;

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
      itemType,
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
          item_type: itemType,
          result: { 
            status: finalStatus, 
            confidence: avgConfidence,
            riskLevel,
            message,
            providers: providers.map(p => ({ provider: p.provider, status: p.status, confidence: p.confidence })),
            checkedSources: providers.map(p => p.provider)
          },
        });
      console.log('[verify-item-public] Search recorded in verification_searches');
    } catch (searchError) {
      console.error('[verify-item-public] Failed to store search:', searchError);
    }

    // Also store in verification_results for detailed analysis
    try {
      await supabaseClient
        .from('verification_results')
        .insert({
          user_id: authenticatedUserId,
          serial_number: cleanIdentifier,
          item_type: itemType,
          status: finalStatus,
          confidence_score: avgConfidence,
          api_source: 'verify-item',
          verification_status: finalStatus,
          details: { providers, riskLevel, message },
        });
    } catch (storeError) {
      console.error('[verify-item-public] Failed to store result:', storeError);
    }

    console.log(`[verify-item-public] Complete in ${Date.now() - startTime}ms - Status: ${finalStatus}`);

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[verify-item-public] Internal error:', error);
    
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
