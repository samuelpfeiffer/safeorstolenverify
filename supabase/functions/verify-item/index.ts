import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { getCorsHeaders, handleCorsPreFlight } from '../_shared/cors.ts';
import { createErrorResponse } from '../_shared/errors.ts';

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
  const corsPreFlight = handleCorsPreFlight(req);
  if (corsPreFlight) return corsPreFlight;
  
  const corsHeaders = getCorsHeaders(req.headers.get('origin'));

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

    const requestBody = await req.json()
    const { serialNumber: rawSerial, itemType: rawType } = requestBody

    // Validate and sanitize inputs
    if (!rawSerial || typeof rawSerial !== 'string') {
      throw new Error('Valid serial number required')
    }
    if (!rawType || typeof rawType !== 'string') {
      throw new Error('Valid item type required')
    }

    // Sanitize serial number: allow alphanumeric, spaces, hyphens, underscores only
    const serialNumber = rawSerial.trim().slice(0, 100).replace(/[^a-zA-Z0-9\s\-_]/g, '')
    const itemType = rawType.trim().slice(0, 50).toLowerCase().replace(/[^a-z\-_\s]/g, '')

    if (serialNumber.length < 3) {
      throw new Error('Serial number too short (minimum 3 characters)')
    }
    if (itemType.length < 2) {
      throw new Error('Item type too short (minimum 2 characters)')
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
      case 'bicycle':
      case 'bike':
      case 'bicycles':
        verificationResult = await verifyBike(serialNumber)
        break
      default: {
        // First try Bike Index if configured; if inconclusive, fall back to generic
        const bikeResult = await verifyBike(serialNumber)
        if (bikeResult.source === 'BikeIndex_API') {
          // If Bike Index provided a meaningful status, prefer it (especially stolen/lost/safe)
          if (['stolen', 'lost', 'safe'].includes(bikeResult.status)) {
            verificationResult = bikeResult as VerificationResult
            break
          }
        }
        verificationResult = await verifyGenericSerial(serialNumber, itemType)
        break
      }
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
    return createErrorResponse(
      error,
      { functionName: 'verify-item', userId: 'unknown' },
      corsHeaders
    );
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
    console.log(`Verifying IMEI: ${imei}`)

    // Basic IMEI validation
    if (!/^\d{15}$/.test(imei)) {
      return {
        status: 'error',
        confidence: 0,
        source: 'validation',
        message: 'Invalid IMEI format'
      }
    }

    // Run parallel verification: IMEI API + Web Scraper
    const [imeiApiResult, webScraperResult] = await Promise.allSettled([
      verifyIMEIWithAPI(imei),
      verifyWithWebScraper(imei, 'phone')
    ])
    
    const results: VerificationResult[] = []
    
    if (imeiApiResult.status === 'fulfilled' && imeiApiResult.value.confidence > 0) {
      results.push(imeiApiResult.value)
    }
    
    if (webScraperResult.status === 'fulfilled' && webScraperResult.value.confidence > 0) {
      results.push(webScraperResult.value)
    }
    
    // Aggregate results - prioritize stolen/lost findings
    return aggregateVerificationResults(results, 'IMEI verification')

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

async function verifyIMEIWithAPI(imei: string): Promise<VerificationResult> {
  const apiKey = Deno.env.get('IMEI_LOOKUP_API_KEY')
  if (!apiKey) {
    return {
      status: 'unknown',
      confidence: 0,
      source: 'IMEI_API_Unavailable',
      message: 'IMEI API not configured'
    }
  }

  try {
    const url = `https://api.imeilookup.app/lookup?imei=${encodeURIComponent(imei)}`
    const resp = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      }
    })

    if (resp.ok) {
      const data = await resp.json()
      const providerStatus = String((data.status || data.result || '').toString().toLowerCase())
      let status: VerificationResult['status'] = 'unknown'
      if (data.blacklisted === true || providerStatus === 'stolen' || providerStatus === 'blacklisted') {
        status = 'stolen'
      } else if (providerStatus === 'lost') {
        status = 'lost'
      } else if (providerStatus === 'clean' || providerStatus === 'ok' || providerStatus === 'safe') {
        status = 'safe'
      }

      return {
        status,
        confidence: typeof data.confidence === 'number' ? Math.max(0, Math.min(100, Math.round(data.confidence))) : (status === 'unknown' ? 45 : 90),
        source: 'IMEI_Lookup_API',
        details: data,
        message: data.message || (status === 'safe' ? 'Device appears to be legitimate' : status === 'unknown' ? 'No records found' : 'Device reported')
      }
    } else {
      console.warn('IMEI provider request failed:', resp.status, await resp.text())
      return {
        status: 'unknown',
        confidence: 0,
        source: 'IMEI_API_Error',
        message: 'IMEI API request failed'
      }
    }
  } catch (error) {
    console.error('IMEI API error:', error)
    return {
      status: 'unknown',
      confidence: 0,
      source: 'IMEI_API_Error',
      message: 'IMEI API unavailable'
    }
  }
}

