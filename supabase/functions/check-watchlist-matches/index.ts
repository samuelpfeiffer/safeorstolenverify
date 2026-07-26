import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';

interface CheckMatchesRequest {
  stolenItemId: string;
}

serve(async (req: Request): Promise<Response> => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));
  const jsonHeaders = { ...corsHeaders, "Content-Type": "application/json" };

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    // --- Authentication: require signed-in caller ---
    const authHeader = req.headers.get('authorization') ?? '';
    if (!authHeader.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: jsonHeaders });
    }
    const authClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userErr } = await authClient.auth.getUser();
    if (userErr || !userData?.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: jsonHeaders });
    }
    const callerId = userData.user.id;

    const { stolenItemId }: CheckMatchesRequest = await req.json();
    if (!stolenItemId || typeof stolenItemId !== 'string') {
      return new Response(JSON.stringify({ error: "stolenItemId is required" }), { status: 400, headers: jsonHeaders });
    }

    // Use service role for privileged reads/writes AFTER we authorize the caller
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // --- Authorization: caller must own the stolen_items row.
    //     Also derive identifier/itemType from the DB — never trust client-supplied values,
    //     which prevents spamming other users with fabricated stolen-item alerts.
    const { data: stolenItem, error: stolenErr } = await supabase
      .from('stolen_items')
      .select('id, user_id, serial_number, imei, vin, item_type')
      .eq('id', stolenItemId)
      .maybeSingle();

    if (stolenErr || !stolenItem) {
      return new Response(JSON.stringify({ error: "Stolen item not found" }), { status: 404, headers: jsonHeaders });
    }
    if (stolenItem.user_id !== callerId) {
      return new Response(JSON.stringify({ error: "Forbidden: you do not own this report" }), { status: 403, headers: jsonHeaders });
    }

    const identifier: string = (stolenItem.serial_number || stolenItem.imei || stolenItem.vin || '').toString();
    const itemType: string = stolenItem.item_type || 'item';
    if (!identifier) {
      return new Response(JSON.stringify({ success: true, matchesFound: 0 }), { status: 200, headers: jsonHeaders });
    }

    console.log(`Checking watchlist matches for stolen_item ${stolenItemId}`);

    const { data: matches, error: matchError } = await supabase
      .from("user_watchlist")
      .select(`id, identifier, item_type, description, alert_email, user_id`)
      .eq("alert_email", true)
      .or(`identifier.ilike.%${identifier}%,identifier.eq.${identifier.toUpperCase()}`);

    if (matchError) {
      console.error("Error finding matches:", matchError);
      return new Response(JSON.stringify({ error: "Failed to check watchlist" }), { status: 500, headers: jsonHeaders });
    }

    if (!matches || matches.length === 0) {
      return new Response(JSON.stringify({ success: true, matchesFound: 0 }), { status: 200, headers: jsonHeaders });
    }

    const userIds = [...new Set(matches.map((m) => m.user_id))];
    const { data: profiles } = await supabase
      .from("profiles")
      .select("id, email, full_name, email_notifications_enabled")
      .in("id", userIds)
      .eq("email_notifications_enabled", true);

    const emailsSent: string[] = [];

    if (resendApiKey && profiles && profiles.length > 0) {
      const resend = new Resend(resendApiKey);
      // Escape any HTML-significant chars from DB-sourced values before embedding in email HTML.
      const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      const safeIdentifier = escapeHtml(identifier);
      const safeItemType = escapeHtml(itemType);

      for (const profile of profiles) {
        if (!profile.email) continue;
        try {
          await resend.emails.send({
            from: "SafeOrStolen <support@safeorstolen.com>",
            to: [profile.email],
            subject: `🚨 Watchlist Alert: Item Reported as Stolen`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #ef4444;">⚠️ Watchlist Alert</h1>
                <p>Hi ${escapeHtml(profile.full_name || "there")},</p>
                <p>An item matching your watchlist has been reported as stolen:</p>
                <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; margin: 20px 0;">
                  <p style="margin: 0;"><strong>Identifier:</strong> ${safeIdentifier}</p>
                  <p style="margin: 8px 0 0 0;"><strong>Type:</strong> ${safeItemType}</p>
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
                  <br><a href="https://safeorstolen.com/dashboard" style="color: #737373;">Manage your watchlist settings</a>
                </p>
              </div>
            `,
          });
          emailsSent.push(profile.email);
        } catch (emailError) {
          console.error(`Failed to send email to ${profile.email}:`, emailError);
        }
      }
    }

    await supabase.from("audit_logs").insert({
      action: "WATCHLIST_ALERT_SENT",
      table_name: "user_watchlist",
      user_id: callerId,
      new_values: {
        stolen_item_id: stolenItemId,
        matches_found: matches.length,
        emails_sent: emailsSent.length,
        timestamp: new Date().toISOString(),
      },
    });

    return new Response(
      JSON.stringify({ success: true, matchesFound: matches.length, emailsSent: emailsSent.length }),
      { status: 200, headers: jsonHeaders }
    );
  } catch (error) {
    console.error("Error in check-watchlist-matches:", error);
    return new Response(
      JSON.stringify({ error: (error instanceof Error ? error.message : String(error)) }),
      { status: 500, headers: jsonHeaders }
    );
  }
});
