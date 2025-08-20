
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useUnifiedAuth } from "@/hooks/useUnifiedAuth";
import { useSecureStripe } from "@/utils/stripe/secureStripeOperations";
import { getSubscriptionPriceId, SUBSCRIPTION_TIERS, formatPrice } from "@/utils/pricing";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from '@/components/seo/SEOHead';

const PricingPage = () => {
  const { isAuthenticated } = useUnifiedAuth();
  const { secureCreateCheckoutSession } = useSecureStripe();
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check for automatic subscription trigger after authentication
  useEffect(() => {
    const subscribeParam = searchParams.get('subscribe');
    if (subscribeParam && isAuthenticated && (subscribeParam === 'basic' || subscribeParam === 'premium')) {
      // Remove the URL parameter and trigger subscription
      navigate('/pricing', { replace: true });
      handleSubscribe(subscribeParam);
    }
  }, [searchParams, isAuthenticated]);

  const handleSubscribe = async (tier: 'basic' | 'premium') => {
    if (!isAuthenticated) {
      // Store the intended subscription plan for after authentication
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
      const priceId = getSubscriptionPriceId(tier);
      const checkoutUrl = await secureCreateCheckoutSession({
        priceId,
        serialNumber: '',
        itemType: 'subscription',
        isSubscription: true,
      });

      if (checkoutUrl) {
        toast({ title: 'Redirecting to Stripe…' });
        if (window.top && window.top !== window.self) {
          window.open(checkoutUrl, '_blank');
        } else {
          window.location.assign(checkoutUrl);
        }
      } else {
        toast({ title: 'Unable to start checkout', description: 'Please try again.', variant: 'destructive' });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({ title: 'Payment error', description: 'Please try again in a moment.', variant: 'destructive' });
    } finally {
      setLoadingTier(null);
    }
  };

  const handleFreeStart = () => {
    if (!isAuthenticated) {
      navigate('/auth?tab=signup');
    } else {
      navigate('/');
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Safe or Stolen Verification Service",
    "description": "IMEI, serial number, and VIN verification service with multiple pricing tiers",
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Plan",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Basic Plan",
        "price": formatPrice(SUBSCRIPTION_TIERS.basic.price).replace('$', ''),
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Premium Plan", 
        "price": formatPrice(SUBSCRIPTION_TIERS.premium.price).replace('$', ''),
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Pricing - Safe or Stolen Verification Service"
        description="Choose from free and paid verification plans. Get unlimited IMEI, serial number, and VIN checks starting from free tier."
        canonical="/pricing"
        structuredData={structuredData}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <Card className="relative">
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
          <Card className="relative border-sos-orange">
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
                {loadingTier === 'basic' ? 'Processing...' : 'Choose Basic'}
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card>
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
                {loadingTier === 'premium' ? 'Processing...' : 'Choose Premium'}
              </Button>
            </CardContent>
          </Card>
        </div>
        
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
    </>
  );
};

export default PricingPage;
