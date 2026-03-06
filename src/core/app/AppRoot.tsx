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
import { AppDownloadBot } from '@/components/pwa/AppDownloadBot';
import { RedirectHandler } from '@/components/routing/RedirectHandler';
// AISafetyAdvisor removed — replaced by AIFloatingChat
import { AIFloatingChat } from '@/components/ai/AIFloatingChat';

// Lazy load SEO components - NOT needed for initial render/LCP
const GlobalAISEO = React.lazy(() => import('@/components/seo/GlobalAISEO').then(m => ({ default: m.GlobalAISEO })));
const DomainAuthorityBooster = React.lazy(() => import('@/components/seo/DomainAuthorityBooster').then(m => ({ default: m.DomainAuthorityBooster })));
const EEATSignals = React.lazy(() => import('@/components/seo/EEATSignals').then(m => ({ default: m.EEATSignals })));
const AdvancedSchemaGenerator = React.lazy(() => import('@/components/seo/AdvancedSchemaGenerator').then(m => ({ default: m.AdvancedSchemaGenerator })));

// Lazy load non-critical growth/conversion components for better performance
// Note: SocialProofBanner, StickyMobileAppCTA, AggressiveConversionBanner removed to fix CLS on mobile
const ExitIntentPopup = React.lazy(() => import('@/components/growth').then(m => ({ default: m.ExitIntentPopup })));
const LiveActivityToast = React.lazy(() => import('@/components/growth').then(m => ({ default: m.LiveActivityToast })));
const TrafficBooster = React.lazy(() => import('@/components/traffic/TrafficBooster').then(m => ({ default: m.TrafficBooster })));

// Marketing components for conversion
const FloatingCTA = React.lazy(() => import('@/components/marketing/FloatingCTA').then(m => ({ default: m.FloatingCTA })));
const StickyConversionBar = React.lazy(() => import('@/components/conversion/StickyConversionBar').then(m => ({ default: m.StickyConversionBar })));

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
  const [showSEOComponents, setShowSEOComponents] = useState(false);
  const [_showAIChat, _setShowAIChat] = useState(false);
  const [authTimeout, setAuthTimeout] = useState(false);
  
  // Delay loading SEO components by 1.5 seconds - they don't affect LCP
  useEffect(() => {
    const seoTimer = setTimeout(() => {
      setShowSEOComponents(true);
    }, 1500);
    return () => clearTimeout(seoTimer);
  }, []);
  
  // Delay loading growth/conversion components by 5 seconds to improve CLS and mobile performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGrowthComponents(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  
  // Auth timeout - show content after 800ms even if auth isn't ready
  // Reduced from 2s to improve LCP - prevents stuck loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAuthTimeout(true);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);
  
  // Bypass loading screen for:
  // 1. Checkout routes (they handle their own auth)
  // 2. After 2 second timeout (prevents stuck loading)
  // 3. When auth is ready
  const isCheckoutRoute = window.location.pathname.includes('checkout');
  const authReady = initialized && !loading;
  
  if (!isCheckoutRoute && !authTimeout && !authReady) {
    return <AppLoadingScreen />;
  }
  
  return (
    <GA4Provider>
      <PWAProvider>
        <MasterSEO />
        <RedirectHandler />
        <CriticalResourceLoader />
        
        {/* Lazy load SEO meta components - not needed for LCP */}
        {showSEOComponents && (
          <Suspense fallback={null}>
            <GlobalAISEO />
            <DomainAuthorityBooster />
            <EEATSignals />
            <AdvancedSchemaGenerator />
          </Suspense>
        )}
        
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
        {/* AppDownloadBot removed — overlaps with AIFloatingChat. PWA install available via /app page and PWAInstallManager */}
        <MobileNavigation />
        {/* AISafetyAdvisor removed — replaced by AIFloatingChat */}
        
        {/* AI Floating Chat - replaces old button + modal */}
        <AIFloatingChat />
        
        {/* Lazy load growth/conversion components after 5 second delay */}
        {/* Removed SocialProofBanner (handled in Index.tsx), StickyMobileAppCTA, AggressiveConversionBanner to fix CLS */}
        {showGrowthComponents && (
          <Suspense fallback={null}>
            <ExitIntentPopup />
            <LiveActivityToast />
            <FloatingCTA />
            <StickyConversionBar />
          </Suspense>
        )}
        
        <Toaster />
      </PWAProvider>
    </GA4Provider>
  );
};

export const AppRoot: React.FC = () => {
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
