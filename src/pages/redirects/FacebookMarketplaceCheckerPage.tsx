import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /app/facebook-marketplace-checker → /mobile-app
 * Target: "facebook marketplace verification app", "facebook marketplace safety app"
 */
const FacebookMarketplaceCheckerPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/mobile-app', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Facebook Marketplace Verification App - Check Before Buying | SafeOrStolen"
        description="Download free Facebook Marketplace verification app. Check if items are stolen before buying on Facebook Marketplace. Instant stolen goods verification. Protect yourself from scams."
        keywords="facebook marketplace verification app, facebook marketplace safety app, facebook marketplace checker, verify facebook marketplace items, fb marketplace stolen check"
        noIndex={true}
      />
      <MetaRefreshRedirect to="/mobile-app" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Facebook Marketplace Verification App</h1>
          <p className="text-muted-foreground mb-2">Verify Facebook Marketplace items instantly. Check if items are stolen before buying.</p>
          <p className="text-muted-foreground mb-4">✓ Instant verification ✓ Safe buying ✓ Free app</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/mobile-app" className="text-primary underline">click here to download</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default FacebookMarketplaceCheckerPage;
