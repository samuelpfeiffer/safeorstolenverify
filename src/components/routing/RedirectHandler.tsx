import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSafeLocation } from '@/hooks/useSafeLocation';
import { findRedirect } from '@/utils/redirects';

/**
 * Handles client-side redirects for legacy URLs
 * Fixes Google Search Console 404 and duplicate URL issues
 */
export const RedirectHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useSafeLocation();

  useEffect(() => {
    if (!location) return;

    const currentPath = location.pathname;
    const redirectTo = findRedirect(currentPath);

    if (redirectTo) {
      console.log(`[RedirectHandler] Redirecting ${currentPath} → ${redirectTo}`);
      // Use replace to avoid adding to browser history
      navigate(redirectTo, { replace: true });
    }
  }, [location, navigate]);

  return null; // This component renders nothing
};
