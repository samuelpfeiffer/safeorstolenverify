import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
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
  const { user, loading, isAuthenticated } = useUnifiedAuth();
  const location = useLocation();

  // Show loading while auth state is being determined
  if (loading) {
    return <AppLoadingFallback />;
  }

  // Check authentication requirement
  if (requireAuth && !isAuthenticated) {
    const redirectPath = redirectTo || '/auth';
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // Check admin requirement
  if (requireAdmin && user?.user_metadata?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};