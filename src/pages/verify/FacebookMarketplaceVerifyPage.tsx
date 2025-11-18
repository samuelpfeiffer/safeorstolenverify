import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /verify/facebook-marketplace → /verify
 * Target: "verify facebook marketplace items", "facebook marketplace verification"
 */
const FacebookMarketplaceVerifyPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/verify', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Verify Facebook Marketplace Items - Check If Stolen | SafeOrStolen"
        description="Verify Facebook Marketplace items for free. Check IMEI, VIN, serial numbers before buying on Facebook Marketplace. Protect yourself from stolen goods."
        keywords="verify facebook marketplace items, facebook marketplace verification, check facebook marketplace stolen, fb marketplace buyer protection"
        canonical="/verify/facebook-marketplace"
      />
      <MetaRefreshRedirect to="/verify" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Verify Facebook Marketplace Items</h1>
          <p className="text-muted-foreground mb-2">Check if Facebook Marketplace items are stolen before buying.</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/verify" className="text-primary underline">click here to verify</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default FacebookMarketplaceVerifyPage;
