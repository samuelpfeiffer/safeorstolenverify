/**
 * Production Verification Service
 * Integrates with all real-world stolen item databases in parallel
 */

import { supabase } from '@/integrations/supabase/client';

export interface VerificationRequest {
  identifier: string;
  itemType: string;
  userId?: string;
}

export interface ProviderResult {
  provider: string;
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  confidence: number;
  message: string;
  details?: any;
  responseTime: number;
  url?: string;
}

export interface AggregatedResult {
  finalStatus: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  confidence: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  providers: ProviderResult[];
  checkedSources: string[];
  timestamp: string;
}

class VerificationService {
  /**
   * Main verification method - calls all applicable APIs in parallel
   */
  async verifyItem(request: VerificationRequest): Promise<AggregatedResult> {
    const startTime = Date.now();
    const { identifier, itemType } = request;

    // Determine which providers to call based on item type
    const providers = this.selectProviders(itemType);
    
    console.log(`[VerificationService] Starting verification for ${itemType}:`, identifier);
    console.log(`[VerificationService] Calling ${providers.length} providers in parallel`);

    // Call all providers in parallel
    const providerPromises = providers.map(provider => 
      this.callProvider(provider, identifier, itemType)
    );

    const results = await Promise.allSettled(providerPromises);
    
    // Extract successful results
    const providerResults: ProviderResult[] = results
      .map((result, index) => {
        if (result.status === 'fulfilled') {
          return result.value;
        } else {
          return {
            provider: providers[index],
            status: 'error' as const,
            confidence: 0,
            message: `Failed to check ${providers[index]}`,
            details: result.reason?.message,
            responseTime: Date.now() - startTime,
          };
        }
      });

    // Aggregate results
    const aggregated = this.aggregateResults(providerResults);
    
    // Store results in database
    await this.storeVerificationResult(request, aggregated);

    console.log(`[VerificationService] Verification complete in ${Date.now() - startTime}ms`);
    console.log(`[VerificationService] Final status: ${aggregated.finalStatus}`);

    return aggregated;
  }

  /**
   * Select which providers to call based on item type
   */
  private selectProviders(itemType: string): string[] {
    const itemTypeLower = itemType.toLowerCase();
    
    // All items get checked against general databases
    const providers = ['stolen-register'];
    
    if (itemTypeLower.includes('phone') || itemTypeLower.includes('smartphone') || itemTypeLower.includes('mobile')) {
      providers.push('gsma-device-check', 'imei-info-lookup', 'checkmend');
    }
    
    if (itemTypeLower.includes('vehicle') || itemTypeLower.includes('car') || itemTypeLower.includes('truck')) {
      providers.push('nicb-vincheck', 'carfax-vin-lookup');
    }
    
    if (itemTypeLower.includes('bike') || itemTypeLower.includes('bicycle')) {
      providers.push('bike-index-api');
    }
    
    if (itemTypeLower.includes('bike') || itemTypeLower.includes('bicycle')) {
      providers.push('bike-index');
    }
    
    if (itemTypeLower.includes('firearm') || itemTypeLower.includes('gun')) {
      providers.push('verify-firearm-hotgunz');
    }
    
    // Electronics
    if (itemTypeLower.includes('laptop') || itemTypeLower.includes('tablet') || itemTypeLower.includes('electronic')) {
      providers.push('checkmend', 'immobilize-check');
    }

    return providers;
  }

  /**
   * Call individual provider (edge function)
   */
  private async callProvider(
    provider: string,
    identifier: string,
    itemType: string
  ): Promise<ProviderResult> {
    const startTime = Date.now();
    
    try {
      const { data, error } = await supabase.functions.invoke(provider, {
        body: { 
          identifier,
          itemType,
          serial: identifier, // Some functions use 'serial'
          imei: identifier, // Some use 'imei'
          vin: identifier, // Some use 'vin'
        }
      });

      const responseTime = Date.now() - startTime;

      if (error) {
        console.error(`[${provider}] Error:`, error);
        return {
          provider,
          status: 'error',
          confidence: 0,
          message: `${provider} unavailable`,
          details: error,
          responseTime,
        };
      }

      // Parse response based on provider
      return this.parseProviderResponse(provider, data, responseTime);
      
    } catch (error: any) {
      console.error(`[${provider}] Exception:`, error);
      return {
        provider,
        status: 'error',
        confidence: 0,
        message: error.message || 'Provider error',
        responseTime: Date.now() - startTime,
      };
    }
  }

