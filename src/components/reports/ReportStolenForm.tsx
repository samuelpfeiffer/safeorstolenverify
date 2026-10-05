import { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle, ImagePlus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Link } from '@/lib/router-compat';
import { useAuth } from '@/lib/auth';
import { reportsApi, uploadPrivateFile } from '@/lib/reportsClient';

/**
 * Victim report form (Oct 5 2026). Saves through /reports-api, which checks the
 * signed-in account, validates VINs/IMEIs and decides whether the report goes
 * live or waits for review. The old form wrote to stolen_items from the browser,
 * which row-level security blocks.
 */

const ITEM_TYPES = [
  { value: 'phone', label: 'Phone or tablet', idLabel: 'IMEI (15 digits)', hint: 'Dial *#06# on the phone, or look on the box or carrier bill.' },
  { value: 'vehicle', label: 'Car, truck or motorcycle', idLabel: 'VIN (17 characters)', hint: 'On your title, registration or insurance card.' },
  { value: 'firearm', label: 'Firearm', idLabel: 'Serial number', hint: 'On your purchase receipt or the gun box.' },
  { value: 'bicycle', label: 'Bicycle or e-bike', idLabel: 'Frame serial number', hint: 'Usually under the bottom bracket, where the pedals meet the frame.' },
  { value: 'electronics', label: 'Laptop, camera or electronics', idLabel: 'Serial number', hint: 'On the receipt, the box, or the label underneath the device.' },
  { value: 'tool', label: 'Power tool or equipment', idLabel: 'Serial number', hint: 'On the tool’s data plate or your receipt.' },
  { value: 'boat', label: 'Boat or jet ski', idLabel: 'Hull ID (HIN)', hint: 'On the right rear of the hull and on your registration.' },
  { value: 'plate', label: 'License plate', idLabel: 'Plate number', hint: 'Letters and numbers only.' },
  { value: 'other', label: 'Something else', idLabel: 'Serial number', hint: 'Any unique number on the item or its paperwork.' },
] as const;

type Result = { id: string; status: string; itemType: string };

