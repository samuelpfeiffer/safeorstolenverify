import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.52.0'

interface BusinessUnitRequest {
  legalName: string;
  reportName: string;
}

interface StoreRequest {
  businessUnitId: number;
  reportName: string;
  legalName?: string;
  city?: string;
  county?: string;
  state?: string;
  zipcode?: string;
  country?: string;
  email?: string;
  type?: 'live' | 'test';
}

interface ClaimSubmissionRequest {
  claimtype: 'logged' | 'settled';
  itemcategory: number;
  serials: string[];
  storeid: number;
  itemdescription: string;
  make: string;
  model: string;
  claimdate: string; // YYYY-MM-DD HH:MM:SS
  claimreference: string;
  claimitemnumber?: string;
  claimnotes?: string;
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
    const requestBody = await req.json();
    const { action } = requestBody;

    let result;

    switch (action) {
      case 'create_business_unit':
        result = await createBusinessUnit(requestBody.legalName, requestBody.reportName);
        break;
      
      case 'create_store':
        result = await createStore(
          requestBody.businessUnitId, 
          requestBody.reportName,
          requestBody.legalName,
          requestBody.city,
          requestBody.county,
          requestBody.state,
          requestBody.zipcode,
          requestBody.country,
          requestBody.email,
          requestBody.type
        );
        break;
      
      case 'list_business_units':
        result = await listBusinessUnits();
        break;
      
      case 'list_stores':
        result = await listStores(requestBody.businessUnitId);
        break;
      
      case 'submit_claim':
        result = await submitClaim(requestBody);
        break;
      
      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action. Use: create_business_unit, create_store, list_business_units, list_stores, or submit_claim' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }

    return new Response(
      JSON.stringify({
        success: true,
        result: result
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Recipero setup error:', error);
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

async function createBusinessUnit(legalName: string, reportName: string) {
  const reciperoAccountId = Deno.env.get('RECIPERO_ACCOUNT_ID');
  const reciperoSecretKey = Deno.env.get('RECIPERO_SECRET_KEY');
  
  if (!reciperoAccountId || !reciperoSecretKey) {
    throw new Error('Recipero credentials not configured');
  }

  const requestBody = JSON.stringify({
    legalName,
    reportName
  });

  // Generate signature hash
  const signatureData = reciperoSecretKey + requestBody;
  const encoder = new TextEncoder();
  const data = encoder.encode(signatureData);
  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const signatureHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  // Create Basic Auth credentials
  const credentials = `${reciperoAccountId}:${signatureHash}`;
  const encodedCredentials = btoa(credentials);

  console.log('Creating business unit:', legalName);

  const response = await fetch('https://api.recipero.com/business-units', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${encodedCredentials}`,
      'Content-Type': 'application/json',
    },
    body: requestBody
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Business unit creation failed:', response.status, errorText);
    throw new Error(`Failed to create business unit: ${response.status}`);
  }

  const result = await response.json();
  console.log('Business unit created:', result);
  return result;
}

async function createStore(
  businessUnitId: number, 
  reportName: string,
  legalName?: string,
  city?: string,
  county?: string,
  state?: string,
  zipcode?: string,
  country?: string,
  email?: string,
  type: 'live' | 'test' = 'live'
) {
  const reciperoAccountId = Deno.env.get('RECIPERO_ACCOUNT_ID');
  const reciperoSecretKey = Deno.env.get('RECIPERO_SECRET_KEY');
  
  if (!reciperoAccountId || !reciperoSecretKey) {
    throw new Error('Recipero credentials not configured');
  }

  // Build request body according to Recipero API spec
  const requestBodyData: any = {
    reportName,
    type
  };

  // Add optional fields if provided
  if (legalName) requestBodyData.legalName = legalName;
  if (city) requestBodyData.city = city;
  if (county) requestBodyData.county = county;
  if (state) requestBodyData.state = state;
  if (zipcode) requestBodyData.zipcode = zipcode;
  if (country) requestBodyData.country = country;
  if (email) requestBodyData.email = email;

  const requestBody = JSON.stringify(requestBodyData);

  // Generate signature hash
  const signatureData = reciperoSecretKey + requestBody;
  const encoder = new TextEncoder();
  const data = encoder.encode(signatureData);
  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const signatureHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  // Create Basic Auth credentials
  const credentials = `${reciperoAccountId}:${signatureHash}`;
  const encodedCredentials = btoa(credentials);

  console.log('Creating store:', reportName, 'for business unit:', businessUnitId);

  // Use the correct endpoint format: /business-units/{businessUnitId}/stores
  const response = await fetch(`https://api.recipero.com/business-units/${businessUnitId}/stores`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${encodedCredentials}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: requestBody
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Store creation failed:', response.status, errorText);
    throw new Error(`Failed to create store: ${response.status} - ${errorText}`);
  }

  const result = await response.json();
  console.log('Store created successfully:', result);
  return result;
}

async function listBusinessUnits() {
  const reciperoAccountId = Deno.env.get('RECIPERO_ACCOUNT_ID');
  const reciperoSecretKey = Deno.env.get('RECIPERO_SECRET_KEY');
  
  if (!reciperoAccountId || !reciperoSecretKey) {
    throw new Error('Recipero credentials not configured');
  }

  const requestBody = JSON.stringify({});

  // Generate signature hash
  const signatureData = reciperoSecretKey + requestBody;
  const encoder = new TextEncoder();
  const data = encoder.encode(signatureData);
  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const signatureHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  // Create Basic Auth credentials
  const credentials = `${reciperoAccountId}:${signatureHash}`;
  const encodedCredentials = btoa(credentials);

  const response = await fetch('https://api.recipero.com/business-units', {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${encodedCredentials}`,
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Failed to list business units:', response.status, errorText);
    throw new Error(`Failed to list business units: ${response.status}`);
  }

  const result = await response.json();
  return result;
}

async function listStores(businessUnitId?: number) {
  const reciperoAccountId = Deno.env.get('RECIPERO_ACCOUNT_ID');
  const reciperoSecretKey = Deno.env.get('RECIPERO_SECRET_KEY');
  
  if (!reciperoAccountId || !reciperoSecretKey) {
    throw new Error('Recipero credentials not configured');
  }

  const url = businessUnitId 
    ? `https://api.recipero.com/business-units/${businessUnitId}/stores`
    : 'https://api.recipero.com/stores';

  const requestBody = JSON.stringify({});

  // Generate signature hash
  const signatureData = reciperoSecretKey + requestBody;
  const encoder = new TextEncoder();
  const data = encoder.encode(signatureData);
  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const signatureHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  // Create Basic Auth credentials
  const credentials = `${reciperoAccountId}:${signatureHash}`;
  const encodedCredentials = btoa(credentials);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${encodedCredentials}`,
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Failed to list stores:', response.status, errorText);
    throw new Error(`Failed to list stores: ${response.status}`);
  }

  const result = await response.json();
  return result;
}

async function submitClaim(claimData: ClaimSubmissionRequest) {
  const reciperoAccountId = Deno.env.get('RECIPERO_ACCOUNT_ID');
  const reciperoSecretKey = Deno.env.get('RECIPERO_SECRET_KEY');
  
  if (!reciperoAccountId || !reciperoSecretKey) {
    throw new Error('Recipero credentials not configured');
  }

  // Validate required fields
  if (!claimData.claimtype || !claimData.itemcategory || !claimData.serials || 
      claimData.serials.length === 0 || !claimData.storeid || !claimData.itemdescription ||
      !claimData.make || !claimData.model || !claimData.claimdate || !claimData.claimreference) {
    throw new Error('Missing required claim fields');
  }

  // Validate serials array
  for (const serial of claimData.serials) {
    if (!serial || serial.length < 5 || serial.length > 100) {
      throw new Error('Each serial must be between 5-100 characters');
    }
  }

  // Validate field lengths
  if (claimData.itemdescription.length > 2000) {
    throw new Error('Item description must not exceed 2000 characters');
  }
  if (claimData.make.length > 50) {
    throw new Error('Make must not exceed 50 characters');
  }
  if (claimData.model.length > 50) {
    throw new Error('Model must not exceed 50 characters');
  }
  if (claimData.claimreference.length > 50) {
    throw new Error('Claim reference must not exceed 50 characters');
  }
  if (claimData.claimitemnumber && claimData.claimitemnumber.length > 50) {
    throw new Error('Claim item number must not exceed 50 characters');
  }
  if (claimData.claimnotes && claimData.claimnotes.length > 2000) {
    throw new Error('Claim notes must not exceed 2000 characters');
  }

  // Build request body
  const requestBodyData: any = {
    claimtype: claimData.claimtype,
    itemcategory: claimData.itemcategory,
    serials: claimData.serials,
    storeid: claimData.storeid,
    itemdescription: claimData.itemdescription,
    make: claimData.make,
    model: claimData.model,
    claimdate: claimData.claimdate,
    claimreference: claimData.claimreference
  };

  // Add optional fields
  if (claimData.claimitemnumber) {
    requestBodyData.claimitemnumber = claimData.claimitemnumber;
  }
  if (claimData.claimnotes) {
    requestBodyData.claimnotes = claimData.claimnotes;
  }

  const requestBody = JSON.stringify(requestBodyData);

  // Generate signature hash
  const signatureData = reciperoSecretKey + requestBody;
  const encoder = new TextEncoder();
  const data = encoder.encode(signatureData);
  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const signatureHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  // Create Basic Auth credentials
  const credentials = `${reciperoAccountId}:${signatureHash}`;
  const encodedCredentials = btoa(credentials);

  console.log('Submitting claim for serials:', claimData.serials, 'type:', claimData.claimtype);

  const response = await fetch('https://api.recipero.com/claimscheck/submitclaim', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${encodedCredentials}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: requestBody
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Claim submission failed:', response.status, errorText);
    throw new Error(`Failed to submit claim: ${response.status} - ${errorText}`);
  }

  const result = await response.json();
  console.log('Claim submitted successfully:', result);
  return result;
}