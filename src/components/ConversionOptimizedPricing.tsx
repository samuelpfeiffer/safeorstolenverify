import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2, Star, Zap, Shield, ArrowRight, CreditCard } from 'lucide-react';
import { SUBSCRIPTION_TIERS, formatPrice, FREE_SEARCH_LIMIT } from '@/features/pricing';
import { TrustSignals } from '@/components/pricing/TrustSignals';
import { MoneyBackGuarantee } from '@/components/pricing/MoneyBackGuarantee';

interface ConversionOptimizedPricingProps {
  onSubscribe: (tierName: string) => void;
}

export const ConversionOptimizedPricing = ({
  onSubscribe
}: ConversionOptimizedPricingProps) => {
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  
  const handleSubscribeClick = async (tierName: string) => {
    setLoadingTier(tierName);
    try {
      await onSubscribe(tierName);
    } finally {
      setTimeout(() => setLoadingTier(null), 3000);
    }
  };

  const unlimitedPlan = SUBSCRIPTION_TIERS.unlimited;
  const payPerCheck = SUBSCRIPTION_TIERS.payPerCheck;

  return (
    <section className="w-full py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-sos-lime to-sos-orange bg-clip-text text-transparent">
          Simple, Honest Pricing
        </h1>
        <p className="text-xl text-foreground max-w-3xl mx-auto mb-6">
          Start with 2 free checks. Then pay <span className="font-bold text-sos-lime">$0.99/check</span> or go unlimited for <span className="font-bold text-sos-lime">$2.99/month</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="flex items-center gap-1 text-sos-lime font-semibold">
            <Zap className="w-4 h-4" /> No Hidden Fees
          </span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Shield className="w-4 h-4" /> Cancel Anytime
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-3xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pay Per Check */}
        <Card className="p-6 transition-all duration-300 hover:scale-[1.02] border border-border">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-1">Pay Per Check</h3>
            <p className="text-muted-foreground text-sm">No subscription needed</p>
          </div>
          <div className="mb-4">
            <div className="flex items-baseline">
              <span className="text-4xl font-black">{formatPrice(payPerCheck.price)}</span>
              <span className="text-muted-foreground ml-2">per check</span>
            </div>
          </div>
          <ul className="space-y-2 mb-6">
            {payPerCheck.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <Button 
            onClick={() => handleSubscribeClick(payPerCheck.name)} 
            disabled={loadingTier === payPerCheck.name} 
            variant="outline"
            className="w-full font-bold py-5" 
            size="lg"
          >
            {loadingTier === payPerCheck.name ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Buy a Check — $0.99
              </>
            )}
          </Button>
        </Card>

        {/* Unlimited Tier */}
        <Card className="relative p-6 transition-all duration-300 hover:scale-[1.02] border-2 border-sos-lime shadow-2xl shadow-sos-lime/30 bg-gradient-to-b from-card to-sos-lime/5">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sos-lime to-sos-orange text-black px-6 py-2 rounded-full text-sm font-bold flex items-center gap-1">
            <Star className="w-4 h-4 fill-current" /> BEST VALUE
          </div>
          
          <div className="mb-4 mt-4">
            <h3 className="text-xl font-bold mb-1">Unlimited</h3>
            <p className="text-muted-foreground text-sm">Everything, unlimited</p>
          </div>

          <div className="mb-4">
            <div className="flex items-baseline">
              <span className="text-4xl font-black">{formatPrice(unlimitedPlan.price)}</span>
              <span className="text-muted-foreground ml-2">/month</span>
            </div>
            <p className="text-sm text-sos-lime mt-1 font-semibold">
              Saves money after just 3 checks/month
            </p>
          </div>

          <ul className="space-y-2 mb-6">
            {unlimitedPlan.features.slice(0, 6).map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-sos-lime flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <Button 
            onClick={() => handleSubscribeClick(unlimitedPlan.name)} 
            disabled={loadingTier === unlimitedPlan.name} 
            className="w-full text-lg font-bold py-6 bg-gradient-to-r from-sos-lime to-sos-orange hover:opacity-90 text-black" 
            size="lg"
          >
            {loadingTier === unlimitedPlan.name ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Go Unlimited — $2.99/month
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
          
          <p className="text-center text-xs text-muted-foreground mt-3">
            🔒 Secure checkout • Cancel anytime • 30-day money-back guarantee
          </p>
        </Card>
      </div>

      {/* Free Tier Note */}
      <div className="max-w-2xl mx-auto text-center mb-12 p-6 bg-card rounded-xl border border-border">
        <h3 className="text-xl font-bold mb-3">Start Free</h3>
        <p className="text-muted-foreground">
          Every new user gets <span className="font-bold text-sos-lime">2 free verifications</span> — no credit card required. 
          All databases, all item types, 3-second results. Try before you buy.
        </p>
      </div>

      {/* Money Back Guarantee */}
      <MoneyBackGuarantee />

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Common Questions</h3>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold mb-2">Which plan should I choose?</h4>
            <p className="text-sm text-muted-foreground">
              Checking one item? Use a free check or pay $0.99. Buying/selling regularly (3+ times/month)? The $2.99/month unlimited plan saves you money and includes seller badges.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold mb-2">Can I cancel anytime?</h4>
            <p className="text-sm text-muted-foreground">
              Yes! Cancel anytime with one click. 30-day money-back guarantee. Your access continues until the end of your billing period.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold mb-2">Do I need an account for pay-per-check?</h4>
            <p className="text-sm text-muted-foreground">
              No. Pay $0.99, enter your item's identifier, and get instant results. No account required.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold mb-2">Is my payment secure?</h4>
            <p className="text-sm text-muted-foreground">
              Absolutely. We use Stripe for payment processing with 256-bit SSL encryption. We never store your card details.
            </p>
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="max-w-5xl mx-auto mt-16">
        <TrustSignals />
      </div>
    </section>
  );
};
