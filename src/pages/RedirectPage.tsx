import { Navigate } from 'react-router-dom';
import { findRedirect } from '@/utils/redirects';
import { useSafeLocation } from '@/hooks/useSafeLocation';

/**
 * RedirectPage - Explicit route component for redirect URLs
 * 
 * This component is used as a catch-all BEFORE NotFound to ensure
 * redirect URLs never render noindex tags. When Google crawls a
 * redirect URL, this component immediately navigates to the target.
 * 
 * Benefits over relying on NotFound:
 * - No noindex meta tag ever rendered for redirect URLs
 * - Cleaner separation of concerns
 * - Faster redirect (no checking/loading state)
 */
const RedirectPage = () => {
  const location = useSafeLocation();
  const currentPath = location?.pathname || '/';
  const redirectTo = findRedirect(currentPath);

  if (redirectTo) {
    console.log(`[RedirectPage] 301 redirect: ${currentPath} → ${redirectTo}`);
    return <Navigate to={redirectTo} replace />;
  }

  // If no redirect found, go to 404
  return <Navigate to="/404" replace />;
};

export default RedirectPage;
