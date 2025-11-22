import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';

/**
 * Redirects /subscriptions to /pricing with proper SEO handling
 * This prevents duplicate content issues
 */
const SubscriptionsPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to pricing page
    navigate('/pricing', { replace: true });
  }, [navigate]);
  
  return (
    <>
      <PageSEO
        title="Subscription Plans & Pricing | SafeOrStolen"
        description="View SafeOrStolen subscription plans and pricing. Choose the best verification plan for your needs."
        keywords="subscription plans, pricing, verification plans, stolen goods verification pricing"
        canonical="/pricing"
        noIndex={true}
      />
      <MetaRefreshRedirect to="/pricing" delay={0} />
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Subscription Plans</h1>
          <p className="text-muted-foreground">Redirecting to pricing page...</p>
        </div>
      </div>
    </>
  );
};

export default SubscriptionsPage;
