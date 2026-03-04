import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

interface ChatRequest {
  message: string;
  context?: {
    currentPage?: string;
    userHistory?: string[];
    verificationResult?: any;
  };
  conversationHistory?: { role: 'user' | 'assistant'; content: string }[];
}

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY');
    if (!ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY is not configured');
    }

    const { message, context, conversationHistory = [] }: ChatRequest = await req.json();
    console.log('[AI Assistant] Message received:', message.slice(0, 50));

    const systemPrompt = `You are the SafeOrStolen.com AI assistant. You help users with:
- Understanding item verification results
- Navigating the platform
- Reporting stolen items
- Interpreting risk assessments
- Safety recommendations when buying used items
- Technical support

Key features to mention:
- IMEI Check: For mobile phones, dial *#06# to find IMEI
- VIN Check: For vehicles, find on dashboard or door jamb
- Serial Number: For electronics, check device settings or back of item
- Subscription: $1/month unlimited verifications
- No free tier — subscribe to start verifying

${context?.currentPage ? `User is currently on: ${context.currentPage}` : ''}
${context?.verificationResult ? `Recent verification result: ${JSON.stringify(context.verificationResult)}` : ''}

Guidelines:
- Be friendly and professional
- Give clear, actionable guidance
- Keep responses concise (2-3 paragraphs max)
- Show empathy for theft victims
- Link to relevant features when helpful
- If user seems to have bought stolen property, advise them to contact local police

If asked about pricing:
- Unlimited Plan: $1/month — unlimited verifications, all item types, cancel anytime
- No free tier — $1/month is the only plan`;

    const messages = [
      ...conversationHistory.slice(-10),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5-20250514',
        max_tokens: 2048,
        system: systemPrompt,
        messages,
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error(`AI API error: ${response.status}`);
    }

    return new Response(response.body, {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      },
    });

  } catch (error) {
    console.error('[AI Assistant] Error:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Assistant error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
