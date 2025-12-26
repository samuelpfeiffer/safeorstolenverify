import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSafeLocation } from "@/hooks/useSafeLocation";
import { StatusCodeHandler } from "@/components/seo/StatusCodeHandler";
import { Helmet } from "react-helmet-async";
import { findRedirect } from "@/utils/redirects";

/**
 * Smart 404 Page - Checks for redirects BEFORE rendering noindex
 * This prevents Google from seeing noindex on pages that should redirect
 */
const NotFound = () => {
  const location = useSafeLocation();
  const [redirectTo, setRedirectTo] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (!location) return;
    
    const currentPath = location.pathname;
    const redirect = findRedirect(currentPath);
    
    if (redirect) {
      console.log(`[NotFound] Found redirect: ${currentPath} → ${redirect}`);
      setRedirectTo(redirect);
    } else {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        currentPath
      );
    }
    
    setIsChecking(false);
  }, [location?.pathname]);

  // If we found a redirect, navigate immediately - NO noindex rendered
  if (redirectTo) {
    return <Navigate to={redirectTo} replace />;
  }

  // Still checking - show minimal loading (no noindex yet)
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sos">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    );
  }

  // Only render noindex for TRUE 404s (no redirect found)
  return (
    <>
      <StatusCodeHandler statusCode={404} noIndex={true} />
      <Helmet>
        <title>404 - Page Not Found | SafeOrStolen</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to SafeOrStolen homepage to verify stolen items." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://safeorstolen.com/404" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-sos text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
          <p className="text-xl text-gray-300 mb-4">Oops! Page not found</p>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Return to Home
            </Link>
            <Link 
              to="/verify" 
              className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
            >
              Verify an Item
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
