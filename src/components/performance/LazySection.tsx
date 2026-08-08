import React, { useRef, useState, useEffect, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  /** Minimum height to prevent layout shift - CRITICAL for CLS */
  minHeight?: string;
  /** Root margin for intersection observer - larger = earlier load */
  rootMargin?: string;
  /** Fallback content while loading */
  fallback?: ReactNode;
  /** Use content-visibility for better performance */
  useContentVisibility?: boolean;
}

/**
 * Detect if the current user agent is a bot/crawler/prerender service.
 * When true, all content renders immediately so crawlers see full page content.
 * This fixes THIN_CONTENT and DUPLICATE_BODY issues in LovableHTML audits.
 */
const detectBot = (): boolean => {
  if (typeof navigator === 'undefined') return true; // SSR - render everything
  return /bot|crawl|spider|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|linkedinbot|whatsapp|slackbot|telegrambot|prerender|headlesschrome|lighthouse|gptbot|claudebot|anthropic|perplexity/i.test(navigator.userAgent);
};

// Cache the result since user agent doesn't change during session
const IS_BOT = detectBot();

/**
 * LazySection - Lazy loads below-fold content using Intersection Observer
 * Improves LCP by deferring non-critical content rendering
 * Prevents CLS by maintaining consistent height during load
 * 
 * CWV Optimizations:
 * - Uses content-visibility: auto for rendering optimization
 * - Smaller rootMargin on mobile (100px) vs desktop (200px) to reduce simultaneous loads
 * - Contains intrinsic size to prevent layout shifts
 * - BOT DETECTION: Renders immediately for crawlers (LovableHTML, Googlebot, etc.)
 */
export const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  minHeight = '100px',
  rootMargin, // Will be computed based on viewport
  fallback = null,
  useContentVisibility = true,
}) => {
  // Use smaller margin on mobile for better performance
  const computedRootMargin = rootMargin ?? (typeof window !== 'undefined' && window.innerWidth < 768 ? '50px' : '150px');
  
  // Bots get immediate rendering - no lazy loading
  const [isVisible, setIsVisible] = useState(IS_BOT);
  const [hasLoaded, setHasLoaded] = useState(IS_BOT);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip lazy loading for bots - already rendered
    if (IS_BOT) return;
    
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
        rootMargin: computedRootMargin,
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [computedRootMargin]);

  // Mark as loaded after first render to enable animations
  useEffect(() => {
    if (IS_BOT) return; // Already loaded for bots
    if (isVisible && !hasLoaded) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => setHasLoaded(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasLoaded]);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{ 
        minHeight: minHeight,
        // content-visibility: auto helps with rendering performance and provides intrinsic sizing
        ...(useContentVisibility && !isVisible ? { 
          contentVisibility: 'auto',
          containIntrinsicSize: `0 ${minHeight}`,
        } : {})
      }}
    >
      {isVisible ? (
        <div
          className={`transition-opacity duration-200 ${
            hasLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {children}
        </div>
      ) : (
        fallback || (
          <div 
            className="bg-muted/10 animate-pulse rounded-lg" 
            style={{ minHeight }}
            aria-hidden="true"
          />
        )
      )}
    </div>
  );
};
