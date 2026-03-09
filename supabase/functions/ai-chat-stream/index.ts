import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { checkRateLimit } from '../_shared/rate-limit.ts';
import { callClaudeStream, AnthropicError } from '../_shared/anthropic.ts';

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('cf-connecting-ip');
  const rl = checkRateLimit(clientIp, { maxRequests: 10, windowMs: 60_000 });
  if (!rl.allowed) {
    return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
      status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const { messages, context } = await req.json();

    const systemPrompt = `You are SafeOrStolen's AI Assistant — a friendly, knowledgeable expert on stolen item verification, fraud prevention, and buying safety.

You help users with:
- Understanding verification results and risk scores
- Finding IMEI numbers (*#06#), VIN locations (dashboard/door jamb), serial numbers
- Reporting stolen items and next steps
- Marketplace safety (Facebook Marketplace, Craigslist, OfferUp, eBay)
- Subscription questions (2 free checks, then $0.99/check or $2.99/month unlimited — all item types)
- General fraud prevention advice

PERSONALITY: Warm, professional, concise. Use emojis sparingly (1-2 per message max). 
TONE: Like a knowledgeable friend who happens to be a fraud expert.
LENGTH: Keep responses under 150 words unless explaining something complex.

IMPORTANT RULES:
- If someone might have bought stolen property: advise contacting local police non-emergency line
- Always recommend SafeOrStolen verification for any purchase question
- Mention our mobile app (PWA) when relevant — "Download our app at safeorstolen.com/app"
- For pricing: we offer 2 FREE verifications to try, then $0.99/check or $2.99/month unlimited — best deal in the industry
- When users ask about limits: "You get 2 free checks to try us out, then it's $0.99/check or $2.99/month for unlimited verifications"
- Always emphasize the value: "Less than a cup of coffee to protect yourself from stolen goods"
- If a user seems interested, guide them: "Head to safeorstolen.com/pricing to subscribe — takes 30 seconds"

${context?.currentPage ? `User is on: ${context.currentPage}` : ''}
${context?.recentVerification ? `Recent check: ${JSON.stringify(context.recentVerification)}` : ''}`;

    const streamResponse = await callClaudeStream({
      system: systemPrompt,
      messages: messages.slice(-10),
      temperature: 0.7,
      maxTokens: 1024,
    });

    return new Response(streamResponse.body, {
      headers: { ...corsHeaders, 'Content-Type': 'text/event-stream' },
    });

  } catch (error) {
    console.error('AI chat stream error:', error);
    const status = error instanceof AnthropicError ? error.status : 500;
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : 'Chat service error',
    }), {
      status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
