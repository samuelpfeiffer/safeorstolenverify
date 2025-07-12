
/**
 * Common types for verification functionality
 */

export interface ProductType {
  id: string;
  name: string;
  type: string;
  category: string;
  image: string;
  icon: React.ReactNode;
  status: 'safe' | 'lost' | 'stolen';
  color?: string;
  serialNumber: string;
  verificationDate: string;
}

export interface ReceiptData {
  id: string;
  productId: string;
  productName: string;
  productType: string;
  category: string;
  serialNumber: string;
  verificationDate: string;
  status: 'safe' | 'lost' | 'stolen';
  color?: string;
}
