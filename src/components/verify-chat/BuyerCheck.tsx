import React, { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  CheckCircle2,
  XCircle,
  Copy,
  ShieldCheck,
  Loader2,
  AlertTriangle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { normalizeVin } from '@/lib/verification/vin';
import { ProofDisclaimer } from '@/components/proof/ProofDisclaimer';

/**
 * Buyer's Check — a guided due-diligence checklist for used vehicles.
 *
 * SafeOrStolen does the checks it can run itself (VIN math, NHTSA decode,
 * NHTSA recalls, our registry). The buyer does the checks only they can do
 * (door-sticker VIN, title vs. seller ID) and we record them.
 * Owner rule (Sept 30 2026): never send users to another website. No outbound links or popups.
 *
 * Honesty rules: steps done by the buyer are always labeled "checked by buyer".
 * A Proof of Clean Purchase is offered ONLY when every step passes.
 */

type NicbAnswer = 'none' | 'theft' | 'salvage' | null;
type YesNo = 'yes' | 'no' | null;

interface VehicleProvider {
  provider: string;
  status: string;
  details?: any;
}

interface BuyerCheckProps {
  vin: string;
  providers?: VehicleProvider[];
  /** Saved check id; the certificate is issued from it on the server. */
  checkId?: string | null;
}

export const BuyerCheck: React.FC<BuyerCheckProps> = ({ vin, providers = [], checkId }) => {
  const cleanVin = normalizeVin(vin);

  const vehicle = providers.find((p) => p.provider === 'Vehicle_Verification');
  const vd = vehicle?.details?.vehicleDetails ?? {};
  const recalls = vehicle?.details?.recalls ?? null;
  const description = [vd.year, vd.make, vd.model].filter(Boolean).join(' ');
  const autoChecked: string[] = Array.isArray(vehicle?.details?.databases)
    ? vehicle!.details.databases
    : [];

  const [doorVin, setDoorVin] = useState('');
  const [titleVin, setTitleVin] = useState<YesNo>(null);
  const [titleName, setTitleName] = useState<YesNo>(null);
  const [saving, setSaving] = useState(false);
  const [recordId, setRecordId] = useState<string | null>(null);

  const doorClean = normalizeVin(doorVin);
  const doorAnswered = doorClean.length === 17;
  const doorMatches = doorAnswered && doorClean === cleanVin;

  const steps = [
    { done: true, passed: true },
    { done: doorAnswered, passed: doorMatches },
    { done: titleVin !== null && titleName !== null, passed: titleVin === 'yes' && titleName === 'yes' },
  ];
  const doneCount = steps.filter((s) => s.done).length;
  const allDone = doneCount === steps.length;
  const allPassed = steps.every((s) => s.passed);
  const anyFailed = steps.some((s) => s.done && !s.passed);

  const databasesQueried = useMemo(() => {
    const auto = autoChecked.length ? autoChecked : ['NHTSA VIN Decoder'];
    return [
      'SafeOrStolen registry',
      ...auto,
      'Checked by buyer: door-jamb sticker VIN matches the dashboard VIN',
      'Checked by buyer: VIN on the title matches the vehicle',
      "Checked by buyer: name on the title matches the seller's photo ID",
    ];
  }, [autoChecked]);

  // Oct 5 2026: issued on the server from the saved check ($1.99, free for members).
  const save = async () => {
    if (!allDone || !allPassed || !checkId) return;
    setSaving(true);
    try {
      const { data: s } = await supabase.auth.getSession();
      const token = s.session?.access_token;
      let fingerprint: string | null = null;
      try { fingerprint = getOrCreateFingerprint(); } catch { fingerprint = null; }
      const buyerSteps = databasesQueried.filter((d) => d.startsWith('Checked by buyer: '));
      const res = await fetch('/certificate-api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ checkId, fingerprint, buyerSteps }),
      });
      const cert = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(cert?.error || "Couldn't create the certificate.");
      if (cert.paid) {
        setRecordId(cert.id);
        toast.success('Certificate issued.');
        return;
      }
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { product: 'certificate', proofId: cert.id, fingerprint },
      });
      if (error || !data?.url) throw new Error('Could not open checkout.');
      window.location.href = data.url;
    } catch (err: any) {
      toast.error(err?.message ? `Couldn't save: ${err.message}` : "Couldn't save the record. Try again.");
    } finally {
      setSaving(false);
    }
  };

  const recordUrl = recordId ? `${window.location.origin}/proof/${recordId}` : '';

  return (
    <section
      aria-labelledby="buyer-check-heading"
      className="rounded-2xl border border-border bg-card/60 p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 id="buyer-check-heading" className="text-base font-semibold text-foreground">
            Buyer's Check
          </h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            Four steps before you hand over money. We record each one, and if everything
            checks out you get a Proof of Clean Purchase.
          </p>
        </div>
        <span className="shrink-0 text-sm font-semibold tabular-nums text-foreground">
          {doneCount} of {steps.length}
        </span>
      </div>
      <Progress value={(doneCount / steps.length) * 100} className="mt-3 h-1.5" />

      <ol className="mt-5 space-y-5">
        {/* Step 1 — done by SafeOrStolen */}
        <Step n={1} title="VIN checked by SafeOrStolen" state="pass">
          <p>
            The VIN is real{description ? <> and belongs to a <strong>{description}</strong></> : null}.
            {recalls && typeof recalls.count === 'number' ? (
              <>
                {' '}
                {recalls.count} safety recall{recalls.count === 1 ? '' : 's'} on record for this model.</>
            ) : null}
          </p>
          {vehicle?.details?.theftaz?.checked === true && (
            <p className="mt-1">
              Not reported stolen in Arizona law-enforcement records as of today.
            </p>
          )}
          <p className="mt-1">
            If the listing described a different car, stop here.
          </p>
        </Step>

        {/* Step 2 — door sticker */}
        <Step
          n={2}
          title="Match the door-jamb sticker"
          state={!doorAnswered ? 'todo' : doorMatches ? 'pass' : 'fail'}
        >
          <p>
            Open the driver's door and find the sticker on the frame. Type the VIN printed on it.
            Thieves often swap the dashboard plate but miss the sticker.
          </p>
          <label htmlFor="door-vin" className="sr-only">
            VIN from the door-jamb sticker
          </label>
          <Input
            id="door-vin"
            value={doorVin}
            onChange={(e) => setDoorVin(e.target.value.toUpperCase())}
            placeholder="VIN from the door sticker"
            maxLength={24}
            autoComplete="off"
            spellCheck={false}
            className="mt-3 font-mono tracking-wide"
          />
          {doorAnswered && doorMatches && (
            <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">Matches the dashboard VIN.</p>
          )}
          {doorAnswered && !doorMatches && (
            <Warning>
              The door sticker doesn't match the dashboard VIN. This is a common sign of a stolen
              car with a swapped VIN. Double-check your typing. If it still doesn't match, don't buy.
            </Warning>
          )}
          {doorClean.length > 0 && doorClean.length < 17 && (
            <p className="mt-2 text-xs text-muted-foreground">{17 - doorClean.length} characters to go.</p>
          )}
        </Step>

        {/* Step 3 — title and ID */}
        <Step
          n={3}
          title="Compare the title to the seller"
          state={
            titleVin === null || titleName === null
              ? 'todo'
              : titleVin === 'yes' && titleName === 'yes'
                ? 'pass'
                : 'fail'
          }
        >
          <YesNoRow
            label="Does the VIN on the title match this car?"
            value={titleVin}
            onChange={setTitleVin}
          />
          <YesNoRow
            label="Does the name on the title match the seller's photo ID?"
            value={titleName}
            onChange={setTitleName}
          />
          {(titleVin === 'no' || titleName === 'no') && (
            <Warning>
              The person selling may not be the legal owner. Don't pay until the owner on the title
              is present, or you see signed paperwork that explains it.
            </Warning>
          )}
        </Step>
      </ol>

      <div className="mt-6 border-t border-border pt-5">
        {recordId ? (
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-sm font-medium text-foreground">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden />
              Your Proof of Clean Purchase is saved.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm">
                <a href={`/proof/${recordId}`} target="_blank" rel="noopener noreferrer">
                  View record
                </a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(recordUrl);
                    toast.success('Link copied.');
                  } catch {
                    toast.message(recordUrl);
                  }
                }}
              >
                Copy link
              </Button>
            </div>
          </div>
        ) : anyFailed ? (
          <p className="text-sm text-foreground">
            One or more steps didn't check out, so we won't issue a Proof of Clean Purchase for
            this vehicle.
          </p>
        ) : (
          <div className="space-y-3">
            <Button onClick={save} disabled={!allDone || saving} className="w-full sm:w-auto">
              {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden /> : null}
              Get Proof of Clean Purchase — $1.99
            </Button>
            {!allDone && (
              <p className="text-xs text-muted-foreground">Finish all four steps to save your record.</p>
            )}
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your record lists what SafeOrStolen checked and what you checked, with the date. Only
              the last four characters of the VIN are shown.
            </p>
            <ProofDisclaimer />
          </div>
        )}
      </div>
    </section>
  );
};

