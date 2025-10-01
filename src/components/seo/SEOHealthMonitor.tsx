import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface SEOHealthAlert {
  type: 'critical' | 'warning' | 'info';
  category: 'performance' | 'content' | 'technical' | 'schema';
  message: string;
  recommendation: string;
  timestamp: number;
  value?: number;
  threshold?: number;
}

interface SEOHealthMetrics {
  performance: {
    lcp: number;
    fid: number;
    cls: number;
  };
  content: {
    titleLength: number;
    metaDescLength: number;
    h1Count: number;
    wordCount: number;
    imagesWithoutAlt: number;
  };
  technical: {
    hasCanonical: boolean;
    hasViewport: boolean;
    hasSSL: boolean;
    hasRobots: boolean;
  };
  schema: {
    hasStructuredData: boolean;
    validSchemas: number;
    invalidSchemas: number;
  };
}

export const SEOHealthMonitor: React.FC = () => {
  const [healthMetrics, setHealthMetrics] = useState<SEOHealthMetrics | null>(null);
  const [alerts, setAlerts] = useState<SEOHealthAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(true);

  const analyzePageHealth = (): SEOHealthMetrics => {
    const title = document.title;
    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const h1Elements = document.querySelectorAll('h1');
    const images = Array.from(document.images);
    const imagesWithoutAlt = images.filter(img => !img.alt || img.alt.trim() === '');
    const schemaElements = document.querySelectorAll('script[type="application/ld+json"]');
    
    let validSchemas = 0;
    let invalidSchemas = 0;
    
    schemaElements.forEach(script => {
      try {
        JSON.parse(script.textContent || '{}');
        validSchemas++;
      } catch {
        invalidSchemas++;
      }
    });

    return {
      performance: {
        lcp: 0, // Will be updated by performance observers
        fid: 0,
        cls: 0
      },
      content: {
        titleLength: title.length,
        metaDescLength: metaDesc.length,
        h1Count: h1Elements.length,
        wordCount: (document.body.textContent || '').trim().split(/\s+/).length,
        imagesWithoutAlt: imagesWithoutAlt.length
      },
      technical: {
        hasCanonical: !!document.querySelector('link[rel="canonical"]'),
        hasViewport: !!document.querySelector('meta[name="viewport"]'),
        hasSSL: window.location.protocol === 'https:',
        hasRobots: !!document.querySelector('meta[name="robots"]')
      },
      schema: {
        hasStructuredData: schemaElements.length > 0,
        validSchemas,
        invalidSchemas
      }
    };
  };

  const checkForAlerts = (metrics: SEOHealthMetrics): SEOHealthAlert[] => {
    const newAlerts: SEOHealthAlert[] = [];
    const now = Date.now();

    // Performance alerts
    if (metrics.performance.lcp > 4000) {
      newAlerts.push({
        type: 'critical',
        category: 'performance',
        message: `Largest Contentful Paint is ${Math.round(metrics.performance.lcp)}ms (Poor)`,
        recommendation: 'Optimize images, remove unused CSS, and improve server response time',
        timestamp: now,
        value: metrics.performance.lcp,
        threshold: 4000
      });
    }

    if (metrics.performance.cls > 0.25) {
      newAlerts.push({
        type: 'critical',
        category: 'performance',
        message: `Cumulative Layout Shift is ${metrics.performance.cls.toFixed(3)} (Poor)`,
        recommendation: 'Set size attributes on images and reserve space for dynamic content',
        timestamp: now,
        value: metrics.performance.cls,
        threshold: 0.25
      });
    }

    // Content alerts
    if (metrics.content.titleLength > 60 || metrics.content.titleLength < 10) {
      newAlerts.push({
        type: 'warning',
        category: 'content',
        message: `Title length is ${metrics.content.titleLength} characters (${metrics.content.titleLength > 60 ? 'too long' : 'too short'})`,
        recommendation: 'Keep titles between 10-60 characters for optimal SERP display',
        timestamp: now,
        value: metrics.content.titleLength
      });
    }

    if (metrics.content.metaDescLength > 160 || metrics.content.metaDescLength < 50) {
      newAlerts.push({
        type: 'warning',
        category: 'content',
        message: `Meta description is ${metrics.content.metaDescLength} characters (${metrics.content.metaDescLength > 160 ? 'too long' : 'too short'})`,
        recommendation: 'Keep meta descriptions between 50-160 characters',
        timestamp: now,
        value: metrics.content.metaDescLength
      });
    }

    if (metrics.content.h1Count !== 1) {
      newAlerts.push({
        type: 'warning',
        category: 'content',
        message: `Page has ${metrics.content.h1Count} H1 tags (should be exactly 1)`,
        recommendation: 'Use exactly one H1 tag per page for proper heading hierarchy',
        timestamp: now,
        value: metrics.content.h1Count
      });
    }

    if (metrics.content.imagesWithoutAlt > 0) {
      newAlerts.push({
        type: 'warning',
        category: 'content',
        message: `${metrics.content.imagesWithoutAlt} images missing alt text`,
        recommendation: 'Add descriptive alt text to all images for accessibility and SEO',
        timestamp: now,
        value: metrics.content.imagesWithoutAlt
      });
    }

    // Technical alerts
    if (!metrics.technical.hasCanonical) {
      newAlerts.push({
        type: 'warning',
        category: 'technical',
        message: 'Missing canonical URL',
        recommendation: 'Add canonical link tag to prevent duplicate content issues',
        timestamp: now
      });
    }

    if (!metrics.technical.hasViewport) {
      newAlerts.push({
        type: 'critical',
        category: 'technical',
        message: 'Missing viewport meta tag',
        recommendation: 'Add viewport meta tag for mobile responsiveness',
        timestamp: now
      });
    }

    if (!metrics.technical.hasSSL) {
      newAlerts.push({
        type: 'critical',
        category: 'technical',
        message: 'Page not served over HTTPS',
        recommendation: 'Enable SSL/TLS encryption for security and SEO benefits',
        timestamp: now
      });
    }

    // Schema alerts
    if (!metrics.schema.hasStructuredData) {
      newAlerts.push({
        type: 'info',
        category: 'schema',
        message: 'No structured data found',
        recommendation: 'Add Schema.org markup for rich snippets and better search visibility',
        timestamp: now
      });
    }

    if (metrics.schema.invalidSchemas > 0) {
      newAlerts.push({
        type: 'warning',
        category: 'schema',
        message: `${metrics.schema.invalidSchemas} invalid schema markup(s) found`,
        recommendation: 'Fix JSON-LD syntax errors in structured data',
        timestamp: now,
        value: metrics.schema.invalidSchemas
      });
    }

    return newAlerts;
  };

  const showAlertNotification = (alert: SEOHealthAlert) => {
    const severity = alert.type === 'critical' ? 'error' : 
                    alert.type === 'warning' ? 'warning' : 'info';

    if (alert.type === 'critical') {
      toast.error(`SEO Critical Issue: ${alert.message}`, {
        description: alert.recommendation,
        duration: 10000
      });
    } else if (alert.type === 'warning') {
      toast.warning(`SEO Warning: ${alert.message}`, {
        description: alert.recommendation,
        duration: 5000
      });
    }

    // Track alert in analytics
    if (window.gtag) {
      window.gtag('event', 'seo_health_alert', {
        event_category: 'SEO_Health_Monitoring',
        alert_type: alert.type,
        alert_category: alert.category,
        alert_message: alert.message,
        page_path: window.location.pathname,
        timestamp: alert.timestamp
      });
    }
  };

  useEffect(() => {
    if (!isMonitoring) return;

    let performanceMetrics = {
      lcp: 0,
      fid: 0,
      cls: 0
    };

    // Set up performance observers
    if ('PerformanceObserver' in window) {
      // LCP Observer
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          performanceMetrics.lcp = entry.startTime;
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID Observer
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const perfEntry = entry as any;
          performanceMetrics.fid = perfEntry.processingStart - perfEntry.startTime;
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS Observer
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShift = entry as any;
          if (!layoutShift.hadRecentInput) {
            clsValue += layoutShift.value;
          }
        }
        performanceMetrics.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Periodic health checks
    const checkHealth = () => {
      const metrics = analyzePageHealth();
      metrics.performance = { ...performanceMetrics };
      
      setHealthMetrics(metrics);
      
      const newAlerts = checkForAlerts(metrics);
      
      // Only show new alerts (not duplicates)
      const alertHashes = alerts.map(a => `${a.category}_${a.message}`);
      const freshAlerts = newAlerts.filter(alert => 
        !alertHashes.includes(`${alert.category}_${alert.message}`)
      );
      
      if (freshAlerts.length > 0) {
        setAlerts(prev => [...prev, ...freshAlerts]);
        freshAlerts.forEach(showAlertNotification);
      }
    };

    // Initial check
    setTimeout(checkHealth, 2000);
    
    // Periodic checks every 30 seconds
    const healthCheckInterval = setInterval(checkHealth, 30000);

    // Check on route changes
    const handleRouteChange = () => {
      setTimeout(checkHealth, 1000);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      clearInterval(healthCheckInterval);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [isMonitoring, alerts]);

  // Export health metrics for analysis
  useEffect(() => {
    (window as any).getSEOHealthMetrics = () => healthMetrics;
    (window as any).getSEOHealthAlerts = () => alerts;
    (window as any).toggleSEOMonitoring = () => setIsMonitoring(prev => !prev);
  }, [healthMetrics, alerts]);

  // No visual display - all monitoring happens in backend
  return null;
};