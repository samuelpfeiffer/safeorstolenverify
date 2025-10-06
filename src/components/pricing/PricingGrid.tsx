import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { SUBSCRIPTION_TIERS, formatPrice } from '@/utils/pricing';
import { useSubscription } from '@/hooks/useSubscription';
import { toast } from 'sonner';
import { navigateOutOfIframe } from '@/utils/navigationUtils';

export const PricingGrid = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { createSubscriptionCheckout } = useSubscription();

  const handleCheckout = async (priceId: string) => {
    console.log('PricingGrid: handleCheckout called with priceId:', priceId);
    setIsLoading(true);
    try {
      console.log('PricingGrid: calling createSubscriptionCheckout...');
      const url = await createSubscriptionCheckout(priceId);
      console.log('PricingGrid: checkout URL received:', url);
      
      if (url) {
        console.log('PricingGrid: navigating to checkout URL');
        navigateOutOfIframe(url);
      } else {
        console.error('PricingGrid: no URL received from checkout');
        toast.error('Failed to create checkout session - no URL returned');
      }
    } catch (error) {
      console.error('PricingGrid: checkout error:', error);
      toast.error(`Failed to start checkout process: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const products = [
    {
      ...SUBSCRIPTION_TIERS.payPerCheck,
      price: formatPrice(SUBSCRIPTION_TIERS.payPerCheck.price),
      priceId: SUBSCRIPTION_TIERS.payPerCheck.stripePriceId!,
      period: 'per lookup',
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
      ...SUBSCRIPTION_TIERS.business,
      price: formatPrice(SUBSCRIPTION_TIERS.business.price),
      priceId: SUBSCRIPTION_TIERS.business.stripePriceId!,
      period: 'month',
      image: "https://i.imgur.com/6Mvijcm.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-xl text-muted-foreground">Select the perfect plan for your needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.priceId}
            name={product.name}
            price={product.price}
            priceId={product.priceId}
            period={product.period}
            features={product.features}
            popular={product.popular}
            image={product.image}
            onCheckout={handleCheckout}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  );
};