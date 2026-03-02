import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

interface CheckMatchesRequest {
  stolenItemId: string;
  identifier: string;
  itemType: string;
}

serve(async (req: Request): Promise<Response> => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { stolenItemId, identifier, itemType }: CheckMatchesRequest = await req.json();

    if (!identifier) {
      return new Response(
        JSON.stringify({ error: "identifier is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Checking watchlist matches for identifier: ${identifier}`);

    // Find matching watchlist entries
    const { data: matches, error: matchError } = await supabase
      .from("user_watchlist")
      .select(`
        id,
        identifier,
        item_type,
        description,
        alert_email,
        user_id
      `)
      .eq("alert_email", true)
      .or(`identifier.ilike.%${identifier}%,identifier.eq.${identifier.toUpperCase()}`);

    if (matchError) {
      console.error("Error finding matches:", matchError);
      return new Response(
        JSON.stringify({ error: "Failed to check watchlist" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!matches || matches.length === 0) {
      console.log("No watchlist matches found");
      return new Response(
        JSON.stringify({ success: true, matchesFound: 0 }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Found ${matches.length} watchlist matches`);

    // Get user emails for notifications
    const userIds = [...new Set(matches.map((m) => m.user_id))];
    const { data: profiles, error: profileError } = await supabase
      .from("profiles")
      .select("id, email, full_name, email_notifications_enabled")
      .in("id", userIds)
      .eq("email_notifications_enabled", true);

    if (profileError) {
      console.error("Error fetching profiles:", profileError);
    }

    const emailsSent: string[] = [];

    // Send email notifications if Resend is configured
    if (resendApiKey && profiles && profiles.length > 0) {
      const resend = new Resend(resendApiKey);

      for (const profile of profiles) {
        if (!profile.email) continue;

        try {
          await resend.emails.send({
            from: "SafeOrStolen <alerts@safeorstolen.com>",
            to: [profile.email],
            subject: `🚨 Watchlist Alert: Item Reported as Stolen`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #ef4444;">⚠️ Watchlist Alert</h1>
                <p>Hi ${profile.full_name || "there"},</p>
                <p>An item matching your watchlist has been reported as stolen:</p>
                
                <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; margin: 20px 0;">
                  <p style="margin: 0;"><strong>Identifier:</strong> ${identifier}</p>
                  <p style="margin: 8px 0 0 0;"><strong>Type:</strong> ${itemType || "Unknown"}</p>
                </div>
                
                <p>If you were considering purchasing an item with this identifier, we strongly recommend:</p>
                <ul>
                  <li>Do NOT proceed with the purchase</li>
                  <li>Report this to local authorities</li>
                  <li>Document any communications with the seller</li>
                </ul>
                
                <p style="margin-top: 24px;">
                  <a href="https://safeorstolen.com/verify?q=${encodeURIComponent(identifier)}" 
                     style="background: #f97316; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                    View Full Verification Report
                  </a>
                </p>
                
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e5e5;">
                <p style="color: #737373; font-size: 12px;">
                  You received this because you have watchlist alerts enabled on SafeOrStolen.com.
                  <br>
                  <a href="https://safeorstolen.com/dashboard" style="color: #737373;">Manage your watchlist settings</a>
                </p>
              </div>
            `,
          });

          emailsSent.push(profile.email);
          console.log(`Sent watchlist alert to ${profile.email}`);
        } catch (emailError) {
          console.error(`Failed to send email to ${profile.email}:`, emailError);
        }
      }
    }

    // Log the notification in audit logs
    await supabase.from("audit_logs").insert({
      action: "WATCHLIST_ALERT_SENT",
      table_name: "user_watchlist",
      new_values: {
        stolen_item_id: stolenItemId,
        identifier,
        matches_found: matches.length,
        emails_sent: emailsSent.length,
        timestamp: new Date().toISOString(),
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        matchesFound: matches.length,
        emailsSent: emailsSent.length,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in check-watchlist-matches:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
