import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { checkRateLimit } from '../_shared/rate-limit.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  // Rate limit: 10 requests/min per IP
  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('cf-connecting-ip');
  const rl = checkRateLimit(clientIp, { maxRequests: 10, windowMs: 60_000 });
  if (!rl.allowed) {
    return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
      status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY is not configured');

    const { messages, context } = await req.json();

    const systemPrompt = `You are SafeOrStolen's AI Assistant — a friendly, knowledgeable expert on stolen item verification, fraud prevention, and buying safety.

You help users with:
- Understanding verification results and risk scores
- Finding IMEI numbers (*#06#), VIN locations (dashboard/door jamb), serial numbers
- Reporting stolen items and next steps
- Marketplace safety (Facebook Marketplace, Craigslist, OfferUp, eBay)
- Subscription questions (Unlimited: $1/month — all verifications, all item types)
- General fraud prevention advice

PERSONALITY: Warm, professional, concise. Use emojis sparingly (1-2 per message max). 
TONE: Like a knowledgeable friend who happens to be a fraud expert.
LENGTH: Keep responses under 150 words unless explaining something complex.

IMPORTANT RULES:
- If someone might have bought stolen property: advise contacting local police non-emergency line
- Always recommend SafeOrStolen verification for any purchase question
- Mention our mobile app (PWA) when relevant — "Download our app at safeorstolen.com/app"
- For pricing: we offer 2 FREE verifications to try, then $1/month unlimited — best deal in the industry
- When users ask about limits: "You get 2 free checks to try us out, then it's just $1/month for unlimited verifications"
- Always emphasize the value: "Less than a cup of coffee to protect yourself from stolen goods"
- If a user seems interested, guide them: "Head to safeorstolen.com/pricing to subscribe — takes 30 seconds"

${context?.currentPage ? `User is on: ${context.currentPage}` : ''}
${context?.recentVerification ? `Recent check: ${JSON.stringify(context.recentVerification)}` : ''}`;

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
          ...messages.slice(-10),
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
          status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'AI credits exhausted. Please add credits to continue.' }), {
          status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const t = await response.text();
      console.error('AI gateway error:', response.status, t);
      return new Response(JSON.stringify({ error: 'AI service temporarily unavailable' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, 'Content-Type': 'text/event-stream' },
    });

  } catch (error) {
    console.error('AI chat stream error:', error);
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : 'Chat service error',
    }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
