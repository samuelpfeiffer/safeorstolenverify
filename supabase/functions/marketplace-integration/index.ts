import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface MarketplaceWebhookRequest {
  marketplace: 'ebay' | 'facebook' | 'craigslist' | 'shopify' | 'other';
  event: 'listing_created' | 'listing_updated' | 'purchase_pending' | 'dispute_opened';
  listing: {
    id: string;
    title: string;
    description: string;
    price: number;
    currency: string;
    seller: {
      id: string;
      name: string;
      rating?: number;
    };
    item: {
      serialNumber?: string;
      model?: string;
      brand?: string;
      category: string;
      condition?: string;
    };
    images?: string[];
    location?: string;
  };
}

interface MarketplaceVerificationResponse {
  verificationId: string;
  listing: {
    id: string;
    marketplace: string;
  };
  verification: {
    status: 'safe' | 'caution' | 'danger';
    riskScore: number;
    confidence: number;
    flags: string[];
    recommendations: string[];
  };
  item: {
    serialNumber?: string;
    verificationResults: any[];
  };
  seller: {
    riskScore: number;
    flags: string[];
  };
  timestamp: string;
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

    // Validate marketplace integration key
    const integrationKey = req.headers.get('X-Integration-Key')
    if (!integrationKey) {
      return new Response(
        JSON.stringify({ error: 'Integration key required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Verify integration
    const { data: integration, error: integrationError } = await supabase
      .from('marketplace_integrations')
      .select('user_id, marketplace_name, status')
      .eq('api_credentials->integration_key', integrationKey)
      .eq('status', 'active')
      .single()

    if (integrationError || !integration) {
      return new Response(
        JSON.stringify({ error: 'Invalid integration key' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const webhookData: MarketplaceWebhookRequest = await req.json()

    console.log(`Marketplace webhook from ${webhookData.marketplace}: ${webhookData.event}`)

    // Extract serial number from listing
    const serialNumber = webhookData.listing.item.serialNumber || 
                         extractSerialFromDescription(webhookData.listing.description)

    let itemVerification = null
    let verificationResults = []

    // Perform item verification if serial number is available
    if (serialNumber) {
      try {
        const verificationResponse = await callEnhancedVerification(
          serialNumber,
          webhookData.listing.item.category
        )
        
        if (verificationResponse?.success && verificationResponse?.result) {
          itemVerification = verificationResponse.result
          verificationResults = verificationResponse.result.sources || []
        }
      } catch (verificationError) {
        console.warn('Item verification failed:', verificationError)
      }
    }

    // Analyze seller risk
    const sellerRisk = await analyzeSellerRisk(webhookData.listing.seller, webhookData.marketplace)

    // Calculate overall risk and flags
    const riskAnalysis = calculateMarketplaceRisk(itemVerification, sellerRisk, webhookData.listing)

    const verificationId = crypto.randomUUID()

    const response: MarketplaceVerificationResponse = {
      verificationId,
      listing: {
        id: webhookData.listing.id,
        marketplace: webhookData.marketplace
      },
      verification: {
        status: riskAnalysis.status,
        riskScore: riskAnalysis.riskScore,
        confidence: riskAnalysis.confidence,
        flags: riskAnalysis.flags,
        recommendations: riskAnalysis.recommendations
      },
      item: {
        serialNumber,
        verificationResults
      },
      seller: {
        riskScore: sellerRisk.score,
        flags: sellerRisk.flags
      },
      timestamp: new Date().toISOString()
    }

    // Store marketplace listing and verification
    await supabase
      .from('marketplace_listings')
      .insert({
        user_id: integration.user_id,
        integration_id: integration.user_id, // Using user_id as placeholder
        marketplace_name: webhookData.marketplace,
        external_listing_id: webhookData.listing.id,
        title: webhookData.listing.title,
        description: webhookData.listing.description,
        price: webhookData.listing.price,
        currency: webhookData.listing.currency,
        item_condition: webhookData.listing.item.condition,
        verification_status: riskAnalysis.status,
        risk_score: riskAnalysis.riskScore,
        metadata: {
          verification_id: verificationId,
          seller: webhookData.listing.seller,
          item_details: webhookData.listing.item,
          verification_results: response
        }
      })

    // Send real-time alert if high risk
    if (riskAnalysis.status === 'danger' || riskAnalysis.riskScore > 80) {
      await sendRealTimeAlert(integration.user_id, response)
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: response
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Marketplace integration error:', error)
    return new Response(
      JSON.stringify({ 
        error: (error as Error).message || 'Marketplace integration failed',
        success: false 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})

function extractSerialFromDescription(description: string): string | null {
  // Common patterns for serial numbers
  const patterns = [
    /serial\s*(?:number|#)?\s*:?\s*([a-z0-9]+)/i,
    /s\/n\s*:?\s*([a-z0-9]+)/i,
    /sn\s*:?\s*([a-z0-9]+)/i,
    /model\s*#?\s*:?\s*([a-z0-9]+)/i
  ]

  for (const pattern of patterns) {
    const match = description.match(pattern)
    if (match && match[1] && match[1].length >= 4) {
      return match[1]
    }
  }

  return null
}

async function analyzeSellerRisk(seller: any, marketplace: string): Promise<{ score: number; flags: string[] }> {
  const flags = []
  let score = 20 // Base low risk

  // New seller risk
  if (seller.rating === undefined || seller.rating < 10) {
    flags.push('new_seller')
    score += 15
  }

  // Low rating risk
  if (seller.rating !== undefined && seller.rating < 3) {
    flags.push('low_rating')
    score += 25
  }

  // Very low rating risk
  if (seller.rating !== undefined && seller.rating < 2) {
    flags.push('very_low_rating')
    score += 35
  }

  // Marketplace-specific risks
  if (marketplace === 'craigslist') {
    flags.push('unverified_marketplace')
    score += 10
  }

  return { score: Math.min(score, 100), flags }
}

function calculateMarketplaceRisk(itemVerification: any, sellerRisk: any, listing: any): {
  status: 'safe' | 'caution' | 'danger';
  riskScore: number;
  confidence: number;
  flags: string[];
  recommendations: string[];
} {
  const flags = [...sellerRisk.flags]
  const recommendations = []
  let riskScore = sellerRisk.score

  // Item verification risk
  if (itemVerification) {
    riskScore = Math.max(riskScore, itemVerification.overallRisk)
    
    if (itemVerification.recommendation === 'danger') {
      flags.push('stolen_item_risk')
      recommendations.push('Item may be stolen - avoid purchase')
    } else if (itemVerification.recommendation === 'caution') {
      flags.push('item_verification_inconclusive')
      recommendations.push('Request additional verification from seller')
    }
  } else if (listing.item.serialNumber) {
    flags.push('verification_failed')
    recommendations.push('Manual verification recommended')
    riskScore += 15
  }

  // Price analysis
  if (listing.price < 100) {
    flags.push('unusually_low_price')
    recommendations.push('Verify authenticity - price may be too good to be true')
    riskScore += 10
  }

  // Generic recommendations
  if (riskScore > 60) {
    recommendations.push('Meet in public place if proceeding')
    recommendations.push('Inspect item thoroughly before payment')
  }

  // Determine status
  let status: 'safe' | 'caution' | 'danger' = 'safe'
  if (riskScore >= 70) status = 'danger'
  else if (riskScore >= 40) status = 'caution'

  const confidence = itemVerification ? 
    Math.min(90, itemVerification.sources?.length * 20 || 50) : 60

  return {
    status,
    riskScore: Math.min(riskScore, 100),
    confidence,
    flags,
    recommendations
  }
}

async function callEnhancedVerification(serialNumber: string, itemType: string): Promise<any> {
  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  
  const response = await fetch(`${supabaseUrl}/functions/v1/enhanced-verification`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${serviceKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      serialNumber,
      itemType,
      includeAnalysis: false
    })
  })

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error(`Enhanced verification failed: ${response.status}`)
  }
}

async function sendRealTimeAlert(userId: string, verification: MarketplaceVerificationResponse): Promise<void> {
  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    await supabase
      .from('alert_notifications')
      .insert({
        user_id: userId,
        notification_type: 'high_risk_listing',
        title: 'High Risk Marketplace Listing Detected',
        message: `A potentially stolen item was detected in ${verification.listing.marketplace} listing ${verification.listing.id}`,
        data: {
          verification_id: verification.verificationId,
          risk_score: verification.verification.riskScore,
          flags: verification.verification.flags
        }
      })
  } catch (error) {
    console.error('Failed to send real-time alert:', error)
  }
}