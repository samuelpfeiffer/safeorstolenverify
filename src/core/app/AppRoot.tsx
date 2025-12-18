import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ThemeProvider } from '@/core/providers/ThemeProvider';
import { AuthProvider } from '@/lib/auth';
import { useAuth } from '@/lib/auth';
import { PWAProvider } from '@/core/providers/PWAProvider';
import { AppRoutes } from '@/core/routing/AppRoutes';
import { RouteErrorRecovery } from '@/core/routing/RouteErrorRecovery';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import TopNavigation from '@/components/TopNavigation';
import { SOSFooter } from '@/components/layout/SOSFooter';
import { PWAInstallManager } from '@/mobile/components/PWAInstallManager';
import { MobileNavigation } from '@/mobile/components/MobileNavigation';
import { CriticalResourceLoader } from '@/components/optimized/CriticalResourceLoader';

import { GA4Provider } from '@/components/seo/GA4Provider';
import { MasterSEO } from '@/components/seo/MasterSEO';
import { GlobalAISEO } from '@/components/seo/GlobalAISEO';
import { DomainAuthorityBooster } from '@/components/seo/DomainAuthorityBooster';
import { EEATSignals } from '@/components/seo/EEATSignals';
import { AppDownloadBot } from '@/components/pwa/AppDownloadBot';
import { SchemaValidationMonitor, SchemaValidationIndicator } from '@/components/seo/SchemaValidationMonitor';
import { RedirectHandler } from '@/components/routing/RedirectHandler';
import { AISafetyAdvisor } from '@/components/ai/AISafetyAdvisor';
import { AdvancedSchemaGenerator } from '@/components/seo/AdvancedSchemaGenerator';

// Lazy load non-critical growth/conversion components for better performance
const ExitIntentPopup = React.lazy(() => import('@/components/growth').then(m => ({ default: m.ExitIntentPopup })));
const SocialProofBanner = React.lazy(() => import('@/components/growth').then(m => ({ default: m.SocialProofBanner })));
const StickyMobileAppCTA = React.lazy(() => import('@/components/growth').then(m => ({ default: m.StickyMobileAppCTA })));
const LiveActivityToast = React.lazy(() => import('@/components/growth').then(m => ({ default: m.LiveActivityToast })));
const AggressiveConversionBanner = React.lazy(() => import('@/components/conversion/AggressiveConversionBanner').then(m => ({ default: m.AggressiveConversionBanner })));
const TrafficBooster = React.lazy(() => import('@/components/traffic/TrafficBooster').then(m => ({ default: m.TrafficBooster })));

// Optimized QueryClient configuration - MOVED OUTSIDE COMPONENT
// This prevents recreation on HMR and ensures stable React context
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: (failureCount, error: any) => {
        if (error?.status === 404) return false;
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * App Root Component - HMR Stable
 * StrictMode removed to prevent HMR useRef null errors
 */
/**
 * Auth-aware content wrapper - handles loading states
 * Checkout routes bypass loading screen for faster payment flow
 */
const AuthAwareContent: React.FC = () => {
  const { loading, initialized } = useAuth();
  const [showGrowthComponents, setShowGrowthComponents] = useState(false);
  
  // Delay loading growth/conversion components by 3 seconds for better initial performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGrowthComponents(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  // Bypass loading screen for checkout routes - they handle their own auth
  const isCheckoutRoute = window.location.pathname.includes('checkout');
  
  if (!isCheckoutRoute && (!initialized || loading)) {
    return <AppLoadingScreen />;
  }
  
  return (
    <GA4Provider>
      <PWAProvider>
        <MasterSEO />
        <GlobalAISEO />
        <DomainAuthorityBooster />
        <EEATSignals />
        <AdvancedSchemaGenerator />
        <RedirectHandler />
        <SchemaValidationMonitor />
        <CriticalResourceLoader />
        
        {/* Lazy load traffic booster after delay */}
        {showGrowthComponents && (
          <Suspense fallback={null}>
            <TrafficBooster />
          </Suspense>
        )}
        
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <TopNavigation />
          <main className="flex-1 pt-20">
            <RouteErrorRecovery>
              <Suspense fallback={<AppLoadingScreen />}>
                <AppRoutes />
              </Suspense>
            </RouteErrorRecovery>
          </main>
          <SOSFooter />
        </div>
        <PWAInstallManager />
        <AppDownloadBot />
        <MobileNavigation />
        <SchemaValidationIndicator />
        <AISafetyAdvisor />
        
        {/* Lazy load growth/conversion components after 3 second delay */}
        {showGrowthComponents && (
          <Suspense fallback={null}>
            <ExitIntentPopup />
            <SocialProofBanner />
            <StickyMobileAppCTA />
            <LiveActivityToast />
            <AggressiveConversionBanner />
          </Suspense>
        )}
        
        <Toaster />
      </PWAProvider>
    </GA4Provider>
  );
};

export const AppRoot: React.FC = () => {
  console.log('[AppRoot] ✓ Rendering application root');
  
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <ThemeProvider>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <AuthAwareContent />
              </AuthProvider>
            </QueryClientProvider>
          </ThemeProvider>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};
