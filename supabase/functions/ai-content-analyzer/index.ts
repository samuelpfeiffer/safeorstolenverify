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

    console.log('[AI-CONTENT-ANALYZER] Starting performance analysis...');

    // Get all published content
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const analysis = {
      totalPosts: posts?.length || 0,
      highPerformers: [] as any[],
      underperformers: [] as any[],
      optimizationOpportunities: [] as any[],
      averageViewCount: 0,
      averageReadingTime: 0
    };

    if (posts && posts.length > 0) {
      // Calculate averages
      const totalViews = posts.reduce((sum, post) => sum + (post.view_count || 0), 0);
      const totalReadTime = posts.reduce((sum, post) => sum + (post.reading_time || 0), 0);
      
      analysis.averageViewCount = Math.round(totalViews / posts.length);
      analysis.averageReadingTime = Math.round(totalReadTime / posts.length);

      // Identify high performers (top 20%)
      const sortedByViews = [...posts].sort((a, b) => (b.view_count || 0) - (a.view_count || 0));
      const topCount = Math.ceil(posts.length * 0.2);
      analysis.highPerformers = sortedByViews.slice(0, topCount).map(p => ({
        id: p.id,
        title: p.title,
        views: p.view_count,
        readingTime: p.reading_time
      }));

      // Identify underperformers (bottom 20%)
      analysis.underperformers = sortedByViews.slice(-topCount).map(p => ({
        id: p.id,
        title: p.title,
        views: p.view_count,
        issue: p.view_count < 50 ? 'very_low_traffic' : 'low_traffic',
        recommendation: p.view_count < 50 
          ? 'Rewrite title and meta description' 
          : 'Add more internal links and update content'
      }));

      // Find optimization opportunities
      for (const post of posts) {
        if (post.reading_time && post.reading_time < 3) {
          analysis.optimizationOpportunities.push({
            postId: post.id,
            title: post.title,
            issue: 'content_too_short',
            recommendation: 'Expand content to 1500+ words with more examples and mobile app benefits'
          });
        }

        if (!post.meta_description || post.meta_description.length < 120) {
          analysis.optimizationOpportunities.push({
            postId: post.id,
            title: post.title,
            issue: 'poor_meta_description',
            recommendation: 'Improve meta description to 150-160 characters with target keywords'
          });
        }

        if (post.view_count > 1000 && post.view_count < 5000) {
          analysis.optimizationOpportunities.push({
            postId: post.id,
            title: post.title,
            issue: 'untapped_potential',
            recommendation: 'High traffic opportunity - add FAQ section and video content'
          });
        }
      }
    }

    // Store analysis results
    await supabase.from('business_metrics').insert({
      metric_type: 'content_analysis',
      metric_value: analysis.totalPosts,
      metric_data: analysis
    });

    console.log('[CONTENT-ANALYZER] Analysis complete:', {
      total: analysis.totalPosts,
      opportunities: analysis.optimizationOpportunities.length
    });

    return new Response(JSON.stringify({
      success: true,
      analysis: analysis,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[CONTENT-ANALYZER] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
