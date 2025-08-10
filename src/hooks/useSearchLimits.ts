
import { useState, useEffect } from 'react';
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
      // Guest users have no searches
      setRemainingSearches(0);
      setHasReachedLimit(true);
      setIsSubscribed(false);
      setIsLoading(false);
    }
  }, [user]);

  const checkUserLimits = async () => {
    if (!user) return;

    try {
      setIsLoading(true);

      // Check subscription status
      const { data: subscription } = await supabase
        .from('subscribers')
        .select('subscribed, subscription_tier')
        .eq('user_id', user.id)
        .single();

      if (subscription?.subscribed) {
        setIsSubscribed(true);
        setRemainingSearches(999); // Unlimited for subscribers
        setHasReachedLimit(false);
        return;
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
        setRemainingSearches(profile.promotion_searches_remaining);
        setHasReachedLimit(false);
        return;
      }

      // Check free tier usage (4 searches total)
      const { count } = await supabase
        .from('verification_results')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id);

      const used = count || 0;
      const remaining = Math.max(0, 4 - used);
      
      setRemainingSearches(remaining);
      setHasReachedLimit(remaining === 0);

    } catch (error) {
      console.error('Error checking user limits:', error);
      setRemainingSearches(0);
      setHasReachedLimit(true);
    } finally {
      setIsLoading(false);
    }
  };

  const consumeSearch = async (): Promise<boolean> => {
    if (!user) {
      toast({
        title: "Sign In Required",
        description: "Please sign in to verify items",
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
        description: "Upgrade to continue verifying items",
        variant: "destructive",
      });
      return false;
    }

    // Update remaining searches
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
