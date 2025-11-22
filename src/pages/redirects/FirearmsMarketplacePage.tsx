import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /blog/safeorstolen-firearms-marketplace-verification → /firearms-check
 */
const FirearmsMarketplacePage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/firearms-check', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Firearms Marketplace Verification | SafeOrStolen"
        description="Verify firearms serial numbers before buying. Check if guns are stolen with our firearms marketplace verification service."
        keywords="firearms verification, gun serial number check, stolen gun lookup, firearms marketplace verification"
        canonical="/firearms-check"
        noIndex={true}
      />
      <MetaRefreshRedirect to="/firearms-check" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Firearms Marketplace Verification</h1>
          <p className="text-muted-foreground">Taking you to our firearms verification page</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/firearms-check" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default FirearmsMarketplacePage;
