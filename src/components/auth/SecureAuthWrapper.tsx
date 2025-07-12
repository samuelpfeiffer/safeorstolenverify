
import { useEffect, useState } from 'react';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { SecurityStatusIndicator } from '@/components/security/SecurityStatusIndicator';
import { validateSecureContext, logSecurityEvent } from '@/utils/securityAudit';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

interface SecureAuthWrapperProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

export const SecureAuthWrapper = ({ children, requireAuth = false }: SecureAuthWrapperProps) => {
  const { isAuthenticated, user, loading } = useSecureAuth();
  const [secureContext, setSecureContext] = useState(true);

  useEffect(() => {
    const isSecure = validateSecureContext();
    setSecureContext(isSecure);

    if (isAuthenticated && user) {
      logSecurityEvent({
        action: 'user_session_validated',
        table_name: 'auth_sessions',
        record_id: user.id,
      });
    }
  }, [isAuthenticated, user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange"></div>
      </div>
    );
  }

  if (requireAuth && !isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Authentication Required</h2>
            <p className="text-gray-600 mb-4">
              You need to be signed in to access this feature.
            </p>
            <a
              href="/auth"
              className="inline-block bg-sos-orange text-white px-4 py-2 rounded hover:bg-sos-orange/90 transition-colors"
            >
              Sign In
            </a>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!secureContext) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto border-yellow-500">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Security Warning</h2>
            <p className="text-gray-600 mb-4">
              This application requires a secure connection (HTTPS) for optimal security.
            </p>
            <div className="mt-4">
              <SecurityStatusIndicator />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative">
      {children}
      {isAuthenticated && (
        <div className="fixed bottom-4 right-4 z-50">
          <SecurityStatusIndicator />
        </div>
      )}
    </div>
  );
};
