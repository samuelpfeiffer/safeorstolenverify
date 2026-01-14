import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface VerificationRequest {
  query: string;
  queryType?: string;
  userId?: string;
}

interface SourceResult {
  sourceId: string;
  sourceName: string;
  status: 'found' | 'not_found' | 'error' | 'timeout';
  stolenStatus?: 'stolen' | 'safe' | 'unknown';
  confidence: 'high' | 'medium' | 'low';
  responseTimeMs: number;
  data?: any;
  error?: string;
}

// Detect query type from input
function detectQueryType(query: string): string {
  const cleaned = query.replace(/[\s\-\.]/g, '').toUpperCase();
  
  if (/^\d{15}$/.test(cleaned)) return 'imei';
  if (/^[A-HJ-NPR-Z0-9]{17}$/.test(cleaned)) return 'vin';
  if (/^[A-Z0-9]{5,8}$/.test(cleaned)) return 'plate';
  return 'serial';
}

// Source configurations
const SOURCES = {
  internal: {
    id: 'safeorstolen_db',
    name: 'SafeOrStolen Database',
    queryTypes: ['imei', 'vin', 'serial', 'plate'],
  },
  bikeindex: {
    id: 'bikeindex',
    name: 'BikeIndex',
    queryTypes: ['serial'],
  },
  imei: {
    id: 'imeiinfo',
    name: 'Device Registry',
    queryTypes: ['imei'],
  },
  vehicle: {
    id: 'vehicle_db',
    name: 'Vehicle Registry',
    queryTypes: ['vin', 'plate'],
  },
  hotgunz: {
    id: 'hotgunz',
    name: 'Firearm Registry',
    queryTypes: ['serial'],
  },
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query, queryType: providedType, userId } = await req.json() as VerificationRequest;

    if (!query || query.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Query is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const startTime = Date.now();
    const cleanedQuery = query.replace(/[\s\-\.]/g, '').toUpperCase();
    const queryType = providedType || detectQueryType(cleanedQuery);
    const searchId = `search_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    console.log(`[verify-parallel] Starting parallel verification for ${queryType}: ${cleanedQuery}`);

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const results: SourceResult[] = [];
    const verificationPromises: Promise<SourceResult>[] = [];

    // 1. Internal database check
    verificationPromises.push((async (): Promise<SourceResult> => {
      const sourceStart = Date.now();
      try {
        const { data, error } = await supabaseClient
          .from('stolen_items')
          .select('*')
          .or(`serial_number.ilike.%${cleanedQuery}%,imei.ilike.%${cleanedQuery}%,vin.ilike.%${cleanedQuery}%`)
          .limit(10);

        if (error) throw error;

        const found = data && data.length > 0;
        const stolen = found && data.some(item => item.status === 'stolen' || item.status === 'active');

        return {
          sourceId: SOURCES.internal.id,
          sourceName: SOURCES.internal.name,
          status: found ? 'found' : 'not_found',
          stolenStatus: found ? (stolen ? 'stolen' : 'safe') : undefined,
          confidence: 'high',
          responseTimeMs: Date.now() - sourceStart,
          data: found ? { matches: data.length } : null,
        };
      } catch (error) {
        return {
          sourceId: SOURCES.internal.id,
          sourceName: SOURCES.internal.name,
          status: 'error',
          confidence: 'low',
          responseTimeMs: Date.now() - sourceStart,
          error: error.message,
        };
      }
    })());

    // 2. BikeIndex (for serial numbers)
    if (queryType === 'serial') {
      verificationPromises.push((async (): Promise<SourceResult> => {
        const sourceStart = Date.now();
        try {
          const response = await fetch(
            `https://bikeindex.org/api/v3/search?serial=${encodeURIComponent(cleanedQuery)}&stolenness=all`,
            { headers: { 'Accept': 'application/json' } }
          );
          
          if (!response.ok) throw new Error(`BikeIndex API error: ${response.status}`);
          
          const data = await response.json();
          const bikes = data.bikes || [];
          const found = bikes.length > 0;
          const stolen = found && bikes.some((b: any) => b.stolen);

          return {
            sourceId: SOURCES.bikeindex.id,
            sourceName: SOURCES.bikeindex.name,
            status: found ? 'found' : 'not_found',
            stolenStatus: found ? (stolen ? 'stolen' : 'safe') : undefined,
            confidence: 'high',
            responseTimeMs: Date.now() - sourceStart,
            data: found ? { 
              bikes: bikes.length,
              itemDetails: bikes[0] ? {
                type: 'Bicycle',
                manufacturer: bikes[0].manufacturer_name,
                model: bikes[0].frame_model,
                year: bikes[0].year?.toString(),
              } : undefined
            } : null,
          };
        } catch (error) {
          return {
            sourceId: SOURCES.bikeindex.id,
            sourceName: SOURCES.bikeindex.name,
            status: 'error',
            confidence: 'low',
            responseTimeMs: Date.now() - sourceStart,
            error: error.message,
          };
        }
      })());
    }

    // 3. IMEI verification (for IMEI numbers)
    if (queryType === 'imei') {
      verificationPromises.push((async (): Promise<SourceResult> => {
        const sourceStart = Date.now();
        try {
          const { data, error } = await supabaseClient.functions.invoke('verify-imei', {
            body: { identifier: cleanedQuery }
          });

          if (error) throw error;

          return {
            sourceId: SOURCES.imei.id,
            sourceName: SOURCES.imei.name,
            status: data?.success ? 'found' : 'not_found',
            stolenStatus: data?.status === 'stolen' ? 'stolen' : 
                          data?.status === 'safe' ? 'safe' : undefined,
            confidence: data?.confidence >= 80 ? 'high' : 
                       data?.confidence >= 50 ? 'medium' : 'low',
            responseTimeMs: Date.now() - sourceStart,
            data: data?.details,
          };
        } catch (error) {
          return {
            sourceId: SOURCES.imei.id,
            sourceName: SOURCES.imei.name,
            status: 'error',
            confidence: 'low',
            responseTimeMs: Date.now() - sourceStart,
            error: error.message,
          };
        }
      })());
    }

    // 4. Vehicle verification (for VIN/plates)
    if (queryType === 'vin' || queryType === 'plate') {
      verificationPromises.push((async (): Promise<SourceResult> => {
        const sourceStart = Date.now();
        try {
          const { data, error } = await supabaseClient.functions.invoke('verify-vehicle', {
            body: { identifier: cleanedQuery }
          });

          if (error) throw error;

          return {
            sourceId: SOURCES.vehicle.id,
            sourceName: SOURCES.vehicle.name,
            status: data?.success ? 'found' : 'not_found',
            stolenStatus: data?.status === 'stolen' ? 'stolen' : 
                          data?.status === 'safe' ? 'safe' : undefined,
            confidence: data?.confidence >= 80 ? 'high' : 
                       data?.confidence >= 50 ? 'medium' : 'low',
            responseTimeMs: Date.now() - sourceStart,
            data: data?.details,
          };
        } catch (error) {
          return {
            sourceId: SOURCES.vehicle.id,
            sourceName: SOURCES.vehicle.name,
            status: 'error',
            confidence: 'low',
            responseTimeMs: Date.now() - sourceStart,
            error: error.message,
          };
        }
      })());
    }

    // 5. Firearm verification (for serial numbers)
    if (queryType === 'serial') {
      verificationPromises.push((async (): Promise<SourceResult> => {
        const sourceStart = Date.now();
        try {
          const { data, error } = await supabaseClient.functions.invoke('verify-hotgunz', {
            body: { identifier: cleanedQuery }
          });

          if (error) throw error;

          return {
            sourceId: SOURCES.hotgunz.id,
            sourceName: SOURCES.hotgunz.name,
            status: data?.found ? 'found' : 'not_found',
            stolenStatus: data?.stolen ? 'stolen' : 
                          data?.found ? 'safe' : undefined,
            confidence: 'medium',
            responseTimeMs: Date.now() - sourceStart,
            data: data,
          };
        } catch (error) {
          return {
            sourceId: SOURCES.hotgunz.id,
            sourceName: SOURCES.hotgunz.name,
            status: 'error',
            confidence: 'low',
            responseTimeMs: Date.now() - sourceStart,
            error: error.message,
          };
        }
      })());
    }

    // Wait for all sources with timeout
    const allResults = await Promise.race([
      Promise.all(verificationPromises),
      new Promise<SourceResult[]>(resolve => 
        setTimeout(() => resolve(results), 15000) // 15 second max
      )
    ]);

    results.push(...allResults);

    // Calculate overall status
    const foundSources = results.filter(r => r.status === 'found');
    const stolenSources = foundSources.filter(r => r.stolenStatus === 'stolen');
    const safeSources = foundSources.filter(r => r.stolenStatus === 'safe');

    let overallStatus: 'stolen' | 'safe' | 'check_details' | 'unknown' = 'unknown';
    
    if (stolenSources.some(s => s.confidence === 'high')) {
      overallStatus = 'stolen';
    } else if (stolenSources.length >= 2) {
      overallStatus = 'stolen';
    } else if (stolenSources.length === 1) {
      overallStatus = 'check_details';
    } else if (safeSources.length > 0) {
      overallStatus = 'safe';
    }

    // Calculate confidence score
    const validResults = results.filter(r => r.status === 'found' || r.status === 'not_found');
    const weights = { high: 3, medium: 2, low: 1 };
    let weightedSum = 0;
    let maxPossible = 0;
    
    for (const source of foundSources) {
      weightedSum += weights[source.confidence];
      maxPossible += weights.high;
    }
    
    const coverageBonus = Math.min(20, validResults.length * 4);
    const confidenceScore = Math.min(100, Math.round((weightedSum / Math.max(maxPossible, 1)) * 80) + coverageBonus);

    // Store result
    try {
      await supabaseClient
        .from('verification_searches')
        .insert({
          user_id: userId || null,
          serial_number: cleanedQuery,
          item_type: queryType,
          result: {
            searchId,
            overallStatus,
            confidenceScore,
            sourcesChecked: results.length,
            sourcesWithResults: foundSources.length,
            sources: results.map(r => ({
              id: r.sourceId,
              name: r.sourceName,
              status: r.status,
              stolenStatus: r.stolenStatus,
            })),
          },
        });
    } catch (storeError) {
      console.error('[verify-parallel] Failed to store result:', storeError);
    }

    const response = {
      searchId,
      query: cleanedQuery,
      queryType,
      timestamp: new Date().toISOString(),
      totalTimeMs: Date.now() - startTime,
      overallStatus,
      confidenceScore,
      overallConfidence: confidenceScore >= 70 ? 'high' : confidenceScore >= 40 ? 'medium' : 'low',
      sourcesChecked: results.length,
      sourcesWithResults: foundSources.length,
      sources: results,
      recommendations: generateRecommendations(overallStatus, confidenceScore),
    };

    console.log(`[verify-parallel] Complete in ${response.totalTimeMs}ms - Status: ${overallStatus}`);

    return new Response(
      JSON.stringify(response),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[verify-parallel] Error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Parallel verification failed',
        searchId: `error_${Date.now()}`,
        overallStatus: 'unknown',
        confidenceScore: 0,
        sources: [],
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function generateRecommendations(status: string, confidence: number): string[] {
  const recommendations: string[] = [];
  
  if (status === 'stolen') {
    recommendations.push('DO NOT purchase this item - it has been reported stolen');
    recommendations.push('If you already own this item, contact local law enforcement');
    recommendations.push('Report this listing if you found it on a marketplace');
  } else if (status === 'check_details') {
    recommendations.push('Proceed with caution - one source flagged this item');
    recommendations.push('Request proof of ownership from seller');
    recommendations.push('Meet in a safe location like a police station');
  } else if (status === 'safe') {
    recommendations.push('No stolen reports found - item appears safe');
    recommendations.push('Still request proof of purchase when possible');
    recommendations.push('Save your SafeOrStolen receipt as proof you verified');
  } else {
    recommendations.push('Item not found in our databases');
    recommendations.push("This doesn't guarantee the item is safe");
    recommendations.push('Request proof of ownership from seller');
  }
  
  if (confidence < 50) {
    recommendations.push('Limited data available - exercise additional caution');
  }
  
  return recommendations;
}
