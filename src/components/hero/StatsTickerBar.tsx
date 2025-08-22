
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Shield, Users, Database } from 'lucide-react';

const stats = [
  {
    icon: Users,
    label: 'Users Protected',
    value: 'Growing',
    color: 'text-sos-lime'
  },
  {
    icon: Database,
    label: 'Database Searches',
    value: 'Multi-Source',
    color: 'text-sos-orange'
  },
  {
    icon: Shield,
    label: 'Verification',
    value: 'Comprehensive',
    color: 'text-green-400'
  },
  {
    icon: TrendingUp,
    label: 'Protection',
    value: 'Continuous',
    color: 'text-blue-400'
  }
];

export const StatsTickerBar: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-card/20 backdrop-blur-sm border border-border/20 rounded-2xl p-6 mb-12">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 animate-slideUp" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`p-2 rounded-lg bg-card/40 ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <div>
              <div className={`text-lg font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sos-orange/20 via-sos-lime/20 to-sos-orange/20 opacity-50 animate-pulse"></div>
    </div>
  );
};
