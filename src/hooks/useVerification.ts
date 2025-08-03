
import { useState, useEffect } from 'react';
import { 
  ProductType, 
  generateVerificationData,
  determineStatus, 
  determineIconType, 
  getIconForCategory,
  determineColor
} from '@/utils/verification';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useVerification = (initialSerialNumber?: string | null) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [activeProduct, setActiveProduct] = useState<ProductType | null>(null);
  const [showVerificationCard, setShowVerificationCard] = useState(true);
  const [showReceiptDialog, setShowReceiptDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Load verification data from backend instead of localStorage
  useEffect(() => {
    const loadVerificationData = async () => {
      setIsLoading(true);
      try {
        // Use actual backend verification results instead of localStorage
        const { data, error } = await supabase
          .from('verification_results')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(10);

        if (error) {
          console.error('Failed to load verification data:', error);
          // Fallback to minimal demo data if no backend data
          const fallbackData = generateVerificationData([], []);
          setProducts(fallbackData);
          setActiveProduct(fallbackData[0] || null);
        } else {
          // Transform backend data to ProductType format
          const transformedData: ProductType[] = data.map(item => ({
            id: item.id,
            name: `${item.item_type} Verification`,
            type: 'Verified',
            category: item.item_type,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            icon: getIconForCategory('smartphone'),
            status: item.verification_status === 'verified' ? 'safe' : item.verification_status === 'stolen' ? 'stolen' : item.verification_status === 'lost' ? 'lost' : 'unknown',
            serialNumber: item.serial_number,
            verificationDate: item.verified_at,
            color: determineColor(item.item_type)
          }));

          setProducts(transformedData);
          setActiveProduct(transformedData[0] || null);
        }
      } catch (error) {
        console.error('Error loading verification data:', error);
        // Fallback to minimal demo data
        const fallbackData = generateVerificationData([], []);
        setProducts(fallbackData);
        setActiveProduct(fallbackData[0] || null);
      } finally {
        setIsLoading(false);
      }
    };

    loadVerificationData();
  }, []);

  // Handle URL search parameters
  useEffect(() => {
    if (initialSerialNumber) {
      // Use the real verification algorithm instead of random selection
      const status = determineStatus(initialSerialNumber);
      const category = 'Electronics'; // Default category for direct URL queries
      const iconType = determineIconType(category);
      
      const verifiedProduct: ProductType = {
        id: `url-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: `${category} Item`,
        type: 'Second-hand',
        category: category,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        icon: getIconForCategory(iconType),
        status: status,
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

  const generateReceipt = async () => {
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
    
    // Save to database instead of localStorage
    try {
      const { error } = await supabase
        .from('receipts')
        .insert({
          user_id: (await supabase.auth.getUser()).data.user?.id,
          receipt_url: `data:application/json;base64,${btoa(JSON.stringify(receiptData))}`,
          purchase_id: null, // No purchase associated with this receipt
        });

      if (error) {
        console.error('Failed to save receipt:', error);
      }
    } catch (error) {
      console.error('Error saving receipt:', error);
    }
    
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
