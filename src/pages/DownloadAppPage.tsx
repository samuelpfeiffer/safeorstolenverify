import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Smartphone } from 'lucide-react';

/**
 * Redirect page: /download-app → /mobile-app
 * Bot-visible content prevents Soft 404 errors
 */
const DownloadAppPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/mobile-app', { replace: true });
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Download SafeOrStolen Mobile App - iOS, Android & PWA</title>
        <meta name="description" content="Download SafeOrStolen mobile app for instant stolen goods verification. Available on iOS, Android, and as a Progressive Web App. Verify IMEI, VIN, and serial numbers on-the-go." />
        <link rel="canonical" href="https://safeorstolen.com/mobile-app" />
        <meta httpEquiv="refresh" content="0;url=/mobile-app" />
      </Helmet>
      
      <noscript>
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <h1>Download SafeOrStolen Mobile App</h1>
          <p>Get SafeOrStolen on all your devices - the only mobile app for verifying phones, vehicles, electronics, and firearms before you buy.</p>
          <h2>Available on All Platforms</h2>
          <ul>
            <li><strong>iOS</strong> - iPhone and iPad via Safari</li>
            <li><strong>Android</strong> - All Android devices via Chrome</li>
            <li><strong>Progressive Web App</strong> - Works on any device</li>
          </ul>
          <p><a href="/mobile-app" style={{ color: '#0066cc' }}>Continue to app download page →</a></p>
        </div>
      </noscript>

      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-2xl">
          <Smartphone className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Download SafeOrStolen Mobile App
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Get SafeOrStolen on all your devices. The only mobile app that lets you verify phones, vehicles, electronics, AND firearms before you buy.
          </p>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-sm text-muted-foreground">Redirecting to app download page...</p>
        </div>
      </div>
    </>
  );
};

export default DownloadAppPage;
