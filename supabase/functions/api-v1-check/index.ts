import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

interface CheckRequest {
  identifier: string;
  type: 'imei' | 'vin' | 'serial';
}

interface CheckResponse {
  status: 'safe' | 'lost' | 'stolen' | 'unknown';
  message: string;
  confidence?: number;
  metadata?: Record<string, any>;
}

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }), 
      { 
        status: 405, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    const apiKey = req.headers.get('X-API-Key');
    
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'API key required in X-API-Key header' }), 
        { 
          status: 401, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Create Supabase client with service role key for API operations
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get request body
    const body: CheckRequest = await req.json();
    
    if (!body.identifier || !body.type) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: identifier and type' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Validate API key and track usage
    const { data: validationResult } = await supabase.rpc('validate_and_track_api_usage', {
      p_api_key: apiKey,
      p_endpoint: '/api/v1/check',
      p_identifier: body.identifier,
      p_ip_address: req.headers.get('cf-connecting-ip') || req.headers.get('x-forwarded-for') || 'unknown',
      p_user_agent: req.headers.get('user-agent') || 'unknown'
    });

    if (!validationResult?.valid) {
      return new Response(
        JSON.stringify({ error: validationResult?.error || 'Invalid API key' }), 
        { 
          status: 401, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Look up the item in our verification database
    const { data: itemData, error: itemError } = await supabase
      .from('verification_items')
      .select('status, message, metadata, verified_at')
      .eq('identifier', body.identifier)
      .eq('item_type', body.type)
      .single();

    let response: CheckResponse;

    if (itemError || !itemData) {
      // Item not found in database - return unknown status
      response = {
        status: 'unknown',
        message: 'No records found for this item. This does not guarantee the item is safe.',
        confidence: 0,
        metadata: {
          checked_at: new Date().toISOString(),
          database_coverage: 'partial'
        }
      };
    } else {
      // Item found in database
      const confidence = itemData.status === 'unknown' ? 0 : 
                        itemData.status === 'safe' ? 85 : 95;
      
      response = {
        status: itemData.status,
        message: itemData.message || `Item status: ${itemData.status}`,
        confidence,
        metadata: {
          verified_at: itemData.verified_at,
          checked_at: new Date().toISOString(),
          ...itemData.metadata
        }
      };
    }

    // Update API usage tracking with response status
    await supabase
      .from('api_usage_tracking')
      .update({ 
        response_status: 200,
        response_time_ms: Date.now() - parseInt(req.headers.get('x-request-start') || '0')
      })
      .eq('id', validationResult.usage_id);

    // Send to Zapier webhook for lead capture if configured
    const zapierWebhook = Deno.env.get('ZAPIER_API_CHECK_WEBHOOK');
    if (zapierWebhook) {
      try {
        await fetch(zapierWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            identifier: body.identifier,
            type: body.type,
            status: response.status,
            timestamp: new Date().toISOString(),
            api_key_id: validationResult.api_key_id,
            source: 'SafeOrStolen API'
          })
        });
      } catch (zapierError) {
        console.error('Failed to send to Zapier:', zapierError);
      }
    }

    return new Response(
      JSON.stringify(response),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('API Error:', error);
    return createErrorResponse(error, { functionName: 'api-v1-check' }, corsHeaders);
  }
});