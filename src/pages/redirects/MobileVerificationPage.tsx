import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /mobile-verification → /mobile-app
 */
const MobileVerificationPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/mobile-app', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Mobile Verification App - Check Stolen Items on the Go | SafeOrStolen"
        description="Verify items instantly with our mobile verification app. Check IMEI, VIN, and serial numbers anywhere with our free mobile app."
        keywords="mobile verification app, mobile stolen checker, verify on mobile, mobile item verification"
        noIndex={true}
      />
      <MetaRefreshRedirect to="/mobile-app" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Mobile Verification</h1>
          <p className="text-muted-foreground">Taking you to our mobile app page</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/mobile-app" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileVerificationPage;
