import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { toast } from 'sonner';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import { ExternalLink, CreditCard } from 'lucide-react';

// Safe iframe detection
const checkIsInIframe = (): boolean => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true; // If we can't access window.top, we're likely in a cross-origin iframe
  }
};

const CheckoutRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, session, loading: authLoading } = useUnifiedAuth();
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stripeUrl, setStripeUrl] = useState<string | null>(null);
  const [showManualButton, setShowManualButton] = useState(false);
  const [isInIframe] = useState(() => checkIsInIframe());

  const planName = searchParams.get('planName');
  const isSubscription = searchParams.get('isSubscription') === 'true';
  const priceId = searchParams.get('priceId');

  useEffect(() => {
    const createCheckoutSession = async () => {
      if (authLoading) return;

      if (!user || !session) {
        const returnUrl = `/checkout-redirect?${searchParams.toString()}`;
        navigate(`/auth?redirect=${encodeURIComponent(returnUrl)}`);
        return;
      }

      if (!priceId) {
        setError('Missing price information');
        toast.error('Missing price information');
        navigate('/pricing');
        return;
      }

      try {
        console.log('[CHECKOUT-REDIRECT] Creating checkout session', {
          planName,
          isSubscription,
          priceId,
          userId: user.id,
          isInIframe
        });

        const { data, error: fnError } = await supabase.functions.invoke('create-checkout', {
          body: {
            priceId,
            planName: planName || 'Subscription',
            isSubscription,
            redirectUrl: 'https://safeorstolen.com'
          }
        });

        if (fnError) {
          console.error('[CHECKOUT-REDIRECT] Function error:', fnError);
          throw fnError;
        }

        if (data?.url) {
          console.log('[CHECKOUT-REDIRECT] Got Stripe URL:', data.url);
          setStripeUrl(data.url);
          setIsProcessing(false);
          setShowManualButton(true);
          
          // Only try auto-redirect if NOT in iframe
          if (!isInIframe) {
            try {
              window.location.href = data.url;
            } catch (e) {
              console.log('[CHECKOUT-REDIRECT] Auto redirect failed');
            }
          }
        } else if (data?.error) {
          throw new Error(data.error);
        } else {
          throw new Error('No checkout URL returned');
        }
      } catch (err: any) {
        console.error('[CHECKOUT-REDIRECT] Error:', err);
        setError(err.message || 'Failed to create checkout session');
        toast.error('Failed to start checkout. Please try again.');
        setIsProcessing(false);
      }
    };

    createCheckoutSession();
  }, [user, session, authLoading, priceId, planName, isSubscription, navigate, searchParams, isInIframe]);

  // Loading auth state
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <AppLoadingScreen />
          <p className="text-muted-foreground">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Show manual redirect button when we have URL
  if (stripeUrl && showManualButton) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6 max-w-md mx-auto p-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <CreditCard className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Complete Your Purchase</h1>
          <p className="text-muted-foreground">
            Click below to open secure Stripe checkout.
          </p>
          <a 
            href={stripeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold shadow-lg"
          >
            Continue to Stripe Checkout
            <ExternalLink className="h-5 w-5" />
          </a>
          <p className="text-sm text-muted-foreground">
            Secure payment powered by Stripe
          </p>
        </div>
      </div>
    );
  }

  // Processing state
  if (isProcessing && !error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-foreground font-medium">Preparing secure checkout...</p>
          <p className="text-sm text-muted-foreground">Connecting to Stripe</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4 max-w-md mx-auto p-6">
          <h1 className="text-2xl font-bold text-destructive">Checkout Error</h1>
          <p className="text-muted-foreground">{error}</p>
          <button
            onClick={() => navigate('/pricing')}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Return to Pricing
          </button>
        </div>
      </div>
    );
  }

  // Fallback loading
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-foreground">Loading...</p>
      </div>
    </div>
  );
};

export default CheckoutRedirectPage;
