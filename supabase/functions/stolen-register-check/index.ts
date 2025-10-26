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
    const { identifier, itemType } = await req.json();
    
    if (!identifier) {
      return new Response(
        JSON.stringify({ error: 'Identifier is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[STOLEN-REGISTER] Checking: ${identifier}`);

    // StolenRegister.com - Free worldwide registry
    // Public API endpoint (if available) or redirect mode
    
    const STOLEN_REGISTER_API_KEY = Deno.env.get('STOLEN_REGISTER_API_KEY');
    
    if (!STOLEN_REGISTER_API_KEY) {
      console.warn('[STOLEN-REGISTER] API key not configured - returning redirect URL');
      return new Response(
        JSON.stringify({
          status: 'redirect_required',
          message: 'StolenRegister provides free public checks',
          redirect_url: `https://www.stolenregister.com/check`,
          instructions: 'Visit StolenRegister.com and enter your serial number, IMEI, VIN, or other identifier. This is a free worldwide registry.',
          provider: 'StolenRegister.com',
          identifier: identifier,
          note: 'Free public database - no API key required for manual checks'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // If API integration becomes available
    const response = await fetch(`https://api.stolenregister.com/v1/check`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STOLEN_REGISTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ identifier, item_type: itemType })
    });

    if (!response.ok) {
      throw new Error(`StolenRegister API error: ${response.status}`);
    }

    const data = await response.json();

    const result = {
      status: data.stolen ? 'stolen' : 'safe',
      message: data.stolen 
        ? '⚠️ Item found in StolenRegister database'
        : '✓ No reports found in StolenRegister',
      provider: 'StolenRegister.com',
      identifier: identifier,
      details: data
    };

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[STOLEN-REGISTER] Error:', error);
    return new Response(
      JSON.stringify({ 
        status: 'error',
        message: 'StolenRegister check failed',
        error: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
