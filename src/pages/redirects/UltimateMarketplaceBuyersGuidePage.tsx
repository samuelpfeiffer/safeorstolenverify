import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /blog/ultimate-marketplace-buyers-guide → /blog
 */
const UltimateMarketplaceBuyersGuidePage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/blog', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Ultimate Marketplace Buyers Guide | SafeOrStolen Blog"
        description="The ultimate guide to buying safely on online marketplaces. Learn how to verify items and avoid scams on eBay, Facebook Marketplace, and more."
        keywords="marketplace buyers guide, online marketplace safety, buy safely online, marketplace verification"
        noIndex={true}
      />
      <MetaRefreshRedirect to="/blog" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Ultimate Marketplace Buyers Guide</h1>
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
