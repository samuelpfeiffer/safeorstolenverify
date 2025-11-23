import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /app/ebay-verification → /mobile-app
 * Target: "ebay verification app", "ebay buyer protection app", "ebay stolen check"
 */
const EbayVerificationPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/mobile-app', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="eBay Verification App - Check Items Before Buying | SafeOrStolen"
        description="Download free eBay verification app. Check if eBay items are stolen before buying. Protect yourself from buying stolen goods on eBay. Instant verification."
        keywords="ebay verification app, ebay buyer protection app, ebay stolen check, verify ebay items, ebay safety app, check ebay listings"
        noIndex={true}
      />
      <MetaRefreshRedirect to="/mobile-app" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">eBay Verification App</h1>
          <p className="text-muted-foreground mb-2">Verify eBay items before buying. Check if items are stolen.</p>
          <p className="text-muted-foreground mb-4">✓ Instant verification ✓ IMEI, VIN, Serial checks ✓ Free download</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/mobile-app" className="text-primary underline">click here to download</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default EbayVerificationPage;
