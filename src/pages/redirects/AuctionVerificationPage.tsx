import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /app/auction-verification → /mobile-app
 * Target: "auction verification app", "auction buyer protection app", "auction stolen check"
 */
const AuctionVerificationPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/mobile-app', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Auction Verification App - Check Items at Auctions | SafeOrStolen"
        description="Download free auction verification app. Verify items at auctions before bidding. Check if auction items are stolen. Instant verification for safe auction buying."
        keywords="auction verification app, auction buyer protection, auction stolen check, verify auction items, auction safety app"
        canonical="/app/auction-verification"
      />
      <MetaRefreshRedirect to="/mobile-app" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Auction Verification App</h1>
          <p className="text-muted-foreground mb-2">Verify auction items before bidding. Check if items are stolen.</p>
          <p className="text-muted-foreground mb-4">✓ Instant verification ✓ Safe bidding ✓ Free app</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/mobile-app" className="text-primary underline">click here to download</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AuctionVerificationPage;
