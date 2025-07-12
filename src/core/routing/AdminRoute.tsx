import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

interface AdminRouteProps {
  children: React.ReactNode;
}

/**
 * Admin Route Component
 * Restricts access to admin-only pages
 */
export const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { isAuthenticated, loading, user } = useUnifiedAuth();

  if (loading) {
    return <AppLoadingScreen />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  // Enhanced admin check
  const isAdmin = user?.email === 'admin@safeorstolen.com' || 
                  user?.email?.endsWith('@safeorstolen.com') ||
                  user?.email === 'samandhisbigideas@gmail.com';

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-sos text-white flex items-center justify-center">
        <Card className="bg-sos-dark border-sos-orange/20 max-w-md">
          <CardContent className="p-8 text-center">
            <AlertTriangle className="h-12 w-12 text-sos-orange mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-white">Access Denied</h2>
            <p className="text-gray-300">
              Administrator privileges required to access this area.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};