import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface GenerateLinkRequest {
  stolenItemId: string;
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { stolenItemId }: GenerateLinkRequest = await req.json();

    if (!stolenItemId) {
      return new Response(
        JSON.stringify({ error: "stolenItemId is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify the stolen item exists
    const { data: stolenItem, error: itemError } = await supabase
      .from("stolen_items")
      .select("id, serial_number, item_type")
      .eq("id", stolenItemId)
      .single();

    if (itemError || !stolenItem) {
      console.error("Stolen item not found:", itemError);
      return new Response(
        JSON.stringify({ error: "Stolen item not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Generate unique 8-character share code
    const generateShareCode = (): string => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let code = "";
      for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return code;
    };

    // Try to generate unique code (retry if collision)
    let shareCode = generateShareCode();
    let attempts = 0;
    const maxAttempts = 5;

    while (attempts < maxAttempts) {
      const { data: existing } = await supabase
        .from("shared_reports")
        .select("id")
        .eq("share_code", shareCode)
        .single();

      if (!existing) break;
      
      shareCode = generateShareCode();
      attempts++;
    }

    // Insert share record
    const { data: shareRecord, error: insertError } = await supabase
      .from("shared_reports")
      .insert({
        share_code: shareCode,
        stolen_item_id: stolenItemId,
        views: 0,
      })
      .select()
      .single();

    if (insertError) {
      console.error("Error creating share record:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to create share link" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Build shareable URL
    const shareUrl = `https://safeorstolen.com/shared/${shareCode}`;

    console.log(`Generated share link for item ${stolenItemId}: ${shareUrl}`);

    return new Response(
      JSON.stringify({
        success: true,
        shareCode,
        shareUrl,
        stolenItem: {
          id: stolenItem.id,
          serialNumber: stolenItem.serial_number,
          itemType: stolenItem.item_type,
        },
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in generate-report-link:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
