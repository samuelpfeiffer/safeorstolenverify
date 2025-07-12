
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

  // Only allow admin users or development environment
  const isAdmin = user?.email === 'samandhisbigideas@gmail.com'; // Replace with your admin email
  const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');

  if (!isAuthenticated || (!isAdmin && !isDevelopment)) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-sos text-white pt-20">
      <LaunchTestDashboard />
    </div>
  );
};

export default LaunchTestPage;
