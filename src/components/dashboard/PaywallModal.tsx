import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Crown, Zap, ArrowRight, Loader2, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SUBSCRIPTION_TIERS, formatPrice } from '@/features/pricing';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { redirectToStripe } from '@/utils/stripeRedirect';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  freeSearchesUsed?: number;
  maxFreeSearches?: number;
}

export const PaywallModal = ({ isOpen, onClose, freeSearchesUsed = 0, maxFreeSearches = 2 }: PaywallModalProps) => {
  const unlimited = SUBSCRIPTION_TIERS.unlimited;
  const navigate = useNavigate();
  const { isAuthenticated, session } = useUnifiedAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!isAuthenticated || !session) {
      onClose();
      navigate('/auth?tab=signup&redirect=/pricing');
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          planName: 'Unlimited Plan',
          isSubscription: true,
          redirectUrl: `${window.location.origin}/dashboard?checkout=success`
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`
        }
      });

      if (error) throw error;
      if (!data?.url) throw new Error('No checkout URL returned');

      redirectToStripe(data.url);
    } catch (err: any) {
      console.error('Checkout error:', err);
      toast.error(err.message || 'Checkout failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="text-center">
            <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold">
              You've Used Your {maxFreeSearches} Free Checks
            </DialogTitle>
            <DialogDescription className="text-lg mt-2">
              Unlock unlimited verifications for just {formatPrice(unlimited.price)}/month
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="mt-6 p-6 border-2 border-primary rounded-xl bg-primary/5">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-bold text-lg">Unlimited Plan</span>
          </div>
          
          <div className="mb-4">
            <span className="text-4xl font-black">{formatPrice(unlimited.price)}</span>
            <span className="text-muted-foreground">/month</span>
            <p className="text-sm text-muted-foreground mt-1">Less than a cup of coffee ☕</p>
          </div>

          <ul className="space-y-2 mb-6">
            {unlimited.features.slice(0, 5).map((feature) => (
              <li key={feature} className="flex items-start">
                <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            onClick={handleSubscribe}
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Subscribe Now — {formatPrice(unlimited.price)}/month
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground pt-4 border-t">
          <span className="flex items-center gap-1">
            <Shield className="h-3 w-3 text-green-500" />
            30-day money-back guarantee
          </span>
          <span className="flex items-center gap-1">
            <Check className="h-3 w-3 text-green-500" />
            Cancel anytime
          </span>
          <span className="flex items-center gap-1">
            <Check className="h-3 w-3 text-green-500" />
            Secured by Stripe
          </span>
        </div>

        <div className="text-center">
          <Button variant="ghost" onClick={onClose} className="text-sm">
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
