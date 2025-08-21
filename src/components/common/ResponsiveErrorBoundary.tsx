import React from 'react';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface ResponsiveErrorFallbackProps {
  error?: Error;
  resetError?: () => void;
  title?: string;
  description?: string;
}

const ResponsiveErrorFallback: React.FC<ResponsiveErrorFallbackProps> = ({
  error,
  resetError,
  title = "Something went wrong",
  description = "An unexpected error occurred. Please try refreshing or go back to home."
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-sos">
      <Card className="max-w-md w-full mx-auto bg-sos-dark border-sos-orange/20">
        <CardContent className="p-6 text-center space-y-4">
          <AlertTriangle className="h-12 w-12 mx-auto text-sos-orange" />
          <div>
            <h3 className="font-semibold mb-2 text-white text-lg">{title}</h3>
            <p className="text-sm text-gray-300 mb-6">
              {error?.message || description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {resetError && (
                <Button onClick={resetError} variant="outline" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>
              )}
              <Button 
                onClick={() => navigate('/')} 
                className="bg-sos-orange hover:bg-sos-orange/90 gap-2"
              >
                <Home className="h-4 w-4" />
                Go Home
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface ResponsiveErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<ResponsiveErrorFallbackProps>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

export const ResponsiveErrorBoundary: React.FC<ResponsiveErrorBoundaryProps> = ({
  children,
  fallback: FallbackComponent = ResponsiveErrorFallback,
  onError
}) => {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
};