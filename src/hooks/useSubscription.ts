
import { useState, useEffect } from 'react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface SubscriptionData {
  subscribed: boolean;
  subscription_tier: string | null;
  subscription_end: string | null;
}

interface UseSubscriptionReturn {
  subscriptionData: SubscriptionData | null;
  isLoading: boolean;
  checkSubscription: () => Promise<void>;
  createSubscriptionCheckout: (priceId: string) => Promise<string | null>;
  openCustomerPortal: () => Promise<void>;
  refreshSubscription: () => Promise<void>;
}

export const useSubscription = (): UseSubscriptionReturn => {
  const { session, isAuthenticated } = useUnifiedAuth();
  const { toast } = useToast();
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkSubscription = async () => {
    if (!session || !isAuthenticated) {
      console.log("No session, setting subscribed to false");
      setSubscriptionData({ subscribed: false, subscription_tier: null, subscription_end: null });
      return;
    }

    setIsLoading(true);
    try {
      console.log("Checking subscription status with updated Stripe key...");
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error("Error checking subscription:", error);
        // Don't show toast for subscription check errors - handle gracefully
        setSubscriptionData({ subscribed: false, subscription_tier: null, subscription_end: null });
        return;
      }

      console.log("Subscription check result:", data);
      setSubscriptionData(data);
    } catch (error: any) {
      console.error("Failed to check subscription:", error);
      // Handle gracefully without showing error toast
      setSubscriptionData({ subscribed: false, subscription_tier: null, subscription_end: null });
    } finally {
      setIsLoading(false);
    }
  };

  const createSubscriptionCheckout = async (priceId: string): Promise<string | null> => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to subscribe",
        variant: "destructive",
      });
      return null;
    }

    setIsLoading(true);
    try {
      console.log("Creating subscription checkout...");
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId,
          isSubscription: true,
          redirectUrl: window.location.origin,
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error("Error creating checkout:", error);
        throw error;
      }

      console.log("Checkout created:", data.url);
      return data.url;
    } catch (error: any) {
      console.error("Failed to create checkout:", error);
      toast({
        title: "Checkout error",
        description: error.message || "Failed to create checkout session",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const openCustomerPortal = async () => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to manage your subscription",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      console.log("Opening customer portal...");
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error("Error opening customer portal:", error);
        throw error;
      }

      console.log("Opening portal:", data.url);
      window.open(data.url, '_blank');
    } catch (error: any) {
      console.error("Failed to open customer portal:", error);
      toast({
        title: "Portal error",
        description: error.message || "Failed to open customer portal",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const refreshSubscription = async () => {
    await checkSubscription();
  };

  // Check subscription on mount and when authentication changes
  useEffect(() => {
    checkSubscription();
  }, [session, isAuthenticated]);

  return {
    subscriptionData,
    isLoading,
    checkSubscription,
    createSubscriptionCheckout,
    openCustomerPortal,
    refreshSubscription,
  };
};
