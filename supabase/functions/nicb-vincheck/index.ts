import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { validateVIN } from '../_shared/validation.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NICBLookupRequest {
  vin: string;
  requestType?: 'api' | 'redirect';
}

interface NICBLookupResponse {
  status: 'stolen' | 'salvage' | 'safe' | 'error' | 'not_found' | 'redirect_required';
  message: string;
  details?: {
    category?: string;
    lastUpdate?: string;
    nicbUrl?: string;
    reportDate?: string;
    theftRecord?: boolean;
    salvageRecord?: boolean;
  };
  source: 'nicb_vincheck';
  timestamp: string;
  redirectUrl?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('Missing authorization header');
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      throw new Error('Unauthorized');
    }

    const { vin, requestType = 'api' }: NICBLookupRequest = await req.json();

    // Server-side VIN validation using shared utility
    const validation = validateVIN(vin);
    if (!validation.success) {
      return new Response(
        JSON.stringify({
          status: 'error',
          message: validation.error,
          source: 'nicb_vincheck',
          timestamp: new Date().toISOString()
        } as NICBLookupResponse),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const sanitizedVin = validation.data!;
    console.log(`[NICB-VINCHECK] User ${user.id} requesting VIN check for: ${sanitizedVin}`);

    // Check cache first
    const cacheKey = `nicb_vin_${sanitizedVin}`;
    const { data: cachedResult } = await supabase
      .from('checkmend_verification_cache')
      .select('*')
      .eq('cache_key', cacheKey)
      .gt('expires_at', new Date().toISOString())
      .single();

    if (cachedResult) {
      console.log('[NICB-VINCHECK] Cache hit');
      return new Response(
        JSON.stringify(cachedResult.verification_data),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if NICB API key is available
    const nicbApiKey = Deno.env.get('NICB_API_KEY');
    
    let lookupResult: NICBLookupResponse;

    if (!nicbApiKey || requestType === 'redirect') {
      // No API key or manual redirect requested
      // Provide redirect URL to official NICB VINCheck (complies with NICB Terms of Use)
      const nicbUrl = `https://www.nicb.org/vincheck?vin=${sanitizedVin}`;
      
      lookupResult = {
        status: 'redirect_required',
        message: 'NICB VINCheck requires manual verification. Click the link below to check this VIN on the official NICB website.',
        details: {
          nicbUrl: nicbUrl,
          lastUpdate: new Date().toISOString()
        },
        source: 'nicb_vincheck',
        timestamp: new Date().toISOString(),
        redirectUrl: nicbUrl
      };

      console.log('[NICB-VINCHECK] No API key - providing redirect URL');
    } else {
      // API key available - make API call to NICB
      // Note: Contact communications@nicb.org for partnership approval
      
      try {
        // Replace with actual NICB API endpoint once partnership is approved
        const nicbApiUrl = Deno.env.get('NICB_API_ENDPOINT') || 'https://api.nicb.org/vincheck';
        
        const response = await fetch(nicbApiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${nicbApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ vin: sanitizedVin })
        });

        if (!response.ok) {
          throw new Error(`NICB API error: ${response.status}`);
        }

        const nicbData = await response.json();

        // Parse NICB response
        lookupResult = {
          status: nicbData.found ? (nicbData.category === 'theft' ? 'stolen' : 'salvage') : 'safe',
          message: nicbData.found 
            ? `Vehicle found in NICB database - ${nicbData.category}` 
            : 'No theft or salvage records found in NICB database',
          details: {
            category: nicbData.category,
            lastUpdate: nicbData.last_update,
            reportDate: nicbData.report_date,
            theftRecord: nicbData.category === 'theft',
            salvageRecord: nicbData.category === 'salvage'
          },
          source: 'nicb_vincheck',
          timestamp: new Date().toISOString()
        };

        console.log(`[NICB-VINCHECK] API check completed: ${lookupResult.status}`);
      } catch (apiError) {
        console.error('[NICB-VINCHECK] API call failed, falling back to redirect:', apiError);
        
        // Fallback to redirect method if API fails
        const nicbUrl = `https://www.nicb.org/vincheck?vin=${sanitizedVin}`;
        lookupResult = {
          status: 'redirect_required',
          message: 'NICB API temporarily unavailable. Please verify manually on the official NICB website.',
          details: {
            nicbUrl: nicbUrl,
            lastUpdate: new Date().toISOString()
          },
          source: 'nicb_vincheck',
          timestamp: new Date().toISOString(),
          redirectUrl: nicbUrl
        };
      }
    }

    // Store in cache (24 hour expiration per NICB rate limits)
    await supabase
      .from('checkmend_verification_cache')
      .insert({
        cache_key: cacheKey,
        serial_number: sanitizedVin,
        item_type: 'vehicle',
        verification_data: lookupResult,
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      });

    // Log the verification
    await supabase
      .from('verification_results')
      .insert({
        user_id: user.id,
        serial_number: sanitizedVin,
        item_type: 'vehicle',
        status: lookupResult.status,
        source: 'nicb_vincheck',
        verification_data: lookupResult
      });

    // Log audit trail
    await supabase
      .from('audit_logs')
      .insert({
        user_id: user.id,
        action: 'NICB_VINCHECK',
        table_name: 'verification_results',
        new_values: {
          vin: sanitizedVin,
          result: lookupResult.status,
          method: nicbApiKey ? 'api' : 'redirect',
          timestamp: new Date().toISOString()
        }
      });

    console.log(`[NICB-VINCHECK] Completed successfully: ${lookupResult.status}`);

    return new Response(
      JSON.stringify(lookupResult),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600' 
        } 
      }
    );

  } catch (error) {
    console.error('[NICB-VINCHECK] Error:', error);
    
    return new Response(
      JSON.stringify({ 
        status: 'error',
        message: error.message || 'An error occurred during NICB VINCheck lookup',
        source: 'nicb_vincheck',
        timestamp: new Date().toISOString()
      }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
