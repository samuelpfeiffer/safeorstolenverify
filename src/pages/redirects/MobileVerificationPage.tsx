import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';

/**
 * Redirect page for /mobile-verification → /mobile-app
 */
const MobileVerificationPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/mobile-app', { replace: true }); }, [navigate]);
  return (
    <>
      <MetaRefreshRedirect to="/mobile-app" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Redirecting...</h1>
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
