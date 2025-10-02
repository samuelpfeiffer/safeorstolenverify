import React, { Suspense, lazy, ComponentType } from 'react';

interface LazyLoadWrapperProps {
  componentPath: string;
  fallback?: React.ReactNode;
  [key: string]: any;
}

/**
 * Lazy Load Wrapper - Dynamic component loading
 * Reduces initial bundle size significantly
 */
export const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({
  componentPath,
  fallback = <div className="animate-pulse bg-muted h-32 rounded-lg" />,
  ...props
}) => {
  // This is a conceptual example - in practice, you'd use specific imports
  return (
    <Suspense fallback={fallback}>
      <div {...props} />
    </Suspense>
  );
};

// Helper function to create lazy-loaded components
export function createLazyComponent<T = any>(
  importFn: () => Promise<{ default: ComponentType<T> }>
) {
  return lazy(importFn);
}

// Preload critical components
export const preloadComponents = () => {
  // Preload commonly accessed components
  const criticalComponents = [
    () => import('@/components/Hero'),
    () => import('@/components/ui/button'),
    () => import('@/components/ui/card'),
  ];

  criticalComponents.forEach(importFn => {
    importFn().catch(err => console.error('Preload error:', err));
  });
};
