import { useState } from 'react';
import { Loader2, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { savePendingCheck } from '@/lib/pendingCheck';

/**
 * Oct 5 2026: free phone checks say the blacklist search is "part of the full check", but there
 * was no way to buy it from the result. This offers the $0.99 single check (blacklist included)
 * and, after payment, /payment-success runs the same IMEI again as a paid check.
 */
export function PhoneBlacklistOffer({ imei }: { imei: string }) {
  const [busy, setBusy] = useState<'single' | 'monthly' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const buy = async (kind: 'single' | 'monthly') => {
    setBusy(kind);
    setError(null);
    try {
      let fingerprint: string | null = null;
      try { fingerprint = getOrCreateFingerprint(); } catch { fingerprint = null; }
      savePendingCheck(imei, 'imei');
      const { data, error: err } = await supabase.functions.invoke('create-checkout', {
        body: kind === 'single'
          ? { planName: 'Single check', serialNumber: imei, itemType: 'phone', fingerprint }
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
    <div className="rounded-xl border border-amber-500/40 bg-amber-500/5 p-4 space-y-3">
      <div className="flex items-start gap-3">
        <Smartphone className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-sm">Is this phone blacklisted? Run the full check before you pay.</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            The free check confirms the IMEI is real. The full check searches the lost and stolen phone
            blacklist, which shows whether the phone was reported lost or stolen and may be blocked from
            carrier networks.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button size="sm" className="flex-1" onClick={() => buy('single')} disabled={busy !== null}>
          {busy === 'single' ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Opening checkout…</> : 'Check the blacklist — $0.99'}
        </Button>
        <Button size="sm" variant="outline" className="flex-1" onClick={() => buy('monthly')} disabled={busy !== null}>
          {busy === 'monthly' ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Opening checkout…</> : '$10/mo: 20 phone checks + unlimited everything else'}
        </Button>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default PhoneBlacklistOffer;
