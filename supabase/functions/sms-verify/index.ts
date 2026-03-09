import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Twilio sends webhooks as application/x-www-form-urlencoded
    const contentType = req.headers.get('content-type') || '';
    let body: string;
    let from: string;

    if (contentType.includes('application/x-www-form-urlencoded')) {
      // Incoming SMS from Twilio webhook
      const formData = await req.formData();
      body = (formData.get('Body') as string || '').trim();
      from = (formData.get('From') as string || '').trim();
    } else {
      // JSON request (for testing or API calls)
      const json = await req.json();
      body = (json.body || json.identifier || '').trim();
      from = json.from || 'api';
    }

    if (!body || body.length < 3) {
      return twimlResponse('Please text us an IMEI, VIN, or serial number to check. Example: text "353456789012345" to verify a phone.');
    }

    // Normalize input
    const identifier = body.toUpperCase().replace(/[^A-Z0-9]/g, '');

    if (identifier.length < 3 || identifier.length > 50) {
      return twimlResponse('Invalid identifier. Please send a valid IMEI (15 digits), VIN (17 chars), or serial number (3-50 chars).');
    }

    // Detect item type
    const itemType = detectItemType(identifier);

    // Check against stolen items database
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: checkResult } = await supabase.rpc('check_stolen_item_public', {
      check_identifier: identifier,
      check_type: itemType,
    });

    const status = checkResult?.status || 'unknown';
    const verifyUrl = `https://safeorstolen.com/verify`;

    let responseMessage: string;

    if (status === 'stolen') {
      responseMessage = `🚨 ALERT: This ${itemType || 'item'} (${maskId(identifier)}) has been REPORTED STOLEN. Do NOT purchase. Contact local law enforcement.\n\nFull report: ${verifyUrl}`;
    } else if (status === 'safe') {
      responseMessage = `✅ CLEAN: ${itemType || 'Item'} (${maskId(identifier)}) — No theft reports found in 100+ databases.\n\nGet a verified badge: ${verifyUrl}\n\nSafeOrStolen.com — 2 free checks, then $0.99/check or $2.99/mo unlimited.`;
    } else {
      responseMessage = `⚠️ UNKNOWN: Could not verify ${maskId(identifier)}. For a comprehensive check across 100+ databases, visit ${verifyUrl}\n\nSafeOrStolen.com`;
    }

    // Log the SMS check
    await supabase.from('audit_logs').insert({
      action: 'SMS_VERIFICATION_CHECK',
      table_name: 'sms_verify',
      new_values: {
        identifier_hash: await hashIdentifier(identifier),
        item_type: itemType,
        result_status: status,
        from_masked: from ? `***${from.slice(-4)}` : 'unknown',
        timestamp: new Date().toISOString(),
      },
    });

    return twimlResponse(responseMessage);
  } catch (error) {
    console.error('SMS verify error:', error);
    return twimlResponse('Sorry, we hit a temporary error. Please try again or visit safeorstolen.com to verify your item.');
  }
});

function twimlResponse(message: string): Response {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>${escapeXml(message)}</Message>
</Response>`;

  return new Response(twiml, {
    headers: {
      ...corsHeaders,
      'Content-Type': 'text/xml',
    },
  });
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function detectItemType(id: string): string | null {
  if (/^\d{15}$/.test(id)) return 'phone';
  if (/^[A-HJ-NPR-Z0-9]{17}$/.test(id)) return 'vehicle';
  if (/^[A-Z]{2,3}\d{3,4}[A-Z]{0,3}$/.test(id)) return 'plate';
  return null;
}

function maskId(id: string): string {
  if (id.length <= 6) return id;
  return `${id.slice(0, 3)}***${id.slice(-3)}`;
}

async function hashIdentifier(id: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(id);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}