async function verifyVIN(vin: string): Promise<VerificationResult> {
  try {
    console.log(`Verifying VIN: ${vin}`)
    
    // Basic VIN validation
    if (!/^[A-HJ-NPR-Z0-9]{17}$/i.test(vin)) {
      return {
        status: 'error',
        confidence: 0,
        source: 'validation',
        message: 'Invalid VIN format'
      }
    }

    // Run parallel verification: NHTSA + Web Scraper
    const [nhtsaResult, webScraperResult] = await Promise.allSettled([
      verifyVINWithNHTSA(vin),
      verifyWithWebScraper(vin, 'vehicle')
    ])
    
    const results: VerificationResult[] = []
    
    if (nhtsaResult.status === 'fulfilled' && nhtsaResult.value.confidence > 0) {
      results.push(nhtsaResult.value)
    }
    
    if (webScraperResult.status === 'fulfilled' && webScraperResult.value.confidence > 0) {
      results.push(webScraperResult.value)
    }
    
    // Aggregate results
    return aggregateVerificationResults(results, 'VIN verification')

  } catch (error) {
    console.error('VIN verification error:', error)
    return {
      status: 'error', 
      confidence: 0,
      source: 'error',
      message: 'VIN verification service temporarily unavailable'
    }
  }
}

async function verifyVINWithNHTSA(vin: string): Promise<VerificationResult> {
  try {
    // NHTSA VIN decoder API (free, public)
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${encodeURIComponent(vin)}?format=json`
    const resp = await fetch(url)
    
    if (!resp.ok) {
      return {
        status: 'unknown',
        confidence: 0,
        source: 'NHTSA_API_Error',
        message: 'NHTSA API unavailable'
      }
    }
    
    const data = await resp.json()
    const results = data.Results || []
    
    // Extract vehicle info from NHTSA response
    const vehicleInfo: any = {}
    results.forEach((item: any) => {
      if (item.Value && item.Value !== 'Not Applicable' && item.Value !== '') {
        vehicleInfo[item.Variable] = item.Value
      }
    })
    
    // NHTSA doesn't provide theft status, only vehicle information
    return {
      status: 'unknown',
      confidence: 40,
      source: 'NHTSA_API',
      details: {
        make: vehicleInfo.Make,
        model: vehicleInfo.Model,
        year: vehicleInfo.ModelYear,
        type: vehicleInfo.VehicleType,
        manufacturer: vehicleInfo.Manufacturer,
        full_data: vehicleInfo
      },
      message: 'Vehicle information retrieved from NHTSA. Theft status check via other sources.'
    }
    
  } catch (error) {
    console.error('NHTSA API error:', error)
    return {
      status: 'unknown',
      confidence: 0,
      source: 'NHTSA_API_Error',
      message: 'NHTSA API unavailable'
    }
  }
}

/**
 * Bike Index verification
 * Uses BIKEINDEX_ACCESS_TOKEN (Supabase secret) to query Bike Index.
 * 1) Searches for the serial (stolenness=all)
 * 2) If a bike is found, fetches /bikes/:id to get richer details
 * Returns stolen/lost/safe/unknown based on flags present
 */
async function verifyBike(serialNumber: string): Promise<VerificationResult> {
  try {
    // Run parallel verification: Bike Index + Web Scraper
    const [bikeIndexResult, webScraperResult] = await Promise.allSettled([
      verifyBikeWithIndex(serialNumber),
      verifyWithWebScraper(serialNumber, 'bicycle')
    ])
    
    const results: VerificationResult[] = []
    
    if (bikeIndexResult.status === 'fulfilled' && bikeIndexResult.value.confidence > 0) {
      results.push(bikeIndexResult.value)
    }
    
    if (webScraperResult.status === 'fulfilled' && webScraperResult.value.confidence > 0) {
      results.push(webScraperResult.value)
    }
    
    // Aggregate results
    return aggregateVerificationResults(results, 'Bike verification')

  } catch (error) {
    console.error('Bike verification error:', error)
    return {
      status: 'error',
      confidence: 0,
      source: 'BikeIndex_API',
      message: 'Bike verification service temporarily unavailable'
    }
  }
}

async function verifyBikeWithIndex(serialNumber: string): Promise<VerificationResult> {
  try {
    const token = Deno.env.get('BIKEINDEX_ACCESS_TOKEN') || ''
    if (!token) {
      return {
        status: 'unknown',
        confidence: 0,
        source: 'BikeIndex_Unavailable',
        message: 'Bike Index token not configured'
      }
    }

    const baseUrl = 'https://bikeindex.org/api/v3'
    const searchUrl = `${baseUrl}/search?serial=${encodeURIComponent(serialNumber)}&stolenness=all&per_page=3`
    const searchResp = await fetch(searchUrl, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })

    if (!searchResp.ok) {
      const text = await searchResp.text()
      console.warn('Bike Index search failed:', searchResp.status, text)
      return {
        status: 'unknown',
        confidence: 0,
        source: 'BikeIndex_API_Error',
        message: 'Unable to search Bike Index'
      }
    }

    const searchData = await searchResp.json() as any
    const bikes = Array.isArray(searchData.bikes) ? searchData.bikes : []
    if (bikes.length === 0) {
      return {
        status: 'unknown',
        confidence: 40,
        source: 'BikeIndex_API',
        details: { matched: false, query_serial: serialNumber },
        message: 'No matching bikes found'
      }
    }

    const best = bikes[0]
    const bikeId = best?.id
    let stolen = false
    let enriched: any = {}

    if (bikeId) {
      const bikeResp = await fetch(`${baseUrl}/bikes/${bikeId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      })

      if (bikeResp.ok) {
        const bikeData = await bikeResp.json() as any
        stolen = !!(bikeData?.bike?.stolen || bikeData?.bike?.stolen_record || (Array.isArray(bikeData?.bike?.stolen_records) && bikeData.bike.stolen_records.length > 0))

        const photos = Array.isArray(bikeData?.bike?.public_images)
          ? bikeData.bike.public_images.map((img: any) => img?.large || img?.medium || img?.thumb).filter(Boolean)
          : (bikeData?.bike?.thumb ? [bikeData.bike.thumb] : [])

        enriched = {
          matched: true,
          bike_id: bikeId,
          serial: bikeData?.bike?.serial || best?.serial,
          manufacturer: bikeData?.bike?.manufacturer_name || best?.manufacturer_name,
          model: bikeData?.bike?.frame_model || best?.frame_model,
          year: bikeData?.bike?.year,
          colors: bikeData?.bike?.frame_colors || best?.frame_colors,
          is_stolen: stolen,
          registry_url: bikeData?.bike?.url || (best?.url ?? null),
          photos
        }
      }
    }

    if (stolen) {
      return {
        status: 'stolen',
        confidence: 95,
        source: 'BikeIndex_API',
        details: enriched,
        message: 'Bike reported stolen in Bike Index'
      }
    }
    
    const foundRecord = bikes.length > 0
    return {
      status: foundRecord ? 'safe' : 'unknown',
      confidence: foundRecord ? 80 : 40,
      source: 'BikeIndex_API',
      details: enriched.matched ? enriched : { matched: foundRecord, candidate_id: bikeId },
      message: foundRecord ? 'Bike found with no stolen record' : 'No matching bikes found'
    }

  } catch (error) {
    console.error('Bike Index error:', error)
    return {
      status: 'unknown',
      confidence: 0,
      source: 'BikeIndex_API_Error',
      message: 'Bike Index service error'
    }
  }
}

