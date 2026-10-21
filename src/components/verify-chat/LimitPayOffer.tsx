import { useState } from 'react';
import { Loader2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { savePendingCheck } from '@/lib/pendingCheck';

/**
 * Oct 16 2026: shown when a visitor has used their 1 free check. Since Oct 4, signed-out visitors
 * at the limit were only asked to create an account, with no way to pay, and no check was bought
 * after that (Sept 30-Oct 3 most buyers paid as guests). This puts the $0.99 check and the
 * $10 month one tap away, no account needed. After payment, /payment-success runs the same item.
 */
export function LimitPayOffer({ identifier, itemType }: { identifier: string; itemType?: string }) {
  const [busy, setBusy] = useState<'single' | 'monthly' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const buy = async (kind: 'single' | 'monthly') => {
    setBusy(kind);
    setError(null);
    try {
      let fingerprint: string | null = null;
      try { fingerprint = getOrCreateFingerprint(); } catch { fingerprint = null; }
      if (identifier) savePendingCheck(identifier, itemType);
      const { data, error: err } = await supabase.functions.invoke('create-checkout', {
        body: kind === 'single'
          ? { planName: 'Single check', serialNumber: identifier, itemType: itemType || 'unknown', fingerprint }
          : { planName: 'Monthly', isSubscription: true, fingerprint },
      });
      if (err || !data?.url) throw new Error('Could not open checkout. Please try again.');
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong.');
      setBusy(null);
    }
  };

  return (
    <div className="mt-3 rounded-xl border border-primary/40 bg-primary/5 p-4 space-y-3">
      <div className="flex items-start gap-3">
        <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-sm">You've used your free check. Run this one for $0.99</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            No account needed. Pay once and the check runs as soon as you're back. Or get unlimited checks for $10 a month.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button size="sm" className="flex-1" onClick={() => buy('single')} disabled={busy !== null}>
          {busy === 'single' ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Opening checkout…</> : 'Check it now: $0.99'}
        </Button>
        <Button size="sm" variant="outline" className="flex-1" onClick={() => buy('monthly')} disabled={busy !== null}>
          {busy === 'monthly' ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Opening checkout…</> : 'Unlimited: $10/month'}
        </Button>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default LimitPayOffer;
