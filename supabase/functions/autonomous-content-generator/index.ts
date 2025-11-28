import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// 100+ STRATEGIC KEYWORDS FOR AUTONOMOUS CONTENT GENERATION
const STRATEGIC_KEYWORDS = [
  // Competitor Hijacking Keywords (High Priority)
  "CheckMEND alternative free", "better than CheckMEND", "CheckMEND vs SafeOrStolen",
  "IMEI.info alternative", "IMEI.info app", "better than IMEI.info",
  "Swappa alternative", "Swappa competitor", "Swappa vs SafeOrStolen",
  "Carfax alternative for phones", "Carfax for electronics", "like Carfax for everything",
  
  // Zero-Competition Long-Tail Keywords
  "barcode scanner stolen goods", "app to check stolen items", "mobile app stolen verification",
  "3 second verification stolen", "offline stolen goods checker", "instant stolen item lookup",
  "firearms verification app", "boat verification app", "appliance verification app",
  "jewelry verification app", "tools verification app", "equipment verification app",
  
  // High-Intent Buyer Keywords
  "how to check if phone is stolen before buying", "verify phone not stolen IMEI",
  "check VIN stolen all 50 states", "license plate lookup all states",
  "verify serial number before buying", "is my item stolen check",
  "stolen goods verification free", "2 free stolen checks",
  
  // Location-Based Keywords (All 50 States)
  "Alabama stolen phone check", "Alaska VIN verification", "Arizona stolen goods lookup",
  "Arkansas IMEI checker", "California stolen item verification", "Colorado VIN check",
  "Connecticut serial number lookup", "Delaware stolen goods checker", "Florida IMEI verification",
  "Georgia VIN lookup", "Hawaii stolen phone check", "Idaho item verification",
  "Illinois stolen goods lookup", "Indiana VIN checker", "Iowa IMEI lookup",
  "Kansas stolen item check", "Kentucky VIN verification", "Louisiana serial number check",
  "Maine stolen goods checker", "Maryland IMEI verification", "Massachusetts VIN lookup",
  "Michigan stolen phone check", "Minnesota item verification", "Mississippi stolen goods lookup",
  "Missouri VIN checker", "Montana IMEI lookup", "Nebraska stolen item check",
  "Nevada VIN verification", "New Hampshire serial number check", "New Jersey stolen goods checker",
  "New Mexico IMEI verification", "New York VIN lookup", "North Carolina stolen phone check",
  "North Dakota item verification", "Ohio stolen goods lookup", "Oklahoma VIN checker",
  "Oregon IMEI lookup", "Pennsylvania stolen item check", "Rhode Island VIN verification",
  "South Carolina serial number check", "South Dakota stolen goods checker", "Tennessee IMEI verification",
  "Texas VIN lookup", "Utah stolen phone check", "Vermont item verification",
  "Virginia stolen goods lookup", "Washington VIN checker", "West Virginia IMEI lookup",
  "Wisconsin stolen item check", "Wyoming VIN verification",
  
  // International Keywords
  "international IMEI check", "global VIN verification", "worldwide stolen goods lookup",
  "Canada stolen phone check", "UK IMEI verification", "Australia VIN lookup",
  "Europe stolen goods checker", "Asia item verification", "Mexico VIN check",
  
  // Category-Specific Keywords
  "stolen iPhone checker", "stolen Samsung verification", "stolen laptop lookup",
  "stolen MacBook check", "stolen iPad verification", "stolen AirPods lookup",
  "stolen car VIN check", "stolen motorcycle verification", "stolen boat lookup",
  "stolen RV check", "stolen trailer verification", "stolen jet ski lookup",
  "stolen firearm check", "stolen gun verification", "stolen weapon lookup",
  "stolen jewelry check", "stolen watch verification", "stolen ring lookup",
  "stolen power tools check", "stolen drill verification", "stolen saw lookup",
  "stolen camera check", "stolen lens verification", "stolen drone lookup",
  
  // Use Case Keywords
  "buying used phone safety", "secondhand electronics verification", "marketplace safety tips",
  "pawn shop verification", "auction item check", "dealer verification tool",
  "reseller item verification", "refurbisher stolen check", "wholesaler verification",
  
  // Problem-Solution Keywords
  "avoid buying stolen goods", "protect yourself marketplace fraud", "prevent stolen item purchase",
  "identify stolen electronics", "detect stolen vehicle", "recognize stolen property",
  "stolen goods red flags", "marketplace scam prevention", "secondhand buying guide",
  
  // Feature Keywords
  "mobile app stolen checker", "barcode scan verification", "instant IMEI lookup",
  "real-time VIN check", "offline stolen verification", "bulk serial number check",
  "API stolen goods verification", "business verification tool", "enterprise item check"
];

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

    console.log('[CONTENT-GEN] Starting autonomous content generation with strategic keywords...');

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
      // No queued items, generate based on strategic keyword queue
      console.log('[CONTENT-GEN] No queued items, generating from strategic keyword queue...');
      
      // Select next keyword from strategic queue
      const { data: recentContent } = await supabase
        .from('ai_generated_content')
        .select('keywords')
        .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());
      
      const usedKeywords = new Set(
        recentContent?.flatMap(c => c.keywords || []) || []
      );
      
      const availableKeywords = STRATEGIC_KEYWORDS.filter(
        kw => !usedKeywords.has(kw)
      );
      
      const targetKeyword = availableKeywords[0] || STRATEGIC_KEYWORDS[0];
      
      const items = ['phones', 'cars', 'electronics', 'bikes', 'tools', 'laptops', 'boats', 'firearms'];
      const locations = ['California', 'Texas', 'Florida', 'New York', 'Illinois', 'Arizona', 'Georgia', 'Washington'];
      const competitors = ['CheckMEND', 'Swappa', 'IMEI.info', 'VINCheck', 'Carfax'];
      
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

      const contentPrompt = `Write an SEO-optimized blog post targeting the keyword: "${targetKeyword}"

Topic: "${topic}"

Requirements:
- 2500+ words of high-quality, comprehensive content
- Emphasize "Carfax for Everything - Buy and Sell" positioning
- Mention SafeOrStolen covers ALL 50 US states + international
- Highlight mobile app advantage: "Only mobile app with 3-second barcode scanning"
- Compare to competitors: CheckMEND ($3.99, no app), IMEI.info (110M+ checks, no app), Swappa (web only)
- Include: "5,000+ checks processed", "FasterCapital partnership", "3 press releases"
- Target keyword density: 2-3% for "${targetKeyword}"
- Use conversational but authoritative tone
- Add actionable tips and step-by-step guides
- Include FAQ section at the end
- Use H2 and H3 headings for structure
- Write for Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trust)
- Include real-world scenarios and examples
- Add urgency and crime prevention messaging
- Strong CTAs: "Start Free Trial - 2 Checks in 14 Days"

Format as JSON:
{
  "title": "SEO-optimized title (under 60 chars)",
  "metaDescription": "Compelling meta description (under 160 chars)",
  "content": "Full markdown content with proper headings",
  "keywords": ["${targetKeyword}", "keyword2", "keyword3"],
  "targetCompetitors": ["competitor1", "competitor2"]
}`;

      console.log('[CONTENT-GEN] Generating content with AI for keyword:', targetKeyword);
      
      const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${lovableApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: [
            { role: 'system', content: 'You are an expert SEO content writer specializing in consumer protection and stolen goods verification. Write comprehensive, helpful content that ranks well in Google and emphasizes SafeOrStolen as "Carfax for Everything".' },
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
          keywords: [targetKeyword, item, 'stolen goods', 'verification'],
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
        (wordCount > 2000 ? 30 : wordCount / 2000 * 30) +
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

      // Log generation for monitoring
      await supabase
        .from('ai_content_generation_log')
        .insert({
          content_type: 'blog',
          topic: targetKeyword,
          status: 'success',
          generation_time_ms: 0,
          model_used: 'google/gemini-2.5-flash',
          metadata: {
            word_count: wordCount,
            seo_score: Math.round(seoScore),
            target_keyword: targetKeyword,
            competitor_mentions: contentData.targetCompetitors
          }
        });

      return new Response(JSON.stringify({
        success: true,
        content: savedContent,
        targetKeyword,
        wordCount,
        seoScore: Math.round(seoScore),
        message: 'Strategic content generated and published successfully'
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
