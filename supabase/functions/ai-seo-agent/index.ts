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

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');

  // Create agent run record
  const { data: agentRun, error: runError } = await supabase
    .from('ai_agent_runs')
    .insert({
      agent_name: 'ai-seo-agent',
      status: 'running',
      started_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (runError) {
    console.error('[ai-seo-agent] Failed to create run record:', runError);
  }

  console.log('[ai-seo-agent] Starting SEO analysis...');

  try {
    // Fetch published blog posts for SEO analysis
    const { data: blogPosts, error: blogError } = await supabase
      .from('blog_posts')
      .select('id, title, slug, meta_title, meta_description, meta_keywords, content, excerpt')
      .eq('status', 'published')
      .limit(20);

    if (blogError) throw blogError;

    const recommendations: any[] = [];

    // Analyze each post with AI
    for (const post of blogPosts || []) {
      const issues: string[] = [];

      // Basic SEO checks
      if (!post.meta_title || post.meta_title.length < 30) {
        issues.push('Meta title is missing or too short (< 30 chars)');
      }
      if (post.meta_title && post.meta_title.length > 60) {
        issues.push('Meta title is too long (> 60 chars)');
      }
      if (!post.meta_description || post.meta_description.length < 120) {
        issues.push('Meta description is missing or too short (< 120 chars)');
      }
      if (post.meta_description && post.meta_description.length > 160) {
        issues.push('Meta description is too long (> 160 chars)');
      }
      if (!post.meta_keywords) {
        issues.push('Meta keywords are missing');
      }
      if (!post.excerpt) {
        issues.push('Excerpt is missing');
      }
      if (post.content && post.content.length < 1000) {
        issues.push('Content is thin (< 1000 chars) - aim for 2000+ words');
      }

      if (issues.length > 0) {
        recommendations.push({
          agent_name: 'ai-seo-agent',
          category: 'seo',
          priority: issues.length > 3 ? 'high' : 'medium',
          title: `SEO improvements needed for: ${post.title}`,
          description: issues.join('. '),
          action_data: {
            post_id: post.id,
            post_slug: post.slug,
            issues,
          },
          status: 'pending',
        });
      }
    }

    // AI-powered deeper analysis if we have API key
    if (lovableApiKey && blogPosts && blogPosts.length > 0) {
      try {
        const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${lovableApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'google/gemini-2.5-flash',
            messages: [
              {
                role: 'system',
                content: `You are an SEO expert. Analyze the blog content and provide strategic SEO recommendations. Focus on:
1. Keyword opportunities
2. Content gaps
3. Internal linking opportunities
4. Title/meta optimization
Return JSON: { "strategic_recommendations": [{"title": "", "description": "", "priority": "high|medium|low"}] }`
              },
              {
                role: 'user',
                content: `Analyze these blog posts for SEO opportunities:\n${JSON.stringify(blogPosts.slice(0, 5).map(p => ({ title: p.title, excerpt: p.excerpt, keywords: p.meta_keywords })))}`
              }
            ],
          }),
        });

        if (response.ok) {
          const aiData = await response.json();
          const aiContent = aiData.choices?.[0]?.message?.content || '';
          
          try {
            const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              const parsed = JSON.parse(jsonMatch[0]);
              for (const rec of parsed.strategic_recommendations || []) {
                recommendations.push({
                  agent_name: 'ai-seo-agent',
                  category: 'seo_strategy',
                  priority: rec.priority || 'medium',
                  title: rec.title,
                  description: rec.description,
                  action_data: { ai_generated: true },
                  status: 'pending',
                });
              }
            }
          } catch (parseError) {
            console.log('[ai-seo-agent] Could not parse AI response');
          }
        }
      } catch (aiError) {
        console.error('[ai-seo-agent] AI analysis error:', aiError);
      }
    }

    // Insert recommendations
    if (recommendations.length > 0) {
      const { error: recError } = await supabase
        .from('ai_recommendations')
        .insert(recommendations);

      if (recError) {
        console.error('[ai-seo-agent] Failed to insert recommendations:', recError);
      }
    }

    // Update agent run
    if (agentRun?.id) {
      await supabase
        .from('ai_agent_runs')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString(),
          output_data: {
            posts_analyzed: blogPosts?.length || 0,
            recommendations_created: recommendations.length,
          },
        })
        .eq('id', agentRun.id);
    }

    console.log(`[ai-seo-agent] Complete - ${recommendations.length} recommendations created`);

    return new Response(JSON.stringify({
      success: true,
      posts_analyzed: blogPosts?.length || 0,
      recommendations: recommendations.length,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[ai-seo-agent] Error:', error);

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
