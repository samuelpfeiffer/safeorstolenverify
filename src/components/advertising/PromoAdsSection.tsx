import React from 'react';
import { OptimizedImage } from '@/components/performance/OptimizedImage';
import runningDeal from '@/assets/ads/running-deal.jpg';
import handshakeConfidence from '@/assets/ads/handshake-confidence.jpg';
import familyProtection from '@/assets/ads/family-protection.jpg';
import devilDeal from '@/assets/ads/devil-deal.jpg';
import firearmCheck from '@/assets/ads/firearm-check.jpg';

export const PromoAdsSection: React.FC = () => {
  const ads = [
    {
      src: runningDeal,
      alt: "Don't run away from making a good deal - verify items on SafeOrStolen.com"
    },
    {
      src: handshakeConfidence,
      alt: "Feel confident about the deals you make with SafeOrStolen.com verification"
    },
    {
      src: familyProtection,
      alt: "Protect yourself and your family when buying used goods with SafeOrStolen.com"
    },
    {
      src: devilDeal,
      alt: "Deal too good to be true? Better check it on SafeOrStolen.com"
    },
    {
      src: firearmCheck,
      alt: "Check used firearms before you buy on SafeOrStolen.com"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Why Verify Before You Buy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {ads.map((ad, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <OptimizedImage
                src={ad.src}
                alt={ad.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
