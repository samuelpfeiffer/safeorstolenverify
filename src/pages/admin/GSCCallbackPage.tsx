import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const GSCCallbackPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      const error = searchParams.get('error');

      if (error) {
        toast({
          title: 'Connection Failed',
          description: `OAuth error: ${error}`,
          variant: 'destructive',
        });
        navigate('/admin/gsc-connect');
        return;
      }

      if (!code) {
        toast({
          title: 'Connection Failed',
          description: 'No authorization code received',
          variant: 'destructive',
        });
        navigate('/admin/gsc-connect');
        return;
      }

      try {
        // Exchange code for tokens via edge function
        const { data, error: invokeError } = await supabase.functions.invoke(
          `gsc-api?action=oauth-callback&code=${encodeURIComponent(code)}`
        );

        if (invokeError) throw invokeError;

        if (data.success) {
          toast({
            title: 'Connected Successfully',
            description: 'Your Google Search Console account is now connected',
          });
          navigate('/admin/gsc-status');
        } else {
          throw new Error(data.error || 'Unknown error');
        }
      } catch (err) {
        console.error('OAuth callback error:', err);
        toast({
          title: 'Connection Failed',
          description: err instanceof Error ? err.message : 'Failed to complete OAuth flow',
          variant: 'destructive',
        });
        navigate('/admin/gsc-connect');
      }
    };

    handleCallback();
  }, [searchParams, navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
        <p className="text-lg font-medium">Connecting your Google Search Console...</p>
        <p className="text-sm text-muted-foreground">Please wait while we complete the setup</p>
      </div>
    </div>
  );
};

export default GSCCallbackPage;
