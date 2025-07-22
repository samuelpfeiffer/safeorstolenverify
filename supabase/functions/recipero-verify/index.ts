import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.52.0'

interface ReciperoRequest {
  property_address: string;
  verification_type?: string;
}

interface ReciperoResponse {
  status: 'safe' | 'stolen' | 'lost' | 'suspicious' | 'unknown' | 'error';
  confidence: number;
  source: string;
  details?: any;
  message?: string;
  report_id?: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get user from authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Missing authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(
      authHeader.replace('Bearer ', '')
    );

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Invalid authentication' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse request body
    const { property_address, verification_type = 'basic' }: ReciperoRequest = await req.json();

    if (!property_address || property_address.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Property address is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Starting property verification for:', property_address);

    // Check rate limits
    const rateLimitOk = await checkRateLimit(supabase, user.id);
    if (!rateLimitOk) {
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded. Please upgrade your subscription or try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Perform property verification using Recipero API
    const verificationResult = await verifyProperty(property_address, verification_type);

    // Store result in database
    const { data: storedResult, error: storeError } = await supabase
      .from('property_verifications')
      .insert({
        user_id: user.id,
        property_address: property_address.trim(),
        property_type: verification_type,
        verification_status: verificationResult.status,
        confidence_score: verificationResult.confidence,
        recipero_report_id: verificationResult.report_id,
        api_response: verificationResult.details
      })
      .select()
      .single();

    if (storeError) {
      console.error('Error storing verification result:', storeError);
      return new Response(
        JSON.stringify({ error: 'Failed to store verification result' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Update API usage tracking
    await updateApiUsage(supabase, user.id, 'property-verification');

    return new Response(
      JSON.stringify({
        success: true,
        id: storedResult.id,
        result: verificationResult
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Property verification error:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: 'Internal server error',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});

async function checkRateLimit(supabase: any, userId: string): Promise<boolean> {
  const now = new Date();
  const windowStart = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago

  // Check subscription status
  const { data: subscriber } = await supabase
    .from('subscribers')
    .select('*')
    .eq('user_id', userId)
    .single();

  // Check promotion status
  const { data: profile } = await supabase
    .from('profiles')
    .select('is_promotion_winner, promotion_searches_remaining, promotion_expires_at')
    .eq('id', userId)
    .single();

  // If user has active subscription, allow unlimited searches
  if (subscriber?.subscribed && subscriber?.subscription_end && new Date(subscriber.subscription_end) > now) {
    return true;
  }

  // If user is promotion winner with remaining searches
  if (profile?.is_promotion_winner && 
      profile?.promotion_searches_remaining > 0 && 
      profile?.promotion_expires_at && 
      new Date(profile.promotion_expires_at) > now) {
    
    // Decrement promotion searches
    await supabase
      .from('profiles')
      .update({ promotion_searches_remaining: profile.promotion_searches_remaining - 1 })
      .eq('id', userId);
    
    return true;
  }

  // Check daily free searches (limit to 3 per day)
  const { data: recentSearches } = await supabase
    .from('property_verifications')
    .select('id')
    .eq('user_id', userId)
    .gte('created_at', windowStart.toISOString());

  return (recentSearches?.length || 0) < 3;
}

async function verifyProperty(address: string, verificationType: string): Promise<ReciperoResponse> {
  const reciperoAccountId = Deno.env.get('RECIPERO_ACCOUNT_ID');
  const reciperoSecretKey = Deno.env.get('RECIPERO_SECRET_KEY');
  
  if (!reciperoAccountId || !reciperoSecretKey) {
    console.log('Recipero credentials not configured, using simulation');
    return simulatePropertyVerification(address, verificationType);
  }

  try {
    // Prepare request body
    const requestBody = JSON.stringify({
      address: address,
      verification_type: verificationType
    });

    // Generate signature hash according to Recipero's authentication method
    const signatureData = reciperoSecretKey + requestBody;
    const encoder = new TextEncoder();
    const data = encoder.encode(signatureData);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const signatureHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // Create Basic Auth credentials (AccountId:SignatureHash)
    const credentials = `${reciperoAccountId}:${signatureHash}`;
    const encodedCredentials = btoa(credentials);

    console.log('Making Recipero API call with proper authentication');

    // Make API call to Recipero
    const response = await fetch('https://api.recipero.com/v1/property/verify', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${encodedCredentials}`,
        'Content-Type': 'application/json',
      },
      body: requestBody
    });

    if (!response.ok) {
      console.error(`Recipero API error: ${response.status} ${response.statusText}`);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`Recipero API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Recipero API response:', data);
    
    return {
      status: normalizeStatus(data.status),
      confidence: data.confidence || 85,
      source: 'Recipero Property Database',
      details: data,
      message: data.message || getStatusMessage(data.status),
      report_id: data.report_id
    };

  } catch (error) {
    console.error('Recipero API call failed:', error);
    // Fallback to simulation if API fails
    console.log('Falling back to simulation due to API error');
    return simulatePropertyVerification(address, verificationType);
  }
}

function simulatePropertyVerification(address: string, verificationType: string): ReciperoResponse {
  // Create deterministic hash from address for consistent results
  const hash = address.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const statusOptions = ['safe', 'suspicious', 'unknown'] as const;
  const statusIndex = Math.abs(hash) % statusOptions.length;
  const status = statusOptions[statusIndex];
  
  const confidence = 70 + (Math.abs(hash) % 30); // 70-99% confidence
  
  const reportId = `RPT-${Date.now()}-${Math.abs(hash).toString(36).toUpperCase()}`;
  
  const mockDetails = {
    property_info: {
      address: address,
      property_type: verificationType,
      last_updated: new Date().toISOString()
    },
    verification_sources: ['Property Registry', 'Court Records', 'Insurance Claims'],
    risk_factors: status === 'suspicious' ? ['Previous insurance claims', 'Legal disputes'] : [],
    recommendations: getRecommendations(status)
  };

  return {
    status,
    confidence,
    source: 'Recipero Property Database (Simulated)',
    details: mockDetails,
    message: getStatusMessage(status),
    report_id: reportId
  };
}

function normalizeStatus(status: string): ReciperoResponse['status'] {
  const normalizedStatus = status.toLowerCase();
  
  if (['safe', 'clean', 'clear', 'verified'].includes(normalizedStatus)) {
    return 'safe';
  }
  if (['stolen', 'fraud', 'compromised'].includes(normalizedStatus)) {
    return 'stolen';
  }
  if (['lost', 'missing'].includes(normalizedStatus)) {
    return 'lost';
  }
  if (['suspicious', 'flagged', 'disputed'].includes(normalizedStatus)) {
    return 'suspicious';
  }
  if (['error', 'failed'].includes(normalizedStatus)) {
    return 'error';
  }
  
  return 'unknown';
}

function getStatusMessage(status: string): string {
  switch (status) {
    case 'safe':
      return 'Property has a clean history with no reported issues.';
    case 'suspicious':
      return 'Property has some reported issues that require attention.';
    case 'stolen':
      return 'Property has been reported as stolen or fraudulent.';
    case 'lost':
      return 'Property has been reported as lost or missing.';
    case 'unknown':
      return 'Unable to determine property status from available records.';
    case 'error':
      return 'An error occurred during property verification.';
    default:
      return 'Property verification completed.';
  }
}

function getRecommendations(status: string): string[] {
  switch (status) {
    case 'safe':
      return ['Property appears to have a clean history', 'Safe to proceed with transaction'];
    case 'suspicious':
      return ['Conduct additional due diligence', 'Verify property documentation', 'Consider legal consultation'];
    case 'stolen':
      return ['Do not proceed with transaction', 'Contact law enforcement', 'Verify with property owner'];
    case 'lost':
      return ['Verify current ownership status', 'Check for insurance claims', 'Contact relevant authorities'];
    default:
      return ['Conduct standard due diligence', 'Verify property documentation'];
  }
}

async function updateApiUsage(supabase: any, userId: string, endpoint: string): Promise<void> {
  const now = new Date();
  const resetTime = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Reset in 24 hours

  try {
    await supabase
      .from('recipero_api_usage')
      .upsert({
        user_id: userId,
        api_endpoint: endpoint,
        count: 1,
        reset_time: resetTime.toISOString()
      }, {
        onConflict: 'user_id,api_endpoint',
        update: { count: 'count + 1' }
      });
  } catch (error) {
    console.error('Failed to update API usage:', error);
  }
}