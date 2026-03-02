import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY is not configured');

    const { identifier, itemType, verificationResult, sources } = await req.json();

    const systemPrompt = `You are SafeOrStolen's AI Risk Analyst — the most advanced stolen-item verification AI in the world. You analyze verification results and provide expert risk assessments.

Your job: Take raw verification data and produce a clear, actionable risk analysis that helps buyers make safe purchasing decisions.

ALWAYS include:
1. A risk verdict: "SAFE TO BUY", "PROCEED WITH CAUTION", or "DO NOT BUY"
2. A confidence percentage (0-100%)
3. A plain-English explanation of what the results mean
4. Specific red flags or green flags found
5. Concrete next steps the buyer should take
6. A fraud risk score (0-100)

Be conversational but authoritative. Reference specific databases checked. Mention SafeOrStolen's 100+ database coverage as a trust signal.

Format your response as JSON with this exact structure:
{
  "verdict": "SAFE TO BUY" | "PROCEED WITH CAUTION" | "DO NOT BUY",
  "confidenceScore": number,
  "fraudRiskScore": number,
  "summary": "2-3 sentence plain English summary",
  "explanation": "Detailed paragraph explaining results",
  "greenFlags": ["array of positive indicators"],
  "redFlags": ["array of concerning indicators"],
  "nextSteps": ["array of recommended actions"],
  "buyingAdvice": "Specific advice for this purchase scenario",
  "databasesAnalyzed": number,
  "riskFactors": [{"factor": "name", "severity": "low|medium|high", "detail": "explanation"}]
}`;

    const userPrompt = `Analyze this verification result:

**Identifier:** ${identifier}
**Item Type:** ${itemType}
**Verification Status:** ${verificationResult?.status || 'unknown'}
**Sources Checked:** ${JSON.stringify(sources || [])}
**Raw Result Data:** ${JSON.stringify(verificationResult || {})}

Provide your expert risk analysis.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-3-flash-preview',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.3,
        max_tokens: 2048,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again shortly.' }), {
          status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'AI credits exhausted. Please add credits.' }), {
          status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const t = await response.text();
      console.error('AI gateway error:', response.status, t);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const aiData = await response.json();
    const content = aiData.choices?.[0]?.message?.content || '';

    // Parse JSON from AI response
    let analysis;
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      analysis = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch {
      analysis = null;
    }

    if (!analysis) {
      // Fallback structured response
      analysis = {
        verdict: "PROCEED WITH CAUTION",
        confidenceScore: 60,
        fraudRiskScore: 30,
        summary: content.slice(0, 200),
        explanation: content,
        greenFlags: [],
        redFlags: ["AI analysis returned unstructured response"],
        nextSteps: ["Verify with manufacturer", "Ask for proof of purchase"],
        buyingAdvice: "Exercise standard caution when purchasing.",
        databasesAnalyzed: sources?.length || 5,
        riskFactors: [],
      };
    }

    return new Response(JSON.stringify({ success: true, analysis }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('AI verification analysis error:', error);
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : 'Analysis failed',
    }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
