import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Shield, AlertTriangle, CheckCircle, XCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

interface RiskFactor {
  factor: string;
  severity: 'low' | 'medium' | 'high';
  detail: string;
}

interface AIAnalysis {
  verdict: string;
  confidenceScore: number;
  fraudRiskScore: number;
  summary: string;
  explanation: string;
  greenFlags: string[];
  redFlags: string[];
  nextSteps: string[];
  buyingAdvice: string;
  databasesAnalyzed: number;
  riskFactors: RiskFactor[];
}

interface Props {
  identifier: string;
  itemType: string;
  verificationResult: any;
  sources: string[];
}

export const AIVerificationAnalysis: React.FC<Props> = ({ identifier, itemType, verificationResult, sources }) => {
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchAnalysis = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data, error: fnError } = await supabase.functions.invoke('ai-verification-analysis', {
          body: { identifier, itemType, verificationResult, sources }
        });

        if (fnError) throw new Error(fnError.message);
        if (data?.success && data?.analysis) {
          setAnalysis(data.analysis);
        } else {
          throw new Error(data?.error || 'Analysis failed');
        }
      } catch (err: any) {
        console.error('AI analysis error:', err);
        setError(err.message || 'Unable to generate AI analysis');
      } finally {
        setIsLoading(false);
      }
    };

    if (identifier && verificationResult) {
      fetchAnalysis();
    }
  }, [identifier, itemType, verificationResult, sources]);

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="modern-card p-5 mt-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Brain className="w-4 h-4 text-primary animate-pulse" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">AI Risk Analysis</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-1.5 bg-primary/20 rounded-full overflow-hidden w-48">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3, ease: 'easeInOut' }}
                />
              </div>
              <span className="text-xs text-muted-foreground">Analyzing...</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (error || !analysis) {
    return null; // Silently fail - verification results still show
  }

  const verdictConfig = {
    'SAFE TO BUY': { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', icon: CheckCircle },
    'PROCEED WITH CAUTION': { color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', icon: AlertTriangle },
    'DO NOT BUY': { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20', icon: XCircle },
  };

  const config = verdictConfig[analysis.verdict as keyof typeof verdictConfig] || verdictConfig['PROCEED WITH CAUTION'];
  const VerdictIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="modern-card overflow-hidden mt-4"
    >
      {/* Header with verdict */}
      <div className={cn("px-5 py-4 flex items-center justify-between border-b border-border", config.bg)}>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Brain className={cn("w-5 h-5", config.color)} />
            <Sparkles className="w-2.5 h-2.5 text-primary absolute -top-1 -right-1" />
          </div>
          <div>
            <span className="font-semibold text-foreground text-sm">AI Risk Analysis</span>
            <span className={cn("ml-2 text-xs font-bold uppercase", config.color)}>{analysis.verdict}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">{analysis.confidenceScore}% confidence</span>
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-muted-foreground hover:text-foreground transition-colors">
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Summary */}
        <p className="text-sm text-foreground leading-relaxed">{analysis.summary}</p>

        {/* Risk meters */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Fraud Risk</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={cn("h-full rounded-full", 
                    analysis.fraudRiskScore < 30 ? 'bg-emerald-500' :
                    analysis.fraudRiskScore < 60 ? 'bg-amber-500' : 'bg-red-500'
                  )}
                  initial={{ width: '0%' }}
                  animate={{ width: `${analysis.fraudRiskScore}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <span className="text-xs font-mono font-bold">{analysis.fraudRiskScore}/100</span>
            </div>
          </div>
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Databases Checked</span>
            <p className="text-lg font-bold text-foreground mt-1">{analysis.databasesAnalyzed}+</p>
          </div>
        </div>

        {/* Flags */}
        {analysis.redFlags.length > 0 && (
          <div>
            <span className="text-xs text-red-400 uppercase tracking-wider font-semibold">⚠ Red Flags</span>
            <ul className="mt-1.5 space-y-1">
              {analysis.redFlags.map((flag, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                  <XCircle className="w-3 h-3 text-red-400 mt-0.5 shrink-0" />
                  {flag}
                </li>
              ))}
            </ul>
          </div>
        )}

        {analysis.greenFlags.length > 0 && (
          <div>
            <span className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">✓ Green Flags</span>
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

        {/* Buying Advice */}
        <div className={cn("p-3 rounded-xl border text-sm", config.border, config.bg)}>
          <span className="font-semibold text-foreground">💡 Buying Advice:</span>
          <p className="text-muted-foreground mt-1">{analysis.buyingAdvice}</p>
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4 pt-2"
            >
              {/* Detailed explanation */}
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Detailed Analysis</span>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{analysis.explanation}</p>
              </div>

              {/* Next steps */}
              {analysis.nextSteps.length > 0 && (
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Recommended Next Steps</span>
                  <ol className="mt-1.5 space-y-1">
                    {analysis.nextSteps.map((step, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="font-bold text-primary">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Risk factors */}
              {analysis.riskFactors && analysis.riskFactors.length > 0 && (
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Risk Factors</span>
                  <div className="mt-1.5 space-y-2">
                    {analysis.riskFactors.map((rf, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className={cn("text-[10px] px-1.5 py-0.5 rounded uppercase font-bold",
                          rf.severity === 'low' ? 'bg-emerald-500/10 text-emerald-400' :
                          rf.severity === 'medium' ? 'bg-amber-500/10 text-amber-400' :
                          'bg-red-500/10 text-red-400'
                        )}>{rf.severity}</span>
                        <div>
                          <span className="text-xs font-medium text-foreground">{rf.factor}</span>
                          <p className="text-xs text-muted-foreground">{rf.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Powered by line */}
        <p className="text-[10px] text-muted-foreground text-center pt-1">
          Powered by SafeOrStolen AI · {analysis.databasesAnalyzed}+ databases analyzed · <a href="/pricing" className="text-primary hover:underline">Upgrade for unlimited checks</a>
        </p>
      </div>
    </motion.div>
  );
};
