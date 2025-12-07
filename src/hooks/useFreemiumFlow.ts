import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useFreemiumFlow = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [searchCount, setSearchCount] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const FREE_SEARCH_LIMIT = 2; // 2 free searches during 14-day trial
  const TRIAL_DURATION_DAYS = 14;

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

      // Check subscription status from subscribers table
      const { data: subscription } = await supabase
        .from('subscribers')
        .select('subscribed')
        .eq('user_id', user.id)
        .single();

      // Also check profile for paid tier (pay_per_use purchases update profiles, not subscribers)
      const { data: profile } = await supabase
        .from('profiles')
        .select('subscription_tier, monthly_verification_limit, search_count, created_at')
        .eq('id', user.id)
        .single();

      // User is paid if they have active subscription OR have a paid tier
      const paidTiers = ['pay_per_use', 'starter', 'personal', 'professional', 'enterprise'];
      const hasPaidTier = profile?.subscription_tier && paidTiers.includes(profile.subscription_tier);

      if (subscription?.subscribed || hasPaidTier) {
        setIsSubscribed(true);
        setIsLoading(false);
        return;
      }

      const currentCount = profile?.search_count || 0;
      setSearchCount(currentCount);

      // Check if trial has expired (14 days from account creation)
      if (profile?.created_at) {
        const createdAt = new Date(profile.created_at);
        const expiresAt = new Date(createdAt);
        expiresAt.setDate(expiresAt.getDate() + TRIAL_DURATION_DAYS);
        const isTrialExpired = new Date() > expiresAt;

        // Show paywall if limit reached OR trial expired
        if (currentCount >= FREE_SEARCH_LIMIT || isTrialExpired) {
          setShowPaywall(true);
        }
      } else if (currentCount >= FREE_SEARCH_LIMIT) {
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
    if (isSubscribed) return true;
    return searchCount < FREE_SEARCH_LIMIT;
  };

  const getRemainingSearches = (): number => {
    if (isSubscribed) return 999; // Unlimited
    return Math.max(0, FREE_SEARCH_LIMIT - searchCount);
  };

  const consumeSearch = async (): Promise<boolean> => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to perform verifications.",
        variant: "destructive"
      });
      return false;
    }

    if (isSubscribed) {
      return true; // Unlimited searches
    }

    if (searchCount >= FREE_SEARCH_LIMIT) {
      setShowPaywall(true);
      toast({
        title: "Free Searches Used Up",
        description: "Upgrade to continue verifying items.",
        variant: "destructive"
      });
      return false;
    }

    try {
      // Increment search count
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
        toast({
          title: "Error",
          description: "Failed to update search count. Please try again.",
          variant: "destructive"
        });
        return false;
      }

      setSearchCount(newCount);

      // Show paywall if this was the last free search
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

  return {
    searchCount,
    remainingSearches: getRemainingSearches(),
    isSubscribed,
    showPaywall,
    isLoading,
    canPerformSearch: canPerformSearch(),
    consumeSearch,
    hidePaywall,
    refreshStatus: checkUserStatus
  };
};