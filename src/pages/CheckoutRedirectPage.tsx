import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { toast } from 'sonner';
import { ExternalLink, CreditCard, Loader2, AlertCircle, Shield, Lock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CheckoutRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, session, loading: authLoading } = useUnifiedAuth();
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [stripeUrl, setStripeUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [redirectAttempted, setRedirectAttempted] = useState(false);

  const planName = searchParams.get('planName');
  const isSubscription = searchParams.get('isSubscription') === 'true';
  const priceId = searchParams.get('priceId');

  useEffect(() => {
    const createCheckout = async () => {
      // Wait for auth
      if (authLoading) return;

      // Not logged in - redirect to auth
      if (!user || !session) {
        const returnUrl = `/checkout-redirect?${searchParams.toString()}`;
        navigate(`/auth?redirect=${encodeURIComponent(returnUrl)}`);
        return;
      }

      // Need at least priceId OR planName
      if (!priceId && !planName) {
        setErrorMsg('Missing price information');
        setStatus('error');
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke('create-checkout', {
          body: {
            priceId,
            planName: planName || 'Subscription',
            isSubscription,
            redirectUrl: 'https://safeorstolen.com'
          }
        });

        if (error) throw error;
        if (!data?.url) throw new Error('No checkout URL returned');

        setStripeUrl(data.url);
        setStatus('ready');

        // Aggressive auto-redirect for better conversion
        if (!redirectAttempted) {
          setRedirectAttempted(true);
          setTimeout(() => {
            try {
              // Try same-window redirect first (best UX)
              window.location.href = data.url;
            } catch (e) {
              // Fallback - button will be shown
              console.log('Auto-redirect blocked, showing button');
            }
          }, 100);
        }
      } catch (err: any) {
        console.error('Checkout error:', err);
        setErrorMsg(err.message || 'Failed to create checkout');
        setStatus('error');
        toast.error('Checkout failed. Please try again.');
      }
    };

    createCheckout();
  }, [user, session, authLoading, priceId, planName, isSubscription, navigate, searchParams, redirectAttempted]);

  // ALWAYS render something visible
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card border border-border rounded-xl p-8 shadow-lg">
        
        {/* Loading State */}
        {(authLoading || status === 'loading') && (
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
            <h2 className="text-xl font-semibold text-foreground">
              {authLoading ? 'Checking authentication...' : 'Preparing checkout...'}
            </h2>
            <p className="text-muted-foreground">Please wait</p>
          </div>
        )}

        {/* Ready State - Show Stripe Button */}
        {status === 'ready' && stripeUrl && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Complete Your Purchase</h2>
              <p className="text-muted-foreground">Click below to proceed to secure checkout</p>
            </div>
            <Button asChild size="lg" className="w-full text-lg py-6">
              <a href={stripeUrl}>
                Continue to Stripe
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              🔒 Secure payment powered by Stripe
            </p>
          </div>
        )}

        {/* Error State */}
        {status === 'error' && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Checkout Error</h2>
            <p className="text-muted-foreground">{errorMsg}</p>
            <Button onClick={() => navigate('/pricing')} variant="outline">
              Return to Pricing
            </Button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CheckoutRedirectPage;
