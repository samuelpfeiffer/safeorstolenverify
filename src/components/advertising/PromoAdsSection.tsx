import React, { useEffect, useRef, useState } from 'react';
import { OptimizedImage } from '@/components/performance/OptimizedImage';
import runningDeal from '@/assets/ads/running-deal.jpg';
import handshakeConfidence from '@/assets/ads/handshake-confidence.jpg';
import familyProtection from '@/assets/ads/family-protection.jpg';
import devilDeal from '@/assets/ads/devil-deal.jpg';
import firearmCheck from '@/assets/ads/firearm-check.jpg';

export const PromoAdsSection: React.FC = () => {
  const [visibleAds, setVisibleAds] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animations
            ads.forEach((_, index) => {
              setTimeout(() => {
                setVisibleAds((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150); // 150ms delay between each ad
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Why Verify Before You Buy?
        </h2>
        <p className="text-center text-muted-foreground mb-12 animate-fade-in">
          Real protection for real purchases
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {ads.map((ad, index) => (
            <div 
              key={index}
              className={`
                rounded-xl overflow-hidden shadow-lg 
                transition-all duration-500 cursor-pointer
                hover:shadow-2xl hover:scale-110 hover:-rotate-2
                ${visibleAds[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="relative group">
                <OptimizedImage
                  src={ad.src}
                  alt={ad.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
