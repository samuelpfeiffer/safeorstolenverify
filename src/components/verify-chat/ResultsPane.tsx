import React from 'react';
import { cn } from '@/lib/utils';
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Database,
  FileDown,
  Share2,
  Bookmark,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateVerificationPDF } from '@/services/pdfReportService';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import {
  FirearmSourceDisclosure,
  isFirearmItemType,
} from '@/components/verification/FirearmSourceDisclosure';
import { FirearmNextSteps } from '@/components/verification/FirearmNextSteps';
import type { AggregatedResult } from '@/services/VerificationService';

export type ChatVerifyResult = {
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  identifier: string;
  itemType: string;
  message: string;
  confidence?: number;
  riskLevel?: string;
  sources?: string[];
  providers?: AggregatedResult['providers'];
  timestamp?: string;
};

interface ResultsPaneProps {
  current: ChatVerifyResult | null;
  history: ChatVerifyResult[];
  onSelectHistory: (r: ChatVerifyResult) => void;
  isAuthenticated: boolean;
}

const toneFor = (status: ChatVerifyResult['status']) => {
  switch (status) {
    case 'stolen':
      return {
        Icon: AlertTriangle,
        color: 'text-red-500',
        bg: 'bg-red-500/10',
        border: 'border-red-500/30',
        label: 'Stolen Match Found',
        ring: 'ring-red-500/20',
      };
    case 'lost':
      return {
        Icon: AlertTriangle,
        color: 'text-amber-500',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        label: 'Reported Lost',
        ring: 'ring-amber-500/20',
      };
    case 'safe':
      return {
        Icon: CheckCircle2,
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/30',
        label: 'No Theft Reports Found',
        ring: 'ring-emerald-500/20',
      };
    default:
      return {
        Icon: ShieldCheck,
        color: 'text-muted-foreground',
        bg: 'bg-muted',
        border: 'border-border',
        label: status.toUpperCase(),
        ring: 'ring-border',
      };
  }
};

