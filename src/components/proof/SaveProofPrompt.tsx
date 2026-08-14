import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/lib/auth';
import { ProofDisclaimer } from './ProofDisclaimer';
import { createProofRecord, toProofCategory, toProofResult } from '@/features/proof/api';

interface Props {
  /** Raw identifier — hashed before it leaves the browser, never stored raw. */
  identifier: string;
  itemType?: string | null;
  /** Internal verification status; only clean results should render this prompt. */
  status?: string | null;
  databasesQueried?: string[];
  checkId?: string | null;
}

/**
 * UI 1 — offered after a check returns clean. All fields optional, skippable.
 */
export const SaveProofPrompt: React.FC<Props> = ({
  identifier,
  itemType,
  status,
  databasesQueried = [],
  checkId,
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [dismissed, setDismissed] = useState(false);
  const [saving, setSaving] = useState(false);
  const [sellerName, setSellerName] = useState('');
  const [listingSource, setListingSource] = useState('');
  const [meetingLocation, setMeetingLocation] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');

  if (dismissed || !identifier) return null;

  const handleSave = async () => {
    setSaving(true);
    try {
      const id = await createProofRecord({
        rawIdentifier: identifier,
        category: toProofCategory(itemType),
        result: toProofResult(status),
        databasesQueried,
        checkId: checkId ?? null,
        sellerName: sellerName.trim() || null,
        listingSource: listingSource.trim() || null,
        meetingLocation: meetingLocation.trim() || null,
        purchasePrice: purchasePrice.trim() ? Number(purchasePrice) : null,
        userId: user?.id ?? null,
      });
      navigate(`/proof/${id}`);
    } catch (err) {
      console.error('[SaveProofPrompt] failed to save record', err);
      toast({
        title: 'Could not save record',
        description: 'Something went wrong saving your record. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <section
      aria-label="Save proof of clean purchase"
      className="rounded-xl border-2 border-primary/40 bg-card/60 p-5 space-y-4"
    >
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-foreground">
          Save proof you checked this before buying.
        </h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-xs text-muted-foreground space-y-1.5">
          <span>Seller name or handle (optional)</span>
          <Input value={sellerName} onChange={(e) => setSellerName(e.target.value)} />
        </label>
        <label className="text-xs text-muted-foreground space-y-1.5">
          <span>Where you found the listing (optional)</span>
          <Input value={listingSource} onChange={(e) => setListingSource(e.target.value)} />
        </label>
        <label className="text-xs text-muted-foreground space-y-1.5">
          <span>Meeting location (optional)</span>
          <Input value={meetingLocation} onChange={(e) => setMeetingLocation(e.target.value)} />
        </label>
        <label className="text-xs text-muted-foreground space-y-1.5">
          <span>Purchase price (optional)</span>
          <Input
            type="number"
            inputMode="decimal"
            min="0"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
          />
        </label>
      </div>

      <p className="text-[11px] text-muted-foreground">
        These details are private to you. They are never shown on the public record page.
      </p>

      <ProofDisclaimer />

      <div className="flex flex-wrap gap-3">
        <Button onClick={handleSave} disabled={saving} className="rounded-xl">
          {saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          Save record
        </Button>
        <Button variant="ghost" onClick={() => setDismissed(true)} className="rounded-xl">
          Skip
        </Button>
      </div>
    </section>
  );
};
