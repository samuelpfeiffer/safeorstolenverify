import React, { useMemo } from 'react';
import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toCanonicalItemType, itemTypeLabel } from '@/lib/itemType';
import sosLogo from '@/assets/sos-logo.png';

interface VerificationRecordProps {
  /** Raw identifier — never rendered in full. */
  identifier: string;
  /** Any item type string; normalized for display. */
  itemType: string;
  /** Result status as shown to the user. */
  status: string;
  /** verification_searches row id, when available. */
  referenceId?: string | null;
  /** ISO timestamp of the verification, when available. */
  timestamp?: string | null;
  className?: string;
}

/** First 3 and last 4 characters kept; everything between replaced with bullets. */
export const maskIdentifier = (raw: string): string => {
  const id = (raw || '').trim();
  if (!id) return '—';
  if (id.length <= 7) return '•'.repeat(id.length);
  return `${id.slice(0, 3)}${'•'.repeat(id.length - 7)}${id.slice(-4)}`;
};

const shortRef = (referenceId?: string | null): string => {
  const source =
    referenceId && referenceId.length > 0
      ? referenceId
      : typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2);
  return source.replace(/-/g, '').slice(0, 8).toUpperCase();
};

export const VerificationRecord: React.FC<VerificationRecordProps> = ({
  identifier,
  itemType,
  status,
  referenceId,
  timestamp,
  className,
}) => {
  const reference = useMemo(() => shortRef(referenceId), [referenceId]);
  const when = useMemo(() => {
    const d = timestamp ? new Date(timestamp) : new Date();
    return Number.isNaN(d.getTime()) ? new Date() : d;
  }, [timestamp]);

  const label = itemTypeLabel(toCanonicalItemType(itemType));

  return (
    <div className={cn('print-record rounded-xl border border-border bg-card/60 p-4', className)}>
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          .print-record, .print-record * { visibility: visible !important; }
          .print-record {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
            border: none !important;
            background: #fff !important;
            color: #000 !important;
          }
          .print-record .no-print { display: none !important; }
        }
      `}</style>

      <div className="flex items-center gap-3 mb-4">
        <img src={sosLogo} alt="SafeOrStolen" className="h-8 w-8 rounded" loading="lazy" />
        <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
          Verification Record
        </h3>
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
        <dt className="text-muted-foreground">Reference</dt>
        <dd className="font-mono text-foreground">{reference}</dd>

        <dt className="text-muted-foreground">Date</dt>
        <dd className="text-foreground">{when.toLocaleDateString()}</dd>

        <dt className="text-muted-foreground">Time</dt>
        <dd className="text-foreground">{when.toLocaleTimeString()}</dd>

        <dt className="text-muted-foreground">Item type</dt>
        <dd className="text-foreground">{label}</dd>

        <dt className="text-muted-foreground">Identifier</dt>
        <dd className="font-mono text-foreground break-all">{maskIdentifier(identifier)}</dd>

        <dt className="text-muted-foreground">Result</dt>
        <dd className="font-semibold uppercase text-foreground">{status}</dd>
      </dl>

      <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
        This record documents that a verification was performed on the date and time shown.
      </p>

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="no-print mt-3 w-full"
        onClick={() => window.print()}
      >
        <Printer className="w-3.5 h-3.5 mr-2" />
        Download record
      </Button>
    </div>
  );
};

export default VerificationRecord;
