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
        title: "Authentication required",
        description: "Please sign in to purchase a report",
        variant: "destructive",
      });
      return null;
    }

    if (!serialNumber.trim()) {
      toast({
        title: "Serial number required",
        description: "Please enter a serial number to verify",
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
          redirectUrl: window.location.origin,
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error("Error creating one-time payment:", error);
        throw error;
      }

      console.log("One-time payment checkout created:", data.url);
      return data.url;
    } catch (error: any) {
      console.error("Failed to create one-time payment:", error);
      toast({
        title: "Payment error",
        description: error.message || "Failed to create payment session",
        variant: "destructive",
      });
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