import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ThemeProvider } from '@/core/providers/ThemeProvider';
import { AuthProvider } from '@/lib/auth';
import { PWAProvider } from '@/core/providers/PWAProvider';
import { AppRoutes } from '@/core/routing/AppRoutes';
import { RouteErrorRecovery } from '@/core/routing/RouteErrorRecovery';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import TopNavigation from '@/components/TopNavigation';
import { SOSFooter } from '@/components/layout/SOSFooter';
import { PWAInstallManager } from '@/mobile/components/PWAInstallManager';
import { MobileNavigation } from '@/mobile/components/MobileNavigation';
import { CriticalResourceLoader } from '@/components/optimized/CriticalResourceLoader';
import { SearchParamBlocker } from '@/components/seo/SearchParamBlocker';
import { GA4Provider } from '@/components/seo/GA4Provider';

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
export const AppRoot: React.FC = () => {
  // Prevent rendering during HMR context transitions
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  
  // Show loading during HMR transitions
  if (!isMounted && import.meta.hot) {
    return <AppLoadingScreen />;
  }
  
  return (
    <ErrorBoundary>
      <Router>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <PWAProvider>
              <ThemeProvider>
                <GA4Provider>
                  <CriticalResourceLoader />
                  <SearchParamBlocker />
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
                  <MobileNavigation />
                  <Toaster />
                </GA4Provider>
              </ThemeProvider>
            </PWAProvider>
          </AuthProvider>
        </QueryClientProvider>
      </Router>
    </ErrorBoundary>
  );
};