async function verifyGenericSerial(serialNumber: string, itemType: string): Promise<VerificationResult> {
  try {
    console.log(`Verifying ${itemType} serial: ${serialNumber}`)
    
    // Run parallel verification: CheckMend + Web Scraper
    const [checkMendResult, webScraperResult] = await Promise.allSettled([
      verifyWithCheckMend(serialNumber, itemType),
      verifyWithWebScraper(serialNumber, itemType)
    ])
    
    const results: VerificationResult[] = []
    
    if (checkMendResult.status === 'fulfilled' && checkMendResult.value.confidence > 0) {
      results.push(checkMendResult.value)
    }
    
    if (webScraperResult.status === 'fulfilled' && webScraperResult.value.confidence > 0) {
      results.push(webScraperResult.value)
    }
    
    // Aggregate results
    return aggregateVerificationResults(results, 'Generic verification')
    
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

// Shared aggregation logic for all verification types
function aggregateVerificationResults(results: VerificationResult[], verificationType: string): VerificationResult {
  if (results.length === 0) {
    return {
      status: 'unknown',
      confidence: 0,
      source: 'system',
      message: `${verificationType} - No sources available. Manual verification required.`
    }
  }
  
  // Prioritize stolen findings
  const stolenResult = results.find(r => r.status === 'stolen')
  if (stolenResult) {
    return {
      ...stolenResult,
      details: {
        ...stolenResult.details,
        all_sources: results
      }
    }
  }
  
  // Then prioritize lost findings
  const lostResult = results.find(r => r.status === 'lost')
  if (lostResult) {
    return {
      ...lostResult,
      details: {
        ...lostResult.details,
        all_sources: results
      }
    }
  }
  
  // Return highest confidence result
  const bestResult = results.reduce((best, current) => 
    current.confidence > best.confidence ? current : best
  )
  
  return {
    ...bestResult,
    details: {
      ...bestResult.details,
      all_sources: results
    }
  }
}

async function verifyWithWebScraper(serialNumber: string, itemType: string): Promise<VerificationResult> {
  try {
    console.log('Calling web-scraper-verification for:', serialNumber)
    
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )
    
    const { data, error } = await supabaseClient.functions.invoke('web-scraper-verification', {
      body: { identifier: serialNumber, itemType }
    })
    
    if (error) {
      console.error('Web scraper error:', error)
      return {
        status: 'unknown',
        confidence: 0,
        source: 'web_scraper',
        message: 'Web scraper unavailable'
      }
    }
    
    if (!data || !data.success) {
      return {
        status: 'unknown',
        confidence: 0,
        source: 'web_scraper',
        message: 'No web scraper results'
      }
    }
    
    // Map web scraper response to VerificationResult
    let status: VerificationResult['status'] = 'unknown'
    if (data.status === 'stolen') status = 'stolen'
    else if (data.status === 'safe') status = 'safe'
    
    return {
      status,
      confidence: data.confidence || 70,
      source: 'web_scraper',
      details: {
        databases_searched: data.sources?.length || 0,
        sources: data.sources || []
      },
      message: data.message || (status === 'stolen' ? 'Item found in stolen registries' : 'No stolen records found in web search')
    }
    
  } catch (error) {
    console.error('Web scraper verification error:', error)
    return {
      status: 'unknown',
      confidence: 0,
      source: 'web_scraper',
      message: 'Web scraper service error'
    }
  }
}

async function verifyWithCheckMend(serialNumber: string, itemType: string): Promise<VerificationResult> {
  try {
    // Check cache first
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )
    
    const cacheKey = `checkmend_${serialNumber}_${itemType}`.toLowerCase()
    const { data: cachedResult } = await supabase
      .from('checkmend_verification_cache')
      .select('*')
      .eq('cache_key', cacheKey)
      .gt('expires_at', new Date().toISOString())
      .single()

    if (cachedResult) {
      return cachedResult.verification_data
    }

    // Get CheckMend API credentials
    const apiKey = Deno.env.get('CHECKMEND_API_KEY')
    const apiUrl = Deno.env.get('CHECKMEND_API_URL') || 'https://api.checkmend.com'

    if (apiKey) {
      try {
        const response = await fetch(`${apiUrl}/v1/verify`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            serial_number: serialNumber,
            item_type: itemType
          })
        })

        if (response.ok) {
          const data = await response.json()
          
          let status: VerificationResult['status'] = 'unknown'
          if (data.is_stolen === true || data.status === 'stolen') {
            status = 'stolen'
          } else if (data.is_lost === true || data.status === 'lost') {
            status = 'lost'
          } else if (data.is_safe === true || data.status === 'safe') {
            status = 'safe'
          }

          const result: VerificationResult = {
            status,
            confidence: data.confidence || (status === 'unknown' ? 45 : 90),
            source: 'CheckMend_API',
            details: data,
            message: data.message || `CheckMend verification: ${status}`
          }

          // Cache the result
          const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
          await supabase
            .from('checkmend_verification_cache')
            .upsert({
              cache_key: cacheKey,
              serial_number: serialNumber,
              item_type: itemType,
              verification_data: result,
              expires_at: expiresAt
            })

          return result
        }
      } catch (apiError) {
        console.error('CheckMend API error:', apiError)
      }
    }

    // Return unknown if CheckMend is not available
    return {
      status: 'unknown',
      confidence: 30,
      source: 'CheckMend_Unavailable',
      message: 'CheckMend service not available'
    }

  } catch (error) {
    console.error('CheckMend verification error:', error)
    return {
      status: 'unknown',
      confidence: 30,
      source: 'CheckMend_Error',
      message: 'CheckMend verification failed'
    }
  }
}
