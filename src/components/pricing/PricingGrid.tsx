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
      period: 'per check',
      image: "https://i.imgur.com/6Mvijcm.png"
    },
    {
      ...SUBSCRIPTION_TIERS.entryLevel,
      price: formatPrice(SUBSCRIPTION_TIERS.entryLevel.price),
      priceId: SUBSCRIPTION_TIERS.entryLevel.stripePriceId!,
      period: 'month',
      image: "https://i.imgur.com/6Mvijcm.png"
    },
    {
      ...SUBSCRIPTION_TIERS.basic,
      price: formatPrice(SUBSCRIPTION_TIERS.basic.price),
      priceId: SUBSCRIPTION_TIERS.basic.stripePriceId!,
      period: 'month',
      image: "https://i.imgur.com/6Mvijcm.png"
    },
    {
      ...SUBSCRIPTION_TIERS.premium,
      price: formatPrice(SUBSCRIPTION_TIERS.premium.price),
      priceId: SUBSCRIPTION_TIERS.premium.stripePriceId!,
      period: 'month',
      image: "https://i.imgur.com/6Mvijcm.png"
    },
    {
      ...SUBSCRIPTION_TIERS.enterprise,
      price: formatPrice(SUBSCRIPTION_TIERS.enterprise.price),
      priceId: SUBSCRIPTION_TIERS.enterprise.stripePriceId!,
      period: 'month',
      image: "https://i.imgur.com/6Mvijcm.png"
    },
    {
      ...SUBSCRIPTION_TIERS.report,
      price: formatPrice(SUBSCRIPTION_TIERS.report.price),
      priceId: SUBSCRIPTION_TIERS.report.stripePriceId!,
      period: 'per report',
      image: "https://i.imgur.com/6Mvijcm.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-xl text-muted-foreground">Get started with verification services that fit your needs</p>
        <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 rounded">
          <p className="text-sm">Debug: Check browser console for subscription flow logs</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-full mx-auto">
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