import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Loader2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { reportsApi } from '@/lib/reportsClient';

/**
 * Admin review of stolen reports (Oct 5 2026). Since Nov 19 2026 every new report
 * lands here with an uploaded police report; approving marks it "Police report
 * verified". Guardrail reasons (volume limits, Proof of Clean Purchase, a second
 * reporter) and visitor problem reports still show here too.
 */

type QueueItem = {
  id: string; item_type: string; brand: string | null; model: string | null;
  serial_number: string | null; imei: string | null; vin: string | null;
  status: string; review_reason: string | null; created_at: string;
  city: string | null; state: string | null; police_report_provided: boolean | null; description: string | null;
  police_report_number?: string | null; police_report_url?: string | null; police_report_verified?: boolean | null;
};
type HotRow = { identifier: string | null; itemType: string | null; checks: number; connections: number; accounts: number; lastSeen: string };
type Dispute = { id: string; stolen_item_id: string; reason: string; contact_email: string | null; created_at: string };
type QueueResponse = {
  queue: QueueItem[]; disputes: Dispute[];
  stats: { filed: number; registered: number; recovered: number; cleared: number };
};

export default function ReportReviewPage() {
  const [data, setData] = useState<QueueResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [hot, setHot] = useState<HotRow[] | null>(null);

  const load = useCallback(async () => {
    setError(null);
    try { setData(await reportsApi<QueueResponse>('adminQueue')); }
    catch (e) { setError(e instanceof Error ? e.message : 'Could not load the queue.'); }
    try { setHot((await reportsApi<{ rows: HotRow[] }>('adminRiskHotlist')).rows); }
    catch { setHot([]); }
  }, []);

  useEffect(() => { load(); }, [load]);

  const decide = async (id: string, decision: 'approve' | 'clear' | 'needs_info') => {
    setBusy(id);
    try { await reportsApi('adminDecide', { id, decision, note: notes[id] || undefined }); await load(); }
    catch (e) { setError(e instanceof Error ? e.message : 'Could not save the decision.'); }
    finally { setBusy(null); }
  };

  const disputesFor = (id: string) => data?.disputes.filter((d) => d.stolen_item_id === id) ?? [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <Helmet>
        <title>Report Review | SafeOrStolen Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 className="text-3xl font-bold">Stolen report review</h1>

      {error && (
        <div className="flex items-start gap-2 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm">
          <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" /> {error}
        </div>
      )}

      {!data ? (
        !error && <div className="flex justify-center py-10"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {([
              ['Reports filed', data.stats.filed],
              ['Items registered', data.stats.registered],
              ['Recovered', data.stats.recovered],
              ['Cleared', data.stats.cleared],
            ] as const).map(([label, n]) => (
              <div key={label} className="rounded-xl border border-border bg-card p-4">
                <div className="text-2xl font-bold">{n}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Numbers checked from many places (last 7 days)</h2>
            <p className="text-sm text-muted-foreground">
              Numbers looked up from 5 or more different connections this week. Heavy activity can mean an item is being shopped around or flipped.
            </p>
            {!hot ? (
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            ) : hot.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nothing unusual this week.</p>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-left">
                    <tr>
                      <th className="px-3 py-2">Number</th><th className="px-3 py-2">Type</th>
                      <th className="px-3 py-2 text-right">Checks</th><th className="px-3 py-2 text-right">Places</th>
                      <th className="px-3 py-2 text-right">Accounts</th><th className="px-3 py-2">Last checked</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hot.map((h, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="px-3 py-2 font-mono">{h.identifier ?? 'Not in saved checks'}</td>
                        <td className="px-3 py-2">{h.itemType ?? '—'}</td>
                        <td className="px-3 py-2 text-right">{h.checks}</td>
                        <td className="px-3 py-2 text-right font-semibold">{h.connections}</td>
                        <td className="px-3 py-2 text-right">{h.accounts}</td>
                        <td className="px-3 py-2">{new Date(h.lastSeen).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Waiting for review ({data.queue.length})</h2>
            {data.queue.length === 0 && <p className="text-sm text-muted-foreground">Nothing to review.</p>}
            {data.queue.map((r) => (
              <div key={r.id} className="rounded-xl border border-border bg-card p-4 space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-medium">
                    {[r.brand, r.model].filter(Boolean).join(' ') || r.item_type}
                    <span className="ml-2 font-mono text-xs text-muted-foreground">{r.vin || r.imei || r.serial_number}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{new Date(r.created_at).toLocaleString()}</span>
                </div>
                <p className="text-sm"><span className="text-muted-foreground">Why held:</span> {r.review_reason || '—'}</p>
                <p className="text-xs text-muted-foreground">
                  {r.city}{r.state ? `, ${r.state}` : ''} · {r.police_report_number ? `Police report #${r.police_report_number}` : r.police_report_provided ? 'Police report number provided' : 'No police report number'}
                </p>
                {r.police_report_url ? (
                  <a href={r.police_report_url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md border border-primary/40 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/10">
                    Open uploaded police report
                  </a>
                ) : (
                  <p className="text-xs text-amber-600">No police report uploaded (filed before uploads were required).</p>
                )}
                {r.description && <p className="text-sm text-muted-foreground">{r.description}</p>}
                {disputesFor(r.id).map((d) => (
                  <div key={d.id} className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-2 text-sm">
                    <span className="font-semibold">Problem reported:</span> {d.reason}
                    {d.contact_email && <span className="block text-xs text-muted-foreground">Contact: {d.contact_email}</span>}
                  </div>
                ))}
                <Textarea rows={2} placeholder="Note (saved to the review log)" value={notes[r.id] ?? ''}
                  onChange={(e) => setNotes({ ...notes, [r.id]: e.target.value })} />
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" disabled={busy === r.id} onClick={() => decide(r.id, 'approve')}>Approve: police report checks out (goes live)</Button>
                  <Button size="sm" variant="outline" disabled={busy === r.id} onClick={() => decide(r.id, 'clear')}>Clear (not stolen)</Button>
                  <Button size="sm" variant="ghost" disabled={busy === r.id} onClick={() => decide(r.id, 'needs_info')}>Needs more info</Button>
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
}
