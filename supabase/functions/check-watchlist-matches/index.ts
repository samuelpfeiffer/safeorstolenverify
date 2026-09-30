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

    // --- DAILY RE-CHECK MODE (Sept 28 2026) ---
    // Called by pg_cron with the private watchlist secret. Re-checks each watched item
    // against real sources and emails the owner ONCE if it is reported stolen.
    const peek = await req.clone().json().catch(() => ({}));
    if (peek?.mode === 'sweep') {
      const admin = createClient(supabaseUrl, supabaseServiceKey);
      const { data: cfg } = await admin.from('app_config').select('value').eq('key', 'watchlist_cron_secret').maybeSingle();
      const given = req.headers.get('x-watch-secret') ?? '';
      if (!cfg?.value || given !== cfg.value) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: jsonHeaders });
      }
      const summary = await runSweep(admin, supabaseUrl, supabaseAnonKey, resendApiKey);
      return new Response(JSON.stringify({ success: true, ...summary }), { status: 200, headers: jsonHeaders });
    }

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
      .eq("identifier", identifier.trim().toUpperCase()); // exact match only (was substring)

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


// ---------------------------------------------------------------------------
// Daily re-check ("Watch this") — Sept 28 2026
// ---------------------------------------------------------------------------
type CheckOutcome = { status: 'stolen' | 'unknown' | 'error'; source?: string; message?: string; sources: string[] };

function kindOf(itemType: string, identifier: string): 'vin' | 'plate' | 'firearm' | 'bicycle' | 'other' {
  const t = (itemType || '').toLowerCase();
  if (t.includes('gun') || t.includes('firearm') || t.includes('rifle') || t.includes('pistol')) return 'firearm';
  if (t.includes('bike') || t.includes('bicycle')) return 'bicycle';
  if (t.includes('plate')) return 'plate';
  if (t.includes('vehicle') || t.includes('car') || t.includes('vin') || t.includes('truck') || t.includes('motorcycle')) {
    return identifier.replace(/[\s-]/g, '').length === 17 ? 'vin' : 'plate';
  }
  return 'other';
}

async function callCheck(supabaseUrl: string, anonKey: string, fn: string, body: unknown): Promise<any | null> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 25000);
  try {
    const r = await fetch(`${supabaseUrl}/functions/v1/${fn}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${anonKey}`, 'apikey': anonKey, 'Origin': 'https://safeorstolen.com' },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    const text = await r.text();
    return text ? JSON.parse(text) : null;
  } catch (e) {
    console.error(`[watch] ${fn} failed:`, e);
    return null;
  } finally { clearTimeout(t); }
}

async function checkOne(admin: any, supabaseUrl: string, anonKey: string, w: any): Promise<CheckOutcome> {
  const id = String(w.identifier || '').trim().toUpperCase();
  const sources: string[] = [];

  // 1. SafeOrStolen registry, exact match
  const { data: reg } = await admin
    .from('stolen_items')
    .select('id')
    .or(`serial_number.eq.${id},imei.eq.${id},vin.eq.${id}`)
    .limit(1);
  sources.push('SafeOrStolen registry');
  if (reg && reg.length > 0) {
    return { status: 'stolen', source: 'the SafeOrStolen stolen-item registry', sources };
  }

  // 2. Outside source for the item type
  const kind = kindOf(w.item_type, id);
  let res: any = null;
  if (kind === 'vin') res = await callCheck(supabaseUrl, anonKey, 'verify-vehicle', { identifier: id });
  else if (kind === 'plate') res = await callCheck(supabaseUrl, anonKey, 'verify-vehicle', { plate: id, state: 'AZ' });
  else if (kind === 'firearm') res = await callCheck(supabaseUrl, anonKey, 'verify-hotgunz', { identifier: id });
  else if (kind === 'bicycle') res = await callCheck(supabaseUrl, anonKey, 'verify-bikeindex', { identifier: id });

  if (kind !== 'other') {
    if (!res || res.status === 'error') return { status: 'error', message: res?.message, sources };
    for (const d of (res.details?.databases ?? [])) sources.push(String(d));
    if (res.status === 'stolen') {
      const source =
        kind === 'firearm' ? "the Ohio Attorney General's stolen gun database (Ohio law enforcement records)"
        : kind === 'bicycle' ? 'the BikeIndex stolen bike registry'
        : "TheftAZ, the Arizona Attorney General's database of law enforcement stolen-vehicle records";
      return { status: 'stolen', source, message: res.message, sources };
    }
  }
  return { status: 'unknown', sources };
}

