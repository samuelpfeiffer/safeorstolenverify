import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { toast } from 'sonner';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const CheckoutRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, session, loading: authLoading } = useUnifiedAuth();
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stripeUrl, setStripeUrl] = useState<string | null>(null);

  const planName = searchParams.get('planName');
  const isSubscription = searchParams.get('isSubscription') === 'true';
  const priceId = searchParams.get('priceId');

  useEffect(() => {
    const createCheckoutSession = async () => {
      // Wait for auth to load
      if (authLoading) return;

      // Redirect to auth if not logged in
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
          userId: user.id
        });

        // BULLETPROOF: Use hardcoded production URLs
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
          console.log('[CHECKOUT-REDIRECT] Redirecting to Stripe:', data.url);
          setStripeUrl(data.url);
          
          // Try multiple redirect methods
          try {
            // Method 1: Try window.top for iframe escape
            if (window.top && window.top !== window) {
              window.top.location.href = data.url;
              return;
            }
          } catch (e) {
            console.log('[CHECKOUT-REDIRECT] window.top blocked, trying alternatives');
          }
          
          try {
            // Method 2: Direct location change
            window.location.href = data.url;
          } catch (e) {
            console.log('[CHECKOUT-REDIRECT] Direct redirect blocked');
          }
          
          // Method 3: Show manual button after 2 seconds if still on page
          setTimeout(() => {
            setIsProcessing(false);
          }, 2000);
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
  }, [user, session, authLoading, priceId, planName, isSubscription, navigate, searchParams]);

  if (authLoading || (isProcessing && !stripeUrl)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <AppLoadingScreen />
          <p className="text-muted-foreground">
            {authLoading ? 'Checking authentication...' : 'Preparing secure checkout...'}
          </p>
        </div>
      </div>
    );
  }

  // Show manual redirect button if automatic redirect didn't work
  if (stripeUrl && !isProcessing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6 max-w-md mx-auto p-6">
          <h1 className="text-2xl font-bold">Complete Your Purchase</h1>
          <p className="text-muted-foreground">
            Click the button below to continue to secure checkout.
          </p>
          <a 
            href={stripeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
          >
            Continue to Stripe Checkout
            <ExternalLink className="h-5 w-5" />
          </a>
          <p className="text-sm text-muted-foreground">
            You'll be redirected to Stripe's secure payment page.
          </p>
        </div>
      </div>
    );
  }

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

  return null;
};

export default CheckoutRedirectPage;
