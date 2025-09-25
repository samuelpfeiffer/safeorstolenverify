import { useState } from 'react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface UseOneTimePaymentReturn {
  isLoading: boolean;
  createOneTimePayment: (serialNumber: string, itemType: string) => Promise<string | null>;
}

export const useOneTimePayment = (): UseOneTimePaymentReturn => {
  const { session, isAuthenticated } = useUnifiedAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const createOneTimePayment = async (serialNumber: string, itemType: string): Promise<string | null> => {
    if (!session || !isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to purchase a verification report.",
        variant: "destructive",
      });
      return null;
    }

    if (!serialNumber.trim()) {
      toast({
        title: "Serial Number Required",
        description: "Please enter a valid serial number.",
        variant: "destructive",
      });
      return null;
    }

    setIsLoading(true);
    try {
      console.log("Creating one-time payment for serial number:", serialNumber);
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: 'price_1Rz83i2eGaMDLFHonAmu86lS', // $10 Report price ID
          serialNumber: serialNumber.trim(),
          itemType: itemType || 'general',
          isSubscription: false, // This is a one-time payment
          redirectUrl: window.location.origin + '/verification-success',
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