
import { ReactNode } from 'react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle } from 'lucide-react';

interface AdminGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
  requiredRole?: 'admin' | 'moderator';
}

export const AdminGuard = ({ 
  children, 
  fallback,
  requiredRole = 'admin' 
}: AdminGuardProps) => {
  const { user, isAuthenticated } = useUnifiedAuth();

  // Check if user is authenticated
  if (!isAuthenticated || !user) {
    return fallback || (
      <div className="min-h-screen bg-sos text-white flex items-center justify-center">
        <Card className="bg-sos border-sos-orange/20 max-w-md">
          <CardHeader>
            <CardTitle className="text-sos-orange flex items-center gap-2">
              <Shield className="h-6 w-6" />
              Authentication Required
            </CardTitle>
            <CardDescription className="text-gray-300">
              Please sign in to access this area.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  // TODO: Implement role checking when user roles system is in place
  // For now, we'll use a simple email-based check as a placeholder
  const isAdmin = user.email === 'admin@safeorstolen.com' || 
                 user.email?.endsWith('@safeorstolen.com');

  if (!isAdmin) {
    return fallback || (
      <div className="min-h-screen bg-sos text-white flex items-center justify-center">
        <Card className="bg-sos border-red-500/20 max-w-md">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              Access Denied
            </CardTitle>
            <CardDescription className="text-gray-300">
              You don't have permission to access this area. {requiredRole} privileges required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-400">
              Contact your administrator if you believe this is an error.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};
