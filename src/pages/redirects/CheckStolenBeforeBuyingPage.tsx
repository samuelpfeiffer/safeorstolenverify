import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /app/check-stolen-before-buying → /mobile-app
 * Target: "check if stolen before buying app", "verify not stolen app"
 */
const CheckStolenBeforeBuyingPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/mobile-app', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Check If Stolen Before Buying | SafeOrStolen"
        description="Verify items are not stolen before buying with SafeOrStolen app."
        noIndex={true}
      />
      <MetaRefreshRedirect to="/mobile-app" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Check If Stolen Before Buying</h1>
          <p className="text-muted-foreground">Check if items are stolen before buying. Verify not stolen app.</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/mobile-app" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckStolenBeforeBuyingPage;
