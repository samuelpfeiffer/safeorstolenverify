
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/core/providers/ThemeProvider';
import { AppRoutes } from '@/core/routing/AppRoutes';
import { SecureAuthProvider } from '@/hooks/useSecureAuth';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App(): React.ReactElement {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <SecureAuthProvider>
          <ThemeProvider>
            <Router>
              <div className="min-h-screen bg-sos text-white antialiased">
                <AppRoutes />
                <Toaster />
              </div>
            </Router>
          </ThemeProvider>
        </SecureAuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
