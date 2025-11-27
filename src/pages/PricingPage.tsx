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
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { ConversionOptimizedPricing } from '@/components/ConversionOptimizedPricing';
import { isInIframe } from '@/utils/navigationUtils';
import { AppValidator } from '@/components/testing/AppValidator';
import { UrgencyBanner } from '@/components/pricing/UrgencyBanner';

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

  const handleSubscribe = useCallback(async (tier: string) => {
    console.log('handleSubscribe called with tier:', tier);
    
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
      navigate('/auth?tab=signin&redirect=/pricing');
      return;
    }

    setLoadingTier(tier);

    try {
      const tierData = getSubscriptionTier(tier);
      const priceId = getSubscriptionPriceId(tier);
      
      console.log('[SUBSCRIPTION-DEBUG] Starting subscription flow');
      console.log('[SUBSCRIPTION-DEBUG] Tier requested:', tier);
      console.log('[SUBSCRIPTION-DEBUG] Tier data found:', tierData);
      console.log('[SUBSCRIPTION-DEBUG] Price ID:', priceId || 'undefined (will use product name matching)');
      
      if (!tierData) {
        console.error('[SUBSCRIPTION-DEBUG] ERROR: No tier data found for:', tier);
        console.error('[SUBSCRIPTION-DEBUG] Available tiers:', Object.keys(SUBSCRIPTION_TIERS));
        toast({
          title: "Configuration Error",
          description: `This subscription plan (${tier}) is not found. Available plans: ${Object.keys(SUBSCRIPTION_TIERS).join(', ')}`,
          variant: "destructive",
        });
        setLoadingTier(null);
        return;
      }

      const isSubscription = tierData.interval === 'month';

      console.log('[SUBSCRIPTION-DEBUG] Preparing checkout redirect');
      
      const params = new URLSearchParams({
        planName: tierData.name || tier,
        isSubscription: String(isSubscription),
      });
      
      if (priceId) {
        params.append('priceId', priceId);
      }
      
      console.log('[SUBSCRIPTION-DEBUG] Navigating to checkout:', params.toString());
      
      navigate(`/checkout-redirect?${params.toString()}`);
      
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
      navigate('/auth?tab=signin&redirect=/pricing');
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

  useEffect(() => {
    const subscribeParam = searchParams.get('subscribe');
    if (subscribeParam && isAuthenticated) {
      navigate('/pricing', { replace: true });
      const timeoutId = setTimeout(() => {
        handleSubscribe(subscribeParam);
      }, 500);
      
      return () => clearTimeout(timeoutId);
    }
  }, [searchParams.get('subscribe'), isAuthenticated, navigate]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const pending = localStorage.getItem('pendingSubscription');
    if (pending) {
      localStorage.removeItem('pendingSubscription');
      setTimeout(() => handleSubscribe(pending), 300);
      return;
    }

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

  // Schemas moved to PageSEO structuredData prop below (lines 315-411)

  return (
    <>
      <PageSEO
        title="Pricing Plans - SafeOrStolen Verification Service"
        description="Choose your SafeOrStolen plan. 2 free verification checks included. Personal, Business, and Enterprise plans available."
        keywords="SafeOrStolen pricing, verification pricing, IMEI checker cost, VIN lookup pricing"
        canonical="/pricing"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SafeOrStolen Free Trial",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "2 free verification checks, 14-day trial"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SafeOrStolen Starter Plan",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "offers": {
              "@type": "Offer",
              "price": "2.99",
              "priceCurrency": "USD",
              "billingIncrement": "P1M",
              "description": "10 verification checks per month"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SafeOrStolen Personal Plan",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "offers": {
              "@type": "Offer",
              "price": "4.99",
              "priceCurrency": "USD",
              "billingIncrement": "P1M",
              "description": "Unlimited verification checks"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SafeOrStolen Pro Plan",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "offers": {
              "@type": "Offer",
              "price": "9",
              "priceCurrency": "USD",
              "billingIncrement": "P1M",
              "description": "Unlimited checks, bulk verification, priority support"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SafeOrStolen Business Plan",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "offers": {
              "@type": "Offer",
              "price": "29.99",
              "priceCurrency": "USD",
              "billingIncrement": "P1M",
              "description": "Everything in Pro plus team features, API access, white-label option"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SafeOrStolen Enterprise Plan",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "offers": {
              "@type": "Offer",
              "price": "99",
              "priceCurrency": "USD",
              "billingIncrement": "P1M",
              "description": "Custom integration, dedicated support, unlimited API calls, SLA guarantee"
            }
          }
        ]}
      />

      <ErrorBoundary>
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'Pricing', href: '/pricing' }]} />
        </div>
        <UrgencyBanner />
        <div className="min-h-screen">
          <ConversionOptimizedPricing 
            onSubscribe={handleSubscribe}
          />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default PricingPage;
