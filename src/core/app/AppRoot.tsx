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

// Enterprise QueryClient configuration
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
 * Championship-Grade App Root Component
 * Built to NASA-level standards for absolute reliability
 */
export const AppRoot: React.FC = () => {
  // Ensure React is properly initialized
  const [isReactReady, setIsReactReady] = React.useState(false);

  React.useEffect(() => {
    // Verify React context
    if (typeof React.createElement === 'function') {
      setIsReactReady(true);
    }
  }, []);

  if (!isReactReady) {
    return (
      <div className="min-h-screen bg-sos flex items-center justify-center text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange mx-auto mb-4"></div>
          <p>Initializing Application...</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary fallback={
      <div className="min-h-screen bg-sos flex items-center justify-center text-white">
        <div className="text-center max-w-md p-8">
          <h2 className="text-xl font-semibold mb-4">Application Error</h2>
          <p className="text-gray-300 mb-6">Please refresh the page to continue.</p>
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