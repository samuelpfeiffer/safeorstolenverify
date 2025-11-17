import { useState, useEffect } from 'react';
import { Clock, TrendingUp, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [liveCount, setLiveCount] = useState(1247);

  useEffect(() => {
    // Countdown timer for pricing urgency
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 48);

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${hours}h ${minutes}m`);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulate live user count increasing
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 3));
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-[80px] z-40 w-full">
      <Card className="mx-auto max-w-7xl border-sos-orange/30 bg-gradient-to-r from-sos-orange/10 via-card to-sos-lime/10 backdrop-blur-lg">
        <div className="flex flex-wrap items-center justify-center gap-6 py-3 px-4 text-sm">
          {/* Limited Time Pricing */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-sos-orange animate-pulse" />
            <span className="font-semibold text-foreground">
              48-Hour Special:
            </span>
            <span className="text-muted-foreground">
              $2.99 verification
            </span>
            <span className="text-xs text-sos-orange font-bold">
              ({timeLeft} left)
            </span>
          </div>

          <div className="h-4 w-px bg-border hidden sm:block" />

          {/* Social Proof - Live Activity */}
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-sos-lime" />
            <span className="font-semibold text-foreground">
              {liveCount.toLocaleString()} people
            </span>
            <span className="text-muted-foreground">
              verified items today
            </span>
          </div>

          <div className="h-4 w-px bg-border hidden sm:block" />

          {/* Trending */}
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-sos-orange" />
            <span className="text-xs text-muted-foreground">
              🔥 <strong>Trending:</strong> iPhone 15 verifications +347% this week
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};
