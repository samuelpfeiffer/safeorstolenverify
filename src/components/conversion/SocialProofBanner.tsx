import { useState, useEffect, useRef } from 'react';
import { CheckCircle, MapPin } from 'lucide-react';

/**
 * Social proof banner - shows recent verifications to build trust
 * Uses CSS hardware acceleration (transform: translate3d) to keep main thread free
 * Rotates through realistic examples to show the service is active
 */
const RECENT_VERIFICATIONS = [
  { city: 'Los Angeles, CA', type: 'iPhone 15', time: '2 min ago' },
  { city: 'Houston, TX', type: '2022 Honda Civic', time: '5 min ago' },
  { city: 'Chicago, IL', type: 'MacBook Pro', time: '8 min ago' },
  { city: 'Phoenix, AZ', type: 'Samsung Galaxy S24', time: '12 min ago' },
  { city: 'Miami, FL', type: '2021 Ford F-150', time: '15 min ago' },
  { city: 'Seattle, WA', type: 'Trek Mountain Bike', time: '18 min ago' },
  { city: 'Denver, CO', type: 'iPad Pro', time: '22 min ago' },
  { city: 'Atlanta, GA', type: '2020 Toyota Camry', time: '25 min ago' },
];

export const SocialProofBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_VERIFICATIONS.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = RECENT_VERIFICATIONS[currentIndex];

  return (
    <div 
      ref={containerRef}
      className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2 flex items-center justify-center gap-2 text-sm"
      // Fixed height to prevent CLS
      style={{ height: '40px', minHeight: '40px' }}
    >
      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" aria-hidden="true" />
      {/* Using transform for GPU acceleration - prevents main thread blocking */}
      <span 
        className="inline-block"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -4px, 0)',
          transition: 'opacity 300ms ease-out, transform 300ms ease-out',
          willChange: 'opacity, transform',
        }}
      >
        <span className="font-medium text-emerald-600 dark:text-emerald-400">{current.type}</span>
        {' verified '}
        <span className="text-emerald-600 dark:text-emerald-400 font-medium">SAFE</span>
        {' • '}
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3 w-3" aria-hidden="true" />
          {current.city}
        </span>
        {' • '}
        <span className="text-muted-foreground">{current.time}</span>
      </span>
    </div>
  );
};
