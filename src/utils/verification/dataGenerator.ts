
/**
 * Functions to generate verification data from various sources
 */

import { VerificationItemType } from './types';
import { determineCategory, determineIconType, getImageForCategory, determineColor, generateName } from './itemHelpers';
import { getIconForCategory } from './iconUtils';
import { determineStatus } from './statusUtils';

// Generate verification data from real database results only
export const generateVerificationData = (searchHistory: any[], savedReceipts: any[]): VerificationItemType[] => {
  // Only return real saved receipts with verified status
  if (savedReceipts.length > 0) {
    return savedReceipts
      .filter(receipt => receipt.verified === true) // Only verified receipts
      .map((receipt) => {
        const category = determineCategory(receipt.productName);
        const iconType = determineIconType(category);
        
        return {
          id: receipt.id || `rec-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name: receipt.productName,
          type: receipt.productType || 'Second-hand',
          category: category,
          image: getImageForCategory(category),
          icon: getIconForCategory(iconType),
          status: receipt.status || 'unknown', // Default to unknown instead of safe
          serialNumber: receipt.serialNumber,
          verificationDate: receipt.verificationDate || new Date().toISOString(),
          color: receipt.color || determineColor(category)
        };
      });
  } 
  
  // Return empty array - no fake data
  return [];
};
