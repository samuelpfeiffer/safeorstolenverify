
import { useState, useEffect, useCallback, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Loader2, AlertTriangle } from "lucide-react";
import { useUnifiedAuth } from "@/hooks/useUnifiedAuth";
import { useEnhancedSubscription } from "@/hooks/useEnhancedSubscription";
import { getSubscriptionPriceId, SUBSCRIPTION_TIERS, formatPrice } from '@/features/pricing';
import { useNavigate } from "react-router-dom";
import { useSafeSearchParams } from '@/hooks/useSafeSearchParams';
import { useToast } from "@/hooks/use-toast";
import { useOneTimePayment } from "@/hooks/useOneTimePayment";
import { PageSEO } from '@/components/seo/PageSEO';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { ConversionOptimizedPricing } from '@/components/ConversionOptimizedPricing';
import { navigateOutOfIframe } from '@/utils/navigationUtils';
import { AppValidator } from '@/components/testing/AppValidator';

const PricingPage = () => {
  const { isAuthenticated } = useUnifiedAuth();
  const { 
    createSubscriptionCheckout, 
    isLoading: subscriptionLoading,
    error: subscriptionError 
  } = useEnhancedSubscription();
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  const [stripeCheckoutUrl, setStripeCheckoutUrl] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [searchParams] = useSafeSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { createOneTimePayment, isLoading: reportLoading } = useOneTimePayment();

  // Remove duplicate price IDs - using centralized pricing config

  const handleSubscribe = useCallback(async (tier: string) => {
    console.log('handleSubscribe called with tier:', tier);
    
    // Handle free tier - check by name directly
    if (tier === 'Free Trial' || tier.toLowerCase().includes('free')) {
      handleFreeStart();
      return;
    }

    if (!isAuthenticated) {
      localStorage.setItem('pendingSubscription', tier);
      toast({
        title: "Authentication required",
        description: "Please sign in to subscribe to a plan.",
      });
      navigate('/auth?tab=signin&redirect=subscription');
      return;
    }

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setLoadingTier(tier);
    setStripeCheckoutUrl(null);
    setHasError(false);

    // Set a timeout for the entire operation
    timeoutRef.current = setTimeout(() => {
      setLoadingTier(null);
      setHasError(true);
      toast({
        title: 'Request timeout',
        description: 'The checkout request is taking too long. The payment system may be temporarily unavailable. Please try again in a moment.',
        variant: 'destructive',
        duration: 10000,
      });
    }, 20000);

    try {
      // Find the matching subscription tier
      const tierEntry = Object.entries(SUBSCRIPTION_TIERS).find(
        ([, value]) => value.name === tier || value.name.toLowerCase() === tier.toLowerCase()
      );

      if (!tierEntry) {
        throw new Error(`Subscription tier "${tier}" not found`);
      }

      const [tierKey, tierData] = tierEntry;
      const priceId = tierData.stripePriceId;
      
      if (!priceId) {
        throw new Error(`No price ID configured for ${tier}. Please contact support.`);
      }

      console.log('Creating checkout for tier:', tierKey, 'priceId:', priceId);
      
      const checkoutUrl = await createSubscriptionCheckout(priceId);

      if (!checkoutUrl) {
        throw new Error('Payment system did not return a checkout URL. Please try again or contact support.');
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setStripeCheckoutUrl(checkoutUrl);
      
      // Use iframe-safe navigation
      navigateOutOfIframe(checkoutUrl);
      
      toast({ 
        title: 'Redirecting to payment...', 
        description: 'Please complete your payment on Stripe.',
        duration: 3000,
      });
      
    } catch (error: any) {
      console.error('Subscription error:', error);
      
      const errorMessage = error?.message || 'Failed to start subscription. Please try again.';
      
      // Show specific error messages for common issues
      let userFriendlyMessage = errorMessage;
      let title = 'Subscription Error';
      
      if (errorMessage.includes('Failed to fetch') || errorMessage.includes('network')) {
        title = 'Connection Error';
        userFriendlyMessage = 'Unable to connect to the payment system. Please check your internet connection and try again.';
      } else if (errorMessage.includes('Stripe') && errorMessage.includes('configuration')) {
        title = 'Payment System Error';
        userFriendlyMessage = 'The payment system is not properly configured. Please contact support@safeorstolen.com';
      } else if (errorMessage.includes('price ID') || errorMessage.includes('not found')) {
        title = 'Plan Configuration Error';
        userFriendlyMessage = 'This subscription plan is not properly configured. Please try a different plan or contact support.';
      } else if (errorMessage.includes('rate') || errorMessage.includes('limit')) {
        title = 'Too Many Requests';
        userFriendlyMessage = 'Please wait a moment before trying again.';
      } else if (errorMessage.includes('timeout')) {
        title = 'Request Timeout';
        userFriendlyMessage = 'The payment system is taking too long to respond. Please try again.';
      }
      
      toast({
        title,
        description: userFriendlyMessage,
        variant: 'destructive',
        duration: 10000,
      });
      
      setHasError(true);
    } finally {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setLoadingTier(null);
    }
  }, [isAuthenticated, navigate, toast, createSubscriptionCheckout]);

  const handleReport = useCallback(async () => {
    if (!isAuthenticated) {
      localStorage.setItem('pendingReport', '1');
      toast({ title: 'Authentication required', description: 'Please sign in to purchase a report.' });
      navigate('/auth?tab=signin&redirect=subscription');
      return;
    }
    const serial = window.prompt('Enter the Serial / IMEI / VIN to include in your certified report:');
    if (!serial) return;
    try {
      const url = await createOneTimePayment(serial, 'general');
      if (url) {
        window.open(url, '_blank');
      }
    } catch (e) {
      // Silent error handling for one-time payment
    }
  }, [isAuthenticated, navigate, createOneTimePayment, toast]);

  // Check for automatic subscription trigger after authentication
  useEffect(() => {
    const subscribeParam = searchParams.get('subscribe');
    if (subscribeParam && isAuthenticated) {
      // Remove the URL parameter and trigger subscription
      navigate('/pricing', { replace: true });
      // Add small delay to prevent race conditions
      const timeoutId = setTimeout(() => {
        handleSubscribe(subscribeParam);
      }, 500);
      
      return () => clearTimeout(timeoutId);
    }
  }, [searchParams.get('subscribe'), isAuthenticated, navigate]); // Removed handleSubscribe to prevent infinite loops

  // Auto-run pending actions after authentication
  useEffect(() => {
    if (!isAuthenticated) return;

    // Pending subscription tier from localStorage
    const pending = localStorage.getItem('pendingSubscription');
    if (pending) {
      localStorage.removeItem('pendingSubscription');
      setTimeout(() => handleSubscribe(pending), 300);
      return; // don't process report in same tick
    }

    // Pending one-time report purchase
    const pendingReport = localStorage.getItem('pendingReport');
    if (pendingReport === '1') {
      localStorage.removeItem('pendingReport');
      setTimeout(() => {
        const serial = window.prompt('Enter the Serial / IMEI / VIN to include in your certified report:');
        if (serial) {
          createOneTimePayment(serial, 'general').then((url) => url && window.open(url, '_blank'));
        }
      }, 300);
    }
  }, [isAuthenticated]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleFreeStart = () => {
    if (!isAuthenticated) {
      navigate('/auth?tab=signup');
    } else {
      navigate('/verify');
    }
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Safe or Stolen Verification Service",
      "description": "IMEI, serial number, and VIN verification service with multiple pricing tiers",
      "provider": {
        "@type": "Organization",
        "name": "Safe or Stolen",
        "url": "https://safeorstolen.com"
      },
      "serviceType": "Security Verification Service",
      "areaServed": "Worldwide"
    },
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "name": "Safe or Stolen Pricing Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Free Plan",
          "description": "Basic verification with 4 free searches",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "priceValidUntil": "2025-12-31",
          "seller": {
            "@type": "Organization",
            "name": "Safe or Stolen"
          }
        },
        {
          "@type": "Offer",
          "name": "Personal Plan",
          "description": "Unlimited verifications for personal use",
          "price": formatPrice(SUBSCRIPTION_TIERS.personal.price).replace('$', ''),
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "priceValidUntil": "2025-12-31",
          "seller": {
            "@type": "Organization",
            "name": "Safe or Stolen"
          }
        },
        {
          "@type": "Offer",
          "name": "Professional Plan",
          "description": "Unlimited verifications for professionals and businesses",
          "price": formatPrice(SUBSCRIPTION_TIERS.professional.price).replace('$', ''),
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "priceValidUntil": "2025-12-31",
          "seller": {
            "@type": "Organization",
            "name": "Safe or Stolen"
          }
        }
      ]
    }
  ];

  const ErrorState = () => (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6 text-center space-y-4">
        <AlertTriangle className="h-8 w-8 mx-auto text-destructive" />
        <div>
          <h3 className="font-semibold mb-2">Service Error</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {subscriptionError || 'Unable to load pricing information'}
          </p>
          <Button onClick={() => window.location.reload()} variant="outline">
            Refresh Page
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <ErrorBoundary>
      <PageSEO
        title="Pricing: Never Buy Stolen Goods Again | Free Trial + Paid Plans"
        description="Protect yourself from scams and stolen goods. FREE plan: 4 checks/day. Paid plans from $7.99/mo with unlimited IMEI, VIN, serial number verification. Money-back guarantee. Join 50K+ protected buyers."
        keywords="how much does stolen goods verification cost, free IMEI check pricing, marketplace protection subscription, avoid scams membership, buyer protection cost, check if stolen price, Facebook Marketplace safety plan"
        canonical="/pricing"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <ConversionOptimizedPricing 
          onSubscribe={handleSubscribe}
        />
        
        {/* Temporary validation section */}
        {searchParams.get('test') === 'true' && (
          <div className="container mx-auto mt-8">
            <AppValidator />
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default PricingPage;
