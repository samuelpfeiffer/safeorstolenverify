import { useEffect } from 'react';
import { useSafeLocation } from '@/hooks/useSafeLocation';

export const ScrollRestoration = () => {
  const location = useSafeLocation();
  
  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [location?.pathname]);
  
  return null; // This component doesn't render anything
};

export default ScrollRestoration;
