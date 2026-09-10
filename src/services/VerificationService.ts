/**
 * Production Verification Service
 * Calls the verify-item edge function for all verifications
 */

import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';

export interface VerificationRequest {
  identifier: string;
  itemType: string;
  userId?: string;
}

const getFingerprint = (): string | undefined => {
  try {
    if (typeof window === 'undefined') return undefined;
    // Creates and persists the anonymous id if it doesn't exist yet,
    // so anonymous verification never hits FINGERPRINT_REQUIRED.
    return getOrCreateFingerprint();
  } catch {
    return undefined;
  }
};

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
  identifier: string;
  itemType: string;
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
   * Main verification method - calls verify-item edge function
   */
  async verifyItem(request: VerificationRequest): Promise<AggregatedResult> {
    const startTime = Date.now();
    const { identifier, itemType, userId } = request;

    try {
      const { data, error } = await supabase.functions.invoke('verify-item', {
        body: { 
          identifier: identifier.trim(),
          itemType,
          userId,
          fingerprint: getFingerprint(),
        }
      });

      if (error) {
        throw new Error(error.message || 'Verification failed');
      }
      
      if (!data || typeof data !== 'object') {
        throw new Error('Invalid response from verification service');
      }

      return data as AggregatedResult;

    } catch (error: any) {
      console.error('[VerificationService] Error:', error);
      
      // Return error result instead of throwing
      return {
        identifier,
        itemType,
        finalStatus: 'error',
        confidence: 0,
        riskLevel: 'medium',
        message: '❌ ERROR: Unable to complete verification. Please try again.',
        providers: [{
          provider: 'System',
          status: 'error',
          confidence: 0,
          message: error.message || 'Verification service unavailable',
          responseTime: Date.now() - startTime,
        }],
        checkedSources: ['System'],
        timestamp: new Date().toISOString(),
      };
    }
  }
}

export const verificationService = new VerificationService();