/* ---------- small pieces ---------- */

const Step: React.FC<{
  n: number;
  title: string;
  state: 'todo' | 'pass' | 'fail';
  children: React.ReactNode;
}> = ({ n, title, state, children }) => (
  <li className="grid grid-cols-[1.75rem_1fr] gap-3">
    <span
      aria-hidden
      className={cn(
        'mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border text-sm font-semibold tabular-nums',
        state === 'pass' && 'border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
        state === 'fail' && 'border-red-500/50 bg-red-500/10 text-red-600 dark:text-red-400',
        state === 'todo' && 'border-border text-muted-foreground',
      )}
    >
      {state === 'pass' ? (
        <CheckCircle2 className="h-4 w-4" />
      ) : state === 'fail' ? (
        <XCircle className="h-4 w-4" />
      ) : (
        n
      )}
    </span>
    <div className="min-w-0">
      <h4 className="text-sm font-semibold text-foreground">
        <span className="sr-only">Step {n}: </span>
        {title}
        <span className="sr-only">
          {state === 'pass' ? ' (done)' : state === 'fail' ? ' (problem found)' : ' (to do)'}
        </span>
      </h4>
      <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  </li>
);

const Choice: React.FC<{
  selected: boolean;
  tone?: 'bad';
  onClick: () => void;
  children: React.ReactNode;
}> = ({ selected, tone, onClick, children }) => (
  <button
    type="button"
    aria-pressed={selected}
    onClick={onClick}
    className={cn(
      'rounded-full border px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      !selected && 'border-border text-foreground hover:bg-muted',
      selected && !tone && 'border-emerald-500 bg-emerald-500/15 text-foreground',
      selected && tone === 'bad' && 'border-red-500 bg-red-500/15 text-foreground',
    )}
  >
    {children}
  </button>
);

const YesNoRow: React.FC<{
  label: string;
  value: YesNo;
  onChange: (v: YesNo) => void;
}> = ({ label, value, onChange }) => (
  <fieldset className="mt-3 first:mt-0">
    <legend className="text-sm text-foreground">{label}</legend>
    <div className="mt-2 flex gap-2">
      <Choice selected={value === 'yes'} onClick={() => onChange('yes')}>
        Yes
      </Choice>
      <Choice selected={value === 'no'} tone="bad" onClick={() => onChange('no')}>
        No
      </Choice>
    </div>
  </fieldset>
);

const Warning: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p
    role="alert"
    className="mt-3 flex gap-2 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-foreground"
  >
    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden />
    <span>{children}</span>
  </p>
);

export default BuyerCheck;
