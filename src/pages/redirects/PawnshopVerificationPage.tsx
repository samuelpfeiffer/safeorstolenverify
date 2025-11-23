import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /app/pawnshop-verification → /mobile-app
 * Target: "pawnshop verification app", "pawnshop checker app", "pawn shop stolen check"
 */
const PawnshopVerificationPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/mobile-app', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Pawnshop Verification App - Check Items at Pawn Shops | SafeOrStolen"
        description="Download free pawnshop verification app. Verify items at pawn shops before buying. Check if pawnshop items are stolen. Instant verification for safe pawn shop purchases."
        keywords="pawnshop verification app, pawn shop checker app, pawn shop stolen check, verify pawnshop items, pawn shop safety app"
        noIndex={true}
      />
      <MetaRefreshRedirect to="/mobile-app" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Pawnshop Verification App</h1>
          <p className="text-muted-foreground mb-2">Verify pawn shop items instantly. Check if items are stolen before buying.</p>
          <p className="text-muted-foreground mb-4">✓ Instant verification ✓ Safe buying ✓ Free app</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/mobile-app" className="text-primary underline">click here to download</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default PawnshopVerificationPage;
