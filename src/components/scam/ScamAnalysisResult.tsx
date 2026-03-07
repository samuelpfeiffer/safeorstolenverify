import React from 'react';
import { Info, AlertTriangle, AlertOctagon, CheckCircle, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ScamAnalysisResult as ScamResult } from '@/lib/scamAnalyzer';

interface Props {
  result: ScamResult;
}

const RISK_COLORS = {
  LOW: { stroke: 'stroke-green-500', text: 'text-green-600', bg: 'bg-green-100', badge: 'bg-green-500' },
  MEDIUM: { stroke: 'stroke-yellow-500', text: 'text-yellow-600', bg: 'bg-yellow-100', badge: 'bg-yellow-500' },
  HIGH: { stroke: 'stroke-orange-500', text: 'text-orange-600', bg: 'bg-orange-100', badge: 'bg-orange-500' },
  CRITICAL: { stroke: 'stroke-red-500', text: 'text-red-600', bg: 'bg-red-100', badge: 'bg-red-500' },
};

const SEVERITY_ICON = {
  info: <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />,
  warning: <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />,
  danger: <AlertOctagon className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />,
};

const SEVERITY_BADGE = {
  info: 'bg-blue-100 text-blue-700',
  warning: 'bg-yellow-100 text-yellow-700',
  danger: 'bg-red-100 text-red-700',
};

const SEVERITY_ORDER = { danger: 0, warning: 1, info: 2 };

export const ScamAnalysisResultCard: React.FC<Props> = ({ result }) => {
  const colors = RISK_COLORS[result.riskLevel];
  const circumference = 2 * Math.PI * 52;
  const offset = circumference - (result.scamRiskScore / 100) * circumference;
  const sortedFlags = [...result.flags].sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]);

  return (
    <section aria-label="AI Scam Analysis" className="bg-muted/30 border border-border rounded-xl overflow-hidden">
      <header className="px-6 py-4 border-b border-border flex items-center gap-3">
        <ShieldAlert className="w-5 h-5 text-primary" />
        <div>
          <h2 className="font-semibold text-foreground text-base">AI Scam Risk Analysis</h2>
          <p className="text-xs text-muted-foreground">Powered by SafeOrStolen AI</p>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Score Circle + Risk Badge */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-[120px] h-[120px]">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" strokeWidth="8" className="stroke-muted" />
              <circle
                cx="60" cy="60" r="52" fill="none" strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className={cn("transition-all duration-1000", colors.stroke)}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-foreground">{result.scamRiskScore}</span>
              <span className="text-xs text-muted-foreground">/100</span>
            </div>
          </div>
          <span className={cn("px-3 py-1 rounded-full text-white text-xs font-semibold uppercase", colors.badge)}>
            {result.riskLevel} RISK
          </span>
          <p className="text-sm font-medium text-foreground text-center">{result.recommendation}</p>
        </div>

        {/* Summary */}
        <p className="text-sm text-muted-foreground text-center leading-relaxed">{result.summary}</p>

        {/* Flags */}
        <section aria-label="Scam signals detected">
          <h3 className="text-sm font-semibold text-foreground mb-3">
            Scam Signals Detected ({result.totalSignals} found)
          </h3>
          {sortedFlags.length === 0 ? (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-sm text-green-700 dark:text-green-400">No scam signals detected. This appears to be a legitimate listing.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {sortedFlags.map((flag, i) => (
                <article key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
                  {SEVERITY_ICON[flag.severity]}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{flag.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{flag.description}</p>
                  </div>
                  <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase flex-shrink-0", SEVERITY_BADGE[flag.severity])}>
                    {flag.severity}
                  </span>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Safety Tips */}
        <aside aria-label="Marketplace safety tips">
          <details className="group">
            <summary className="cursor-pointer text-sm font-semibold text-foreground flex items-center gap-2 py-2">
              <span className="group-open:rotate-90 transition-transform">▶</span>
              Marketplace Safety Tips for Buyers
            </summary>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground mt-2 pl-2">
              <li>Meet in a well-lit public place with security cameras. Many police stations offer "safe exchange zones" specifically for marketplace transactions.</li>
              <li>Never pay with wire transfer, gift cards, cryptocurrency, or Zelle/Venmo "friends and family" mode. Use PayPal Goods & Services, cash in person, or platform-protected checkout.</li>
              <li>Test the item thoroughly before paying. Power on phones, start vehicle engines, check serial numbers match. If the seller refuses testing, walk away.</li>
              <li>Verify the serial number on the physical item matches what was listed. Scammers sometimes show a clean serial number but deliver a different (stolen) item.</li>
              <li>Bring someone with you. Never go alone to meet a stranger from the internet, especially for high-value items.</li>
              <li>Trust your instincts. If a deal seems too good to be true, it almost always is.</li>
            </ol>
          </details>
        </aside>
      </div>
    </section>
  );
};
