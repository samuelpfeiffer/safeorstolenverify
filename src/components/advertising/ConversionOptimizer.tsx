import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * Conversion Optimizer - Advanced tracking and optimization
 * Implements conversion tracking, exit-intent, and behavior analytics
 */
export const ConversionOptimizer: React.FC = () => {
  const location = useLocation();
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    // Track conversion funnel steps
    const funnelStep = getFunnelStep(location.pathname);
    trackFunnelProgress(funnelStep);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitIntent) {
        setShowExitIntent(true);
        trackEvent('exit_intent_triggered');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [location, showExitIntent]);

  const getFunnelStep = (path: string): string => {
    const funnelMap: Record<string, string> = {
      '/': 'awareness',
      '/problem': 'problem_aware',
      '/how-it-works': 'solution_aware',
      '/check-phone': 'product_aware',
      '/check-car': 'product_aware',
      '/pricing': 'consideration',
      '/auth': 'conversion',
      '/dashboard': 'activation'
    };

    for (const [key, value] of Object.entries(funnelMap)) {
      if (path.includes(key)) return value;
    }
    return 'exploration';
  };

  const trackFunnelProgress = (step: string) => {
    console.log('Funnel Progress:', {
      step,
      timestamp: new Date().toISOString(),
      page: location.pathname
    });

    // Track in localStorage for user journey analysis
    const journey = JSON.parse(localStorage.getItem('user_journey') || '[]');
    journey.push({
      step,
      path: location.pathname,
      timestamp: Date.now()
    });
    localStorage.setItem('user_journey', JSON.stringify(journey.slice(-10))); // Keep last 10 steps
  };

  const trackEvent = (event: string) => {
    console.log('Conversion Event:', event);
  };

  return (
    <Helmet>
      {/* Google Tag Manager / Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            page_path: '${location.pathname}',
            custom_map: {'dimension1': 'user_type'}
          });
        `}
      </script>

      {/* Facebook Pixel */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </script>

      {/* Microsoft Clarity */}
      <script type="text/javascript">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
        `}
      </script>

      {/* Hotjar Tracking */}
      <script>
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:YOUR_HJID,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </script>

      {/* LinkedIn Insight Tag */}
      <script type="text/javascript">
        {`
          _linkedin_partner_id = "YOUR_PARTNER_ID";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </script>
    </Helmet>
  );
};
