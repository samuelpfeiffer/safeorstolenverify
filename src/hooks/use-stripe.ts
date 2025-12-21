import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useUnifiedAuth } from "@/hooks/useUnifiedAuth";
import { useToast } from "@/hooks/use-toast";

interface VerificationRequest {
  serialNumber: string;
  itemType: string;
  priceId: string;
}

export function useStripe() {
  const [isLoading, setIsLoading] = useState(false);
  const { session } = useUnifiedAuth();
  const { toast } = useToast();

  const createCheckoutSession = async ({ serialNumber, itemType, priceId }: VerificationRequest) => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to verify this item.",
        variant: "destructive",
      });
      return null;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          priceId,
          serialNumber,
          itemType,
          // BULLETPROOF: Use hardcoded production URL
          redirectUrl: 'https://safeorstolen.com',
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        throw error;
      }

      if (!data?.url) {
        throw new Error("No checkout URL received from server");
      }

      return data.url;
    } catch (error: any) {
      toast({
        title: "Payment error",
        description: error.message || "Failed to create checkout session",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const processVerification = async (verificationId: string) => {
    if (!verificationId) {
      return null;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("verification_searches")
        .select("*, purchases(*)")
        .eq("id", verificationId)
        .maybeSingle();

      if (error) {
        throw error;
      }

      return data;
    } catch (error: any) {
      toast({
        title: "Verification error",
        description: error.message || "Failed to process verification",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createCheckoutSession,
    processVerification,
    isLoading,
  };
}
