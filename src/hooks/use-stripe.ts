import { useState } from "react";
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
      console.log("Creating checkout session with:", { serialNumber, itemType, priceId });
      
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          priceId,
          serialNumber,
          itemType,
          redirectUrl: window.location.origin,
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      if (!data?.url) {
        throw new Error("No checkout URL received from server");
      }

      console.log("Checkout session created successfully:", data.url);
      return data.url;
    } catch (error: any) {
      console.error("Error creating checkout session:", error);
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
      console.error("No verification ID provided");
      return null;
    }

    setIsLoading(true);
    try {
      console.log("Processing verification for ID:", verificationId);
      
      const { data, error } = await supabase
        .from("verification_searches")
        .select("*, purchases(*)")
        .eq("id", verificationId)
        .single();

      if (error) {
        console.error("Database error:", error);
        throw error;
      }

      console.log("Verification processed successfully:", data);
      return data;
    } catch (error: any) {
      console.error("Error processing verification:", error);
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
