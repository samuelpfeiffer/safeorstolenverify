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
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    if (!lovableApiKey) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Get all published blog posts that need enrichment
    const { data: posts, error: fetchError } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false })
      .limit(5);

    if (fetchError) throw fetchError;

    console.log(`Found ${posts?.length || 0} posts to potentially enrich`);

    const enrichedPosts = [];

    for (const post of posts || []) {
      // Skip if content is already substantial (>3000 characters)
      if (post.content && post.content.length > 3000) {
        console.log(`Skipping post ${post.id} - already has rich content`);
        continue;
      }

      console.log(`Enriching post: ${post.title}`);

      const enrichmentPrompt = `You are an expert content writer for SafeOrStolen.com, a platform helping people verify if secondhand items are stolen.

Current blog post:
Title: ${post.title}
Excerpt: ${post.excerpt || 'N/A'}
Current Content: ${post.content || 'No content yet'}

Your task: Create comprehensive, SEO-optimized content (2000-3000 words) that:

1. STARTS WITH A STRONG HOOK: Begin with a compelling statistic or real-world scenario about stolen goods
2. COMPREHENSIVE COVERAGE:
   - Detailed explanation of the topic
   - Step-by-step guides with numbered instructions
   - Real-world examples and case studies
   - Industry statistics and trends
   - Expert tips and best practices
   - Common mistakes to avoid
   - FAQ section addressing key concerns

3. SEO OPTIMIZATION:
   - Natural keyword integration (IMEI, VIN, serial number, stolen goods, verification)
   - Clear H2 and H3 headings
   - Short paragraphs (2-3 sentences max)
   - Bulleted lists for easy scanning
   - Internal linking suggestions

4. ACTIONABLE VALUE:
   - Specific steps readers can take immediately
   - Tools and resources they can use
   - Clear call-to-action to verify items with SafeOrStolen

5. EMOTIONAL CONNECTION:
   - Address reader's fears and concerns
   - Provide reassurance and empowerment
   - Use conversational, friendly tone

Format as HTML with proper tags:
- Use <h2> for main sections
- Use <h3> for subsections
- Use <p> for paragraphs
- Use <ul> and <li> for lists
- Use <strong> for emphasis
- Use <blockquote> for important callouts

Make it POWERFUL and COMPREHENSIVE. This content should establish SafeOrStolen as THE authority on secondhand item verification.`;

      try {
        const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
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
                content: 'You are an expert SEO content writer specializing in consumer protection, fraud prevention, and secondhand marketplace safety. You create comprehensive, engaging content that ranks well and genuinely helps readers.'
              },
              {
                role: 'user',
                content: enrichmentPrompt
              }
            ],
            stream: false,
          }),
        });

        if (aiResponse.status === 429) {
          console.warn('Rate limit hit, skipping remaining posts');
          break;
        }

        if (!aiResponse.ok) {
          console.error('AI API error:', await aiResponse.text());
          continue;
        }

        const aiData = await aiResponse.json();
        const enrichedContent = aiData.choices[0].message.content;

        // Calculate reading time
        const wordCount = enrichedContent.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // Average reading speed

        // Update the blog post
        const { error: updateError } = await supabase
          .from('blog_posts')
          .update({
            content: enrichedContent,
            reading_time: readingTime,
            updated_at: new Date().toISOString(),
          })
          .eq('id', post.id);

        if (updateError) {
          console.error(`Error updating post ${post.id}:`, updateError);
          continue;
        }

        enrichedPosts.push({
          id: post.id,
          title: post.title,
          wordCount,
          readingTime
        });

        console.log(`Successfully enriched post: ${post.title}`);

        // Add delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 2000));

      } catch (error) {
        console.error(`Error enriching post ${post.id}:`, error);
        continue;
      }
    }

    // Log the enrichment activity
    await supabase
      .from('audit_logs')
      .insert({
        action: 'BLOG_CONTENT_ENRICHMENT',
        table_name: 'blog_posts',
        new_values: {
          enriched_count: enrichedPosts.length,
          posts: enrichedPosts,
          timestamp: new Date().toISOString()
        }
      });

    return new Response(JSON.stringify({
      success: true,
      enrichedCount: enrichedPosts.length,
      posts: enrichedPosts,
      message: `Successfully enriched ${enrichedPosts.length} blog posts`
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in blog enrichment:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});