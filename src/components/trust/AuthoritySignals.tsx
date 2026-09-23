import React from 'react';
import { Shield, Award, Lock, CheckCircle, Building, Users, Zap, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AuthoritySignalsProps {
  variant?: 'inline' | 'grid' | 'banner';
  className?: string;
}

const AUTHORITY_SIGNALS = [
  { icon: Lock, label: '256-bit SSL', description: 'Bank-grade encryption' },
  { icon: Award, label: 'multiple sources', description: 'Law enforcement and insurance sources' },
  { icon: Building, label: 'US-Based', description: 'Peoria, Arizona headquarters' },
  { icon: Users, label: '10,000+ Users', description: 'Trusted by buyers & sellers' },
  { icon: Globe, label: 'All 50 States', description: 'Nationwide coverage' },
];

export const AuthoritySignals: React.FC<AuthoritySignalsProps> = ({ 
  variant = 'inline',
  className 
}) => {
  if (variant === 'inline') {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-4 py-3", className)}>
        {AUTHORITY_SIGNALS.slice(0, 4).map((signal, index) => (
          <div key={index} className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <signal.icon className="h-4 w-4 text-secondary" />
            <span className="font-medium">{signal.label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className={cn("bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10 border-y border-border py-4", className)}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {AUTHORITY_SIGNALS.map((signal, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-sm"
              >
                <signal.icon className="h-4 w-4 text-secondary" />
                <span className="font-medium text-foreground">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Grid variant
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-4", className)}>
      {AUTHORITY_SIGNALS.map((signal, index) => (
        <div 
          key={index}
          className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg"
        >
          <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
            <signal.icon className="h-5 w-5 text-secondary" />
          </div>
          <div>
            <div className="font-semibold text-sm">{signal.label}</div>
            <div className="text-xs text-muted-foreground">{signal.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
