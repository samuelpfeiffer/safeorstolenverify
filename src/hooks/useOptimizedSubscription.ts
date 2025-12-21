import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface SubscriptionData {
  subscribed: boolean;
  subscription_tier: string | null;
  subscription_end: string | null;
}

interface UseOptimizedSubscriptionReturn {
  subscriptionData: SubscriptionData | null;
  isLoading: boolean;
  error: string | null;
  checkSubscription: () => Promise<void>;
  createSubscriptionCheckout: (priceId: string) => Promise<string | null>;
  openCustomerPortal: () => Promise<void>;
  refreshSubscription: () => Promise<void>;
}

const REQUEST_TIMEOUT = 10000; // 10 seconds
const DEBOUNCE_DELAY = 500; // 500ms

export const useOptimizedSubscription = (): UseOptimizedSubscriptionReturn => {
  const { session, isAuthenticated } = useUnifiedAuth();
  const { toast } = useToast();
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Request management
  const abortControllerRef = useRef<AbortController | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastRequestTimeRef = useRef<number>(0);
  const requestCountRef = useRef<number>(0);
  const circuitBreakerRef = useRef<{ failures: number; lastFailure: number; isOpen: boolean }>({
    failures: 0,
    lastFailure: 0,
    isOpen: false
  });

  // Circuit breaker logic
  const checkCircuitBreaker = useCallback(() => {
    const now = Date.now();
    const breaker = circuitBreakerRef.current;
    
    // Reset after 5 minutes
    if (now - breaker.lastFailure > 300000) {
      breaker.failures = 0;
      breaker.isOpen = false;
    }
    
    // Open circuit after 3 failures
    if (breaker.failures >= 3) {
      breaker.isOpen = true;
      return false;
    }
    
    return true;
  }, []);

  const recordFailure = useCallback(() => {
    const breaker = circuitBreakerRef.current;
    breaker.failures++;
    breaker.lastFailure = Date.now();
  }, []);

  const createTimeoutPromise = useCallback((ms: number) => {
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timeout')), ms);
    });
  }, []);

  const checkSubscription = useCallback(async () => {
    // Prevent rapid successive calls
    const now = Date.now();
    if (now - lastRequestTimeRef.current < DEBOUNCE_DELAY) {
      return;
    }
    lastRequestTimeRef.current = now;

    if (!checkCircuitBreaker()) {
      setError("Service temporarily unavailable");
      return;
    }

    if (!session || !isAuthenticated) {
      setSubscriptionData({ subscribed: false, subscription_tier: null, subscription_end: null });
      setError(null);
      return;
    }

    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    setIsLoading(true);
    setError(null);
    requestCountRef.current++;
    
    try {
      const subscriptionPromise = supabase.functions.invoke('check-subscription', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      // Race between the request and timeout
      const { data, error } = await Promise.race([
        subscriptionPromise,
        createTimeoutPromise(REQUEST_TIMEOUT)
      ]) as any;

      if (error) {
        throw new Error(error.message || 'Subscription check failed');
      }

      setSubscriptionData(data);
      setError(null);
      
      // Reset circuit breaker on success
      circuitBreakerRef.current.failures = 0;
      
    } catch (error: any) {
      if (error.name === 'AbortError') {
        return;
      }
      
      recordFailure();
      
      const errorMessage = error.message || 'Failed to check subscription';
      setError(errorMessage);
      
      // Set fallback state
      setSubscriptionData({ subscribed: false, subscription_tier: null, subscription_end: null });
    } finally {
      setIsLoading(false);
    }
  }, [session, isAuthenticated, checkCircuitBreaker, recordFailure, createTimeoutPromise]);

  const debouncedCheckSubscription = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    debounceTimerRef.current = setTimeout(() => {
      checkSubscription();
    }, DEBOUNCE_DELAY);
  }, [checkSubscription]);

  const createSubscriptionCheckout = useCallback(async (priceId: string): Promise<string | null> => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to subscribe",
        variant: "destructive",
      });
      return null;
    }

    if (!checkCircuitBreaker()) {
      toast({
        title: "Service temporarily unavailable",
        description: "Please try again in a few minutes",
        variant: "destructive",
      });
      return null;
    }

    setIsLoading(true);
    const abortController = new AbortController();
    
    try {
      const checkoutPromise = supabase.functions.invoke('create-checkout', {
        body: {
          priceId: null, // Let the edge function resolve the actual Stripe price ID
          planName: priceId, // Use the plan name for Stripe matching (Stripe calls their pricing tiers "products")
          isSubscription: true,
          redirectUrl: `${window.location.origin}/pricing?success=true`,
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      const { data, error } = await Promise.race([
        checkoutPromise,
        createTimeoutPromise(REQUEST_TIMEOUT)
      ]) as any;

      if (error) {
        throw new Error(error.message || 'Checkout creation failed');
      }

      return data.url;
      
    } catch (error: any) {
      if (error.name === 'AbortError') {
        return null;
      }
      
      recordFailure();
      
      toast({
        title: "Checkout error",
        description: error.message || "Failed to create checkout session",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [session, toast, checkCircuitBreaker, recordFailure, createTimeoutPromise]);

  const openCustomerPortal = useCallback(async () => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to manage your subscription",
        variant: "destructive",
      });
      return;
    }

    if (!checkCircuitBreaker()) {
      toast({
        title: "Service temporarily unavailable",
        description: "Please try again in a few minutes",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const abortController = new AbortController();
    
    try {
      const portalPromise = supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      const { data, error } = await Promise.race([
        portalPromise,
        createTimeoutPromise(REQUEST_TIMEOUT)
      ]) as any;

      if (error) {
        throw new Error(error.message || 'Portal access failed');
      }

      window.open(data.url, '_blank');
      
    } catch (error: any) {
      if (error.name === 'AbortError') {
        return;
      }
      
      recordFailure();
      
      toast({
        title: "Portal error",
        description: error.message || "Failed to open customer portal",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [session, toast, checkCircuitBreaker, recordFailure, createTimeoutPromise]);

  const refreshSubscription = useCallback(async () => {
    await checkSubscription();
  }, [checkSubscription]);

  // Effect with cleanup and debouncing
  useEffect(() => {
    debouncedCheckSubscription();
    
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [session, isAuthenticated, debouncedCheckSubscription]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return {
    subscriptionData,
    isLoading,
    error,
    checkSubscription,
    createSubscriptionCheckout,
    openCustomerPortal,
    refreshSubscription,
  };
};