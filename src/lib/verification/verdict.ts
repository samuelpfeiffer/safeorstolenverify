/**
 * Strict three-state verdict logic.
 *
 * There is no middle "suspicious" category. A theft accusation requires
 * strong evidence, a clear verdict requires checks that actually came back
 * clean, and everything else is a neutral "not found in the databases we
 * checked". Free-text advice is NEVER keyword-matched: advice such as
 * "check a stolen device database" contains the word "stolen" and previously
 * flipped clean items to a false STOLEN verdict.
 */

export type VerdictStatus = 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';

export interface SourceResult {
  provider: string;
  status: VerdictStatus;
  confidence: number;
  message: string;
  details?: unknown;
  responseTime?: number;
}

/** Source reliability weights for confidence scoring. */
export const SOURCE_WEIGHTS: Record<string, number> = {
  'SafeOrStolen Database': 1.0,
  BikeIndex: 0.95,
  IMEI_Verification: 0.92,
  Vehicle_Verification: 0.9,
  HotGunz: 0.88,
  Web_Scraper: 0.75,
  AI_Analysis: 0.65,
};

/**
 * Normalize any child source's status into the strict three-state model.
 * Legacy sources can still emit 'suspicious'; that is inconclusive data,
 * not an accusation, so it becomes 'unknown'.
 */
export function normalizeSourceStatus(raw: unknown): VerdictStatus {
  switch (raw) {
    case 'stolen':
      return 'stolen';
    case 'safe':
      return 'safe';
    case 'lost':
      return 'lost';
    case 'error':
      return 'error';
    default:
      return 'unknown';
  }
}

/**
 * Map the AI advisor's structured risk_level enum onto a verdict.
 * critical -> stolen, low -> safe, everything else -> unknown.
 */
export function statusFromRiskLevel(riskLevel: unknown): VerdictStatus {
  switch (riskLevel) {
    case 'critical':
      return 'stolen';
    case 'low':
      return 'safe';
    default:
      // 'high', 'medium', missing or unrecognized: we simply do not have
      // data on this item. This is never a caution flag.
      return 'unknown';
  }
}

export interface Verdict {
  finalStatus: VerdictStatus;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  confidence: number | null;
  message: string;
}

function aggregateConfidence(results: SourceResult[]): number {
  if (results.length === 0) return 0;

  let totalWeight = 0;
  let weightedSum = 0;
  for (const result of results) {
    const weight = SOURCE_WEIGHTS[result.provider] ?? 0.5;
    weightedSum += result.confidence * weight;
    totalWeight += weight;
  }

  const multiSourceBonus = Math.min(results.length * 2, 10);
  const base = totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 0;
  return Math.min(base + multiSourceBonus, 99);
}

/**
 * Combine every source into one verdict. Deterministic: the same set of
 * source statuses always produces the same result.
 */
export function decideVerdict(sources: SourceResult[]): Verdict {
  const stolen = sources.filter((s) => s.status === 'stolen');
  if (stolen.length > 0) {
    return {
      finalStatus: 'stolen',
      riskLevel: 'critical',
      confidence: aggregateConfidence(stolen),
      message: '🚨 STOLEN: This item has been reported as stolen. Do NOT purchase.',
    };
  }

  const lost = sources.filter((s) => s.status === 'lost');
  if (lost.length > 0) {
    return {
      finalStatus: 'lost',
      riskLevel: 'high',
      confidence: aggregateConfidence(lost),
      message: '⚠️ LOST: This item has been reported as lost. Exercise extreme caution.',
    };
  }

  const safe = sources.filter((s) => s.status === 'safe' && s.confidence > 0);
  if (safe.length > 0) {
    const checked = sources.filter((s) => s.status !== 'error').length;
    return {
      finalStatus: 'safe',
      riskLevel: 'low',
      confidence: aggregateConfidence(safe),
      message: `✅ SAFE: Checked ${checked} source(s). No theft reports found.`,
    };
  }

  return {
    finalStatus: 'unknown',
    riskLevel: 'medium',
    confidence: null,
    message: 'No theft record found for this item in the databases we checked.',
  };
}
