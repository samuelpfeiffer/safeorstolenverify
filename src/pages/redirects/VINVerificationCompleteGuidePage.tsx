import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for timestamped blog URL
 * /blog/vin-verification-complete-guide-used-cars-1759314016.095080 → /blog
 */
const VINVerificationCompleteGuidePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/blog', { replace: true });
  }, [navigate]);

  return (
    <>
      <PageSEO
        title="VIN Verification Complete Guide | SafeOrStolen"
        description="Complete guide to VIN verification for used cars."
        noIndex={true}
      />
      <MetaRefreshRedirect to="/blog" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Redirecting...</h1>
          <p className="text-muted-foreground">Taking you to our blog</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/blog" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default VINVerificationCompleteGuidePage;
