import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { SUBSCRIPTION_TIERS, formatPrice } from '@/utils/pricing';
import { useSubscription } from '@/hooks/useSubscription';
import { toast } from 'sonner';

export const PricingGrid = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { createSubscriptionCheckout } = useSubscription();

  const handleCheckout = async (priceId: string) => {
    setIsLoading(true);
    try {
      const url = await createSubscriptionCheckout(priceId);
      
      if (url) {
        window.open(url, '_blank');
      } else {
        toast.error('Failed to create checkout session');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Failed to start checkout process');
    } finally {
      setIsLoading(false);
    }
  };

  const products = [
    {
      ...SUBSCRIPTION_TIERS.basic,
      price: formatPrice(SUBSCRIPTION_TIERS.basic.price),
      priceId: SUBSCRIPTION_TIERS.basic.stripePriceId!,
      image: "https://i.imgur.com/6Mvijcm.png"
    },
    {
      ...SUBSCRIPTION_TIERS.premium,
      price: formatPrice(SUBSCRIPTION_TIERS.premium.price),
      priceId: SUBSCRIPTION_TIERS.premium.stripePriceId!,
      image: "https://i.imgur.com/6Mvijcm.png"
    },
    {
      ...SUBSCRIPTION_TIERS.enterprise,
      price: formatPrice(SUBSCRIPTION_TIERS.enterprise.price),
      priceId: SUBSCRIPTION_TIERS.enterprise.stripePriceId!,
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
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.priceId}
            name={product.name}
            price={product.price}
            priceId={product.priceId}
            period={product.name === 'Certified Stolen/Legitimate Report' ? 'per report' : product.interval}
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