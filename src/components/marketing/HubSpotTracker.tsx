import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface HubSpotTrackerProps {
  portalId?: string;
}

export const HubSpotTracker = ({ portalId = 'YOUR_PORTAL_ID' }: HubSpotTrackerProps) => {
  useEffect(() => {
    // Load HubSpot tracking script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = `//js.hs-scripts.com/${portalId}.js`;
    
    // Only add if not already present
    if (!document.getElementById('hs-script-loader')) {
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById('hs-script-loader');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [portalId]);

  return (
    <Helmet>
      {/* HubSpot Tracking Code - Alternative method */}
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src={`//js.hs-scripts.com/${portalId}.js`}
      />
    </Helmet>
  );
};