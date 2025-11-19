
/**
 * Common types for verification functionality
 */

export interface VerificationItemType {
  id: string;
  name: string;
  type: string;
  category: string;
  image: string;
  icon: React.ReactNode;
  status: 'safe' | 'lost' | 'stolen' | 'unknown';
  color?: string;
  serialNumber: string;
  verificationDate: string;
}

export interface ReceiptData {
  id: string;
  itemId: string;
  itemName: string;
  itemType: string;
  category: string;
  serialNumber: string;
  verificationDate: string;
  status: 'safe' | 'lost' | 'stolen' | 'unknown';
  color?: string;
}
