import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MetaRefreshRedirect } from '@/components/seo/MetaRefreshRedirect';
import { PageSEO } from '@/components/seo/PageSEO';

/**
 * Redirect page for /blog/data-source-credibility-stolen-goods-verification → /data-sources
 */
const DataSourceCredibilityPage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/data-sources', { replace: true }); }, [navigate]);
  return (
    <>
      <PageSEO
        title="Data Source Credibility for Stolen Goods Verification | SafeOrStolen"
        description="Learn about our data sources and verification credibility. How we verify stolen goods with trusted databases and law enforcement data."
        keywords="data source credibility, stolen goods verification, verification data sources, trusted verification databases"
        noIndex={true}
      />
      <MetaRefreshRedirect to="/data-sources" delay={0} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Data Source Credibility</h1>
          <p className="text-muted-foreground">Taking you to our data sources page</p>
          <p className="text-sm text-muted-foreground mt-4">
            If you're not redirected, <a href="/data-sources" className="text-primary underline">click here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default DataSourceCredibilityPage;
