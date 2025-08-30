import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';

interface ErrorBoundaryRoutingProps {
  children: React.ReactNode;
  fallbackPath?: string;
}

export const ErrorBoundaryRouting: React.FC<ErrorBoundaryRoutingProps> = ({ 
  children, 
  fallbackPath = '/404' 
}) => {
  const location = useLocation();

  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // Log routing errors with additional context
    console.error('Routing Error:', {
      error: error.message,
      stack: error.stack,
      location: location.pathname,
      search: location.search,
      errorInfo
    });

    // Track routing errors for analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: `Routing error on ${location.pathname}: ${error.message}`,
        fatal: false
      });
    }
  };

  return (
    <ErrorBoundary
      fallback={
        <div className="min-h-screen bg-sos flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-white">Page Error</h1>
            <p className="text-gray-300">Something went wrong loading this page.</p>
            <button 
              onClick={() => window.location.href = fallbackPath}
              className="px-4 py-2 bg-sos-orange hover:bg-sos-orange/80 text-white rounded-md"
            >
              Go to Home
            </button>
          </div>
        </div>
      }
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  );
};