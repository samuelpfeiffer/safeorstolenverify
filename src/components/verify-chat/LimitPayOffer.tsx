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
  const [busy, setBusy] = useState<'single' | 'complete' | 'monthly' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const buy = async (kind: 'single' | 'complete' | 'monthly') => {
    setBusy(kind);
    setError(null);
    try {
      let fingerprint: string | null = null;
      try { fingerprint = getOrCreateFingerprint(); } catch { fingerprint = null; }
      if (identifier) savePendingCheck(identifier, itemType);
      const { data, error: err } = await supabase.functions.invoke('create-checkout', {
        body: kind === 'monthly'
          ? { planName: 'Monthly', isSubscription: true, fingerprint }
          : { planName: kind === 'complete' ? 'Complete check' : 'Single check', plan: kind, serialNumber: identifier, itemType: itemType || 'unknown', fingerprint },
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
          <p className="font-semibold text-sm">You've used your free check. Pick how to run this one (plus one more):</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            No account needed. Pay once and the check runs as soon as you're back.
          </p>
        </div>
      </div>
      {/* Oct 29 2026: Complete ($2.99) first, Starter ($0.99) still available. */}
      <button
        type="button"
        onClick={() => buy('complete')}
        disabled={busy !== null}
        className="w-full text-left rounded-lg border-2 border-primary bg-primary/10 p-3 hover:bg-primary/15 transition disabled:opacity-60"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="font-bold text-sm">{busy === 'complete' ? 'Opening checkout…' : 'Complete check · 2 for $2.99'}</span>
          <span className="text-[10px] font-bold uppercase tracking-wide bg-primary text-primary-foreground rounded px-1.5 py-0.5">Best value</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">Police and registry records + phone blacklist search + web listings and AI review + free verification certificate</p>
      </button>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button size="sm" variant="outline" className="flex-1" onClick={() => buy('single')} disabled={busy !== null}>
          {busy === 'single' ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Opening checkout…</> : 'Starter · 2 for $0.99 (records only)'}
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
