import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { savePendingCheck } from '@/lib/pendingCheck';
import { toCanonicalItemType } from '@/lib/itemType';

/**
 * Shown when a visitor has used their 1 free check. No account needed: tap an option, pay,
 * and /payment-success runs the same item.
 * Nov 1 2026 (owner: "confusing and ugly"): three plain choices in one list, same layout each,
 * price on the right, one short line of what you get. Complete stays recommended.
 */
type Kind = 'single' | 'complete' | 'gun_buyer' | 'monthly';

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

// Nov 6 2026 (owner approved): on gun checks, the $4.99 Gun Buyer's Check takes the place of the $2.99
// Complete check, whose phone blacklist and listings extras don't apply to guns. $0.99 and $10 are unchanged.
const GUN_OPTIONS: typeof OPTIONS = [
  { kind: 'single', name: 'Starter', price: '$0.99', detail: '2 checks. Police theft and loss reports.' },
  {
    kind: 'gun_buyer',
    name: "Gun Buyer's Check",
    price: '$4.99',
    detail: '2 checks, plus a dated certificate for each showing you checked the gun before buying.',
    recommended: true,
  },
  { kind: 'monthly', name: 'Unlimited', price: '$10/month', detail: 'Unlimited checks, billed monthly.' },
];

const PLAN_NAME: Record<Exclude<Kind, 'monthly'>, string> = {
  single: 'Single check',
  complete: 'Complete check',
  gun_buyer: "Gun Buyer's Check",
};

export function LimitPayOffer({ identifier, itemType }: { identifier: string; itemType?: string }) {
  const [busy, setBusy] = useState<Kind | null>(null);
  const isGun = toCanonicalItemType(itemType) === 'firearm';
  const options = isGun ? GUN_OPTIONS : OPTIONS;
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
          : { planName: PLAN_NAME[kind], plan: kind, serialNumber: identifier, itemType: itemType || 'unknown', fingerprint },
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
        {options.map((o) => (
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
