import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSafeLocation } from "@/hooks/useSafeLocation";
import { StatusCodeHandler } from "@/components/seo/StatusCodeHandler";
import { Helmet } from "react-helmet-async";

/**
 * 404 Page - Only shown for TRUE 404s
 * 
 * Redirect checking is now handled by RedirectPage in AppRoutes.
 * This page is only reached via /404 route or when RedirectPage
 * confirms no redirect exists.
 */
const NotFound = () => {
  const location = useSafeLocation();

  useEffect(() => {
    if (location) {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
      );
    }
  }, [location?.pathname]);

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
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
          <p className="text-2xl text-gray-300 mb-4">Page Not Found</p>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Return to Home
            </Link>
            <Link 
              to="/verify" 
              className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
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
