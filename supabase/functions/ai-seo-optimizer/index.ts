import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface SEOOptimization {
  page_url: string;
  title_suggestion: string;
  meta_description: string;
  keywords: string[];
  content_improvements: string[];
  performance_score: number;
  ranking_potential: number;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openaiApiKey) {
      console.error('Missing OpenAI API key');
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { action, data } = await req.json();

    console.log(`AI SEO Optimizer - Action: ${action}`);

    switch (action) {
      case 'analyze_page':
        return await analyzePage(data, openaiApiKey, supabase);
      case 'optimize_content':
        return await optimizeContent(data, openaiApiKey, supabase);
      case 'generate_sitemap':
        return await generateSitemap(supabase);
      case 'audit_performance':
        return await auditPerformance(data, supabase);
      case 'auto_optimize':
        return await autoOptimize(openaiApiKey, supabase);
      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
  } catch (error) {
    console.error('AI SEO Optimizer error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

async function analyzePage(data: any, openaiApiKey: string, supabase: any) {
  const { page_url, content, current_title, current_description } = data;

  console.log(`Analyzing page: ${page_url}`);

  // AI analysis prompt
  const prompt = `
Analyze this webpage content for SEO optimization. Focus on stolen goods verification market.

URL: ${page_url}
Current Title: ${current_title}
Current Description: ${current_description}
Content: ${content.substring(0, 2000)}...

Provide JSON response with:
{
  "title_suggestion": "optimized title under 60 chars",
  "meta_description": "compelling description under 160 chars",
  "keywords": ["keyword1", "keyword2", "keyword3"],
  "content_improvements": ["suggestion1", "suggestion2"],
  "performance_score": 85,
  "ranking_potential": 92
}

Focus on: stolen goods verification, IMEI check, VIN verification, buyer protection, seller legitimacy.
`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    const aiResult = await response.json();
    const analysis = JSON.parse(aiResult.choices[0].message.content);

    // Store analysis in database
    const { error: dbError } = await supabase
      .from('ai_seo_suggestions')
      .insert({
        page_url,
        title_suggestion: analysis.title_suggestion,
        meta_description: analysis.meta_description,
        keywords: analysis.keywords,
        content_improvements: analysis.content_improvements,
        performance_score: analysis.performance_score,
        ranking_potential: analysis.ranking_potential,
        status: 'pending',
        created_at: new Date().toISOString(),
      });

    if (dbError) {
      console.error('Database error:', dbError);
    }

    return new Response(
      JSON.stringify({ success: true, analysis }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('AI analysis error:', error);
    return new Response(
      JSON.stringify({ error: 'AI analysis failed', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

async function optimizeContent(data: any, openaiApiKey: string, supabase: any) {
  const { page_url, content_type, target_keywords } = data;

  console.log(`Optimizing content for: ${page_url}`);

  const prompt = `
Generate SEO-optimized content for SafeOrStolen.com:

Page: ${page_url}
Content Type: ${content_type}
Target Keywords: ${target_keywords.join(', ')}

Generate compelling, SEO-optimized content that:
1. Targets the keywords naturally
2. Provides value to users concerned about stolen goods
3. Includes strong call-to-actions
4. Uses semantic keywords and entities
5. Optimizes for user intent

Return JSON:
{
  "optimized_title": "title",
  "optimized_description": "description", 
  "content_blocks": ["block1", "block2"],
  "internal_links": [{"text": "anchor", "url": "/page"}],
  "schema_markup": {},
  "performance_tips": ["tip1", "tip2"]
}
`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.8,
        max_tokens: 2000,
      }),
    });

    const aiResult = await response.json();
    const optimization = JSON.parse(aiResult.choices[0].message.content);

    // Store optimization
    const { error: dbError } = await supabase
      .from('content_optimizations')
      .insert({
        page_url,
        content_type,
        target_keywords,
        optimized_content: optimization,
        status: 'generated',
        created_at: new Date().toISOString(),
      });

    if (dbError) {
      console.error('Database error:', dbError);
    }

    return new Response(
      JSON.stringify({ success: true, optimization }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Content optimization error:', error);
    return new Response(
      JSON.stringify({ error: 'Content optimization failed', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

async function generateSitemap(supabase: any) {
  console.log('Generating dynamic sitemap');

  // Get all pages from database
  const { data: pages, error } = await supabase
    .from('site_pages')
    .select('*')
    .eq('status', 'published');

  if (error) {
    console.error('Error fetching pages:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch pages' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>https://safeorstolen.com${page.url}</loc>
    <lastmod>${page.updated_at ? page.updated_at.split('T')[0] : currentDate}</lastmod>
    <changefreq>${page.change_frequency || 'monthly'}</changefreq>
    <priority>${page.priority || 0.5}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(
    JSON.stringify({ success: true, sitemap: sitemapXml }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}

async function auditPerformance(data: any, supabase: any) {
  const { page_url, performance_metrics } = data;

  console.log(`Auditing performance for: ${page_url}`);

  // Store performance data
  const { error } = await supabase
    .from('seo_performance')
    .insert({
      page_url,
      performance_metrics,
      audit_date: new Date().toISOString(),
    });

  if (error) {
    console.error('Performance audit error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to store performance data' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  // Analyze performance and generate recommendations
  const recommendations = generatePerformanceRecommendations(performance_metrics);

  return new Response(
    JSON.stringify({ success: true, recommendations }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}

async function autoOptimize(openaiApiKey: string, supabase: any) {
  console.log('Running autonomous SEO optimization');

  try {
    // Get pages that need optimization
    const { data: pages, error } = await supabase
      .from('ai_seo_suggestions')
      .select('*')
      .eq('status', 'pending')
      .limit(5);

    if (error) {
      console.error('Error fetching pending optimizations:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch pending optimizations' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const results = [];

    for (const page of pages) {
      // Auto-apply low-risk optimizations
      if (page.performance_score < 80) {
        // Update page with AI suggestions
        const { error: updateError } = await supabase
          .from('ai_seo_suggestions')
          .update({ status: 'auto_applied', applied_at: new Date().toISOString() })
          .eq('id', page.id);

        if (!updateError) {
          results.push({
            page_url: page.page_url,
            action: 'auto_applied',
            improvements: page.content_improvements
          });
        }
      }
    }

    // Schedule next optimization run
    await scheduleNextOptimization(supabase);

    return new Response(
      JSON.stringify({ success: true, results, optimized_count: results.length }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Auto optimization error:', error);
    return new Response(
      JSON.stringify({ error: 'Auto optimization failed', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

function generatePerformanceRecommendations(metrics: any) {
  const recommendations = [];

  if (metrics.lcp > 2500) {
    recommendations.push('Optimize Largest Contentful Paint: Consider image optimization and lazy loading');
  }

  if (metrics.fid > 100) {
    recommendations.push('Reduce First Input Delay: Minimize JavaScript execution time');
  }

  if (metrics.cls > 0.1) {
    recommendations.push('Improve Cumulative Layout Shift: Set explicit dimensions for images and ads');
  }

  if (metrics.ttfb > 800) {
    recommendations.push('Optimize Time to First Byte: Consider CDN implementation or server optimization');
  }

  return recommendations;
}

async function scheduleNextOptimization(supabase: any) {
  const nextRun = new Date();
  nextRun.setHours(nextRun.getHours() + 6); // Run every 6 hours

  await supabase
    .from('automation_schedule')
    .insert({
      task_type: 'seo_optimization',
      scheduled_for: nextRun.toISOString(),
      status: 'scheduled'
    });
}