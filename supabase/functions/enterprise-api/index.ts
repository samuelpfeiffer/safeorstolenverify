import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

interface EnterpriseVerificationRequest {
  items: Array<{
    serialNumber: string;
    itemType: string;
    reference?: string;
  }>;
  webhookUrl?: string;
  priority?: 'low' | 'normal' | 'high';
}

interface EnterpriseVerificationResponse {
  batchId: string;
  results: Array<{
    serialNumber: string;
    itemType: string;
    reference?: string;
    status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
    confidence: number;
    riskScore: number;
    sources: string[];
    details: any;
    timestamp: string;
  }>;
  summary: {
    total: number;
    safe: number;
    stolen: number;
    lost: number;
    unknown: number;
    errors: number;
    avgProcessingTime: number;
  };
}

serve(async (req) => {
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Validate API key
    const apiKey = req.headers.get('X-API-Key')
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'API key required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Verify API key in database
    const { data: keyData, error: keyError } = await supabase
      .from('api_keys')
      .select('user_id, is_active, usage_limit, usage_count, permissions')
      .eq('api_key', apiKey)
      .eq('is_active', true)
      .single()

    if (keyError || !keyData) {
      return new Response(
        JSON.stringify({ error: 'Invalid API key' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Check usage limits
    if (keyData.usage_limit && keyData.usage_count >= keyData.usage_limit) {
      return new Response(
        JSON.stringify({ error: 'API usage limit exceeded' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { items, webhookUrl, priority = 'normal' }: EnterpriseVerificationRequest = await req.json()

    if (!items || !Array.isArray(items) || items.length === 0) {
      throw new Error('Items array is required')
    }

    if (items.length > 100) {
      throw new Error('Maximum 100 items per batch')
    }

    console.log(`Enterprise verification batch: ${items.length} items`)

    const batchId = crypto.randomUUID()
    const startTime = Date.now()
    const results = []

    // Process items in parallel with rate limiting
    const batchSize = priority === 'high' ? 10 : priority === 'normal' ? 5 : 3
    const batches = []
    for (let i = 0; i < items.length; i += batchSize) {
      batches.push(items.slice(i, i + batchSize))
    }

    for (const batch of batches) {
      const batchPromises = batch.map(async (item) => {
        try {
          // Call enhanced verification
          const verificationResponse = await callEnhancedVerification(item.serialNumber, item.itemType)
          
          if (verificationResponse?.success && verificationResponse?.result) {
            const result = verificationResponse.result
            return {
              serialNumber: item.serialNumber,
              itemType: item.itemType,
              reference: item.reference,
              status: result.recommendation || 'unknown',
              confidence: 100 - result.overallRisk,
              riskScore: result.overallRisk,
              sources: result.sources.map((s: any) => s.name),
              details: result,
              timestamp: new Date().toISOString()
            }
          } else {
            throw new Error('Verification failed')
          }
        } catch (error) {
          return {
            serialNumber: item.serialNumber,
            itemType: item.itemType,
            reference: item.reference,
            status: 'error' as const,
            confidence: 0,
            riskScore: 50,
            sources: [],
            details: { error: (error as Error).message },
            timestamp: new Date().toISOString()
          }
        }
      })

      const batchResults = await Promise.all(batchPromises)
      results.push(...batchResults)

      // Small delay between batches for rate limiting
      if (batches.indexOf(batch) < batches.length - 1) {
        await new Promise(resolve => setTimeout(resolve, priority === 'high' ? 100 : 200))
      }
    }

    const endTime = Date.now()
    const processingTime = endTime - startTime

    // Calculate summary
    const summary = {
      total: results.length,
      safe: results.filter(r => r.status === 'safe').length,
      stolen: results.filter(r => r.status === 'stolen').length,
      lost: results.filter(r => r.status === 'lost').length,
      unknown: results.filter(r => r.status === 'unknown').length,
      errors: results.filter(r => r.status === 'error').length,
      avgProcessingTime: Math.round(processingTime / results.length)
    }

    const response: EnterpriseVerificationResponse = {
      batchId,
      results,
      summary
    }

    // Store enterprise verification record
    await supabase
      .from('verification_results')
      .insert({
        user_id: keyData.user_id,
        serial_number: `BATCH_${batchId}`,
        item_type: 'enterprise_batch',
        verification_status: summary.stolen > 0 ? 'stolen' : summary.lost > 0 ? 'lost' : 'safe',
        api_source: 'Enterprise_API',
        api_response: response,
        confidence_score: Math.round((summary.safe / summary.total) * 100)
      })

    // Update API key usage
    await supabase
      .from('api_keys')
      .update({ 
        usage_count: keyData.usage_count + results.length,
        updated_at: new Date().toISOString()
      })
      .eq('api_key', apiKey)

    // Send webhook if configured
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Webhook-Source': 'SafeOrStolen-Enterprise'
          },
          body: JSON.stringify({
            batchId,
            status: 'completed',
            summary,
            timestamp: new Date().toISOString()
          })
        })
      } catch (webhookError) {
        console.warn('Webhook delivery failed:', webhookError)
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: response
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Enterprise API error:', error)
    return new Response(
      JSON.stringify({ 
        error: (error as Error).message || 'Enterprise verification failed',
        success: false 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})

async function callEnhancedVerification(serialNumber: string, itemType: string): Promise<any> {
  try {
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
        includeAnalysis: false // Skip Claude for bulk operations
      })
    })

    if (response.ok) {
      return await response.json()
    } else {
      throw new Error(`Enhanced verification failed: ${response.status}`)
    }
  } catch (error) {
    console.error('Enhanced verification call failed:', error)
    throw error
  }
}