  /**
   * Parse provider-specific response formats
   */
  private parseProviderResponse(
    provider: string,
    data: any,
    responseTime: number
  ): ProviderResult {
    
    // Handle redirect-only providers
    if (data.redirect_url) {
      return {
        provider,
        status: 'unknown',
        confidence: 0,
        message: `Manual check required at ${provider}`,
        url: data.redirect_url,
        responseTime,
      };
    }

    // Parse status from various response formats
    const status = this.normalizeStatus(
      data.status || data.result?.status || data.verification_status || 'unknown'
    );

    const confidence = data.confidence || data.confidence_score || 
      (status === 'stolen' ? 95 : status === 'safe' ? 80 : 50);

    const message = data.message || data.result?.message || 
      `${provider} check: ${status}`;

    return {
      provider,
      status,
      confidence,
      message,
      details: data.details || data.result,
      responseTime,
      url: data.url,
    };
  }

  /**
   * Normalize status strings from different providers
   */
  private normalizeStatus(status: string): 'safe' | 'stolen' | 'lost' | 'unknown' | 'error' {
    const normalized = status.toLowerCase().trim();
    
    if (normalized.includes('stolen') || normalized.includes('blacklist') || normalized.includes('theft')) {
      return 'stolen';
    }
    if (normalized.includes('lost') || normalized.includes('missing')) {
      return 'lost';
    }
    if (normalized.includes('safe') || normalized.includes('clean') || normalized.includes('clear')) {
      return 'safe';
    }
    if (normalized.includes('error') || normalized.includes('fail')) {
      return 'error';
    }
    return 'unknown';
  }

  /**
   * Aggregate results from multiple providers
   */
  private aggregateResults(providers: ProviderResult[]): AggregatedResult {
    const timestamp = new Date().toISOString();
    const checkedSources = providers.map(p => p.provider);

    // If ANY provider reports stolen, final status is stolen
    const hasStolenReport = providers.some(p => p.status === 'stolen');
    if (hasStolenReport) {
      return {
        finalStatus: 'stolen',
        confidence: 95,
        riskLevel: 'critical',
        message: '🚨 STOLEN: This item has been reported as stolen in at least one database. Do NOT purchase.',
        providers,
        checkedSources,
        timestamp,
      };
    }

    // If ANY provider reports lost, final status is lost
    const hasLostReport = providers.some(p => p.status === 'lost');
    if (hasLostReport) {
      return {
        finalStatus: 'lost',
        confidence: 85,
        riskLevel: 'high',
        message: '⚠️ LOST: This item has been reported as lost. Exercise extreme caution.',
        providers,
        checkedSources,
        timestamp,
      };
    }

    // Calculate average confidence from successful checks
    const successfulChecks = providers.filter(p => p.status !== 'error');
    const avgConfidence = successfulChecks.length > 0
      ? successfulChecks.reduce((sum, p) => sum + p.confidence, 0) / successfulChecks.length
      : 0;

    // All checks returned safe
    const allSafe = successfulChecks.every(p => p.status === 'safe');
    if (allSafe && successfulChecks.length > 0) {
      return {
        finalStatus: 'safe',
        confidence: avgConfidence,
        riskLevel: 'low',
        message: `✅ SAFE: Checked ${successfulChecks.length} database(s). No theft reports found.`,
        providers,
        checkedSources,
        timestamp,
      };
    }

    // Mixed or unknown results
    if (successfulChecks.length > 0) {
      return {
        finalStatus: 'unknown',
        confidence: avgConfidence,
        riskLevel: 'medium',
        message: `⚠️ INCONCLUSIVE: Unable to verify across all databases. Proceed with caution.`,
        providers,
        checkedSources,
        timestamp,
      };
    }

    // All checks failed
    return {
      finalStatus: 'error',
      confidence: 0,
      riskLevel: 'medium',
      message: '❌ ERROR: Unable to complete verification. Please try again.',
      providers,
      checkedSources,
      timestamp,
    };
  }

  /**
   * Store verification result in database
   */
  private async storeVerificationResult(
    request: VerificationRequest,
    result: AggregatedResult
  ): Promise<void> {
    try {
      const { error } = await supabase
        .from('verification_searches')
        .insert({
          user_id: request.userId,
          serial_number: request.identifier,
          item_type: request.itemType,
          verification_status: result.finalStatus,
          confidence_score: result.confidence,
          api_source: result.checkedSources.join(', '),
          api_response: {
            providers: result.providers,
            risk_level: result.riskLevel,
            message: result.message,
          },
          verified_at: result.timestamp,
        });

      if (error) {
        console.error('[VerificationService] Failed to store result:', error);
      }
    } catch (error) {
      console.error('[VerificationService] Exception storing result:', error);
    }
  }
}

export const verificationService = new VerificationService();
