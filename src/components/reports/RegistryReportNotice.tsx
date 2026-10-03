import { useState } from 'react';
import { AlertTriangle, ShieldCheck, ShieldQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { reportsApi } from '@/lib/reportsClient';

interface ProviderLike {
  provider: string;
  status: string;
  details?: Record<string, unknown> | null;
}

/**
 * Shown when an identifier has an active report in SafeOrStolen's own database.
 * Public-safe: report date, police/user label, next steps. Never reporter details.
 */
export function RegistryReportNotice({ providers }: { providers?: ProviderLike[] | null }) {
  const hit = providers?.find((p) => p.provider === 'SafeOrStolen Database' && p.status === 'stolen');
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');
  if (!hit) return null;
  const d = (hit.details ?? {}) as { reportId?: string; reportedAt?: string; policeReportProvided?: boolean; generalArea?: string | null };
  const date = d.reportedAt
    ? new Date(d.reportedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : null;

  const submit = async () => {
    if (!d.reportId) return;
    setState('sending');
    setError('');
    try {
      await reportsApi('dispute', { stolenItemId: d.reportId, reason, contactEmail: email });
      setState('sent');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not send.');
      setState('error');
    }
  };

  return (
    <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-4 space-y-3 text-sm">
      <div className="flex items-start gap-2">
        <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-foreground">
            Reported stolen to SafeOrStolen{date ? ` on ${date}` : ''}.
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-muted-foreground">
            {d.policeReportProvided ? (
              <><ShieldCheck className="h-4 w-4" /> Police report number provided by the owner.</>
            ) : (
              <><ShieldQuestion className="h-4 w-4" /> User report — not verified by police.</>
            )}
            {d.generalArea ? <span> Reported in {d.generalArea}.</span> : null}
          </p>
        </div>
      </div>
      <div>
        <p className="font-medium text-foreground">What to do</p>
        <ul className="mt-1 list-disc pl-5 text-muted-foreground space-y-0.5">
          <li>Do not buy the item.</li>
          <li>Do not confront the seller.</li>
          <li>Contact your local police (non-emergency line) and give them the identifier and listing.</li>
        </ul>
        <p className="mt-2 text-xs text-muted-foreground">
          Reports can be made in error or the item may have been recovered. This is a report to SafeOrStolen, not a police record.
        </p>
      </div>
      {state === 'sent' ? (
        <p className="text-xs text-foreground">Thanks. The report is hidden while our team reviews it.</p>
      ) : open ? (
        <div className="space-y-2">
          <Textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            maxLength={1500}
            placeholder="What's wrong with this report? (for example: this is my item and it was never stolen)"
          />
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} placeholder="Your email (optional, so we can follow up)" />
          {error && <p className="text-xs text-destructive">{error}</p>}
          <Button size="sm" variant="outline" onClick={submit} disabled={state === 'sending' || reason.trim().length < 10}>
            {state === 'sending' ? 'Sending…' : 'Send to review'}
          </Button>
        </div>
      ) : (
        <button type="button" className="text-xs underline text-muted-foreground hover:text-foreground" onClick={() => setOpen(true)}>
          Report a problem with this report
        </button>
      )}
    </div>
  );
}
