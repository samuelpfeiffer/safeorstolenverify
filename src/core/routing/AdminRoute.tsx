import React from 'react';
import { Navigate } from '@/lib/router-compat';
import { useAuth } from '@/lib/auth';
import { SecureAdminGuard } from '@/components/security/SecureAdminGuard';

interface AdminRouteProps {
  children: React.ReactNode;
}

/**
 * Admin Route Component
 * Restricts access to admin-only pages
 */
export const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const isAuthenticated = !!user;

  if (loading) {
    return (
      <div className="min-h-screen bg-sos flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sos-orange"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth?tab=signin" replace />;
  }

  return (
    <SecureAdminGuard requireAdmin={true}>
      {children}
    </SecureAdminGuard>
  );
};