import React from 'react';
import { Loader2 } from 'lucide-react';

export const AppLoadingFallback: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="relative">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
          <div className="absolute inset-0 h-8 w-8 rounded-full border-2 border-primary/20 mx-auto"></div>
        </div>
        <p className="text-sm text-muted-foreground font-medium">Loading application...</p>
        <div className="w-48 h-1 bg-border rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};