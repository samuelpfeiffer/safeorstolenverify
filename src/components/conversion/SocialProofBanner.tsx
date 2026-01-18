import { useState, useEffect } from 'react';
import { CheckCircle, MapPin } from 'lucide-react';

/**
 * Social proof banner - shows recent verifications to build trust
 * Rotates through realistic examples to show the service is active
 */
const RECENT_VERIFICATIONS = [
  { city: 'Los Angeles, CA', type: 'iPhone 15', time: '2 min ago', status: 'safe' },
  { city: 'Houston, TX', type: '2022 Honda Civic', time: '5 min ago', status: 'safe' },
  { city: 'Chicago, IL', type: 'MacBook Pro', time: '8 min ago', status: 'safe' },
  { city: 'Phoenix, AZ', type: 'Samsung Galaxy S24', time: '12 min ago', status: 'safe' },
  { city: 'Miami, FL', type: '2021 Ford F-150', time: '15 min ago', status: 'safe' },
  { city: 'Seattle, WA', type: 'Trek Mountain Bike', time: '18 min ago', status: 'safe' },
  { city: 'Denver, CO', type: 'iPad Pro', time: '22 min ago', status: 'safe' },
  { city: 'Atlanta, GA', type: '2020 Toyota Camry', time: '25 min ago', status: 'safe' },
];

export const SocialProofBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2 flex items-center justify-center gap-2 text-sm">
      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
      <span 
        className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="font-medium text-emerald-600 dark:text-emerald-400">{current.type}</span>
        {' verified '}
        <span className="text-emerald-600 dark:text-emerald-400 font-medium">SAFE</span>
        {' • '}
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {current.city}
        </span>
        {' • '}
        <span className="text-muted-foreground">{current.time}</span>
      </span>
    </div>
  );
};
