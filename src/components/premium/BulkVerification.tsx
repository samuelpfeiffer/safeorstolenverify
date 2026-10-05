import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Download, FileSpreadsheet, CheckCircle, XCircle, Loader2, AlertTriangle, HelpCircle } from 'lucide-react';
import { toast } from 'sonner';
import { requestVerification } from '@/lib/verification/verifyClient';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';

// Oct 5 2026: reworked for pawn shops and gun dealers (/bulk-check). Each row can say what the
// item is, so gun serials are searched against police gun theft records; "no report found" is no
// longer shown as a red X; the run stops cleanly when the account has no checks left.

type Status = 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';

interface BulkRow {
  identifier: string;
  type: string;
  note: string;
}

interface BulkResult extends BulkRow {
  status: Status;
  message: string;
  sources: string[];
  checkId: string | null;
  checkedAt: string;
}

const MAX_ROWS = 100;
const BATCH = 5;

const TYPE_OPTIONS: { value: string; label: string }[] = [
  { value: '', label: 'Detect automatically' },
  { value: 'firearm', label: 'Guns' },
  { value: 'phone', label: 'Phones (IMEI)' },
  { value: 'vehicle', label: 'Vehicles (VIN)' },
  { value: 'electronics', label: 'Electronics and tools (serial)' },
  { value: 'bike', label: 'Bikes' },
];

/** Map a free-text type from a spreadsheet to the item types /verify-api understands. */
function normalizeType(raw: string, fallback: string): string {
  const t = raw.trim().toLowerCase();
  if (!t) return fallback;
  if (/(gun|firearm|pistol|rifle|shotgun|revolver)/.test(t)) return 'firearm';
  if (/(phone|imei|iphone|tablet)/.test(t)) return 'phone';
  if (/(vin|vehicle|car|truck|motorcycle)/.test(t)) return 'vehicle';
  if (/(plate)/.test(t)) return 'plate';
  if (/(bike|bicycle|ebike)/.test(t)) return 'bike';
  if (/(laptop|tool|camera|console|electronic|serial|tv)/.test(t)) return 'electronics';
  return fallback;
}

/** Split one CSV line, honouring quoted fields. */
function splitCsvLine(line: string): string[] {
  const out: string[] = [];
  let cur = '';
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (q) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') q = false;
      else cur += c;
    } else if (c === '"') q = true;
    else if (c === ',' || c === '\t') { out.push(cur); cur = ''; }
    else cur += c;
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

function parseRows(text: string, defaultType: string): BulkRow[] {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (lines.length && /^(identifier|serial|imei|vin|id)\b/i.test(lines[0])) lines.shift();
  return lines
    .map((l) => {
      const [identifier = '', type = '', ...rest] = splitCsvLine(l);
      return { identifier, type: normalizeType(type, defaultType), note: rest.join(' ').trim() };
    })
    .filter((r) => r.identifier.length >= 3);
}

const csvCell = (v: string) => `"${String(v ?? '').replace(/"/g, '""')}"`;

const STATUS_LABEL: Record<Status, string> = {
  stolen: 'REPORTED STOLEN',
  lost: 'REPORTED LOST',
  safe: 'NO REPORT FOUND',
  unknown: 'NOT CONFIRMED',
  error: 'ERROR',
};

