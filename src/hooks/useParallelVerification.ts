/**
 * React Hook for Parallel Verification
 * Uses the production VerificationService
 */

import { useState } from 'react';
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

  const verify = async (identifier: string, itemType?: string) => {
    if (!identifier || identifier.trim().length === 0) {
      toast({
        title: "Invalid input",
        description: "Please enter a serial number, IMEI, or VIN",
        variant: "destructive",
      });
      return null;
    }

    // Check free search limit for non-subscribed users
    if (user?.id) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('free_searches_used, trial_started_at, subscription_tier')
        .eq('id', user.id)
        .single();

      const isSubscribed = profile?.subscription_tier && 
        profile.subscription_tier !== 'free' && 
        profile.subscription_tier !== 'starter';

      if (!isSubscribed) {
        const searchesUsed = profile?.free_searches_used || 0;
        const trialStarted = profile?.trial_started_at;
        
        // Check if trial expired (14 days)
        if (trialStarted) {
          const trialStart = new Date(trialStarted);
          const now = new Date();
          const daysSinceStart = (now.getTime() - trialStart.getTime()) / (1000 * 60 * 60 * 24);
          
          if (daysSinceStart > 14) {
            toast({
              title: "Trial Expired",
              description: "Your 14-day trial has ended. Upgrade to continue verifying items.",
              variant: "destructive",
            });
            window.location.href = '/pricing?reason=trial-expired';
            return null;
          }
        }

        // Check if used all free searches
        if (searchesUsed >= 2) {
          toast({
            title: "Free Searches Used",
            description: "You've used your 2 free searches. Upgrade to verify more items.",
            variant: "destructive",
          });
          window.location.href = '/pricing?reason=limit-reached';
          return null;
        }

        // Increment free search counter
        const newCount = searchesUsed + 1;
        await supabase
          .from('profiles')
          .update({ 
            free_searches_used: newCount,
            trial_started_at: trialStarted || new Date().toISOString()
          })
          .eq('id', user.id);

        // Show warning on last free search
        if (newCount === 2) {
          toast({
            title: "Last Free Search",
            description: "This is your final free search. Upgrade to continue protecting yourself.",
            variant: "default",
          });
        }
      }
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
