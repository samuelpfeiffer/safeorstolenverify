import { useState, useEffect } from 'react';
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

  const FREE_SEARCH_LIMIT = 2;

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

      // Check subscription status
      const { data: subscription } = await supabase
        .from('subscribers')
        .select('subscribed')
        .eq('user_id', user.id)
        .single();

      if (subscription?.subscribed) {
        setIsSubscribed(true);
        setIsLoading(false);
        return;
      }

      // Get user profile with search count
      const { data: profile } = await supabase
        .from('profiles')
        .select('search_count')
        .eq('id', user.id)
        .single();

      const currentCount = profile?.search_count || 0;
      setSearchCount(currentCount);
      
      // Show paywall if limit reached
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