import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';

export const useSearchLimits = () => {
  const [remainingSearches, setRemainingSearches] = useState<number>(0);
  const [hasReachedLimit, setHasReachedLimit] = useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      checkUserLimits();
    } else {
      // Guests can see the form and type, but need to sign up to verify
      setRemainingSearches(0);
      setHasReachedLimit(false); // Changed: Don't block guest interaction
      setIsSubscribed(false);
      setIsLoading(false);
    }
  }, [user]);

  const checkUserLimits = async () => {
    if (!user) return;

    try {
      setIsLoading(true);

      // Check profile for subscription status
      const { data: profile } = await supabase
        .from('profiles')
        .select('subscription_tier, subscription_end, is_promotion_winner, promotion_searches_remaining, promotion_expires_at, search_count, created_at')
        .eq('id', user.id)
        .single();

      const paidTiers = ['pay_per_use', 'starter', 'personal', 'professional', 'enterprise'];
      const hasPaidTier = profile?.subscription_tier && paidTiers.includes(profile.subscription_tier);

      if (hasPaidTier) {
        setIsSubscribed(true);
        setRemainingSearches(999); // Unlimited for subscribers
        setHasReachedLimit(false);
        setIsLoading(false);
        return;
      }
      // Check promotion status from same profile query above
      if (profile?.is_promotion_winner && 
          profile?.promotion_searches_remaining > 0 && 
          profile?.promotion_expires_at && 
          new Date(profile.promotion_expires_at) > new Date()) {
        setRemainingSearches(profile.promotion_searches_remaining);
        setHasReachedLimit(false);
        setIsLoading(false);
        return;
      }

      // Free tier: 2 searches within 14 days of account creation
      const FREE_SEARCH_LIMIT = 2;
      const searchCount = profile?.search_count || 0;
      const remainingFree = Math.max(0, FREE_SEARCH_LIMIT - searchCount);

      // Check if 14-day trial period is still active
      if (profile?.created_at) {
        const createdAt = new Date(profile.created_at);
        const trialExpiresAt = new Date(createdAt);
        trialExpiresAt.setDate(trialExpiresAt.getDate() + 14);
        const isTrialActive = new Date() < trialExpiresAt;

        if (isTrialActive && remainingFree > 0) {
          // User has searches remaining within trial period
          setRemainingSearches(remainingFree);
          setHasReachedLimit(false);
          return;
        }
      }

      // Trial expired or searches exhausted
      setRemainingSearches(0);
      setHasReachedLimit(true);

    } catch (error) {
      console.error('Error checking user limits:', error);
      setRemainingSearches(0);
      setHasReachedLimit(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getGuestSearchCount = (): number => {
    const stored = localStorage.getItem('guest_search_count');
    return stored ? parseInt(stored, 10) : 0;
  };

  const incrementGuestSearchCount = (): void => {
    const current = getGuestSearchCount();
    localStorage.setItem('guest_search_count', (current + 1).toString());
  };

  const consumeSearch = async (): Promise<boolean> => {
    if (!user) {
      // No searches allowed without account - must sign up for 2 free searches
      toast({
        title: "Sign Up Required",
        description: "Create your free account to get 2 free verifications",
        variant: "destructive",
      });
      return false;
    }

    if (isSubscribed) {
      return true; // Unlimited for subscribers
    }

    if (hasReachedLimit) {
      toast({
        title: "Search Limit Reached",
        description: "You've used your 2 free searches. Upgrade for unlimited access.",
        variant: "destructive",
      });
      return false;
    }

    // Increment search count in database using RPC function
    const { error } = await supabase.rpc('increment_search_count', { 
      user_id: user.id 
    });

    if (error) {
      console.error('Error incrementing search count:', error);
    }

    // Refresh limits after consuming search
    await checkUserLimits();
    return remainingSearches > 0;
  };

  return {
    remainingSearches,
    hasReachedLimit,
    isSubscribed,
    isLoading,
    consumeSearch,
    refreshLimits: checkUserLimits
  };
};
