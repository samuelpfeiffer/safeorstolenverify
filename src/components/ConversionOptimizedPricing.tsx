import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2, Star, Zap, Shield, ArrowRight, AlertTriangle } from 'lucide-react';
import { SUBSCRIPTION_TIERS, formatPrice } from '@/features/pricing';
import { TrustSignals } from '@/components/pricing/TrustSignals';
import { MoneyBackGuarantee } from '@/components/pricing/MoneyBackGuarantee';

interface PricingTierProps {
  name: string;
  price: number;
  description: string;
  features?: string[];
  cta: string;
  popular?: boolean;
  checksIncluded?: number;
  pricePerCheck?: number;
  interval: 'month' | 'once';
  badge?: boolean;
  hasAPI?: boolean;
  promotionBadge?: string;
  highlight?: string;
  onSubscribe: (tierName: string) => void;
  isLoading: boolean;
}

const PricingTier = ({
  name,
  price,
  description,
  features,
  cta,
  popular,
  checksIncluded,
  pricePerCheck,
  interval,
  badge,
  hasAPI,
  promotionBadge,
  highlight,
  onSubscribe,
  isLoading
}: PricingTierProps) => {
  return (
    <Card className={`relative p-8 transition-all duration-300 hover:scale-[1.02] ${
      popular 
        ? 'border-2 border-sos-lime shadow-2xl shadow-sos-lime/30 bg-gradient-to-b from-card to-sos-lime/5' 
        : promotionBadge 
          ? 'border-2 border-destructive shadow-lg shadow-destructive/20' 
          : 'border border-border hover:border-sos-lime/50'
    }`}>
      {promotionBadge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-destructive text-destructive-foreground px-4 py-1 rounded-full text-xs font-bold animate-pulse">
          {promotionBadge}
        </div>
      )}
      {popular && !promotionBadge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sos-lime to-sos-orange text-black px-6 py-2 rounded-full text-sm font-bold flex items-center gap-1">
          <Star className="w-4 h-4 fill-current" /> MOST POPULAR
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        {highlight && (
          <p className="text-sos-lime text-sm font-semibold mt-2">{highlight}</p>
        )}
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-5xl font-black">{formatPrice(price)}</span>
          <span className="text-muted-foreground ml-2">
            {interval === 'once' ? 'one-time' : '/month'}
          </span>
        </div>
        {pricePerCheck && (
          <p className="text-sm text-sos-lime mt-2 font-semibold">
            Only ${pricePerCheck.toFixed(2)} per verification
          </p>
        )}
        {checksIncluded && (
          <p className="text-xs text-muted-foreground mt-1">
            {checksIncluded} verifications included
          </p>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {(features || []).map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-sos-lime flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
        {badge && (
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-sos-orange flex-shrink-0 mt-0.5" />
            <span className="text-sm font-semibold">✨ Trust badge included</span>
          </li>
        )}
        {hasAPI && (
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-sos-orange flex-shrink-0 mt-0.5" />
            <span className="text-sm font-semibold">🔌 API access included</span>
          </li>
        )}
      </ul>

      <Button 
        onClick={() => onSubscribe(name)} 
        disabled={isLoading} 
        className={`w-full text-lg font-bold py-6 ${
          popular 
            ? 'bg-gradient-to-r from-sos-lime to-sos-orange hover:opacity-90 text-black' 
            : 'bg-primary hover:bg-primary/90'
        }`} 
        size="lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            {cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
      
      {popular && (
        <p className="text-center text-xs text-muted-foreground mt-3">
          🔒 Secure checkout • Cancel anytime
        </p>
      )}
    </Card>
  );
};

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

  const casualTiers = [
    {
      ...SUBSCRIPTION_TIERS.payPerUse,
      description: "Perfect for one-time purchases",
      cta: "Get Single Check",
      highlight: "Best for single item verification"
    },
    {
      ...SUBSCRIPTION_TIERS.starter,
      description: "For regular buyers & sellers",
      cta: "Start Now",
      pricePerCheck: 0.33,
      checksIncluded: 15,
      highlight: "Save 89% vs single checks"
    },
    {
      ...SUBSCRIPTION_TIERS.personal,
      description: "Best value for active users",
      cta: "Get Best Value",
      pricePerCheck: 0.20,
      checksIncluded: 50,
      highlight: "Most popular choice"
    }
  ];

  const businessTiers = [
    {
      ...SUBSCRIPTION_TIERS.professional,
      description: "For businesses & high-volume users",
      cta: "Start Pro Plan",
      highlight: "Unlimited verifications"
    }, 
    {
      ...SUBSCRIPTION_TIERS.enterprise,
      description: "For large-scale operations",
      cta: "Contact Sales",
      highlight: "Custom integrations & SLA"
    }
  ];

  return (
    <section className="w-full py-16 px-4">
      {/* Urgent Call to Action */}
      <div className="max-w-xl mx-auto mb-12 p-6 bg-gradient-to-r from-destructive/20 to-destructive/5 border-2 border-destructive rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">⚠️ Don't Risk Buying Stolen Goods</h3>
        <p className="text-muted-foreground mb-4">
          Every day buyers lose hundreds of dollars on stolen items. Protect yourself now.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={() => handleSubscribeClick('Starter Plan')}
            disabled={loadingTier === 'Starter Plan'}
            size="lg"
            className="bg-destructive hover:bg-destructive/90 text-white font-bold"
          >
            {loadingTier === 'Starter Plan' ? (
              <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...</>
            ) : (
              <>Get Protected - $4.99/mo</>
            )}
          </Button>
          <Button 
            onClick={() => handleSubscribeClick('Single Verification')}
            disabled={loadingTier === 'Single Verification'}
            variant="outline"
            size="lg"
          >
            Just 1 Check - $2.99
          </Button>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-sos-lime to-sos-orange bg-clip-text text-transparent">
          Protect Your Purchase Today
        </h2>
        <p className="text-xl text-foreground max-w-3xl mx-auto mb-4">
          Don't risk buying stolen goods. Verify any item in seconds.
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

      {/* Trust Signals */}
      <div className="max-w-5xl mx-auto mb-12">
        <TrustSignals />
      </div>

      {/* Main Pricing Tiers */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2">For Buyers & Sellers</h3>
          <p className="text-muted-foreground">
            Choose the plan that fits your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {casualTiers.map(tier => (
            <PricingTier 
              key={tier.name} 
              {...tier} 
              onSubscribe={handleSubscribeClick} 
              isLoading={loadingTier === tier.name} 
            />
          ))}
        </div>
      </div>

      {/* Money Back Guarantee */}
      <MoneyBackGuarantee />

      {/* Business Tiers */}
      <div className="mt-20 mb-16">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2">For Businesses</h3>
          <p className="text-muted-foreground">
            Unlimited verifications with API access and advanced features
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {businessTiers.map(tier => (
            <PricingTier 
              key={tier.name} 
              {...tier} 
              onSubscribe={handleSubscribeClick} 
              isLoading={loadingTier === tier.name} 
            />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Common Questions</h3>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold mb-2">Can I cancel anytime?</h4>
            <p className="text-sm text-muted-foreground">
              Yes! All subscriptions can be cancelled anytime with no questions asked. Your access continues until the end of your billing period.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold mb-2">What if I need more verifications?</h4>
            <p className="text-sm text-muted-foreground">
              You can upgrade your plan anytime, or purchase additional single verifications at $2.99 each.
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
    </section>
  );
};