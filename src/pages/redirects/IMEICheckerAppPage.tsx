import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /imei-checker-app → /mobile-app
 */
const IMEICheckerAppPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/mobile-app', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="IMEI Checker App - Free Mobile Phone Verification | SafeOrStolen"
        description="Download the free IMEI checker mobile app. Verify stolen phones instantly with our mobile IMEI verification app for iPhone and Android."
        keywords="imei checker app, mobile phone verification app, imei lookup app, stolen phone checker app"
        canonical="/mobile-app"
      />
      <MetaRefreshRedirect to="/mobile-app" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">IMEI Checker App</h1>
          <p className="text-muted-foreground">Taking you to our mobile app page</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/mobile-app" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default IMEICheckerAppPage;
