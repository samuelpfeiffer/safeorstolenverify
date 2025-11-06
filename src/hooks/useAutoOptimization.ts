import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useSafeLocation } from '@/hooks/useSafeLocation';

interface OptimizationConfig {
  enabled: boolean;
  interval: number; // minutes
  actions: string[];
}

/**
 * Hook that automatically analyzes and optimizes pages in the background
 * Can be enabled/disabled through admin settings
 */
export const useAutoOptimization = (config?: Partial<OptimizationConfig>) => {
  const location = useSafeLocation();
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [lastOptimized, setLastOptimized] = useState<Date | null>(null);
  
  if (!location) {
    return { isOptimizing, lastOptimized, optimizePage: async () => {} };
  }

  const defaultConfig: OptimizationConfig = {
    enabled: config?.enabled ?? false,
    interval: config?.interval ?? 60, // Every 60 minutes
    actions: config?.actions ?? ['analyze-page', 'generate-seo']
  };

  const optimizePage = async () => {
    if (isOptimizing) return;
    
    setIsOptimizing(true);
    console.log('[AUTO-OPTIMIZER] Analyzing:', location.pathname);

    try {
      const pageData = {
        url: location.pathname,
        title: document.title,
        content: document.body.innerText.substring(0, 2000),
        meta: {
          description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
          keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content')
        }
      };

      // Run each optimization action
      for (const action of defaultConfig.actions) {
        await supabase.functions.invoke('ai-site-optimizer', {
          body: { action, pageData }
        });
      }

      setLastOptimized(new Date());
      console.log('[AUTO-OPTIMIZER] Completed');
    } catch (error) {
      console.error('[AUTO-OPTIMIZER] Error:', error);
    } finally {
      setIsOptimizing(false);
    }
  };

  useEffect(() => {
    if (!defaultConfig.enabled) return;

    // Run optimization on page load (after delay)
    const initialTimeout = setTimeout(() => {
      optimizePage();
    }, 5000); // Wait 5 seconds after page load

    // Set up interval for periodic optimization
    const intervalId = setInterval(() => {
      optimizePage();
    }, defaultConfig.interval * 60 * 1000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, [location.pathname, defaultConfig.enabled]);

  return {
    isOptimizing,
    lastOptimized,
    optimizePage
  };
};