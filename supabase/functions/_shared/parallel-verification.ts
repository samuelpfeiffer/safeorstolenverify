/**
 * Enhanced Parallel Verification Coordinator
 * Integrates multiple verification sources with intelligent routing by item type
 * Supports: Bike Index, IMEI verification, HotGunz, Vehicle DB, Web scraping, AI analysis
 */

export interface VerificationResult {
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error' | 'suspicious';
  confidence: number;
  source: string;
  details?: any;
  message?: string;
  responseTime?: number;
}

export interface ParallelVerificationOptions {
  identifier: string;
  itemType: string;
  includeWebScraping?: boolean;
  includeAI?: boolean;
  vehicleDetails?: {
    make?: string;
    model?: string;
    year?: string;
    color?: string;
  };
}

// Source reliability weights for confidence scoring
const SOURCE_WEIGHTS: Record<string, number> = {
  'SafeOrStolen Database': 1.0,
  'BikeIndex': 0.95,
  'IMEI_Verification': 0.92,
  'Vehicle_Verification': 0.90,
  'HotGunz': 0.88,
  'NICB': 0.90,
  'Web_Scraper': 0.75,
  'AI_Analysis': 0.65,
  'Cached Verification': 0.80,
};

/**
 * Determine which verification sources to use based on item type
 */
function getSourcesForItemType(itemType: string): string[] {
  const type = itemType.toLowerCase();
  
  if (type.includes('bicycle') || type.includes('bike')) {
    return ['bikeindex', 'webscraper', 'ai'];
  }
  
  if (type.includes('phone') || type.includes('mobile') || type.includes('imei') || type.includes('cell')) {
    return ['imei', 'webscraper', 'ai'];
  }
  
  if (type.includes('vehicle') || type.includes('car') || type.includes('vin') || type.includes('auto') || type.includes('motorcycle') || type.includes('truck')) {
    return ['vehicle', 'webscraper', 'ai'];
  }
  
  if (type.includes('firearm') || type.includes('gun') || type.includes('rifle') || type.includes('pistol')) {
    return ['hotgunz', 'webscraper', 'ai'];
  }
  
  // Default: general verification
  return ['webscraper', 'ai'];
}

/**
 * Run parallel verification across multiple sources with intelligent routing
 */
export async function runParallelVerification(
  supabaseClient: any,
  options: ParallelVerificationOptions
): Promise<VerificationResult> {
  const {
    identifier,
    itemType,
    includeWebScraping = true,
    includeAI = true,
    vehicleDetails
  } = options;

  console.log(`[Parallel Verification] Starting enhanced verification for ${itemType}: ${identifier}`);
  const startTime = Date.now();
  
  // Get sources for this item type
  const sources = getSourcesForItemType(itemType);
  console.log(`[Parallel Verification] Selected sources: ${sources.join(', ')}`);
  
  const verificationPromises: Promise<VerificationResult>[] = [];

  // Add item-specific verification sources
  if (sources.includes('bikeindex')) {
    verificationPromises.push(callBikeIndex(supabaseClient, identifier));
  }
  
  if (sources.includes('imei')) {
    verificationPromises.push(callIMEIVerification(supabaseClient, identifier));
  }
  
  if (sources.includes('vehicle')) {
    verificationPromises.push(callVehicleVerification(supabaseClient, identifier, vehicleDetails));
  }
  
  if (sources.includes('hotgunz')) {
    verificationPromises.push(callHotGunz(supabaseClient, identifier));
  }

  // Add general verification sources
  if (includeWebScraping && sources.includes('webscraper')) {
    verificationPromises.push(callWebScraper(supabaseClient, identifier, itemType));
  }

  if (includeAI && sources.includes('ai')) {
    verificationPromises.push(callAIAnalysis(supabaseClient, identifier, itemType));
  }

  // Execute all verifications in parallel
  const results = await Promise.allSettled(verificationPromises);

  // Extract successful results
  const successfulResults: VerificationResult[] = results
    .filter((r): r is PromiseFulfilledResult<VerificationResult> => r.status === 'fulfilled')
    .map(r => r.value)
    .filter(r => r.status !== 'error');

  console.log(`[Parallel Verification] Completed ${successfulResults.length}/${verificationPromises.length} sources in ${Date.now() - startTime}ms`);

  // Aggregate results with confidence scoring
  return aggregateResultsWithConfidence(successfulResults, identifier, itemType);
}

/**
 * Call Bike Index API
 */
async function callBikeIndex(supabaseClient: any, identifier: string): Promise<VerificationResult> {
  try {
    console.log('[BikeIndex] Calling...');
    const { data, error } = await supabaseClient.functions.invoke('verify-bikeindex', {
      body: { identifier }
    });

    if (error) throw error;

    return {
      status: data?.status || 'unknown',
      confidence: data?.confidence || 0,
      source: 'BikeIndex',
      details: data?.details,
      message: data?.message,
      responseTime: data?.responseTime
    };
  } catch (error) {
    console.error('[BikeIndex] Error:', error);
    return {
      status: 'error',
      confidence: 0,
      source: 'BikeIndex',
      message: 'Bike Index verification failed'
    };
  }
}

