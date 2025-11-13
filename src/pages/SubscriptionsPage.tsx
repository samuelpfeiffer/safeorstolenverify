import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * Redirects /subscriptions to /pricing with proper SEO handling
 * This prevents duplicate content issues
 */
const SubscriptionsPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to pricing page
    navigate('/pricing', { replace: true });
  }, [navigate]);
  
  return (
    <Helmet>
      {/* Tell Google this page should not be indexed - canonical is /pricing */}
      <meta name="robots" content="noindex, follow" />
      {/* Canonical tag handled by PageSEO component to prevent duplicates */}
      <title>Redirecting to Pricing...</title>
    </Helmet>
  );
};

export default SubscriptionsPage;
