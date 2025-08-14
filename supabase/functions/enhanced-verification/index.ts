import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface EnhancedVerificationRequest {
  serialNumber: string;
  itemType: string;
  includeAnalysis?: boolean;
}

interface VerificationSource {
  name: string;
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  confidence: number;
  details?: any;
  message?: string;
}

interface EnhancedVerificationResponse {
  serialNumber: string;
  itemType: string;
  sources: VerificationSource[];
  overallRisk: number;
  recommendation: 'safe' | 'caution' | 'danger';
  analysis?: any;
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

    const { serialNumber, itemType, includeAnalysis = true }: EnhancedVerificationRequest = await req.json()

    if (!serialNumber || !itemType) {
      throw new Error('Serial number and item type are required')
    }

    console.log(`Enhanced verification for ${itemType}: ${serialNumber}`)

    // Run all verification sources in parallel
    const verificationPromises = [
      callVerificationAPI('verify-item', { serialNumber, itemType }),
      callVerificationAPI('verify-checkmend', { serialNumber, itemType }),
    ]

    // Add specialized verifications based on item type
    if (itemType.toLowerCase().includes('firearm') || itemType.toLowerCase().includes('gun')) {
      verificationPromises.push(
        callVerificationAPI('verify-firearm-hotgunz', { serial: serialNumber })
      )
    }

    if (itemType.toLowerCase().includes('bike') || itemType.toLowerCase().includes('bicycle')) {
      // BikeIndex is already included in verify-item for bikes
    }

    // Execute all verifications
    const results = await Promise.allSettled(verificationPromises)
    
    const sources: VerificationSource[] = []
    
    // Process results
    results.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value) {
        const data = result.value
        if (data.success && data.result) {
          sources.push({
            name: getSourceName(index, itemType),
            status: data.result.status,
            confidence: data.result.confidence,
            details: data.result.details,
            message: data.result.message
          })
        }
      }
    })

    // Calculate overall risk assessment
    const overallRisk = calculateOverallRisk(sources)
    const recommendation = getRecommendation(overallRisk, sources)

    let analysis = null
    if (includeAnalysis) {
      try {
        const claudeResponse = await callVerificationAPI('verify-claude-analysis', {
          verificationResults: sources,
          serialNumber,
          itemType
        })
        if (claudeResponse?.success && claudeResponse?.analysis) {
          analysis = claudeResponse.analysis
        }
      } catch (analysisError) {
        console.warn('Claude analysis failed:', analysisError)
      }
    }

    const response: EnhancedVerificationResponse = {
      serialNumber,
      itemType,
      sources,
      overallRisk,
      recommendation,
      analysis,
      timestamp: new Date().toISOString()
    }

    // Store the enhanced verification result
    await supabase
      .from('verification_results')
      .insert({
        user_id: req.headers.get('user-id') || 'system',
        serial_number: serialNumber,
        item_type: itemType,
        verification_status: recommendation,
        api_source: 'Enhanced_Multi_Source',
        api_response: response,
        confidence_score: 100 - overallRisk
      })

    return new Response(
      JSON.stringify({
        success: true,
        result: response
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Enhanced verification error:', error)
    return new Response(
      JSON.stringify({ 
        error: (error as Error).message || 'Enhanced verification failed',
        success: false 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})

async function callVerificationAPI(functionName: string, payload: any): Promise<any> {
  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    
    const response = await fetch(`${supabaseUrl}/functions/v1/${functionName}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${serviceKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (response.ok) {
      return await response.json()
    } else {
      console.warn(`API call to ${functionName} failed:`, response.status)
      return null
    }
  } catch (error) {
    console.error(`Error calling ${functionName}:`, error)
    return null
  }
}

function getSourceName(index: number, itemType: string): string {
  const sources = ['Primary_Database', 'CheckMend', 'HotGunz', 'BikeIndex']
  if (index < sources.length) {
    return sources[index]
  }
  return `Source_${index + 1}`
}

function calculateOverallRisk(sources: VerificationSource[]): number {
  if (sources.length === 0) return 50

  let totalRisk = 0
  let weights = 0

  for (const source of sources) {
    let risk = 50 // Default neutral risk
    
    switch (source.status) {
      case 'stolen':
        risk = 95
        break
      case 'lost':
        risk = 75
        break
      case 'unknown':
        risk = 45
        break
      case 'safe':
        risk = 10
        break
      case 'error':
        risk = 40
        break
    }

    const weight = source.confidence / 100
    totalRisk += risk * weight
    weights += weight
  }

  return weights > 0 ? Math.round(totalRisk / weights) : 50
}

function getRecommendation(overallRisk: number, sources: VerificationSource[]): 'safe' | 'caution' | 'danger' {
  // Check for any definitive stolen reports
  const hasStolenReport = sources.some(s => s.status === 'stolen' && s.confidence > 80)
  if (hasStolenReport) return 'danger'

  if (overallRisk >= 70) return 'danger'
  if (overallRisk >= 40) return 'caution'
  return 'safe'
}