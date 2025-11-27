import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSafeLocation } from "@/hooks/useSafeLocation";
import { StatusCodeHandler } from "@/components/seo/StatusCodeHandler";
import { Helmet } from "react-helmet-async";

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
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-sos text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
          <p className="text-xl text-gray-300 mb-4">Oops! Page not found</p>
          <Link to="/" className="text-sos-orange hover:text-sos-orange/80 underline">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
