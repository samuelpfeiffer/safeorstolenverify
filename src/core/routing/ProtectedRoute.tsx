import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireSubscription?: boolean;
}

/**
 * Protected Route Component
 * Ensures user authentication before accessing protected pages
 */
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireSubscription = false 
}) => {
  const { user, loading } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();

  if (loading) {
    return <AppLoadingScreen />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // TODO: Add subscription check when subscription system is fully implemented
  if (requireSubscription) {
    // Check subscription status here
    console.log('Subscription check required for:', user?.email);
  }

  return <>{children}</>;
};