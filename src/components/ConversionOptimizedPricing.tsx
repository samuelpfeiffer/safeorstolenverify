import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2 } from 'lucide-react';
import { SUBSCRIPTION_TIERS, formatPrice } from '@/features/pricing';
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
  onSubscribe,
  isLoading
}: PricingTierProps) => {
  return <Card className={`relative p-8 ${popular ? 'border-sos-lime shadow-lg shadow-sos-lime/20' : ''}`}>
      {popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sos-lime to-sos-orange text-black px-4 py-1 rounded-full text-sm font-semibold">
          Best Value
        </div>}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-5xl font-bold">{formatPrice(price)}</span>
          <span className="text-muted-foreground ml-2">
            {interval === 'once' ? 'one-time' : '/month'}
          </span>
        </div>
        {pricePerCheck && <p className="text-sm text-sos-lime mt-1">
            ${pricePerCheck.toFixed(2)} per check
          </p>}
        {checksIncluded && <p className="text-xs text-muted-foreground mt-1">
            {checksIncluded} checks included
          </p>}
      </div>

      <ul className="space-y-3 mb-8">
        {(features || []).map((feature, index) => <li key={index} className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-sos-lime flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>)}
        {badge && <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-sos-orange flex-shrink-0 mt-0.5" />
            <span className="text-sm font-semibold">✨ Trust badge included</span>
          </li>}
        {hasAPI && <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-sos-orange flex-shrink-0 mt-0.5" />
            <span className="text-sm font-semibold">🔌 API access included</span>
          </li>}
      </ul>

      <Button onClick={() => onSubscribe(name)} disabled={isLoading} className={`w-full ${popular ? 'bg-gradient-to-r from-sos-lime to-sos-orange hover:opacity-90' : 'bg-primary hover:bg-primary/90'}`} size="lg">
        {isLoading ? <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </> : cta}
      </Button>
    </Card>;
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
      setLoadingTier(null);
    }
  };
  const casualTiers = [{
    ...SUBSCRIPTION_TIERS.payPerUse,
    description: "One-time check, no commitment",
    cta: "Buy Single Check"
  }, {
    ...SUBSCRIPTION_TIERS.starter,
    description: "Best for regular sellers",
    cta: "Start Starter Plan"
  }, {
    ...SUBSCRIPTION_TIERS.personal,
    description: "Maximum value per check",
    cta: "Start Personal Plan"
  }];
  const businessTiers = [{
    ...SUBSCRIPTION_TIERS.professional,
    description: "Perfect for small businesses",
    cta: "Start Professional Plan"
  }, {
    ...SUBSCRIPTION_TIERS.enterprise,
    description: "For large scale operations",
    cta: "Contact Sales"
  }];
  return <section className="w-full py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sos-lime to-sos-orange bg-clip-text text-transparent">
          Ultra-Simple, Competitive Pricing
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">From $0.50 per check to enterprise API access. Choose what fits your needs—no subscriptions required for casuals.</p>
      </div>

      {/* Casual Buyers & Sellers Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-3">For Casual Buyers & Sellers</h3>
          <p className="text-lg text-muted-foreground">No account required. Just verify and go.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {casualTiers.map(tier => <PricingTier key={tier.name} {...tier} onSubscribe={handleSubscribeClick} isLoading={loadingTier === tier.name} />)}
        </div>
      </div>

      {/* Business & API Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-3">For Businesses & Warehouses</h3>
          <p className="text-lg text-muted-foreground">Monthly subscriptions with API access and trust badges.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {businessTiers.map(tier => <PricingTier key={tier.name} {...tier} onSubscribe={handleSubscribeClick} isLoading={loadingTier === tier.name} />)}
        </div>
      </div>

      {/* Social Proof & Trust Indicators */}
      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center mb-16">
        <div className="p-6 rounded-lg bg-card border border-border">
          <div className="text-4xl font-bold text-sos-lime mb-2">127M+</div>
          <p className="text-muted-foreground">Items Tracked</p>
        </div>
        <div className="p-6 rounded-lg bg-card border border-border">
          <div className="text-4xl font-bold text-sos-lime mb-2">$0.99</div>
          <p className="text-muted-foreground">Starting Price</p>
        </div>
        <div className="p-6 rounded-lg bg-card border border-border">
          <div className="text-4xl font-bold text-sos-lime mb-2">50K+</div>
          <p className="text-muted-foreground">Verified Sellers</p>
        </div>
        <div className="p-6 rounded-lg bg-card border border-border">
          <div className="text-4xl font-bold text-sos-lime mb-2">99.9%</div>
          <p className="text-muted-foreground">Accuracy Rate</p>
        </div>
      </div>

      {/* Trust Badge Highlight */}
      <div className="mt-16 text-center p-8 rounded-lg bg-gradient-to-r from-sos-lime/10 to-sos-orange/10 border border-sos-lime/20 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-3">🛡️ Free "Verified Safe" Trust Badges</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          All bulk and business plans include downloadable trust badges and embeddable widgets.
          Build buyer confidence and close sales faster with "SafeOrStolen Verified" certificates.
        </p>
      </div>
    </section>;
};