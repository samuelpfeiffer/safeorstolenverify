import React, { Suspense } from 'react';
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
import { AppDownloadBot } from '@/components/pwa/AppDownloadBot';
import { SchemaValidationMonitor, SchemaValidationIndicator } from '@/components/seo/SchemaValidationMonitor';
import { RedirectHandler } from '@/components/routing/RedirectHandler';
import { AISafetyAdvisor } from '@/components/ai/AISafetyAdvisor';
import { AdvancedSchemaGenerator } from '@/components/seo/AdvancedSchemaGenerator';
import { ExitIntentPopup, SocialProofBanner, StickyMobileAppCTA, UrgencyBanner } from '@/components/growth';

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
 */
const AuthAwareContent: React.FC = () => {
  const { loading, initialized } = useAuth();
  
  if (!initialized || loading) {
    return <AppLoadingScreen />;
  }
  
  return (
    <GA4Provider>
      <PWAProvider>
        <MasterSEO />
        <GlobalAISEO />
        <AdvancedSchemaGenerator />
        <RedirectHandler />
        <SchemaValidationMonitor />
        <CriticalResourceLoader />
        
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <UrgencyBanner />
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
        <ExitIntentPopup />
        <SocialProofBanner />
        <StickyMobileAppCTA />
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
