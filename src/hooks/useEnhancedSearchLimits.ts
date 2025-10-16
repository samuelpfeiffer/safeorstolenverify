import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { useRequestManager } from '@/hooks/useRequestManager';

interface SearchLimitsData {
  remainingSearches: number;
  hasReachedLimit: boolean;
  isSubscribed: boolean;
  isLoading: boolean;
}

export const useEnhancedSearchLimits = () => {
  const [limitsData, setLimitsData] = useState<SearchLimitsData>({
    remainingSearches: 0,
    hasReachedLimit: true,
    isSubscribed: false,
    isLoading: true
  });
  
  const { user } = useAuth();
  const { toast } = useToast();
  const { executeRequest, cleanup } = useRequestManager();
  const isMountedRef = useRef(true);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      cleanup();
    };
  }, [cleanup]);

  const checkUserLimits = useCallback(async () => {
    if (!user) {
      if (isMountedRef.current) {
        setLimitsData({
          remainingSearches: 0,
          hasReachedLimit: true,
          isSubscribed: false,
          isLoading: false
        });
      }
      return;
    }

    if (isMountedRef.current) {
      setLimitsData(prev => ({ ...prev, isLoading: true }));
    }

    try {
      const result = await executeRequest(
        async (signal) => {
          // Check subscription status
          const { data: subscription } = await supabase
            .from('subscribers')
            .select('subscribed, subscription_tier')
            .eq('user_id', user.id)
            .maybeSingle();

          if (subscription?.subscribed) {
            return {
              remainingSearches: 999,
              hasReachedLimit: false,
              isSubscribed: true,
              isLoading: false
            };
          }

          // Check profile for promotion status
          const { data: profile } = await supabase
            .from('profiles')
            .select('is_promotion_winner, promotion_searches_remaining, promotion_expires_at')
            .eq('id', user.id)
            .single();

          if (profile?.is_promotion_winner && 
              profile?.promotion_searches_remaining > 0 && 
              profile?.promotion_expires_at && 
              new Date(profile.promotion_expires_at) > new Date()) {
            return {
              remainingSearches: profile.promotion_searches_remaining,
              hasReachedLimit: false,
              isSubscribed: false,
              isLoading: false
            };
          }

          // Check trial status (14-day trial with unlimited checks)
          const { data: userProfile } = await supabase
            .from('profiles')
            .select('created_at')
            .eq('id', user.id)
            .single();

          if (userProfile?.created_at) {
            const createdAt = new Date(userProfile.created_at);
            const trialExpiresAt = new Date(createdAt);
            trialExpiresAt.setDate(trialExpiresAt.getDate() + 14);
            const isTrialActive = new Date() < trialExpiresAt;

            if (isTrialActive) {
              // Unlimited checks during 14-day trial
              return {
                remainingSearches: 999,
                hasReachedLimit: false,
                isSubscribed: false,
                isLoading: false
              };
            }
          }

          // Trial expired - no more checks
          return {
            remainingSearches: 0,
            hasReachedLimit: true,
            isSubscribed: false,
            isLoading: false
          };
        },
        `limits-${user.id}`,
        { timeout: 8000, dedupe: true }
      );

      if (result && isMountedRef.current) {
        setLimitsData(result);
      }
    } catch (error) {
      console.error('Error checking user limits:', error);
      if (isMountedRef.current) {
        setLimitsData({
          remainingSearches: 0,
          hasReachedLimit: true,
          isSubscribed: false,
          isLoading: false
        });
      }
    }
  }, [user, executeRequest]);

  const consumeSearch = useCallback(async (): Promise<boolean> => {
    if (!user) {
      toast({
        title: "Sign In Required",
        description: "Please sign in to verify items",
        variant: "destructive",
      });
      return false;
    }

    if (limitsData.isSubscribed) {
      return true; // Unlimited for subscribers
    }

    if (limitsData.hasReachedLimit) {
      toast({
        title: "Search Limit Reached",
        description: "Upgrade to continue verifying items",
        variant: "destructive",
      });
      return false;
    }

    // Update remaining searches
    await checkUserLimits();
    return limitsData.remainingSearches > 0;
  }, [user, limitsData, checkUserLimits, toast]);

  // Check limits on mount and when user changes - with stable dependency
  useEffect(() => {
    if (user?.id) {
      checkUserLimits();
    }
  }, [user?.id]); // Only depend on user ID to prevent infinite loops

  return {
    ...limitsData,
    consumeSearch,
    refreshLimits: checkUserLimits
  };
};