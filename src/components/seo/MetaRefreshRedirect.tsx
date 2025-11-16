import { Helmet } from 'react-helmet-async';

interface MetaRefreshRedirectProps {
  to: string;
  delay?: number;
}

/**
 * HTML Meta Refresh Redirect - Works for crawlers BEFORE JavaScript loads
 * 
 * Use this for redirect pages so Google can follow the redirect
 * even before React Router initializes.
 * 
 * Example:
 * <MetaRefreshRedirect to="/verify" delay={0} />
 */
export const MetaRefreshRedirect: React.FC<MetaRefreshRedirectProps> = ({ 
  to, 
  delay = 0 
}) => {
  return (
    <Helmet>
      <meta httpEquiv="refresh" content={`${delay};url=${to}`} />
      <link rel="canonical" href={`https://safeorstolen.com${to}`} />
      <meta name="robots" content="noindex, follow" />
    </Helmet>
  );
};
