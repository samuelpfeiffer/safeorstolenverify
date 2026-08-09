import React from 'react';
import { Shield, Clock, CheckCircle, Database, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VerificationStatsProps {
  variant?: 'horizontal' | 'grid' | 'compact';
  className?: string;
}

const STATS = [
  { icon: Database, value: '100+', label: 'Databases Checked', color: 'text-primary' },
  { icon: Clock, value: '3s', label: 'Average Check Time', color: 'text-secondary' },
  { icon: CheckCircle, value: '6', label: 'Item Categories', color: 'text-sos-lime' },
  { icon: Shield, value: '100%', label: 'Data Encrypted', color: 'text-primary' },
];

export const VerificationStats: React.FC<VerificationStatsProps> = ({ 
  variant = 'horizontal',
  className 
}) => {
  if (variant === 'compact') {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-4", className)}>
        {STATS.slice(0, 3).map((stat, index) => (
          <div key={index} className="flex items-center gap-2">
            <stat.icon className={cn("h-4 w-4", stat.color)} />
            <span className="font-bold">{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
        {STATS.map((stat, index) => (
          <div 
            key={index}
            className="text-center p-4 bg-card border border-border rounded-lg"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
              <stat.icon className={cn("h-6 w-6", stat.color)} />
            </div>
            <div className={cn("text-2xl font-bold mb-1", stat.color)}>{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    );
  }

  // Horizontal variant
  return (
    <div className={cn("flex flex-wrap justify-center items-center gap-8 py-4", className)}>
      {STATS.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={cn("text-2xl md:text-3xl font-bold", stat.color)}>{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
