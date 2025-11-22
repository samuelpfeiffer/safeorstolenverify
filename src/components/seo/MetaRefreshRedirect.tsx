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
 * IMPORTANT: Redirect pages should have:
 * 1. PageSEO with canonical pointing to destination
 * 2. Substantial on-page content to prevent Soft 404
 * 3. Clear redirect messaging for users
 * 
 * Example:
 * <MetaRefreshRedirect to="/verify" delay={0} />
 */
export const MetaRefreshRedirect: React.FC<MetaRefreshRedirectProps> = ({ 
  to, 
  delay = 0 
}) => {
  const fullUrl = to.startsWith('http') ? to : `https://safeorstolen.com${to}`;
  
  return (
    <Helmet>
      {/* Meta refresh for instant redirect */}
      <meta httpEquiv="refresh" content={`${delay};url=${to}`} />
      {/* HTTP status hint for crawlers */}
      <meta name="prerender-status-code" content="301" />
      <meta name="prerender-header" content={`Location: ${fullUrl}`} />
    </Helmet>
  );
};
