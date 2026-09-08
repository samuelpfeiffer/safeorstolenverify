import { useSearchParams as useRouterSearchParams } from '@/lib/router-compat';

/**
 * Safe wrapper around useSearchParams that handles Router context errors
 * This prevents crashes during HMR (Hot Module Reload) in development
 * when the Router context might be temporarily null
 */
export const useSafeSearchParams = () => {
  try {
    return useRouterSearchParams();
  } catch (error) {
    // Router context not ready - return fallback
    console.warn('Router context not ready, returning empty search params');
    return [new URLSearchParams(), () => {}] as const;
  }
};
