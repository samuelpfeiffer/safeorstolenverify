import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface VerificationRequest {
  serialNumber: string;
  itemType: string;
}

interface VerificationResult {
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  confidence: number;
  source: string;
  details?: any;
  message?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get the authorization header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('No authorization header')
    }

    // Verify the user
    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    
    if (authError || !user) {
      throw new Error('Invalid authentication')
    }

    console.log(`Verification request from user: ${user.id}`)

    const { serialNumber, itemType }: VerificationRequest = await req.json()

    if (!serialNumber || !itemType) {
      throw new Error('Serial number and item type are required')
    }

    console.log(`Verifying ${itemType} with serial: ${serialNumber}`)

    // Check rate limits with lifetime limit
    const canMakeRequest = await checkRateLimit(supabase, user.id)
    if (!canMakeRequest) {
      return new Response(
        JSON.stringify({ error: 'Free search limit reached. Upgrade for unlimited access.' }), 
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Perform verification based on item type
    let verificationResult: VerificationResult

    switch (itemType.toLowerCase()) {
      case 'smartphone':
      case 'phone':
      case 'mobile':
        verificationResult = await verifyIMEI(serialNumber)
        break
      case 'vehicle':
      case 'car':
      case 'motorcycle':
        verificationResult = await verifyVIN(serialNumber)
        break
      default:
        verificationResult = await verifyGenericSerial(serialNumber, itemType)
        break
    }

    // Store the verification result
    const { data: storedResult, error: dbError } = await supabase
      .from('verification_results')
      .insert({
        user_id: user.id,
        serial_number: serialNumber,
        item_type: itemType,
        verification_status: verificationResult.status,
        api_source: verificationResult.source,
        api_response: verificationResult.details || {},
        confidence_score: verificationResult.confidence
      })
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      throw new Error('Failed to store verification result')
    }

    console.log(`Verification completed for ${serialNumber}: ${verificationResult.status}`)

    return new Response(
      JSON.stringify({
        success: true,
        result: verificationResult,
        id: storedResult.id
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Verification error:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Verification failed',
        success: false 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})

async function checkRateLimit(supabase: any, userId: string): Promise<boolean> {
  // Check user's subscription status
  const { data: subscriber } = await supabase
    .from('subscribers')
    .select('subscribed, subscription_tier')
    .eq('user_id', userId)
    .single()

  // If user has subscription, no rate limit
  if (subscriber?.subscribed) {
    return true
  }

  // Check promotion status
  const { data: profile } = await supabase
    .from('profiles')
    .select('is_promotion_winner, promotion_searches_remaining, promotion_expires_at')
    .eq('id', userId)
    .single()

  if (profile?.is_promotion_winner && 
      profile?.promotion_searches_remaining > 0 && 
      profile?.promotion_expires_at && 
      new Date(profile.promotion_expires_at) > new Date()) {
    
    // Consume one promotion search
    await supabase
      .from('profiles')
      .update({ 
        promotion_searches_remaining: profile.promotion_searches_remaining - 1 
      })
      .eq('id', userId)
    
    return true
  }

  // Check lifetime free limit (4 requests total per user)
  const { count } = await supabase
    .from('verification_results')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)

  return (count || 0) < 4
}

async function verifyIMEI(imei: string): Promise<VerificationResult> {
  try {
    // For demo purposes, we'll simulate different responses based on IMEI patterns
    // In production, you would integrate with real IMEI databases like:
    // - CTIA Stolen Phone Checker
    // - GSMA IMEI Database
    // - CheckMEND API
    
    console.log(`Verifying IMEI: ${imei}`)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Basic IMEI validation
    if (!/^\d{15}$/.test(imei)) {
      return {
        status: 'error',
        confidence: 0,
        source: 'validation',
        message: 'Invalid IMEI format'
      }
    }

    // Simulate different outcomes based on IMEI patterns
    const lastDigit = parseInt(imei.slice(-1))
    
    if (lastDigit <= 2) {
      return {
        status: 'stolen',
        confidence: 95,
        source: 'CTIA_Stolen_Database',
        details: {
          reportedDate: '2024-01-15',
          reportingAgency: 'Local Police Department',
          caseNumber: 'SPD-2024-0156'
        },
        message: 'Device reported stolen'
      }
    } else if (lastDigit <= 4) {
      return {
        status: 'lost',
        confidence: 88,
        source: 'GSMA_IMEI_Database',
        details: {
          reportedDate: '2024-02-10',
          status: 'blacklisted'
        },
        message: 'Device reported lost'
      }
    } else if (lastDigit <= 6) {
      return {
        status: 'unknown',
        confidence: 45,
        source: 'Multiple_Sources',
        details: {
          note: 'No records found in available databases'
        },
        message: 'No theft reports found'
      }
    } else {
      return {
        status: 'safe',
        confidence: 92,
        source: 'GSMA_IMEI_Database',
        details: {
          manufacturer: 'Apple',
          model: 'iPhone 14 Pro',
          verificationDate: new Date().toISOString()
        },
        message: 'Device appears to be legitimate'
      }
    }
    
  } catch (error) {
    console.error('IMEI verification error:', error)
    return {
      status: 'error',
      confidence: 0,
      source: 'system',
      message: 'Verification service temporarily unavailable'
    }
  }
}

async function verifyVIN(vin: string): Promise<VerificationResult> {
  try {
    console.log(`Verifying VIN: ${vin}`)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1200))
    
    // Basic VIN validation
    if (!/^[A-HJ-NPR-Z0-9]{17}$/i.test(vin)) {
      return {
        status: 'error',
        confidence: 0,
        source: 'validation',
        message: 'Invalid VIN format'
      }
    }

    // Simulate different outcomes based on VIN patterns
    const checkDigit = vin.charAt(8)
    
    if (['1', '2', '3'].includes(checkDigit)) {
      return {
        status: 'stolen',
        confidence: 98,
        source: 'NCIC_Database',
        details: {
          reportedDate: '2024-03-05',
          reportingAgency: 'FBI',
          caseNumber: 'FBI-2024-VT-4478'
        },
        message: 'Vehicle reported stolen'
      }
    } else if (['4', '5'].includes(checkDigit)) {
      return {
        status: 'unknown',
        confidence: 35,
        source: 'AutoCheck_Database',
        details: {
          note: 'Limited information available'
        },
        message: 'No theft reports found'
      }
    } else {
      return {
        status: 'safe',
        confidence: 94,
        source: 'CARFAX_Database',
        details: {
          make: 'Toyota',
          model: 'Camry',
          year: 2022,
          verificationDate: new Date().toISOString()
        },
        message: 'Vehicle appears to be legitimate'
      }
    }
    
  } catch (error) {
    console.error('VIN verification error:', error)
    return {
      status: 'error',
      confidence: 0,
      source: 'system',
      message: 'Verification service temporarily unavailable'
    }
  }
}

async function verifyGenericSerial(serialNumber: string, itemType: string): Promise<VerificationResult> {
  try {
    console.log(`Verifying ${itemType} serial: ${serialNumber}`)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Simulate different outcomes based on serial number patterns
    const hash = serialNumber.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    
    const outcome = Math.abs(hash) % 10
    
    if (outcome <= 1) {
      return {
        status: 'stolen',
        confidence: 85,
        source: 'Stolen_Goods_Registry',
        details: {
          reportedDate: '2024-01-20',
          category: itemType
        },
        message: 'Item reported stolen'
      }
    } else if (outcome <= 3) {
      return {
        status: 'unknown',
        confidence: 50,
        source: 'Generic_Database',
        details: {
          note: 'No records found'
        },
        message: 'No theft reports found'
      }
    } else {
      return {
        status: 'safe',
        confidence: 88,
        source: 'Manufacturer_Registry',
        details: {
          category: itemType,
          verificationDate: new Date().toISOString()
        },
        message: 'Item appears to be legitimate'
      }
    }
    
  } catch (error) {
    console.error('Generic verification error:', error)
    return {
      status: 'error',
      confidence: 0,
      source: 'system',
      message: 'Verification service temporarily unavailable'
    }
  }
}
