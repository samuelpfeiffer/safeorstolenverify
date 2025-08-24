
import { useState, useEffect, useCallback, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Loader2, AlertTriangle } from "lucide-react";
import { useUnifiedAuth } from "@/hooks/useUnifiedAuth";
import { useEnhancedSubscription } from "@/hooks/useEnhancedSubscription";
import { getSubscriptionPriceId, SUBSCRIPTION_TIERS, formatPrice } from "@/utils/pricing";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useOneTimePayment } from "@/hooks/useOneTimePayment";
import { UnifiedSEO } from '@/components/seo/UnifiedSEO';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';

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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { createOneTimePayment, isLoading: reportLoading } = useOneTimePayment();

  // Add Stripe price IDs for your actual products
  const STRIPE_PRICE_IDS = {
    basic: "price_1Rz7rm2eGaMDLFHojH9Vch1Y",
    premium: "price_1Rz7xu2eGaMDLFHoqGT0Pyjk", 
    enterprise: "price_1Rz80X2eGaMDLFHozeZyChte"
  };

  const handleSubscribe = useCallback(async (tier: 'basic' | 'premium' | 'enterprise') => {
    console.log('[Pricing] handleSubscribe clicked', { tier, isAuthenticated });
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
        description: 'The request is taking too long. Please try again.',
        variant: 'destructive'
      });
    }, 15000); // 15 second timeout

    try {
      const priceId = getSubscriptionPriceId(tier);
      console.log(`Starting checkout for ${tier} tier with price ID: ${priceId}`);
      
      const checkoutUrl = await createSubscriptionCheckout(priceId);

      if (!checkoutUrl) {
        throw new Error('No checkout URL returned');
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setStripeCheckoutUrl(checkoutUrl);
      window.open(checkoutUrl, '_blank');
      toast({ 
        title: 'Checkout ready', 
        description: 'Click the button below to complete your purchase on Stripe.' 
      });
      
    } catch (error: any) {
      console.error('Subscription error:', error);
      // Do not lock the UI; just show a toast so users can retry
      toast({
        title: 'Error',
        description: error?.message || 'Failed to start subscription. Please try again.',
        variant: 'destructive',
      });
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
      console.error(e);
    }
  }, [isAuthenticated, navigate, createOneTimePayment, toast]);

  // Check for automatic subscription trigger after authentication
  useEffect(() => {
    const subscribeParam = searchParams.get('subscribe');
    if (subscribeParam && isAuthenticated && (subscribeParam === 'basic' || subscribeParam === 'premium')) {
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
    if (pending === 'basic' || pending === 'premium' || pending === 'enterprise') {
      localStorage.removeItem('pendingSubscription');
      setTimeout(() => handleSubscribe(pending as 'basic' | 'premium' | 'enterprise'), 300);
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
      navigate('/');
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
          "description": "Basic verification with 5 free searches",
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
          "name": "Basic Plan",
          "description": "Enhanced verification with unlimited searches",
          "price": formatPrice(SUBSCRIPTION_TIERS.basic.price).replace('$', ''),
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
          "name": "Premium Plan",
          "description": "Professional verification with AI assistance",
          "price": formatPrice(SUBSCRIPTION_TIERS.premium.price).replace('$', ''),
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
          "name": "Enterprise Plan",
          "description": "Enterprise-grade verification with dedicated support",
          "price": formatPrice(SUBSCRIPTION_TIERS.enterprise.price).replace('$', ''),
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
          "name": "Certified Report",
          "description": "One-time certified stolen/legitimate report",
          "price": formatPrice(SUBSCRIPTION_TIERS.report.price).replace('$', ''),
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
      <UnifiedSEO
        title="Pricing Plans - Safe or Stolen"
        description="Choose the perfect plan for your stolen goods verification needs. Free searches, premium features, and enterprise solutions available."
        canonical="/pricing"
        keywords="pricing, stolen goods verification, subscription plans, security services"
        structuredData={structuredData}
      />
      {subscriptionError ? (
        <ErrorState />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
              <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Free Plan */}
              <Card className="relative transition-all hover-scale hover:shadow-xl hover:shadow-sos-orange/20 hover:border-sos-orange">
                <CardHeader>
                  <CardTitle className="text-2xl">Free</CardTitle>
                  <div className="text-3xl font-bold">$0<span className="text-sm font-normal">/month</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {SUBSCRIPTION_TIERS.free.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleFreeStart}
                    className="w-full" 
                    variant="outline"
                  >
                    {isAuthenticated ? 'Current Plan' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>

              {/* Basic Plan */}
              <Card className="relative border-sos-orange transition-all hover-scale hover:shadow-xl hover:shadow-sos-orange/20">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-sos-orange text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Basic</CardTitle>
                  <div className="text-3xl font-bold">{formatPrice(SUBSCRIPTION_TIERS.basic.price)}<span className="text-sm font-normal">/month</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {SUBSCRIPTION_TIERS.basic.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleSubscribe('basic')}
                    className="w-full bg-sos-orange hover:bg-sos-orange/90"
                    disabled={loadingTier === 'basic'}
                  >
                    {loadingTier === 'basic' ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Preparing checkout...
                      </span>
                    ) : 'Choose Basic'}
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="transition-all hover-scale hover:shadow-xl hover:shadow-sos-orange/20 hover:border-sos-orange">
                <CardHeader>
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <div className="text-3xl font-bold">{formatPrice(SUBSCRIPTION_TIERS.premium.price)}<span className="text-sm font-normal">/month</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {SUBSCRIPTION_TIERS.premium.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleSubscribe('premium')}
                    className="w-full" 
                    variant="outline"
                    disabled={loadingTier === 'premium'}
                  >
                    {loadingTier === 'premium' ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Preparing checkout...
                      </span>
                    ) : 'Choose Premium'}
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="transition-all hover-scale hover:shadow-xl hover:shadow-sos-orange/20 hover:border-sos-orange">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <div className="text-3xl font-bold">{formatPrice(SUBSCRIPTION_TIERS.enterprise.price)}<span className="text-sm font-normal">/month</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {SUBSCRIPTION_TIERS.enterprise.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleSubscribe('enterprise')}
                    className="w-full" 
                    variant="outline"
                    disabled={loadingTier === 'enterprise'}
                  >
                    {loadingTier === 'enterprise' ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Preparing checkout...
                      </span>
                    ) : 'Choose Enterprise'}
                  </Button>
                </CardContent>
              </Card>

              {/* Certified Report (One-time) */}
              <Card className="transition-all hover-scale hover:shadow-xl hover:shadow-sos-orange/20 hover:border-sos-orange">
                <CardHeader>
                  <CardTitle className="text-2xl">Certified Report</CardTitle>
                  <div className="text-3xl font-bold">{formatPrice(SUBSCRIPTION_TIERS.report.price)}<span className="text-sm font-normal">/report</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {SUBSCRIPTION_TIERS.report.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleReport}
                    className="w-full" 
                    variant="outline"
                    disabled={reportLoading}
                  >
                    {reportLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Preparing checkout...
                      </span>
                    ) : 'Buy Report'}
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {stripeCheckoutUrl && (
              <>
                {/* Inline helper button in content area */}
                <div className="mt-8 text-center">
                  <p className="mb-3 font-medium">Your checkout is ready.</p>
                  <Button
                    size="lg"
                    className="w-full md:w-auto bg-sos-orange hover:bg-sos-orange/90"
                    onClick={() => { if (stripeCheckoutUrl) { console.info('Navigating to Stripe:', stripeCheckoutUrl); window.open(stripeCheckoutUrl, '_blank'); } }}
                  >
                    ✅ Click Here to Complete Your Purchase on Stripe
                  </Button>
                </div>

                {/* Fixed bottom bar to guarantee visibility */}
                <div className="fixed inset-x-0 bottom-0 z-50 bg-white/90 backdrop-blur border-t">
                  <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="font-medium">Checkout is ready. Continue on Stripe.</p>
                    <Button
                      size="lg"
                      className="bg-sos-orange hover:bg-sos-orange/90"
                      onClick={() => { if (stripeCheckoutUrl) { console.info('Navigating to Stripe:', stripeCheckoutUrl); window.open(stripeCheckoutUrl, '_blank'); } }}
                    >
                      ✅ Click Here to Complete Your Purchase on Stripe
                    </Button>
                  </div>
                </div>
              </>
            )}
            
            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                All plans include secure verification, search history, and customer support.
              </p>
              <p className="text-sm text-gray-500">
                {!isAuthenticated && "Sign up required for paid plans. "}
                Cancel anytime. No hidden fees.
              </p>
            </div>
          </div>
        </div>
      )}
    </ErrorBoundary>
  );
};

export default PricingPage;
