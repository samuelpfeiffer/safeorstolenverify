import React, { useEffect, useState } from 'react';
import { useNavigate } from '@/lib/router-compat';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Shield, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SecureAdminGuardProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  fallbackMessage?: string;
}

export const SecureAdminGuard: React.FC<SecureAdminGuardProps> = ({ 
  children, 
  requireAdmin = true,
  fallbackMessage 
}) => {
  const navigate = useNavigate();
  const { user, session } = useAuth();
  const [hasAdminRole, setHasAdminRole] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdminRole = async () => {
      if (!user) {
        setIsLoading(false);
        return;
      }
      
      try {
        const { data, error } = await supabase.rpc('is_admin_user');
        
        if (error) {
          console.error('Error checking admin role:', error);
          setHasAdminRole(false);
        } else {
          setHasAdminRole(data === true);
        }
      } catch (error) {
        console.error('Admin check failed:', error);
        setHasAdminRole(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminRole();
  }, [user]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-sos text-white flex items-center justify-center">
        <Card className="bg-sos-dark border-sos-orange/20 max-w-md">
          <CardContent className="p-8 text-center">
            <Loader2 className="h-12 w-12 text-sos-orange mx-auto mb-4 animate-spin" />
            <h2 className="text-2xl font-bold mb-2 text-white">Verifying Access</h2>
            <p className="text-gray-300">
              Performing security checks...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user || !session) {
    return (
      <div className="min-h-screen bg-sos text-white flex items-center justify-center">
        <Card className="bg-sos-dark border-red-500/50 max-w-md">
          <CardContent className="p-8 text-center">
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-white">Session Expired</h2>
            <p className="text-gray-300 mb-4">
              Your session has expired. Please log in again to continue.
            </p>
            <Button 
              onClick={() => navigate('/auth?tab=signin')}
              className="bg-sos-orange hover:bg-sos-orange/80"
            >
              Login Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (requireAdmin && !hasAdminRole) {
    return (
      <div className="min-h-screen bg-sos text-white flex items-center justify-center">
        <Card className="bg-sos-dark border-sos-orange/20 max-w-md">
          <CardContent className="p-8 text-center">
            <AlertTriangle className="h-12 w-12 text-sos-orange mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-white">Access Denied</h2>
            <p className="text-gray-300 mb-4">
              {fallbackMessage || 'Administrator privileges required to access this area.'}
            </p>
            <p className="text-sm text-gray-400">
              This access attempt has been logged for security purposes.
            </p>
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="mt-4 border-sos-orange/20 text-white hover:bg-sos-orange/10"
            >
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative">
      {hasAdminRole && (
        <div className="bg-red-500/10 border-b border-red-500/20 px-4 py-2">
          <div className="flex items-center gap-2 text-red-400 text-sm">
            <Shield className="h-4 w-4" />
            <span>Administrator Mode - All actions are logged and monitored</span>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};