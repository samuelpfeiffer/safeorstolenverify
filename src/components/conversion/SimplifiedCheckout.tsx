import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Loader2, ShieldCheck, CreditCard, Zap } from 'lucide-react';
import { useNavigate } from '@/lib/router-compat';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { redirectToStripe } from '@/utils/stripeRedirect';

interface SimplifiedCheckoutProps {
  itemNumber?: string;
  itemType?: string;
}

export const SimplifiedCheckout = ({ itemNumber, itemType }: SimplifiedCheckoutProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, session } = useUnifiedAuth();
  const navigate = useNavigate();

  const handleQuickCheckout = async () => {
    if (!session) {
      toast.error('Please sign in to continue', {
        description: 'You need to be signed in to purchase a verification.'
      });
      navigate('/auth?redirect=/pricing');
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: 'price_1SSVqkGxnZLw8J7O3GwCyKRn',
          serialNumber: itemNumber || '',
          itemType: itemType || 'general',
          redirectUrl: 'https://safeorstolen.com',
          isSubscription: false,
          planName: 'Single Verification'
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error('Checkout error:', error);
        throw new Error(error.message || 'Failed to create checkout session');
      }

      if (data?.url) {
        redirectToStripe(data.url);
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast.error('Checkout failed', {
        description: error.message || 'Please try again'
      });
      setIsLoading(false);
    }
  };
  return (
    <Card className="p-6 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/30">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-black mb-2">
            Verify This Item Now
          </h3>
          <p className="text-muted-foreground">
            Get instant results in 3 seconds.
          </p>
        </div>

        {/* Price Display */}
        <div className="bg-background/50 rounded-lg p-4 text-center">
          <p className="text-sm text-muted-foreground mb-1">Monthly Subscription</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl font-black text-foreground">$10</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
          <p className="text-xs text-primary font-semibold mt-2">
            ✨ Unlimited Verifications
          </p>
        </div>

        {/* Sign in prompt if not logged in */}
        {!user && (
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Please <button onClick={() => navigate('/auth?redirect=/pricing')} className="text-primary underline font-semibold">sign in</button> to continue with checkout
            </p>
          </div>
        )}

        {/* What's Included */}
        <div className="space-y-2">
          <p className="text-sm font-semibold">What You Get:</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Instant verification results</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>100+ stolen item database check</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Downloadable verification receipt</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Safe badge if item is clear</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <Button
          onClick={handleQuickCheckout}
          disabled={isLoading || !session}
          size="lg"
          className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg py-6 hover:shadow-xl transition-all hover:scale-105"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing...
            </>
          ) : !session ? (
            <>
              <ShieldCheck className="w-5 h-5 mr-2" />
              Sign In to Verify
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5 mr-2" />
              Subscribe — $10/mo Unlimited
            </>
          )}
        </Button>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-4 border-t">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            <span>Secure Payment</span>
          </div>
          <div className="w-px h-3 bg-border" />
          <div className="flex items-center gap-1">
            <CreditCard className="w-3 h-3" />
            <span>Stripe Protected</span>
          </div>
          <div className="w-px h-3 bg-border" />
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3" />
            <span>Instant Access</span>
          </div>
        </div>

        {/* Guarantee */}
        <p className="text-center text-xs text-muted-foreground">
          💯 <strong>Money-Back Guarantee:</strong> If item is stolen, full refund + police report support
        </p>
      </div>
    </Card>
  );
};
