import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { toast } from 'sonner';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';

const CheckoutRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, session, loading: authLoading } = useUnifiedAuth();
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          window.location.href = data.url;
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

  if (authLoading || isProcessing) {
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
