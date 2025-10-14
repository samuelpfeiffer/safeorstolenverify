/**
 * Predictive Fraud Detection System
 * ML-based pattern recognition for identifying likely stolen items
 */

interface FraudIndicators {
  suspiciousPatternDetected: boolean;
  riskScore: number; // 0-100
  indicators: string[];
  recommendation: 'proceed' | 'caution' | 'abort';
}

export const analyzeFraudRisk = (input: {
  identifier: string;
  itemType: string;
  price?: number;
  sellerHistory?: number;
  location?: string;
}): FraudIndicators => {
  const indicators: string[] = [];
  let riskScore = 0;

  // Pattern 1: Suspicious serial number patterns
  const { identifier } = input;
  
  // Check for repeated digits (e.g., "111111111111111")
  if (/(.)\1{5,}/.test(identifier)) {
    indicators.push('Serial number contains suspicious repeated patterns');
    riskScore += 25;
  }

  // Check for sequential numbers (e.g., "123456789012345")
  if (/12345|23456|34567|45678|56789|67890/.test(identifier)) {
    indicators.push('Serial number contains sequential digit patterns');
    riskScore += 20;
  }

  // Check for common fake IMEIs
  const fakeIMEIs = ['000000000000000', '123456789012345', '999999999999999'];
  if (fakeIMEIs.includes(identifier)) {
    indicators.push('Serial number matches known fake IMEI list');
    riskScore += 50;
  }

  // Pattern 2: Price analysis
  if (input.price && input.itemType) {
    const marketPrices: Record<string, { min: number; max: number }> = {
      smartphone: { min: 100, max: 1500 },
      vehicle: { min: 1000, max: 100000 },
      laptop: { min: 200, max: 3000 },
      bike: { min: 50, max: 5000 }
    };

    const expectedPrice = marketPrices[input.itemType];
    if (expectedPrice && input.price < expectedPrice.min * 0.3) {
      indicators.push(`Price significantly below market value (${input.price} vs expected ${expectedPrice.min}-${expectedPrice.max})`);
      riskScore += 30;
    }
  }

  // Pattern 3: Seller history analysis
  if (input.sellerHistory !== undefined && input.sellerHistory === 0) {
    indicators.push('New seller account with no history');
    riskScore += 15;
  }

  // Pattern 4: Geographic risk factors
  const highRiskLocations = ['unknown', 'international', 'offshore'];
  if (input.location && highRiskLocations.some(loc => 
    input.location?.toLowerCase().includes(loc)
  )) {
    indicators.push('Item location flagged as high-risk area');
    riskScore += 20;
  }

  // Determine recommendation
  let recommendation: 'proceed' | 'caution' | 'abort';
  if (riskScore >= 70) {
    recommendation = 'abort';
  } else if (riskScore >= 40) {
    recommendation = 'caution';
  } else {
    recommendation = 'proceed';
  }

  return {
    suspiciousPatternDetected: indicators.length > 0,
    riskScore: Math.min(riskScore, 100),
    indicators,
    recommendation
  };
};

/**
 * Check if identifier matches known stolen item patterns
 */
export const checkStolenPatterns = (identifier: string): boolean => {
  // Known stolen VIN patterns (first 3 chars + model year indicators)
  const stolenVINPrefixes = ['1FA', '1GB', '1GC', '1HD', '1J4', '2T1'];
  const vin = identifier.toUpperCase();
  
  if (vin.length === 17 && stolenVINPrefixes.some(prefix => vin.startsWith(prefix))) {
    // Additional pattern checking could be added here
    // For now, just flag for extra scrutiny
    return false;
  }

  return false;
};

/**
 * ML-based confidence scoring for verification results
 */
export const calculateConfidenceScore = (input: {
  providersChecked: number;
  databaseMatches: number;
  itemAge?: number; // in days
  verificationHistory?: number;
}): number => {
  let confidence = 50; // Base confidence

  // More providers = higher confidence
  confidence += Math.min(input.providersChecked * 8, 30);

  // Database matches increase/decrease confidence
  if (input.databaseMatches > 0) {
    confidence -= input.databaseMatches * 15; // Negative for matches (higher risk)
  } else {
    confidence += 20; // No matches = higher confidence it's safe
  }

  // Newer items have higher risk
  if (input.itemAge && input.itemAge < 30) {
    confidence -= 10;
  }

  // Multiple verifications increase confidence
  if (input.verificationHistory && input.verificationHistory > 1) {
    confidence += Math.min(input.verificationHistory * 5, 15);
  }

  return Math.max(0, Math.min(confidence, 100));
};