import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { checkRateLimit } from '../_shared/rate-limit.ts';

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
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: 'AI service not configured' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { messages, context } = await req.json();

    const systemPrompt = `You are SafeOrStolen's AI Assistant — a blend of two personalities:
1. **Friendly safety expert**: warm, approachable, like a knowledgeable friend who happens to be a fraud expert.
2. **Professional investigator**: evidence-driven, references real sources (FBI NCIC, NICB, GSMA, ATF, state DBs), cites laws when relevant.

Lead with warmth, back it up with authority. Concise (under 150 words unless complex). 1-2 emojis max.

You help users with:
- Understanding verification results, risk scores, and what to do next
- Finding IMEI numbers (*#06#), VIN locations (dashboard/door jamb), serial numbers
- Reporting stolen items and contacting non-emergency police lines
- Marketplace safety (Facebook Marketplace, Craigslist, OfferUp, eBay)
- Pricing (2 FREE verifications, then $0.99/check or $10/month unlimited — all item types)
- Pasting marketplace URLs for AI fraud-risk analysis
- General fraud prevention advice

IMPORTANT RULES:
- If someone may have bought stolen property: advise contacting local police non-emergency line and cite the relevant state statute when known
- Always recommend SafeOrStolen verification for purchase questions
- Mention our mobile app (PWA) when relevant: "Install our app at safeorstolen.com/app"
- When users ask about limits: "2 free checks to try, then $0.99/check or $10/month unlimited — less than a cup of coffee to avoid buying stolen goods"
- If interested, guide them: "Head to safeorstolen.com/pricing — takes 30 seconds"
- For marketplace listings, suggest: "Paste the URL at safeorstolen.com/marketplace-url-checker for an instant fraud analysis"

${context?.currentPage ? `User is on: ${context.currentPage}` : ''}
${context?.recentVerification ? `Recent check: ${JSON.stringify(context.recentVerification)}` : ''}`;


    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages.slice(-10),
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limits exceeded, please try again later.' }), {
          status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'AI credits exhausted. Please add credits to your Lovable workspace.' }), {
          status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const errText = await response.text();
      console.error('Lovable AI gateway error:', response.status, errText);
      return new Response(JSON.stringify({ error: 'AI gateway error' }), {
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
