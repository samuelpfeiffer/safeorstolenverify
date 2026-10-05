import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Loader2, ShieldCheck, AlertTriangle, Trash2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from '@/lib/router-compat';
import { ProtectedRoute } from '@/core/routing/ProtectedRoute';
import { useAuth } from '@/lib/auth';
import { reportsApi, uploadPrivateFile } from '@/lib/reportsClient';

/**
 * "My items" (Oct 5 2026): the owner's stolen reports and registered items.
 * Linked from owner-alert emails and the report confirmation screen.
 */

type Report = {
  id: string; item_type: string; brand: string | null; model: string | null;
  serial_number: string | null; imei: string | null; vin: string | null;
  status: string; created_at: string; date_stolen: string | null;
  city: string | null; state: string | null; police_report_provided: boolean | null;
};
type Registered = {
  id: string; item_type: string; identifier: string; brand: string | null; model: string | null;
  proof_path: string | null; created_at: string;
};

const STATUS_TEXT: Record<string, string> = {
  active: 'Live — shows as stolen when checked',
  reported: 'Live — shows as stolen when checked',
  pending_review: 'Waiting for review',
  recovered: 'Recovered',
  removed: 'Removed by you',
  cleared: 'Cleared after review',
};

const TYPES = [
  ['phone', 'Phone or tablet'], ['vehicle', 'Vehicle'], ['firearm', 'Firearm'], ['bicycle', 'Bicycle'],
  ['electronics', 'Electronics'], ['tool', 'Tool or equipment'], ['boat', 'Boat'], ['other', 'Other'],
] as const;

const fmt = (d: string | null) => (d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '');

function MyItemsContent() {
  const { user } = useAuth();
  const [reports, setReports] = useState<Report[]>([]);
  const [items, setItems] = useState<Registered[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const [showRegister, setShowRegister] = useState(false);
  const [regType, setRegType] = useState('phone');
  const [regId, setRegId] = useState('');
  const [regBrand, setRegBrand] = useState('');
  const [regModel, setRegModel] = useState('');
  const [regProof, setRegProof] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setError(null);
    try {
      const res = await reportsApi<{ items: Registered[]; reports: Report[] }>('listMine');
      setReports(res.reports);
      setItems(res.items);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not load your items.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const setStatus = async (id: string, status: 'recovered' | 'removed') => {
    if (status === 'removed' && !window.confirm('Remove this report? Checks will no longer show the item as stolen.')) return;
    setBusyId(id);
    try { await reportsApi('setStatus', { id, status }); await load(); }
    catch (e) { setError(e instanceof Error ? e.message : 'Could not update.'); }
    finally { setBusyId(null); }
  };

  const deleteItem = async (id: string) => {
    if (!window.confirm('Delete this registered item?')) return;
    setBusyId(id);
    try { await reportsApi('deleteRegistered', { id }); await load(); }
    catch (e) { setError(e instanceof Error ? e.message : 'Could not delete.'); }
    finally { setBusyId(null); }
  };

  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    setError(null);
    try {
      const proofPath = regProof ? await uploadPrivateFile(user.id, regProof, 'proof') : null;
      await reportsApi('register', { itemType: regType, identifier: regId, brand: regBrand, model: regModel, proofPath });
      setRegId(''); setRegBrand(''); setRegModel(''); setRegProof(null); setShowRegister(false);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save the item.');
    } finally {
      setSaving(false);
    }
  };

  const idOf = (r: Report) => r.vin || r.imei || r.serial_number || '';

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
      <Helmet>
        <title>My Items | SafeOrStolen</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div>
        <h1 className="text-3xl font-bold">My items</h1>
        <p className="text-muted-foreground mt-1">Your stolen reports and the items you’ve registered.</p>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm">
          <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" /> {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-10"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>
      ) : (
        <>
          <section className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">Stolen reports</h2>
              <Button asChild size="sm" variant="outline"><Link to="/report-stolen">Report an item</Link></Button>
            </div>
            {reports.length === 0 ? (
              <p className="text-sm text-muted-foreground">You haven’t reported anything stolen.</p>
            ) : reports.map((r) => {
              const live = r.status === 'active' || r.status === 'reported';
              const open = live || r.status === 'pending_review';
              return (
                <div key={r.id} className="rounded-xl border border-border bg-card p-4 space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="font-medium">
                      {[r.brand, r.model].filter(Boolean).join(' ') || r.item_type}
                      <span className="ml-2 font-mono text-xs text-muted-foreground">{idOf(r)}</span>
                    </div>
                    <span className={`text-xs font-semibold ${live ? 'text-red-500' : 'text-muted-foreground'}`}>
                      {STATUS_TEXT[r.status] ?? r.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Stolen {fmt(r.date_stolen)}{r.city ? ` in ${r.city}${r.state ? `, ${r.state}` : ''}` : ''} · Reported {fmt(r.created_at)}
                    {r.police_report_provided ? ' · Police report number provided' : ''}
                  </p>
                  {open && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      <Button size="sm" disabled={busyId === r.id} onClick={() => setStatus(r.id, 'recovered')}>I got it back</Button>
                      <Button size="sm" variant="outline" disabled={busyId === r.id} onClick={() => setStatus(r.id, 'removed')}>Remove report</Button>
                    </div>
                  )}
                </div>
              );
            })}
          </section>

          <section className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">Registered items</h2>
              {!showRegister && (
                <Button size="sm" variant="outline" onClick={() => setShowRegister(true)}>
                  <Plus className="h-4 w-4 mr-1" /> Register an item
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              Save the serial numbers of things you own, with a receipt if you have one. If something is ever stolen,
              you can report it in seconds and prove it’s yours.
            </p>

            {showRegister && (
              <form onSubmit={register} className="rounded-xl border border-border bg-card p-4 space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="ri-type">Type</Label>
                    <select id="ri-type" value={regType} onChange={(e) => setRegType(e.target.value)}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                      {TYPES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="ri-id">Serial, IMEI or VIN</Label>
                    <Input id="ri-id" required minLength={3} maxLength={50} value={regId} onChange={(e) => setRegId(e.target.value)} className="font-mono uppercase" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="ri-brand">Brand</Label>
                    <Input id="ri-brand" maxLength={80} value={regBrand} onChange={(e) => setRegBrand(e.target.value)} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="ri-model">Model</Label>
                    <Input id="ri-model" maxLength={80} value={regModel} onChange={(e) => setRegModel(e.target.value)} />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="ri-proof">Receipt or proof of purchase <span className="text-muted-foreground font-normal">(optional, kept private)</span></Label>
                  <input id="ri-proof" type="file" accept="image/*,application/pdf" className="text-sm"
                    onChange={(e) => setRegProof(e.target.files?.[0] ?? null)} />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" size="sm" disabled={saving}>
                    {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Save item'}
                  </Button>
                  <Button type="button" size="sm" variant="ghost" onClick={() => setShowRegister(false)}>Cancel</Button>
                </div>
              </form>
            )}

            {items.length === 0 && !showRegister ? (
              <p className="text-sm text-muted-foreground">No registered items yet.</p>
            ) : items.map((it) => (
              <div key={it.id} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    {[it.brand, it.model].filter(Boolean).join(' ') || it.item_type}
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">{it.identifier}{it.proof_path ? ' · receipt saved' : ''}</p>
                </div>
                <Button size="icon" variant="ghost" aria-label="Delete item" disabled={busyId === it.id} onClick={() => deleteItem(it.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
}

const MyItemsPage = () => (
  <ProtectedRoute>
    <MyItemsContent />
  </ProtectedRoute>
);

export default MyItemsPage;
