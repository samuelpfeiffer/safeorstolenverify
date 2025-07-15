import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { CoreProviders } from '@/core/providers/CoreProviders';
import { AppRoutes } from '@/core/routing/AppRoutes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <CoreProviders>
          <AppRoutes />
          <Toaster />
        </CoreProviders>
      </Router>
    </QueryClientProvider>
  );
}

export default App;