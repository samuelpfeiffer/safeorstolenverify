import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!LOVABLE_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Missing required environment variables');
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Topics for SafeOrStolen blog
    const topics = [
      'How to Verify a Used Phone Before Buying: Complete IMEI Check Guide',
      'Protecting Yourself from Stolen Goods: A Buyer\'s Guide',
      'The Rise of Secondhand Market Fraud: Statistics and Solutions',
      'VIN Verification for Used Cars: What You Need to Know',
      'Serial Number Verification: Protecting Buyers and Sellers',
      'Understanding IMEI Blacklists and What They Mean',
      'How Pawn Shops Can Prevent Buying Stolen Goods',
      'Marketplace Safety: Tips for Buying Used Electronics',
      'Legal Consequences of Buying Stolen Property',
      '5 Red Flags When Buying Used Items Online',
      'How Law Enforcement Tracks Stolen Goods',
      'The Cost of Secondhand Market Fraud in 2025',
      'Best Practices for Selling Used Items Safely',
      'How to Check if a Bike is Stolen Before Purchase',
      'Firearms Verification: What Sellers Need to Know'
    ];

    const randomTopic = topics[Math.floor(Math.random() * topics.length)];

    // Generate blog post with AI
    const startTime = Date.now();
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are a professional content writer for SafeOrStolen, a verification platform that helps buyers and sellers check if items are stolen. Write helpful, informative blog posts about secondhand market safety, verification processes, and fraud prevention. Use a professional but friendly tone. Include practical tips and real-world examples.`
          },
          {
            role: 'user',
            content: `Write a comprehensive blog post about: "${randomTopic}". 

Include:
1. An engaging introduction (2-3 paragraphs)
2. Main content with clear sections and headers
3. Practical tips and actionable advice
4. Real examples or scenarios
5. A compelling conclusion with a call-to-action

Format as markdown with proper headings (##, ###). Aim for 1200-1500 words. Make it SEO-friendly and valuable for readers.`
          }
        ],
        max_tokens: 3000,
      }),
    });

    if (!aiResponse.ok) {
      throw new Error(`AI API error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const generationTime = Date.now() - startTime;
    const content = aiData.choices[0].message.content;

    // Extract first paragraph as excerpt
    const paragraphs = content.split('\n\n');
    const excerpt = paragraphs.find(p => p.length > 50 && !p.startsWith('#'))?.substring(0, 200) + '...';

    // Create slug
    const slug = randomTopic
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Calculate reading time (assuming 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    // Get a system user ID for author (or use first admin user)
    const { data: adminUser } = await supabase
      .from('profiles')
      .select('id')
      .limit(1)
      .single();

    const authorId = adminUser?.id || '00000000-0000-0000-0000-000000000000';

    // Insert blog post
    const { data: post, error: insertError } = await supabase
      .from('blog_posts')
      .insert({
        author_id: authorId,
        title: randomTopic,
        slug: `${slug}-${Date.now()}`,
        content: content,
        excerpt: excerpt,
        status: 'published',
        meta_title: randomTopic,
        meta_description: excerpt,
        meta_keywords: `verification, stolen goods, ${randomTopic.toLowerCase()}`,
        published_at: new Date().toISOString(),
        reading_time: readingTime,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting blog post:', insertError);
      throw insertError;
    }

    // Log generation
    await supabase
      .from('ai_content_generation_log')
      .insert({
        content_type: 'blog_post',
        topic: randomTopic,
        model_used: 'google/gemini-2.5-flash',
        generation_time_ms: generationTime,
        status: 'success',
      });

    console.log(`Generated blog post: ${randomTopic}`);

    return new Response(
      JSON.stringify({
        success: true,
        post_id: post.id,
        title: randomTopic,
        slug: post.slug,
        reading_time: readingTime,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error generating blog post:', error);
    
    // Log failure
    try {
      const supabase = createClient(
        Deno.env.get('SUPABASE_URL')!,
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
      );
      
      await supabase
        .from('ai_content_generation_log')
        .insert({
          content_type: 'blog_post',
          topic: 'automated_daily_generation',
          status: 'failed',
          error_message: error.message,
        });
    } catch (logError) {
      console.error('Error logging failure:', logError);
    }

    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
