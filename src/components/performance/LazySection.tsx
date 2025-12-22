import React, { useRef, useState, useEffect, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  /** Minimum height to prevent layout shift */
  minHeight?: string;
  /** Root margin for intersection observer */
  rootMargin?: string;
  /** Fallback content while loading */
  fallback?: ReactNode;
}

/**
 * LazySection - Lazy loads below-fold content using Intersection Observer
 * Improves LCP by deferring non-critical content rendering
 */
export const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  minHeight = '100px',
  rootMargin = '200px',
  fallback = null,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Skip lazy loading if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      setHasLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, disconnect observer
            observer.disconnect();
          }
        });
      },
      {
        rootMargin,
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [rootMargin]);

  // Mark as loaded after first render to enable animations
  useEffect(() => {
    if (isVisible && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isVisible, hasLoaded]);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{ minHeight: isVisible ? 'auto' : minHeight }}
    >
      {isVisible ? (
        <div
          className={`transition-opacity duration-300 ${
            hasLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {children}
        </div>
      ) : (
        fallback
      )}
    </div>
  );
};
