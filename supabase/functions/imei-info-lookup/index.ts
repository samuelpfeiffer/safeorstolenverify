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
    const { imei } = await req.json();
    
    if (!imei || !/^\d{14,15}$/.test(imei)) {
      return new Response(
        JSON.stringify({ error: 'Invalid IMEI format (must be 14-15 digits)' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[IMEI.INFO] Checking IMEI: ${imei}`);

    // IMEI.info API integration
    const IMEI_INFO_API_KEY = Deno.env.get('IMEI_INFO_API_KEY');
    
    if (!IMEI_INFO_API_KEY) {
      console.warn('[IMEI.INFO] API key not configured');
      return new Response(
        JSON.stringify({
          status: 'safe',
          message: 'IMEI.info integration pending - requires API key',
          provider: 'IMEI.info',
          details: { note: 'Configure IMEI_INFO_API_KEY secret' }
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Call IMEI.info API
    const response = await fetch(`https://api.imei.info/v1/check/${imei}`, {
      headers: {
        'Authorization': `Bearer ${IMEI_INFO_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`IMEI.info API error: ${response.status}`);
    }

    const data = await response.json();

    const result = {
      status: data.blacklisted ? 'blacklisted' : 'safe',
      message: data.blacklisted 
        ? '⚠️ Device is blacklisted by carriers'
        : '✓ Device is not blacklisted',
      provider: 'IMEI.info',
      imei: imei,
      details: {
        manufacturer: data.manufacturer,
        model: data.model,
        blacklisted: data.blacklisted,
        carriers: data.carriers || []
      }
    };

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[IMEI.INFO] Error:', error);
    return new Response(
      JSON.stringify({ 
        status: 'error',
        message: 'IMEI verification failed',
        error: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});