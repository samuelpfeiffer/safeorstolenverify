import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import { SOSFooter } from '@/components/layout/SOSFooter';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { ThemeProvider } from '@/core/providers/ThemeProvider';
import { AppRoutes } from '@/core/routing/AppRoutes';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import { AuthProvider } from '@/lib/auth';
import { PWAProvider } from '@/core/providers/PWAProvider';
import { PWAInstallBanner } from '@/components/pwa/PWAInstallBanner';
import { AppDownloadBot } from '@/components/pwa/AppDownloadBot';
import { MasterSEO } from '@/components/seo/MasterSEO';

// Optimized QueryClient configuration
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
    <ErrorBoundary fallback={<div className="min-h-screen bg-sos flex items-center justify-center text-white">Application Error - Please Refresh</div>}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <PWAProvider>
              <ThemeProvider>
                <Router>
                  <MasterSEO />
                  <div className="min-h-screen bg-background text-foreground flex flex-col">
                    <TopNavigation />
                    <BreadcrumbSchema />
                    <main className="flex-1 pt-20">
                      <Suspense fallback={<AppLoadingScreen />}>
                        <AppRoutes />
                      </Suspense>
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
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};