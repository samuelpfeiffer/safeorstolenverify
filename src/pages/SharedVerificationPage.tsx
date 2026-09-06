/**
 * Public, read-only view of a shared verification result.
 * Route: /verification/shared/:token
 * No auth required. No save / download / share actions.
 */

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import {
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Database,
  Loader2,
  SearchX,
} from 'lucide-react';

type SharedStatus = 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';

interface SharedProvider {
  provider?: string;
  name?: string;
  status?: string;
  message?: string;
}

interface SharedVerification {
  identifier: string;
  itemType: string;
  checkedAt?: string;
  result: {
    status: SharedStatus;
    message?: string;
    providers?: SharedProvider[];
    riskLevel?: string;
    confidence?: number;
    checkedSources?: string[];
  };
}

const toneFor = (status: SharedStatus) => {
  switch (status) {
    case 'stolen':
      return {
        Icon: AlertTriangle,
        color: 'text-red-500',
        bg: 'bg-red-500/10',
        border: 'border-red-500/40',
        label: 'REPORTED STOLEN',
      };
    case 'safe':
      return {
        Icon: CheckCircle2,
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/40',
        label: 'SAFE',
      };
    case 'lost':
      return {
        Icon: AlertTriangle,
        color: 'text-amber-500',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/40',
        label: 'REPORTED LOST',
      };
    default:
      return {
        Icon: AlertTriangle,
        color: 'text-amber-500',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/40',
        label: 'NO RECORD FOUND',
      };
  }
};

const providerTone = (status?: string) => {
  const s = (status || '').toLowerCase();
  if (s === 'stolen') return 'text-red-500';
  if (s === 'safe' || s === 'clean' || s === 'clear') return 'text-emerald-500';
  return 'text-amber-500';
};

const SharedVerificationPage = () => {
  const { token } = useParams<{ token: string }>();
  const [data, setData] = useState<SharedVerification | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!token) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const { data: res, error } = await supabase.functions.invoke(
          'generate-report-link',
          { body: { token } }
        );
        if (cancelled) return;
        if (error || !res || !res.result) {
          setNotFound(true);
        } else {
          setData(res as SharedVerification);
        }
      } catch {
        if (!cancelled) setNotFound(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const footer = (
    <p className="mt-8 text-center text-xs text-muted-foreground">
      Verified by SafeOrStolen —{' '}
      <Link to="/" className="text-primary hover:underline">
        check your own items at safeorstolen.com
      </Link>
    </p>
  );

  if (loading) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <PageSEO
          title="Shared Verification Result | SafeOrStolen"
          description="View a shared SafeOrStolen verification result."
          canonicalUrl="https://safeorstolen.com/verification/shared"
          noIndex
        />
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
        <p className="mt-3 text-sm text-muted-foreground">Loading shared result…</p>
      </main>
    );
  }

  if (notFound || !data) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <PageSEO
          title="Shared Verification Result | SafeOrStolen"
          description="View a shared SafeOrStolen verification result."
          canonicalUrl="https://safeorstolen.com/verification/shared"
          noIndex
        />
        <div className="w-full max-w-md text-center">
          <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
            <SearchX className="w-7 h-7 text-muted-foreground" />
          </div>
          <h1 className="text-xl font-semibold mb-2">Result not available</h1>
          <p className="text-sm text-muted-foreground">
            This shared result could not be found or may have expired.
          </p>
          {footer}
        </div>
      </main>
    );
  }

  const { result } = data;
  const tone = toneFor(result.status);
  const Icon = tone.Icon;
  const checkedAt = data.checkedAt ? new Date(data.checkedAt) : null;

  return (
    <main className="px-4 py-10 md:py-14">
      <PageSEO
        title="Shared Verification Result | SafeOrStolen"
        description="View a shared SafeOrStolen verification result."
        canonicalUrl="https://safeorstolen.com/verification/shared"
        noIndex
      />

      <div className="mx-auto w-full max-w-2xl">
        <div className="flex items-center gap-2 justify-center mb-6 text-sm text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-primary" />
          Shared verification result
        </div>

        {/* Verdict */}
        <section
          className={cn(
            'rounded-2xl border p-6 text-center',
            tone.bg,
            tone.border
          )}
        >
          <Icon className={cn('w-10 h-10 mx-auto mb-3', tone.color)} />
          <h1 className={cn('text-2xl md:text-3xl font-bold tracking-tight', tone.color)}>
            {tone.label}
          </h1>
          {result.message && (
            <p className="mt-3 text-sm text-foreground/80 max-w-lg mx-auto">
              {result.message}
            </p>
          )}
        </section>

        {/* Details */}
        <section className="mt-5 rounded-2xl border border-border/60 bg-card/40 p-5 space-y-3">
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-muted-foreground">Identifier</span>
            <span className="font-mono font-medium break-all text-right">
              {data.identifier}
            </span>
          </div>
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-muted-foreground">Item type</span>
            <span className="font-medium capitalize">{data.itemType}</span>
          </div>
          {typeof result.confidence === 'number' && (
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-muted-foreground">Confidence</span>
              <span className="font-medium">{Math.round(result.confidence)}%</span>
            </div>
          )}
          {result.riskLevel && (
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-muted-foreground">Risk level</span>
              <span className="font-medium capitalize">{result.riskLevel}</span>
            </div>
          )}
          {checkedAt && (
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-muted-foreground flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Checked at
              </span>
              <span className="font-medium">{checkedAt.toLocaleString()}</span>
            </div>
          )}
        </section>

        {/* Sources */}
        {(result.providers?.length || result.checkedSources?.length) && (
          <section className="mt-5 rounded-2xl border border-border/60 bg-card/40 p-5">
            <h2 className="text-sm font-semibold flex items-center gap-2 mb-3">
              <Database className="w-4 h-4 text-primary" />
              Sources checked
            </h2>
            <ul className="space-y-2">
              {result.providers?.length
                ? result.providers.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between gap-3 text-sm border-b border-border/40 last:border-0 pb-2 last:pb-0"
                    >
                      <span className="font-medium">{p.name || p.provider}</span>
                      <span
                        className={cn(
                          'text-xs uppercase tracking-wide',
                          providerTone(p.status)
                        )}
                      >
                        {p.status || 'no record'}
                      </span>
                    </li>
                  ))
                : result.checkedSources?.map((s, i) => (
                    <li key={i} className="text-sm">
                      {s}
                    </li>
                  ))}
            </ul>
          </section>
        )}

        {footer}
      </div>
    </main>
  );
};

export default SharedVerificationPage;
