import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';

/**
 * Redirect page for /imei-check → /verify
 * Includes HTML meta refresh so Google can follow redirect before JS loads
 */
const IMEICheckPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Client-side redirect for users with JS enabled
    navigate('/verify', { replace: true });
  }, [navigate]);

  return (
    <>
      <MetaRefreshRedirect to="/verify" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Redirecting...</h1>
          <p className="text-muted-foreground">Taking you to our verification page</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/verify" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default IMEICheckPage;
