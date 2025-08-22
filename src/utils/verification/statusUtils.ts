
/**
 * Utility functions for determining verification status
 */

export const determineStatus = (serialNumber: string): 'unknown' => {
  // No fake results - always return unknown for client-side requests
  // Real verification happens server-side only
  return 'unknown';
};
