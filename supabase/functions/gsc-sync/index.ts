import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Priority URLs to check
const PRIORITY_URLS = [
  'https://safeorstolen.com/',
  'https://safeorstolen.com/verify',
  'https://safeorstolen.com/pricing',
  'https://safeorstolen.com/about',
  'https://safeorstolen.com/mobile-app',
  'https://safeorstolen.com/app/download',
  'https://safeorstolen.com/dashboard',
  'https://safeorstolen.com/faq',
  'https://safeorstolen.com/terms',
  'https://safeorstolen.com/privacy',
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('[gsc-sync] Starting automated GSC sync');

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get all connected GSC accounts
    const { data: tokens, error: tokensError } = await supabaseAdmin
      .from('gsc_oauth_tokens')
      .select('*');

    if (tokensError || !tokens || tokens.length === 0) {
      console.log('[gsc-sync] No GSC accounts connected');
      return new Response(
        JSON.stringify({ message: 'No GSC accounts to sync', synced: 0 }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[gsc-sync] Found ${tokens.length} connected account(s)`);

    let totalSynced = 0;

    for (const tokenData of tokens) {
      console.log(`[gsc-sync] Syncing for user ${tokenData.user_id}`);

      // 1. Fetch Search Analytics (last 7 days)
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

      try {
        const analyticsResponse = await fetch(
          `${Deno.env.get('SUPABASE_URL')}/functions/v1/gsc-api`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
            },
            body: JSON.stringify({
              action: 'search-analytics',
              startDate,
              endDate,
              dimensions: ['query', 'page'],
              rowLimit: 100,
            }),
          }
        );

        if (analyticsResponse.ok) {
          console.log('[gsc-sync] ✓ Search analytics fetched');
          totalSynced++;
        }
      } catch (error) {
        console.error('[gsc-sync] Search analytics failed:', error);
      }

      // 2. Check URL inspection for priority URLs (1 per run to avoid rate limits)
      const randomUrl = PRIORITY_URLS[Math.floor(Math.random() * PRIORITY_URLS.length)];
      
      try {
        const inspectionResponse = await fetch(
          `${Deno.env.get('SUPABASE_URL')}/functions/v1/gsc-api`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
            },
            body: JSON.stringify({
              action: 'url-inspection',
              inspectionUrl: randomUrl,
            }),
          }
        );

        if (inspectionResponse.ok) {
          console.log(`[gsc-sync] ✓ URL inspection complete: ${randomUrl}`);
          totalSynced++;
        }
      } catch (error) {
        console.error('[gsc-sync] URL inspection failed:', error);
      }

      // Small delay between users
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log(`[gsc-sync] Sync complete. Total operations: ${totalSynced}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'GSC sync completed',
        accountsSynced: tokens.length,
        operationsCompleted: totalSynced,
        timestamp: new Date().toISOString()
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[gsc-sync] Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
