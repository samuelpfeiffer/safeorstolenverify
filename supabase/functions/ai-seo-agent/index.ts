import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { requireAdmin } from '../_shared/require-admin.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));


  // Admin-only: block non-admin callers before any privileged work

  const denied = await requireAdmin(req, corsHeaders);

  if (denied) return denied;

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY');

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

  console.log('[ai-seo-agent] Starting comprehensive SEO analysis with Claude...');

  try {
    // Fetch published blog posts for SEO analysis
    const { data: blogPosts, error: blogError } = await supabase
      .from('blog_posts')
      .select('id, title, slug, meta_title, meta_description, meta_keywords, content, excerpt')
      .eq('status', 'published')
      .limit(20);

    if (blogError) throw blogError;

    const recommendations: any[] = [];

    // Analyze each post with basic checks
    for (const post of blogPosts || []) {
      const issues: string[] = [];

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
            issues: issues,
          },
          status: 'pending',
        });
      }
    }

    // AI-powered deeper analysis with Claude
    if (anthropicApiKey && blogPosts && blogPosts.length > 0) {
      try {
        const postsForAnalysis = blogPosts.slice(0, 5).map(p => ({
          title: p.title,
          excerpt: p.excerpt,
          keywords: p.meta_keywords,
          slug: p.slug
        }));

        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'x-api-key': anthropicApiKey,
            'anthropic-version': '2023-06-01',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-5',
            max_tokens: 4000,
            system: `You are SafeOrStolen's SEO strategist. Analyze blog content and provide strategic SEO recommendations. Return JSON only with: strategic_recommendations array, content_gaps array, keyword_opportunities array, quick_wins array.`,
            messages: [
              {
                role: 'user',
                content: 'Analyze these blog posts for SEO opportunities:\n' + JSON.stringify(postsForAnalysis)
              }
            ]
          }),
        });

        if (response.ok) {
          const aiData = await response.json();
          const aiContent = aiData.content?.[0]?.text || '';

          try {
            const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              const parsed = JSON.parse(jsonMatch[0]);

              for (const rec of parsed.strategic_recommendations || []) {
                recommendations.push({
                  agent_name: 'ai-seo-agent',
                  category: rec.category || 'seo_strategy',
                  priority: rec.priority || 'medium',
                  title: rec.title,
                  description: rec.description,
                  action_data: { ai_generated: true },
                  status: 'pending',
                });
              }

              if (parsed.content_gaps && parsed.content_gaps.length > 0) {
                recommendations.push({
                  agent_name: 'ai-seo-agent',
                  category: 'content_strategy',
                  priority: 'high',
                  title: 'Content Gaps Identified',
                  description: 'Topics to cover: ' + parsed.content_gaps.join(', '),
                  action_data: { ai_generated: true, content_gaps: parsed.content_gaps },
                  status: 'pending',
                });
              }

              if (parsed.quick_wins && parsed.quick_wins.length > 0) {
                recommendations.push({
                  agent_name: 'ai-seo-agent',
                  category: 'quick_wins',
                  priority: 'high',
                  title: 'Quick SEO Wins Available',
                  description: parsed.quick_wins.join('. '),
                  action_data: { ai_generated: true, quick_wins: parsed.quick_wins },
                  status: 'pending',
                });
              }
            }
          } catch (parseError) {
            console.log('[ai-seo-agent] Could not parse AI response');
          }
        } else if (response.status === 429) {
          console.log('[ai-seo-agent] Rate limited, skipping AI analysis');
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
            ai_powered: !!anthropicApiKey,
          },
        })
        .eq('id', agentRun.id);
    }

    console.log('[ai-seo-agent] Complete - ' + recommendations.length + ' recommendations created');

    return new Response(JSON.stringify({
      success: true,
      posts_analyzed: blogPosts?.length || 0,
      recommendations: recommendations.length,
      ai_powered: !!anthropicApiKey,
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
