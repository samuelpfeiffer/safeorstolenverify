import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Optimizes Largest Contentful Paint (LCP) to meet Core Web Vitals
 * Target: LCP < 2.5s (currently 6892ms - POOR)
 */
export const LCPOptimizer = () => {
  // Remove useEffect - let components handle their own image optimization
  return (
    <Helmet>
      {/* Minimal critical CSS only */}
      <style dangerouslySetInnerHTML={{
        __html: `img{max-width:100%;height:auto;}*{box-sizing:border-box;}`
      }} />
    </Helmet>
  );
};
