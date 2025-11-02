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

    console.log('[AI-AUTO-OPTIMIZER] Starting auto-optimization...');

    // Get posts that need optimization
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('view_count', { ascending: true })
      .limit(10);

    if (error) throw error;

    const optimizations: any[] = [];

    for (const post of posts || []) {
      const needsOptimization = [];

      // Check if meta description is too short or missing
      if (!post.meta_description || post.meta_description.length < 120) {
        needsOptimization.push('meta_description');
      }

      // Check if reading time is too short (indicates thin content)
      if (post.reading_time && post.reading_time < 4) {
        needsOptimization.push('expand_content');
      }

      // Check if title is not optimized
      if (post.title && post.title.length < 40) {
        needsOptimization.push('optimize_title');
      }

      if (needsOptimization.length > 0) {
        // Generate optimized meta description using AI
        if (needsOptimization.includes('meta_description')) {
          const prompt = `Write an SEO-optimized meta description (150-160 characters) for this blog post about SafeOrStolen mobile app:

Title: ${post.title}
Current description: ${post.meta_description || 'None'}
Excerpt: ${post.excerpt || ''}

Include: 
- Primary keyword naturally
- Call-to-action
- Mobile app benefit
- Compelling reason to click

Return ONLY the meta description text.`;

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

          if (aiResponse.ok) {
            const aiData = await aiResponse.json();
            const newMetaDescription = aiData.choices[0].message.content.trim().replace(/^["']|["']$/g, '');

            // Update post with optimized meta description
            await supabase
              .from('blog_posts')
              .update({ 
                meta_description: newMetaDescription,
                updated_at: new Date().toISOString()
              })
              .eq('id', post.id);

            optimizations.push({
              postId: post.id,
              title: post.title,
              optimization: 'meta_description',
              oldValue: post.meta_description,
              newValue: newMetaDescription
            });

            console.log(`[AUTO-OPTIMIZER] Optimized meta description for: ${post.title}`);
          }
        }
      }
    }

    // Log optimizations
    await supabase.from('audit_logs').insert({
      action: 'auto_optimization_run',
      table_name: 'blog_posts',
      new_values: { 
        optimizations,
        count: optimizations.length,
        timestamp: new Date().toISOString()
      }
    });

    console.log(`[AUTO-OPTIMIZER] Completed ${optimizations.length} optimizations`);

    return new Response(JSON.stringify({
      success: true,
      optimizationsApplied: optimizations.length,
      details: optimizations
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[AUTO-OPTIMIZER] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
