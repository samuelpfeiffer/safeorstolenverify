import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import { SOSFooter } from '@/components/layout/SOSFooter';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ThemeProvider } from '@/core/providers/ThemeProvider';
import { AppRoutes } from '@/core/routing/AppRoutes';
import { RouteErrorRecovery } from '@/core/routing/RouteErrorRecovery';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import { AuthProvider } from '@/lib/auth';
import { PWAProvider } from '@/core/providers/PWAProvider';
import { PWAInstallBanner } from '@/components/pwa/PWAInstallBanner';
import { AppDownloadBot } from '@/components/pwa/AppDownloadBot';
import { MasterSEO } from '@/components/seo/MasterSEO';
import { EnhancedStructuredData } from '@/components/seo/EnhancedStructuredData';
import { PerformanceMonitor } from '@/components/seo/PerformanceMonitor';
import { SpeedOptimizer } from '@/components/performance/SpeedOptimizer';
import { CriticalCSSInline } from '@/components/seo/CriticalCSSInline';

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
 * App Root Component - Optimized for Performance
 */
export const AppRoot: React.FC = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary>
              <AuthProvider>
                <PWAProvider>
                  <ThemeProvider>
                    <Router>
                      <CriticalCSSInline />
                      <SpeedOptimizer />
                      <MasterSEO />
                      <EnhancedStructuredData />
                      <PerformanceMonitor />
                      <div className="min-h-screen bg-background text-foreground flex flex-col">
                        <TopNavigation />
                        <BreadcrumbSchema />
                        <main className="flex-1 pt-20">
                          <RouteErrorRecovery>
                            <Suspense fallback={<AppLoadingScreen />}>
                              <AppRoutes />
                            </Suspense>
                          </RouteErrorRecovery>
                        </main>
                        <SOSFooter />
                      </div>
                      <PWAInstallBanner />
                      <AppDownloadBot />
                      <Toaster />
                    </Router>
                  </ThemeProvider>
                </PWAProvider>
              </AuthProvider>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </QueryClientProvider>
    </HelmetProvider>
  );
};