async function runSweep(admin: any, supabaseUrl: string, anonKey: string, resendApiKey?: string) {
  const nowIso = new Date().toISOString();
  const since = new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(); // at most once per ~day
  const { data: watches, error } = await admin
    .from('user_watchlist')
    .select('id, user_id, item_type, identifier, description, watch_until, last_checked_at')
    .eq('alert_email', true)
    .is('alerted_at', null)
    .or(`watch_until.is.null,watch_until.gt.${nowIso}`)
    .or(`last_checked_at.is.null,last_checked_at.lt.${since}`)
    .order('last_checked_at', { ascending: true, nullsFirst: true })
    .limit(60);
  if (error) {
    console.error('[watch] select failed', error);
    return { checked: 0, stolen: 0, emailed: 0, errors: 1 };
  }

  let checked = 0, stolen = 0, emailed = 0, errors = 0;
  const resend = resendApiKey ? new Resend(resendApiKey) : null;
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const queue = [...(watches ?? [])];
  const worker = async () => {
    while (queue.length) {
      const w = queue.shift()!;
      const out = await checkOne(admin, supabaseUrl, anonKey, w);
      checked++;
      if (out.status === 'error') errors++;
      const update: Record<string, unknown> = {
        last_checked_at: new Date().toISOString(),
        last_status: out.status,
        last_sources: out.sources,
      };

      if (out.status === 'stolen') {
        stolen++;
        const { data: profile } = await admin
          .from('profiles').select('email, full_name, email_notifications_enabled').eq('id', w.user_id).maybeSingle();
        if (resend && profile?.email && profile.email_notifications_enabled !== false) {
          try {
            const idSafe = esc(String(w.identifier));
            await resend.emails.send({
              from: 'SafeOrStolen <support@safeorstolen.com>',
              to: [profile.email],
              subject: '🚨 An item you are watching was reported stolen',
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h1 style="color: #ef4444;">Watched item reported stolen</h1>
                  <p>Hi ${esc(profile.full_name || 'there')},</p>
                  <p>Our daily re-check found a theft report for an item on your watchlist.</p>
                  <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px; margin: 20px 0;">
                    <p style="margin: 0;"><strong>Number:</strong> ${idSafe}</p>
                    ${w.description ? `<p style="margin: 8px 0 0 0;"><strong>Your note:</strong> ${esc(String(w.description))}</p>` : ''}
                    <p style="margin: 8px 0 0 0;"><strong>Found in:</strong> ${esc(out.source || 'a theft database')}</p>
                  </div>
                  <p><strong>What to do:</strong></p>
                  <ul>
                    <li>If you haven't bought it yet, don't.</li>
                    <li>Don't confront the seller.</li>
                    <li>Contact your local police non-emergency line with this number.</li>
                  </ul>
                  <p style="margin-top: 24px;">
                    <a href="https://safeorstolen.com/verify?q=${encodeURIComponent(String(w.identifier))}"
                       style="background: #f97316; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                      Run the check again
                    </a>
                  </p>
                  <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e5e5;">
                  <p style="color: #737373; font-size: 12px;">
                    You're getting this because this item is on your SafeOrStolen watchlist.
                    <br><a href="https://safeorstolen.com/dashboard" style="color: #737373;">Manage your watchlist</a>
                  </p>
                </div>`,
            });
            emailed++;
            update.alerted_at = new Date().toISOString();
          } catch (e) {
            console.error('[watch] email failed', e);
          }
        }
      }
      await admin.from('user_watchlist').update(update).eq('id', w.id);
    }
  };
  await Promise.all([worker(), worker(), worker()]);

  await admin.from('audit_logs').insert({
    action: 'WATCHLIST_DAILY_RECHECK',
    table_name: 'user_watchlist',
    new_values: { checked, stolen, emailed, errors, timestamp: new Date().toISOString() },
  });
  console.log(`[watch] sweep checked=${checked} stolen=${stolen} emailed=${emailed} errors=${errors}`);
  return { checked, stolen, emailed, errors };
}
