import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { FREE_SEARCH_LIMIT, FAIR_USE_CAP } from '@/features/pricing/constants';

export const useSearchLimits = () => {
  const [remainingSearches, setRemainingSearches] = useState<number>(0);
  const [hasReachedLimit, setHasReachedLimit] = useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [subscriptionTier, setSubscriptionTier] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      checkUserLimits();
    } else {
      // Guests need to subscribe
      setRemainingSearches(0);
      setHasReachedLimit(false);
      setIsSubscribed(false);
      setIsLoading(false);
    }
  }, [user]);

  const checkUserLimits = async () => {
    if (!user) return;

    try {
      setIsLoading(true);

      const { data: profile } = await supabase
        .from('profiles')
        .select('subscription_tier, subscription_end, search_count, verifications_used_this_month, created_at')
        .eq('id', user.id)
        .single();

      const paidTiers = ['unlimited', 'starter', 'personal', 'professional', 'enterprise', 'pay_per_use'];
      const hasPaidTier = profile?.subscription_tier && paidTiers.includes(profile.subscription_tier);
      const hasActiveSubscription = hasPaidTier && 
        (!profile?.subscription_end || new Date(profile.subscription_end) > new Date());

      if (hasActiveSubscription) {
        setIsSubscribed(true);
        setSubscriptionTier(profile.subscription_tier);
        
        // Check fair use cap for unlimited plan
        if (profile.subscription_tier === 'unlimited') {
          const remaining = FAIR_USE_CAP - (profile.verifications_used_this_month || 0);
          setRemainingSearches(remaining);
          setHasReachedLimit(remaining <= 0);
        } else {
          setRemainingSearches(999);
          setHasReachedLimit(false);
        }
        setIsLoading(false);
        return;
      }

      // No subscription — no access
      const searchCount = profile?.search_count || 0;
      const remainingFree = Math.max(0, FREE_SEARCH_LIMIT - searchCount);

      setRemainingSearches(remainingFree);
      setHasReachedLimit(remainingFree <= 0);

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
        title: "Subscription Required",
        description: "Get a single check for $0.99 or subscribe for $2.99/month unlimited.",
        variant: "destructive",
      });
      return false;
    }

    if (isSubscribed) {
      // Check fair use cap for unlimited plan
      if (subscriptionTier === 'unlimited') {
        const { data: profile } = await supabase
          .from('profiles')
          .select('verifications_used_this_month')
          .eq('id', user.id)
          .single();
        
        if ((profile?.verifications_used_this_month || 0) >= FAIR_USE_CAP) {
          toast({
            title: "Fair Use Limit Reached",
            description: "You've used 300 checks this month. Contact support for a business plan.",
            variant: "destructive",
          });
          return false;
        }
        
        // Increment monthly usage
        await supabase
          .from('profiles')
          .update({ 
            verifications_used_this_month: (profile?.verifications_used_this_month || 0) + 1 
          })
          .eq('id', user.id);
      }
      
      await checkUserLimits();
      return true;
    }

    if (hasReachedLimit) {
      toast({
        title: "Subscription Required",
        description: "Subscribe for just $1/month for unlimited verifications.",
        variant: "destructive",
      });
      return false;
    }

    // Increment search count
    const { error } = await supabase.rpc('increment_search_count', { 
      user_id: user.id 
    });

    if (error) {
      console.error('Error incrementing search count:', error);
    }

    await checkUserLimits();
    return remainingSearches > 0;
  };

  return {
    remainingSearches,
    hasReachedLimit,
    isSubscribed,
    subscriptionTier,
    isLoading,
    consumeSearch,
    refreshLimits: checkUserLimits,
    freeSearchLimit: FREE_SEARCH_LIMIT
  };
};
