import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /app/carfax-alternative → /mobile-app
 * Target: "carfax app", "carfax alternative app", "free carfax app"
 */
const CarfaxAlternativePage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/mobile-app', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Carfax Alternative App - Free Vehicle Verification | SafeOrStolen"
        description="Free Carfax alternative app. Download SafeOrStolen for instant VIN verification, stolen vehicle checks, and vehicle history. No subscription needed - completely free."
        keywords="carfax alternative app, free carfax app, carfax app download, vehicle verification app, VIN checker app, stolen car check app, free vehicle history app"
        canonical="/app/carfax-alternative"
      />
      <MetaRefreshRedirect to="/mobile-app" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl font-bold mb-4">Free Carfax Alternative App</h1>
          <p className="text-muted-foreground mb-2">Download SafeOrStolen - the free alternative to Carfax for vehicle verification.</p>
          <p className="text-muted-foreground mb-4">✓ Free VIN checks ✓ Stolen vehicle database ✓ No subscription required</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/mobile-app" className="text-primary underline">click here to download the app</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CarfaxAlternativePage;
