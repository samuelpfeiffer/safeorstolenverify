import { useState, useEffect, useCallback, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Loader2, AlertTriangle } from "lucide-react";
import { useUnifiedAuth } from "@/hooks/useUnifiedAuth";
import { useEnhancedSubscription } from "@/hooks/useEnhancedSubscription";
import { getSubscriptionPriceId, getSubscriptionTier, SUBSCRIPTION_TIERS, formatPrice } from '@/features/pricing';
import { useNavigate } from "react-router-dom";
import { useSafeSearchParams } from '@/hooks/useSafeSearchParams';
import { useToast } from "@/hooks/use-toast";
import { useOneTimePayment } from "@/hooks/useOneTimePayment";
import { PageSEO } from '@/components/seo/PageSEO';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { ConversionOptimizedPricing } from '@/components/ConversionOptimizedPricing';
import { isInIframe } from '@/utils/navigationUtils';
import { AppValidator } from '@/components/testing/AppValidator';

const PricingPage = () => {
  const { isAuthenticated } = useUnifiedAuth();
  const { 
    isLoading: subscriptionLoading,
    error: subscriptionError 
  } = useEnhancedSubscription();
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [searchParams] = useSafeSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
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

    setLoadingTier(tier);

    try {
      const tierData = getSubscriptionTier(tier);
      const priceId = getSubscriptionPriceId(tier);
      
      console.log('[SUBSCRIPTION-DEBUG] Starting subscription flow');
      console.log('[SUBSCRIPTION-DEBUG] Tier requested:', tier);
      console.log('[SUBSCRIPTION-DEBUG] Tier data found:', tierData);
      console.log('[SUBSCRIPTION-DEBUG] Price ID:', priceId);
      
      if (!priceId) {
        console.error('[SUBSCRIPTION-DEBUG] ERROR: No price ID found for tier:', tier);
        console.error('[SUBSCRIPTION-DEBUG] Available tiers:', Object.keys(SUBSCRIPTION_TIERS));
        toast({
          title: "Configuration Error",
          description: `This subscription plan (${tier}) is not configured. Available plans: ${Object.keys(SUBSCRIPTION_TIERS).join(', ')}`,
          variant: "destructive",
        });
        setLoadingTier(null);
        return;
      }

      // Determine if this is a subscription or one-time payment based on interval
      const isSubscription = tierData.interval === 'month';

      console.log('[SUBSCRIPTION-DEBUG] Creating checkout in new window to bypass iframe');
      
      // CRITICAL FIX: Open in new tab to completely bypass iframe restrictions
      const checkoutUrl = `${window.location.origin}/checkout-redirect?${new URLSearchParams({
        priceId,
        planName: tierData.name || tier,
        isSubscription: String(isSubscription),
      }).toString()}`;
      
      console.log('[SUBSCRIPTION-DEBUG] Opening checkout URL:', checkoutUrl);
      
      // Open in new tab - this completely bypasses iframe security
      const newWindow = window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
      
      if (!newWindow) {
        toast({
          title: "Pop-up Blocked",
          description: "Please allow pop-ups for this site to complete checkout.",
          variant: "destructive",
        });
      }
      
    } catch (error: any) {
      console.error('Subscription error:', error);
      
      toast({
        title: "Configuration Error",
        description: error?.message || 'Failed to start subscription. Please try again.',
        variant: 'destructive',
      });
      
      setLoadingTier(null);
    }
  }, [isAuthenticated, navigate, toast]);

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
      "@type": "Service",
      "name": "Safe or Stolen Verification Services",
      "description": "Professional stolen item verification service with flexible pricing plans for consumers and businesses",
      "provider": {
        "@type": "Organization",
        "name": "Safe or Stolen",
        "url": "https://safeorstolen.com"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Verification Service Plans",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Free Verification Plan",
              "description": "Basic verification service with 4 free searches per day for consumer protection"
            },
            "price": "0",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Personal Verification Plan",
              "description": "Unlimited verification service for personal use with priority support"
            },
            "price": formatPrice(SUBSCRIPTION_TIERS.personal.price).replace('$', ''),
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional Verification Plan",
              "description": "Unlimited verification service for professionals and businesses with API access"
            },
            "price": formatPrice(SUBSCRIPTION_TIERS.professional.price).replace('$', ''),
            "priceCurrency": "USD"
          }
        ]
      },
      "areaServed": "Worldwide",
      "serviceType": "Stolen Item Verification Service"
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
          <Button onClick={async () => {
            setHasError(false);
            // Force reload subscription data
            window.location.href = '/pricing';
          }} variant="outline">
            Refresh Page
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const limitReached = searchParams.get('reason') === 'limit-reached';

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
        {limitReached && (
          <div className="bg-primary/10 border-b-2 border-primary/20 py-4">
            <div className="container mx-auto px-4 text-center">
              <p className="text-lg font-semibold text-foreground">
                🔒 You've used your 2 free searches
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Choose a plan below to continue verifying items and stay protected
              </p>
            </div>
          </div>
        )}
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
