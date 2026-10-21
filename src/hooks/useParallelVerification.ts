/**
 * React Hook for Parallel Verification
 * Uses the production VerificationService
 */

import { useState } from 'react';
import { useNavigate } from '@/lib/router-compat';
import { useToast } from '@/hooks/use-toast';
import { useUnifiedAuth } from './useUnifiedAuth';
import { useVerifyGate } from './useVerifyGate';
import { verificationService, LimitReachedError, type AggregatedResult } from '@/services/VerificationService';
import { detectItemType } from '@/utils/itemTypeDetector';
import { supabase } from '@/integrations/supabase/client';

export const useParallelVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AggregatedResult | null>(null);
  const [progress, setProgress] = useState<string>('');
  // Oct 20 2026: set when the 1 free check is used, so pages show the pay offer in place.
  const [limitHit, setLimitHit] = useState<{ identifier: string; itemType?: string } | null>(null);
  const { user } = useUnifiedAuth();
  const { checkGate } = useVerifyGate();
  const { toast } = useToast();
  const navigate = useNavigate();

  const verify = async (identifier: string, itemType?: string) => {
    if (!identifier || identifier.trim().length === 0) {
      toast({
        title: "Invalid input",
        description: "Please enter a serial number, IMEI, or VIN",
        variant: "destructive",
      });
      return null;
    }

    // Free-check gate (1 free check for anonymous + free users, then upgrade).
    // Same server-side gate used by /verify — no hard block to /pricing.
    const allowed = await checkGate();
    if (!allowed) {
      toast({
        title: "Free checks used",
        description: user?.id
          ? "Subscribe for $10/month for unlimited verifications, or pay $0.99 for 2 checks."
          : "Create a free account to keep verifying, or upgrade for unlimited checks.",
        variant: "destructive",
      });
      navigate(user?.id ? '/pricing' : '/auth', {
        state: { reason: 'free-limit', redirect: '/verify', pendingSearch: identifier },
      });
      return null;
    }


    setIsLoading(true);
    setResult(null);
    setLimitHit(null);
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
      if (error instanceof LimitReachedError) {
        setProgress('');
        setLimitHit({ identifier: identifier.trim(), itemType: itemType || detectItemType(identifier) });
        return null;
      }
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
    setLimitHit(null);
    setProgress('');
  };

  return {
    verify,
    reset,
    isLoading,
    result,
    progress,
    limitHit,
  };
};
