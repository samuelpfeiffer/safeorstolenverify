import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /verification-app → /mobile-app
 */
const VerificationAppPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/mobile-app', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Verification App - Download Free Stolen Item Checker | SafeOrStolen"
        description="Download the free verification app to check if items are stolen. Instant IMEI, VIN, and serial number verification on your phone."
        keywords="verification app, stolen item checker app, download verification app, free stolen checker"
        canonical="/mobile-app"
        noIndex={true}
      />
      <MetaRefreshRedirect to="/mobile-app" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Verification App</h1>
          <p className="text-muted-foreground">Taking you to our mobile app page</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/mobile-app" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default VerificationAppPage;
