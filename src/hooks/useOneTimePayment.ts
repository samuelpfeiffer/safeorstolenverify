import React, { useState } from 'react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface UseOneTimePaymentReturn {
  isLoading: boolean;
  createOneTimePayment: (priceId?: string, planName?: string) => Promise<string | null>;
}

export const useOneTimePayment = (): UseOneTimePaymentReturn => {
  const { session, isAuthenticated } = useUnifiedAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const createOneTimePayment = async (priceId?: string, planName?: string): Promise<string | null> => {
    if (!session || !isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to purchase a verification.",
        variant: "destructive",
      });
      return null;
    }

    setIsLoading(true);
    try {
      const finalPriceId = priceId || 'price_1SSVqkGxnZLw8J7O3GwCyKRn'; // $2.99 Single Verification price ID
      const finalPlanName = planName || 'Single Verification';
      
      console.log("Creating one-time payment checkout with priceId:", finalPriceId);
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: finalPriceId,
          isSubscription: false,
          // BULLETPROOF: Use hardcoded production URL
          redirectUrl: 'https://safeorstolen.com',
          planName: finalPlanName,
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error("Payment creation error:", error);
        throw new Error(error.message || 'Payment system unavailable');
      }

      if (data?.url) {
        console.log("Checkout URL created:", data.url);
        return data.url;
      }

      throw new Error('No checkout URL received from payment system');
    } catch (error: any) {
      console.error("Error creating one-time payment:", error);
      
      // Check if it's a network connectivity issue
      if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
        toast({
          title: "Connection Error",
          description: "Unable to connect to payment system. Please check your internet connection and try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Payment System Temporarily Unavailable",
          description: "Please try again in a few minutes or contact support if the issue persists.",
          variant: "destructive",
        });
      }
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    createOneTimePayment,
  };
};