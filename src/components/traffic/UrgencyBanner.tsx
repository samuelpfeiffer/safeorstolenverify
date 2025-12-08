import React from 'react';
import { Shield, TrendingUp, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const UrgencyBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground py-2 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-4 md:gap-8 text-sm font-medium flex-wrap">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>🔍 Check ANY item before buying</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2 border-l border-white/30 pl-6">
            <TrendingUp className="h-4 w-4" />
            <span>2 FREE checks included</span>
          </div>
          
          <div className="flex items-center gap-2 border-l border-white/30 pl-4 md:pl-6">
            <Smartphone className="h-4 w-4" />
            <Button asChild size="sm" variant="secondary" className="h-6 text-xs px-3">
              <Link to="/app">Get FREE App</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
