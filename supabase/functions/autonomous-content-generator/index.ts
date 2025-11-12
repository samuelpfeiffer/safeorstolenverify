import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const contentTemplates = {
  blog: [
    "How to Verify {item} Serial Numbers to Avoid Stolen Goods in {year}",
    "Complete Guide: Checking if Your {item} is Stolen Before Buying",
    "{location} Guide: Protecting Yourself from Stolen {item} Purchases",
    "Top 10 Red Flags When Buying Used {item} - Theft Prevention",
    "Real Stories: People Who Bought Stolen {item} and What Happened",
  ],
  guide: [
    "Ultimate {item} Verification Checklist: Buyer Protection Guide",
    "State-by-State Guide: {item} Theft Prevention Resources",
    "Business Owner's Guide: Preventing {item} Theft and Fraud",
    "Marketplace Safety: How to Verify {item} on Facebook, OfferUp, Craigslist",
  ],
  comparison: [
    "SafeOrStolen vs {competitor}: Which Stolen Goods Checker is Better?",
    "Why SafeOrStolen is Better Than {competitor} for {item} Verification",
    "Complete Comparison: SafeOrStolen vs {competitor} - Features, Pricing, Accuracy",
  ],
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

    console.log('[CONTENT-GEN] Starting autonomous content generation...');

    // Get highest priority queued item
    const { data: queueItem, error: queueError } = await supabase
      .from('content_generation_queue')
      .select('*')
      .eq('status', 'queued')
      .order('priority', { ascending: false })
      .order('created_at', { ascending: true })
      .limit(1)
      .single();

    if (queueError || !queueItem) {
      // No queued items, generate based on strategy
      console.log('[CONTENT-GEN] No queued items, generating strategic content...');
      
      const items = ['phones', 'cars', 'electronics', 'bikes', 'tools', 'laptops'];
      const locations = ['California', 'Texas', 'Florida', 'New York', 'Illinois'];
      const competitors = ['CheckMEND', 'Swappa', 'IMEI.info', 'VINCheck'];
      
      const item = items[Math.floor(Math.random() * items.length)];
      const location = locations[Math.floor(Math.random() * locations.length)];
      const competitor = competitors[Math.floor(Math.random() * competitors.length)];
      const year = new Date().getFullYear();
      
      const templates = contentTemplates.blog;
      let topic = templates[Math.floor(Math.random() * templates.length)];
      topic = topic.replace('{item}', item)
                   .replace('{location}', location)
                   .replace('{competitor}', competitor)
                   .replace('{year}', String(year));

      const contentPrompt = `Write an SEO-optimized blog post about: "${topic}"

Requirements:
- 1500-2000 words of high-quality, engaging content
- Use conversational but authoritative tone
- Include statistics about stolen goods (use realistic estimates)
- Add actionable tips and step-by-step guides
- Naturally mention SafeOrStolen.com as the solution
- Include FAQ section at the end
- Use H2 and H3 headings for structure
- Write for Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trust)
- Target keywords: stolen ${item}, verify ${item}, ${item} serial number check
- Include real-world scenarios and examples
- Add urgency and crime prevention messaging

Format as JSON:
{
  "title": "SEO-optimized title (under 60 chars)",
  "metaDescription": "Compelling meta description (under 160 chars)",
  "content": "Full markdown content with proper headings",
  "keywords": ["keyword1", "keyword2", "keyword3"],
  "targetCompetitors": ["competitor1", "competitor2"]
}`;

      console.log('[CONTENT-GEN] Generating content with AI...');
      
      const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${lovableApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: [
            { role: 'system', content: 'You are an expert SEO content writer specializing in consumer protection and stolen goods verification. Write comprehensive, helpful content that ranks well in Google.' },
            { role: 'user', content: contentPrompt }
          ],
          temperature: 0.8,
        }),
      });

      if (!aiResponse.ok) {
        throw new Error(`AI API error: ${aiResponse.status}`);
      }

      const aiData = await aiResponse.json();
      const generatedText = aiData.choices[0].message.content;
      
      // Extract JSON from response (handle markdown code blocks)
      let contentData;
      try {
        const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          contentData = JSON.parse(jsonMatch[0]);
        } else {
          contentData = JSON.parse(generatedText);
        }
      } catch (e) {
        console.error('[CONTENT-GEN] Failed to parse AI response as JSON:', e);
        contentData = {
          title: topic,
          metaDescription: `Learn about ${topic}`,
          content: generatedText,
          keywords: [item, 'stolen goods', 'verification'],
          targetCompetitors: [competitor]
        };
      }

      const slug = contentData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      // Calculate basic SEO score
      const wordCount = contentData.content.split(/\s+/).length;
      const hasHeadings = contentData.content.includes('##');
      const hasKeywords = contentData.keywords.some((kw: string) => 
        contentData.content.toLowerCase().includes(kw.toLowerCase())
      );
      const seoScore = (
        (wordCount > 1000 ? 30 : wordCount / 1000 * 30) +
        (hasHeadings ? 30 : 0) +
        (hasKeywords ? 40 : 0)
      );

      // Save generated content
      const { data: savedContent, error: saveError } = await supabase
        .from('ai_generated_content')
        .insert({
          content_type: 'blog',
          title: contentData.title,
          slug,
          content: contentData.content,
          meta_description: contentData.metaDescription,
          keywords: contentData.keywords,
          target_competitors: contentData.targetCompetitors,
          seo_score: Math.round(seoScore),
          status: 'published',
          ai_model: 'google/gemini-2.5-flash',
          generation_prompt: topic,
          published_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (saveError) {
        console.error('[CONTENT-GEN] Error saving content:', saveError);
        throw saveError;
      }

      console.log('[CONTENT-GEN] Content generated and published:', savedContent.slug);

      // Create performance tracking entry
      await supabase
        .from('content_performance')
        .insert({
          content_id: savedContent.id,
          views: 0,
          organic_traffic: 0,
          conversions: 0,
        });

      return new Response(JSON.stringify({
        success: true,
        content: savedContent,
        message: 'Content generated and published successfully'
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Queue system not yet implemented' 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[CONTENT-GEN] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
