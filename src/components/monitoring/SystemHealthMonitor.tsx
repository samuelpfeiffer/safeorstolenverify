import React, { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

interface SystemHealthMetrics {
  apiResponseTime: number;
  pageLoadTime: number;
  errorRate: number;
  userInteractionDelay: number;
}

export const SystemHealthMonitor: React.FC = () => {
  const { toast } = useToast();
  const metricsRef = useRef<SystemHealthMetrics>({
    apiResponseTime: 0,
    pageLoadTime: 0,
    errorRate: 0,
    userInteractionDelay: 0
  });
  const errorCountRef = useRef(0);
  const requestCountRef = useRef(0);

  useEffect(() => {
    // Monitor API response times
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const startTime = performance.now();
      requestCountRef.current++;
      
      try {
        const response = await originalFetch(...args);
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        
        metricsRef.current.apiResponseTime = responseTime;
        
        // Alert on slow API responses
        if (responseTime > 5000) {
          console.warn(`Slow API response detected: ${responseTime}ms for ${args[0]}`);
        }
        
        return response;
      } catch (error) {
        errorCountRef.current++;
        metricsRef.current.errorRate = (errorCountRef.current / requestCountRef.current) * 100;
        
        // Alert on high error rates
        if (metricsRef.current.errorRate > 20) {
          toast({
            title: "System Issue Detected",
            description: "Multiple requests are failing. Please check your connection.",
            variant: "destructive",
          });
        }
        
        throw error;
      }
    };

    // Monitor page load performance
    const measurePageLoad = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        metricsRef.current.pageLoadTime = navigation.loadEventEnd - navigation.fetchStart;
        
        // Alert on extremely slow page loads
        if (metricsRef.current.pageLoadTime > 10000) {
          toast({
            title: "Slow Loading Detected",
            description: "The page is loading slowly. Please check your connection.",
            variant: "destructive",
          });
        }
      }
    };

    // Monitor user interaction delays
    const monitorInteractionDelay = () => {
      let interactionStart = 0;
      
      const handleInteractionStart = () => {
        interactionStart = performance.now();
      };
      
      const handleInteractionEnd = () => {
        if (interactionStart) {
          const delay = performance.now() - interactionStart;
          metricsRef.current.userInteractionDelay = delay;
          
          // Alert on laggy interactions
          if (delay > 300) {
            console.warn(`Slow interaction detected: ${delay}ms`);
          }
        }
      };
      
      document.addEventListener('click', handleInteractionStart);
      document.addEventListener('input', handleInteractionStart);
      document.addEventListener('transitionend', handleInteractionEnd);
      document.addEventListener('animationend', handleInteractionEnd);
      
      return () => {
        document.removeEventListener('click', handleInteractionStart);
        document.removeEventListener('input', handleInteractionStart);
        document.removeEventListener('transitionend', handleInteractionEnd);
        document.removeEventListener('animationend', handleInteractionEnd);
      };
    };

    // Monitor memory usage
    const monitorMemoryUsage = () => {
      if ('memory' in performance) {
        const memoryInfo = (performance as any).memory;
        const usedMemoryMB = memoryInfo.usedJSHeapSize / 1024 / 1024;
        const totalMemoryMB = memoryInfo.totalJSHeapSize / 1024 / 1024;
        const memoryUsagePercent = (usedMemoryMB / totalMemoryMB) * 100;
        
        // Alert on high memory usage
        if (memoryUsagePercent > 80) {
          console.warn(`High memory usage detected: ${memoryUsagePercent.toFixed(1)}%`);
        }
      }
    };

    // Run initial measurements
    setTimeout(measurePageLoad, 2000);
    
    const cleanupInteractionMonitor = monitorInteractionDelay();
    
    // Periodic health checks
    const healthCheckInterval = setInterval(() => {
      monitorMemoryUsage();
      
      // Log health metrics periodically
      if (process.env.NODE_ENV === 'development') {
        console.log('System Health Metrics:', metricsRef.current);
      }
    }, 30000); // Every 30 seconds

    return () => {
      window.fetch = originalFetch;
      cleanupInteractionMonitor();
      clearInterval(healthCheckInterval);
    };
  }, [toast]);

  return null;
};