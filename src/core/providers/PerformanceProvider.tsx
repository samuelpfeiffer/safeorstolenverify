import React, { useEffect, createContext, useContext } from 'react';

interface PerformanceContextType {
  reportWebVitals: (metric: any) => void;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error('usePerformance must be used within PerformanceProvider');
  }
  return context;
};

interface PerformanceProviderProps {
  children: React.ReactNode;
}

export const PerformanceProvider: React.FC<PerformanceProviderProps> = ({ children }) => {
  const reportWebVitals = (metric: any) => {
    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vital:', metric);
    }
    
    // In production, you could send this to an analytics service
    // analytics.track('web_vital', metric);
  };

  useEffect(() => {
    // Set up performance observer for largest contentful paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            reportWebVitals({
              name: 'LCP',
              value: entry.startTime,
              id: 'v3-' + Date.now() + '-' + Math.random(),
            });
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    // Track cumulative layout shift
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      let clsEntries: PerformanceEntry[] = [];

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            const value = layoutShiftEntry.value;
            clsValue += value;
            clsEntries.push(entry);
          }
        }
      });

      observer.observe({ entryTypes: ['layout-shift'] });

      // Report CLS when the page is hidden
      const reportCLS = () => {
        reportWebVitals({
          name: 'CLS',
          value: clsValue,
          id: 'v3-' + Date.now() + '-' + Math.random(),
        });
      };

      document.addEventListener('visibilitychange', reportCLS);

      return () => {
        observer.disconnect();
        document.removeEventListener('visibilitychange', reportCLS);
      };
    }
  }, []);

  const value: PerformanceContextType = {
    reportWebVitals,
  };

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
};