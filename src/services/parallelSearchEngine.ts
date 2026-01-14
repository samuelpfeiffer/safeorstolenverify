/**
 * SafeOrStolen Parallel Search Engine
 * Queries multiple sources simultaneously for fastest, most comprehensive results
 */

import { supabase } from '@/integrations/supabase/client';
import { searchBikeIndex, BikeIndexResult, formatBikeResult } from './bikeIndexService';

export type QueryType = 'imei' | 'vin' | 'serial' | 'plate' | 'unknown';
export type SourceStatus = 'searching' | 'found' | 'not_found' | 'error' | 'timeout';
export type StolenStatus = 'stolen' | 'safe' | 'unknown' | 'check_details';
export type ConfidenceLevel = 'high' | 'medium' | 'low';

export interface SourceResult {
  sourceId: string;
  sourceName: string;
  sourceIcon: string;
  status: SourceStatus;
  stolenStatus?: StolenStatus;
  confidence: ConfidenceLevel;
  responseTimeMs: number;
  data?: any;
  errorMessage?: string;
  detailsUrl?: string;
}

export interface SearchResult {
  query: string;
  queryType: QueryType;
  searchId: string;
  timestamp: Date;
  totalTimeMs: number;
  overallStatus: StolenStatus;
  overallConfidence: ConfidenceLevel;
  confidenceScore: number; // 0-100
  sourcesChecked: number;
  sourcesWithResults: number;
  sources: SourceResult[];
  itemDetails?: ItemDetails;
  recommendations: string[];
}

export interface ItemDetails {
  type?: string;
  manufacturer?: string;
  model?: string;
  year?: string;
  color?: string;
  description?: string;
  imageUrl?: string;
  additionalInfo?: Record<string, string>;
}

// Source configuration - each source knows what query types it handles
interface SourceConfig {
  id: string;
  name: string;
  icon: string;
  queryTypes: QueryType[];
  timeout: number;
  searchFn: (query: string, queryType: QueryType) => Promise<SourceSearchResult>;
}

interface SourceSearchResult {
  found: boolean;
  stolen?: boolean;
  confidence: ConfidenceLevel;
  data?: any;
  detailsUrl?: string;
}

// Detect query type from input
export function detectQueryType(query: string): QueryType {
  const cleaned = query.replace(/[\s\-\.]/g, '').toUpperCase();
  
  // IMEI: exactly 15 digits
  if (/^\d{15}$/.test(cleaned)) {
    return 'imei';
  }
  
  // VIN: exactly 17 alphanumeric (no I, O, Q)
  if (/^[A-HJ-NPR-Z0-9]{17}$/.test(cleaned)) {
    return 'vin';
  }
  
  // License plate: 5-8 alphanumeric, may include spaces
  if (/^[A-Z0-9]{5,8}$/.test(cleaned)) {
    return 'plate';
  }
  
  // Default to serial number
  return 'serial';
}

