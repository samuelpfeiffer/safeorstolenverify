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
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    console.log('[SCHEDULER] Starting scheduled content generation and optimization...');

    // Run content generator
    console.log('[SCHEDULER] Triggering content generator...');
    const genResponse = await fetch(`${supabaseUrl}/functions/v1/autonomous-content-generator`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'Content-Type': 'application/json',
      },
    });

    const genResult = await genResponse.json();
    console.log('[SCHEDULER] Content generator result:', genResult);

    // Run auto-fix
    console.log('[SCHEDULER] Triggering auto-fix system...');
    const fixResponse = await fetch(`${supabaseUrl}/functions/v1/auto-fix-content-issues`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'Content-Type': 'application/json',
      },
    });

    const fixResult = await fixResponse.json();
    console.log('[SCHEDULER] Auto-fix result:', fixResult);

    return new Response(JSON.stringify({
      success: true,
      contentGeneration: genResult,
      autoFix: fixResult,
      message: 'Scheduled content generation and optimization completed'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[SCHEDULER] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
