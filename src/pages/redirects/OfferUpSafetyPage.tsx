import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /app/offerup-safety → /mobile-app
 * Target: "offerup safety app", "offerup verification app", "offerup stolen check"
 */
const OfferUpSafetyPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/mobile-app', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="OfferUp Safety App - Verify Items Before Buying | SafeOrStolen"
        description="Download free OfferUp safety app. Verify OfferUp items before buying. Check if items are stolen. Instant verification for safe buying on OfferUp."
        keywords="offerup safety app, offerup verification app, offerup stolen check, verify offerup items, offerup buyer protection"
        canonical="/app/offerup-safety"
      />
      <MetaRefreshRedirect to="/mobile-app" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">OfferUp Safety App</h1>
          <p className="text-muted-foreground mb-2">Verify OfferUp items instantly. Check if items are stolen before buying.</p>
          <p className="text-muted-foreground mb-4">✓ Instant verification ✓ Buyer protection ✓ Free download</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/mobile-app" className="text-primary underline">click here to download</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default OfferUpSafetyPage;
