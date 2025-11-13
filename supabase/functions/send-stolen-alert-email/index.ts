import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not configured');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get pending notifications
    const { data: notifications, error: fetchError } = await supabase
      .from('stolen_item_notifications')
      .select(`
        *,
        stolen_items (
          item_type,
          brand,
          model,
          description,
          date_stolen,
          location,
          police_report_number
        )
      `)
      .eq('status', 'pending')
      .limit(10);

    if (fetchError) throw fetchError;

    if (!notifications || notifications.length === 0) {
      console.log('[STOLEN-ALERT] No pending notifications');
      return new Response(
        JSON.stringify({ success: true, message: 'No pending notifications', processed: 0 }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[STOLEN-ALERT] Processing ${notifications.length} notifications`);

    let sent = 0;
    let failed = 0;

    for (const notification of notifications) {
      try {
        const stolenItem = notification.stolen_items;
        
        const emailHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #dc2626; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
                .alert-box { background: #fee2e2; border-left: 4px solid #dc2626; padding: 15px; margin: 20px 0; }
                .details { background: white; padding: 15px; border-radius: 6px; margin: 15px 0; }
                .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
                .button { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">⚠️ Stolen Item Alert</h1>
                </div>
                <div class="content">
                  <p>Hi ${notification.user_name || 'there'},</p>
                  
                  <div class="alert-box">
                    <strong>Important Notice:</strong> An item you previously searched has been reported as stolen.
                  </div>

                  <p>You searched for <strong>${notification.searched_identifier}</strong> on ${new Date(notification.search_date).toLocaleDateString()}.</p>

                  <p>This item has now been reported stolen:</p>

                  <div class="details">
                    <h3 style="margin-top: 0;">Item Details</h3>
                    <p><strong>Type:</strong> ${stolenItem?.item_type || 'Unknown'}</p>
                    ${stolenItem?.brand ? `<p><strong>Brand:</strong> ${stolenItem.brand}</p>` : ''}
                    ${stolenItem?.model ? `<p><strong>Model:</strong> ${stolenItem.model}</p>` : ''}
                    <p><strong>Description:</strong> ${stolenItem?.description || 'N/A'}</p>
                    <p><strong>Date Stolen:</strong> ${stolenItem?.date_stolen ? new Date(stolenItem.date_stolen).toLocaleDateString() : 'Unknown'}</p>
                    <p><strong>Location:</strong> ${stolenItem?.location || 'Unknown'}</p>
                    ${stolenItem?.police_report_number ? `<p><strong>Police Report:</strong> ${stolenItem.police_report_number}</p>` : ''}
                  </div>

                  <h3>What Should You Do?</h3>
                  <ul>
                    <li>If you have this item, <strong>do not purchase or accept it</strong></li>
                    <li>If you've already acquired it, contact local law enforcement immediately</li>
                    <li>Report any information to the police using the reference number above</li>
                    <li>Do not confront the seller - contact authorities instead</li>
                  </ul>

                  <center>
                    <a href="https://safeorstolen.com" class="button">Check More Items</a>
                  </center>
                </div>
                <div class="footer">
                  <p>This is an automated alert from SafeOrStolen.com</p>
                  <p>Stay safe and help prevent stolen property transactions</p>
                </div>
              </div>
            </body>
          </html>
        `;

        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'SafeOrStolen Alerts <alerts@safeorstolen.com>',
            to: [notification.user_email],
            subject: `⚠️ Stolen Item Alert: ${notification.searched_identifier}`,
            html: emailHtml,
          }),
        });

        if (!emailResponse.ok) {
          const errorText = await emailResponse.text();
          throw new Error(`Resend API error: ${errorText}`);
        }

        // Mark as sent
        await supabase
          .from('stolen_item_notifications')
          .update({ 
            status: 'sent',
            sent_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
          .eq('id', notification.id);

        sent++;
        console.log(`[STOLEN-ALERT] Sent to ${notification.user_email}`);

      } catch (error) {
        console.error(`[STOLEN-ALERT] Failed for notification ${notification.id}:`, error);
        
        // Mark as failed
        await supabase
          .from('stolen_item_notifications')
          .update({ 
            status: 'failed',
            error_message: error.message,
            updated_at: new Date().toISOString()
          })
          .eq('id', notification.id);

        failed++;
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Processed ${notifications.length} notifications`,
        sent,
        failed
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[STOLEN-ALERT] Error:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
