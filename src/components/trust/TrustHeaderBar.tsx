import React from 'react';
import { Shield, Lock, Globe } from 'lucide-react';

export const TrustHeaderBar: React.FC = () => {
  return (
    <div className="bg-muted/50 border-b border-border/50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {[
            { icon: Shield, text: 'Verified Secure' },
            { icon: Lock, text: '256-bit SSL Encrypted' },
            { icon: Globe, text: 'Trusted Across 50 States' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <item.icon className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
