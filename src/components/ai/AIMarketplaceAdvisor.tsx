import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link2, AlertTriangle, CheckCircle, XCircle, Shield, Loader2, Sparkles, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';

interface RedFlag {
  flag: string;
  severity: string;
  detail: string;
}

interface MarketplaceAnalysis {
  overallRiskScore: number;
  riskLevel: string;
  verdict: string;
  summary: string;
  priceAnalysis?: {
    listedPrice: string;
    estimatedMarketValue: string;
    priceDifferencePercent: number;
    verdict: string;
  };
  redFlags: RedFlag[];
  greenFlags: string[];
  sellerAnalysis?: string;
  photoAnalysis?: string;
  descriptionAnalysis?: string;
  recommendedActions: string[];
  identifiersFound: string[];
  safeOrStolenRecommendation?: string;
}

export const AIMarketplaceAdvisor: React.FC = () => {
  const { user } = useAuth();
  const [url, setUrl] = useState('');
  const [analysis, setAnalysis] = useState<MarketplaceAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeListing = useCallback(async () => {
    if (!url.trim()) return;
    setIsLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke('ai-marketplace-advisor', {
        body: { listingUrl: url.trim() }
      });

      if (fnError) throw new Error(fnError.message);
      if (data?.success && data?.analysis) {
        setAnalysis(data.analysis);
      } else {
        throw new Error(data?.error || 'Analysis failed');
      }
    } catch (err: any) {
      setError(err.message || 'Unable to analyze listing');
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  const riskColors = {
    LOW: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    MEDIUM: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    HIGH: { text: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    CRITICAL: { text: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  };

  const colors = riskColors[(analysis?.riskLevel as keyof typeof riskColors)] || riskColors.MEDIUM;

  return (
    <div className="space-y-6">
      {/* Input */}
      <div className="modern-card p-5">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">AI Marketplace Advisor</h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold uppercase">Premium</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Paste any marketplace listing URL and our AI will analyze it for scam indicators, price manipulation, and fraud risk.
        </p>

        {!user ? (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted border border-border">
            <Lock className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">Sign in to use AI Marketplace Advisor</p>
              <p className="text-xs text-muted-foreground">This premium feature requires a SafeOrStolen account.</p>
            </div>
            <Button size="sm" className="ml-auto shrink-0" onClick={() => window.location.href = '/auth'}>
              Sign In
            </Button>
          </div>
        ) : (
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && analyzeListing()}
                placeholder="Paste Facebook Marketplace, Craigslist, OfferUp, eBay URL..."
                className="pl-10"
                disabled={isLoading}
              />
            </div>
            <Button onClick={analyzeListing} disabled={!url.trim() || isLoading} className="shrink-0 button-glow">
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Sparkles className="w-4 h-4 mr-1" /> Analyze</>}
            </Button>
          </div>
        )}
      </div>

      {/* Loading */}
      <AnimatePresence>
        {isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modern-card p-6 text-center">
            <div className="w-12 h-12 mx-auto border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-3" />
            <p className="text-sm font-medium text-foreground">AI is analyzing the listing...</p>
            <p className="text-xs text-muted-foreground mt-1">Looking at the price, photos, description and common scam signs</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error */}
      {error && (
        <div className="modern-card p-4 border-red-500/20 bg-red-500/5">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {/* Results */}
      <AnimatePresence>
        {analysis && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="modern-card overflow-hidden">
            {/* Verdict header */}
            <div className={cn("px-5 py-4 flex items-center justify-between border-b border-border", colors.bg)}>
              <div className="flex items-center gap-3">
                {analysis.riskLevel === 'LOW' ? <CheckCircle className={cn("w-5 h-5", colors.text)} /> :
                 analysis.riskLevel === 'CRITICAL' ? <XCircle className={cn("w-5 h-5", colors.text)} /> :
                 <AlertTriangle className={cn("w-5 h-5", colors.text)} />}
                <span className={cn("font-bold uppercase text-sm", colors.text)}>{analysis.verdict}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Risk Score</span>
                <span className={cn("text-lg font-bold font-mono", colors.text)}>{analysis.overallRiskScore}/100</span>
              </div>
            </div>

            <div className="p-5 space-y-5">
              <p className="text-sm text-foreground leading-relaxed">{analysis.summary}</p>

              {/* Risk meter */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Risk Level</span>
                  <span className={cn("font-bold", colors.text)}>{analysis.riskLevel}</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={cn("h-full rounded-full",
                      analysis.overallRiskScore < 30 ? 'bg-emerald-500' :
                      analysis.overallRiskScore < 60 ? 'bg-amber-500' :
                      analysis.overallRiskScore < 80 ? 'bg-orange-500' : 'bg-red-500'
                    )}
                    initial={{ width: '0%' }}
                    animate={{ width: `${analysis.overallRiskScore}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Price analysis */}
              {analysis.priceAnalysis && (
                <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-muted/50 border border-border">
                  <div className="text-center">
                    <span className="text-[10px] text-muted-foreground uppercase">Listed</span>
                    <p className="text-sm font-bold text-foreground">{analysis.priceAnalysis.listedPrice}</p>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] text-muted-foreground uppercase">Market Value</span>
                    <p className="text-sm font-bold text-foreground">{analysis.priceAnalysis.estimatedMarketValue}</p>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] text-muted-foreground uppercase">Price Verdict</span>
                    <p className={cn("text-xs font-bold",
                      analysis.priceAnalysis.verdict === 'Fair' ? 'text-emerald-400' :
                      analysis.priceAnalysis.verdict === 'Below Market' ? 'text-amber-400' :
                      'text-red-400'
                    )}>{analysis.priceAnalysis.verdict}</p>
                  </div>
                </div>
              )}

              {/* Red flags */}
              {analysis.redFlags.length > 0 && (
                <div>
                  <span className="text-xs text-red-400 uppercase tracking-wider font-semibold">⚠ Red Flags ({analysis.redFlags.length})</span>
                  <div className="mt-2 space-y-2">
                    {analysis.redFlags.map((rf, i) => (
                      <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-red-500/5 border border-red-500/10">
                        <span className={cn("text-[10px] px-1.5 py-0.5 rounded-[0.25rem] uppercase font-bold mt-0.5 shrink-0",
                          rf.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                          rf.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-amber-500/20 text-amber-400'
                        )}>{rf.severity}</span>
                        <div>
                          <p className="text-xs font-medium text-foreground">{rf.flag}</p>
                          <p className="text-xs text-muted-foreground">{rf.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Green flags */}
              {analysis.greenFlags.length > 0 && (
                <div>
                  <span className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">✓ Positive Indicators</span>
                  <ul className="mt-1.5 space-y-1">
                    {analysis.greenFlags.map((flag, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                        <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Identifiers found */}
              {analysis.identifiersFound && analysis.identifiersFound.length > 0 && (
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/20">
                  <span className="text-xs text-primary uppercase tracking-wider font-semibold">Numbers found in the listing: check them</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {analysis.identifiersFound.map((id, i) => (
                      <a
                        key={i}
                        href={`/verify?q=${encodeURIComponent(id)}`}
                        className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-mono"
                      >
                        {id} →
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Next steps */}
              {analysis.recommendedActions.length > 0 && (
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Recommended Actions</span>
                  <ol className="mt-1.5 space-y-1">
                    {analysis.recommendedActions.map((action, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="font-bold text-primary">{i + 1}.</span> {action}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* CTA */}
              <div className="flex gap-2 pt-2">
                <Button className="flex-1 button-glow" onClick={() => setAnalysis(null)}>
                  Analyze Another Listing
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => window.location.href = '/verify'}>
                  Verify Item Now
                </Button>
              </div>

              <p className="text-[10px] text-muted-foreground text-center">
                A listing review looks for warning signs; it is not a theft check. · <a href="/pricing" className="text-primary hover:underline">Included in the $10/month unlimited plan</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
