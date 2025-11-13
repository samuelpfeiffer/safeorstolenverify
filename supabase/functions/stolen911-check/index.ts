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

    console.log(`[STOLEN911] Checking: ${identifier}`);

    // Initialize Supabase client for caching
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check cache first (24-hour TTL)
    const { data: cached } = await supabase
      .from('external_verification_cache')
      .select('*')
      .eq('identifier', identifier)
      .eq('source', 'Stolen911')
      .gt('expires_at', new Date().toISOString())
      .single();

    if (cached) {
      console.log('[STOLEN911] Cache hit');
      return new Response(
        JSON.stringify({ ...cached.result, cached: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Rate limiting delay
    await new Promise(resolve => setTimeout(resolve, 2500));

    // Use CORS proxy for scraping
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const searchUrl = `https://www.stolen911.com/search?q=${encodeURIComponent(identifier)}`;
    
    const response = await fetch(proxyUrl + encodeURIComponent(searchUrl), {
      headers: {
        'User-Agent': 'SafeOrStolen.com Verification Service'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    
    // Detect results - Stolen911 has specific markers
    const hasResults = html.includes('stolen-item') || 
                      html.includes('report-date') ||
                      html.includes('item-title') ||
                      (html.toLowerCase().includes('found') && html.toLowerCase().includes('report'));

    const result = {
      source: 'Stolen911.com',
      found: hasResults,
      status: hasResults ? 'stolen' : 'safe',
      message: hasResults 
        ? '⚠️ Item may be in Stolen911 database' 
        : '✓ Not found in Stolen911',
      provider: 'Stolen911.com',
      identifier: identifier,
      details: hasResults 
        ? 'Police detective-founded database - Visit site for full details'
        : 'No reports found in detective database',
      link: `https://www.stolen911.com/search?q=${encodeURIComponent(identifier)}`,
      timestamp: new Date().toISOString()
    };

    // Cache the result for 24 hours
    await supabase
      .from('external_verification_cache')
      .upsert({
        identifier,
        source: 'Stolen911',
        result,
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      });

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[STOLEN911] Error:', error);
    return new Response(
      JSON.stringify({ 
        status: 'error',
        source: 'Stolen911.com',
        message: 'Unable to check Stolen911 at this time',
        error: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
