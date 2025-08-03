// CHAMPIONSHIP APPROOT VERSION 2.0 - FULLY CACHE BUSTED
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';

import { AppRoutes } from '@/core/routing/AppRoutes';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import { SEOProvider } from '@/core/providers/SEOProvider';
import { AuthProvider } from '@/lib/auth';
import { SafeProviderWrapper } from '@/core/providers/SafeProviderWrapper';

// Championship-grade QueryClient
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
 * CHAMPIONSHIP APPROOT VERSION 4.0 - SIMPLIFIED
 * Removed problematic React readiness checks that violated Rules of Hooks
 */
export const AppRoot: React.FC = () => {

  return (
    <ErrorBoundary fallback={
      <div className="min-h-screen bg-sos flex items-center justify-center text-white">
        <div className="text-center max-w-md p-8">
          <h2 className="text-xl font-semibold mb-4">Application Error</h2>
          <p className="text-gray-300 mb-6">Please refresh to continue.</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-sos-orange hover:bg-sos-orange/90 text-white rounded-lg transition-colors"
          >
            Refresh Application
          </button>
        </div>
      </div>
    }>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <SafeProviderWrapper>
            <AuthProvider>
              <SEOProvider>
                <Router>
                  <div className="min-h-screen bg-sos text-white antialiased">
                    <React.Suspense fallback={<AppLoadingScreen />}>
                      <AppRoutes />
                    </React.Suspense>
                    <Toaster />
                  </div>
                </Router>
              </SEOProvider>
            </AuthProvider>
          </SafeProviderWrapper>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};