import React from 'react';
import { Shield, Lock, Award, CheckCircle, Star, Users } from 'lucide-react';

export const TrustBadgesStrip: React.FC = () => {
  const badges = [
    { icon: Shield, label: '256-bit SSL', color: 'text-secondary' },
    { icon: Lock, label: 'Bank-Grade Security', color: 'text-primary' },
    { icon: Award, label: 'OneValley Recognized', color: 'text-amber-500' },
    { icon: CheckCircle, label: 'SOC 2 Compliant', color: 'text-secondary' },
    { icon: Star, label: 'Trusted by 10,000+', color: 'text-primary' },
    { icon: Users, label: 'All 50 States', color: 'text-muted-foreground' },
  ];

  return (
    <div className="w-full bg-muted/30 border-y border-border py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <badge.icon className={`h-4 w-4 ${badge.color}`} />
              <span className="whitespace-nowrap">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
