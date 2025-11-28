import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { detectItemType } from '@/utils/itemTypeDetector';
import { analyzeFraudRisk, calculateConfidenceScore } from '@/utils/fraudDetection';

interface UnifiedVerificationResult {
  status: 'stolen' | 'lost' | 'safe' | 'error' | 'blacklisted' | 'salvage';
  message: string;
  details?: any;
  source: string;
  providers: string[];
  timestamp: string;
}

export const useUnifiedVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<UnifiedVerificationResult | null>(null);

  const verifyItem = async (input: string): Promise<UnifiedVerificationResult | null> => {
    setIsLoading(true);
    setResult(null);

    try {
      const sanitizedInput = input.trim().toUpperCase();
      const detectedType = detectItemType(sanitizedInput);
      
      console.log(`[UNIFIED-VERIFICATION] Detected type: ${detectedType} for input: ${sanitizedInput}`);

      let providers: Array<{name: string; result: any}> = [];
      
      // Fraud risk analysis
      const fraudAnalysis = analyzeFraudRisk({
        identifier: sanitizedInput,
        itemType: detectedType
      });

      if (fraudAnalysis.recommendation === 'abort') {
        toast.warning('⚠️ High fraud risk detected', {
          description: fraudAnalysis.indicators.join('. ')
        });
      }

      // Use universal-state-lookup for all verification types
      const { data, error } = await supabase.functions.invoke('universal-state-lookup', {
        body: {
          identifier: sanitizedInput,
          itemType: detectedType
        }
      });

      if (data?.success) {
        providers.push({ 
          name: 'Universal State Lookup', 
          result: {
            status: data.status,
            message: data.message,
            details: data.details
          }
        });
      }

      if (providers.length === 0) {
        throw new Error('No verification providers responded successfully');
      }

      // Aggregate results - if ANY provider reports stolen/lost, overall status is stolen/lost
      const hasStolenReport = providers.some(p => 
        p.result.status === 'stolen' || p.result.status === 'lost'
      );

      // Calculate confidence score
      const confidenceScore = calculateConfidenceScore({
        providersChecked: providers.length,
        databaseMatches: providers.filter(p => p.result.status === 'stolen' || p.result.status === 'lost').length
      });

      const aggregatedResult: UnifiedVerificationResult = {
        status: hasStolenReport ? 'stolen' : 'safe',
        message: hasStolenReport 
          ? `⚠️ This item has been reported as stolen or lost in ${providers.filter(p => p.result.status === 'stolen' || p.result.status === 'lost').length} database(s) | Confidence: ${confidenceScore}% | Fraud Risk: ${fraudAnalysis.riskScore}/100`
          : `✓ No theft records found across ${providers.length} database(s) | Confidence: ${confidenceScore}% | Fraud Risk: ${fraudAnalysis.riskScore}/100`,
        details: {
          providers: providers.map(p => ({
            provider: p.name,
            status: p.result.status,
            message: p.result.message,
            details: p.result.details
          })),
          fraudAnalysis: {
            riskScore: fraudAnalysis.riskScore,
            indicators: fraudAnalysis.indicators,
            recommendation: fraudAnalysis.recommendation
          },
          confidenceScore
        },
        source: 'unified_multi_provider',
        providers: providers.map(p => p.name),
        timestamp: new Date().toISOString()
      };

      setResult(aggregatedResult);

      // Show appropriate toast
      if (hasStolenReport) {
        toast.error('⚠️ STOLEN/LOST ITEM DETECTED', {
          description: aggregatedResult.message
        });
      } else {
        toast.success('✓ Item appears safe', {
          description: aggregatedResult.message
        });
      }

      return aggregatedResult;

    } catch (error: any) {
      console.error('[UNIFIED-VERIFICATION] Error:', error);
      toast.error('Verification failed', {
        description: error.message || 'Unable to complete verification'
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    verifyItem,
    isLoading,
    result
  };
};
