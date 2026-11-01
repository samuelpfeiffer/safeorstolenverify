import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { savePendingCheck } from '@/lib/pendingCheck';

/**
 * Shown when a visitor has used their 1 free check. No account needed: tap an option, pay,
 * and /payment-success runs the same item.
 * Nov 1 2026 (owner: "confusing and ugly"): three plain choices in one list, same layout each,
 * price on the right, one short line of what you get. Complete stays recommended.
 */
type Kind = 'single' | 'complete' | 'monthly';

const OPTIONS: { kind: Kind; name: string; price: string; detail: string; recommended?: boolean }[] = [
  { kind: 'single', name: 'Starter', price: '$0.99', detail: '2 checks. Police and registry records.' },
  {
    kind: 'complete',
    name: 'Complete',
    price: '$2.99',
    detail: '2 checks. Everything in Starter, plus phone blacklist, online listings and a free certificate.',
    recommended: true,
  },
  { kind: 'monthly', name: 'Unlimited', price: '$10/month', detail: 'Unlimited checks, billed monthly. Includes 20 phone blacklist searches a month.' },
];

export function LimitPayOffer({ identifier, itemType }: { identifier: string; itemType?: string }) {
  const [busy, setBusy] = useState<Kind | null>(null);
  const [error, setError] = useState<string | null>(null);

  const buy = async (kind: Kind) => {
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
      if (err || !data?.url) throw new Error('Checkout didn\'t open. Tap your choice again.');
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Checkout didn\'t open. Tap your choice again.');
      setBusy(null);
    }
  };

  return (
    <div className="mt-3 rounded-xl border border-border bg-card p-4">
      <p className="font-semibold">Your free check is used</p>
      <p className="text-sm text-muted-foreground mt-1">
        Pick an option to run this check. No account needed, and the check runs as soon as you've paid.
      </p>

      <div className="mt-4 space-y-2" role="list">
        {OPTIONS.map((o) => (
          <button
            key={o.kind}
            type="button"
            role="listitem"
            onClick={() => buy(o.kind)}
            disabled={busy !== null}
            className={`w-full text-left rounded-lg border p-3 transition-colors disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              o.recommended ? 'border-primary bg-primary/5 hover:bg-primary/10' : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-semibold">
                {o.name}
                {o.recommended && <span className="ml-2 text-xs font-medium text-primary">Recommended</span>}
              </span>
              <span className="font-semibold tabular-nums">
                {busy === o.kind ? <Loader2 className="h-4 w-4 animate-spin" aria-label="Opening checkout" /> : o.price}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{o.detail}</p>
          </button>
        ))}
      </div>

      {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
    </div>
  );
}

export default LimitPayOffer;
