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
 * AI is ADVISORY ONLY (Sept 27 2026, no-hallucination rule).
 * The AI's risk_level is shown to the user as a note but can never produce
 * a safe or stolen verdict. Only real theft databases can do that.
 */
export function statusFromRiskLevel(_riskLevel: unknown): VerdictStatus {
  return 'unknown';
}

/** Sources that are commentary, not theft databases. They never set the verdict. */
export const ADVISORY_SOURCES = new Set(['AI_Analysis']);
/** Web mentions are "possible match", never an official theft report. */
export const WEB_SOURCES = new Set(['Web_Scraper']);
/** Sources that genuinely query a theft/lost registry. */
export const THEFT_DATABASES = new Set([
  'SafeOrStolen Database',
  'BikeIndex',
  'IMEI_Verification',
  'HotGunz',
]);

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

/** Plain-English name for a source, used in verdict messages. */
function sourceLabel(s: SourceResult): string {
  if (s.provider === 'Vehicle_Verification' && (s.details as any)?.theftaz?.found === true) {
    return 'Arizona law enforcement records (TheftAZ, Arizona Attorney General)';
  }
  const names: Record<string, string> = {
    'SafeOrStolen Database': 'the SafeOrStolen registry',
    IMEI_Verification: 'phone blacklist records',
    Vehicle_Verification: 'vehicle records',
  };
  return names[s.provider] ?? s.provider;
}

/**
 * Combine every source into one verdict. Deterministic: the same set of
 * source statuses always produces the same result.
 *
 * Only real theft databases can produce stolen / lost / safe. AI notes and
 * web mentions can raise a warning but never decide the verdict.
 */
export function decideVerdict(sources: SourceResult[]): Verdict {
  const data = sources.filter((s) => !ADVISORY_SOURCES.has(s.provider) && !WEB_SOURCES.has(s.provider));
  const web = sources.filter((s) => WEB_SOURCES.has(s.provider));

  const stolen = data.filter((s) => s.status === 'stolen');
  if (stolen.length > 0) {
    return {
      finalStatus: 'stolen',
      riskLevel: 'critical',
      confidence: aggregateConfidence(stolen),
      message: `🚨 THEFT REPORT FOUND: ${stolen.map(sourceLabel).join(' and ')} ${stolen.length > 1 ? 'list' : 'lists'} this item as stolen. Do NOT purchase until this is resolved with police.`,
    };
  }

  const lost = data.filter((s) => s.status === 'lost');
  if (lost.length > 0) {
    return {
      finalStatus: 'lost',
      riskLevel: 'high',
      confidence: aggregateConfidence(lost),
      message: `⚠️ LOST REPORT FOUND: ${lost.map(sourceLabel).join(' and ')} ${lost.length > 1 ? 'list' : 'lists'} this item as lost. Exercise extreme caution.`,
    };
  }

  const invalid = data.filter(
    (s) => s.status === 'error' && (s.details as any)?.invalidInput === true,
  );
  if (invalid.length > 0) {
    return {
      finalStatus: 'unknown',
      riskLevel: 'high',
      confidence: null,
      message: `⚠️ CHECK THIS NUMBER: ${invalid[0].message} Re-enter it carefully. If the seller's paperwork or the item itself shows this exact number, treat that as a serious red flag.`,
    };
  }

  if (web.some((s) => s.status === 'stolen')) {
    return {
      finalStatus: 'unknown',
      riskLevel: 'high',
      confidence: null,
      message:
        '⚠️ POSSIBLE MATCH: A web page may mention this number in a theft context. This is not an official theft report. Check the source and ask the seller for proof of ownership before buying.',
    };
  }

  const safe = data.filter((s) => s.status === 'safe' && s.confidence > 0);
  if (safe.length > 0) {
    return {
      finalStatus: 'safe',
      riskLevel: 'low',
      confidence: aggregateConfidence(safe),
      message: `✅ NO THEFT REPORTS FOUND in ${safe.map(sourceLabel).join(' and ')}. No check can guarantee an item was never stolen, so keep your receipt and the seller's info.`,
    };
  }

  // Nothing confirmed. Be exact about what was and was not checked.
  const answeredOutside = data
    .filter((s) => THEFT_DATABASES.has(s.provider) && s.provider !== 'SafeOrStolen Database' && s.status !== 'error')
    .map((s) => s.provider);
  const isVehicle = data.some((s) => s.provider === 'Vehicle_Verification');
  // The vehicle check searches TheftAZ (Arizona Attorney General, law enforcement records).
  const azChecked = data.some(
    (s) => s.provider === 'Vehicle_Verification' && (s.details as any)?.theftaz?.checked === true,
  );
  if (azChecked) answeredOutside.push('Arizona law enforcement records (TheftAZ)');

  let message = answeredOutside.length > 0
    ? `No theft record found in the SafeOrStolen registry or ${answeredOutside.join(', ')}. That does not prove the item is clean, so ask the seller for proof of ownership.`
    : 'No theft record found in the SafeOrStolen registry, but no outside theft database could confirm this item. Ask the seller for proof of ownership and keep a record of the sale.';
  if (isVehicle) {
    message += azChecked
      ? ' Arizona records only cover Arizona reports, so for a nationwide check run the free NICB VINCheck at nicb.org/vincheck and ask to see the title.'
      : ' For vehicles, run the free NICB VINCheck at nicb.org/vincheck and ask to see the title.';
  }

  return {
    finalStatus: 'unknown',
    riskLevel: 'medium',
    confidence: null,
    message,
  };
}
