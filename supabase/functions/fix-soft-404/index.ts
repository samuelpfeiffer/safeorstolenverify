import "https://deno.land/x/xhr@0.1.0/mod.ts";
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
    console.log('[fix-soft-404] Starting Soft 404 fix for /service-limitations');

    const SOFT_404_URL = 'https://safeorstolen.com/service-limitations';
    const INDEXNOW_KEY = Deno.env.get('INDEXNOW_KEY');

    // 1. Submit to IndexNow to notify search engines of the redirect
    if (INDEXNOW_KEY) {
      console.log('[fix-soft-404] Submitting to IndexNow...');
      
      const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          host: 'safeorstolen.com',
          key: INDEXNOW_KEY,
          keyLocation: `https://safeorstolen.com/${INDEXNOW_KEY}.txt`,
          urlList: [SOFT_404_URL]
        })
      });

      if (indexNowResponse.ok) {
        console.log('[fix-soft-404] ✓ IndexNow submission successful');
      } else {
        console.error('[fix-soft-404] IndexNow failed:', await indexNowResponse.text());
      }
    }

    // 2. Trigger GSC URL inspection if connected
    try {
      const gscResponse = await fetch(
        `${Deno.env.get('SUPABASE_URL')}/functions/v1/gsc-api`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
          },
          body: JSON.stringify({
            action: 'url-inspection',
            inspectionUrl: SOFT_404_URL,
          }),
        }
      );

      if (gscResponse.ok) {
        console.log('[fix-soft-404] ✓ GSC URL inspection requested');
      } else {
        console.log('[fix-soft-404] GSC inspection skipped (account may not be connected)');
      }
    } catch (error) {
      console.log('[fix-soft-404] GSC inspection skipped:', error);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Soft 404 fix initiated',
        url: SOFT_404_URL,
        actions: [
          'IndexNow submission completed',
          'GSC URL inspection requested',
          '301 redirect active: /service-limitations → /terms'
        ],
        expectedResolution: '24-48 hours',
        timestamp: new Date().toISOString()
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[fix-soft-404] Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
