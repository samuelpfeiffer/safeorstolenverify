import { supabase } from '@/integrations/supabase/client';
import { detectItemType } from '@/utils/itemTypeDetector';
import { validateSerialNumber, sanitizeInput } from '@/utils/inputValidation';

export interface VerificationRequest {
  serialNumber: string;
  itemType?: string;
  source?: 'manual' | 'qr' | 'api';
  metadata?: Record<string, any>;
}

export interface VerificationResult {
  id: string;
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  confidence: number;
  source: string;
  details?: any;
  message: string;
  verified_at: string;
  sources_checked: string[];
  risk_level: 'low' | 'medium' | 'high' | 'critical';
}

export interface VerificationProvider {
  name: string;
  verify: (request: VerificationRequest) => Promise<Partial<VerificationResult>>;
  priority: number;
  enabled: boolean;
}

class VerificationEngine {
  private providers: VerificationProvider[] = [];
  private cache = new Map<string, VerificationResult>();
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  constructor() {
    this.initializeProviders();
  }

  private initializeProviders() {
    // Primary verification provider
    this.addProvider({
      name: 'SOS_PRIMARY',
      verify: this.primaryVerification.bind(this),
      priority: 1,
      enabled: true
    });

    // Secondary providers can be added here
    // this.addProvider({
    //   name: 'FBI_stolen property reports from all 50 states',
    //   verify: this.federalVerification.bind(this),
    //   priority: 2,
    //   enabled: false // Requires special access
    // });
  }

  addProvider(provider: VerificationProvider) {
    this.providers.push(provider);
    this.providers.sort((a, b) => a.priority - b.priority);
  }

  private getCacheKey(request: VerificationRequest): string {
    return `${request.serialNumber}-${request.itemType || 'unknown'}`;
  }

  private isValidCache(result: VerificationResult): boolean {
    const age = Date.now() - new Date(result.verified_at).getTime();
    return age < this.CACHE_TTL;
  }

  async verify(request: VerificationRequest): Promise<VerificationResult> {
    // Input validation and sanitization
    const sanitizedRequest: VerificationRequest = {
      ...request,
      serialNumber: sanitizeInput(request.serialNumber.trim()),
      itemType: request.itemType || detectItemType(request.serialNumber),
    };

    // Validate serial number format
    const validation = validateSerialNumber(sanitizedRequest.serialNumber);
    if (!validation.isValid) {
      return this.createErrorResult(
        sanitizedRequest,
        'Invalid serial number format',
        validation.error || 'Invalid format'
      );
    }

    // Check cache first
    const cacheKey = this.getCacheKey(sanitizedRequest);
    const cachedResult = this.cache.get(cacheKey);
    if (cachedResult && this.isValidCache(cachedResult)) {
      return cachedResult;
    }

    // Run verification through all enabled providers
    const results: Partial<VerificationResult>[] = [];
    const sourcesChecked: string[] = [];

    for (const provider of this.providers.filter(p => p.enabled)) {
      try {
        const result = await provider.verify(sanitizedRequest);
        results.push(result);
        sourcesChecked.push(provider.name);
      } catch (error) {
        console.error(`Verification provider ${provider.name} failed:`, error);
        sourcesChecked.push(`${provider.name}_ERROR`);
      }
    }

    // Aggregate results
    const finalResult = this.aggregateResults(sanitizedRequest, results, sourcesChecked);
    
    // Cache the result
    this.cache.set(cacheKey, finalResult);

    return finalResult;
  }

  private async primaryVerification(request: VerificationRequest): Promise<Partial<VerificationResult>> {
    const { data, error } = await supabase.functions.invoke('verify-item', {
      body: {
        identifier: request.serialNumber,
        itemType: request.itemType,
        userId: request.metadata?.user_id
      }
    });

    if (error) {
      throw new Error(`Primary verification failed: ${error.message}`);
    }

    // Handle the new response format from verify-item
    if (data?.error) {
      throw new Error(data.error);
    }

    return {
      status: this.normalizeStatus(data.finalStatus || 'unknown'),
      confidence: data.confidence || 0,
      source: 'verify-item',
      details: data.providers || data.details,
      message: data.message || 'Verification completed'
    };
  }

