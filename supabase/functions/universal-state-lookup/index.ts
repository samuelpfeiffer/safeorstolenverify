import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { runParallelVerification } from '../verify-item/parallel-verification.ts';
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

const STATE_FUNCTIONS: Record<string, string> = {
  'AZ': 'arizona-theft-lookup',
  'FL': 'florida-theft-lookup',
  'TX': 'texas-theft-lookup',
  'CA': 'california-theft-lookup',
  'NY': 'new-york-theft-lookup'
};

interface UniversalLookupRequest {
  stateCode: string;
  type: 'license_plate' | 'vin';
  value: string;
}

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'No authorization header' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body: UniversalLookupRequest = await req.json();
    const { stateCode, type, value } = body;

    if (!stateCode || !type || !value) {
      return new Response(JSON.stringify({ error: 'Missing required fields: stateCode, type, value' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const upperStateCode = stateCode.toUpperCase();
    console.log(`Universal lookup for state: ${upperStateCode}, type: ${type}, value: ${value}`);

    // Check if state has dedicated function
    const stateFunctionName = STATE_FUNCTIONS[upperStateCode];
    
    if (stateFunctionName) {
      console.log(`Routing to dedicated function: ${stateFunctionName}`);
      
      // Call the dedicated state function
      const { data, error } = await supabase.functions.invoke(stateFunctionName, {
        body: { type, value, state: upperStateCode },
        headers: {
          Authorization: authHeader
        }
      });

      if (error) {
        console.error(`Error calling ${stateFunctionName}:`, error);
        throw error;
      }

      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Fallback: real databases (NHTSA + TheftAZ via verify-vehicle) plus web search and AI advice
    console.log(`No dedicated function for ${upperStateCode}, using parallel verification`);
    
    const isVin = String(type).toLowerCase() === 'vin';
    const [result, plateCheck] = await Promise.all([
      runParallelVerification(supabase, {
        identifier: value,
        itemType: isVin ? 'vehicle' : 'license_plate',
        includeWebScraping: true,
        includeAI: true,
      }),
      // Plates: also search real law-enforcement records (TheftAZ) through verify-vehicle.
      isVin
        ? Promise.resolve(null)
        : supabase.functions.invoke('verify-vehicle', { body: { plate: value, state: upperStateCode } })
            .then((r: any) => r.data).catch(() => null),
    ]);

    // List ONLY the sources that actually answered for this check (Sept 30 2026).
    const allSources: any[] = result.details?.all_sources || [];
    const dbs = new Set<string>();
    for (const s of allSources) for (const d of (s?.details?.databases || [])) dbs.add(d);
    for (const d of (plateCheck?.details?.databases || [])) dbs.add(d);
    const usedWeb = allSources.some((s) => s?.source === 'Web_Scraper' && s?.status !== 'error');
    const usedAI = allSources.some((s) => s?.source === 'AI_Analysis' && s?.status !== 'error');
    const parts = [...dbs];
    if (usedWeb) parts.push('a public web search for theft reports');
    if (usedAI) parts.push('an AI risk review');
    const disclaimer = parts.length
      ? `Sources checked for this result: ${parts.join('; ')}. No single database covers every state, so before you pay, ask the seller to show the title and proof of ownership.`
      : 'Our sources could not be reached for this check. Please try again in a few minutes, and ask the seller to show the title and proof of ownership.';

    // HONEST VERDICT (Sept 30 2026): only real databases can say stolen. AI is advice only;
    // a web mention is a "possible match", never a theft report.
    const realSources = allSources.filter((s) => s?.source !== 'Web_Scraper' && s?.source !== 'AI_Analysis');
    const realStolen = realSources.find((s) => s?.status === 'stolen');
    const webFlag = allSources.find((s) => s?.source === 'Web_Scraper' && s?.status === 'stolen');
    const plateStolen = plateCheck?.status === 'stolen';
    const label = `${upperStateCode} ${isVin ? 'VIN' : 'plate'} ${value}`;
    let finalStatus = 'unknown';
    let finalMessage: string;
    let finalConfidence = 0;
    if (plateStolen) {
      finalStatus = 'stolen'; finalConfidence = plateCheck.confidence || 95; finalMessage = plateCheck.message;
    } else if (realStolen) {
      finalStatus = 'stolen'; finalConfidence = realStolen.confidence || 90;
      finalMessage = realStolen.message || `🚨 THEFT REPORT FOUND for ${label}. Do not buy. Contact local police.`;
    } else if (webFlag) {
      finalMessage = `⚠️ POSSIBLE MATCH: A web page may mention ${label} in a theft context. This is not an official report. Ask the seller for the title and proof of ownership before buying.`;
    } else if (dbs.size > 0) {
      finalMessage = `No theft report found for ${label} in the records we checked. ${disclaimer}`;
    } else {
      finalMessage = `No theft report found for ${label}. ${disclaimer}`;
    }

    return new Response(JSON.stringify({
      status: finalStatus,
      message: finalMessage,
      details: {
        ...result.details,
        plate_check: plateCheck?.details || undefined,
        state: upperStateCode,
        verification_date: new Date().toISOString(),
        sources_checked: parts.length,
        databases: [...dbs],
        disclaimer,
      },
      confidence: finalConfidence,
      source: 'Multi-Source Verification',
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in universal-state-lookup:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      details: (error instanceof Error ? error.message : String(error)) 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});