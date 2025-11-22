import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /app/buyer-protection-research → /mobile-app
 * Target: "buyer protection research app", "safe buying research"
 */
const BuyerProtectionResearchPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/mobile-app', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Buyer Protection Research App | SafeOrStolen"
        description="Research items for buyer protection with SafeOrStolen app."
        canonical="/app/buyer-protection-research"
        noIndex={true}
      />
      <MetaRefreshRedirect to="/mobile-app" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Buyer Protection Research App</h1>
          <p className="text-muted-foreground">Research items for buyer protection. Safe buying research tool.</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/mobile-app" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default BuyerProtectionResearchPage;