  private normalizeStatus(status: string): VerificationResult['status'] {
    const normalized = status.toLowerCase();
    switch (normalized) {
      case 'safe':
      case 'clean':
      case 'legitimate':
        return 'safe';
      case 'stolen':
      case 'theft':
        return 'stolen';
      case 'lost':
      case 'missing':
        return 'lost';
      case 'unknown':
      case 'unclear':
        return 'unknown';
      default:
        return 'error';
    }
  }

  private calculateRiskLevel(status: VerificationResult['status'], confidence: number): VerificationResult['risk_level'] {
    if (status === 'stolen') return 'critical';
    if (status === 'lost') return 'high';
    if (status === 'unknown' && confidence < 50) return 'medium';
    return 'low';
  }

  private aggregateResults(
    request: VerificationRequest,
    results: Partial<VerificationResult>[],
    sourcesChecked: string[]
  ): VerificationResult {
    if (results.length === 0) {
      return this.createErrorResult(request, 'No verification providers available', 'No data');
    }

    // Find highest confidence result
    const bestResult = results.reduce((best, current) => {
      const currentConfidence = current.confidence || 0;
      const bestConfidence = best.confidence || 0;
      return currentConfidence > bestConfidence ? current : best;
    });

    // Check for any critical findings
    const hasStolenReport = results.some(r => r.status === 'stolen');
    const hasLostReport = results.some(r => r.status === 'lost');

    const finalStatus = hasStolenReport ? 'stolen' : hasLostReport ? 'lost' : bestResult.status || 'unknown';
    const finalConfidence = Math.max(...results.map(r => r.confidence || 0));
    
    const statusMessages = {
      safe: 'No theft reports found. Item appears legitimate.',
      stolen: 'ALERT: This item has been reported as stolen.',
      lost: 'WARNING: This item has been reported as lost.',
      unknown: 'Unable to determine item status with certainty.',
      error: 'Verification could not be completed.'
    };

    return {
      id: `verify_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      status: finalStatus,
      confidence: finalConfidence,
      source: bestResult.source || 'AGGREGATED',
      details: {
        aggregated: true,
        individual_results: results,
        serial_number: request.serialNumber,
        item_type: request.itemType
      },
      message: statusMessages[finalStatus],
      verified_at: new Date().toISOString(),
      sources_checked: sourcesChecked,
      risk_level: this.calculateRiskLevel(finalStatus, finalConfidence)
    };
  }

  private createErrorResult(
    request: VerificationRequest,
    error: string,
    details: string
  ): VerificationResult {
    return {
      id: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      status: 'error',
      confidence: 0,
      source: 'VERIFICATION_ENGINE',
      details: { error, input: request },
      message: details,
      verified_at: new Date().toISOString(),
      sources_checked: ['ERROR'],
      risk_level: 'medium'
    };
  }

  async getVerificationHistory(userId: string, limit: number = 50): Promise<VerificationResult[]> {
    try {
      const { data, error } = await supabase
        .from('verification_results')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) {
        console.error('Error fetching verification history:', error);
        return [];
      }

      return data.map(this.mapDatabaseToResult);
    } catch (error) {
      console.error('Error in getVerificationHistory:', error);
      return [];
    }
  }

  private mapDatabaseToResult(dbResult: any): VerificationResult {
    return {
      id: dbResult.id,
      status: this.normalizeStatus(dbResult.verification_status),
      confidence: dbResult.confidence_score || 0,
      source: dbResult.api_source || 'UNKNOWN',
      details: dbResult.api_response,
      message: `Verified via ${dbResult.api_source}`,
      verified_at: dbResult.verified_at,
      sources_checked: [dbResult.api_source],
      risk_level: this.calculateRiskLevel(
        this.normalizeStatus(dbResult.verification_status),
        dbResult.confidence_score || 0
      )
    };
  }

  clearCache() {
    this.cache.clear();
  }
}

// Export singleton instance
export const verificationEngine = new VerificationEngine();