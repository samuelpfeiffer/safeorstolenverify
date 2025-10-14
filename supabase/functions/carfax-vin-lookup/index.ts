import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { vin } = await req.json();
    
    if (!vin || vin.length !== 17) {
      return new Response(
        JSON.stringify({ error: 'Invalid VIN format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[CARFAX] Checking VIN: ${vin}`);

    // Placeholder for CarFax API integration
    // Note: CarFax requires paid API access
    const result = {
      status: 'safe',
      message: 'CarFax integration pending - requires API subscription',
      provider: 'CarFax',
      vin: vin,
      details: {
        note: 'This endpoint requires CarFax API credentials',
        recommendation: 'Contact CarFax for API access'
      }
    };

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[CARFAX] Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});