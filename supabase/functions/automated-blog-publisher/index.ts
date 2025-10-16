import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

// Predefined topic pools for automated generation
const TOPIC_POOLS = {
  seasonal: [
    "Holiday Shopping Safety: How to Avoid Stolen Gifts",
    "Back-to-School Electronics: Verify Before You Buy",
    "Summer Marketplace Safety Tips",
    "Black Friday Fraud Prevention Guide"
  ],
  trending: [
    "AI-Powered Theft Detection: The Future of Marketplace Safety",
    "Cryptocurrency and Digital Asset Verification",
    "Smart Home Device Security Verification",
    "Electric Vehicle Verification: What Buyers Need to Know"
  ],
  educational: [
    "IMEI vs Serial Numbers: What's the Difference?",
    "Understanding VIN Check Reports",
    "The Psychology of Fraud: How Scammers Operate",
    "Insurance Fraud and Stolen Goods: What You Need to Know"
  ],
  guides: [
    "Complete Guide to Buying Used Laptops Safely",
    "Motorcycle Verification: A Buyer's Checklist",
    "Art and Collectibles: Avoiding Stolen Items",
    "Power Tools Safety Check: Professional Buyer's Guide"
  ],
  industry: [
    "Pawn Shop Best Practices: Industry Standards",
    "E-commerce Platform Security Updates",
    "Law Enforcement Partnerships in Theft Prevention",
    "Insurance Industry Trends in Fraud Detection"
  ]
};

