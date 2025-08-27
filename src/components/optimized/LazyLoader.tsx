import React, { Suspense, lazy, ComponentType } from 'react';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

interface LazyLoaderProps {
  children: React.ReactNode;
  fallback?: React.ReactElement;
  errorFallback?: React.ReactNode;
}

export const LazyLoader: React.FC<LazyLoaderProps> = ({ 
  children, 
  fallback = <LoadingSpinner />,
  errorFallback 
}) => {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

// Higher-order component for lazy loading
export const withLazyLoading = <P extends Record<string, any>>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ReactElement
) => {
  const LazyComponent = lazy(importFunc);
  
  return (props: P) => (
    <LazyLoader fallback={fallback}>
      <LazyComponent {...(props as any)} />
    </LazyLoader>
  );
};

// Preload function for critical components
export const preloadComponent = (importFunc: () => Promise<any>) => {
  const componentImport = importFunc();
  return componentImport;
};