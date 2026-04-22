import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY');

  const { data: agentRun } = await supabase
    .from('ai_agent_runs')
    .insert({
      agent_name: 'ai-content-agent',
      status: 'running',
      started_at: new Date().toISOString(),
    })
    .select()
    .single();

  console.log('[ai-content-agent] Starting content generation...');

  try {
    if (!anthropicApiKey) {
      throw new Error('ANTHROPIC_API_KEY not configured');
    }

    let requestedTopic: string | null = null;
    try {
      const body = await req.json();
      requestedTopic = body?.topic;
    } catch { }

    const topics = [
      'How to verify if a used iPhone is stolen before buying',
      '10 red flags when buying second-hand electronics',
      'Complete guide to checking VIN numbers for stolen vehicles',
      'What is IMEI and why checking it can save you from legal trouble',
      'Buying used laptops safely: A step-by-step verification guide',
      'How thieves sell stolen goods and how to avoid being a victim',
      'The legal consequences of unknowingly buying stolen property',
      'Best practices for selling used items to prove legitimate ownership',
    ];

    const topic = requestedTopic || topics[Math.floor(Math.random() * topics.length)];

    const blogResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': anthropicApiKey,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 4096,
        system: `You are an expert content writer for SafeOrStolen.com, a platform that helps people verify if items are stolen before buying.

Write comprehensive, SEO-optimized blog posts. Return JSON:
{
  "title": "SEO-optimized title (55-60 chars)",
  "meta_description": "Compelling meta description (150-160 chars)",
  "meta_keywords": "comma, separated, keywords",
  "excerpt": "Brief summary (2-3 sentences)",
  "content": "Full HTML content with h2, h3 headings, lists, and paragraphs. 1500+ words. Include practical tips, statistics, and clear CTAs to use SafeOrStolen.com.",
  "seo_score": 85
}`,
        messages: [
          {
            role: 'user',
            content: `Write a comprehensive blog post about: "${topic}"`
          }
        ],
      }),
    });

    if (!blogResponse.ok) {
      if (blogResponse.status === 429) {
        throw new Error('Rate limit exceeded - try again later');
      }
      throw new Error(`AI API error: ${blogResponse.status}`);
    }

    const blogData = await blogResponse.json();
    const blogContent = blogData.content?.[0]?.text || '';

    let parsedBlog: any = null;
    try {
      const jsonMatch = blogContent.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedBlog = JSON.parse(jsonMatch[0]);
      }
    } catch (parseError) {
      console.error('[ai-content-agent] Failed to parse blog JSON');
    }

    const contentItems: any[] = [];

    if (parsedBlog) {
      contentItems.push({
        content_type: 'blog',
        title: parsedBlog.title,
        content: parsedBlog.content,
        metadata: {
          meta_description: parsedBlog.meta_description,
          meta_keywords: parsedBlog.meta_keywords,
          excerpt: parsedBlog.excerpt,
          topic,
        },
        seo_score: parsedBlog.seo_score || 75,
        status: 'review',
        created_by: 'ai-content-agent',
      });
    }

    const socialResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': anthropicApiKey,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 1024,
        system: `Create engaging social media posts for SafeOrStolen.com. Return JSON array:
[
  {"platform": "twitter", "content": "Tweet (280 chars max)", "hashtags": ["tag1", "tag2"]},
  {"platform": "linkedin", "content": "Professional post (300 chars)", "hashtags": []}
]`,
        messages: [
          {
            role: 'user',
            content: `Create 2 social posts about: "${topic}"`
          }
        ],
      }),
    });

    if (socialResponse.ok) {
      const socialData = await socialResponse.json();
      const socialContent = socialData.content?.[0]?.text || '';

      try {
        const jsonMatch = socialContent.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          const socialPosts = JSON.parse(jsonMatch[0]);
          for (const post of socialPosts) {
            contentItems.push({
              content_type: 'social',
              title: `${post.platform} post`,
              content: post.content,
              metadata: {
                platform: post.platform,
                hashtags: post.hashtags,
              },
              seo_score: 70,
              status: 'review',
              created_by: 'ai-content-agent',
            });
          }
        }
      } catch { }
    }

    if (contentItems.length > 0) {
      const { error: contentError } = await supabase
        .from('ai_content_queue')
        .insert(contentItems);

      if (contentError) {
        console.error('[ai-content-agent] Failed to insert content:', contentError);
      }
    }

    if (agentRun?.id) {
      await supabase
        .from('ai_agent_runs')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString(),
          output_data: {
            topic,
            content_items_created: contentItems.length,
          },
          tokens_used: blogData.usage?.input_tokens + blogData.usage?.output_tokens || 0,
        })
        .eq('id', agentRun.id);
    }

    console.log(`[ai-content-agent] Complete - ${contentItems.length} content items created`);

    return new Response(JSON.stringify({
      success: true,
      topic,
      content_items: contentItems.length,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[ai-content-agent] Error:', error);

    if (agentRun?.id) {
      await supabase
        .from('ai_agent_runs')
        .update({
          status: 'failed',
          completed_at: new Date().toISOString(),
          error_message: error instanceof Error ? error.message : 'Unknown error',
        })
        .eq('id', agentRun.id);
    }

    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
