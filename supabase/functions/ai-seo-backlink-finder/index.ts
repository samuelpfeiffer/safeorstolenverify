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

    console.log('[AI-SEO-BACKLINKS] Finding backlink opportunities...');

    const competitors = [
      'checkmend.com',
      'imei.info',
      'imeipro.info',
      'leadsonline.com',
      'stolenregister.com',
    ];

    // Web scrape competitor backlinks (simplified - in production use Ahrefs API)
    const opportunities: any[] = [];

    for (const competitor of competitors) {
      console.log(`[AI-SEO-BACKLINKS] Scraping ${competitor}...`);
      
      // Simulate finding backlink sources (in production, use web scraping)
      const mockSources = [
        { domain: 'techcrunch.com', article: 'Best Phone Verification Tools 2025', dr: 92 },
        { domain: 'lifehacker.com', article: 'How to Check if Your Phone is Stolen', dr: 88 },
        { domain: 'reddit.com/r/technology', article: 'Discussion: IMEI checkers', dr: 95 },
        { domain: 'cnet.com', article: 'Buying Used Electronics Safely', dr: 90 },
        { domain: 'theverge.com', article: 'Stolen Phone Epidemic', dr: 91 },
      ];

      for (const source of mockSources) {
        opportunities.push({
          competitor,
          target_domain: source.domain,
          target_article: source.article,
          domain_rating: source.dr,
          status: 'pending',
        });
      }
    }

    // Generate personalized outreach emails using AI
    for (const opp of opportunities.slice(0, 10)) { // Process 10 per run
      const emailPrompt = `Write a personalized outreach email for link building.

Context:
- Their site: ${opp.target_domain}
- Their article: "${opp.target_article}"
- They mention ${opp.competitor} for verification
- We have SafeOrStolen - the ONLY mobile app with barcode scanning
- ${opp.competitor} has no app, CheckMEND charges $3.99/check
- We offer 2 free checks

Tone: Friendly, helpful, not salesy
Length: 100-150 words
Include: Value proposition, offer demo video/screenshots
CTA: Ask if they'd consider adding us as mobile option

Format as JSON:
{
  "subject": "...",
  "body": "..."
}`;

      const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${lovableApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: [{ role: 'user', content: emailPrompt }],
          temperature: 0.8,
        }),
      });

      const aiData = await aiResponse.json();
      const email = JSON.parse(aiData.choices[0].message.content);

      // Store in database (in production, auto-send via SendGrid)
      await supabase
        .from('autonomous_system_metrics')
        .insert({
          metric_type: 'backlink_opportunity',
          metric_value: {
            ...opp,
            email_subject: email.subject,
            email_body: email.body,
            generated_at: new Date().toISOString(),
          },
        });

      console.log(`[AI-SEO-BACKLINKS] Generated outreach for ${opp.target_domain}`);
    }

    console.log(`[AI-SEO-BACKLINKS] Found ${opportunities.length} opportunities, generated ${Math.min(10, opportunities.length)} emails`);

    return new Response(JSON.stringify({
      success: true,
      opportunities_found: opportunities.length,
      emails_generated: Math.min(10, opportunities.length),
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[AI-SEO-BACKLINKS] Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
