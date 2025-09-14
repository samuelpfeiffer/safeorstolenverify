import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Shield, Zap, Clock, Users } from 'lucide-react';

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  onClick: () => void;
  loading?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
  onClick,
  loading = false
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
          {price}
          <span className="text-lg text-muted-foreground font-normal">/{period}</span>
        </div>
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
  onSubscribe: (tier: 'free' | 'unlimited') => void;
  loadingTier?: string | null;
}

export const ConversionOptimizedPricing: React.FC<ConversionOptimizedPricingProps> = ({
  onSubscribe,
  loadingTier
}) => {
  const tiers = [
    {
      id: 'free' as const,
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Get started with 4 free checks',
      features: [
        '4 free verifications',
        'IMEI, VIN & Serial checks',
        'Basic verification reports',
        'Avoid stolen devices',
        'Legal protection'
      ],
      buttonText: 'Start Free'
    },
    {
      id: 'unlimited' as const,
      name: 'Unlimited Verifications',
      price: '$9.99',
      period: 'month',
      description: 'Perfect for buyers, sellers & businesses',
      features: [
        '7-day free trial',
        'Unlimited verifications',
        'All device types (IMEI/VIN/Serial)',
        'Advanced verification reports',
        'Verified Safe badge for sellers',
        'Priority support',
        'Prevent chargebacks',
        'Boost buyer confidence'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Instantly Verify Secondhand Goods—Protect Yourself from Stolen Devices!
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Stop risking your money on stolen phones, electronics, or vehicles! Instantly check IMEI, VIN, or serial numbers—avoid scams, bricked devices, and legal trouble.
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {tiers.map((tier) => (
            <PricingTier
              key={tier.id}
              name={tier.name}
              price={tier.price}
              period={tier.period}
              description={tier.description}
              features={tier.features}
              buttonText={tier.buttonText}
              popular={tier.popular}
              onClick={() => onSubscribe(tier.id)}
              loading={loadingTier === tier.id}
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
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-orange-500" />
              <Badge className="bg-red-500 text-white">Limited Time</Badge>
            </div>
            <p className="font-medium text-gray-900">
              Join during our launch period and lock in these prices forever. 
              Regular pricing starts at $12.99/month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};