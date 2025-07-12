
/**
 * Utility functions for determining verification status
 */

export const determineStatus = (serialNumber: string): 'safe' | 'lost' | 'stolen' => {
  // Use consistent algorithm to determine status based on serial number
  // This ensures same serial always returns same status
  const hash = serialNumber.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);
  
  const remainder = hash % 10;
  
  if (remainder < 7) {
    return 'safe';
  } else if (remainder < 9) {
    return 'lost';
  } else {
    return 'stolen';
  }
};
