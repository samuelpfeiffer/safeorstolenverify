import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

interface GenerateLinkRequest {
  stolenItemId: string;
}

serve(async (req: Request): Promise<Response> => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;

  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    // --- Authentication: require a valid JWT ---
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify the JWT and get the user
    const userClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    });

    const token = authHeader.replace('Bearer ', '');
    const { data: claimsData, error: claimsError } = await userClient.auth.getClaims(token);
    if (claimsError || !claimsData?.claims) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const userId = claimsData.claims.sub;

    const { stolenItemId }: GenerateLinkRequest = await req.json();

    if (!stolenItemId) {
      return new Response(
        JSON.stringify({ error: "stolenItemId is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Use service role for DB operations (RLS bypass needed for shared_reports insert)
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verify the stolen item exists AND belongs to the authenticated user
    const { data: stolenItem, error: itemError } = await supabase
      .from("stolen_items")
      .select("id, serial_number, item_type, user_id")
      .eq("id", stolenItemId)
      .single();

    if (itemError || !stolenItem) {
      console.error("Stolen item not found:", itemError);
      return new Response(
        JSON.stringify({ error: "Stolen item not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Ownership check: only the owner can generate share links
    if (stolenItem.user_id !== userId) {
      console.error(`User ${userId} attempted to share item owned by ${stolenItem.user_id}`);
      return new Response(
        JSON.stringify({ error: "You can only share your own reports" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
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

    console.log(`User ${userId} generated share link for item ${stolenItemId}: ${shareUrl}`);

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
      JSON.stringify({ error: "Failed to generate share link. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
