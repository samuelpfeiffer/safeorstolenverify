import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { validateSerialNumberSecurity } from '@/utils/securityValidation';
import { logAuditEvent, AUDIT_ACTIONS } from '@/utils/auditLogging';
import { checkRateLimit } from '@/utils/rateLimiting';

interface SecureStripeOptions {
  enableAuditLogging?: boolean;
  enableRateLimiting?: boolean;
  enableInputValidation?: boolean;
}

export const useSecureStripe = (options: SecureStripeOptions = {}) => {
  const { toast } = useToast();
  const {
    enableAuditLogging = true,
    enableRateLimiting = true,
    enableInputValidation = true
  } = options;

  const secureCreateCheckoutSession = async (params: {
    serialNumber: string;
    itemType: string;
    priceId: string;
    isSubscription?: boolean;
  }) => {
    console.log('=== Secure Stripe Checkout Session Creation ===');
    
    const { serialNumber, itemType, priceId, isSubscription = false } = params;

    // Authentication check
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to continue with payment.",
        variant: "destructive",
      });
      return null;
    }

    // Rate limiting
    if (enableRateLimiting) {
      const canProceed = await checkRateLimit('verification');
      if (!canProceed) {
        toast({
          title: "Too many requests",
          description: "Please wait before creating another checkout session.",
          variant: "destructive",
        });
        return null;
      }
    }

    // Input validation
    let serialValidation: any = null;
    if (enableInputValidation) {
      if (!isSubscription) {
        serialValidation = await validateSerialNumberSecurity(serialNumber);
        if (!serialValidation.isValid) {
          toast({
            title: "Invalid input",
            description: serialValidation.errors[0],
            variant: "destructive",
          });
          return null;
        }
      }

      // Validate price ID format
      if (!priceId || !priceId.startsWith('price_')) {
        toast({
          title: "Invalid price",
          description: "Invalid price configuration.",
          variant: "destructive",
        });
        return null;
      }
    }

    try {
      // Prepare request body
      const requestBody = {
        priceId,
        redirectUrl: window.location.origin,
        isSubscription,
        ...(isSubscription ? {} : {
          serialNumber: enableInputValidation && serialValidation?.sanitizedValue ? 
            serialValidation.sanitizedValue : 
            serialNumber,
          itemType: itemType.trim(),
        }),
      };

      console.log("Creating secure checkout session with:", requestBody);
      
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: requestBody,
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error("Supabase function error:", error);
        
        // Log error if audit logging enabled
        if (enableAuditLogging) {
          await logAuditEvent({
            action: AUDIT_ACTIONS.PAYMENT_FAILED,
            tableName: 'stripe_sessions',
            newValues: { 
              error: error.message, 
              priceId, 
              userId: session.user.id 
            }
          });
        }

        throw new Error(error.message || "Failed to create checkout session");
      }

      if (!data?.url) {
        throw new Error("No checkout URL received from server");
      }

      // Log successful session creation
      if (enableAuditLogging) {
        await logAuditEvent({
          action: AUDIT_ACTIONS.PAYMENT_INITIATED,
          tableName: 'stripe_sessions',
          newValues: { 
            priceId, 
            isSubscription,
            userId: session.user.id,
            ...(isSubscription ? {} : { serialNumber, itemType })
          }
        });
      }

      console.log("Secure checkout session created successfully");
      return data.url;
      
    } catch (error: any) {
      console.error("Error creating secure checkout session:", error);
      
      const errorMessage = error.message || "Failed to create checkout session";
      
      toast({
        title: "Payment error",
        description: errorMessage,
        variant: "destructive",
      });

      // Log error if audit logging enabled
      if (enableAuditLogging && session?.user) {
        await logAuditEvent({
          action: AUDIT_ACTIONS.PAYMENT_FAILED,
          tableName: 'stripe_sessions',
          newValues: { 
            error: errorMessage, 
            priceId, 
            userId: session.user.id 
          }
        });
      }

      return null;
    }
  };

  const secureProcessVerification = async (verificationId: string) => {
    console.log('=== Secure Verification Processing ===');
    
    if (!verificationId) {
      console.error("No verification ID provided");
      return null;
    }

    // Input validation
    if (enableInputValidation) {
      // Validate UUID format
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (!uuidRegex.test(verificationId)) {
        toast({
          title: "Invalid verification ID",
          description: "Invalid verification identifier.",
          variant: "destructive",
        });
        return null;
      }
    }

    // Rate limiting
    if (enableRateLimiting) {
      const canProceed = await checkRateLimit('verification');
      if (!canProceed) {
        toast({
          title: "Too many requests",
          description: "Please wait before processing another verification.",
          variant: "destructive",
        });
        return null;
      }
    }

    try {
      console.log("Processing secure verification for ID:", verificationId);
      
      const { data, error } = await supabase
        .from("verification_searches")
        .select("*, purchases(*)")
        .eq("id", verificationId)
        .single();

      if (error) {
        console.error("Database error:", error);
        throw new Error("Unable to retrieve verification data");
      }

      // Log verification access if audit logging enabled
      if (enableAuditLogging) {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          await logAuditEvent({
            action: AUDIT_ACTIONS.VERIFICATION_ACCESSED,
            tableName: 'verification_searches',
            recordId: verificationId,
            newValues: { userId: user.id }
          });
        }
      }

      console.log("Secure verification processed successfully");
      return data;
      
    } catch (error: any) {
      console.error("Error processing secure verification:", error);
      
      const errorMessage = error.message || "Failed to process verification";
      
      toast({
        title: "Verification error",
        description: errorMessage,
        variant: "destructive",
      });

      return null;
    }
  };

  return {
    secureCreateCheckoutSession,
    secureProcessVerification,
  };
};
