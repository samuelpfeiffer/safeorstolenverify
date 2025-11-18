import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /verify/pawnshops → /verify
 * Target: "verify pawnshop items", "pawnshop verification"
 */
const PawnshopsVerifyPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/verify', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Verify Pawnshop Items - Check If Stolen | SafeOrStolen"
        description="Verify pawnshop items for free. Check IMEI, VIN, serial numbers before buying at pawn shops. Protect yourself from stolen goods."
        keywords="verify pawnshop items, pawn shop verification, check pawnshop stolen, pawn shop buyer protection, pawnshop item check"
        canonical="/verify/pawnshops"
      />
      <MetaRefreshRedirect to="/verify" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Verify Pawnshop Items</h1>
          <p className="text-muted-foreground mb-2">Check if pawn shop items are stolen before buying.</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/verify" className="text-primary underline">click here to verify</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default PawnshopsVerifyPage;