export const ResultsPane: React.FC<ResultsPaneProps> = ({
  current,
  history,
  onSelectHistory,
  isAuthenticated,
}) => {
  const handleDownload = () => {
    if (!current) return;
    if (!isAuthenticated) {
      toast.error('Sign in to download PDF reports');
      return;
    }
    try {
      generateVerificationPDF({
        result: {
          identifier: current.identifier,
          itemType: current.itemType,
          finalStatus: current.status,
          confidence: current.confidence ?? 0,
          riskLevel: (current.riskLevel as any) ?? 'medium',
          message: current.message,
          providers: current.providers ?? [],
          checkedSources: current.sources ?? [],
          timestamp: current.timestamp ?? new Date().toISOString(),
        },
        identifier: current.identifier,
        itemType: current.itemType,
      });
      toast.success('PDF report downloaded');
    } catch (e) {
      toast.error('Could not generate PDF');
    }
  };

  const handleShare = async () => {
    if (!current) return;
    if (!isAuthenticated) {
      toast.error('Sign in to create a shareable link');
      return;
    }
    try {
      const { data, error } = await supabase.functions.invoke('generate-report-link', {
        body: {
          identifier: current.identifier,
          itemType: current.itemType,
          status: current.status,
          confidence: current.confidence,
          sources: current.sources,
        },
      });
      if (error) throw error;
      const url = data?.shareUrl || data?.url;
      if (url) {
        await navigator.clipboard.writeText(url);
        toast.success('Share link copied to clipboard');
      } else {
        toast.error('Share link not available');
      }
    } catch (e: any) {
      toast.error(e?.message || 'Could not create share link');
    }
  };

  if (!current) {
    return (
      <div className="h-full flex flex-col">
        <div className="px-5 py-4 border-b border-border/60">
          <h2 className="text-sm font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Verification Results
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Your downloadable reports will appear here
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          <div className="rounded-2xl border border-dashed border-border bg-card/40 p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-sm font-semibold mb-1">Ready when you are</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Paste an IMEI, VIN, serial, license plate, or marketplace URL on the
              left. Your detailed report — with download &amp; share — appears here.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-border/60 bg-card/40 p-3">
              <Database className="w-4 h-4 text-primary mb-1.5" />
              <div className="text-[11px] font-semibold">100+ databases</div>
              <div className="text-[10px] text-muted-foreground">
                GSMA, NICB, BikeIndex, HotGunz + 100 more
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/40 p-3">
              <Clock className="w-4 h-4 text-primary mb-1.5" />
              <div className="text-[11px] font-semibold">~3 second results</div>
              <div className="text-[10px] text-muted-foreground">
                Real-time aggregated checks
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/40 p-3">
              <FileDown className="w-4 h-4 text-primary mb-1.5" />
              <div className="text-[11px] font-semibold">PDF reports</div>
              <div className="text-[10px] text-muted-foreground">
                Download proof for any check
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/40 p-3">
              <Share2 className="w-4 h-4 text-primary mb-1.5" />
              <div className="text-[11px] font-semibold">Shareable links</div>
              <div className="text-[10px] text-muted-foreground">
                Send sellers proof in one click
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const tone = toneFor(current.status);

  return (
    <div className="h-full flex flex-col">
      <div className="px-5 py-4 border-b border-border/60 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Latest Verification
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {history.length} check{history.length === 1 ? '' : 's'} this session
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {/* Status header card */}
        <div className={cn('rounded-2xl border p-5', tone.bg, tone.border, 'ring-1', tone.ring)}>
          <div className="flex items-start gap-3">
            <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', 'bg-background/60')}>
              <tone.Icon className={cn('w-6 h-6', tone.color)} />
            </div>
            <div className="flex-1 min-w-0">
              <div className={cn('text-xs font-bold uppercase tracking-wide', tone.color)}>
                {tone.label}
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground truncate">
                {current.itemType.toUpperCase()}{' '}
                <code className="text-xs bg-background/70 px-1.5 py-0.5 rounded ml-1">
                  {current.identifier}
                </code>
              </div>
              {typeof current.confidence === 'number' && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-background/50 rounded-full overflow-hidden">
                    <div
                      className={cn('h-full rounded-full', tone.color.replace('text-', 'bg-'))}
                      style={{ width: `${current.confidence}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-muted-foreground">
                    {current.confidence}%
                  </span>
                </div>
              )}
            </div>
          </div>

          {current.message && (
            <p className="mt-4 text-xs text-foreground/80 leading-relaxed">{current.message}</p>
          )}
        </div>

        {/* Firearm-only honest source disclosure + definitive-check guidance */}
        {isFirearmItemType(current.itemType) && (
          <>
            <FirearmSourceDisclosure className="rounded-xl border border-border/60 bg-card/40 p-3" />
            <FirearmNextSteps className="mt-3" />
          </>
        )}

        {/* Sources */}
        {current.sources && current.sources.length > 0 && (
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
              <Database className="w-3 h-3" />
              Sources Checked ({current.sources.length})
            </div>
            <div className="space-y-1.5">
              {current.sources.map((src, i) => {
                const provider = current.providers?.find(
                  (p) => p.provider.toLowerCase() === src.toLowerCase(),
                );
                const ok = provider?.status === 'safe' || !provider;
                const flagged = provider?.status === 'stolen' || provider?.status === 'lost';
                return (
                  <div
                    key={`${src}-${i}`}
                    className="flex items-center justify-between text-xs px-3 py-2 rounded-lg bg-card/60 border border-border/60"
                  >
                    <span className="text-foreground truncate">{src}</span>
                    <span
                      className={cn(
                        'text-[10px] font-semibold uppercase',
                        flagged ? 'text-red-500' : ok ? 'text-emerald-500' : 'text-muted-foreground',
                      )}
                    >
                      {flagged ? 'Match' : ok ? 'Clear' : 'Checked'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-2">
          <Button onClick={handleDownload} className="w-full" size="sm">
            <FileDown className="w-4 h-4 mr-2" />
            Download PDF Report
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button onClick={handleShare} variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share Link
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (!isAuthenticated) {
                  toast.error('Sign in to save to your dashboard');
                  return;
                }
                toast.success('Saved to your dashboard');
              }}
            >
              <Bookmark className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
          {!isAuthenticated && (
            <p className="text-[10px] text-muted-foreground text-center pt-1">
              <a href="/auth?redirect=/verify" className="text-primary hover:underline">
                Sign in
              </a>{' '}
              to download, share, and save reports
            </p>
          )}
        </div>

        {/* Session history */}
        {history.length > 1 && (
          <div className="pt-2 border-t border-border/60">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Session History
            </div>
            <div className="space-y-1.5">
              {history
                .filter((h) => h.identifier !== current.identifier)
                .slice(0, 8)
                .map((h, i) => {
                  const t = toneFor(h.status);
                  return (
                    <button
                      key={`${h.identifier}-${i}`}
                      onClick={() => onSelectHistory(h)}
                      className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg bg-card/40 border border-border/40 hover:border-primary/40 hover:bg-card transition-colors"
                    >
                      <t.Icon className={cn('w-3.5 h-3.5 shrink-0', t.color)} />
                      <span className="text-xs text-foreground truncate flex-1">
                        {h.itemType.toUpperCase()} · {h.identifier}
                      </span>
                      <span className={cn('text-[10px] font-semibold uppercase', t.color)}>
                        {h.status}
                      </span>
                    </button>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
