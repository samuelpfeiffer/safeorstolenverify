
import { ReactNode } from 'react';
import { AuthProvider } from '@/lib/auth';
import { Toaster } from '@/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthErrorBoundary } from '@/components/auth/AuthErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

interface AppWrapperProps {
  children: ReactNode;
}

export const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <AuthErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </AuthErrorBoundary>
  );
};
