import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { ThemeProvider } from '@/core/providers/ThemeProvider';
import { AppRoutes } from '@/core/routing/AppRoutes';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import { AuthProvider } from '@/lib/auth';
import { GlobalAnalytics } from '@/components/enhanced/GlobalAnalytics';
import { OptimizedLCPLoader } from '@/components/performance/OptimizedLCPLoader';
import { PWAProvider } from '@/core/providers/PWAProvider';
import { PWAInstallBanner } from '@/components/pwa/PWAInstallBanner';
import { AppDownloadBot } from '@/components/pwa/AppDownloadBot';
import { MasterSEO } from '@/components/seo/MasterSEO';
import { CompetitiveAnalytics } from '@/components/seo/CompetitiveAnalytics';
import { SEOEnhancements } from '@/components/seo/SEOEnhancements';

// Enhanced QueryClient configuration for enterprise performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: (failureCount, error: any) => {
        if (error?.status === 404) return false;
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: 'always',
    },
    mutations: {
      retry: (failureCount, error: any) => {
        if (error?.status >= 400 && error?.status < 500) return false;
        return failureCount < 2;
      },
    },
  },
});

/**
 * Enterprise-grade App Root Component
 * Provides complete application infrastructure with security, performance, and reliability
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
                  <div className="min-h-screen bg-sos text-white antialiased">
                    <MasterSEO />
                    <CompetitiveAnalytics />
                    <SEOEnhancements />
                    <GlobalAnalytics />
                    <OptimizedLCPLoader />
                    <Suspense fallback={<AppLoadingScreen />}>
                      <AppRoutes />
                    </Suspense>
                    <PWAInstallBanner />
                    <AppDownloadBot />
                    <Toaster />
                  </div>
                </Router>
              </ThemeProvider>
            </PWAProvider>
          </AuthProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};