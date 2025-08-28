import { useState, useEffect, useCallback, useRef } from 'react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useToast } from '@/hooks/use-toast';
import { useRequestManager } from '@/hooks/useRequestManager';
import { supabase } from '@/integrations/supabase/client';
import { SUBSCRIPTION_TIERS } from '@/utils/pricing';

interface SubscriptionData {
  subscribed: boolean;
  subscription_tier: string | null;
  subscription_end: string | null;
}

interface UseEnhancedSubscriptionReturn {
  subscriptionData: SubscriptionData | null;
  isLoading: boolean;
  error: string | null;
  checkSubscription: () => Promise<void>;
  createSubscriptionCheckout: (priceId: string) => Promise<string | null>;
  openCustomerPortal: () => Promise<void>;
  getCustomerPortalUrl: () => Promise<string | null>;
  refreshSubscription: () => Promise<void>;
}

export const useEnhancedSubscription = (): UseEnhancedSubscriptionReturn => {
  const { session, isAuthenticated } = useUnifiedAuth();
  const { toast } = useToast();
  const { executeRequest, cleanup } = useRequestManager();
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isMountedRef = useRef(true);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      cleanup();
    };
  }, [cleanup]);

  const checkSubscription = useCallback(async () => {
    if (!session || !isAuthenticated) {
      if (isMountedRef.current) {
        setSubscriptionData({ subscribed: false, subscription_tier: null, subscription_end: null });
        setError(null);
      }
      return;
    }

    if (isMountedRef.current) {
      setIsLoading(true);
      setError(null);
    }

    try {
      const result = await executeRequest(
        async (signal) => {
          const { data, error } = await supabase.functions.invoke('check-subscription', {
            headers: {
              Authorization: `Bearer ${session.access_token}`,
            },
          });

          if (error) {
            console.error("Supabase function error:", error);
            throw new Error(error.message || 'Edge function failed');
          }
          return data;
        },
        `subscription-${session.user.id}`,
        { timeout: 8000, dedupe: true }
      );

      if (result && isMountedRef.current) {
        setSubscriptionData(result);
      }
    } catch (error: any) {
      console.error("Failed to check subscription:", error);
      if (isMountedRef.current) {
        // Don't show error for subscription checks on pricing page - just set defaults
        setError(null);
        setSubscriptionData({ subscribed: false, subscription_tier: null, subscription_end: null });
      }
    } finally {
      if (isMountedRef.current) {
        setIsLoading(false);
      }
    }
  }, [session, isAuthenticated, executeRequest]);

  const createSubscriptionCheckout = useCallback(async (priceId: string): Promise<string | null> => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to subscribe",
        variant: "destructive",
      });
      return null;
    }

    if (isMountedRef.current) {
      setIsLoading(true);
      setError(null);
    }

    try {
      const result = await executeRequest(
        async (signal) => {
          // Attempt to also send a human-readable plan name to the edge function
          const planName = Object.values(SUBSCRIPTION_TIERS).find((t) => t.stripePriceId === priceId)?.name;

          const { data, error } = await supabase.functions.invoke('create-checkout', {
            body: {
              priceId,
              isSubscription: true,
              redirectUrl: window.location.origin,
              planName, // helps the edge function resolve the correct Stripe Price if IDs changed
            },
            headers: {
              Authorization: `Bearer ${session.access_token}`,
            },
          });

          if (error) throw error;
          return data.url;
        },
        `checkout-${priceId}-${session.user.id}`,
        { timeout: 15000, dedupe: false } // Don't dedupe checkout requests
      );

      return result;
    } catch (error: any) {
      console.error("Failed to create checkout:", error);
      if (isMountedRef.current) {
        setError(error.message || 'Failed to create checkout');
        toast({
          title: "Checkout error",
          description: error.message || "Failed to create checkout session",
          variant: "destructive",
        });
      }
      return null;
    } finally {
      if (isMountedRef.current) {
        setIsLoading(false);
      }
    }
  }, [session, executeRequest, toast]);

  const openCustomerPortal = useCallback(async () => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to manage your subscription",
        variant: "destructive",
      });
      return;
    }

    if (isMountedRef.current) {
      setIsLoading(true);
    }

    try {
      const result = await executeRequest(
        async (signal) => {
          const { data, error } = await supabase.functions.invoke('customer-portal', {
            headers: {
              Authorization: `Bearer ${session.access_token}`,
            },
          });

          if (error) throw error;
          return data.url;
        },
        `portal-${session.user.id}`,
        { timeout: 10000, dedupe: true }
      );

      if (result) {
        window.open(result, '_blank');
      }
    } catch (error: any) {
      console.error("Failed to open customer portal:", error);
      if (isMountedRef.current) {
        toast({
          title: "Portal error",
          description: error.message || "Failed to open customer portal",
          variant: "destructive",
        });
      }
    } finally {
      if (isMountedRef.current) {
        setIsLoading(false);
      }
    }
  }, [session, executeRequest, toast]);

  const getCustomerPortalUrl = useCallback(async (): Promise<string | null> => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to manage your subscription",
        variant: "destructive",
      });
      return null;
    }

    if (isMountedRef.current) {
      setIsLoading(true);
    }

    try {
      const result = await executeRequest(
        async (signal) => {
          const { data, error } = await supabase.functions.invoke('customer-portal', {
            headers: {
              Authorization: `Bearer ${session.access_token}`,
            },
          });

          if (error) throw error;
          return data.url as string;
        },
        `portal-url-${session.user.id}`,
        { timeout: 10000, dedupe: true }
      );

      return result || null;
    } catch (error: any) {
      console.error("Failed to get customer portal URL:", error);
      if (isMountedRef.current) {
        toast({
          title: "Portal error",
          description: error.message || "Failed to open customer portal",
          variant: "destructive",
        });
      }
      return null;
    } finally {
      if (isMountedRef.current) {
        setIsLoading(false);
      }
    }
  }, [session, executeRequest, toast]);

  const refreshSubscription = useCallback(async () => {
    await checkSubscription();
  }, [checkSubscription]);

  // Check subscription on mount and when authentication changes - with stable dependency
  useEffect(() => {
    if (session?.user?.id) {
      checkSubscription();
    }
  }, [session?.user?.id]); // Only depend on user ID to prevent infinite loops

  return {
    subscriptionData,
    isLoading,
    error,
    checkSubscription,
    createSubscriptionCheckout,
    openCustomerPortal,
    getCustomerPortalUrl,
    refreshSubscription,
  };
};