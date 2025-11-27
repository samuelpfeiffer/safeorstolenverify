import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('[AI-SEO-INITIALIZE] Initializing AI SEO system...');

    // Target keywords for content generation (90-day strategy)
    const targetKeywords = [
      // Zero-competition keywords (Month 1)
      { topic: 'barcode scanning verification app', priority: 100, keywords: ['barcode scan verification', 'scan serial number app'] },
      { topic: 'offline item verification app', priority: 100, keywords: ['offline verification', 'check stolen items offline'] },
      { topic: 'firearm serial number verification', priority: 95, keywords: ['gun serial number check', 'firearm verification'] },
      { topic: 'boat serial number verification', priority: 90, keywords: ['boat HIN verification', 'marine theft check'] },
      
      // Competitor keyword hijacking (Months 2-4)
      { topic: 'CheckMEND mobile app alternative', priority: 85, keywords: ['CheckMEND app', 'mobile CheckMEND alternative'] },
      { topic: 'IMEI.info mobile app vs SafeOrStolen', priority: 85, keywords: ['IMEI.info app', 'IMEI checker mobile'] },
      { topic: 'LeadsOnline consumer alternative', priority: 80, keywords: ['LeadsOnline alternative', 'consumer stolen goods check'] },
      { topic: 'Swappa IMEI check alternative', priority: 80, keywords: ['Swappa alternative', 'better IMEI checker'] },
      
      // High-volume keywords (Months 2-6)
      { topic: 'how to check if phone is stolen', priority: 75, keywords: ['check stolen phone', 'verify phone not stolen'] },
      { topic: 'free IMEI checker no registration', priority: 75, keywords: ['free IMEI check', 'no signup IMEI checker'] },
      { topic: 'VIN checker free with theft records', priority: 70, keywords: ['free VIN check', 'VIN theft lookup'] },
      { topic: 'serial number verification for electronics', priority: 70, keywords: ['electronics serial number', 'laptop serial check'] },
      { topic: 'license plate stolen car lookup', priority: 65, keywords: ['license plate check', 'stolen car plate lookup'] },
      { topic: 'pawn shop verification system free', priority: 65, keywords: ['pawn shop checker', 'verify pawn items'] },
      
      // Content depth keywords (Months 3-8)
      { topic: 'complete guide to buying used phones safely', priority: 60, keywords: ['buying used phones', 'safe phone purchase guide'] },
      { topic: 'how thieves sell stolen electronics online', priority: 60, keywords: ['stolen electronics marketplace', 'how stolen goods sold'] },
      { topic: 'marketplace safety guide Facebook eBay Craigslist', priority: 55, keywords: ['marketplace safety', 'buying safely online'] },
      { topic: 'ultimate VIN decoder and theft history guide', priority: 55, keywords: ['VIN decoder guide', 'car history check'] },
      { topic: 'IMEI blacklist what it means and how to check', priority: 50, keywords: ['IMEI blacklist', 'blocked IMEI meaning'] },
      { topic: 'serial number formats by manufacturer guide', priority: 50, keywords: ['serial number format', 'manufacturer serial codes'] },
      
      // Long-tail keywords (Months 4-12)
      { topic: 'how to check if iPhone is stolen before buying', priority: 45, keywords: ['check stolen iPhone', 'verify iPhone serial'] },
      { topic: 'Android IMEI check stolen database lookup', priority: 45, keywords: ['Android IMEI check', 'check stolen Android'] },
      { topic: 'laptop serial number verification Dell HP Lenovo', priority: 40, keywords: ['laptop serial check', 'verify laptop not stolen'] },
      { topic: 'camera serial number verification Canon Nikon Sony', priority: 40, keywords: ['camera serial check', 'verify camera serial'] },
      { topic: 'bike frame number verification stolen bike check', priority: 35, keywords: ['bike serial check', 'stolen bicycle lookup'] },
    ];

    let inserted = 0;

    for (const item of targetKeywords) {
      // Check if already exists
      const { data: existing } = await supabase
        .from('content_generation_queue')
        .select('id')
        .eq('topic', item.topic)
        .single();

      if (!existing) {
        await supabase
          .from('content_generation_queue')
          .insert({
            topic: item.topic,
            content_type: 'blog',
            status: 'pending',
            priority: item.priority,
            target_keywords: item.keywords,
          });
        inserted++;
      }
    }

    console.log(`[AI-SEO-INITIALIZE] Added ${inserted} keywords to content generation queue`);

    return new Response(JSON.stringify({
      success: true,
      keywords_added: inserted,
      total_keywords: targetKeywords.length,
      message: 'AI SEO system initialized with target keywords'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[AI-SEO-INITIALIZE] Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
