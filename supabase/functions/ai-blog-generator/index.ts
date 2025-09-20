import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { topic, keywords, contentType, tone } = await req.json();

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    console.log('Generating blog content for topic:', topic);

    // Generate blog post content
    const contentPrompt = `Create an engaging, SEO-optimized blog post about "${topic}" for SafeOrStolen.com, a platform that helps people verify if secondhand items are stolen before buying.

Target keywords: ${keywords || 'stolen goods verification, secondhand safety, item verification'}
Content type: ${contentType || 'informational'}
Tone: ${tone || 'professional yet approachable'}

Requirements:
1. Write a compelling title (under 60 characters)
2. Create a meta description (under 160 characters)
3. Write an engaging introduction that hooks the reader
4. Structure content with clear H2 and H3 headings
5. Include actionable tips and practical advice
6. Naturally incorporate the target keywords
7. End with a strong call-to-action encouraging verification
8. Make it 1500-2000 words
9. Include relevant statistics or trends when possible
10. Focus on protecting buyers and sellers from fraud

Format the response as JSON with these fields:
- title: SEO-optimized title
- metaDescription: Meta description for SEO
- slug: URL-friendly slug
- excerpt: Brief summary (2-3 sentences)
- content: Full HTML content with proper headings and formatting
- categories: Array of relevant categories
- tags: Array of relevant tags
- readingTime: Estimated reading time in minutes
- featuredImage: Suggested image description for AI generation`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are an expert content creator specializing in cybersecurity, fraud prevention, and consumer protection. You write engaging, SEO-optimized blog posts that educate and protect consumers.'
          },
          {
            role: 'user',
            content: contentPrompt
          }
        ],
        max_tokens: 4000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    let generatedContent;
    
    try {
      generatedContent = JSON.parse(data.choices[0].message.content);
    } catch (parseError) {
      console.error('Error parsing JSON response:', parseError);
      // Fallback: create structured content from the raw response
      const content = data.choices[0].message.content;
      generatedContent = {
        title: topic,
        metaDescription: `Learn about ${topic} and how to protect yourself when buying secondhand items.`,
        slug: topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        excerpt: content.substring(0, 200) + '...',
        content: content,
        categories: ['Safety', 'Prevention'],
        tags: ['theft prevention', 'secondhand safety', 'consumer protection'],
        readingTime: Math.ceil(content.split(' ').length / 200),
        featuredImage: `A professional image representing ${topic} and consumer protection`
      };
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Save to database
    const { data: savedPost, error: saveError } = await supabase
      .from('blog_posts')
      .insert({
        title: generatedContent.title,
        slug: generatedContent.slug,
        excerpt: generatedContent.excerpt,
        content: generatedContent.content,
        meta_description: generatedContent.metaDescription,
        categories: generatedContent.categories,
        tags: generatedContent.tags,
        reading_time: generatedContent.readingTime,
        featured_image_description: generatedContent.featuredImage,
        published_at: null, // Starts as draft
        author_id: null, // Will be set by admin
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (saveError) {
      console.error('Error saving blog post:', saveError);
      throw new Error('Failed to save blog post to database');
    }

    console.log('Blog post generated and saved successfully:', savedPost.id);

    return new Response(JSON.stringify({
      success: true,
      blogPost: savedPost,
      generatedContent
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-blog-generator function:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});