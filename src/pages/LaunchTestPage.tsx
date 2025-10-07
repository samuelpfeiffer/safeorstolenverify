
import { LaunchTestDashboard } from '@/components/testing/LaunchTestDashboard';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Navigate } from 'react-router-dom';

const LaunchTestPage = () => {
  const { isAuthenticated, loading, user } = useUnifiedAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sos">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange"></div>
      </div>
    );
  }

  // Security: This page should be protected by AdminRoute
  // Client-side checks are insecure and have been removed
  const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');

  if (!isAuthenticated) {
    return <Navigate to="/auth?tab=signin" replace />;
  }

  // In production, this page should be wrapped with AdminRoute
  // For development, allow all authenticated users
  if (!isDevelopment) {
    console.warn(
      'LaunchTestPage should be protected by AdminRoute in production. ' +
      'Client-side email checks have been removed for security.'
    );
  }

  return (
    <div className="min-h-screen bg-sos text-white pt-20">
      <LaunchTestDashboard />
    </div>
  );
};

export default LaunchTestPage;