// Generate unique search ID
function generateSearchId(): string {
  return `search_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Timeout wrapper for promises
function withTimeout<T>(promise: Promise<T>, ms: number, sourceId: string): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => 
      setTimeout(() => reject(new Error(`${sourceId} timeout after ${ms}ms`)), ms)
    )
  ]);
}

// Calculate overall confidence based on source results
function calculateConfidence(sources: SourceResult[]): { score: number; level: ConfidenceLevel } {
  const foundSources = sources.filter(s => s.status === 'found');
  const totalSources = sources.filter(s => s.status !== 'error' && s.status !== 'timeout').length;
  
  if (totalSources === 0) return { score: 0, level: 'low' };
  
  // Weight by confidence level
  const weights = { high: 3, medium: 2, low: 1 };
  let weightedSum = 0;
  let maxPossible = 0;
  
  for (const source of foundSources) {
    weightedSum += weights[source.confidence];
    maxPossible += weights.high;
  }
  
  // Add points for number of sources checked
  const coverageBonus = Math.min(20, totalSources * 4);
  const score = Math.min(100, Math.round((weightedSum / Math.max(maxPossible, 1)) * 80) + coverageBonus);
  
  let level: ConfidenceLevel = 'low';
  if (score >= 70) level = 'high';
  else if (score >= 40) level = 'medium';
  
  return { score, level };
}

// Determine overall stolen status
function determineOverallStatus(sources: SourceResult[]): StolenStatus {
  const foundSources = sources.filter(s => s.status === 'found' && s.stolenStatus);
  
  // If ANY high-confidence source says stolen, it's stolen
  const stolenHighConfidence = foundSources.some(
    s => s.stolenStatus === 'stolen' && s.confidence === 'high'
  );
  if (stolenHighConfidence) return 'stolen';
  
  // If multiple sources say stolen, it's stolen
  const stolenCount = foundSources.filter(s => s.stolenStatus === 'stolen').length;
  if (stolenCount >= 2) return 'stolen';
  
  // If one low/medium confidence says stolen, check details
  if (stolenCount === 1) return 'check_details';
  
  // If any source found it and says safe, it's safe
  const safeCount = foundSources.filter(s => s.stolenStatus === 'safe').length;
  if (safeCount > 0) return 'safe';
  
  return 'unknown';
}

// Generate recommendations based on results
function generateRecommendations(result: SearchResult): string[] {
  const recommendations: string[] = [];
  
  if (result.overallStatus === 'stolen') {
    recommendations.push('DO NOT purchase this item - it has been reported stolen');
    recommendations.push('If you already own this item, contact local law enforcement');
    recommendations.push('Report this listing if you found it on a marketplace');
  } else if (result.overallStatus === 'check_details') {
    recommendations.push('Proceed with caution - one source flagged this item');
    recommendations.push('Request proof of ownership from seller');
    recommendations.push('Meet in a safe location like a police station');
  } else if (result.overallStatus === 'safe') {
    recommendations.push('No stolen reports found - item appears safe');
    recommendations.push('Still request proof of purchase when possible');
    recommendations.push('Save your SafeOrStolen receipt as proof you verified');
  } else {
    recommendations.push('Item not found in our databases');
    recommendations.push("This doesn't guarantee the item is safe");
    recommendations.push('Request proof of ownership from seller');
  }
  
  if (result.confidenceScore < 50) {
    recommendations.push('Limited data available - exercise additional caution');
  }
  
  return recommendations;
}

// Individual source search functions

async function searchSafeOrStolenDB(query: string): Promise<SourceSearchResult> {
  try {
    const { data, error } = await supabase
      .from('stolen_items')
      .select('*')
      .or(`serial_number.ilike.%${query}%,imei.ilike.%${query}%,vin.ilike.%${query}%`)
      .limit(10);

    if (error) throw error;

    const found = data && data.length > 0;
    const stolen = found && data.some(item => item.status === 'stolen' || item.status === 'active');

    return {
      found,
      stolen,
      confidence: 'high',
      data: found ? { matches: data.length, items: data } : null,
    };
  } catch (error) {
    console.error('SafeOrStolen DB search error:', error);
    throw error;
  }
}

async function searchBikeIndexSource(query: string): Promise<SourceSearchResult> {
  try {
    const bikes = await searchBikeIndex(query);
    
    if (bikes.length === 0) {
      return { found: false, confidence: 'high' };
    }
    
    const stolenBike = bikes.find((b: BikeIndexResult) => b.stolen);
    const firstBike = bikes[0];
    const formatted = formatBikeResult(firstBike);
    
    return {
      found: true,
      stolen: !!stolenBike,
      confidence: 'high',
      data: {
        bikes,
        itemDetails: {
          type: 'Bicycle',
          manufacturer: firstBike.manufacturer_name,
          model: firstBike.frame_model,
          year: firstBike.year?.toString(),
          color: firstBike.frame_colors?.join(', '),
          imageUrl: firstBike.large_img || firstBike.thumb,
        },
      },
      detailsUrl: stolenBike?.url || firstBike.url,
    };
  } catch (error) {
    console.error('BikeIndex search error:', error);
    throw error;
  }
}

async function searchIMEIInfo(query: string): Promise<SourceSearchResult> {
  try {
    const { data, error } = await supabase.functions.invoke('verify-imei', {
      body: { identifier: query },
    });

    if (error) throw error;

    return {
      found: data?.success && data?.status !== 'error',
      stolen: data?.status === 'stolen',
      confidence: data?.confidence >= 80 ? 'high' : data?.confidence >= 50 ? 'medium' : 'low',
      data: {
        ...data,
        itemDetails: data?.details?.deviceInfo ? {
          type: 'Mobile Device',
          manufacturer: data.details.deviceInfo.manufacturer,
          model: data.details.deviceInfo.modelRange,
        } : undefined,
      },
    };
  } catch (error) {
    console.error('IMEI verification error:', error);
    throw error;
  }
}

async function searchVehicleDB(query: string): Promise<SourceSearchResult> {
  try {
    const { data, error } = await supabase.functions.invoke('verify-vehicle', {
      body: { identifier: query },
    });

    if (error) throw error;

    return {
      found: data?.success && data?.status !== 'error',
      stolen: data?.status === 'stolen',
      confidence: data?.confidence >= 80 ? 'high' : data?.confidence >= 50 ? 'medium' : 'low',
      data: {
        ...data,
        itemDetails: data?.details?.vehicleDetails ? {
          type: 'Vehicle',
          manufacturer: data.details.vehicleDetails.make,
          model: data.details.vehicleDetails.model,
          year: data.details.vehicleDetails.year,
        } : undefined,
      },
    };
  } catch (error) {
    console.error('Vehicle verification error:', error);
    throw error;
  }
}

async function searchHotGunz(query: string): Promise<SourceSearchResult> {
  try {
    const { data, error } = await supabase.functions.invoke('verify-hotgunz', {
      body: { identifier: query },
    });

    if (error) throw error;

    return {
      found: data?.success && data?.found,
      stolen: data?.stolen || data?.status === 'stolen',
      confidence: data?.confidence >= 80 ? 'high' : data?.confidence >= 50 ? 'medium' : 'low',
      data: data,
    };
  } catch (error) {
    console.error('HotGunz verification error:', error);
    throw error;
  }
}

async function searchWebScraper(query: string, queryType: QueryType): Promise<SourceSearchResult> {
  try {
    const { data, error } = await supabase.functions.invoke('web-scraper-verification', {
      body: { identifier: query, itemType: queryType },
    });

    if (error) throw error;

    return {
      found: data?.success && data?.found,
      stolen: data?.stolen || data?.status === 'stolen',
      confidence: 'medium',
      data: data,
    };
  } catch (error) {
    console.error('Web scraper error:', error);
    throw error;
  }
}

async function searchUserReports(query: string): Promise<SourceSearchResult> {
  try {
    // Search community_stories for user-reported stolen items
    const { data, error } = await supabase
      .from('community_stories')
      .select('*')
      .eq('is_approved', true)
      .textSearch('search_terms', query)
      .limit(5);

    if (error) throw error;

    const found = data && data.length > 0;

    return {
      found,
      stolen: found,
      confidence: 'medium',
      data: found ? { reports: data } : null,
    };
  } catch (error) {
    console.error('User reports search error:', error);
    throw error;
  }
}

// Source registry - add your sources here
const SOURCE_REGISTRY: SourceConfig[] = [
  {
    id: 'safeorstolen_db',
    name: 'SafeOrStolen Database',
    icon: '🛡️',
    queryTypes: ['imei', 'vin', 'serial', 'plate'],
    timeout: 5000,
    searchFn: async (query) => searchSafeOrStolenDB(query),
  },
  {
    id: 'bikeindex',
    name: 'BikeIndex',
    icon: '🚲',
    queryTypes: ['serial'],
    timeout: 5000,
    searchFn: async (query) => searchBikeIndexSource(query),
  },
  {
    id: 'imeiinfo',
    name: 'Device Registry',
    icon: '📱',
    queryTypes: ['imei'],
    timeout: 8000,
    searchFn: async (query) => searchIMEIInfo(query),
  },
  {
    id: 'vehicle_db',
    name: 'Vehicle Registry',
    icon: '🚗',
    queryTypes: ['vin', 'plate'],
    timeout: 8000,
    searchFn: async (query) => searchVehicleDB(query),
  },
  {
    id: 'hotgunz',
    name: 'Firearm Registry',
    icon: '🔫',
    queryTypes: ['serial'],
    timeout: 6000,
    searchFn: async (query) => searchHotGunz(query),
  },
  {
    id: 'web_scraper',
    name: 'State Records',
    icon: '🏛️',
    queryTypes: ['vin', 'serial', 'plate'],
    timeout: 10000,
    searchFn: async (query, queryType) => searchWebScraper(query, queryType),
  },
  {
    id: 'user_reports',
    name: 'Community Reports',
    icon: '👥',
    queryTypes: ['imei', 'vin', 'serial', 'plate'],
    timeout: 3000,
    searchFn: async (query) => searchUserReports(query),
  },
];

// Callback for streaming updates
export type SearchProgressCallback = (sourceResult: SourceResult) => void;

// Main parallel search function
export async function parallelSearch(
  query: string, 
  onSourceComplete?: SearchProgressCallback
): Promise<SearchResult> {
  const startTime = Date.now();
  const searchId = generateSearchId();
  const queryType = detectQueryType(query);
  const cleanedQuery = query.replace(/[\s\-\.]/g, '').toUpperCase();
  
  // Get sources that handle this query type
  const relevantSources = SOURCE_REGISTRY.filter(
    source => source.queryTypes.includes(queryType) || source.queryTypes.includes('serial')
  );
  
  // Launch all searches in parallel
  const sourcePromises = relevantSources.map(async (source): Promise<SourceResult> => {
    const sourceStartTime = Date.now();
    
    try {
      const result = await withTimeout(
        source.searchFn(cleanedQuery, queryType),
        source.timeout,
        source.id
      );
      
      const sourceResult: SourceResult = {
        sourceId: source.id,
        sourceName: source.name,
        sourceIcon: source.icon,
        status: result.found ? 'found' : 'not_found',
        stolenStatus: result.found ? (result.stolen ? 'stolen' : 'safe') : undefined,
        confidence: result.confidence,
        responseTimeMs: Date.now() - sourceStartTime,
        data: result.data,
        detailsUrl: result.detailsUrl,
      };
      
      // Notify callback if provided
      onSourceComplete?.(sourceResult);
      
      return sourceResult;
    } catch (error) {
      const isTimeout = error instanceof Error && error.message.includes('timeout');
      const sourceResult: SourceResult = {
        sourceId: source.id,
        sourceName: source.name,
        sourceIcon: source.icon,
        status: isTimeout ? 'timeout' : 'error',
        confidence: 'low',
        responseTimeMs: Date.now() - sourceStartTime,
        errorMessage: error instanceof Error ? error.message : 'Unknown error',
      };
      
      // Notify callback even for errors
      onSourceComplete?.(sourceResult);
      
      return sourceResult;
    }
  });
  
  // Wait for all sources to complete
  const sources = await Promise.all(sourcePromises);
  
  // Calculate results
  const { score: confidenceScore, level: overallConfidence } = calculateConfidence(sources);
  const overallStatus = determineOverallStatus(sources);
  const sourcesWithResults = sources.filter(s => s.status === 'found').length;
  
  // Extract item details from first source that has them
  let itemDetails: ItemDetails | undefined;
  for (const source of sources) {
    if (source.data?.itemDetails) {
      itemDetails = source.data.itemDetails;
      break;
    }
  }
  
  const result: SearchResult = {
    query: cleanedQuery,
    queryType,
    searchId,
    timestamp: new Date(),
    totalTimeMs: Date.now() - startTime,
    overallStatus,
    overallConfidence,
    confidenceScore,
    sourcesChecked: sources.length,
    sourcesWithResults,
    sources,
    itemDetails,
    recommendations: [],
  };
  
  result.recommendations = generateRecommendations(result);
  
  // Store search in database
  try {
    const { data: { user } } = await supabase.auth.getUser();
    await supabase
      .from('verification_searches')
      .insert({
        user_id: user?.id || null,
        serial_number: cleanedQuery,
        item_type: queryType,
        result: {
          searchId,
          overallStatus,
          confidenceScore,
          sourcesChecked: sources.length,
          sourcesWithResults,
          sources: sources.map(s => ({
            id: s.sourceId,
            name: s.sourceName,
            status: s.status,
            stolenStatus: s.stolenStatus,
            confidence: s.confidence,
          })),
        },
      });
  } catch (error) {
    console.error('Failed to store search result:', error);
  }
  
  return result;
}

export { SOURCE_REGISTRY };
