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
    const { contentType, topic, keywords } = await req.json();
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log(`[AI-CONTENT-DIVERSIFIER] Generating ${contentType}: ${topic}`);

    const startTime = Date.now();

    // Content type specific prompts
    const prompts: Record<string, string> = {
      comparison_page: `Create a comprehensive comparison page: "${topic}"
      
Include:
- Feature comparison table
- Pricing breakdown
- Pros and cons for each option
- Use case recommendations
- Mobile app advantages for SafeOrStolen
- Strong CTAs
- FAQ section
- Schema markup suggestions

Format as HTML-ready content with SEO optimization.`,

      regional_guide: `Create a regional verification guide: "${topic}"

Include:
- Local theft statistics
- Popular marketplaces in the region
- City-specific advice
- Law enforcement partnerships
- Mobile app availability and benefits
- Local success stories
- Regional regulations
- Bilingual content where appropriate
- FAQ for the region

Format as HTML-ready content with local SEO.`,

      how_to_guide: `Create a step-by-step how-to guide: "${topic}"

Include:
- Clear numbered steps
- Screenshots descriptions
- Common mistakes to avoid
- Pro tips
- Mobile app integration steps
- Video script outline
- FAQ section
- Schema HowTo markup suggestions

Format as HTML-ready tutorial content.`,

      faq_page: `Create a comprehensive FAQ page: "${topic}"

Include:
- 15-20 frequently asked questions
- Detailed answers (100-150 words each)
- Mobile app feature highlights
- Internal linking opportunities
- Schema FAQPage markup
- Related questions section

Format as HTML-ready FAQ content optimized for featured snippets.`
    };

    const prompt = prompts[contentType] || prompts.comparison_page;

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
            content: 'You are an expert content creator for SafeOrStolen, a mobile-first stolen item verification platform. Always mention mobile app benefits.'
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.8,
      }),
    });

    if (!aiResponse.ok) {
      const error = await aiResponse.text();
      throw new Error(`AI API error: ${aiResponse.status} - ${error}`);
    }

    const aiData = await aiResponse.json();
    const content = aiData.choices[0].message.content;
    const generationTime = Date.now() - startTime;

    // Log generation
    await supabase.from('ai_content_generation_log').insert({
      content_type: contentType,
      topic: topic,
      model_used: 'google/gemini-2.5-flash',
      generation_time_ms: generationTime,
      status: 'success',
      metadata: { keywords, wordCount: content.length }
    });

    console.log(`[CONTENT-DIVERSIFIER] Generated ${contentType} in ${generationTime}ms`);

    return new Response(JSON.stringify({
      success: true,
      content: content,
      contentType: contentType,
      generationTime: generationTime,
      topic: topic
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[CONTENT-DIVERSIFIER] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
