/**
 * Parallel Verification Coordinator (v4 - paywall)
 * Real sources: BikeIndex, IMEI, Vehicle, HotGunz. Web scraper = possible mention. AI = advisory only.
 * v3 (Sept 27 2026): pass through "suspicious" and real input-error messages.
 * v4 (Sept 30 2026): passes `paid` to verify-imei so the paid phone blacklist only runs for paying customers.
 */

export interface VerificationResult {
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error' | 'suspicious' | 'advisory';
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
  paid?: boolean;
  vehicleDetails?: { make?: string; model?: string; year?: string; color?: string };
}

function getSourcesForItemType(itemType: string): string[] {
  const type = itemType.toLowerCase();
  if (type.includes('bicycle') || type.includes('bike')) return ['bikeindex', 'webscraper', 'ai'];
  if (type.includes('phone') || type.includes('mobile') || type.includes('imei') || type.includes('cell')) return ['imei', 'webscraper', 'ai'];
  if (type.includes('vehicle') || type.includes('car') || type.includes('vin') || type.includes('auto') || type.includes('motorcycle') || type.includes('truck')) return ['vehicle', 'webscraper', 'ai'];
  if (type.includes('firearm') || type.includes('gun') || type.includes('rifle') || type.includes('pistol')) return ['hotgunz', 'webscraper', 'ai'];
  return ['webscraper', 'ai'];
}

export async function runParallelVerification(supabaseClient: any, options: ParallelVerificationOptions): Promise<VerificationResult> {
  const { identifier, itemType, includeWebScraping = true, includeAI = true, vehicleDetails, paid = false } = options;
  const sources = getSourcesForItemType(itemType);
  const calls: Promise<VerificationResult>[] = [];

  if (sources.includes('bikeindex')) calls.push(callSource(supabaseClient, 'verify-bikeindex', { identifier }, 'BikeIndex'));
  if (sources.includes('imei')) calls.push(callSource(supabaseClient, 'verify-imei', { identifier, paid }, 'IMEI_Verification'));
  if (sources.includes('vehicle')) calls.push(callSource(supabaseClient, 'verify-vehicle', { identifier, ...vehicleDetails }, 'Vehicle_Verification'));
  if (sources.includes('hotgunz')) calls.push(callSource(supabaseClient, 'verify-hotgunz', { identifier }, 'HotGunz'));
  if (includeWebScraping && sources.includes('webscraper')) calls.push(callWebScraper(supabaseClient, identifier, itemType));
  if (includeAI && sources.includes('ai')) calls.push(callAIAnalysis(supabaseClient, identifier, itemType));

  const settled = await Promise.allSettled(calls);
  const all = settled
    .filter((r): r is PromiseFulfilledResult<VerificationResult> => r.status === 'fulfilled')
    .map(r => r.value);

  return { status: 'unknown', confidence: 0, source: 'Multi-Source Verification', details: { all_sources: all } };
}

async function callSource(supabaseClient: any, fn: string, body: any, source: string): Promise<VerificationResult> {
  try {
    const { data, error } = await supabaseClient.functions.invoke(fn, { body });
    if (error) throw error;
    const allowed = ['safe', 'stolen', 'lost', 'unknown', 'suspicious'];
    const status = allowed.includes(data?.status) ? data.status : 'unknown';
    return { status, confidence: data?.confidence || 0, source, details: data?.details, message: data?.message, responseTime: data?.responseTime };
  } catch (error: any) {
    try {
      const ctx = error?.context;
      if (ctx && typeof ctx.json === 'function' && ctx.status === 400) {
        const body = await ctx.json();
        if (body?.message) {
          return { status: 'error', confidence: 0, source, message: body.message, details: { invalidInput: true, ...(body.details || {}) } };
        }
      }
    } catch (_) { /* fall through */ }
    console.error(`[${source}] Error:`, error);
    return { status: 'error', confidence: 0, source, message: `${source} check unavailable` };
  }
}

async function callWebScraper(supabaseClient: any, identifier: string, itemType: string): Promise<VerificationResult> {
  try {
    const { data, error } = await supabaseClient.functions.invoke('web-scraper-verification', { body: { identifier, itemType } });
    if (error) throw error;
    if (!data || !data.success) return { status: 'unknown', confidence: 0, source: 'Web_Scraper', message: 'No web results' };
    return {
      status: data.status === 'stolen' ? 'stolen' : 'unknown',
      confidence: data.status === 'stolen' ? (data.confidence || 50) : 0,
      source: 'Web_Scraper',
      details: { databases_searched: data.sources?.length || 0, sources: data.sources || [] },
      message: data.message || 'Web search completed'
    };
  } catch (error) {
    console.error('[Web Scraper] Error:', error);
    return { status: 'error', confidence: 0, source: 'Web_Scraper', message: 'Web search unavailable' };
  }
}

async function callAIAnalysis(supabaseClient: any, identifier: string, itemType: string): Promise<VerificationResult> {
  try {
    const { data, error } = await supabaseClient.functions.invoke('ai-safety-advisor', {
      body: { identifier, itemType, requestType: 'verification_analysis' }
    });
    if (error) throw error;
    if (!data || !data.analysis) return { status: 'advisory', confidence: 0, source: 'AI_Analysis', message: '' };
    const a = data.analysis;
    return {
      status: 'advisory',
      confidence: 0,
      source: 'AI_Analysis',
      details: { risk_level: a.risk_level, reasoning: a.reasoning, recommendation: a.recommendation },
      message: a.summary || ''
    };
  } catch (error) {
    console.error('[AI Analysis] Error:', error);
    return { status: 'error', confidence: 0, source: 'AI_Analysis', message: 'AI notes unavailable' };
  }
}
