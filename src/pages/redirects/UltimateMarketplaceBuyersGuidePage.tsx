import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';

/**
 * Redirect page for /blog/ultimate-marketplace-buyers-guide → /blog
 */
const UltimateMarketplaceBuyersGuidePage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/blog', { replace: true }); }, [navigate]);
  return (
    <>
      <MetaRefreshRedirect to="/blog" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Redirecting...</h1>
          <p className="text-muted-foreground">Taking you to our blog</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/blog" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default UltimateMarketplaceBuyersGuidePage;
