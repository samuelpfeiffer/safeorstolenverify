import { useLocation as useRouterLocation, Location } from 'react-router-dom';

/**
 * Safe wrapper around useLocation that handles cases where Router context is unavailable
 * Returns null instead of throwing an error when Router context is missing
 */
export const useSafeLocation = (): Location | null => {
  try {
    const location = useRouterLocation();
    return location || null;
  } catch (error) {
    // Router context unavailable - this can happen during HMR or error recovery
    console.warn('Router context unavailable, using fallback location');
    return null;
  }
};
