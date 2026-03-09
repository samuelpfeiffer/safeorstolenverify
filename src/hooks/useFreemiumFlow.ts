import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { FREE_SEARCH_LIMIT, FAIR_USE_CAP } from '@/features/pricing/constants';

export const useFreemiumFlow = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [searchCount, setSearchCount] = useState(0);
  const [monthlyUsage, setMonthlyUsage] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionTier, setSubscriptionTier] = useState<string | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [showFairUseWarning, setShowFairUseWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      checkUserStatus();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  const checkUserStatus = async () => {
    if (!user) return;

    try {
      setIsLoading(true);

      const { data: profile } = await supabase
        .from('profiles')
        .select('subscription_tier, subscription_end, search_count, verifications_used_this_month, created_at')
        .eq('id', user.id)
        .single();

      // Check if user has an active paid subscription
      const paidTiers = ['unlimited', 'starter', 'personal', 'professional', 'enterprise', 'pay_per_use'];
      const hasPaidTier = profile?.subscription_tier && paidTiers.includes(profile.subscription_tier);
      const hasActiveSubscription = hasPaidTier && 
        (!profile?.subscription_end || new Date(profile.subscription_end) > new Date());

      if (hasActiveSubscription) {
        setIsSubscribed(true);
        setSubscriptionTier(profile.subscription_tier);
        setMonthlyUsage(profile.verifications_used_this_month || 0);
        
        // Check fair use cap for unlimited plan
        if (profile.subscription_tier === 'unlimited' && 
            (profile.verifications_used_this_month || 0) >= FAIR_USE_CAP) {
          setShowFairUseWarning(true);
        }
        
        setIsLoading(false);
        return;
      }

      // Free tier logic
      const currentCount = profile?.search_count || 0;
      setSearchCount(currentCount);

      if (currentCount >= FREE_SEARCH_LIMIT) {
        setShowPaywall(true);
      }

    } catch (error) {
      console.error('Error checking user status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const canPerformSearch = (): boolean => {
    if (!user) return false;
    
    if (isSubscribed) {
      // Check fair use cap for unlimited subscribers
      if (subscriptionTier === 'unlimited' && monthlyUsage >= FAIR_USE_CAP) {
        return false;
      }
      return true;
    }
    
    return searchCount < FREE_SEARCH_LIMIT;
  };

  const getRemainingSearches = (): number => {
    if (isSubscribed) {
      if (subscriptionTier === 'unlimited') {
        return FAIR_USE_CAP - monthlyUsage;
      }
      return 999; // Unlimited for other paid tiers
    }
    return Math.max(0, FREE_SEARCH_LIMIT - searchCount);
  };

  const consumeSearch = async (): Promise<boolean> => {
    if (!user) {
      toast({
        title: "Subscription Required",
        description: "Get a single check for $0.99 or subscribe for $2.99/month unlimited.",
        variant: "destructive"
      });
      return false;
    }

    if (isSubscribed) {
      // Check fair use cap
      if (subscriptionTier === 'unlimited' && monthlyUsage >= FAIR_USE_CAP) {
        setShowFairUseWarning(true);
        toast({
          title: "Fair Use Limit Reached",
          description: "You've reached the monthly fair-use limit. Contact support for enterprise access.",
          variant: "destructive"
        });
        return false;
      }
      
      // Increment monthly usage for subscribers
      const newUsage = monthlyUsage + 1;
      await supabase
        .from('profiles')
        .update({ 
          verifications_used_this_month: newUsage,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);
      
      setMonthlyUsage(newUsage);
      
      // Show warning when approaching fair use cap
      if (subscriptionTier === 'unlimited' && newUsage >= FAIR_USE_CAP - 10) {
        toast({
          title: "Approaching Fair Use Limit",
          description: `${FAIR_USE_CAP - newUsage} checks remaining this month.`,
        });
      }
      
      return true;
    }

    // Free tier logic
    if (searchCount >= FREE_SEARCH_LIMIT) {
      setShowPaywall(true);
      toast({
        title: "Subscription Required",
        description: "Get a single check for $0.99 or subscribe for $2.99/month unlimited.",
        variant: "destructive"
      });
      return false;
    }

    try {
      const newCount = searchCount + 1;
      
      const { error } = await supabase
        .from('profiles')
        .update({ 
          search_count: newCount,
          search_count_reset_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (error) {
        console.error('Error updating search count:', error);
        return false;
      }

      setSearchCount(newCount);

      if (newCount >= FREE_SEARCH_LIMIT) {
        setShowPaywall(true);
      }

      return true;
    } catch (error) {
      console.error('Error consuming search:', error);
      return false;
    }
  };

  const hidePaywall = () => {
    setShowPaywall(false);
  };

  const hideFairUseWarning = () => {
    setShowFairUseWarning(false);
  };

  return {
    searchCount,
    remainingSearches: getRemainingSearches(),
    isSubscribed,
    subscriptionTier,
    showPaywall,
    showFairUseWarning,
    isLoading,
    canPerformSearch: canPerformSearch(),
    consumeSearch,
    hidePaywall,
    hideFairUseWarning,
    refreshStatus: checkUserStatus,
    freeSearchLimit: FREE_SEARCH_LIMIT,
    fairUseCap: FAIR_USE_CAP
  };
};
