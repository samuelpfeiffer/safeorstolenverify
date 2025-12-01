import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('🚀 Starting batch indexing of all SafeOrStolen URLs...');

    // Core pages - highest priority
    const corePages = [
      'https://safeorstolen.com/',
      'https://safeorstolen.com/verify',
      'https://safeorstolen.com/app',
      'https://safeorstolen.com/pricing',
      'https://safeorstolen.com/about',
      'https://safeorstolen.com/dashboard',
      'https://safeorstolen.com/how-it-works',
      'https://safeorstolen.com/testimonials',
      'https://safeorstolen.com/faq',
      'https://safeorstolen.com/terms',
      'https://safeorstolen.com/privacy',
    ];

    // Item landing pages
    const itemPages = [
      'https://safeorstolen.com/imei-check',
      'https://safeorstolen.com/check-phone',
      'https://safeorstolen.com/vin-checker',
      'https://safeorstolen.com/check-car',
      'https://safeorstolen.com/firearms-check',
      'https://safeorstolen.com/check-laptop',
      'https://safeorstolen.com/check-electronics',
      'https://safeorstolen.com/license-plate-lookup',
    ];

    // Business pages
    const businessPages = [
      'https://safeorstolen.com/for-pawn-shops',
      'https://safeorstolen.com/for-auction-houses',
      'https://safeorstolen.com/for-dealers',
      'https://safeorstolen.com/for-brands',
    ];

    // All 50 state VIN pages
    const states = [
      'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado',
      'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho',
      'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana',
      'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota',
      'mississippi', 'missouri', 'montana', 'nebraska', 'nevada',
      'new-hampshire', 'new-jersey', 'new-mexico', 'new-york',
      'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon',
      'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
      'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington',
      'west-virginia', 'wisconsin', 'wyoming'
    ];

    const statePages = states.map(state => 
      `https://safeorstolen.com/state/${state}/vin-check`
    );

    // Combine all URLs
    const allUrls = [
      ...corePages,
      ...itemPages,
      ...businessPages,
      ...statePages,
    ];

    console.log(`📊 Total URLs to submit: ${allUrls.length}`);
    console.log(`   - Core pages: ${corePages.length}`);
    console.log(`   - Item pages: ${itemPages.length}`);
    console.log(`   - Business pages: ${businessPages.length}`);
    console.log(`   - State pages: ${statePages.length}`);

    // Call IndexNow submission function
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const { data, error } = await supabase.functions.invoke('submit-indexnow', {
      body: { urls: allUrls }
    });

    if (error) {
      console.error('❌ IndexNow submission failed:', error);
      throw error;
    }

    console.log('✅ Batch indexing complete!');
    console.log('Results:', JSON.stringify(data, null, 2));

    // Log to database
    await supabase.from('indexnow_submissions').insert({
      urls: allUrls,
      status: 'success',
      response: data
    });

    return new Response(
      JSON.stringify({
        success: true,
        totalUrls: allUrls.length,
        breakdown: {
          core: corePages.length,
          items: itemPages.length,
          business: businessPages.length,
          states: statePages.length,
        },
        indexNowResult: data,
        message: 'All URLs submitted to IndexNow (Bing, Yandex, etc.)',
        nextSteps: [
          'Submit sitemap to Google Search Console',
          'Use URL Inspection Tool for priority pages',
          'Monitor indexing progress in GSC and Bing Webmaster Tools'
        ]
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Batch indexing error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: 'Failed to batch submit URLs for indexing'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
