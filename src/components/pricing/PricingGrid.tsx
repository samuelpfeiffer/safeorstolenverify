import React, { useState } from 'react';
import { PlanCard } from './PlanCard';
import { SUBSCRIPTION_TIERS, formatPrice } from '@/features/pricing';
import { useSubscription } from '@/hooks/useSubscription';
import { toast } from 'sonner';
import { navigateOutOfIframe } from '@/utils/navigationUtils';

export const PricingGrid = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { createSubscriptionCheckout } = useSubscription();

  const handleCheckout = async (priceId: string) => {
    setIsLoading(true);
    try {
      const url = await createSubscriptionCheckout(priceId);
      
      if (url) {
        navigateOutOfIframe(url);
      } else {
        toast.error('Failed to create checkout session - no URL returned');
      }
    } catch (error) {
      toast.error(`Failed to start checkout process: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const plans = [
    {
      ...SUBSCRIPTION_TIERS.starter,
      price: formatPrice(SUBSCRIPTION_TIERS.starter.price),
      priceId: SUBSCRIPTION_TIERS.starter.stripePriceId!,
      period: 'month',
      image: "https://i.imgur.com/6Mvijcm.png"
    },
    {
      ...SUBSCRIPTION_TIERS.personal,
      price: formatPrice(SUBSCRIPTION_TIERS.personal.price),
      priceId: SUBSCRIPTION_TIERS.personal.stripePriceId!,
      period: 'month',
      image: "https://i.imgur.com/6Mvijcm.png"
    },
    {
      ...SUBSCRIPTION_TIERS.professional,
      price: formatPrice(SUBSCRIPTION_TIERS.professional.price),
      priceId: SUBSCRIPTION_TIERS.professional.stripePriceId!,
      period: 'month',
      image: "https://i.imgur.com/6Mvijcm.png"
    },
    {
      ...SUBSCRIPTION_TIERS.enterprise,
      price: formatPrice(SUBSCRIPTION_TIERS.enterprise.price) + '+',
      priceId: SUBSCRIPTION_TIERS.enterprise.stripePriceId!,
      period: 'month',
      image: "https://i.imgur.com/6Mvijcm.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Subscription Plans</h2>
        <p className="text-xl text-muted-foreground">Start free, upgrade as you grow</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <PlanCard
            key={plan.priceId}
            name={plan.name}
            price={plan.price}
            priceId={plan.priceId}
            period={plan.period}
            features={plan.features}
            popular={plan.popular}
            image={plan.image}
            onCheckout={handleCheckout}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  );
};