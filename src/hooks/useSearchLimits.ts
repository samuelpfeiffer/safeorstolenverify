
import { useState, useEffect } from 'react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useToast } from '@/hooks/use-toast';
import { useSubscription } from '@/hooks/useSubscription';

interface SearchLimits {
  remainingSearches: number;
  hasReachedLimit: boolean;
  isSubscribed: boolean;
  resetSearches: () => void;
  consumeSearch: () => Promise<boolean>;
}

const STORAGE_KEY = 'totalSearchCount';

export const useSearchLimits = (): SearchLimits => {
  const { isAuthenticated, user } = useUnifiedAuth();
  const { toast } = useToast();
  const { subscriptionData } = useSubscription();
  const [searchCount, setSearchCount] = useState(0);

  // Load total search count from localStorage on mount
  useEffect(() => {
    if (isAuthenticated && user?.id) {
      const userKey = `${STORAGE_KEY}_${user.id}`;
      const savedCount = localStorage.getItem(userKey);
      if (savedCount) {
        const parsedCount = parseInt(savedCount, 10);
        if (!isNaN(parsedCount)) {
          setSearchCount(parsedCount);
        }
      }
    }
  }, [isAuthenticated, user?.id]);

  const isSubscribed = Boolean(subscriptionData?.subscribed);

  // Determine search limits based on user status
  let searchLimit: number;
  let remainingSearches: number;

  if (!isAuthenticated) {
    // Non-authenticated users get no searches (require sign-in)
    searchLimit = 0;
    remainingSearches = 0;
  } else if (isSubscribed) {
    // Subscribed users get unlimited
    searchLimit = Infinity;
    remainingSearches = Infinity;
  } else {
    // Regular free users get 4 searches total (one-time, not daily)
    searchLimit = 4;
    remainingSearches = Math.max(0, searchLimit - searchCount);
  }

  const hasReachedLimit = !isAuthenticated || 
                         (!isSubscribed && searchCount >= searchLimit);

  const consumeSearch = async (): Promise<boolean> => {
    if (!isAuthenticated || !user?.id) {
      toast({
        title: "Sign in required",
        description: "You need to sign in to verify items. Sign up now to get 4 free searches!",
        variant: "destructive",
      });
      return false;
    }

    if (isSubscribed) {
      return true; // Unlimited searches for subscribers
    }

    // Regular free tier logic (4 total searches)
    if (searchCount >= searchLimit) {
      toast({
        title: "Free searches exhausted",
        description: `You've used all ${searchLimit} free searches. Upgrade to a paid plan for unlimited searches!`,
        variant: "destructive",
      });
      return false;
    }

    const newCount = searchCount + 1;
    setSearchCount(newCount);
    
    // Store per-user search count
    const userKey = `${STORAGE_KEY}_${user.id}`;
    localStorage.setItem(userKey, newCount.toString());

    // Warn when approaching limit
    if (newCount === searchLimit - 1) {
      toast({
        title: "Last free search!",
        description: "This is your final free search. Upgrade for unlimited access!",
      });
    } else if (newCount === searchLimit) {
      toast({
        title: "Free searches exhausted",
        description: "Upgrade now for unlimited searches and premium features!",
        variant: "destructive",
      });
    }

    return true;
  };

  const resetSearches = () => {
    if (user?.id) {
      setSearchCount(0);
      const userKey = `${STORAGE_KEY}_${user.id}`;
      localStorage.setItem(userKey, '0');
    }
  };

  return {
    remainingSearches: typeof remainingSearches === 'number' ? remainingSearches : 999,
    hasReachedLimit,
    isSubscribed,
    resetSearches,
    consumeSearch,
  };
};
