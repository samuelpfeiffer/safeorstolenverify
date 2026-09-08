import React, { useState } from 'react';
import { Link, useNavigate } from '@/lib/router-compat';
import { ShieldCheck, Loader2, Copy, Check } from 'lucide-react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/lib/auth';
import { ProofDisclaimer } from './ProofDisclaimer';
import { createProofRecord, toProofCategory, toProofResult } from '@/features/proof/api';

const emailSchema = z
  .string()
  .trim()
  .email({ message: 'Enter a valid email address' })
  .max(255, { message: 'Email must be less than 255 characters' });

interface Props {
  /** Raw identifier — hashed before it leaves the browser, never stored raw. */
  identifier: string;
  itemType?: string | null;
  /** Internal verification status; only clean results should render this prompt. */
  status?: string | null;
  databasesQueried?: string[];
  checkId?: string | null;
}

/** UI 1 — offered after a check returns clean. */
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
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  // Never pre-checked.
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [recordId, setRecordId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (dismissed || !identifier) return null;

  const recordUrl = recordId ? `${window.location.origin}/proof/${recordId}` : '';

  const handleSave = async () => {
    let cleanEmail: string | null = null;
    if (email.trim()) {
      const parsed = emailSchema.safeParse(email);
      if (!parsed.success) {
        setEmailError(parsed.error.issues[0].message);
        return;
      }
      cleanEmail = parsed.data;
    }
    setEmailError(null);
    setSaving(true);
    try {
      const id = await createProofRecord({
        rawIdentifier: identifier,
        category: toProofCategory(itemType),
        result: toProofResult(status),
        databasesQueried,
        checkId: checkId ?? null,
        email: cleanEmail,
        marketingOptIn,
        userId: user?.id ?? null,
      });
      setRecordId(id);
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

  const handleCopy = () => {
    navigator.clipboard.writeText(recordUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      aria-label="Save proof of clean purchase"
      className="rounded-xl border-2 border-primary/40 bg-card/60 p-5 space-y-4"
    >
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-foreground">
          {recordId ? 'Your record is saved' : 'Save proof you checked this before buying.'}
        </h3>
      </div>

      {recordId ? (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Record <span className="font-mono text-foreground">{recordId}</span> — anyone with this
            link can view it.
          </p>
          <div className="flex flex-wrap gap-2 items-center">
            <code className="text-xs bg-muted rounded-lg px-3 py-2 break-all flex-1 min-w-[200px]">
              {recordUrl}
            </code>
            <Button variant="outline" size="sm" className="rounded-xl" onClick={handleCopy}>
              {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? 'Copied' : 'Copy link'}
            </Button>
            <Button size="sm" className="rounded-xl" onClick={() => navigate(`/proof/${recordId}`)}>
              View record
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-2">
            <label className="text-xs text-muted-foreground block space-y-1.5">
              <span>Email (optional) — so you can find this record later</span>
              <Input
                type="email"
                maxLength={255}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(null);
                }}
                aria-invalid={!!emailError}
              />
            </label>
            {emailError && <p className="text-xs text-destructive">{emailError}</p>}

            <div className="flex items-start gap-2 pt-1">
              <Checkbox
                id="proof-marketing-opt-in"
                checked={marketingOptIn}
                onCheckedChange={(v) => setMarketingOptIn(v === true)}
              />
              <label
                htmlFor="proof-marketing-opt-in"
                className="text-xs text-muted-foreground leading-relaxed"
              >
                Also send me occasional updates from SafeOrStolen.
              </label>
            </div>
          </div>

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
        </>
      )}

      <p className="text-[11px] text-muted-foreground">
        <Link to="/proof-of-purchase" className="text-primary hover:underline">
          What is proof of clean purchase?
        </Link>
      </p>
    </section>
  );
};
