import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('[CONSUME-CREDIT] Starting credit consumption');
    
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      console.error('[CONSUME-CREDIT] No authorization header');
      return new Response(
        JSON.stringify({ error: "No authorization header" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const jwt = authHeader.replace("Bearer ", "");
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(jwt);

    if (userError || !user) {
      console.error('[CONSUME-CREDIT] Invalid token:', userError);
      return new Response(
        JSON.stringify({ error: "Invalid token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log('[CONSUME-CREDIT] User authenticated:', user.id);

    // SECURITY FIX: Use atomic UPDATE to prevent race condition
    // This ensures only one concurrent request can deduct a credit
    const { data: updatedProfile, error: updateError } = await supabaseClient
      .from('profiles')
      .update({ credit_balance: supabaseClient.raw('credit_balance - 1') })
      .eq('id', user.id)
      .gt('credit_balance', 0) // Only update if balance > 0
      .select('credit_balance')
      .single();

    if (updateError) {
      console.error('[CONSUME-CREDIT] Failed to update balance:', updateError);
      return new Response(
        JSON.stringify({ error: "Failed to update balance" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!updatedProfile) {
      console.log('[CONSUME-CREDIT] Insufficient credits (atomic check failed)');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Insufficient credits",
          balance: 0 
        }),
        { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const newBalance = updatedProfile.credit_balance;
    console.log('[CONSUME-CREDIT] Current balance after deduction:', newBalance);

    // Log the transaction
    const { error: transactionError } = await supabaseClient
      .from('credit_transactions')
      .insert({
        user_id: user.id,
        transaction_type: 'usage',
        amount: -1,
        balance_after: newBalance,
        description: 'Verification check'
      });

    if (transactionError) {
      console.error('[CONSUME-CREDIT] Failed to log transaction:', transactionError);
    }

    console.log('[CONSUME-CREDIT] Credit consumed successfully, new balance:', newBalance);

    return new Response(
      JSON.stringify({ 
        success: true, 
        balance: newBalance,
        message: 'Credit consumed successfully'
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error('[CONSUME-CREDIT] Error:', error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
