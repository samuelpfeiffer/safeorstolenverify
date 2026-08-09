import React from 'react';
import { Shield, Lock, CheckCircle, Award, Database, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SitewideCredibilityBarProps {
  className?: string;
}

/**
 * Compact credibility bar designed to be placed on every page
 * Shows key trust signals without taking up too much space
 */
export const SitewideCredibilityBar: React.FC<SitewideCredibilityBarProps> = ({ className }) => {
  const signals = [
    { icon: Database, text: '50+ Databases', highlight: true },
    { icon: Zap, text: '3-Second Checks' },
    { icon: Lock, text: '256-bit SSL' },
    { icon: CheckCircle, text: '6 Item Categories' },
    { icon: Award, text: 'SOC 2 Compliant' },
  ];

  return (
    <div className={cn(
      "bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 border-y border-border py-2.5",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Trusted Verification
          </span>
          <div className="h-4 w-px bg-border hidden md:block" />
          {signals.map((signal, index) => (
            <div 
              key={index}
              className={cn(
                "flex items-center gap-1.5 text-xs",
                signal.highlight ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              <signal.icon className={cn(
                "h-3.5 w-3.5",
                signal.highlight ? "text-primary" : "text-muted-foreground"
              )} />
              <span>{signal.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
