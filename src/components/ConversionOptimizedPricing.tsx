import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2, Star, Zap, Shield, ArrowRight, Coffee } from 'lucide-react';
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

  return (
    <section className="w-full py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-sos-lime to-sos-orange bg-clip-text text-transparent">
          Simple, Affordable Protection
        </h1>
        <p className="text-xl text-foreground max-w-3xl mx-auto mb-6">
          Run 2 free stolen-item checks with no card.<br />
          Then unlock unlimited checks for just <span className="font-bold text-sos-lime">$4.99/month</span> – less than one cup of coffee to avoid a $300+ mistake.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="flex items-center gap-1 text-sos-lime font-semibold">
            <Zap className="w-4 h-4" /> 2 Free Checks Included
          </span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Shield className="w-4 h-4" /> No Credit Card Required
          </span>
        </div>
      </div>

      {/* Main Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {/* Free Tier */}
        <Card className="relative p-8 transition-all duration-300 hover:scale-[1.02] border border-border hover:border-sos-lime/50">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-muted-foreground text-sm">Try before you buy</p>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-5xl font-black">$0</span>
              <span className="text-muted-foreground ml-2">forever</span>
            </div>
            <p className="text-sm text-sos-lime mt-2 font-semibold">
              {FREE_SEARCH_LIMIT} free verification checks
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-sos-lime flex-shrink-0 mt-0.5" />
              <span className="text-sm">{FREE_SEARCH_LIMIT} free stolen-item checks</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-sos-lime flex-shrink-0 mt-0.5" />
              <span className="text-sm">IMEI, VIN, license plate & serial numbers</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-sos-lime flex-shrink-0 mt-0.5" />
              <span className="text-sm">No credit card required</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-sos-lime flex-shrink-0 mt-0.5" />
              <span className="text-sm">Instant verification results</span>
            </li>
          </ul>

          <Button 
            onClick={() => handleSubscribeClick('Free Trial')} 
            disabled={loadingTier === 'Free Trial'} 
            className="w-full text-lg font-bold py-6 bg-primary hover:bg-primary/90" 
            size="lg"
          >
            {loadingTier === 'Free Trial' ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </Card>

        {/* Unlimited Tier */}
        <Card className="relative p-8 transition-all duration-300 hover:scale-[1.02] border-2 border-sos-lime shadow-2xl shadow-sos-lime/30 bg-gradient-to-b from-card to-sos-lime/5">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sos-lime to-sos-orange text-black px-6 py-2 rounded-full text-sm font-bold flex items-center gap-1">
            <Star className="w-4 h-4 fill-current" /> BEST VALUE
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Unlimited</h3>
            <p className="text-muted-foreground text-sm">For active buyers & sellers</p>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-5xl font-black">{formatPrice(unlimitedPlan.price)}</span>
              <span className="text-muted-foreground ml-2">/month</span>
            </div>
            <p className="text-sm text-sos-lime mt-2 font-semibold flex items-center gap-1">
              <Coffee className="w-4 h-4" /> Less than a cup of coffee
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {unlimitedPlan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-sos-lime flex-shrink-0 mt-0.5" />
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
                Unlock Unlimited
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
          
          <p className="text-center text-xs text-muted-foreground mt-3">
            🔒 Secure checkout • Cancel anytime
          </p>
        </Card>
      </div>

      {/* Value Proposition */}
      <div className="max-w-2xl mx-auto text-center mb-12 p-6 bg-card rounded-xl border border-border">
        <h3 className="text-xl font-bold mb-3">Why Pay $4.99/month?</h3>
        <p className="text-muted-foreground mb-4">
          The average stolen phone costs buyers <span className="font-bold text-destructive">$300-$1,000</span> in losses.
          A stolen car? <span className="font-bold text-destructive">$5,000-$30,000</span>.
        </p>
        <p className="text-sos-lime font-semibold">
          SafeOrStolen Unlimited costs less than one coffee per month to protect every purchase.
        </p>
      </div>

      {/* Money Back Guarantee */}
      <MoneyBackGuarantee />

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Common Questions</h3>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold mb-2">What can I verify?</h4>
            <p className="text-sm text-muted-foreground">
              Phones (IMEI), cars (VIN), license plates, laptops, bikes, tools, electronics, jewelry, and more. One app for everything.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold mb-2">Can I cancel anytime?</h4>
            <p className="text-sm text-muted-foreground">
              Yes! Cancel anytime with no questions asked. Your access continues until the end of your billing period.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold mb-2">Is there really no catch with the free checks?</h4>
            <p className="text-sm text-muted-foreground">
              No catch. Sign up, get 2 free verifications, no credit card needed. We want you to try before you buy.
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
