import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2, Star, Zap, Shield, ArrowRight, AlertTriangle, Tag, X } from 'lucide-react';
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
  const [searchParams] = useSearchParams();
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [showDiscountBanner, setShowDiscountBanner] = useState(false);

  // Valid discount codes
  const VALID_DISCOUNTS: Record<string, number> = {
    'EXIT20': 20,
    'COMEBACK20': 20,
    'WELCOME10': 10,
    'LAUNCH25': 25,
  };

  // Check for discount code in URL
  useEffect(() => {
    const code = searchParams.get('discount')?.toUpperCase();
    if (code && VALID_DISCOUNTS[code]) {
      setDiscountCode(code);
      setDiscountPercent(VALID_DISCOUNTS[code]);
      setShowDiscountBanner(true);
      // Store in session so it persists through checkout
      sessionStorage.setItem('discount_code', code);
    } else {
      // Check session storage
      const storedCode = sessionStorage.getItem('discount_code')?.toUpperCase();
      if (storedCode && VALID_DISCOUNTS[storedCode]) {
        setDiscountCode(storedCode);
        setDiscountPercent(VALID_DISCOUNTS[storedCode]);
        setShowDiscountBanner(true);
      }
    }
  }, [searchParams]);
  
  const handleSubscribeClick = async (tierName: string) => {
    setLoadingTier(tierName);
    try {
      await onSubscribe(tierName);
    } finally {
      setTimeout(() => setLoadingTier(null), 3000);
    }
  };

  const applyDiscount = (price: number) => {
    if (discountPercent > 0) {
      return price * (1 - discountPercent / 100);
    }
    return price;
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
      {/* Discount Code Banner */}
      {showDiscountBanner && discountCode && (
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 border-2 border-accent rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Tag className="w-6 h-6 text-accent" />
              <div>
                <p className="font-bold text-lg text-accent">
                  🎉 {discountPercent}% OFF Applied!
                </p>
                <p className="text-sm text-muted-foreground">
                  Code <span className="font-mono font-bold">{discountCode}</span> automatically applied to your purchase
                </p>
              </div>
            </div>
            <button 
              onClick={() => {
                setShowDiscountBanner(false);
                setDiscountCode(null);
                setDiscountPercent(0);
                sessionStorage.removeItem('discount_code');
              }}
              className="text-muted-foreground hover:text-foreground p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-sos-lime to-sos-orange bg-clip-text text-transparent">
          Subscription Plans
        </h2>
        <p className="text-xl text-foreground max-w-3xl mx-auto mb-4">
          Join 66+ users protecting themselves from stolen goods
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

      {/* Trust Signals - moved below pricing */}
      <div className="max-w-5xl mx-auto mt-16">
        <TrustSignals />
      </div>
    </section>
  );
};