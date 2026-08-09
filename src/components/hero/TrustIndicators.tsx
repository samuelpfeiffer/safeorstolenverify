
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CheckCircle, Star, Shield, Award, Zap, Globe } from 'lucide-react';

const trustBadges = [
  {
    icon: CheckCircle,
    title: 'Real Database Integration',
    subtitle: 'Live police & insurance data',
    color: 'text-sos-lime',
    bgColor: 'bg-sos-lime/10'
  },
  {
    icon: Star,
    title: 'Law Enforcement Verified',
    subtitle: 'Trusted by 500+ agencies',
    color: 'text-sos-orange',
    bgColor: 'bg-sos-orange/10'
  },
  {
    icon: Shield,
    title: '6 Item Categories',
    subtitle: 'Phones, vehicles, plates, serials, firearms, bikes',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10'
  },
  {
    icon: Zap,
    title: 'Instant Verification',
    subtitle: 'Results in under 3 seconds',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10'
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    subtitle: '50+ countries supported',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10'
  }
];

export const TrustIndicators: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      {trustBadges.map((badge, index) => (
        <Card 
          key={index}
          className={`
            glass-effect p-4 hover:scale-105 transition-all duration-300 cursor-pointer
            border-border/20 hover:border-border/40 animate-slideUp
            ${badge.bgColor}
          `}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${badge.bgColor} ${badge.color}`}>
              <badge.icon className="h-5 w-5" />
            </div>
            <div>
              <div className={`font-semibold text-sm ${badge.color}`}>
                {badge.title}
              </div>
              <div className="text-xs text-muted-foreground">
                {badge.subtitle}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
