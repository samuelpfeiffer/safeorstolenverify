// CHAMPIONSHIP APPROOT VERSION 2.0 - FULLY CACHE BUSTED
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { ThemeProvider } from '@/core/providers/ThemeProvider';
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
 * CHAMPIONSHIP APPROOT VERSION 3.0
 * Enhanced React readiness validation with dispatcher checks
 */
export const AppRoot: React.FC = () => {
  const [isReactReady, setIsReactReady] = React.useState(false);

  React.useEffect(() => {
    // Enhanced React context and dispatcher verification
    const verifyReactReadiness = () => {
      try {
        // Check React object and core hooks
        if (!React || !React.useState || !React.useEffect || !React.createElement) {
          throw new Error('React core functions missing');
        }

        // Verify React dispatcher is ready (this is the key fix)
        const dispatcher = (React as any).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentDispatcher?.current;
        if (!dispatcher) {
          throw new Error('React dispatcher not ready');
        }

        // Test hook execution safety
        const testState = React.useState(true);
        if (!Array.isArray(testState) || testState.length !== 2) {
          throw new Error('useState not functioning properly');
        }

        setIsReactReady(true);
        console.log('✅ React fully ready - Enhanced mode activated');
        return true;
      } catch (error) {
        console.warn('⚠️ React readiness check failed, retrying...', error);
        setTimeout(verifyReactReadiness, 25);
        return false;
      }
    };
    
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      verifyReactReadiness();
    });
  }, []);

  if (!isReactReady) {
    return (
      <div className="min-h-screen bg-sos flex items-center justify-center text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange mx-auto mb-4"></div>
          <p>Initializing React Context...</p>
        </div>
      </div>
    );
  }

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
            <ThemeProvider>
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
            </ThemeProvider>
          </SafeProviderWrapper>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};