
import { useState, useEffect } from 'react';
import { 
  ProductType, 
  generateVerificationData,
  determineStatus, 
  determineIconType, 
  getIconForCategory 
} from '@/utils/verification';
import { useToast } from '@/hooks/use-toast';

export const useVerification = (initialSerialNumber?: string | null) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [activeProduct, setActiveProduct] = useState<ProductType | null>(null);
  const [showVerificationCard, setShowVerificationCard] = useState(true);
  const [showReceiptDialog, setShowReceiptDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Load verification data from localStorage on component mount
  useEffect(() => {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    const savedReceipts = JSON.parse(localStorage.getItem('savedReceipts') || '[]');
    
    // Use search history and saved receipts to create real verification data
    const verificationData = generateVerificationData(searchHistory, savedReceipts);
    
    setProducts(verificationData);
    
    if (verificationData.length > 0) {
      setActiveProduct(verificationData[0]);
    }
    
    setIsLoading(false);
  }, []);

  // Handle URL search parameters
  useEffect(() => {
    if (initialSerialNumber) {
      // Use 'unknown' status since no fake verification
      const status = 'unknown' as const;
      const category = 'Electronics'; // Default category for direct URL queries
      const iconType = determineIconType(category);
      
      const verifiedProduct: ProductType = {
        id: `url-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: `${category} Item`,
        type: 'Second-hand',
        category: category,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        icon: getIconForCategory(iconType),
        status: 'unknown', // No fake status determination
        serialNumber: initialSerialNumber,
        verificationDate: new Date().toISOString(),
        color: "Black"
      };
      
      // Add to products array if not already there
      const productExists = products.some(p => p.serialNumber === initialSerialNumber);
      if (!productExists) {
        setProducts(prevProducts => [verifiedProduct, ...prevProducts]);
      }
      
      // Set as active product
      setActiveProduct(verifiedProduct);
      setShowVerificationCard(true);
    }
  }, [initialSerialNumber, products]);

  const generateReceipt = () => {
    if (!activeProduct) return;
    
    setShowReceiptDialog(true);
    
    // Save real verification data
    const receiptData = {
      id: `REC-${Date.now()}`,
      productId: activeProduct.id,
      productName: activeProduct.name,
      productType: activeProduct.type,
      category: activeProduct.category,
      serialNumber: activeProduct.serialNumber,
      verificationDate: new Date().toISOString(),
      status: activeProduct.status,
      color: activeProduct.color
    };
    
    // Save to localStorage
    const savedReceipts = JSON.parse(localStorage.getItem('savedReceipts') || '[]');
    savedReceipts.unshift(receiptData);
    localStorage.setItem('savedReceipts', JSON.stringify(savedReceipts));
    
    toast({
      title: "Receipt Generated",
      description: "Your verification receipt has been saved.",
    });
  };

  return {
    products,
    activeProduct,
    isLoading,
    showVerificationCard,
    showReceiptDialog,
    setActiveProduct,
    setShowVerificationCard,
    setShowReceiptDialog,
    generateReceipt
  };
};
