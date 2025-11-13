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

    console.log(`[STOLENLOSTFOUND] Checking: ${identifier}`);

    // Initialize Supabase client for caching
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check cache first (24-hour TTL)
    const { data: cached } = await supabase
      .from('external_verification_cache')
      .select('*')
      .eq('identifier', identifier)
      .eq('source', 'StolenLostFound')
      .gt('expires_at', new Date().toISOString())
      .single();

    if (cached) {
      console.log('[STOLENLOSTFOUND] Cache hit');
      return new Response(
        JSON.stringify({ ...cached.result, cached: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Rate limiting delay
    await new Promise(resolve => setTimeout(resolve, 2300));

    // Use CORS proxy for scraping
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const searchUrl = `https://www.stolenlostfound.com/search?q=${encodeURIComponent(identifier)}`;
    
    const response = await fetch(proxyUrl + encodeURIComponent(searchUrl), {
      headers: {
        'User-Agent': 'SafeOrStolen.com Verification Service'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    
    // Detect results - checks for stolen AND lost items
    const hasStolen = html.includes('status-stolen') || html.includes('reported-stolen');
    const hasLost = html.includes('status-lost') || html.includes('reported-lost');
    const hasResults = hasStolen || hasLost || 
                      html.includes('match-found') ||
                      (html.includes('result') && !html.includes('no results'));

    const result = {
      source: 'StolenLostFound.com',
      found: hasResults,
      status: hasStolen ? 'stolen' : hasLost ? 'lost' : 'safe',
      message: hasStolen 
        ? '⚠️ Reported as stolen in community database' 
        : hasLost
          ? 'ℹ️ Reported as lost in community database'
          : '✓ Not found in StolenLostFound',
      provider: 'StolenLostFound.com',
      identifier: identifier,
      details: hasResults 
        ? 'Community-reported database - Visit for full report'
        : 'No community reports found',
      link: `https://www.stolenlostfound.com/search?q=${encodeURIComponent(identifier)}`,
      timestamp: new Date().toISOString()
    };

    // Cache the result for 24 hours
    await supabase
      .from('external_verification_cache')
      .upsert({
        identifier,
        source: 'StolenLostFound',
        result,
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      });

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[STOLENLOSTFOUND] Error:', error);
    return new Response(
      JSON.stringify({ 
        status: 'error',
        source: 'StolenLostFound.com',
        message: 'Unable to check StolenLostFound at this time',
        error: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
