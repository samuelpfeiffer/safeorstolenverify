import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { requireAdmin, forbiddenResponse } from "../_shared/auth.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // SECURITY: Require admin authentication
  const { user, error: authError, isAdmin } = await requireAdmin(req);
  if (authError || !isAdmin) {
    console.warn('[AI Site Optimizer] Unauthorized access attempt');
    return forbiddenResponse(authError || 'Admin access required');
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      return new Response(
        JSON.stringify({ success: false, error: 'AI service not configured' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { metrics, userBehavior, conversionData, pageViews } = await req.json();

    console.log(`[AI Site Optimizer] Admin ${user.id} analyzing site performance`);

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
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
            content: `You are SafeOrStolen's conversion optimization expert. Analyze site metrics and provide actionable recommendations to improve:

1. User engagement and retention
2. Free-to-paid conversion rates
3. Verification completion rates
4. Mobile app adoption
5. User journey optimization
6. A/B testing suggestions
7. Feature prioritization

SafeOrStolen is "Carfax for Everything - Buy and Sell" - users verify items before buying/selling.

Respond with JSON:
{
  "overallHealth": 0-100,
  "keyInsights": ["insight1", "insight2"],
  "conversionRecommendations": [
    { "priority": "high" | "medium" | "low", "area": "area", "recommendation": "what to do", "expectedImpact": "X% improvement" }
  ],
  "uxImprovements": ["improvement1", "improvement2"],
  "abTestIdeas": [
    { "name": "test name", "hypothesis": "what we think", "metric": "what to measure" }
  ],
  "featurePriorities": ["feature1", "feature2"],
  "quickWins": ["win1", "win2", "win3"]
}`
          },
          {
            role: 'user',
            content: `Analyze SafeOrStolen's performance and provide optimization recommendations:

Site Metrics: ${JSON.stringify(metrics || { visitors: 'unknown', bounceRate: 'unknown' })}
User Behavior: ${JSON.stringify(userBehavior || { avgSessionDuration: 'unknown' })}
Conversion Data: ${JSON.stringify(conversionData || { freeToPayRate: '0%', signups: 'unknown' })}
Top Pages: ${JSON.stringify(pageViews || ['/', '/verify', '/pricing'])}

Current challenges:
- Low free-to-paid conversion
- High bounce rate
- Need more mobile app installs
- Users not completing verifications`
          }
        ],
        temperature: 0.4,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ success: false, error: 'Rate limit exceeded' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ success: false, error: 'AI service temporarily unavailable' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '{}';

    let result;
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      result = jsonMatch ? JSON.parse(jsonMatch[0]) : {};
    } catch {
      result = { overallHealth: 50, keyInsights: [], quickWins: [] };
    }

    console.log(`[AI Site Optimizer] Health: ${result.overallHealth}, Quick Wins: ${result.quickWins?.length || 0}`);

    return new Response(
      JSON.stringify({
        success: true,
        optimization: result
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[AI Site Optimizer] Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});