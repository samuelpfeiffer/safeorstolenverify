import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';

/**
 * Redirect page for /blog/complete-verification-guide-stolen-goods-check → /how-it-works
 */
const CompleteVerificationGuidePage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/how-it-works', { replace: true }); }, [navigate]);
  return (
    <>
      <MetaRefreshRedirect to="/how-it-works" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Redirecting...</h1>
          <p className="text-muted-foreground">Taking you to How It Works</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/how-it-works" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CompleteVerificationGuidePage;
