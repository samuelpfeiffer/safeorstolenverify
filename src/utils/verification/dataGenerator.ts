
/**
 * Functions to generate verification data from various sources
 */

import { ProductType } from './types';
import { determineCategory, determineIconType, getImageForCategory, determineColor, generateName } from './productHelpers';
import { getIconForCategory } from './iconUtils';
import { determineStatus } from './statusUtils';

// Generate verification data from search history and saved receipts
export const generateVerificationData = (searchHistory: any[], savedReceipts: any[]): ProductType[] => {
  // If we have saved receipts, prioritize using those for verification data
  if (savedReceipts.length > 0) {
    return savedReceipts.map((receipt) => {
      // Determine product category and icon based on name or other properties
      const category = determineCategory(receipt.productName);
      const iconType = determineIconType(category);
      
      return {
        id: receipt.id || `rec-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: receipt.productName,
        type: receipt.productType || 'Second-hand',
        category: category,
        image: getImageForCategory(category),
        icon: getIconForCategory(iconType),
        status: receipt.status || 'safe',
        serialNumber: receipt.serialNumber || `SN${Math.floor(Math.random() * 10000000)}`,
        verificationDate: receipt.verificationDate || new Date().toISOString(),
        color: receipt.color || determineColor(category)
      };
    });
  } 
  
  // If we have search history but no saved receipts
  if (searchHistory.length > 0) {
    return searchHistory.slice(0, 5).map((search) => {
      const category = determineCategory(search.itemType);
      const iconType = determineIconType(category);
      
      // Determine status based on serial number pattern or randomly
      const status = determineStatus(search.serialNumber);
      
      return {
        id: `srch-${search.id || Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: generateName(search.itemType, category),
        type: 'Second-hand',
        category: category,
        image: getImageForCategory(category),
        icon: getIconForCategory(iconType),
        status: status,
        serialNumber: search.serialNumber,
        verificationDate: search.timestamp || new Date().toISOString(),
        color: determineColor(category)
      };
    });
  }
  
  // Fallback: Return minimal set of demo data 
  return [{
    id: `demo-${Date.now()}`,
    name: "Verified Product",
    type: "Second-hand",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: getIconForCategory('smartphone'),
    status: 'safe',
    serialNumber: `SN${Math.floor(Math.random() * 10000000)}`,
    verificationDate: new Date().toISOString(),
    color: "Black"
  }];
};