/**
 * Call IMEI Verification
 */
async function callIMEIVerification(supabaseClient: any, identifier: string): Promise<VerificationResult> {
  try {
    console.log('[IMEI] Calling...');
    const { data, error } = await supabaseClient.functions.invoke('verify-imei', {
      body: { identifier }
    });

    if (error) throw error;

    return {
      status: data?.status || 'unknown',
      confidence: data?.confidence || 0,
      source: 'IMEI_Verification',
      details: data?.details,
      message: data?.message,
      responseTime: data?.responseTime
    };
  } catch (error) {
    console.error('[IMEI] Error:', error);
    return {
      status: 'error',
      confidence: 0,
      source: 'IMEI_Verification',
      message: 'IMEI verification failed'
    };
  }
}

/**
 * Call Vehicle VIN Verification
 */
async function callVehicleVerification(
  supabaseClient: any, 
  identifier: string,
  vehicleDetails?: { make?: string; model?: string; year?: string; color?: string }
): Promise<VerificationResult> {
  try {
    console.log('[Vehicle] Calling...');
    const { data, error } = await supabaseClient.functions.invoke('verify-vehicle', {
      body: { identifier, ...vehicleDetails }
    });

    if (error) throw error;

    return {
      status: data?.status || 'unknown',
      confidence: data?.confidence || 0,
      source: 'Vehicle_Verification',
      details: data?.details,
      message: data?.message,
      responseTime: data?.responseTime
    };
  } catch (error) {
    console.error('[Vehicle] Error:', error);
    return {
      status: 'error',
      confidence: 0,
      source: 'Vehicle_Verification',
      message: 'Vehicle verification failed'
    };
  }
}

/**
 * Call HotGunz Firearm Verification
 */
async function callHotGunz(supabaseClient: any, identifier: string): Promise<VerificationResult> {
  try {
    console.log('[HotGunz] Calling...');
    const { data, error } = await supabaseClient.functions.invoke('verify-hotgunz', {
      body: { identifier }
    });

    if (error) throw error;

    return {
      status: data?.status || 'unknown',
      confidence: data?.confidence || 0,
      source: 'HotGunz',
      details: data?.details,
      message: data?.message,
      responseTime: data?.responseTime
    };
  } catch (error) {
    console.error('[HotGunz] Error:', error);
    return {
      status: 'error',
      confidence: 0,
      source: 'HotGunz',
      message: 'Firearm verification failed'
    };
  }
}

/**
 * Call Web Scraper Verification
 */
async function callWebScraper(
  supabaseClient: any,
  identifier: string,
  itemType: string
): Promise<VerificationResult> {
  try {
    console.log('[Web Scraper] Calling...');
    const { data, error } = await supabaseClient.functions.invoke('web-scraper-verification', {
      body: { identifier, itemType }
    });

    if (error) throw error;

    if (!data || !data.success) {
      return {
        status: 'unknown',
        confidence: 0,
        source: 'Web_Scraper',
        message: 'No web scraper results'
      };
    }

    return {
      status: data.status === 'stolen' ? 'stolen' : (data.status === 'safe' ? 'safe' : 'unknown'),
      confidence: data.confidence || 70,
      source: 'Web_Scraper',
      details: {
        databases_searched: data.sources?.length || 0,
        sources: data.sources || []
      },
      message: data.message || 'Web scraping completed'
    };
  } catch (error) {
    console.error('[Web Scraper] Error:', error);
    return {
      status: 'error',
      confidence: 0,
      source: 'Web_Scraper',
      message: 'Web scraper unavailable'
    };
  }
}

/**
 * Call AI Analysis
 */
async function callAIAnalysis(
  supabaseClient: any,
  identifier: string,
  itemType: string
): Promise<VerificationResult> {
  try {
    console.log('[AI Analysis] Calling...');
    const { data, error } = await supabaseClient.functions.invoke('ai-safety-advisor', {
      body: { 
        identifier, 
        itemType,
        requestType: 'verification_analysis'
      }
    });

    if (error) throw error;

    if (!data || !data.analysis) {
      return {
        status: 'unknown',
        confidence: 0,
        source: 'AI_Analysis',
        message: 'No AI analysis results'
      };
    }

    const analysis = data.analysis;
    // Decide only from the AI's structured risk_level enum.
    // Never keyword-match the free-text recommendation: advice such as
    // "check a stolen device database" contains the word "stolen" and
    // previously flipped clean items to a false STOLEN verdict.
    let status: VerificationResult['status'] = 'unknown';

    console.log(`[AI Analysis] BUILD 3state-1 risk_level=${analysis.risk_level}`);

    // Strict three-state result. There is no middle "suspicious" category:
    // only strong evidence produces a theft accusation, only clean checks
    // produce a clear verdict, and everything else is "not found".
    switch (analysis.risk_level) {
      case 'critical':
        status = 'stolen';
        break;
      case 'low':
        status = 'safe';
        break;
      default:
        // 'high', 'medium', missing, or anything unrecognized: we simply
        // do not have data on this item.
        status = 'unknown';
    }

    return {
      status,
      confidence: analysis.confidence || 65,
      source: 'AI_Analysis',
      details: {
        risk_level: analysis.risk_level,
        reasoning: analysis.reasoning,
        recommendation: analysis.recommendation
      },
      message: analysis.summary || 'AI analysis completed'
    };
  } catch (error) {
    console.error('[AI Analysis] Error:', error);
    return {
      status: 'error',
      confidence: 0,
      source: 'AI_Analysis',
      message: 'AI analysis unavailable'
    };
  }
}

