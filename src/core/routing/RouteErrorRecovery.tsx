import React, { useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

/**
 * Route Error Recovery Component
 * Handles React context errors and HMR-related failures
 */
export const RouteErrorRecovery: React.FC<Props> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | undefined>();
  const [errorCount, setErrorCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      const err = event.error;
      console.error('RouteErrorRecovery caught an error:', err);
      
      const isContextError = err?.message?.includes('useContext') || 
                            err?.message?.includes('Cannot read properties of null') ||
                            err?.message?.includes('reading \'useContext\'');
      
      // Auto-reload on first context error in development
      // Use queueMicrotask to defer state updates until after render
      if (isContextError && errorCount === 0 && import.meta.env.DEV) {
        console.warn('React context error detected - triggering automatic reload...');
        queueMicrotask(() => {
          setErrorCount(1);
          setTimeout(() => {
            window.location.reload();
          }, 500);
        });
      } else {
        // Defer other error state updates as well to prevent setState during render
        queueMicrotask(() => {
          setHasError(true);
          setError(err);
        });
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [errorCount]);

  const handleManualReload = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    navigate('/');
  };

  if (hasError) {
    const isContextError = error?.message?.includes('useContext') || 
                          error?.message?.includes('Cannot read properties of null');

    // Show loading state briefly before auto-reload
    if (isContextError && errorCount === 0 && import.meta.env.DEV) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
            <p className="text-muted-foreground">Recovering from error...</p>
          </div>
        </div>
      );
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-md w-full space-y-6 text-center">
            <div className="flex justify-center">
              <AlertTriangle className="h-16 w-16 text-destructive" />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                {isContextError ? 'Page Loading Issue' : 'Something Went Wrong'}
              </h1>
              <p className="text-muted-foreground">
                {isContextError 
                  ? 'The page encountered a temporary issue during development. A quick reload should fix it.'
                  : 'An unexpected error occurred while loading this page.'}
              </p>
            </div>

        {error && import.meta.env.DEV && (
          <div className="bg-muted p-3 rounded-md text-left">
            <p className="text-xs font-mono text-muted-foreground break-all">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={handleManualReload}
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Reload Page
          </Button>
          <Button 
            onClick={handleGoHome}
            variant="outline"
            className="gap-2"
          >
            <Home className="h-4 w-4" />
            Go to Home
          </Button>
        </div>

        {import.meta.env.DEV && (
          <p className="text-xs text-muted-foreground">
            Development mode: Clear cache (Ctrl+Shift+R) if the issue persists
          </p>
        )}
      </div>
    </div>
    );
  }

  return children;
};
