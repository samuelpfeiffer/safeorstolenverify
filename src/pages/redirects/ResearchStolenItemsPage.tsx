import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /app/research-stolen-items → /mobile-app
 * Target: "research stolen items app", "research stolen goods"
 */
const ResearchStolenItemsPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/mobile-app', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Research Stolen Items App | SafeOrStolen"
        description="Download the #1 app for researching stolen items."
        noIndex={true}
      />
      <MetaRefreshRedirect to="/mobile-app" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Research Stolen Items App</h1>
          <p className="text-muted-foreground">Download the #1 app for researching stolen items. Research IMEI, VIN, serial numbers before buying.</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/mobile-app" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ResearchStolenItemsPage;