export const BulkVerification = () => {
  const [pasted, setPasted] = useState('');
  const [defaultType, setDefaultType] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<BulkResult[]>([]);
  const [stoppedReason, setStoppedReason] = useState<string | null>(null);

  const run = async (rows: BulkRow[]) => {
    if (rows.length === 0) { toast.error('No serial numbers found.'); return; }
    if (rows.length > MAX_ROWS) { toast.error(`Up to ${MAX_ROWS} items per run.`); return; }
    setIsProcessing(true);
    setStoppedReason(null);
    const done: BulkResult[] = [];
    setResults([]);
    let fingerprint: string | undefined;
    try { fingerprint = getOrCreateFingerprint(); } catch { fingerprint = undefined; }

    try {
      for (let i = 0; i < rows.length; i += BATCH) {
        const batch = rows.slice(i, i + BATCH);
        let limitHit = false;
        const out = await Promise.all(batch.map(async (row): Promise<BulkResult> => {
          const { data, error } = await requestVerification({
            identifier: row.identifier,
            itemType: row.type || undefined,
            fingerprint,
          });
          const checkedAt = new Date().toISOString();
          if (error?.code === 'LIMIT_REACHED' || error?.code === 'AUTH_REQUIRED') limitHit = true;
          if (error || !data) {
            return { ...row, status: 'error', message: error?.message ?? 'Check failed', sources: [], checkId: null, checkedAt };
          }
          return {
            ...row,
            status: (data.finalStatus as Status) ?? 'unknown',
            message: data.message ?? '',
            sources: data.checkedSources ?? [],
            checkId: data.checkId ?? null,
            checkedAt,
          };
        }));
        done.push(...out);
        setResults([...done]);
        if (limitHit) {
          setStoppedReason('Your account has no checks left. Bulk checking is built for the $14.99/month plan, which includes unlimited serial, gun and vehicle checks.');
          break;
        }
      }
      toast.success('Bulk check finished');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    if (!/\.(csv|txt)$/i.test(file.name)) { toast.error('Upload a .csv or .txt file'); return; }
    await run(parseRows(await file.text(), defaultType));
  };

  const downloadResults = () => {
    const header = ['Identifier', 'Type', 'Note', 'Result', 'Message', 'Sources searched', 'Checked at (UTC)', 'Check ID'];
    const csv = [
      header.join(','),
      ...results.map((r) => [r.identifier, r.type || 'auto', r.note, STATUS_LABEL[r.status], r.message, r.sources.join('; '), r.checkedAt, r.checkId ?? ''].map(csvCell).join(',')),
    ].join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = `safeorstolen-bulk-check-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const flagged = results.filter((r) => r.status === 'stolen' || r.status === 'lost').length;

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <FileSpreadsheet className="h-5 w-5 text-primary" />
        <h2 className="font-semibold text-lg">Bulk check</h2>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium" htmlFor="bulk-type">What are you checking?</label>
          <select
            id="bulk-type"
            value={defaultType}
            onChange={(e) => setDefaultType(e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 text-sm"
            disabled={isProcessing}
          >
            {TYPE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <p className="text-xs text-muted-foreground mt-1">Used for any row that doesn't say its own type. Pick Guns for firearm serials so police gun theft records are searched.</p>
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="bulk-paste">Paste serial numbers, one per line</label>
          <textarea
            id="bulk-paste"
            value={pasted}
            onChange={(e) => setPasted(e.target.value)}
            rows={6}
            placeholder={'ABC123456\n356789012345678, phone\n1HGBH41JXMN109186, vehicle, 2021 Accord'}
            className="mt-1 w-full rounded-lg border border-border bg-input px-3 py-2 font-mono text-sm"
            disabled={isProcessing}
          />
          <Button className="mt-2" onClick={() => run(parseRows(pasted, defaultType))} disabled={isProcessing || !pasted.trim()}>
            {isProcessing ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Checking {results.length}…</> : 'Check all'}
          </Button>
        </div>

        <div className="border-2 border-dashed rounded-lg p-6 text-center">
          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm font-medium mb-1">Or upload a spreadsheet (CSV)</p>
          <p className="text-xs text-muted-foreground mb-3">
            Columns: serial number, type (optional), note (optional). Up to {MAX_ROWS} items per run.
          </p>
          <Button asChild variant="outline" disabled={isProcessing}>
            <label className="cursor-pointer">
              Choose file
              <input type="file" accept=".csv,.txt" className="hidden" onChange={handleFile} disabled={isProcessing} />
            </label>
          </Button>
        </div>

        {stoppedReason && (
          <div className="rounded-lg border border-amber-500/40 bg-amber-500/5 p-4 text-sm">
            <p>{stoppedReason}</p>
            <a href="/pricing" className="text-primary underline text-sm">See the monthly plan</a>
          </div>
        )}

        {results.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3 gap-3 flex-wrap">
              <h3 className="font-medium">
                Results ({results.length}){flagged > 0 && <span className="ml-2 text-red-600">{flagged} flagged</span>}
              </h3>
              <Button onClick={downloadResults} size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" /> Download CSV
              </Button>
            </div>
            <div className="max-h-96 overflow-y-auto space-y-2">
              {results.map((r, i) => (
                <div key={`${r.identifier}-${i}`} className="flex items-center justify-between gap-3 p-3 bg-muted rounded-[0.25rem] text-sm">
                  <div className="flex items-center gap-2 min-w-0">
                    {r.status === 'stolen' || r.status === 'lost' ? <AlertTriangle className="h-4 w-4 text-red-500 shrink-0" />
                      : r.status === 'safe' ? <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      : r.status === 'error' ? <XCircle className="h-4 w-4 text-gray-500 shrink-0" />
                      : <HelpCircle className="h-4 w-4 text-amber-500 shrink-0" />}
                    <span className="font-mono truncate">{r.identifier}</span>
                    {r.note && <span className="text-xs text-muted-foreground truncate">{r.note}</span>}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-[0.25rem] shrink-0 ${
                    r.status === 'stolen' || r.status === 'lost' ? 'bg-red-500/10 text-red-600'
                      : r.status === 'safe' ? 'bg-green-500/10 text-green-600'
                      : 'bg-gray-500/10 text-gray-600'}`}>
                    {STATUS_LABEL[r.status]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default BulkVerification;
