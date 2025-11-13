import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  notificationId: string;
  userEmail: string;
  userName: string;
  searchedIdentifier: string;
  searchDate: string;
  notificationData: {
    item_type: string;
    brand: string;
    model: string;
    imei?: string;
    vin?: string;
    serial_number?: string;
    date_stolen?: string;
    location?: string;
    police_report_number?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  console.log('[send-stolen-item-alert] Function invoked');

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase environment variables");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { notificationId, userEmail, userName, searchedIdentifier, searchDate, notificationData }: NotificationRequest = await req.json();

    console.log(`[send-stolen-item-alert] Processing notification ${notificationId} for ${userEmail}`);

    // Build item description
    const itemDescription = [
      notificationData.brand,
      notificationData.model,
      notificationData.item_type
    ].filter(Boolean).join(" ");

    const identifierType = notificationData.imei ? "IMEI" : 
                          notificationData.vin ? "VIN" : 
                          "Serial Number";
    
    const identifierValue = notificationData.imei || 
                           notificationData.vin || 
                           notificationData.serial_number || 
                           searchedIdentifier;

    // Format dates
    const searchDateFormatted = new Date(searchDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const stolenDateFormatted = notificationData.date_stolen 
      ? new Date(notificationData.date_stolen).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      : 'Unknown';

    // Create email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .alert-box { background: #fee; border-left: 4px solid #c00; padding: 20px; margin: 20px 0; border-radius: 4px; }
            .header { background: #c00; color: white; padding: 20px; text-align: center; border-radius: 4px 4px 0 0; }
            .content { background: white; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 4px 4px; }
            .detail-box { background: #f9f9f9; padding: 15px; margin: 15px 0; border-radius: 4px; border: 1px solid #eee; }
            .detail-label { font-weight: bold; color: #666; margin-bottom: 5px; }
            .detail-value { color: #333; margin-bottom: 10px; }
            .warning { color: #c00; font-weight: bold; margin: 20px 0; padding: 15px; background: #fee; border-radius: 4px; }
            .button { display: inline-block; background: #0066cc; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">⚠️ Stolen Item Alert</h1>
            </div>
            <div class="content">
              <p>Hello ${userName || 'there'},</p>
              
              <div class="alert-box">
                <strong>IMPORTANT:</strong> An item you previously verified on SafeOrStolen.com has been reported as stolen.
              </div>

              <p>On <strong>${searchDateFormatted}</strong>, you verified the following item:</p>

              <div class="detail-box">
                <div class="detail-label">${identifierType}:</div>
                <div class="detail-value" style="font-family: monospace; font-size: 16px;">${identifierValue}</div>
                
                ${itemDescription ? `
                  <div class="detail-label">Item:</div>
                  <div class="detail-value">${itemDescription}</div>
                ` : ''}
              </div>

              <p><strong>This item has now been reported stolen:</strong></p>

              <div class="detail-box">
                ${notificationData.date_stolen ? `
                  <div class="detail-label">Date Reported Stolen:</div>
                  <div class="detail-value">${stolenDateFormatted}</div>
                ` : ''}
                
                ${notificationData.location ? `
                  <div class="detail-label">Location:</div>
                  <div class="detail-value">${notificationData.location}</div>
                ` : ''}
                
                ${notificationData.police_report_number ? `
                  <div class="detail-label">Police Report #:</div>
                  <div class="detail-value">${notificationData.police_report_number}</div>
                ` : ''}
              </div>

              <div class="warning">
                <strong>⚠️ IMPORTANT ACTIONS:</strong>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li>If you purchased this item, contact your local police department immediately</li>
                  <li>If you were considering purchasing this item, DO NOT proceed with the transaction</li>
                  <li>Report the seller to the platform where you found this item</li>
                  <li>Keep this email as evidence if needed for legal purposes</li>
                </ul>
              </div>

              <p style="text-align: center;">
                <a href="https://safeorstolen.com/dashboard" class="button">
                  View Your Search History
                </a>
              </p>

              <p style="color: #666; font-size: 14px; margin-top: 30px;">
                This is an automated alert from SafeOrStolen.com. We send these notifications to protect buyers from purchasing stolen property.
              </p>

              <p style="color: #666; font-size: 14px;">
                To stop receiving these alerts, you can disable email notifications in your 
                <a href="https://safeorstolen.com/settings">account settings</a>.
              </p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} SafeOrStolen.com - Protecting Buyers and Sellers</p>
              <p>
                <a href="https://safeorstolen.com/how-it-works" style="color: #0066cc;">How It Works</a> | 
                <a href="https://safeorstolen.com/contact" style="color: #0066cc;">Contact Us</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email via Resend
    console.log(`[send-stolen-item-alert] Sending email to ${userEmail}`);
    
    const emailResponse = await resend.emails.send({
      from: "SafeOrStolen Alerts <alerts@safeorstolen.com>",
      to: [userEmail],
      subject: `⚠️ ALERT: Item You Verified Was Reported Stolen - ${identifierType} ${identifierValue.substring(0, 10)}...`,
      html: emailHtml,
    });

    console.log("[send-stolen-item-alert] Email sent successfully:", emailResponse);

    // Update notification status to 'sent'
    const { error: updateError } = await supabase.rpc('update_notification_status', {
      notification_id: notificationId,
      new_status: 'sent',
      error_msg: null
    });

    if (updateError) {
      console.error('[send-stolen-item-alert] Error updating notification status:', updateError);
      // Don't fail the request if status update fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        emailId: emailResponse.id,
        notificationId 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("[send-stolen-item-alert] Error:", error);
    
    // Try to update notification status to 'failed'
    try {
      const supabaseUrl = Deno.env.get("SUPABASE_URL");
      const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
      
      if (supabaseUrl && supabaseServiceKey) {
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        const body = await req.json();
        
        await supabase.rpc('update_notification_status', {
          notification_id: body.notificationId,
          new_status: 'failed',
          error_msg: error.message
        });
      }
    } catch (updateError) {
      console.error('[send-stolen-item-alert] Error updating failed status:', updateError);
    }

    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
