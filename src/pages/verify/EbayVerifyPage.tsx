import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /verify/ebay → /verify
 * Target: "verify ebay items", "ebay verification"
 */
const EbayVerifyPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/verify', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Verify eBay Items - Check If Stolen | SafeOrStolen"
        description="Verify eBay items for free. Check IMEI, VIN, serial numbers for eBay purchases. Protect yourself from buying stolen goods on eBay."
        keywords="verify ebay items, ebay verification, check ebay stolen, ebay buyer protection, ebay item check"
        canonical="/verify/ebay"
      />
      <MetaRefreshRedirect to="/verify" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Verify eBay Items</h1>
          <p className="text-muted-foreground mb-2">Check if eBay items are stolen before buying.</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/verify" className="text-primary underline">click here to verify</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default EbayVerifyPage;
