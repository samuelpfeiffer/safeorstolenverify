import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Dev tools import removed to avoid dependency issues
import { AuthProvider } from '@/lib/auth';
import { Toaster } from '@/components/ui/toaster';
import { AuthErrorBoundary } from '@/components/auth/AuthErrorBoundary';
import { ScrollRestoration } from '@/components/ScrollRestoration';
import { PWAProvider } from '@/core/providers/PWAProvider';
import { PerformanceProvider } from '@/core/providers/PerformanceProvider';

// Optimized query client configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: (failureCount, error: any) => {
        // Don't retry on 4xx errors except 408, 429
        if (error?.status >= 400 && error?.status < 500 && ![408, 429].includes(error?.status)) {
          return false;
        }
        return failureCount < 3;
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
      refetchOnReconnect: 'always',
    },
    mutations: {
      retry: (failureCount, error: any) => {
        // Don't retry mutations on client errors
        if (error?.status >= 400 && error?.status < 500) {
          return false;
        }
        return failureCount < 2;
      },
    },
  },
});

interface CoreProvidersProps {
  children: React.ReactNode;
}

export const CoreProviders: React.FC<CoreProvidersProps> = ({ children }) => {
  return (
    <PerformanceProvider>
      <PWAProvider>
        <AuthErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <ScrollRestoration />
                {children}
                <Toaster />
                {/* Dev tools removed for production build */}
            </AuthProvider>
          </QueryClientProvider>
        </AuthErrorBoundary>
      </PWAProvider>
    </PerformanceProvider>
  );
};