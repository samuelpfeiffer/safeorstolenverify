import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Lock, Loader2, Star, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { redirectToStripe } from '@/utils/stripeRedirect';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  freeSearchesUsed: number;
  maxFreeSearches: number;
}

export const PaywallModal = ({ isOpen, onClose, freeSearchesUsed, maxFreeSearches }: PaywallModalProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleDirectCheckout = async () => {
    setIsLoading(true);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        onClose();
        navigate('/auth?redirect=/pricing');
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          planName: 'Unlimited Plan',
          isSubscription: true,
          redirectUrl: 'https://safeorstolen.com'
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
      toast({
        title: 'Checkout Error',
        description: err.message || 'Failed to start checkout. Please try again.',
        variant: 'destructive'
      });
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-destructive/10 rounded-full animate-pulse">
              <Lock className="h-8 w-8 text-destructive" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center">
            🔒 Don't Risk Buying Stolen Goods
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            You've used your {maxFreeSearches} free checks. Continue protecting yourself from scams and legal trouble.
          </DialogDescription>
        </DialogHeader>

        {/* Social Proof Banner */}
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 flex items-center gap-2 justify-center">
          <TrendingUp className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">5,000+ items verified this week</span>
        </div>

        <div className="space-y-4 mt-2">
          {/* Unlimited Plan Option */}
          <div 
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              isLoading 
                ? 'border-primary bg-primary/10 opacity-75' 
                : 'border-primary bg-primary/5 hover:bg-primary/10 hover:scale-[1.02]'
            }`}
            onClick={() => !isLoading && handleDirectCheckout()}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">Unlimited Plan</span>
                  <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full font-semibold">
                    BEST VALUE
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Unlimited checks • All item types</p>
              </div>
              <div className="text-right">
                {isLoading ? (
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                ) : (
                  <>
                    <div className="text-2xl font-bold text-primary">$4.99</div>
                    <div className="text-xs text-muted-foreground">/month</div>
                  </>
                )}
              </div>
            </div>
            <ul className="mt-3 space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span><strong>Unlimited</strong> verifications per month</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                All item types: phones, cars, bikes, tools & more
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                IMEI, VIN, license plate & serial lookups
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                PDF verification receipts & history
              </li>
            </ul>
          </div>

          {/* View All Plans */}
          <Button 
            variant="ghost" 
            className="w-full text-muted-foreground"
            onClick={() => {
              onClose();
              navigate('/pricing');
            }}
            disabled={isLoading}
          >
            Compare All Plans →
          </Button>
        </div>

        {/* Trust Signals */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Lock className="h-3 w-3" />
              Secure Stripe
            </span>
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              30-day guarantee
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              4.1★ Trustpilot
            </span>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            <strong>⚠️ Risk Warning:</strong> Buying stolen goods can result in losing the item AND your money.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