const CONTENT_TYPES = ['informational', 'howto', 'listicle', 'news', 'case-study'];
const TONES = ['professional', 'friendly', 'educational', 'conversational'];

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    console.log('Starting automated blog generation process');

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check recent posts to avoid duplicates
    const { data: recentPosts } = await supabase
      .from('blog_posts')
      .select('title, created_at')
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())
      .order('created_at', { ascending: false });

    console.log(`Found ${recentPosts?.length || 0} recent posts`);

    // Select topic intelligently
    const selectedTopic = await selectOptimalTopic(recentPosts || []);
    const selectedContentType = CONTENT_TYPES[Math.floor(Math.random() * CONTENT_TYPES.length)];
    const selectedTone = TONES[Math.floor(Math.random() * TONES.length)];

    // Generate seasonal or trending keywords
    const currentMonth = new Date().getMonth();
    const seasonalKeywords = generateSeasonalKeywords(currentMonth);

    console.log('Generating blog post:', {
      topic: selectedTopic,
      contentType: selectedContentType,
      tone: selectedTone,
      keywords: seasonalKeywords
    });

    // Enhanced content prompt for autonomous generation
    const contentPrompt = `Create an engaging, SEO-optimized blog post about "${selectedTopic}" for SafeOrStolen.com, a platform that helps people verify if secondhand items are stolen before buying.

Target keywords: ${seasonalKeywords}
Content type: ${selectedContentType}
Tone: ${selectedTone}
Current date context: ${new Date().toLocaleDateString()}

Requirements:
1. Write a compelling title (under 60 characters) that includes primary keywords
2. Create a meta description (under 160 characters) with strong CTR appeal
3. Write an engaging introduction that hooks the reader immediately
4. Structure content with clear H2 and H3 headings for readability
5. Include 8-12 actionable tips and practical advice
6. Naturally incorporate target keywords (2-3% density)
7. Add relevant statistics, data points, or recent trends when possible
8. Include real-world examples and scenarios
9. End with a strong call-to-action encouraging verification
10. Make it 1800-2500 words for comprehensive coverage
11. Focus on protecting buyers and sellers from fraud
12. Include recent developments in theft prevention technology

CRITICAL: Make the content highly engaging, authoritative, and immediately useful to readers. Include specific numbers, percentages, and actionable steps.

Format the response as JSON with these fields:
- title: SEO-optimized title
- metaDescription: Meta description for SEO
- slug: URL-friendly slug
- excerpt: Compelling summary (2-3 sentences)
- content: Full HTML content with proper headings and formatting
- categories: Array of relevant categories
- tags: Array of relevant tags
- readingTime: Estimated reading time in minutes
- featuredImage: Detailed image description for AI generation
- publishImmediately: boolean (set to true for autonomous publishing)`;

    // Generate content with AI
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
            content: 'You are an expert content creator specializing in cybersecurity, fraud prevention, and consumer protection. You create engaging, SEO-optimized blog posts that educate and protect consumers. Always format your response as valid JSON.'
          },
          {
            role: 'user',
            content: contentPrompt
          }
        ],
        max_tokens: 4000,
        temperature: 0.8, // Higher creativity for autonomous generation
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
      const content = data.choices[0].message.content;
      generatedContent = {
        title: selectedTopic,
        metaDescription: `Learn about ${selectedTopic} and protect yourself when buying secondhand items. Expert tips and insights.`,
        slug: selectedTopic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        excerpt: content.substring(0, 200) + '...',
        content: content,
        categories: ['Safety', 'Prevention'],
        tags: ['theft prevention', 'secondhand safety', 'consumer protection'],
        readingTime: Math.ceil(content.split(' ').length / 200),
        featuredImage: `Professional image representing ${selectedTopic} and consumer protection`,
        publishImmediately: true
      };
    }

    // Create unique slug to avoid conflicts
    const timestamp = Date.now();
    const uniqueSlug = `${generatedContent.slug}-${timestamp}`;

    // Determine if we should publish immediately (autonomous mode)
    const shouldPublish = generatedContent.publishImmediately || 
                         Math.random() > 0.3; // 70% chance to auto-publish

    // Save to database
    const { data: savedPost, error: saveError } = await supabase
      .from('blog_posts')
      .insert({
        title: generatedContent.title,
        slug: uniqueSlug,
        excerpt: generatedContent.excerpt,
        content: generatedContent.content,
        meta_description: generatedContent.metaDescription,
        meta_title: generatedContent.title,
        meta_keywords: generatedContent.tags.join(', '),
        reading_time: generatedContent.readingTime,
        status: shouldPublish ? 'published' : 'draft',
        published_at: shouldPublish ? new Date().toISOString() : null,
        author_id: null, // System generated
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (saveError) {
      console.error('Error saving blog post:', saveError);
      throw new Error('Failed to save blog post to database');
    }

    // Log successful generation
    await supabase
      .from('audit_logs')
      .insert({
        user_id: null,
        action: 'AUTOMATED_BLOG_GENERATION',
        table_name: 'blog_posts',
        record_id: savedPost.id,
        new_values: {
          title: generatedContent.title,
          status: shouldPublish ? 'published' : 'draft',
          automated: true,
          topic_category: getTopicCategory(selectedTopic),
          generation_time: new Date().toISOString()
        }
      });

    console.log(`Blog post ${shouldPublish ? 'published' : 'drafted'} successfully:`, savedPost.id);

    return new Response(JSON.stringify({
      success: true,
      blogPost: savedPost,
      published: shouldPublish,
      topic: selectedTopic,
      analytics: {
        contentType: selectedContentType,
        tone: selectedTone,
        wordCount: generatedContent.content.split(' ').length,
        readingTime: generatedContent.readingTime
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in automated blog generation:', error);
    
    // Log failure for monitoring
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    await supabase
      .from('audit_logs')
      .insert({
        user_id: null,
        action: 'AUTOMATED_BLOG_GENERATION_FAILED',
        table_name: 'blog_posts',
        new_values: {
          error: error.message,
          timestamp: new Date().toISOString()
        }
      });

    return createErrorResponse(error, {
      functionName: 'automated-blog-publisher',
      operation: 'generate'
    }, getCorsHeaders(req.headers.get('origin')));
  }
});

// Helper functions
function selectOptimalTopic(recentPosts: any[]): string {
  const recentTitles = recentPosts.map(post => post.title.toLowerCase());
  const allTopics = [
    ...TOPIC_POOLS.seasonal,
    ...TOPIC_POOLS.trending,
    ...TOPIC_POOLS.educational,
    ...TOPIC_POOLS.guides,
    ...TOPIC_POOLS.industry
  ];

  // Filter out recently used topics
  const availableTopics = allTopics.filter(topic => 
    !recentTitles.some(title => 
      title.includes(topic.toLowerCase().split(':')[0].substring(0, 20))
    )
  );

  if (availableTopics.length === 0) {
    // Generate a new topic if all are exhausted
    const categories = ['Electronics', 'Vehicles', 'Tools', 'Jewelry', 'Sports Equipment'];
    const category = categories[Math.floor(Math.random() * categories.length)];
    return `${category} Verification: Essential Tips for Safe Purchases`;
  }

  return availableTopics[Math.floor(Math.random() * availableTopics.length)];
}

function generateSeasonalKeywords(month: number): string {
  const seasonalKeywords = {
    0: 'new year shopping safety, resolution electronics, january deals verification',
    1: 'valentine gifts verification, february marketplace safety, love scam prevention',
    2: 'spring cleaning electronics, march marketplace tips, seasonal buying guide',
    3: 'easter shopping safety, april electronics deals, spring verification tips',
    4: 'mother day gifts verification, may shopping safety, graduation electronics',
    5: 'summer electronics safety, june marketplace guide, vacation device verification',
    6: 'summer shopping tips, july electronics deals, vacation safety verification',
    7: 'back to school verification, august electronics safety, student device tips',
    8: 'september marketplace safety, fall electronics deals, school device verification',
    9: 'october shopping safety, halloween electronics, fall marketplace tips',
    10: 'black friday verification, november deal safety, holiday shopping protection',
    11: 'holiday gift verification, december shopping safety, christmas electronics protection'
  };

  const baseKeywords = 'stolen goods verification, secondhand safety, marketplace protection, item verification';
  return `${baseKeywords}, ${seasonalKeywords[month]}`;
}

function getTopicCategory(topic: string): string {
  if (TOPIC_POOLS.seasonal.includes(topic)) return 'seasonal';
  if (TOPIC_POOLS.trending.includes(topic)) return 'trending';
  if (TOPIC_POOLS.educational.includes(topic)) return 'educational';
  if (TOPIC_POOLS.guides.includes(topic)) return 'guides';
  if (TOPIC_POOLS.industry.includes(topic)) return 'industry';
  return 'general';
}