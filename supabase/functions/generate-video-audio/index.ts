// Generates voiceover via OpenAI TTS for the AI Verification video
import { encode as base64Encode } from "https://deno.land/std@0.168.0/encoding/base64.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const KEY = Deno.env.get("OPENAI_API_KEY");
    if (!KEY) throw new Error("OPENAI_API_KEY not configured");

    const { kind } = await req.json();

    if (kind === "voiceover") {
      const script =
        "Buying something second-hand? Don't risk it. SafeOrStolen checks any IMEI, VIN, or serial number against a hundred plus stolen item databases — in seconds. AI-powered. Always free to start. Verify before you buy. Stay safe with SafeOrStolen.";

      const r = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "tts-1-hd",
          voice: "nova", // friendly female
          input: script,
          response_format: "mp3",
          speed: 1.05,
        }),
      });
      if (!r.ok) {
        const t = await r.text();
        throw new Error(`TTS ${r.status}: ${t}`);
      }
      const buf = await r.arrayBuffer();
      return new Response(
        JSON.stringify({ audioBase64: base64Encode(new Uint8Array(buf)), bytes: buf.byteLength }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    throw new Error("Unknown kind");
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
