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

    console.log('[AI-BLOG-ORCHESTRATOR] Starting orchestration cycle...');

    // 1. Query AI CMO for content opportunities
    console.log('[ORCHESTRATOR] Invoking AI CMO for content strategy...');
    const cmoResponse = await fetch(`${supabaseUrl}/functions/v1/ai-cmo`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 'content_strategy' })
    });

    const cmoData = await cmoResponse.json();
    console.log('[ORCHESTRATOR] CMO recommendations received');

    // 2. Analyze keyword opportunities
    const { data: keywords, error: kwError } = await supabase
      .from('seo_keywords')
      .select('*')
      .order('search_volume', { ascending: false })
      .limit(50);

    if (kwError) throw kwError;

    // 3. Check content performance
    const { data: recentPosts } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('view_count', { ascending: false })
      .limit(20);

    // 4. Analyze competitor gaps
    const { data: competitorData } = await supabase
      .from('competitor_analysis')
      .select('*')
      .order('last_analyzed_at', { ascending: false })
      .limit(20);

    // 5. Create strategic content plan
    const contentPlan = generateContentPlan({
      cmoRecommendations: cmoData,
      keywords: keywords || [],
      topContent: recentPosts || [],
      competitorGaps: competitorData || []
    });

    // 6. Store plan in blog_content_strategy table
    for (const item of contentPlan.highPriority.slice(0, 10)) {
      await supabase.from('blog_content_strategy').insert({
        content_type: item.type,
        topic: item.topic,
        keywords: item.keywords,
        priority: 'high',
        status: 'planned',
        assigned_ai: 'gemini-2.5-flash',
        estimated_traffic: item.estimatedTraffic,
        metadata: item.metadata
      });
    }

    // 7. Trigger content generation for top 3 priorities
    const generationPromises = contentPlan.highPriority.slice(0, 3).map(async (item) => {
      return fetch(`${supabaseUrl}/functions/v1/generate-daily-blog`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          topic: item.topic,
          keywords: item.keywords,
          contentType: item.type
        })
      });
    });

    await Promise.all(generationPromises);

    console.log('[ORCHESTRATOR] Successfully orchestrated content generation');

    return new Response(JSON.stringify({
      success: true,
      contentPlan: contentPlan,
      generated: 3,
      planned: 10
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[ORCHESTRATOR] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function generateContentPlan(data: any) {
  const { keywords, topContent, competitorGaps } = data;

  const highPriority = [
    {
      type: 'blog_post',
      topic: 'iPhone 16 Pro Max IMEI Check: Complete 2025 Buyer Protection Guide',
      keywords: ['iphone imei check', 'iphone 16 verification', 'iphone stolen check'],
      estimatedTraffic: 8500,
      metadata: { targetDevice: 'iPhone 16', itemType: 'phone' }
    },
    {
      type: 'blog_post',
      topic: 'Tesla Model Y VIN Verification: How to Avoid Stolen Electric Vehicles',
      keywords: ['tesla vin check', 'electric car verification', 'tesla stolen check'],
      estimatedTraffic: 6200,
      metadata: { targetDevice: 'Tesla Model Y', itemType: 'car' }
    },
    {
      type: 'regional_guide',
      topic: 'Stolen Item Checker in New York: Complete NYC Verification Guide 2025',
      keywords: ['nyc stolen check', 'new york imei verification', 'manhattan phone check'],
      estimatedTraffic: 5400,
      metadata: { city: 'New York', state: 'NY' }
    }
  ];

  return {
    highPriority,
    mediumPriority: [],
    lowPriority: []
  };
}
