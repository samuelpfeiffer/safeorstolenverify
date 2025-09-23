import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContentPlan {
  title: string;
  slug: string;
  content: string;
  meta_description: string;
  keywords: string[];
  content_type: 'blog' | 'landing' | 'guide';
  priority: number;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openaiApiKey) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { action, data = {} } = await req.json();

    console.log(`Autonomous Content Manager - Action: ${action}`);

    switch (action) {
      case 'generate_content_plan':
        return await generateContentPlan(openaiApiKey, supabase);
      case 'create_blog_post':
        return await createBlogPost(data, openaiApiKey, supabase);
      case 'update_existing_content':
        return await updateExistingContent(data, openaiApiKey, supabase);
      case 'analyze_competitors':
        return await analyzeCompetitors(openaiApiKey, supabase);
      case 'optimize_internal_linking':
        return await optimizeInternalLinking(openaiApiKey, supabase);
      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
  } catch (error) {
    console.error('Autonomous Content Manager error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

async function generateContentPlan(openaiApiKey: string, supabase: any) {
  console.log('Generating autonomous content plan');

  // Analyze current content gaps
  const { data: existingContent } = await supabase
    .from('blog_posts')
    .select('title, slug, keywords');

  const existingTopics = existingContent?.map(post => post.title.toLowerCase()) || [];

  const prompt = `
As an expert SEO content strategist for SafeOrStolen.com (stolen goods verification platform), create a strategic content plan.

Current content: ${existingTopics.join(', ')}

Generate 10 high-priority content pieces targeting these user intents:
1. People worried about buying stolen goods
2. Sellers wanting to prove legitimacy
3. Marketplace safety concerns
4. IMEI/VIN/Serial verification guides
5. Consumer protection topics

For each piece, provide:
{
  "title": "compelling title with primary keyword",
  "slug": "url-friendly-slug",
  "content_type": "blog|landing|guide",
  "primary_keyword": "main target keyword",
  "secondary_keywords": ["keyword1", "keyword2"],
  "search_volume": estimated_monthly_searches,
  "difficulty": 1-10,
  "user_intent": "informational|commercial|transactional",
  "content_outline": ["section1", "section2", "section3"],
  "meta_description": "compelling 155-char description",
  "priority": 1-10
}

Focus on long-tail keywords with commercial intent around stolen goods verification.
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
        max_tokens: 3000,
      }),
    });

    const aiResult = await response.json();
    const contentPlan = JSON.parse(aiResult.choices[0].message.content);

    // Store content plan
    const { error } = await supabase
      .from('content_plans')
      .insert({
        plan_data: contentPlan,
        created_at: new Date().toISOString(),
        status: 'generated'
      });

    if (error) {
      console.error('Error storing content plan:', error);
    }

    return new Response(
      JSON.stringify({ success: true, content_plan: contentPlan }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Content plan generation error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate content plan' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

async function createBlogPost(data: any, openaiApiKey: string, supabase: any) {
  const { title, target_keywords, content_type, user_intent } = data;

  console.log(`Creating blog post: ${title}`);

  const prompt = `
Write a comprehensive, SEO-optimized blog post for SafeOrStolen.com:

Title: ${title}
Target Keywords: ${target_keywords.join(', ')}
Content Type: ${content_type}
User Intent: ${user_intent}

Requirements:
- 2000-3000 words of engaging, valuable content
- Natural keyword integration (avoid stuffing)
- Include statistics and real-world examples
- Strong introduction with hook
- Clear section headers (H2, H3)
- Actionable tips and advice
- Strong conclusion with CTA
- Include internal link opportunities
- Optimize for featured snippets

Focus on helping users:
1. Understand risks of buying stolen goods
2. Learn verification methods
3. Protect themselves from fraud
4. Make safe secondhand purchases

Return JSON:
{
  "title": "optimized title",
  "slug": "url-slug",
  "meta_description": "155-char description",
  "content": "full HTML content with headings",
  "excerpt": "compelling excerpt",
  "keywords": ["primary", "secondary"],
  "internal_links": [{"anchor": "text", "url": "/page"}],
  "schema_markup": "structured data",
  "reading_time": 12
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
        temperature: 0.7,
        max_tokens: 4000,
      }),
    });

    const aiResult = await response.json();
    const blogPost = JSON.parse(aiResult.choices[0].message.content);

    // Store blog post
    const { error } = await supabase
      .from('blog_posts')
      .insert({
        title: blogPost.title,
        slug: blogPost.slug,
        content: blogPost.content,
        excerpt: blogPost.excerpt,
        meta_description: blogPost.meta_description,
        keywords: blogPost.keywords,
        status: 'draft',
        created_at: new Date().toISOString(),
        ai_generated: true
      });

    if (error) {
      console.error('Error storing blog post:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to store blog post' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, blog_post: blogPost }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Blog post creation error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create blog post' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

async function updateExistingContent(data: any, openaiApiKey: string, supabase: any) {
  const { post_id, update_type } = data;

  console.log(`Updating content: ${post_id}, type: ${update_type}`);

  // Get existing post
  const { data: post, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', post_id)
    .single();

  if (error) {
    return new Response(
      JSON.stringify({ error: 'Post not found' }),
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  const prompt = `
Update this existing blog post for better SEO performance:

Current Title: ${post.title}
Current Content: ${post.content.substring(0, 1000)}...
Update Type: ${update_type}

Improvements needed:
1. Refresh content with latest information
2. Improve keyword optimization
3. Add more value and actionable advice
4. Update internal linking opportunities
5. Optimize for current search trends

Return JSON with updated content:
{
  "updated_title": "improved title",
  "updated_content": "refreshed HTML content",
  "updated_meta_description": "new description",
  "new_keywords": ["updated", "keywords"],
  "improvements_made": ["improvement1", "improvement2"],
  "internal_links_added": [{"anchor": "text", "url": "/page"}]
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
        temperature: 0.7,
        max_tokens: 3000,
      }),
    });

    const aiResult = await response.json();
    const updates = JSON.parse(aiResult.choices[0].message.content);

    // Apply updates
    const { error: updateError } = await supabase
      .from('blog_posts')
      .update({
        title: updates.updated_title,
        content: updates.updated_content,
        meta_description: updates.updated_meta_description,
        keywords: updates.new_keywords,
        updated_at: new Date().toISOString(),
        ai_updated: true
      })
      .eq('id', post_id);

    if (updateError) {
      console.error('Error updating post:', updateError);
      return new Response(
        JSON.stringify({ error: 'Failed to update post' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, updates }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Content update error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to update content' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

async function analyzeCompetitors(openaiApiKey: string, supabase: any) {
  console.log('Analyzing competitor content strategies');

  const competitors = [
    'checkmend.com',
    'swappa.com',
    'imeipro.info',
    'phonecheck.com',
    'carfax.com'
  ];

  const prompt = `
Analyze competitor content strategies for stolen goods verification market:

Competitors: ${competitors.join(', ')}

Research and identify:
1. Content gaps we can exploit
2. High-performing content topics
3. Keyword opportunities they're missing
4. Content formats that work well
5. User pain points not being addressed

Return strategic insights:
{
  "content_gaps": ["gap1", "gap2"],
  "keyword_opportunities": ["keyword1", "keyword2"],
  "successful_content_types": ["type1", "type2"],
  "user_pain_points": ["pain1", "pain2"],
  "competitive_advantages": ["advantage1", "advantage2"],
  "recommended_actions": ["action1", "action2"]
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
    const analysis = JSON.parse(aiResult.choices[0].message.content);

    // Store competitive analysis
    const { error } = await supabase
      .from('competitive_analysis')
      .insert({
        analysis_data: analysis,
        created_at: new Date().toISOString(),
        competitors: competitors
      });

    if (error) {
      console.error('Error storing analysis:', error);
    }

    return new Response(
      JSON.stringify({ success: true, analysis }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Competitor analysis error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to analyze competitors' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

async function optimizeInternalLinking(openaiApiKey: string, supabase: any) {
  console.log('Optimizing internal linking structure');

  // Get all published content
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('id, title, slug, content, keywords')
    .eq('status', 'published');

  const prompt = `
Optimize internal linking structure for SafeOrStolen.com content:

Posts data: ${JSON.stringify(posts?.slice(0, 20))}

Analyze and create internal linking opportunities:
1. Topic clusters and pillar content
2. Natural anchor text opportunities
3. Link equity distribution
4. User journey optimization
5. SEO value maximization

Return linking strategy:
{
  "link_opportunities": [
    {
      "from_post_id": 1,
      "to_post_id": 2,
      "anchor_text": "suggested anchor",
      "context": "where to place link",
      "seo_value": 1-10
    }
  ],
  "content_clusters": [
    {
      "cluster_topic": "IMEI verification",
      "pillar_page": "main guide url",
      "supporting_pages": ["url1", "url2"]
    }
  ],
  "optimization_recommendations": ["rec1", "rec2"]
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
        temperature: 0.7,
        max_tokens: 2500,
      }),
    });

    const aiResult = await response.json();
    const linkingStrategy = JSON.parse(aiResult.choices[0].message.content);

    // Store linking strategy
    const { error } = await supabase
      .from('internal_linking_strategy')
      .insert({
        strategy_data: linkingStrategy,
        created_at: new Date().toISOString(),
        status: 'generated'
      });

    if (error) {
      console.error('Error storing linking strategy:', error);
    }

    return new Response(
      JSON.stringify({ success: true, linking_strategy: linkingStrategy }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Internal linking optimization error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to optimize internal linking' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}