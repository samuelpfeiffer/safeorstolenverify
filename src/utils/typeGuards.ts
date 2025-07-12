
/**
 * Type guard functions for verification status validation
 */

export type VerificationStatus = 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';

export const isValidVerificationStatus = (status: string): status is VerificationStatus => {
  return ['safe', 'stolen', 'lost', 'unknown', 'error'].includes(status);
};

export const normalizeVerificationStatus = (status: string): VerificationStatus => {
  const normalizedStatus = status.toLowerCase().trim();
  
  if (isValidVerificationStatus(normalizedStatus)) {
    return normalizedStatus;
  }
  
  // Handle common variations and fallback to 'unknown'
  switch (normalizedStatus) {
    case 'reported_stolen':
    case 'flagged':
      return 'stolen';
    case 'reported_lost':
    case 'missing':
      return 'lost';
    case 'verified':
    case 'clean':
    case 'clear':
      return 'safe';
    default:
      console.warn(`Unknown verification status: ${status}, defaulting to 'unknown'`);
      return 'unknown';
  }
};
