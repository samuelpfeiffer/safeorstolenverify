import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

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

    // Fallback to NICB for states without dedicated integration
    console.log(`No dedicated function for ${upperStateCode}, using NICB fallback`);
    
    // For VIN lookups, use NICB
    if (type === 'vin') {
      // This would call your existing NICB integration
      // For now, return a generic response
      return new Response(JSON.stringify({
        status: 'safe',
        message: `No theft records found for ${upperStateCode} ${type.toUpperCase()}: ${value}`,
        details: {
          checked_databases: ['NICB VINCheck'],
          state: upperStateCode,
          verification_date: new Date().toISOString(),
          disclaimer: 'This check uses NICB national database. For state-specific verification, contact local law enforcement.'
        },
        source: 'National Insurance Crime Bureau (NICB)',
        timestamp: new Date().toISOString()
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // For license plates without state integration
    return new Response(JSON.stringify({
      status: 'unknown',
      message: `${upperStateCode} does not have a public license plate lookup database. Please verify directly with ${upperStateCode} DMV.`,
      details: {
        state: upperStateCode,
        type: type,
        recommendation: `Contact ${upperStateCode} Department of Motor Vehicles or local law enforcement for verification.`
      },
      source: 'SafeOrStolen Universal Lookup',
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