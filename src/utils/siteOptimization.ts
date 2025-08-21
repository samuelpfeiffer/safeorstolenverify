import { supabase } from '@/integrations/supabase/client';

// Site-wide optimization utilities
export class SiteOptimizer {
  private static instance: SiteOptimizer;
  private performanceData: Map<string, number> = new Map();
  
  public static getInstance(): SiteOptimizer {
    if (!SiteOptimizer.instance) {
      SiteOptimizer.instance = new SiteOptimizer();
    }
    return SiteOptimizer.instance;
  }

  // Track page load performance
  public trackPageLoad(pageName: string, loadTime: number) {
    this.performanceData.set(pageName, loadTime);
    
    // Log slow pages
    if (loadTime > 3000) {
      console.warn(`Slow page load detected: ${pageName} took ${loadTime}ms`);
    }
  }

  // Preload critical routes
  public async preloadCriticalRoutes() {
    const criticalRoutes = [
      '/pricing',
      '/auth',
      '/dashboard',
      '/subscription'
    ];

    return Promise.allSettled(
      criticalRoutes.map(route => this.preloadRoute(route))
    );
  }

  private async preloadRoute(route: string) {
    try {
      // Dynamically import the route component
      switch (route) {
        case '/pricing':
          await import('@/pages/PricingPage');
          break;
        case '/auth':
          await import('@/pages/AuthPage');
          break;
        case '/dashboard':
          await import('@/pages/DashboardPage');
          break;
        case '/subscription':
          await import('@/pages/SubscriptionPage');
          break;
        default:
          console.log(`No preload defined for route: ${route}`);
      }
    } catch (error) {
      console.error(`Failed to preload route ${route}:`, error);
    }
  }

  // Check site health
  public async checkSiteHealth() {
    try {
      const startTime = Date.now();
      
      // Test Supabase connection
      const { error } = await supabase.from('profiles').select('count').limit(1);
      
      const responseTime = Date.now() - startTime;
      
      return {
        healthy: !error,
        responseTime,
        timestamp: new Date().toISOString(),
        error: error?.message
      };
    } catch (error) {
      return {
        healthy: false,
        responseTime: -1,
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Optimize images
  public optimizeImage(src: string, width?: number, quality?: number): string {
    // For now, return the original src
    // In production, this could integrate with image optimization services
    return src;
  }

  // Clean up old cache
  public async cleanupCache() {
    try {
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        const oldCaches = cacheNames.filter(name => name.includes('old') || name.includes('v1'));
        
        return Promise.allSettled(
          oldCaches.map(cacheName => caches.delete(cacheName))
        );
      }
    } catch (error) {
      console.error('Cache cleanup failed:', error);
    }
  }
}

export const siteOptimizer = SiteOptimizer.getInstance();