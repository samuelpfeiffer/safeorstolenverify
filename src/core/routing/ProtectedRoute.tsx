import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
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
  const { isAuthenticated, loading, user } = useUnifiedAuth();
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