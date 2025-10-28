import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSafeLocation } from '@/hooks/useSafeLocation';
import { useAuth } from '@/lib/auth';
import { AppLoadingFallback } from './AppLoadingFallback';

interface RouteGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
  redirectTo?: string;
}

export const RouteGuard: React.FC<RouteGuardProps> = ({
  children,
  requireAuth = false,
  requireAdmin = false,
  redirectTo
}) => {
  const { user, loading } = useAuth();
  const isAuthenticated = !!user;
  const location = useSafeLocation();

  // Show loading while auth state is being determined
  if (loading) {
    return <AppLoadingFallback />;
  }

  // Check authentication requirement
  if (requireAuth && !isAuthenticated) {
    const redirectPath = redirectTo || '/auth';
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // Admin requirement should use SecureAdminGuard or AdminRoute instead
  // This check has been removed as it was insecure (client-side only)
  if (requireAdmin) {
    console.warn(
      'RouteGuard with requireAdmin is deprecated and insecure. ' +
      'Use AdminRoute component instead which uses SecureAdminGuard with server-side validation.'
    );
  }

  return <>{children}</>;
};