export function ReportStolenForm() {
  const { user } = useAuth();
  const [itemType, setItemType] = useState<string>('phone');
  const [identifier, setIdentifier] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [dateStolen, setDateStolen] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [policeReportNumber, setPoliceReportNumber] = useState('');
  const [emailMe, setEmailMe] = useState(true);
  const [photos, setPhotos] = useState<File[]>([]);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const type = ITEM_TYPES.find((t) => t.value === itemType) ?? ITEM_TYPES[0];
  const today = new Date().toISOString().slice(0, 10);

  const addPhotos = (files: FileList | null) => {
    if (!files) return;
    const images = Array.from(files).filter((f) => f.type.startsWith('image/') && f.size <= 8 * 1024 * 1024);
    setPhotos((prev) => [...prev, ...images].slice(0, 4));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!user) return setError('Please sign in to file a report.');
    if (!termsAccepted) return setError('Please confirm the report is true.');
    setSubmitting(true);
    try {
      const photoPaths = await Promise.all(photos.map((f) => uploadPrivateFile(user.id, f, 'photo')));
      const res = await reportsApi<Result>('report', {
        itemType,
        identifier,
        brand,
        model,
        description,
        dateStolen,
        city,
        state,
        policeReportNumber,
        contactPref: emailMe ? 'email' : 'none',
        photoPaths,
        termsAccepted: true,
      });
      setResult(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save the report. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (result) {
    const live = result.status === 'active';
    return (
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xl font-bold">Report saved</h2>
            <p className="text-muted-foreground mt-1">
              {live
                ? 'Your report is live. Anyone who checks this number on SafeOrStolen will see it was reported stolen, without your name or contact details.'
                : 'Your report is saved and waiting for a quick review before it goes live. We review reports to protect people from false accusations.'}
              {emailMe && ' We’ll email you if someone checks this number.'}
            </p>
          </div>
        </div>
        {result.itemType === 'bicycle' && (
          <p className="text-sm text-muted-foreground">
            For bikes, also register the theft with{' '}
            <a href="https://bikeindex.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">Bike Index</a>{' '}
            and{' '}
            <a href="https://project529.com/garage" target="_blank" rel="noopener noreferrer" className="text-primary underline">529 Garage</a>,
            the registries bike shops and police check.
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          <Button asChild><Link to="/my-items">See my items</Link></Button>
          <Button variant="outline" onClick={() => { setResult(null); setIdentifier(''); setPhotos([]); setTermsAccepted(false); }}>
            Report another item
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-5 sm:p-6 space-y-5">
      <div className="space-y-2">
        <Label htmlFor="rs-type">What was stolen?</Label>
        <select
          id="rs-type"
          value={itemType}
          onChange={(e) => setItemType(e.target.value)}
          className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm"
        >
          {ITEM_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="rs-id">{type.idLabel}</Label>
        <Input id="rs-id" required minLength={3} maxLength={50} autoComplete="off" value={identifier}
          onChange={(e) => setIdentifier(e.target.value)} className="h-11 font-mono uppercase" />
        <p className="text-xs text-muted-foreground">{type.hint}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="rs-brand">Brand <span className="text-muted-foreground font-normal">(optional)</span></Label>
          <Input id="rs-brand" maxLength={80} value={brand} onChange={(e) => setBrand(e.target.value)} className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rs-model">Model <span className="text-muted-foreground font-normal">(optional)</span></Label>
          <Input id="rs-model" maxLength={80} value={model} onChange={(e) => setModel(e.target.value)} className="h-11" />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="rs-date">Date stolen</Label>
          <Input id="rs-date" type="date" required max={today} value={dateStolen} onChange={(e) => setDateStolen(e.target.value)} className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rs-city">City</Label>
          <Input id="rs-city" required maxLength={80} value={city} onChange={(e) => setCity(e.target.value)} className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rs-state">State</Label>
          <Input id="rs-state" required minLength={2} maxLength={40} placeholder="e.g. AZ" value={state} onChange={(e) => setState(e.target.value)} className="h-11" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="rs-police">Police report number <span className="text-muted-foreground font-normal">(strongly recommended)</span></Label>
        <Input id="rs-police" maxLength={60} value={policeReportNumber} onChange={(e) => setPoliceReportNumber(e.target.value)} className="h-11" />
        <p className="text-xs text-muted-foreground">
          Reports with a police number are labeled “Police report number provided”. We never show the number itself.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="rs-desc">Anything that helps identify it <span className="text-muted-foreground font-normal">(optional)</span></Label>
        <Textarea id="rs-desc" maxLength={1500} rows={3} placeholder="Color, stickers, scratches, engraving…" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className="space-y-2">
        <Label>Photos <span className="text-muted-foreground font-normal">(optional, up to 4, kept private)</span></Label>
        <div className="flex flex-wrap gap-2">
          {photos.map((f, i) => (
            <span key={i} className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs">
              {f.name.slice(0, 24)}
              <button type="button" aria-label="Remove photo" onClick={() => setPhotos(photos.filter((_, j) => j !== i))}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
          {photos.length < 4 && (
            <label className="inline-flex items-center gap-1 rounded-full border border-dashed border-border px-3 py-1 text-xs cursor-pointer hover:border-primary">
              <ImagePlus className="h-3 w-3" /> Add photo
              <input type="file" accept="image/*" multiple className="sr-only" onChange={(e) => addPhotos(e.target.files)} />
            </label>
          )}
        </div>
      </div>

      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" className="mt-1 h-4 w-4" checked={emailMe} onChange={(e) => setEmailMe(e.target.checked)} />
        <span>Email me if someone checks this number. We never tell you who ran the check, and never share your details with them.</span>
      </label>

      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" className="mt-1 h-4 w-4" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
        <span>
          This item belongs to me and was stolen. I understand that false reports are prohibited and can be removed.
        </span>
      </label>

      {error && (
        <div className="flex items-start gap-2 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm">
          <AlertCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {user ? (
        <Button type="submit" size="lg" className="w-full" disabled={submitting}>
          {submitting ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Saving report…</> : 'Report stolen item'}
        </Button>
      ) : (
        <Button asChild size="lg" className="w-full">
          <Link to="/auth?redirect=/report-stolen">Sign in to file your report (free)</Link>
        </Button>
      )}
      <p className="text-xs text-muted-foreground text-center">
        Reporting is free. Your name, contact details, police number and photos are never shown to anyone who checks the item.
      </p>
    </form>
  );
}
