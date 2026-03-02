import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { runParallelVerification } from '../_shared/parallel-verification.ts';
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

    // Fallback: Use parallel verification with web scraping + AI
    console.log(`No dedicated function for ${upperStateCode}, using parallel verification`);
    
    const result = await runParallelVerification(supabase, {
      identifier: value,
      itemType: type === 'vin' ? 'vehicle' : 'license_plate',
      includeWebScraping: true,
      includeAI: true,
      additionalSources: []
    });

    return new Response(JSON.stringify({
      status: result.status,
      message: result.message || `Verification completed for ${upperStateCode} ${type.toUpperCase()}: ${value}`,
      details: {
        ...result.details,
        state: upperStateCode,
        verification_date: new Date().toISOString(),
        sources_checked: result.details?.total_sources_checked || 2,
        disclaimer: 'This check uses web scraping and AI analysis. For state-specific verification, contact local law enforcement.'
      },
      confidence: result.confidence,
      source: result.source,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in universal-state-lookup:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});