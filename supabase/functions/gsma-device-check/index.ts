import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

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

    console.log(`[GSMA] Checking IMEI: ${imei}`);

    const GSMA_API_KEY = Deno.env.get('GSMA_API_KEY');
    
    if (!GSMA_API_KEY) {
      console.warn('[GSMA] API key not configured - returning redirect URL');
      return new Response(
        JSON.stringify({
          status: 'redirect_required',
          message: 'GSMA Device Check requires manual verification',
          redirect_url: `https://devicecheck.gsma.com/`,
          instructions: 'Visit GSMA Device Check and enter the IMEI manually. For API access, contact devicechecksupport@gsma.com',
          provider: 'GSMA Device Check',
          imei: imei
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Real API integration (when GSMA_API_KEY is configured)
    const response = await fetch(`https://devicecheck.gsma.com/api/v1/check/${imei}`, {
      headers: {
        'Authorization': `Bearer ${GSMA_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`GSMA API error: ${response.status}`);
    }

    const data = await response.json();

    const result = {
      status: data.flagged ? 'blacklisted' : 'safe',
      message: data.flagged 
        ? '⚠️ Device is flagged on GSMA Block List'
        : '✓ Device is not flagged on GSMA Block List',
      provider: 'GSMA Device Check',
      imei: imei,
      details: {
        flagged: data.flagged,
        reason: data.reason || null,
        brand: data.brand,
        model: data.model,
        reportDate: data.report_date
      }
    };

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[GSMA] Error:', error);
    return new Response(
      JSON.stringify({ 
        status: 'error',
        message: 'GSMA verification failed',
        error: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
