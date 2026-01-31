import React from 'react';
import { Loader2 } from 'lucide-react';
import { Logo } from '@/components/common/Logo';

/**
 * Optimized Loading Screen - No animations that cause CLS
 * Fixed dimensions prevent layout shift
 */
export const AppLoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {/* SEO-Friendly Content (Hidden from view but visible to crawlers) */}
      <div className="sr-only">
        <h1>SafeOrStolen - Verify Serial Numbers, IMEI, and VIN Numbers</h1>
        <p>Check if phones, electronics, and vehicles are stolen before you buy.</p>
        <nav>
          <a href="/">Home</a>
          <a href="/verify">Verify Items</a>
          <a href="/pricing">Pricing</a>
        </nav>
      </div>
      
      {/* Visible Loading Screen - Fixed dimensions to prevent CLS */}
      <div className="text-center w-80 h-48 flex flex-col items-center justify-center">
        {/* Logo with fixed size */}
        <div className="w-24 h-24 flex items-center justify-center mb-4">
          <Logo size="xl" linkTo={null} />
        </div>
        
        {/* Loading Spinner - fixed height */}
        <div className="flex items-center justify-center h-10">
          <Loader2 className="h-6 w-6 text-primary animate-spin mr-2" />
          <span className="text-lg font-medium text-foreground">Loading...</span>
        </div>
        
        {/* Static progress bar - NO animation to prevent CLS */}
        <div className="w-full mt-4 h-1.5">
          <div className="bg-muted rounded-full h-full overflow-hidden">
            <div className="bg-primary h-full w-3/4 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};