import React, { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { toast } from 'sonner';
import { History, Loader2 } from 'lucide-react';

/**
 * Nov 24 2026 (owner: history like Claude's sidebar).
 * Shown under a guest's check result in /verify. Guest chats live only in this browser
 * (useChatThreads keeps them in localStorage); signing in uploads them to the account
 * (chat_threads), so the check appears in the sidebar history and dashboard on any device.
 * Renders nothing for signed-in users.
 */
export const SaveHistoryPrompt: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  if (user) return null;

  const handleGoogle = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: `${window.location.origin}/verify` },
      });
      if (error) throw error;
    } catch (err: any) {
      console.error('Google sign-in error:', err);
      toast.error(err?.message || 'Could not start Google sign-in');
      setLoading(false);
    }
  };

  return (
    <div className="mt-3 rounded-xl border border-primary/30 bg-card/60 p-3">
      <div className="flex items-start gap-2.5">
        <History className="h-4 w-4 text-primary mt-0.5 shrink-0" />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">Save this check to your history</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Right now it's only saved in this browser. Sign in free to keep every check in your sidebar and dashboard, on any device.
          </p>
        </div>
      </div>
      <div className="mt-2.5 flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={handleGoogle} disabled={loading}>
          {loading && <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />}
          Continue with Google
        </Button>
        <Button size="sm" asChild>
          <Link to={`/auth?tab=signup&redirect=${encodeURIComponent('/verify')}`}>Sign up with email</Link>
        </Button>
      </div>
    </div>
  );
};

export default SaveHistoryPrompt;
