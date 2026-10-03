import React, { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Loader2, ShieldCheck, X } from 'lucide-react';

interface AccountRequiredPromptProps {
  /** Same-origin path to return to after signing in, e.g. /verify?q=12345 */
  redirectPath: string;
  onDismiss?: () => void;
}

/**
 * Inline sign-up / sign-in prompt shown in the verification chat when a
 * signed-out visitor tries to run a check. Keeps the identifier they typed
 * by carrying it in the redirect path.
 */
export const AccountRequiredPrompt: React.FC<AccountRequiredPromptProps> = ({
  redirectPath,
  onDismiss,
}) => {
  const [loading, setLoading] = useState(false);

  const safePath = redirectPath.startsWith('/') && !redirectPath.startsWith('//')
    ? redirectPath
    : '/verify';

  const handleGoogle = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: `${window.location.origin}${safePath}` },
      });
      if (error) throw error;
    } catch (err: any) {
      console.error('Google sign-in error:', err);
      toast.error(err?.message || 'Could not start Google sign-in');
      setLoading(false);
    }
  };

  const authHref = (tab: 'signup' | 'signin') =>
    `/auth?tab=${tab}&redirect=${encodeURIComponent(safePath)}`;

  return (
    <div className="max-w-2xl mx-auto px-4 pb-3">
      <div className="relative rounded-xl border border-primary/40 bg-card/80 backdrop-blur-xl p-4 shadow-[0_0_24px_-12px_hsl(var(--primary))]">
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss"
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        <div className="flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">
              Create a free account to run this check
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Your entry is saved — we&apos;ll run the check as soon as you&apos;re in.
              2 free checks with a free account, then $3.99 per check or $14.99/month unlimited.
            </p>
          </div>
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <Button onClick={handleGoogle} disabled={loading} variant="outline" className="w-full">
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            )}
            Continue with Google
          </Button>

          <Button asChild className="w-full">
            <Link to={authHref('signup')}>Sign up with email</Link>
          </Button>
        </div>

        <p className="text-[11px] text-muted-foreground mt-2">
          Already have an account?{' '}
          <Link to={authHref('signin')} className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AccountRequiredPrompt;
