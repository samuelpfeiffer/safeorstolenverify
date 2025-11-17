import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, ShieldCheck, CreditCard, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface SimplifiedCheckoutProps {
  itemNumber?: string;
  itemType?: string;
}

export const SimplifiedCheckout = ({ itemNumber, itemType }: SimplifiedCheckoutProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUnifiedAuth();
  const navigate = useNavigate();

  const handleQuickCheckout = async () => {
    if (!email && !user) {
      toast.error('Please enter your email');
      return;
    }

    setIsLoading(true);

    try {
      // Call Stripe checkout
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: 'price_1SSVqkGxnZLw8J7O3GwCyKRn', // $2.99 single verification
          successUrl: `${window.location.origin}/verify?session_id={CHECKOUT_SESSION_ID}${itemNumber ? `&item=${itemNumber}` : ''}`,
          cancelUrl: `${window.location.origin}/pricing`,
          customerEmail: email || user?.email,
          metadata: {
            item_number: itemNumber || '',
            item_type: itemType || 'general'
          }
        }
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast.error('Checkout failed', {
        description: error.message || 'Please try again'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-sos-orange/5 border-2 border-sos-orange/30">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sos-orange/20 to-sos-lime/20 rounded-full flex items-center justify-center">
            <Zap className="w-8 h-8 text-sos-orange" />
          </div>
          <h3 className="text-2xl font-black mb-2">
            Verify This Item Now
          </h3>
          <p className="text-muted-foreground">
            Get instant results in 3 seconds. No signup required.
          </p>
        </div>

        {/* Price Display */}
        <div className="bg-background/50 rounded-lg p-4 text-center">
          <p className="text-sm text-muted-foreground mb-1">One-Time Payment</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl font-black text-foreground">$2.99</span>
            <span className="text-sm text-muted-foreground line-through">$9.99</span>
          </div>
          <p className="text-xs text-sos-orange font-semibold mt-2">
            ⏰ 48-Hour Special Pricing
          </p>
        </div>

        {/* Email Input (if not logged in) */}
        {!user && (
          <div>
            <Label htmlFor="email" className="text-sm font-semibold">
              Email for Receipt
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2"
            />
          </div>
        )}

        {/* What's Included */}
        <div className="space-y-2">
          <p className="text-sm font-semibold">What You Get:</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sos-lime" />
              <span>Instant verification results</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sos-lime" />
              <span>50M+ stolen item database check</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sos-lime" />
              <span>Downloadable verification receipt</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sos-lime" />
              <span>Safe badge if item is clear</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <Button
          onClick={handleQuickCheckout}
          disabled={isLoading}
          size="lg"
          className="w-full bg-gradient-to-r from-sos-orange to-sos-lime text-white font-bold text-lg py-6 hover:shadow-xl transition-all hover:scale-105"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5 mr-2" />
              Verify Now - $2.99
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
