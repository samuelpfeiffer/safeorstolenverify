import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /verify/auctions → /verify
 * Target: "verify auction items", "auction verification"
 */
const AuctionsVerifyPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/verify', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Verify Auction Items - Check If Stolen | SafeOrStolen"
        description="Verify auction items for free. Check IMEI, VIN, serial numbers before bidding at auctions. Protect yourself from buying stolen goods."
        keywords="verify auction items, auction verification, check auction stolen, auction buyer protection, auction item check"
        canonical="/verify/auctions"
      />
      <MetaRefreshRedirect to="/verify" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Verify Auction Items</h1>
          <p className="text-muted-foreground mb-2">Check if auction items are stolen before bidding.</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/verify" className="text-primary underline">click here to verify</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AuctionsVerifyPage;
