import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

interface WelcomeEmailRequest {
  email: string;
  fullName?: string;
  userId: string;
}

const handler = async (req: Request): Promise<Response> => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const { email, fullName, userId }: WelcomeEmailRequest = await req.json();

    if (!email || !userId) {
      return new Response(JSON.stringify({ error: "Email and userId are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log(`[WELCOME-EMAIL] Sending welcome email to: ${email}`);

    const firstName = fullName ? fullName.split(' ')[0] : 'there';
    
    const emailResponse = await resend.emails.send({
      from: "SafeOrStolen <welcome@safeorstolen.com>",
      to: [email],
      subject: "🛡️ Welcome to SafeOrStolen - Your Protection Starts Now!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to SafeOrStolen</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); padding: 40px 20px; text-align: center;">
              <div style="color: white; font-size: 32px; font-weight: bold; margin-bottom: 10px;">
                🛡️ SafeOrStolen
              </div>
              <div style="color: rgba(255,255,255,0.9); font-size: 18px;">
                Your Protection Against Stolen Goods
              </div>
            </div>

            <!-- Welcome Message -->
            <div style="padding: 40px 30px;">
              <h1 style="color: #1f2937; font-size: 28px; margin-bottom: 20px; text-align: center;">
                Welcome ${firstName}! 🎉
              </h1>
              
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                Thank you for joining SafeOrStolen! You've just taken the first step toward safer buying and selling online.
              </p>

              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                Here's what you can do right now:
              </p>

              <!-- Next Steps -->
              <div style="background-color: #f9fafb; border-left: 4px solid #FF6B35; padding: 20px; margin-bottom: 30px;">
                <h3 style="color: #1f2937; margin-top: 0; margin-bottom: 15px;">🚀 Your Next Steps:</h3>
                <ul style="color: #4b5563; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 10px;"><strong>Verify Your First Item:</strong> Search for any IMEI, VIN, or serial number</li>
                  <li style="margin-bottom: 10px;"><strong>Bookmark Our Site:</strong> Keep SafeOrStolen handy for all your purchases</li>
                  <li style="margin-bottom: 10px;"><strong>Explore Premium Features:</strong> Get unlimited verifications with our paid plans</li>
                  <li style="margin-bottom: 10px;"><strong>Join Our Community:</strong> Share your success stories and help others</li>
                </ul>
              </div>

              <!-- CTA Button -->
              <div style="text-align: center; margin-bottom: 30px;">
                <a href="https://safeorstolen.com?welcome=true" 
                   style="display: inline-block; background-color: #FF6B35; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
                  Start Verifying Items →
                </a>
              </div>

              <!-- Free Searches -->
              <div style="background-color: #ecfdf5; border: 1px solid #d1fae5; border-radius: 6px; padding: 20px; margin-bottom: 30px; text-align: center;">
                <h4 style="color: #065f46; margin-top: 0; margin-bottom: 10px;">🎁 You Have 4 Free Searches!</h4>
                <p style="color: #047857; margin: 0; font-size: 14px;">
                  Perfect for testing our service before choosing a subscription plan.
                </p>
              </div>

              <!-- Tips Section -->
              <div style="border-top: 1px solid #e5e7eb; padding-top: 25px;">
                <h3 style="color: #1f2937; margin-bottom: 15px;">💡 Pro Tips for Safe Buying:</h3>
                <ul style="color: #4b5563; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">Always verify serial numbers before making expensive purchases</li>
                  <li style="margin-bottom: 8px;">Check IMEI numbers for all mobile devices</li>
                  <li style="margin-bottom: 8px;">Verify VIN numbers when buying used vehicles</li>
                  <li style="margin-bottom: 8px;">Trust your instincts - if a deal seems too good to be true, verify first</li>
                </ul>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0; margin-bottom: 15px;">
                Need help? Reply to this email or visit our support center.
              </p>
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                SafeOrStolen - Protecting buyers and sellers worldwide<br>
                © ${new Date().getFullYear()} SafeOrStolen. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log(`[WELCOME-EMAIL] Email sent successfully:`, emailResponse);

    // Log the welcome email in audit logs
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    await supabase
      .from('audit_logs')
      .insert({
        user_id: userId,
        action: 'WELCOME_EMAIL_SENT',
        table_name: 'users',
        new_values: {
          email: email,
          email_id: emailResponse.data?.id,
          timestamp: new Date().toISOString()
        }
      });

    return new Response(JSON.stringify({ 
      success: true, 
      emailId: emailResponse.data?.id,
      message: 'Welcome email sent successfully'
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: any) {
    console.error("[WELCOME-EMAIL] Error sending welcome email:", error);
    return createErrorResponse(error, { functionName: 'send-welcome-email' }, corsHeaders);
  }
};

serve(handler);