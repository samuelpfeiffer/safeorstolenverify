import { useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { savePendingCheck } from '@/lib/pendingCheck';

/**
 * Shown when a visitor has used their 1 free check. No account needed: tap an option, pay,
 * and /payment-success runs the same item.
 * One all-item check pack or monthly plan. Enhanced checks remain optional; no gun surcharge.
 */
type Kind = 'single' | 'complete' | 'monthly';

const OPTIONS: { kind: Kind; name: string; price: string; detail: string }[] = [
  { kind: 'single', name: '2 checks', price: '$0.99 once', detail: 'Use for any item type. Available theft and registry records. No subscription.' },
  { kind: 'monthly', name: 'Unlimited checks', price: '$10/month', detail: 'All item types. Includes certificates and up to 20 phone blacklist searches per month. Cancel anytime.' },
];

const PLAN_NAME = { single: 'Single check', complete: 'Complete check' };

export function LimitPayOffer({ identifier, itemType }: { identifier: string; itemType?: string }) {
  const [busy, setBusy] = useState<Kind | null>(null);
  const checkoutInProgress = useRef(false);
  const [error, setError] = useState<string | null>(null);

  const buy = async (kind: Kind) => {
    if (checkoutInProgress.current) return;
    checkoutInProgress.current = true;
    setBusy(kind);
    setError(null);
    try {
      let fingerprint: string | null = null;
      try { fingerprint = getOrCreateFingerprint(); } catch { fingerprint = null; }
      if (identifier) savePendingCheck(identifier, itemType);
      const { data, error: err } = await supabase.functions.invoke('create-checkout', {
        body: kind === 'monthly'
          ? { planName: 'Monthly', isSubscription: true, fingerprint }
          : { planName: PLAN_NAME[kind], plan: kind, serialNumber: identifier, itemType: itemType || 'unknown', fingerprint },
      });
      if (err || typeof data?.url !== 'string' || !data.url.trim()) throw new Error('Checkout didn\'t open. Tap your choice again.');
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Checkout didn\'t open. Tap your choice again.');
      checkoutInProgress.current = false;
      setBusy(null);
    }
  };

  return (
    <div className="mt-3 rounded-xl border border-border bg-card p-4">
      <p className="font-semibold">Your free check is used</p>
      <p className="text-sm text-muted-foreground mt-1">
        One chat for every item. Checks work across categories, including firearms. No category unlock fees.
      </p>

      <div className="mt-4 space-y-2" role="list">
        {OPTIONS.map((o) => (
          <button
            key={o.kind}
            type="button"
            role="listitem"
            onClick={() => buy(o.kind)}
            disabled={busy !== null}
            className={`w-full text-left rounded-lg border p-3 transition-colors disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary border-border hover:border-primary/50`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-semibold">
                {o.name}
              </span>
              <span className="font-semibold tabular-nums">
                {busy === o.kind ? <Loader2 className="h-4 w-4 animate-spin" aria-label="Opening checkout" /> : o.price}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{o.detail}</p>
          </button>
        ))}
      </div>

      <details className="mt-4 text-sm">
        <summary className="cursor-pointer font-medium">Need phone blacklist checks or certificates?</summary>
        <p className="text-muted-foreground mt-2">Optional: 2 enhanced checks for $2.99, paid once. Includes a certificate and phone blacklist searches for phones. Same price for every item type.</p>
        <button type="button" onClick={() => buy('complete')} disabled={busy !== null} className="mt-3 rounded-lg border border-border px-4 py-2 font-semibold disabled:opacity-60">
          {busy === 'complete' ? 'Opening checkout…' : 'Get 2 enhanced checks — $2.99 once'}
        </button>
      </details>
      <p className="text-xs text-muted-foreground mt-3">No account needed for a one-time purchase. Results list the sources searched.</p>
      {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
    </div>
  );
}

export default LimitPayOffer;
