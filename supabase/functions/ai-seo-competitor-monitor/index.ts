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

    console.log('[AI-SEO-COMPETITOR] Monitoring competitors...');

    const competitors = [
      { name: 'CheckMEND', domain: 'checkmend.com', weakness: 'No mobile app' },
      { name: 'IMEI.info', domain: 'imei.info', weakness: 'No mobile app' },
      { name: 'IMEIPro.info', domain: 'imeipro.info', weakness: 'Limited coverage' },
      { name: 'LeadsOnline', domain: 'leadsonline.com', weakness: 'B2B only, not consumer-focused' },
      { name: 'Stolen Register', domain: 'stolenregister.com', weakness: 'No barcode scanning' },
    ];

    const activity: any[] = [];

    for (const competitor of competitors) {
      console.log(`[AI-SEO-COMPETITOR] Checking ${competitor.name}...`);

      // Simulate competitor monitoring (in production, use web scraping)
      const hasNewContent = Math.random() > 0.7; // 30% chance of new content

      if (hasNewContent) {
        const newContentTitle = `How to Verify ${['Phones', 'Laptops', 'Cameras', 'Bikes'][Math.floor(Math.random() * 4)]} Before Buying`;
        
        activity.push({
          competitor: competitor.name,
          activity_type: 'new_blog_post',
          title: newContentTitle,
          detected_at: new Date().toISOString(),
          weakness: competitor.weakness,
        });

        console.log(`[AI-SEO-COMPETITOR] ${competitor.name} published: "${newContentTitle}"`);

        // Auto-create counter content
        const counterPrompt = `${competitor.name} just published: "${newContentTitle}"

Create a BETTER blog post for SafeOrStolen that:
1. Covers same topic but emphasizes our mobile app advantage
2. Shows how we're faster (3 sec barcode scanning vs 30+ sec typing)
3. Mentions their limitation: ${competitor.weakness}
4. Targets same keyword but better optimized
5. Include "vs ${competitor.name}" comparison section

Provide:
- Title (SEO-optimized, 60 chars)
- Keyword target
- Content outline (5 H2 sections)
- Why we're better points

Format as JSON: {"title": "...", "keyword": "...", "outline": [...], "advantages": [...]}`;

        const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${lovableApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'google/gemini-2.5-flash',
            messages: [{ role: 'user', content: counterPrompt }],
            temperature: 0.8,
          }),
        });

        const aiData = await aiResponse.json();
        const counterContent = JSON.parse(aiData.choices[0].message.content);

        // Add to content generation queue (will be auto-published by content generator)
        await supabase
          .from('content_generation_queue')
          .insert({
            topic: counterContent.keyword,
            content_type: 'blog',
            status: 'pending',
            priority: 100, // High priority for competitor response
            competitor_urls: [`https://${competitor.domain}`],
            target_keywords: [counterContent.keyword],
          });

        console.log(`[AI-SEO-COMPETITOR] Queued counter content: "${counterContent.title}"`);
      }
    }

    // Store activity log
    await supabase
      .from('autonomous_system_metrics')
      .insert({
        metric_type: 'competitor_activity',
        metric_value: { activity, monitored_at: new Date().toISOString() },
      });

    console.log(`[AI-SEO-COMPETITOR] Detected ${activity.length} competitor activities`);

    return new Response(JSON.stringify({
      success: true,
      competitors_monitored: competitors.length,
      activities_detected: activity.length,
      counter_content_queued: activity.length,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[AI-SEO-COMPETITOR] Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