/**
 * Aggregate results with weighted confidence scoring
 */
function aggregateResultsWithConfidence(
  results: VerificationResult[],
  identifier: string,
  itemType: string
): VerificationResult {
  if (results.length === 0) {
    return {
      status: 'unknown',
      confidence: 0,
      source: 'no_sources_available',
      message: 'No verification sources available. Manual verification required.',
      details: { identifier, itemType }
    };
  }

  // Priority 1: Any stolen report (weighted by source reliability)
  const stolenResults = results.filter(r => r.status === 'stolen');
  if (stolenResults.length > 0) {
    // Get highest confidence stolen result
    const bestStolen = stolenResults.reduce((best, current) => {
      const currentWeight = SOURCE_WEIGHTS[current.source] || 0.5;
      const bestWeight = SOURCE_WEIGHTS[best.source] || 0.5;
      return (current.confidence * currentWeight) > (best.confidence * bestWeight) ? current : best;
    });

    // Calculate aggregate confidence
    const aggregateConfidence = calculateAggregateConfidence(stolenResults);

    return {
      status: 'stolen',
      confidence: aggregateConfidence,
      source: 'Multi-Source Verification',
      message: `🚨 STOLEN: Confirmed by ${stolenResults.length} source(s) with ${aggregateConfidence}% confidence`,
      details: {
        primary_source: bestStolen.source,
        all_sources: results,
        total_sources_checked: results.length,
        stolen_sources: stolenResults.map(r => r.source),
        aggregation_method: 'weighted_confidence'
      }
    };
  }

  // Priority 2: A source returned something inconclusive. There is no
  // middle "suspicious" verdict — an inconclusive source means we could
  // not determine a result, not that the item is flagged.
  const inconclusiveResults = results.filter(r => r.status === 'suspicious');
  if (inconclusiveResults.length > 0) {
    const aggregateConfidence = calculateAggregateConfidence(inconclusiveResults);
    return {
      status: 'unknown',
      confidence: aggregateConfidence,
      source: 'Multi-Source Verification',
      message: `No theft record found for this item in the databases we checked. We could not confirm a result from every source.`,
      details: {
        all_sources: results,
        total_sources_checked: results.length,
        inconclusive_sources: inconclusiveResults.map(r => ({ source: r.source, message: r.message }))
      }
    };
  }

  // Priority 3: Safe results - require minimum sources for high confidence
  const safeResults = results.filter(r => r.status === 'safe');
  if (safeResults.length > 0) {
    const aggregateConfidence = calculateAggregateConfidence(safeResults);
    const sourcesChecked = results.filter(r => r.status !== 'error').length;
    
    return {
      status: 'safe',
      confidence: aggregateConfidence,
      source: 'Multi-Source Verification',
      message: `✅ SAFE: Verified across ${sourcesChecked} database(s) with ${aggregateConfidence}% confidence`,
      details: {
        all_sources: results,
        total_sources_checked: results.length,
        safe_sources: safeResults.map(r => r.source),
        requires_minimum_2_sources: sourcesChecked >= 2
      }
    };
  }

  // Priority 4: Highest confidence result
  const validResults = results.filter(r => r.confidence > 0);
  if (validResults.length > 0) {
    const bestResult = validResults.reduce((best, current) => {
      const currentWeight = SOURCE_WEIGHTS[current.source] || 0.5;
      const bestWeight = SOURCE_WEIGHTS[best.source] || 0.5;
      return (current.confidence * currentWeight) > (best.confidence * bestWeight) ? current : best;
    });

    return {
      ...bestResult,
      details: {
        ...bestResult.details,
        all_sources: results,
        total_sources_checked: results.length
      }
    };
  }

  return {
    status: 'unknown',
    confidence: 0,
    source: 'Multi-Source Verification',
    message: '⚠️ INCONCLUSIVE: Unable to verify. Proceed with caution.',
    details: { all_sources: results, identifier, itemType }
  };
}

/**
 * Calculate aggregate confidence using weighted average
 */
function calculateAggregateConfidence(results: VerificationResult[]): number {
  if (results.length === 0) return 0;

  let totalWeight = 0;
  let weightedSum = 0;

  for (const result of results) {
    const weight = SOURCE_WEIGHTS[result.source] || 0.5;
    weightedSum += result.confidence * weight;
    totalWeight += weight;
  }

  // Apply multi-source bonus (more sources = higher confidence)
  const multiSourceBonus = Math.min(results.length * 2, 10);
  const baseConfidence = totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 0;
  
  return Math.min(baseConfidence + multiSourceBonus, 99);
}
