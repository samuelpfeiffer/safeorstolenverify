import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface HotGunzResponse {
  status: "ok" | "error";
  serial?: string;
  found?: boolean | null;
  summary?: string;
  html?: string;
  error?: string;
}

function cleanSerial(input: string): string {
  return input.replace(/[^a-zA-Z0-9]/g, "").trim();
}

function detectFound(html: string): { found: boolean | null; summary: string } {
  const lower = html.toLowerCase();
  // Heuristics based on common phrases
  const negativePhrases = [
    "no stolen", // e.g., "No stolen guns were found"
    "no results",
    "did not find",
    "0 results",
  ];
  const positivePhrases = [
    "stolen", // appears in result rows
    "make", "model", "serial", // table headers often include these
    "report number",
    "contact",
  ];

  const hasNegative = negativePhrases.some(p => lower.includes(p));
  const hasPositive = positivePhrases.some(p => lower.includes(p));

  if (hasNegative && !hasPositive) {
    return { found: false, summary: "No stolen records found on HotGunz." };
  }
  if (hasPositive) {
    return { found: true, summary: "Potential stolen records found on HotGunz. Review details below." };
  }
  return { found: null, summary: "Unable to determine result conclusively. See details below." };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { serial } = await req.json();
    if (!serial || typeof serial !== "string") {
      const res: HotGunzResponse = { status: "error", error: "Missing or invalid 'serial'" };
      return new Response(JSON.stringify(res), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const cleaned = cleanSerial(serial);
    if (cleaned.length < 3 || cleaned.length > 64) {
      const res: HotGunzResponse = { status: "error", error: "Serial must be 3-64 alphanumeric characters after cleaning." };
      return new Response(JSON.stringify(res), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // Prepare form-encoded POST to HotGunz
    const body = new URLSearchParams({ q: cleaned }).toString();
    const response = await fetch("https://www.hotgunz.com/search.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (compatible; SOSVerifier/1.0; +https://sosapp.example)",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      body,
    });

    const html = await response.text();

    const { found, summary } = detectFound(html);

    const result: HotGunzResponse = {
      status: "ok",
      serial: cleaned,
      found,
      summary,
      html,
    };

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("verify-firearm-hotgunz error", error);
    const res: HotGunzResponse = { status: "error", error: error?.message || "Unexpected error" };
    return new Response(JSON.stringify(res), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
