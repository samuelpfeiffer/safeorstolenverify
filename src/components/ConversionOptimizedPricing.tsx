import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Shield, Zap, Clock, Users } from 'lucide-react';
import { SUBSCRIPTION_TIERS, formatPrice, calculateAnnualSavings, formatSavings } from '@/utils/pricing';
import { BillingToggle } from './pricing/BillingToggle';

interface PricingTierProps {
  name: string;
  price: string;
  yearlyPrice?: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  onClick: () => void;
  loading?: boolean;
  isAnnual?: boolean;
  savings?: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  yearlyPrice,
  period,
  description,
  features,
  buttonText,
  popular = false,
  onClick,
  loading = false,
  isAnnual = false,
  savings
}) => (
  <Card className={`relative ${popular ? 'border-2 border-primary shadow-lg scale-105' : 'border'}`}>
    {popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <Badge className="bg-primary text-primary-foreground px-4 py-1">
          <Star className="h-3 w-3 mr-1" />
          Most Popular
        </Badge>
      </div>
    )}
    
    <CardHeader className="text-center pb-4">
      <CardTitle className="text-2xl font-bold">{name}</CardTitle>
      <div className="space-y-2">
        <div className="text-4xl font-bold text-primary">
          {isAnnual && yearlyPrice ? yearlyPrice : price}
          <span className="text-lg text-muted-foreground font-normal">/{isAnnual ? 'year' : period}</span>
        </div>
        {isAnnual && savings && (
          <Badge variant="secondary" className="bg-sos-lime/20 text-sos-lime border-sos-lime">
            {savings}
          </Badge>
        )}
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </CardHeader>
    
    <CardContent className="space-y-6">
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        className={`w-full ${popular ? 'bg-primary hover:bg-primary/90' : ''}`}
        size="lg"
        onClick={onClick}
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            Processing...
          </div>
        ) : (
          <>
            <Shield className="mr-2 h-4 w-4" />
            {buttonText}
          </>
        )}
      </Button>
      
      {popular && (
        <div className="text-center">
          <p className="text-xs text-green-600 font-medium">
            ✓ 30-day money-back guarantee
          </p>
        </div>
      )}
    </CardContent>
  </Card>
);

interface ConversionOptimizedPricingProps {
  onSubscribe: (tier: 'individual' | 'business' | 'enterprise', isAnnual?: boolean) => void;
  loadingTier?: string | null;
}

export const ConversionOptimizedPricing: React.FC<ConversionOptimizedPricingProps> = ({
  onSubscribe,
  loadingTier
}) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      id: 'individual' as const,
      name: SUBSCRIPTION_TIERS.individual.name,
      price: formatPrice(SUBSCRIPTION_TIERS.individual.price),
      yearlyPrice: SUBSCRIPTION_TIERS.individual.yearlyPrice 
        ? formatPrice(Math.floor(SUBSCRIPTION_TIERS.individual.yearlyPrice / 12))
        : undefined,
      period: SUBSCRIPTION_TIERS.individual.interval,
      description: 'Perfect for casual buyers and collectors',
      features: SUBSCRIPTION_TIERS.individual.features || [],
      buttonText: 'Get Started',
      popular: SUBSCRIPTION_TIERS.individual.popular,
      savings: SUBSCRIPTION_TIERS.individual.yearlyPrice 
        ? formatSavings(calculateAnnualSavings(SUBSCRIPTION_TIERS.individual.price))
        : undefined
    },
    {
      id: 'business' as const,
      name: SUBSCRIPTION_TIERS.business.name,
      price: formatPrice(SUBSCRIPTION_TIERS.business.price),
      yearlyPrice: SUBSCRIPTION_TIERS.business.yearlyPrice 
        ? formatPrice(Math.floor(SUBSCRIPTION_TIERS.business.yearlyPrice / 12))
        : undefined,
      period: SUBSCRIPTION_TIERS.business.interval,
      description: 'For resellers, dealers, and small businesses',
      features: SUBSCRIPTION_TIERS.business.features || [],
      buttonText: 'Start 7-Day Trial',
      savings: SUBSCRIPTION_TIERS.business.yearlyPrice 
        ? formatSavings(calculateAnnualSavings(SUBSCRIPTION_TIERS.business.price))
        : undefined
    },
    {
      id: 'enterprise' as const,
      name: SUBSCRIPTION_TIERS.enterprise.name,
      price: formatPrice(SUBSCRIPTION_TIERS.enterprise.price) + '+',
      yearlyPrice: SUBSCRIPTION_TIERS.enterprise.yearlyPrice 
        ? formatPrice(Math.floor(SUBSCRIPTION_TIERS.enterprise.yearlyPrice / 12))
        : undefined,
      period: SUBSCRIPTION_TIERS.enterprise.interval,
      description: 'Custom solutions for large-scale operations',
      features: SUBSCRIPTION_TIERS.enterprise.features || [],
      buttonText: 'Contact Sales',
      savings: SUBSCRIPTION_TIERS.enterprise.yearlyPrice 
        ? formatSavings(calculateAnnualSavings(SUBSCRIPTION_TIERS.enterprise.price))
        : undefined
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Start Free, Upgrade as You Grow
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Choose your protection level. All paid plans include our money-back guarantee and 
            instant access to comprehensive verification databases.
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">25,000+ Protected Buyers</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">$2.3M in Scams Prevented</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">&lt;30s Average Check</span>
            </div>
          </div>
        </div>

        {/* Billing Toggle */}
        <BillingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {tiers.map((tier) => (
            <PricingTier
              key={tier.id}
              name={tier.name}
              price={tier.price}
              yearlyPrice={tier.yearlyPrice}
              period={tier.period}
              description={tier.description}
              features={tier.features}
              buttonText={tier.buttonText}
              popular={tier.popular}
              onClick={() => onSubscribe(tier.id, isAnnual)}
              loading={loadingTier === tier.id}
              isAnnual={isAnnual}
              savings={tier.savings}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center space-y-6">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              30-day money-back guarantee
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              Secure payment by Stripe
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              Instant activation
            </span>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-blue-500" />
              <Badge className="bg-green-500 text-white">Freemium Launch</Badge>
            </div>
            <p className="font-medium text-gray-900">
              Start with 5 free checks per month - no credit card required. 
              Upgrade anytime to unlock unlimited verifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
