import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OutreachRequest {
  templateType: "feedback" | "value" | "lastchance";
  testEmail?: string; // For testing - send to specific email instead
  limit?: number; // Limit number of emails sent
}

// Email templates for user outreach
const getEmailTemplate = (templateType: string, userName?: string) => {
  const name = userName || "there";
  
  const templates = {
    feedback: {
      subject: "Quick question about SafeOrStolen",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a2e;">Hey ${name},</h2>
          
          <p style="color: #333; line-height: 1.6;">
            I noticed you signed up for SafeOrStolen but haven't upgraded yet. I'm genuinely curious:
          </p>
          
          <p style="color: #333; font-weight: bold; font-size: 18px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
            What would make you upgrade to a paid plan?
          </p>
          
          <p style="color: #333; line-height: 1.6;">
            Hit reply and let me know. Is it:
          </p>
          
          <ul style="color: #555; line-height: 1.8;">
            <li>The price too high?</li>
            <li>Not enough free searches to see the value?</li>
            <li>Missing a feature you need?</li>
            <li>Something else entirely?</li>
          </ul>
          
          <p style="color: #333; line-height: 1.6;">
            I read every reply personally and your feedback directly shapes what we build next.
          </p>
          
          <p style="color: #333; line-height: 1.6;">
            Thanks for trying SafeOrStolen - I genuinely want to make it valuable for you.
          </p>
          
          <p style="color: #333; margin-top: 30px;">
            — The SafeOrStolen Team<br>
            <span style="color: #666; font-size: 14px;">Carfax for Everything - Buy and Sell</span>
          </p>
        </div>
      `
    },
    value: {
      subject: "You left money on the table 💰",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a2e;">Hey ${name},</h2>
          
          <p style="color: #333; line-height: 1.6;">
            Last week, a SafeOrStolen user avoided buying a stolen MacBook Pro worth $2,400 on Facebook Marketplace.
          </p>
          
          <p style="color: #333; line-height: 1.6;">
            The seller had a convincing story. The price seemed fair. But our 3-second check revealed it was reported stolen 2 weeks earlier.
          </p>
          
          <p style="color: #333; font-weight: bold; font-size: 16px; padding: 20px; background: #fff3cd; border-left: 4px solid #ffc107; margin: 20px 0;">
            A $2.99 verification saved $2,400 + potential legal trouble.
          </p>
          
          <p style="color: #333; line-height: 1.6;">
            You've signed up but haven't used your free searches yet. Before your next marketplace purchase, take 3 seconds to check:
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://safeorstolen.com/verify" style="background: #10b981; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold;">
              Verify an Item Free →
            </a>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            Reply to this email if you have any questions. I answer every one.
          </p>
          
          <p style="color: #333; margin-top: 30px;">
            — The SafeOrStolen Team
          </p>
        </div>
      `
    },
    lastchance: {
      subject: "Your free searches expire soon",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a2e;">Hey ${name},</h2>
          
          <p style="color: #333; line-height: 1.6;">
            Just a heads up: your 2 free SafeOrStolen searches are about to expire.
          </p>
          
          <p style="color: #333; line-height: 1.6;">
            Before they're gone, you can verify:
          </p>
          
          <ul style="color: #555; line-height: 1.8;">
            <li>📱 Any phone (IMEI check)</li>
            <li>🚗 Any vehicle (VIN verification)</li>
            <li>💻 Any laptop or electronics (serial number)</li>
            <li>🔫 Firearms (ATF database)</li>
            <li>🚲 Bikes (BikeIndex registry)</li>
          </ul>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://safeorstolen.com/verify" style="background: #ef4444; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold;">
              Use Your Free Searches →
            </a>
          </div>
          
          <p style="color: #333; line-height: 1.6;">
            Or if SafeOrStolen isn't right for you, I'd genuinely love to know why. Just hit reply.
          </p>
          
          <p style="color: #333; margin-top: 30px;">
            — The SafeOrStolen Team
          </p>
        </div>
      `
    }
  };
  
  return templates[templateType as keyof typeof templates] || templates.feedback;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const { templateType, testEmail, limit = 10 }: OutreachRequest = await req.json();
    
    if (!templateType) {
      throw new Error("templateType is required (feedback, value, or lastchance)");
    }

    // If test email provided, just send to that
    if (testEmail) {
      const template = getEmailTemplate(templateType, "Test User");
      const result = await resend.emails.send({
        from: "SafeOrStolen <onboarding@resend.dev>",
        to: [testEmail],
        subject: template.subject,
        html: template.html,
      });
      
      return new Response(JSON.stringify({ 
        success: true, 
        message: `Test email sent to ${testEmail}`,
        result 
      }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Fetch free users who haven't upgraded
    const { data: freeUsers, error: fetchError } = await supabase
      .from("profiles")
      .select("id, email, full_name, created_at, subscription_tier, free_searches_used")
      .or("subscription_tier.is.null,subscription_tier.eq.free")
      .not("email", "is", null)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (fetchError) {
      throw new Error(`Failed to fetch users: ${fetchError.message}`);
    }

    if (!freeUsers || freeUsers.length === 0) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: "No free users found to contact",
        sent: 0 
      }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const results = [];
    let successCount = 0;
    let failCount = 0;

    for (const user of freeUsers) {
      if (!user.email) continue;
      
      const template = getEmailTemplate(templateType, user.full_name || undefined);
      
      try {
        const emailResult = await resend.emails.send({
          from: "SafeOrStolen <onboarding@resend.dev>",
          to: [user.email],
          subject: template.subject,
          html: template.html,
        });
        
        results.push({ 
          email: user.email, 
          status: "sent", 
          id: emailResult.data?.id 
        });
        successCount++;
        
        // Small delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 200));
        
      } catch (emailError: any) {
        results.push({ 
          email: user.email, 
          status: "failed", 
          error: emailError.message 
        });
        failCount++;
      }
    }

    // Log the outreach campaign
    await supabase.from("audit_logs").insert({
      action: "email_outreach_campaign",
      table_name: "profiles",
      new_values: {
        templateType,
        totalUsers: freeUsers.length,
        successCount,
        failCount,
        timestamp: new Date().toISOString()
      }
    });

    return new Response(JSON.stringify({
      success: true,
      message: `Outreach campaign completed`,
      totalUsers: freeUsers.length,
      sent: successCount,
      failed: failCount,
      results
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: any) {
    console.error("Error in send-user-outreach:", error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
