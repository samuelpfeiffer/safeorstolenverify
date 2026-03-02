import React, { useEffect, useState } from 'react';
import { Shield, AlertTriangle, CheckCircle2, Info, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { motion, AnimatePresence } from 'framer-motion';

interface Alert {
  category: string;
  severity: 'info' | 'warning' | 'critical';
  title: string;
  description: string;
  recommendation: string;
}

interface PredictiveResult {
  riskScore: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  alerts: Alert[];
  overallAssessment: string;
  buyerActions: string[];
}

interface PredictiveTheftAlertsProps {
  identifier: string;
  identifierType: string;
  verificationResult: string;
  listingInfo?: {
    price?: number;
    location?: string;
    sellerAge?: string;
    description?: string;
  };
}

export const PredictiveTheftAlerts: React.FC<PredictiveTheftAlertsProps> = ({
  identifier,
  identifierType,
  verificationResult,
  listingInfo,
}) => {
  const [result, setResult] = useState<PredictiveResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const analyze = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error: fnError } = await supabase.functions.invoke('ai-predictive-alerts', {
          body: { identifier, identifierType, verificationResult, listingInfo }
        });
        if (fnError) throw fnError;
        setResult(data);
      } catch (err) {
        console.error('Predictive analysis error:', err);
        setError('Could not complete predictive analysis');
      } finally {
        setLoading(false);
      }
    };
    analyze();
  }, [identifier, identifierType, verificationResult]);

  if (loading) {
    return (
      <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border">
        <Loader2 className="w-4 h-4 animate-spin text-primary" />
        <span className="text-sm text-muted-foreground">🔮 Running predictive theft analysis...</span>
      </div>
    );
  }

  if (error || !result) return null;

  const riskColors = {
    LOW: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-600', badge: 'bg-green-500' },
    MEDIUM: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-600', badge: 'bg-yellow-500' },
    HIGH: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-600', badge: 'bg-red-500' },
  };

  const colors = riskColors[result.riskLevel];
  const RiskIcon = result.riskLevel === 'LOW' ? CheckCircle2 : result.riskLevel === 'HIGH' ? AlertTriangle : Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl ${colors.bg} ${colors.border} border p-4 space-y-3`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RiskIcon className={`w-5 h-5 ${colors.text}`} />
          <span className="text-sm font-bold">🔮 Predictive Theft Analysis</span>
          <Badge className={`${colors.badge} text-white text-[10px] px-2`}>
            {result.riskLevel} RISK — {result.riskScore}%
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="h-7 px-2"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>
      </div>

      {/* Summary */}
      <p className="text-sm text-foreground">{result.overallAssessment}</p>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="space-y-3 overflow-hidden"
          >
            {/* Alerts */}
            {result.alerts.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Risk Factors</p>
                {result.alerts.map((alert, i) => {
                  const alertIcon = alert.severity === 'critical' ? '🚨' : alert.severity === 'warning' ? '⚠️' : 'ℹ️';
                  return (
                    <div key={i} className="p-2.5 rounded-lg bg-background/60 border border-border text-sm space-y-1">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span>{alertIcon}</span>
                        {alert.title}
                      </div>
                      <p className="text-xs text-muted-foreground">{alert.description}</p>
                      <p className="text-xs text-primary font-medium">→ {alert.recommendation}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Buyer actions */}
            {result.buyerActions.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Recommended Actions</p>
                <ul className="space-y-1">
                  {result.buyerActions.map((action, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-[10px] text-muted-foreground italic">
              Predictive analysis uses AI pattern matching. This is not a database result — it's an additional safety layer.
              Premium feature powered by SafeOrStolen AI.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
