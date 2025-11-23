/**
 * Shared Parallel Verification Coordinator
 * Integrates web scraping, AI analysis, and API sources for comprehensive verification
 */

export interface VerificationResult {
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  confidence: number;
  source: string;
  details?: any;
  message?: string;
}

export interface ParallelVerificationOptions {
  identifier: string;
  itemType: string;
  includeWebScraping?: boolean;
  includeAI?: boolean;
  additionalSources?: Array<() => Promise<VerificationResult>>;
}

/**
 * Run parallel verification across multiple sources including web scraping and AI
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
    additionalSources = []
  } = options;

  console.log(`[Parallel Verification] Starting for ${itemType}: ${identifier}`);
  
  const verificationPromises: Promise<VerificationResult>[] = [];

  // 1. Web Scraper Verification
  if (includeWebScraping) {
    verificationPromises.push(
      callWebScraper(supabaseClient, identifier, itemType)
    );
  }

  // 2. AI Analysis
  if (includeAI) {
    verificationPromises.push(
      callAIAnalysis(supabaseClient, identifier, itemType)
    );
  }

  // 3. Additional sources provided by caller
  verificationPromises.push(...additionalSources.map(fn => 
    fn().catch(err => {
      console.error('Additional source error:', err);
      return {
        status: 'unknown' as const,
        confidence: 0,
        source: 'additional_source_error',
        message: 'Additional verification source failed'
      };
    })
  ));

  // Execute all verifications in parallel
  const results = await Promise.allSettled(verificationPromises);

  // Extract successful results
  const successfulResults: VerificationResult[] = results
    .filter((r): r is PromiseFulfilledResult<VerificationResult> => r.status === 'fulfilled')
    .map(r => r.value)
    .filter(r => r.confidence > 0);

  console.log(`[Parallel Verification] Completed ${successfulResults.length}/${verificationPromises.length} sources`);

  // Aggregate results
  return aggregateResults(successfulResults, identifier, itemType);
}

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
        source: 'web_scraper',
        message: 'No web scraper results'
      };
    }

    let status: VerificationResult['status'] = 'unknown';
    if (data.status === 'stolen') status = 'stolen';
    else if (data.status === 'safe') status = 'safe';

    return {
      status,
      confidence: data.confidence || 70,
      source: 'Web_Scraper',
      details: {
        databases_searched: data.sources?.length || 0,
        sources: data.sources || []
      },
      message: data.message || (status === 'stolen' ? 'Found in stolen registries' : 'No stolen records found')
    };
  } catch (error) {
    console.error('[Web Scraper] Error:', error);
    return {
      status: 'unknown',
      confidence: 0,
      source: 'web_scraper_error',
      message: 'Web scraper unavailable'
    };
  }
}

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
        source: 'ai_analysis',
        message: 'No AI analysis results'
      };
    }

    const analysis = data.analysis;
    let status: VerificationResult['status'] = 'unknown';
    
    if (analysis.risk_level === 'high' || analysis.recommendation?.includes('stolen')) {
      status = 'stolen';
    } else if (analysis.risk_level === 'low') {
      status = 'safe';
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
      status: 'unknown',
      confidence: 0,
      source: 'ai_analysis_error',
      message: 'AI analysis unavailable'
    };
  }
}

function aggregateResults(
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

  // Priority 1: Any stolen report
  const stolenResult = results.find(r => r.status === 'stolen');
  if (stolenResult) {
    return {
      ...stolenResult,
      details: {
        ...stolenResult.details,
        all_sources: results,
        total_sources_checked: results.length
      }
    };
  }

  // Priority 2: Any lost report
  const lostResult = results.find(r => r.status === 'lost');
  if (lostResult) {
    return {
      ...lostResult,
      details: {
        ...lostResult.details,
        all_sources: results,
        total_sources_checked: results.length
      }
    };
  }

  // Priority 3: Highest confidence result
  const bestResult = results.reduce((best, current) =>
    current.confidence > best.confidence ? current : best
  );

  return {
    ...bestResult,
    details: {
      ...bestResult.details,
      all_sources: results,
      total_sources_checked: results.length
    }
  };
}
