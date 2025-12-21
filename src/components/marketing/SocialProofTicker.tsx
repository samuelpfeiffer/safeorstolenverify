import React, { useState, useEffect } from 'react';
import { ShieldCheck, Users, TrendingUp, MapPin } from 'lucide-react';

interface Notification {
  id: number;
  type: 'verification' | 'signup' | 'alert';
  message: string;
  location: string;
  time: string;
}

const notifications: Notification[] = [
  { id: 1, type: 'verification', message: 'iPhone 15 Pro verified clean', location: 'Los Angeles, CA', time: '2 mins ago' },
  { id: 2, type: 'signup', message: 'New user joined', location: 'Miami, FL', time: '3 mins ago' },
  { id: 3, type: 'verification', message: 'Honda Civic VIN checked', location: 'Houston, TX', time: '4 mins ago' },
  { id: 4, type: 'alert', message: 'Stolen laptop flagged', location: 'New York, NY', time: '5 mins ago' },
  { id: 5, type: 'verification', message: 'MacBook Pro verified', location: 'Chicago, IL', time: '6 mins ago' },
  { id: 6, type: 'signup', message: 'Business account created', location: 'Phoenix, AZ', time: '7 mins ago' },
  { id: 7, type: 'verification', message: 'Samsung Galaxy checked', location: 'Philadelphia, PA', time: '8 mins ago' },
  { id: 8, type: 'alert', message: 'Stolen vehicle detected', location: 'San Antonio, TX', time: '9 mins ago' },
  { id: 9, type: 'verification', message: 'Tesla Model 3 VIN verified', location: 'San Diego, CA', time: '10 mins ago' },
  { id: 10, type: 'signup', message: 'Reseller verified items', location: 'Dallas, TX', time: '11 mins ago' },
];

export const SocialProofTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = notifications[currentIndex];

  const getIcon = () => {
    switch (current.type) {
      case 'verification':
        return <ShieldCheck className="h-4 w-4 text-secondary" />;
      case 'signup':
        return <Users className="h-4 w-4 text-primary" />;
      case 'alert':
        return <TrendingUp className="h-4 w-4 text-destructive" />;
    }
  };

  const getBgColor = () => {
    switch (current.type) {
      case 'verification':
        return 'bg-secondary/10 border-secondary/20';
      case 'signup':
        return 'bg-primary/10 border-primary/20';
      case 'alert':
        return 'bg-destructive/10 border-destructive/20';
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div 
        className={`
          ${getBgColor()} 
          border rounded-lg p-3 shadow-lg backdrop-blur-sm
          transition-all duration-300 max-w-xs
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            {getIcon()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              {current.message}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <MapPin className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{current.location}</span>
              <span className="text-xs text-muted-foreground">• {current.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
