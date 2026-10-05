import { useState } from 'react';
import { Award, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { useNavigate } from '@/lib/router-compat';

/**
 * Offered under every check result (Oct 5 2026): a $1.99 certificate showing the
 * buyer or seller did their due diligence. Free for monthly members. The
 * certificate is built on the server from the saved check (/certificate-api).
 */
export function CertificateOffer({ checkId }: { checkId?: string | null }) {
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!checkId) return null;

  const getCertificate = async () => {
    setBusy(true);
    setError(null);
    try {
      const { data: s } = await supabase.auth.getSession();
      const token = s.session?.access_token;
      let fingerprint: string | null = null;
      try { fingerprint = getOrCreateFingerprint(); } catch { fingerprint = null; }

      const res = await fetch('/certificate-api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ checkId, fingerprint }),
      });
      const cert = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(cert?.error || 'Could not create the certificate.');

      if (cert.paid) {
        navigate(`/proof/${cert.id}`);
        return;
      }
      const { data, error: payErr } = await supabase.functions.invoke('create-checkout', {
        body: { product: 'certificate', proofId: cert.id, fingerprint },
      });
      if (payErr || !data?.url) throw new Error('Could not open checkout. Please try again.');
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong.');
      setBusy(false);
    }
  };

  return (
    <div className="rounded-xl border border-primary/40 bg-primary/5 p-4 space-y-2">
      <div className="flex items-start gap-3">
        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-sm">Get a verification certificate — $1.99</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            A dated, tamper-evident certificate with its own link showing you checked this item before the sale,
            and what the check found. Share it with the buyer or seller, or keep it with your receipt.
            Included free with the monthly plan.
          </p>
        </div>
      </div>
      <Button size="sm" className="w-full" onClick={getCertificate} disabled={busy}>
        {busy ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Preparing…</> : 'Get my certificate'}
      </Button>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default CertificateOffer;
