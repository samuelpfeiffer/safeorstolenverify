/**
 * @deprecated This component uses the legacy multi-tier pricing structure.
 * Use ConversionOptimizedPricing component instead for the new Free + Unlimited model.
 * Keeping for backward compatibility only.
 */
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

  // Simplified to just show the Unlimited plan for legacy compatibility
  const plans = [
    {
      ...SUBSCRIPTION_TIERS.unlimited,
      price: SUBSCRIPTION_TIERS.unlimited.priceDisplay,
      priceId: SUBSCRIPTION_TIERS.unlimited.stripePriceId!,
      period: 'month',
      image: "https://i.imgur.com/6Mvijcm.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
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