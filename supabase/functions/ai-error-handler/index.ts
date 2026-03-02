import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY');
    if (!ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          analysis: 'AI service not configured. Check error logs manually.' 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { error, context } = await req.json();

    if (!error) {
      return new Response(
        JSON.stringify({ success: false, error: 'Error details required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[AI Error Handler] Analyzing: ${error.name || 'Unknown Error'}`);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5-20250514',
        max_tokens: 1500,
        system: `You are SafeOrStolen's error analysis expert. Analyze JavaScript/TypeScript errors and provide:

1. Root cause analysis
2. Likely fix suggestions
3. Prevention recommendations
4. Related issues to check

SafeOrStolen is a React/TypeScript app with Supabase backend.

Respond with JSON:
{
  "severity": "critical" | "error" | "warning" | "info",
  "rootCause": "explanation of what caused the error",
  "likelyFixes": [
    { "fix": "what to do", "confidence": "high" | "medium" | "low" }
  ],
  "codeExample": "example fix code if applicable",
  "preventionTips": ["tip1", "tip2"],
  "relatedIssues": ["issue1", "issue2"],
  "userImpact": "how this affects users",
  "summary": "brief summary for logging"
}`,
        messages: [
          {
            role: 'user',
            content: `Analyze this error:

Error Name: ${error.name || 'Unknown'}
Error Message: ${error.message || 'No message'}
Stack Trace: ${error.stack || 'No stack trace'}

Context:
- Component: ${context?.component || 'Unknown'}
- Action: ${context?.action || 'Unknown'}
- URL: ${context?.url || 'Unknown'}
- User Agent: ${context?.userAgent || 'Unknown'}
- Timestamp: ${context?.timestamp || new Date().toISOString()}`
          }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ success: false, analysis: 'Rate limit exceeded. Try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.content?.[0]?.text || '{}';

    let result;
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      result = jsonMatch ? JSON.parse(jsonMatch[0]) : {};
    } catch {
      result = { 
        severity: 'error', 
        rootCause: 'Unable to parse AI analysis',
        summary: error.message 
      };
    }

    console.log(`[AI Error Handler] Severity: ${result.severity}, Root Cause: ${result.rootCause?.substring(0, 50)}...`);

    return new Response(
      JSON.stringify({
        success: true,
        analysis: result.summary || result.rootCause,
        details: result
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    console.error('[AI Error Handler] Error:', err);
    return new Response(
      JSON.stringify({ 
        success: false, 
        analysis: `Error handler failed: ${err.message}` 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
