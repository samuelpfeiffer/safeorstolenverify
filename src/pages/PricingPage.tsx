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

import { EmailCapture } from '@/components/marketing/EmailCapture';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';
import { DataPartnerBadges } from '@/components/trust/DataPartnerBadges';
import { CrimeReductionSection } from '@/components/home/CrimeReductionSection';
import { PricingFAQSection } from '@/components/pricing/PricingFAQSection';
import { supabase } from '@/integrations/supabase/client';

const PricingPage = () => {
  const { isAuthenticated, session } = useUnifiedAuth();
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

      console.log('[SUBSCRIPTION-DEBUG] Creating checkout session (direct)...');

      if (!session) {
        toast({
          title: 'Authentication required',
          description: 'Please sign in again to subscribe.',
        });
        navigate('/auth?tab=signin&redirect=/pricing');
        setLoadingTier(null);
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId,
          planName: tierData.name || tier,
          isSubscription,
          redirectUrl: 'https://safeorstolen.com',
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;
      if (!data?.url) throw new Error('No checkout URL returned');

      window.location.assign(data.url);

    } catch (error: any) {
      console.error('Subscription error:', error);
      
      toast({
        title: "Configuration Error",
        description: error?.message || 'Failed to start subscription. Please try again.',
        variant: 'destructive',
      });
      
      setLoadingTier(null);
    }
  }, [isAuthenticated, session, navigate, toast]);

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
        title="Protect Buyers & Sellers | Free Stolen Verification App - SafeOrStolen Pricing"
        description="Protect BOTH buyers AND sellers with SafeOrStolen. 2 free checks, then $2.99/mo. Every search makes stolen items harder to sell. Mobile app only at SafeOrStolen.com."
        keywords="protect buyers sellers, free stolen verification app, stop stolen goods, CheckMEND alternative, IMEI checker app, reduce crime, verify stolen items"
        canonical="/pricing"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SafeOrStolen Free Trial",
            "description": "2 free verification checks, 14-day trial period for stolen item verification",
            "serviceType": "Stolen Item Verification Service",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "areaServed": [
              { "@type": "Country", "name": "United States" },
              { "@type": "Country", "name": "Canada" }
            ],
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
            "description": "10 verification checks per month for stolen item verification",
            "serviceType": "Stolen Item Verification Service",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "areaServed": [
              { "@type": "Country", "name": "United States" },
              { "@type": "Country", "name": "Canada" }
            ],
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
            "description": "Unlimited verification checks for stolen item verification",
            "serviceType": "Stolen Item Verification Service",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "areaServed": [
              { "@type": "Country", "name": "United States" },
              { "@type": "Country", "name": "Canada" }
            ],
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
            "description": "Unlimited checks, bulk verification, priority support for stolen item verification",
            "serviceType": "Stolen Item Verification Service",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "areaServed": [
              { "@type": "Country", "name": "United States" },
              { "@type": "Country", "name": "Canada" }
            ],
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
            "description": "Everything in Pro plus team features, API access, white-label option for stolen item verification",
            "serviceType": "Stolen Item Verification Service",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "areaServed": [
              { "@type": "Country", "name": "United States" },
              { "@type": "Country", "name": "Canada" }
            ],
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
            "description": "Custom integration, dedicated support, unlimited API calls, SLA guarantee for stolen item verification",
            "serviceType": "Stolen Item Verification Service",
            "provider": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "areaServed": [
              { "@type": "Country", "name": "United States" },
              { "@type": "Country", "name": "Canada" }
            ],
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
        {/* Minimal noscript fallback */}
        <noscript>
          <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <p><strong>SafeOrStolen Pricing</strong></p>
            <p>Affordable stolen item verification plans. Free trial with 2 checks. Unlimited plans from $4.99/month.</p>
          </div>
        </noscript>
        
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'Pricing', href: '/pricing' }]} />
        </div>
        
        <div className="min-h-screen">
          <ConversionOptimizedPricing 
            onSubscribe={handleSubscribe}
          />
          
          {/* Data Partners for Trust */}
          <div className="container mx-auto px-4 py-8">
            <DataPartnerBadges variant="full" />
          </div>
          
          {/* Crime Reduction Impact - Replaces Competitor Comparison */}
          <CrimeReductionSection />
          
          {/* Credibility Bar */}
          <SitewideCredibilityBar />
          
          {/* Extended FAQ Section */}
          <div className="container mx-auto px-4">
            <PricingFAQSection />
          </div>
          
          {/* Email Capture for non-ready users */}
          <div className="container mx-auto px-4 py-12">
            <EmailCapture />
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default PricingPage;
