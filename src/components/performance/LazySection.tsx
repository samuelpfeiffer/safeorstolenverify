import React, { useRef, useState, useEffect, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  /** Minimum height to prevent layout shift - CRITICAL for CLS */
  minHeight?: string;
  /** Root margin for intersection observer */
  rootMargin?: string;
  /** Fallback content while loading */
  fallback?: ReactNode;
  /** Use content-visibility for better performance */
  useContentVisibility?: boolean;
}

/**
 * LazySection - Lazy loads below-fold content using Intersection Observer
 * Improves LCP by deferring non-critical content rendering
 * Prevents CLS by maintaining consistent height during load
 */
export const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  minHeight = '100px',
  rootMargin = '200px',
  fallback = null,
  useContentVisibility = true,
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
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => setHasLoaded(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasLoaded]);

  return (
    <div
      ref={sectionRef}
      className={`lazy-section ${className}`}
      style={{ 
        minHeight: minHeight,
        // CSS containment improves rendering performance
        contain: 'layout style',
        // content-visibility: auto helps with rendering performance
        ...(useContentVisibility && !isVisible ? { 
          contentVisibility: 'auto',
          containIntrinsicSize: `auto ${minHeight}`,
        } : {})
      }}
    >
      {isVisible ? (
        <div
          className={`transition-opacity duration-150 ${
            hasLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {children}
        </div>
      ) : (
        fallback || (
          <div 
            className="bg-muted/5 rounded-lg" 
            style={{ minHeight }}
            aria-hidden="true"
          />
        )
      )}
    </div>
  );
};
