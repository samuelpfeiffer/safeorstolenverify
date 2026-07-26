import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7'
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts'
import { checkRateLimit } from '../_shared/rate-limit.ts'

// Block private/internal URL targets to prevent SSRF-style proxy abuse
const BLOCKED_PATTERNS = [
  /^https?:\/\/localhost/i, /^https?:\/\/127\./, /^https?:\/\/192\.168\./,
  /^https?:\/\/10\./, /^https?:\/\/172\.(1[6-9]|2[0-9]|3[0-1])\./,
  /^https?:\/\/\[::1\]/, /^https?:\/\/0\.0\.0\.0/,
];

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));
  const jsonHeaders = { ...corsHeaders, 'Content-Type': 'application/json' };

  try {
    // --- Authorization: require admin JWT (paid API proxy, not for public use) ---
    const authHeader = req.headers.get('authorization') ?? '';
    if (!authHeader.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: jsonHeaders });
    }
    const authClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    );
    const { data: isAdmin } = await authClient.rpc('is_admin_user');
    if (!isAdmin) {
      return new Response(JSON.stringify({ error: 'Forbidden: admin access required' }), { status: 403, headers: jsonHeaders });
    }

    // Rate limit as defense-in-depth
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    const rl = checkRateLimit(clientIp, { maxRequests: 10, windowMs: 60_000 });
    if (!rl.allowed) {
      return new Response(JSON.stringify({ error: 'Rate limit exceeded' }), { status: 429, headers: jsonHeaders });
    }

    const { url } = await req.json();

    if (!url || typeof url !== 'string' || !url.startsWith('http')) {
      return new Response(JSON.stringify({ error: 'Valid URL required' }), { status: 400, headers: jsonHeaders });
    }
    if (BLOCKED_PATTERNS.some((p) => p.test(url))) {
      return new Response(JSON.stringify({ error: 'Private/internal URLs not allowed' }), { status: 400, headers: jsonHeaders });
    }
    try {
      const parsed = new URL(url);
      if (!['http:', 'https:'].includes(parsed.protocol)) {
        return new Response(JSON.stringify({ error: 'Only HTTP/HTTPS allowed' }), { status: 400, headers: jsonHeaders });
      }
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid URL' }), { status: 400, headers: jsonHeaders });
    }

    const jinaKey = Deno.env.get('Jina_API_KEY');
    if (!jinaKey) {
      return new Response(JSON.stringify({ error: 'Jina API key not configured' }), { status: 500, headers: jsonHeaders });
    }

    // Use Jina Reader to extract page content
    const jinaResponse = await fetch(`https://r.jina.ai/${encodeURIComponent(url)}`, {
      headers: {
        'Authorization': `Bearer ${jinaKey}`,
        'Accept': 'application/json',
        'X-Return-Format': 'text',
      },
    });

    if (!jinaResponse.ok) {
      throw new Error(`Jina API error: ${jinaResponse.status}`);
    }

    const pageText = await jinaResponse.text();
    const identifiers: { type: string; value: string }[] = [];

    const imeiMatches = pageText.match(/\b\d{15}\b/g);
    if (imeiMatches) imeiMatches.slice(0, 3).forEach((m) => identifiers.push({ type: 'imei', value: m }));

    const vinMatches = pageText.match(/\b[A-HJ-NPR-Z0-9]{17}\b/g);
    if (vinMatches) vinMatches.slice(0, 3).forEach((m) => identifiers.push({ type: 'vin', value: m }));

    const serialMatches = pageText.match(/(?:serial|ser\.?|s\/n)[:\s#]+([A-Z0-9]{5,12})/gi);
    if (serialMatches) serialMatches.slice(0, 3).forEach((m) => {
      const val = m.replace(/(?:serial|ser\.?|s\/n)[:\s#]+/i, '').trim();
      identifiers.push({ type: 'serial', value: val });
    });

    const plateMatches = pageText.match(/(?:plate|license)[:\s#]+([A-Z0-9]{2,8})/gi);
    if (plateMatches) plateMatches.slice(0, 2).forEach((m) => {
      const val = m.replace(/(?:plate|license)[:\s#]+/i, '').trim();
      identifiers.push({ type: 'plate', value: val });
    });

    return new Response(
      JSON.stringify({ url, identifiers, page_excerpt: pageText.slice(0, 500), found: identifiers.length > 0 }),
      { headers: jsonHeaders }
    );
  } catch (error) {
    console.error('Jina extract error:', error);
    return new Response(
      JSON.stringify({ error: (error instanceof Error ? error.message : String(error)) }),
      { status: 500, headers: jsonHeaders }
    );
  }
});
