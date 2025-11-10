/**
 * React Hook for Parallel Verification
 * Uses the production VerificationService
 */

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useUnifiedAuth } from './useUnifiedAuth';
import { verificationService, type AggregatedResult } from '@/services/VerificationService';
import { detectItemType } from '@/utils/itemTypeDetector';

export const useParallelVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AggregatedResult | null>(null);
  const [progress, setProgress] = useState<string>('');
  const { user } = useUnifiedAuth();
  const { toast } = useToast();

  const verify = async (identifier: string, itemType?: string) => {
    if (!identifier || identifier.trim().length === 0) {
      toast({
        title: "Invalid input",
        description: "Please enter a serial number, IMEI, or VIN",
        variant: "destructive",
      });
      return null;
    }

    setIsLoading(true);
    setResult(null);
    setProgress('Detecting item type...');

    try {
      // Detect item type if not provided
      const detectedType = itemType || detectItemType(identifier);
      setProgress(`Checking ${detectedType} across multiple databases...`);

      // Call verification service
      const verificationResult = await verificationService.verifyItem({
        identifier: identifier.trim(),
        itemType: detectedType,
        userId: user?.id,
      });

      setResult(verificationResult);
      setProgress('');

      // Show appropriate toast
      const toastVariant = verificationResult.riskLevel === 'critical' || verificationResult.riskLevel === 'high'
        ? 'destructive'
        : 'default';

      toast({
        title: verificationResult.finalStatus.toUpperCase(),
        description: verificationResult.message,
        variant: toastVariant,
      });

      return verificationResult;

    } catch (error: any) {
      console.error('[useParallelVerification] Error:', error);
      
      setProgress('');
      toast({
        title: "Verification failed",
        description: error.message || "Unable to complete verification. Please try again.",
        variant: "destructive",
      });
      
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setProgress('');
  };

  return {
    verify,
    reset,
    isLoading,
    result,
    progress,
  };
};
