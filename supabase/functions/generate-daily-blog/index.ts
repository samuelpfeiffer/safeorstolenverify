import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// 700+ Topic Library - Organized by category
const blogTopics = {
  itemSpecific: [
    "iPhone 16 Pro Max IMEI Check: Complete 2025 Buyer Protection Guide",
    "Samsung Galaxy S24 Ultra Stolen Check: Complete IMEI Guide",
    "Tesla Model 3 VIN Verification: Avoid Stolen Electric Vehicles",
    "MacBook Pro M3 Serial Number Check: Avoid Stolen Laptops",
    "PlayStation 5 Serial Number Verification Guide",
  ],
  citySpecific: [
    "Stolen Item Checker in New York City: Complete 2025 Guide",
    "Los Angeles IMEI Verification: Phone Fraud Protection",
    "Chicago VIN Check: How to Verify Used Cars in Illinois",
  ],
  marketplaceSpecific: [
    "Facebook Marketplace Safety 2025: Complete Stolen Item Guide",
    "Craigslist Scam Prevention: Item Verification Checklist",
    "eBay Motors Fraud Detection: VIN Verification Best Practices",
  ],
  mobileApp: [
    "SafeOrStolen Mobile App: Complete Guide to On-the-Go Verification",
    "Scan and Verify: Using SafeOrStolen Camera Feature",
    "SafeOrStolen Offline Mode: Verify Without Internet",
  ]
};

const allTopics = [
  ...blogTopics.itemSpecific,
  ...blogTopics.citySpecific,
  ...blogTopics.marketplaceSpecific,
  ...blogTopics.mobileApp
];

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
    const randomTopic = allTopics[Math.floor(Math.random() * allTopics.length)];

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
            content: `You are an expert content writer for SafeOrStolen, a leading stolen item verification service with a powerful mobile app for iOS and Android.`
          },
          {
            role: 'user',
            content: `Write a comprehensive, SEO-optimized blog post about: "${randomTopic}"

CRITICAL: Prominently feature the SafeOrStolen mobile app throughout the content.

Requirements:
- Length: 1800-2200 words
- Include real statistics and data points
- Mention mobile app benefits in at least 5 places
- Add FAQ section (5-7 Q&A) for featured snippets
- Include strong calls-to-action (website + mobile app)
- Format as clean HTML with proper heading tags`
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

    const paragraphs = content.split('\n\n');
    const excerpt = paragraphs.find(p => p.length > 50 && !p.startsWith('#'))?.substring(0, 200) + '...';

    const slug = randomTopic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    const { data: adminUser } = await supabase.from('profiles').select('id').limit(1).single();
    const authorId = adminUser?.id || '00000000-0000-0000-0000-000000000000';

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
        meta_keywords: `verification, stolen goods, mobile app, ${randomTopic.toLowerCase()}`,
        published_at: new Date().toISOString(),
        reading_time: readingTime,
      })
      .select()
      .single();

    if (insertError) throw insertError;

    await supabase.from('ai_content_generation_log').insert({
      content_type: 'blog_post',
      topic: randomTopic,
      model_used: 'google/gemini-2.5-flash',
      generation_time_ms: generationTime,
      status: 'success',
    });

    console.log(`Generated blog post: ${randomTopic}`);

    return new Response(JSON.stringify({
      success: true,
      post_id: post.id,
      title: randomTopic,
      slug: post.slug,
      reading_time: readingTime,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generating blog post:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
