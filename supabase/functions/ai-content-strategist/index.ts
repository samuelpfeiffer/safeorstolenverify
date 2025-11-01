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
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('[AI-CONTENT-STRATEGIST] Generating quarterly strategy...');

    // Get current performance data
    const { data: posts } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('view_count', { ascending: false });

    const { data: keywords } = await supabase
      .from('seo_keywords')
      .select('*')
      .order('search_volume', { ascending: false });

    // Generate strategic insights using AI
    const prompt = `You are a content strategist for SafeOrStolen.com, a stolen item verification platform with a mobile app.

CURRENT STATE:
- Published posts: ${posts?.length || 0}
- Top keywords tracked: ${keywords?.length || 0}
- Focus: IMEI checks, VIN verification, serial number lookups

MISSION: Create a 90-day content strategy to achieve #1 Google rankings for all verification keywords.

Provide:
1. Topic clusters (5 main themes)
2. Pillar content recommendations (10 comprehensive guides)
3. Supporting content ideas (50 blog posts)
4. Seasonal opportunities (Q1 2025)
5. Competitor gap analysis
6. Backlink opportunity content
7. Mobile app promotion integration

Format as JSON with actionable topics, target keywords, and estimated impact.`;

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${lovableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    });

    if (!aiResponse.ok) {
      throw new Error(`AI API error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const strategy = aiData.choices[0].message.content;

    // Log strategy
    await supabase.from('audit_logs').insert({
      action: 'ai_strategy_generated',
      table_name: 'content_strategy',
      new_values: { strategy, generated_at: new Date().toISOString() }
    });

    console.log('[CONTENT-STRATEGIST] Strategy generated successfully');

    return new Response(JSON.stringify({
      success: true,
      strategy: strategy,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[CONTENT-STRATEGIST] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
