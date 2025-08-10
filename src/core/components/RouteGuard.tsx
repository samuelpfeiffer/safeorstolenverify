import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
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
  if (requireAdmin && user?.email !== 'admin@safeorstolen.com') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};