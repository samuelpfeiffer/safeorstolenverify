import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { checkRateLimit } from '../_shared/rate-limit.ts';

// Sept 29 2026: no longer depends only on Lovable AI credits.
// Order: Anthropic (Claude) -> xAI (Grok) -> Lovable gateway.
// Always returns an OpenAI-style SSE stream so the website code does not need to change.
// Nov 11 2026: this file now matches the deployed function (the repo copy was out of date).

const enc = new TextEncoder();
function sseChunk(text: string) {
  return enc.encode(`data: ${JSON.stringify({ choices: [{ delta: { content: text } }] })}\n\n`);
}
const SSE_DONE = enc.encode('data: [DONE]\n\n');

function buildSystemPrompt(context: any) {
  // Nov 11 2026 (owner report): the old prompt never said what SafeOrStolen checks, so the model
  // told visitors "SafeOrStolen doesn't check firearms" and sent them to police or gun dealers, and
  // told people on /verify to "go to safeorstolen.com/verify" to run their check. It also had old
  // prices (2 free checks, $0.99). This version lists what is really searched and never turns anyone away.
  return `You are the SafeOrStolen AI, the chat on safeorstolen.com/verify. This chat IS where checks run. SafeOrStolen helps buyers, sellers and businesses (pawn shops, resellers, repair shops, dealers) across the whole USA check whether a used item is reported stolen.

WHAT SAFEORSTOLEN CHECKS (say yes to all of these):
- Guns and all firearms (handguns, rifles, shotguns, any make) by serial number. A gun check searches SafeOrStolen's own theft reports, more than 220,000 police gun theft and loss reports from 33 states and Washington, DC, and live Ohio law-enforcement records.
- Phones and tablets by IMEI (dial *#06#). Searches SafeOrStolen's own theft reports and confirms the make and model from the IMEI.
- Cars, trucks and motorcycles by 17-character VIN or license plate. Searches SafeOrStolen's own theft reports plus Arizona, Alaska and Chicago police stolen-vehicle records.
- Bikes and e-bikes by frame serial. Searches SafeOrStolen's own theft reports and a national stolen-bicycle registry.
- Laptops, consoles, cameras, tools, drones, watches and anything else with a serial number. Searches SafeOrStolen's own theft reports.
- Marketplace listing links (Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, Poshmark): paste the link in this chat for a scam check.

HOW CHECKS RUN: when someone sends a number by itself in this chat, the check runs automatically and the result appears here. You only see messages that are not a plain number. If someone mentions a number together with other words, or asks you to check something, tell them to send just the serial number, IMEI, VIN or plate by itself here and the check will run right away.

NEVER TURN PEOPLE AWAY (most important):
- Never say SafeOrStolen doesn't check, cover or support an item. If it has a serial number, IMEI, VIN or plate, SafeOrStolen can check it.
- Never tell people to go to another page, another website, the police, a gun dealer, the ATF or anyone else to check an item instead of here. Never say you can't run checks. Never name or link other checking websites.
- Only mention the police non-emergency line when a check found a theft report or someone believes they already bought stolen property, and only after telling them what SafeOrStolen found.

HONESTY RULES:
- Never make up facts, results, statistics, laws or features. If you are not sure, say so plainly.
- You cannot see check results unless they are given to you below. Never say an item is safe or stolen on your own.
- A clean result only means no theft report was found in the records searched. It is not a guarantee.
- Never name the companies or services behind SafeOrStolen's data. Describe sources the way the list above does.

PRICING: the first check is free. After that, $4.99 for 1 check or $10 a month for unlimited checks.

STYLE: Warm, plain, everyday American English. No jargon. Under 120 words unless the question needs more. At most one emoji.
${context?.currentPage ? `\nUser is on: ${context.currentPage}` : ''}${context?.recentVerification ? `\nRecent check given to you: ${JSON.stringify(context.recentVerification).slice(0, 2000)}` : ''}`;
}

async function streamFromAnthropic(key: string, system: string, messages: any[]): Promise<Response | null> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ model: Deno.env.get('ANTHROPIC_CHAT_MODEL') || 'claude-haiku-4-5-20251001', max_tokens: 700, system, messages, stream: true }),
  });
  if (!res.ok || !res.body) { console.error('[ai-chat-stream] Anthropic error', res.status, await res.text().catch(() => '')); return null; }
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  const stream = new ReadableStream({
    async start(controller) {
      let buf = '';
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buf += dec.decode(value, { stream: true });
          let i;
          while ((i = buf.indexOf('\n')) >= 0) {
            const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
            if (!line.startsWith('data:')) continue;
            try {
              const ev = JSON.parse(line.slice(5).trim());
              if (ev.type === 'content_block_delta' && ev.delta?.type === 'text_delta') controller.enqueue(sseChunk(ev.delta.text));
            } catch { /* ignore */ }
          }
        }
      } catch (e) { console.error('[ai-chat-stream] stream read error', e); }
      controller.enqueue(SSE_DONE); controller.close();
    },
  });
  return new Response(stream);
}

async function streamOpenAICompatible(url: string, key: string, model: string, system: string, messages: any[]): Promise<Response | null> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, messages: [{ role: 'system', content: system }, ...messages], stream: true }),
  });
  if (!res.ok || !res.body) { console.error('[ai-chat-stream] provider error', url, res.status, await res.text().catch(() => '')); return null; }
  return new Response(res.body);
}

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('cf-connecting-ip');
  const rl = checkRateLimit(clientIp, { maxRequests: 10, windowMs: 60_000 });
  if (!rl.allowed) {
    return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }

  try {
    const { messages = [], context } = await req.json();
    const system = buildSystemPrompt(context);
    // Clean message list: only user/assistant, non-empty, last 10, must start with user (Anthropic rule)
    let msgs = (Array.isArray(messages) ? messages : [])
      .filter((m: any) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
      .slice(-10)
      .map((m: any) => ({ role: m.role, content: m.content.slice(0, 4000) }));
    while (msgs.length && msgs[0].role !== 'user') msgs.shift();
    if (!msgs.length) {
      return new Response(JSON.stringify({ error: 'Please type a question.' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    let out: Response | null = null;
    const anthropicKey = Deno.env.get('ANTHROPIC_API_KEY') || Deno.env.get('CLAUDE_API_KEY');
    if (anthropicKey) out = await streamFromAnthropic(anthropicKey, system, msgs);

    const xaiKey = Deno.env.get('XAI_API_KEY') || Deno.env.get('GROK_API_KEY');
    if (!out && xaiKey) out = await streamOpenAICompatible('https://api.x.ai/v1/chat/completions', xaiKey, Deno.env.get('XAI_CHAT_MODEL') || 'grok-3-mini', system, msgs);

    const lovableKey = Deno.env.get('LOVABLE_API_KEY');
    if (!out && lovableKey) out = await streamOpenAICompatible('https://ai.gateway.lovable.dev/v1/chat/completions', lovableKey, 'google/gemini-2.5-flash', system, msgs);

    if (!out) {
      return new Response(JSON.stringify({ error: 'Our assistant is briefly unavailable. Send the serial number, IMEI, VIN or plate by itself and the check still runs.' }), { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    return new Response(out.body, { headers: { ...corsHeaders, 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' } });
  } catch (error) {
    console.error('AI chat stream error:', error);
    return new Response(JSON.stringify({ error: 'Chat service error' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
