
import { ReactNode } from 'react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle } from 'lucide-react';

interface AdminGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
  requiredRole?: 'admin' | 'moderator';
}

/**
 * DEPRECATED: Use SecureAdminGuard instead
 * This component uses client-side email checks which can be bypassed
 * 
 * @deprecated Use SecureAdminGuard from '@/components/security/SecureAdminGuard' instead
 */
export const AdminGuard = ({ 
  children, 
  fallback,
  requiredRole = 'admin' 
}: AdminGuardProps) => {
  console.warn(
    'AdminGuard is deprecated and insecure. Use SecureAdminGuard instead. ' +
    'Client-side email checks can be bypassed by attackers.'
  );
  
  const { user, isAuthenticated } = useUnifiedAuth();

  // This is insecure - kept only for backwards compatibility
  // New code should use SecureAdminGuard which validates roles server-side
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

  return <>{children}</>;
};
