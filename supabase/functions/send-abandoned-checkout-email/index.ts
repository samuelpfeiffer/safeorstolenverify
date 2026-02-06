import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AbandonedCheckoutRequest {
  userId?: string;
  email?: string;
  planName?: string;
  discountCode?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { userId, email, planName, discountCode } = await req.json() as AbandonedCheckoutRequest;

    // Get user email if only userId provided
    let userEmail = email;
    if (!userEmail && userId) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('email')
        .eq('id', userId)
        .single();
      
      userEmail = profile?.email;
    }

    if (!userEmail) {
      return new Response(
        JSON.stringify({ error: "No email address found" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send abandoned checkout recovery email
    const emailResponse = await resend.emails.send({
      from: "SafeOrStolen <noreply@safeorstolen.com>",
      to: [userEmail],
      subject: "Your verification is waiting! Here's 20% off 🛡️",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">🛡️ SafeOrStolen</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">Protect yourself from stolen goods</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              <h2 style="color: #1f2937; margin: 0 0 15px;">You left something behind...</h2>
              
              <p style="color: #4b5563; line-height: 1.6;">
                We noticed you started to verify an item but didn't complete your checkout. 
                No worries – your verification is still waiting!
              </p>
              
              <!-- Warning Box -->
              <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <p style="color: #dc2626; margin: 0; font-weight: 600;">
                  ⚠️ Did you know? The average loss from buying stolen goods is $800+
                </p>
              </div>
              
              <!-- Discount Offer -->
              <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 12px; padding: 20px; margin: 25px 0; text-align: center;">
                <p style="color: #15803d; margin: 0 0 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Special Offer</p>
                <h3 style="color: #166534; margin: 0 0 10px; font-size: 24px;">Get 20% OFF</h3>
                <p style="color: #4b5563; margin: 0 0 15px;">Use code at checkout:</p>
                <div style="background: #166534; color: white; padding: 10px 20px; border-radius: 6px; display: inline-block; font-family: monospace; font-size: 20px; font-weight: bold;">
                  ${discountCode || 'COMEBACK20'}
                </div>
              </div>
              
              <!-- CTA Button -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://safeorstolen.com/pricing?discount=${discountCode || 'COMEBACK20'}" 
                   style="background: #dc2626; color: white; padding: 15px 40px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block;">
                  Complete Your Verification →
                </a>
              </div>
              
              <!-- Benefits -->
              <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 20px;">
                <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px;">What you get:</p>
                <ul style="color: #4b5563; padding-left: 20px; margin: 0;">
                  <li style="margin: 5px 0;">✓ Instant verification results</li>
                  <li style="margin: 5px 0;">✓ Check against 50+ databases</li>
                  <li style="margin: 5px 0;">✓ Detailed safety report</li>
                  <li style="margin: 5px 0;">✓ 30-day money-back guarantee</li>
                </ul>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                Questions? Reply to this email or visit <a href="https://safeorstolen.com/faq" style="color: #dc2626;">our FAQ</a>
              </p>
              <p style="color: #9ca3af; font-size: 11px; margin: 10px 0 0;">
                © 2026 SafeOrStolen. Carfax for Everything - Buy and Sell.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("[ABANDONED-EMAIL] Sent to:", userEmail, "Response:", emailResponse);

    // Log the email sent
    await supabase.from('audit_logs').insert({
      action: 'ABANDONED_CHECKOUT_EMAIL_SENT',
      table_name: 'checkout_sessions',
      user_id: userId || null,
      new_values: {
        email: userEmail,
        plan_name: planName,
        discount_code: discountCode || 'COMEBACK20',
        sent_at: new Date().toISOString()
      }
    });

    return new Response(
      JSON.stringify({ success: true, email: userEmail }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: any) {
    console.error("[ABANDONED-EMAIL] Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
