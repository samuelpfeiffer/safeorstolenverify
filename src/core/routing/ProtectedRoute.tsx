import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSafeLocation } from '@/hooks/useSafeLocation';
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
  const location = useSafeLocation();

  if (loading) {
    return <AppLoadingScreen />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth?tab=signin" state={{ from: location }} replace />;
  }

  // TODO: Add subscription check when subscription system is fully implemented
  if (requireSubscription) {
    // Check subscription status here
    console.log('Subscription check required for:', user?.email);
  }

  return <>{children}</>;
};