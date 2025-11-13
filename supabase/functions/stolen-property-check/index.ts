import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { identifier } = await req.json();
    
    if (!identifier) {
      return new Response(
        JSON.stringify({ error: 'Identifier is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[STOLEN-PROPERTY] Checking: ${identifier}`);

    // Initialize Supabase client for caching
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check cache first (24-hour TTL)
    const { data: cached } = await supabase
      .from('external_verification_cache')
      .select('*')
      .eq('identifier', identifier)
      .eq('source', 'StolenProperty')
      .gt('expires_at', new Date().toISOString())
      .single();

    if (cached) {
      console.log('[STOLEN-PROPERTY] Cache hit');
      return new Response(
        JSON.stringify({ ...cached.result, cached: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Rate limiting delay
    await new Promise(resolve => setTimeout(resolve, 2200));

    // Use CORS proxy for scraping
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const searchUrl = `https://www.stolen-property.com/search?q=${encodeURIComponent(identifier)}`;
    
    const response = await fetch(proxyUrl + encodeURIComponent(searchUrl), {
      headers: {
        'User-Agent': 'SafeOrStolen.com Verification Service'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    
    // Use AI to parse HTML intelligently
    console.log('[STOLEN-PROPERTY] Using AI to parse HTML...');
    const aiParseResponse = await fetch(
      `${supabaseUrl}/functions/v1/ai-html-parser`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseKey}`
        },
        body: JSON.stringify({
          html,
          identifier,
          source: 'Stolen-Property.com'
        })
      }
    );

    let hasResults = false;
    let aiDetails = 'No international reports found';
    let confidence = 50;

    if (aiParseResponse.ok) {
      const aiData = await aiParseResponse.json();
      if (aiData.success && aiData.result) {
        hasResults = aiData.result.hasStolenItems;
        confidence = aiData.result.confidence;
        aiDetails = `International database: ${aiData.result.summary}`;
        
        if (aiData.result.items?.length > 0) {
          const item = aiData.result.items[0];
          aiDetails += `\n${item.description || ''}\nLocation: ${item.location || 'Unknown'}\nSerial: ${item.serialNumber || identifier}`;
        }
      }
    } else {
      console.warn('[STOLEN-PROPERTY] AI parsing failed, falling back to simple detection');
      // Fallback to simple detection
      hasResults = html.includes('property-result') || 
                   html.includes('stolen-property') ||
                   html.includes('search-match') ||
                   (html.includes('serial') && html.includes('match'));
      aiDetails = hasResults 
        ? 'International stolen property database - Check site for details'
        : 'No international reports found';
    }

    const result = {
      source: 'Stolen-Property.com',
      found: hasResults,
      status: hasResults ? 'stolen' : 'safe',
      confidence,
      message: hasResults 
        ? '⚠️ AI detected match in international database' 
        : '✓ AI confirmed not found in Stolen-Property.com',
      provider: 'Stolen-Property.com',
      identifier: identifier,
      details: aiDetails,
      link: `https://www.stolen-property.com/search?q=${encodeURIComponent(identifier)}`,
      timestamp: new Date().toISOString()
    };

    // Cache the result for 24 hours
    await supabase
      .from('external_verification_cache')
      .upsert({
        identifier,
        source: 'StolenProperty',
        result,
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      });

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[STOLEN-PROPERTY] Error:', error);
    return new Response(
      JSON.stringify({ 
        status: 'error',
        source: 'Stolen-Property.com',
        message: 'Unable to check Stolen-Property database at this time',
        error: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
