import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Blocks search parameter URLs from being indexed by Google
 * Prevents URLs like /?search=query or /?q=query from appearing in search results
 */
export const SearchParamBlocker = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // Check if URL has search parameters that should not be indexed
  const hasSearchParam = searchParams.has('search') || 
                         searchParams.has('q') || 
                         searchParams.has('query') ||
                         searchParams.has('serialNumber');
  
  if (!hasSearchParam) return null;
  
  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
    </Helmet>
  );
};
