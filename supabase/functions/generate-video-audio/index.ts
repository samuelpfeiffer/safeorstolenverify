// Temporary edge function to generate voiceover + music for the AI Verification video
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
    const KEY = Deno.env.get("ELEVENLABS_API_KEY");
    if (!KEY) throw new Error("ELEVENLABS_API_KEY not configured");

    const { kind } = await req.json();

    if (kind === "voiceover") {
      const script =
        "Buying something second-hand? Don't risk it. SafeOrStolen checks any IMEI, VIN, or serial number against a hundred plus stolen item databases — in seconds. AI-powered. Always free to start. Verify before you buy. Stay safe with SafeOrStolen.";

      const r = await fetch(
        "https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL?output_format=mp3_44100_128",
        {
          method: "POST",
          headers: { "xi-api-key": KEY, "Content-Type": "application/json" },
          body: JSON.stringify({
            text: script,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75,
              style: 0.4,
              use_speaker_boost: true,
              speed: 1.05,
            },
          }),
        }
      );
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

    if (kind === "music") {
      const r = await fetch("https://api.elevenlabs.io/v1/music", {
        method: "POST",
        headers: { "xi-api-key": KEY, "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt:
            "Upbeat modern electronic background music for a tech product video. Bright, optimistic, motivational. Soft synth pads, light percussion, subtle beat. Inspirational and trustworthy. No vocals. Builds gentle energy. Fits behind a friendly female voiceover.",
          music_length_ms: 25000,
        }),
      });
      if (!r.ok) {
        const t = await r.text();
        throw new Error(`Music ${r.status}: ${t}`);
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
