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

    console.log('[AI-SEO-CONTENT] Starting content generation...');

    // Get next keyword from queue
    const { data: queueItem, error: queueError } = await supabase
      .from('content_generation_queue')
      .select('*')
      .eq('status', 'pending')
      .order('priority', { ascending: false })
      .limit(1)
      .single();

    if (queueError || !queueItem) {
      console.log('[AI-SEO-CONTENT] No pending items in queue');
      return new Response(JSON.stringify({ message: 'No pending content to generate' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Mark as started
    await supabase
      .from('content_generation_queue')
      .update({ status: 'processing', started_at: new Date().toISOString() })
      .eq('id', queueItem.id);

    // Generate content with AI
    const prompt = `Write a comprehensive 2500-word SEO blog post for SafeOrStolen.com targeting keyword: "${queueItem.topic}".

SafeOrStolen is a SaaS stolen-item verification service with a mobile app that lets users scan barcodes to check if items (IMEI, VIN, serial numbers, license plates, firearms) are stolen in 3 seconds.

Include:
- SEO-optimized title (60 chars, include keyword)
- Meta description (155 chars)
- 5+ H2 headings with keyword variations
- Mention competitors: CheckMEND (no app, $3.99/check), IMEI.info (110M+ checks, no app), LeadsOnline (B2B only)
- Emphasize SafeOrStolen's mobile app advantage (only verification app with barcode scanning)
- Internal links to /verify, /mobile-app, /pricing
- CTA: "Start your free trial - 2 free checks"
- Include SafeOrStolen logo mention
- Real statistics about stolen goods (cite sources)

Format as JSON:
{
  "title": "...",
  "metaDescription": "...",
  "content": "...",
  "excerpt": "...",
  "slug": "..."
}`;

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

    const aiData = await aiResponse.json();
    const content = JSON.parse(aiData.choices[0].message.content);

    // Auto-publish to blog_posts
    const { data: post, error: postError } = await supabase
      .from('blog_posts')
      .insert({
        title: content.title,
        slug: content.slug,
        content: content.content,
        excerpt: content.excerpt,
        meta_description: content.metaDescription,
        meta_title: content.title,
        status: 'published',
        published_at: new Date().toISOString(),
        author_id: '00000000-0000-0000-0000-000000000000', // System author
      })
      .select()
      .single();

    if (postError) throw postError;

    // Mark queue item as completed
    await supabase
      .from('content_generation_queue')
      .update({ 
        status: 'completed', 
        completed_at: new Date().toISOString(),
      })
      .eq('id', queueItem.id);

    // Log generation
    await supabase
      .from('ai_content_generation_log')
      .insert({
        content_type: 'blog_post',
        topic: queueItem.topic,
        status: 'success',
        model_used: 'gemini-2.5-flash',
        metadata: { post_id: post.id, keyword: queueItem.topic },
      });

    console.log('[AI-SEO-CONTENT] Successfully generated and published:', content.title);

    return new Response(JSON.stringify({
      success: true,
      post: {
        id: post.id,
        title: content.title,
        slug: content.slug,
      },
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[AI-SEO-CONTENT] Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
