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

    console.log(`[INTERPOL] Checking: ${identifier} (${itemType})`);

    // Interpol databases - primarily for law enforcement
    // Public access limited to certain databases (e.g., Stolen Works of Art)
    
    const INTERPOL_API_KEY = Deno.env.get('INTERPOL_API_KEY');
    
    // Check Interpol Red Notices API (public)
    if (itemType === 'artwork' || itemType === 'cultural_property') {
      try {
        // Interpol Stolen Works of Art Database
        // Note: Public access is limited, full access requires law enforcement credentials
        const response = await fetch(`https://interpol.api.bund.dev/api/v1/search`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            query: identifier,
            type: 'stolen_art'
          })
        });

        if (response.ok) {
          const data = await response.json();
          
          return new Response(
            JSON.stringify({
              status: data.found ? 'stolen' : 'safe',
              message: data.found 
                ? '⚠️ Item may be in Interpol Stolen Works Database'
                : '✓ No matches in Interpol public databases',
              provider: 'Interpol',
              identifier: identifier,
              details: data,
              note: 'Limited public access - full verification requires law enforcement'
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
      } catch (error) {
        console.warn('[INTERPOL] Public API check failed:', error);
      }
    }

    // For vehicles and general property
    if (!INTERPOL_API_KEY) {
      console.warn('[INTERPOL] API key not configured - law enforcement access only');
      return new Response(
        JSON.stringify({
          status: 'law_enforcement_only',
          message: 'Interpol databases require law enforcement credentials',
          redirect_url: 'https://www.interpol.int/en/How-we-work/Databases',
          instructions: 'Interpol maintains 19 specialized databases for international crime. Access is restricted to law enforcement agencies. For stolen art, use ID-Art app. For vehicles, contact your local police to query Interpol databases.',
          provider: 'Interpol',
          identifier: identifier,
          available_databases: [
            'Stolen Motor Vehicles (SMV)',
            'Stolen Works of Art',
            'Stolen Administrative Documents',
            'Firearms Tracing',
            'MIND/Find (missing persons)'
          ],
          note: 'Full access requires law enforcement credentials'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // If law enforcement API access is configured
    const response = await fetch(`https://www.interpol.int/api/stolen-property/check`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${INTERPOL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        identifier, 
        item_type: itemType 
      })
    });

    if (!response.ok) {
      throw new Error(`Interpol API error: ${response.status}`);
    }

    const data = await response.json();

    const result = {
      status: data.stolen ? 'stolen' : 'safe',
      message: data.stolen 
        ? '⚠️ Item flagged in Interpol databases'
        : '✓ No reports found in Interpol databases',
      provider: 'Interpol',
      identifier: identifier,
      details: data
    };

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[INTERPOL] Error:', error);
    return new Response(
      JSON.stringify({ 
        status: 'error',
        message: 'Interpol check failed',
        error: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
