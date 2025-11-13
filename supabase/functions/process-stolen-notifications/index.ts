import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  console.log('[process-stolen-notifications] Function invoked');

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase environment variables");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get pending notifications (limit to 50 per batch)
    const { data: pendingNotifications, error: fetchError } = await supabase
      .from('stolen_item_notifications')
      .select('*')
      .eq('status', 'pending')
      .order('created_at', { ascending: true })
      .limit(50);

    if (fetchError) {
      throw new Error(`Error fetching notifications: ${fetchError.message}`);
    }

    if (!pendingNotifications || pendingNotifications.length === 0) {
      console.log('[process-stolen-notifications] No pending notifications found');
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'No pending notifications',
          processed: 0 
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    console.log(`[process-stolen-notifications] Processing ${pendingNotifications.length} notifications`);

    let successCount = 0;
    let failureCount = 0;

    // Process each notification
    for (const notification of pendingNotifications) {
      try {
        console.log(`[process-stolen-notifications] Sending notification ${notification.id}`);

        // Call the send-stolen-item-alert edge function
        const { error: sendError } = await supabase.functions.invoke('send-stolen-item-alert', {
          body: {
            notificationId: notification.id,
            userEmail: notification.user_email,
            userName: notification.user_name,
            searchedIdentifier: notification.searched_identifier,
            searchDate: notification.search_date,
            notificationData: notification.notification_data
          }
        });

        if (sendError) {
          console.error(`[process-stolen-notifications] Error sending notification ${notification.id}:`, sendError);
          failureCount++;
          
          // Update status to failed
          await supabase.rpc('update_notification_status', {
            notification_id: notification.id,
            new_status: 'failed',
            error_msg: sendError.message
          });
        } else {
          console.log(`[process-stolen-notifications] Successfully sent notification ${notification.id}`);
          successCount++;
        }

        // Add a small delay between emails to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));

      } catch (error: any) {
        console.error(`[process-stolen-notifications] Error processing notification ${notification.id}:`, error);
        failureCount++;
        
        // Update status to failed
        await supabase.rpc('update_notification_status', {
          notification_id: notification.id,
          new_status: 'failed',
          error_msg: error.message
        });
      }
    }

    console.log(`[process-stolen-notifications] Batch complete: ${successCount} sent, ${failureCount} failed`);

    return new Response(
      JSON.stringify({ 
        success: true,
        processed: pendingNotifications.length,
        sent: successCount,
        failed: failureCount
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
    console.error("[process-stolen-notifications] Error:", error);
    
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
