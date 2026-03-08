import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { callClaude, parseJsonResponse, AnthropicError } from '../_shared/anthropic.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const { metrics, userBehavior, conversionData, pageViews } = await req.json();
    console.log('[AI Site Optimizer] Analyzing site performance');

    const content = await callClaude({
      system: `You are SafeOrStolen's conversion optimization expert. Analyze site metrics and provide actionable recommendations to improve:

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
}`,
      messages: [{
        role: 'user',
        content: `Analyze SafeOrStolen's performance:

Site Metrics: ${JSON.stringify(metrics || { visitors: 'unknown' })}
User Behavior: ${JSON.stringify(userBehavior || {})}
Conversion Data: ${JSON.stringify(conversionData || { freeToPayRate: '0%' })}
Top Pages: ${JSON.stringify(pageViews || ['/', '/verify', '/pricing'])}

Current challenges:
- Low free-to-paid conversion
- High bounce rate
- Need more mobile app installs
- Users not completing verifications`
      }],
      temperature: 0.4,
      maxTokens: 2000,
    });

    const result = parseJsonResponse(content) || { overallHealth: 50, keyInsights: [], quickWins: [] };
    console.log(`[AI Site Optimizer] Health: ${result.overallHealth}`);

    return new Response(JSON.stringify({ success: true, optimization: result }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[AI Site Optimizer] Error:', error);
    const status = error instanceof AnthropicError ? error.status : 500;
    return new Response(JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }), {
      status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
