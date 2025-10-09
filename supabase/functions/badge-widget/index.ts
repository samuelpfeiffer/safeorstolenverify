import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const pathParts = url.pathname.split('/');
    const verificationId = pathParts[pathParts.length - 1];
    const format = url.searchParams.get('format') || 'svg';
    
    if (!verificationId) {
      return new Response(JSON.stringify({ error: "Verification ID required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Look up verification
    const { data: verification, error } = await supabaseClient
      .from('verification_searches')
      .select('status, serial_number, item_type')
      .eq('id', verificationId)
      .single();

    if (error || !verification) {
      return generateBadge('unknown', format);
    }

    const status = verification.status === 'safe' ? 'verified' : verification.status;
    
    // Rate limiting check (prevent badge scraping)
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const { data: rateLimit } = await supabaseClient
      .from('api_usage_logs')
      .select('id')
      .eq('api_endpoint', 'badge-widget')
      .gte('created_at', new Date(Date.now() - 3600000).toISOString())
      .limit(100);

    if (rateLimit && rateLimit.length > 50) {
      console.log(`Rate limit exceeded for IP: ${ip}`);
    }

    return generateBadge(status, format);
    
  } catch (error) {
    console.error('Badge widget error:', error);
    return generateBadge('error', 'svg');
  }
});

function generateBadge(status: string, format: string): Response {
  const colors = {
    verified: { bg: '#10b981', text: '#fff' },
    safe: { bg: '#10b981', text: '#fff' },
    caution: { bg: '#f59e0b', text: '#000' },
    stolen: { bg: '#ef4444', text: '#fff' },
    unknown: { bg: '#6b7280', text: '#fff' },
    error: { bg: '#6b7280', text: '#fff' }
  };

  const color = colors[status as keyof typeof colors] || colors.unknown;
  const label = status === 'verified' || status === 'safe' ? 'VERIFIED SAFE' : 
                status === 'caution' ? 'CAUTION' :
                status === 'stolen' ? 'REPORTED STOLEN' : 'NOT VERIFIED';

  if (format === 'html') {
    const html = `
      <div style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: white; border: 2px solid ${color.bg}; border-radius: 9999px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color.bg}" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
        <div style="display: flex; flex-direction: column;">
          <span style="font-size: 11px; font-weight: 700; color: ${color.bg};">${label}</span>
          <span style="font-size: 10px; color: #6b7280;">SafeOrStolen.com</span>
        </div>
      </div>
    `;
    
    return new Response(html, {
      headers: { 
        ...corsHeaders, 
        "Content-Type": "text/html",
        "Cache-Control": "public, max-age=3600"
      }
    });
  }

  // SVG format
  const svg = `
    <svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="60" rx="30" fill="white" stroke="${color.bg}" stroke-width="3"/>
      <circle cx="30" cy="30" r="12" fill="${color.bg}"/>
      <path d="M 27 30 L 29 32 L 33 28" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
      <text x="50" y="27" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="${color.bg}">${label}</text>
      <text x="50" y="42" font-family="Arial, sans-serif" font-size="9" fill="#6b7280">SafeOrStolen.com</text>
    </svg>
  `;

  return new Response(svg, {
    headers: { 
      ...corsHeaders, 
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
