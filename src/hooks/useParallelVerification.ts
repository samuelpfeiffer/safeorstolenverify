/**
 * React Hook for Parallel Verification
 * Uses the production VerificationService
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useUnifiedAuth } from './useUnifiedAuth';
import { verificationService, type AggregatedResult } from '@/services/VerificationService';
import { detectItemType } from '@/utils/itemTypeDetector';
import { supabase } from '@/integrations/supabase/client';

export const useParallelVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AggregatedResult | null>(null);
  const [progress, setProgress] = useState<string>('');
  const { user } = useUnifiedAuth();
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

    // CRITICAL: Require authentication
    if (!user?.id) {
      toast({
        title: "Sign Up Required",
        description: "Create an account and subscribe for just $1/month to verify items.",
        variant: "default",
      });
      navigate('/auth', { state: { redirect: '/verify', pendingSearch: identifier } });
      return null;
    }

    // Check subscription status - 2 free checks, then subscription required
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('subscription_tier')
        .eq('id', user.id)
        .single();

      const isSubscribed = profile?.subscription_tier && 
        !['free', 'starter', null, ''].includes(profile.subscription_tier);

      if (!isSubscribed) {
        toast({
          title: "Subscription Required",
          description: "Subscribe for just $1/month for unlimited verifications.",
          variant: "destructive",
        });
        navigate('/pricing', { state: { reason: 'no-subscription' } });
        return null;
      }
    } catch (profileError) {
      console.error('[useParallelVerification] Profile check error:', profileError);
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
