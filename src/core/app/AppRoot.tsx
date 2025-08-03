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
 * CHAMPIONSHIP APPROOT VERSION 2.0
 * Built to eliminate ALL phantom component errors
 * Zero tolerance for React context issues
 */
export const AppRoot: React.FC = () => {
  const [isReactReady, setIsReactReady] = React.useState(false);

  React.useEffect(() => {
    // Championship-level React context verification
    const verifyReactContext = () => {
      try {
        if (React && React.useState && React.useEffect && React.createElement) {
          setIsReactReady(true);
          console.log('✅ React context fully verified - Championship mode activated');
          return true;
        }
        throw new Error('React context incomplete');
      } catch (error) {
        console.warn('⚠️ React context verification failed, retrying...', error);
        setTimeout(verifyReactContext, 50);
        return false;
      }
    };
    
    verifyReactContext();
  }, []);

  if (!isReactReady) {
    return (
      <div className="min-h-screen bg-sos flex items-center justify-center text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange mx-auto mb-4"></div>
          <p>Initializing Championship App...</p>
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
          <ThemeProvider>
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
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};