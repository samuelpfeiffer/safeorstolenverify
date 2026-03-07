import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Shield, Download, Share2, ExternalLink, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getStatusColor } from '@/utils/itemTypeDetector';
import { TrustMeter } from './TrustMeter';
import { generateCompliancePDF } from '@/utils/complianceCertificate';
import { AIVerificationAnalysis } from '@/components/ai/AIVerificationAnalysis';
import { SmartRecommendations } from '@/components/ai/SmartRecommendations';
import { PredictiveTheftAlerts } from '@/components/ai/PredictiveTheftAlerts';
import { AISellerReport } from '@/components/ai/AISellerReport';
import { CleanResultOffers } from './CleanResultOffers';
import type { VerificationResult } from './UniversalTrustEngine';

interface Props {
  result: VerificationResult;
  onNewCheck: () => void;
}

export const VerificationResultCard: React.FC<Props> = ({ result, onNewCheck }) => {
  const colors = getStatusColor(result.status);
  const [copied, setCopied] = React.useState(false);

  const handleDownloadPDF = useCallback(() => {
    generateCompliancePDF(result);
  }, [result]);

  const handleCopyTLDR = useCallback(() => {
    navigator.clipboard.writeText(result.tldr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [result.tldr]);

  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: 'SafeOrStolen Verification',
        text: result.tldr,
        url: window.location.href,
      });
    } else {
      handleCopyTLDR();
    }
  }, [result.tldr, handleCopyTLDR]);

  return (
    <div className="modern-card overflow-hidden">
      {/* Status header */}
      <div className={cn("px-6 py-4 flex items-center justify-between border-b border-border", colors.bg)}>
        <div className="flex items-center gap-3">
          <Shield className={cn("w-5 h-5", colors.text)} />
          <span className="font-semibold text-foreground">
            {result.status === 'clean' ? 'No Reports Found' :
             result.status === 'flagged' ? 'Potential Match — Review' : 'Reported Stolen'}
          </span>
        </div>
        <span className="text-xs text-muted-foreground font-mono">
          {new Date(result.timestamp).toLocaleTimeString()}
        </span>
      </div>

      <div className="p-6 space-y-6">
        {/* Trust Meter */}
        <TrustMeter score={result.score} status={result.status} />

        {/* Semantic TL;DR */}
        <div className={cn("p-4 rounded-xl border", colors.border, colors.bg)}>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Verification Summary</p>
          <p className="text-sm text-foreground font-mono leading-relaxed">{result.tldr}</p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground block mb-1 text-xs uppercase tracking-wider">Item Type</span>
            <span className="font-medium text-foreground">{result.itemType}</span>
          </div>
          <div>
            <span className="text-muted-foreground block mb-1 text-xs uppercase tracking-wider">Identifier</span>
            <span className="font-mono text-foreground text-xs">{result.serial}</span>
          </div>
          <div>
            <span className="text-muted-foreground block mb-1 text-xs uppercase tracking-wider">Certificate Hash</span>
            <span className="font-mono text-foreground text-xs">{result.hash}</span>
          </div>
          <div>
            <span className="text-muted-foreground block mb-1 text-xs uppercase tracking-wider">Sources</span>
            <span className="text-foreground text-xs">{result.sources.length} databases</span>
          </div>
        </div>

        {/* Sources */}
        <div>
          <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-2 font-semibold">Sources Checked</span>
          <div className="flex flex-wrap gap-1.5">
            {result.sources.map(s => (
              <span key={s} className="px-2.5 py-1 text-xs rounded-lg bg-muted border border-border text-muted-foreground">{s}</span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Button variant="outline" className="flex-1 min-w-[140px] rounded-xl" onClick={handleDownloadPDF}>
            <Download className="w-4 h-4 mr-2" />
            Compliance Certificate
          </Button>
          <Button variant="outline" className="rounded-xl" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" className="rounded-xl" onClick={handleCopyTLDR}>
            {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
            {copied ? 'Copied' : 'Copy TL;DR'}
          </Button>
          <Button className="flex-1 min-w-[140px] rounded-xl button-glow" onClick={onNewCheck}>
            New Check
          </Button>
        </div>

        {/* AI Verification Analysis */}
        <AIVerificationAnalysis
          identifier={result.serial}
          itemType={result.itemType}
          verificationResult={{ status: result.status, score: result.score, tldr: result.tldr }}
          sources={result.sources}
        />

        {/* Predictive Theft Alerts */}
        <PredictiveTheftAlerts
          identifier={result.serial}
          identifierType={result.itemType}
          verificationResult={result.status}
        />

        {/* AI Seller Report (only for clean items) */}
        <AISellerReport
          identifier={result.serial}
          identifierType={result.itemType}
          verificationResult={result.status}
        />

        {/* Smart Recommendations */}
        <SmartRecommendations
          itemType={result.itemType}
          status={result.status}
          score={result.score}
          identifier={result.serial}
        />

        {/* AI nudge */}
        <p className="text-[11px] text-muted-foreground text-center pt-2">
          Verified by SafeOrStolen AI.{' '}
          <a href="/pricing" className="text-primary hover:underline">
            Get the official police-certified report here
          </a>.
        </p>
      </div>
    </div>
  );
};
