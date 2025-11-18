import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /verify/offerup → /verify
 * Target: "verify offerup items", "offerup verification"
 */
const OfferUpVerifyPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/verify', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Verify OfferUp Items - Check If Stolen | SafeOrStolen"
        description="Verify OfferUp items for free. Check IMEI, VIN, serial numbers before buying on OfferUp. Protect yourself from stolen goods."
        keywords="verify offerup items, offerup verification, check offerup stolen, offerup buyer protection, offerup item check"
        canonical="/verify/offerup"
      />
      <MetaRefreshRedirect to="/verify" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Verify OfferUp Items</h1>
          <p className="text-muted-foreground mb-2">Check if OfferUp items are stolen before buying.</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/verify" className="text-primary underline">click here to verify</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default OfferUpVerifyPage;
