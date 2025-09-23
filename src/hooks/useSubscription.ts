
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
      console.log("Checking subscription status...");
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
      setSubscriptionData(data || { subscribed: false, subscription_tier: null, subscription_end: null });
    } catch (error: any) {
      console.error("Failed to check subscription:", error);
      // Handle gracefully without showing error toast for subscription checks
      setSubscriptionData({ subscribed: false, subscription_tier: null, subscription_end: null });
    } finally {
      setIsLoading(false);
    }
  };

  const createSubscriptionCheckout = async (priceId: string): Promise<string | null> => {
    if (!session || !isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to subscribe",
        variant: "destructive",
      });
      return null;
    }

    setIsLoading(true);
    try {
      console.log("Creating subscription checkout with 7-day trial for priceId:", priceId);
      
      // Map price IDs to plan names for better Stripe matching
      const planNameMap: Record<string, string> = {
        'price_1S0uGQGxnZLw8J7OOgm02vdB': 'Smart Buyer',
        'price_1S0uGiGxnZLw8J7OQEwssbK7': 'Savvy Shopper',
        'price_1S0uJsGxnZLw8J7OfU7XKMhV': 'Business Pro',
        'price_1S9CrOGxnZLw8J7OAWHGY2P9': 'Entry Level',
        'price_1S9CuPGxnZLw8J7OyBKr6134': 'Pay Per Check',
        'price_1Rz83i2eGaMDLFHonAmu86lS': 'Certified Stolen/Legitimate Report'
      };
      
      // Check if this is the one-time report product
      const isOneTimeReport = priceId === 'price_1Rz83i2eGaMDLFHonAmu86lS';
      
      if (isOneTimeReport) {
        // Redirect to one-time payment instead of subscription
        toast({
          title: "One-time payment required",
          description: "This product requires a one-time payment, not a subscription. Please use the verification form.",
          variant: "default",
        });
        return null;
      }
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId,
          planName: planNameMap[priceId] || `Plan for ${priceId}`,
          isSubscription: true,
          redirectUrl: window.location.origin,
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error("Error creating checkout:", error);
        const errorMessage = typeof error === 'object' && error.details 
          ? error.details 
          : error.message || "Unknown error occurred";
        
        toast({
          title: "Checkout error",
          description: errorMessage,
          variant: "destructive",
        });
        throw error;
      }

      if (!data?.url) {
        console.error("No URL received from checkout session:", data);
        toast({
          title: "Checkout error", 
          description: "No checkout URL received from server. Please try again.",
          variant: "destructive",
        });
        return null;
      }

      console.log("Checkout created with trial:", data.url);
      return data.url;
    } catch (error: any) {
      console.error("Failed to create checkout:", error);
      
      // Enhanced error handling with specific messages
      let errorMessage = "Failed to create checkout session";
      let errorAction = "Please try again";
      
      if (error?.message?.includes("Stripe configuration")) {
        errorMessage = "Payment system configuration error";
        errorAction = "Please contact support or try again later";
      } else if (error?.message?.includes("No matching")) {
        errorMessage = "Product not found in payment system";
        errorAction = "Please try a different plan or contact support";
      } else if (error?.message?.includes("Invalid token")) {
        errorMessage = "Session expired";
        errorAction = "Please sign in again and try again";
      } else if (error?.details) {
        errorMessage = error.details;
        errorAction = error.action || "Please try again";
      }
      
      toast({
        title: "Subscription Error",
        description: `${errorMessage}. ${errorAction}`,
        variant: "destructive",
        duration: 8000, // Show longer for error messages
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const openCustomerPortal = async () => {
    if (!session || !isAuthenticated) {
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
        const errorMessage = typeof error === 'object' && error.details 
          ? error.details 
          : error.message || "Failed to open customer portal";
        
        toast({
          title: "Portal Error",
          description: errorMessage,
          variant: "destructive",
        });
        return;
      }

      if (!data?.url) {
        console.error("No URL received from customer portal:", data);
        toast({
          title: "Portal Error",
          description: "No portal URL received. Please try again.",
          variant: "destructive",
        });
        return;
      }

      console.log("Opening portal:", data.url);
      window.open(data.url, '_blank');
    } catch (error: any) {
      console.error("Failed to open customer portal:", error);
      toast({
        title: "Portal Error",
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
