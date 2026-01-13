/**
 * Aggregated Search Service
 * Combines multiple data sources for comprehensive stolen item verification
 */

import { searchBikeIndex, BikeIndexResult, formatBikeResult } from './bikeIndexService';

export interface AggregatedResult {
  source: string;
  sourceUrl: string;
  found: boolean;
  stolen: boolean;
  data: any;
  confidence: 'high' | 'medium' | 'low';
  displayInfo?: {
    title: string;
    description: string;
    imageUrl?: string;
    detailUrl?: string;
  };
}

export interface SearchResults {
  query: string;
  queryType: 'imei' | 'vin' | 'serial' | 'plate' | 'unknown';
  timestamp: Date;
  results: AggregatedResult[];
  overallStatus: 'safe' | 'stolen' | 'unknown' | 'partial_match';
  searchDuration: number; // milliseconds
}

/**
 * Detect the type of identifier being searched
 */
export function detectQueryType(query: string): 'imei' | 'vin' | 'serial' | 'plate' | 'unknown' {
  const cleaned = query.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  
  // IMEI is exactly 15 digits
  if (/^\d{15}$/.test(cleaned)) {
    return 'imei';
  }
  
  // VIN is exactly 17 alphanumeric (no I, O, Q)
  if (/^[A-HJ-NPR-Z0-9]{17}$/.test(cleaned)) {
    return 'vin';
  }
  
  // License plate is typically 5-8 characters
  if (/^[A-Z0-9]{5,8}$/.test(cleaned) && cleaned.length <= 8) {
    return 'plate';
  }
  
  // Default to serial for other patterns
  return 'serial';
}

/**
 * Determine overall status from aggregated results
 */
function determineOverallStatus(results: AggregatedResult[]): 'safe' | 'stolen' | 'unknown' | 'partial_match' {
  const hasStolen = results.some(r => r.found && r.stolen);
  const hasFound = results.some(r => r.found);
  const hasPartialMatch = results.some(r => r.confidence === 'low' && r.found);
  
  if (hasStolen) return 'stolen';
  if (hasPartialMatch && !hasFound) return 'partial_match';
  if (hasFound) return 'safe';
  return 'unknown';
}

/**
 * Search internal SafeOrStolen database
 * This would connect to your Supabase backend
 */
async function searchInternalDatabase(query: string): Promise<AggregatedResult> {
  // This is a placeholder - integrate with your actual Supabase verification
  // For now, return a not-found result to indicate the search was attempted
  return {
    source: 'SafeOrStolen Database',
    sourceUrl: 'https://safeorstolen.com',
    found: false,
    stolen: false,
    data: null,
    confidence: 'high',
  };
}

/**
 * Perform aggregated search across all available sources
 * @param query - The identifier to search (IMEI, VIN, serial, plate)
 * @returns Comprehensive search results from all sources
 */
export async function aggregatedSearch(query: string): Promise<SearchResults> {
  const startTime = Date.now();
  const queryType = detectQueryType(query);
  const results: AggregatedResult[] = [];
  
  // Search SafeOrStolen internal database
  try {
    const internalResult = await searchInternalDatabase(query);
    results.push(internalResult);
  } catch (error) {
    console.error('Internal database search error:', error);
  }
  
  // If it looks like a bike serial, search BikeIndex
  if (queryType === 'serial') {
    try {
      const bikeResults = await searchBikeIndex(query);
      if (bikeResults.length > 0) {
        const hasStolenBike = bikeResults.some(b => b.stolen);
        const firstBike = bikeResults[0];
        const formatted = formatBikeResult(firstBike);
        
        results.push({
          source: 'BikeIndex',
          sourceUrl: 'https://bikeindex.org',
          found: true,
          stolen: hasStolenBike,
          data: bikeResults,
          confidence: 'high',
          displayInfo: {
            title: formatted.title,
            description: `${bikeResults.length} bike(s) found - ${hasStolenBike ? 'STOLEN' : 'Not reported stolen'}`,
            imageUrl: formatted.imageUrl || undefined,
            detailUrl: formatted.detailUrl,
          },
        });
      }
    } catch (error) {
      console.error('BikeIndex search error:', error);
    }
  }
  
  // TODO: Add more source integrations here:
  // - HotGunz for firearms
  // - TheftAZ for Arizona items
  // - FDLE for Florida items
  // - Carrier blacklists for phones
  
  const searchDuration = Date.now() - startTime;
  
  return {
    query,
    queryType,
    timestamp: new Date(),
    results,
    overallStatus: determineOverallStatus(results),
    searchDuration,
  };
}

/**
 * Calculate similarity between two strings
 * Used for partial serial matching
 */
export function calculateSimilarity(partial: string, full: string): number {
  const partialClean = partial.replace(/[*?]/g, '').toUpperCase();
  const fullClean = full.toUpperCase();
  
  if (partialClean.length === 0 || fullClean.length === 0) {
    return 0;
  }
  
  let matches = 0;
  let position = 0;
  
  for (const char of partialClean) {
    const foundIndex = fullClean.indexOf(char, position);
    if (foundIndex !== -1) {
      matches++;
      position = foundIndex + 1;
    }
  }
  
  return Math.round((matches / partialClean.length) * 100);
}
