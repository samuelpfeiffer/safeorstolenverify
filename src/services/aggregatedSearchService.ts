/**
 * Aggregated Search Service
 * Combines multiple data sources for comprehensive stolen item verification
 */

import { searchBikeIndex, BikeIndexResult, formatBikeResult } from './bikeIndexService';

export type QueryType = 'imei' | 'vin' | 'serial' | 'plate' | 'unknown';

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
  queryType: QueryType;
  timestamp: Date;
  results: AggregatedResult[];
  overallStatus: 'safe' | 'stolen' | 'unknown' | 'partial_match';
  searchDuration: number;
  bikeIndexResults?: BikeIndexResult[];
}

// Alias for backwards compatibility
export type AggregatedSearchResult = SearchResults;

/**
 * Detect the type of identifier being searched
 */
export function detectQueryType(query: string): QueryType {
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
 * Get human-readable name for query type
 */
export function getQueryTypeName(type: QueryType): string {
  switch (type) {
    case 'imei': return 'IMEI Number';
    case 'vin': return 'VIN (Vehicle)';
    case 'plate': return 'License Plate';
    case 'serial': return 'Serial Number';
    default: return 'Identifier';
  }
}

/**
 * Format the overall status for display
 */
export function formatStatus(status: SearchResults['overallStatus']): {
  label: string;
  color: 'green' | 'red' | 'yellow' | 'gray';
  icon: string;
} {
  switch (status) {
    case 'safe':
      return { label: 'CLEAR', color: 'green', icon: '✓' };
    case 'stolen':
      return { label: 'STOLEN', color: 'red', icon: '⚠' };
    case 'partial_match':
      return { label: 'CHECK DETAILS', color: 'yellow', icon: '!' };
    default:
      return { label: 'UNKNOWN', color: 'gray', icon: '?' };
  }
}

/**
 * Get recommended action based on status
 */
export function getRecommendedAction(status: SearchResults['overallStatus']): string {
  switch (status) {
    case 'safe':
      return 'Item appears clean. Proceed with purchase but maintain documentation.';
    case 'stolen':
      return 'DO NOT BUY. This item has been reported stolen. Walk away and report to authorities.';
    case 'partial_match':
      return 'Potential match found. Review details carefully before proceeding.';
    default:
      return 'No records found. Item may be safe but exercise caution with high-value purchases.';
  }
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
 */
async function searchInternalDatabase(query: string): Promise<AggregatedResult> {
  try {
    const { supabase } = await import('@/integrations/supabase/client');
    
    // Search across multiple identifier types
    const { data, error } = await supabase
      .from('stolen_items')
      .select('*')
      .or(`serial_number.ilike.%${query}%,imei.ilike.%${query}%,vin.ilike.%${query}%`)
      .limit(10);
    
    if (error) {
      throw error;
    }
    
    const found = data && data.length > 0;
    const stolen = found && data.some(item => item.status === 'stolen' || item.status === 'active');
    
    return {
      source: 'SafeOrStolen Database',
      sourceUrl: 'https://safeorstolen.com',
      found,
      stolen,
      data: data || null,
      confidence: 'high',
    };
  } catch (error) {
    console.error('Internal database search error:', error);
    return {
      source: 'SafeOrStolen Database',
      sourceUrl: 'https://safeorstolen.com',
      found: false,
      stolen: false,
      data: null,
      confidence: 'high',
    };
  }
}

/**
 * Perform aggregated search across all available sources
 */
export async function aggregatedSearch(query: string): Promise<SearchResults> {
  const startTime = Date.now();
  const queryType = detectQueryType(query);
  const results: AggregatedResult[] = [];
  let bikeIndexResults: BikeIndexResult[] | undefined;
  
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
      bikeIndexResults = await searchBikeIndex(query);
      if (bikeIndexResults.length > 0) {
        const hasStolenBike = bikeIndexResults.some(b => b.stolen);
        const firstBike = bikeIndexResults[0];
        const formatted = formatBikeResult(firstBike);
        
        results.push({
          source: 'BikeIndex',
          sourceUrl: 'https://bikeindex.org',
          found: true,
          stolen: hasStolenBike,
          data: bikeIndexResults,
          confidence: 'high',
          displayInfo: {
            title: formatted.title,
            description: `${bikeIndexResults.length} bike(s) found - ${hasStolenBike ? 'STOLEN' : 'Not reported stolen'}`,
            imageUrl: formatted.imageUrl || undefined,
            detailUrl: formatted.detailUrl,
          },
        });
      }
    } catch (error) {
      console.error('BikeIndex search error:', error);
    }
  }
  
  const searchDuration = Date.now() - startTime;
  
  return {
    query,
    queryType,
    timestamp: new Date(),
    results,
    overallStatus: determineOverallStatus(results),
    searchDuration,
    bikeIndexResults,
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
