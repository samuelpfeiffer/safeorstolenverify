import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { QrCode, Search, WifiOff, Shield, Zap, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { useRealVerification } from '@/hooks/useRealVerification';
import { VerificationDialog } from './VerificationDialog';
import { SearchLimitDisplay } from './SearchLimitDisplay';
import { detectItemType } from '@/utils/itemTypeDetector';
import { useSearchHistory } from '@/hooks/useSearchHistory';
import { usePWA } from '@/hooks/usePWA';
import { pwaService } from '@/services/pwaService';
import { validateSerialNumberSecurity, sanitizeInputSecurity } from '@/utils/securityValidation';
import { handleSecureError, createSecureError } from '@/utils/errorHandling';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { usePendingVerification } from '@/hooks/usePendingVerification';
interface EnhancedSearchFormProps {
  onOpenQrScanner: () => void;
}
export const EnhancedSearchForm: React.FC<EnhancedSearchFormProps> = ({
  onOpenQrScanner
}) => {
  const [serialNumber, setSerialNumber] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const {
    remainingSearches,
    hasReachedLimit,
    isSubscribed,
    consumeSearch
  } = useSearchLimits();
  const {
    verifyItem,
    isLoading
  } = useRealVerification();
  const {
    addToSearchHistory
  } = useSearchHistory();
  const {
    isOnline
  } = usePWA();
  const {
    isAuthenticated
  } = useUnifiedAuth();
  const {
    savePendingVerification
  } = usePendingVerification();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = sanitizeInputSecurity(e.target.value);
    setSerialNumber(value);
  };
  const handleSearch = async () => {
    const validation = validateSerialNumberSecurity(serialNumber);
    if (!validation.isValid) {
      const error = createSecureError(validation.errors[0], `Invalid serial number input: ${serialNumber}`, 'INVALID_INPUT');
      handleSecureError(error, toast);
      return;
    }

    // Allow guest users to proceed with limited searches
    if (!isAuthenticated && hasReachedLimit) {
      const cleanSerialNumber: string = sanitizeInputSecurity(serialNumber.trim());
      const itemType = detectItemType(cleanSerialNumber);
      await savePendingVerification(cleanSerialNumber, itemType, 'buyer');
      toast({
        title: 'Free searches used',
        description: 'Sign up to get 4 more searches and continue verifying items.'
      });
      navigate('/auth?tab=signup');
      return;
    }

    // Check for cached data when offline
    if (!isOnline) {
      const cachedData = await pwaService.getCachedVerificationData(serialNumber);
      if (cachedData) {
        toast({
          title: "Using Cached Data",
          description: "Showing previously verified result (offline mode)"
        });
        navigate(`/?verificationId=${cachedData.result.id}&cached=true`);
        return;
      } else {
        toast({
          title: "Offline Mode",
          description: "No cached data available. Connect to internet for verification.",
          variant: "destructive"
        });
        return;
      }
    }
    setIsDialogOpen(true);
  };
  const handleRealVerification = async () => {
    const canProceed = await consumeSearch();
    if (!canProceed) return;
    try {
      const cleanSerialNumber: string = sanitizeInputSecurity(serialNumber.trim());
      const itemType = detectItemType(cleanSerialNumber);

      // Add to search history
      addToSearchHistory(cleanSerialNumber);

      // Perform real verification
      const result = await verifyItem(cleanSerialNumber, itemType);
      if (result) {
        // Cache the result for offline use
        await pwaService.cacheVerificationData(cleanSerialNumber, result);

        // Navigate to verification results with the result ID
        navigate(`/?verificationId=${result.id}`);

        // Clear the input
        setSerialNumber('');

        // Scroll to verification section after a slight delay
        setTimeout(() => {
          const verificationSection = document.getElementById('verification-results');
          if (verificationSection) {
            verificationSection.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }, 300);
      }
    } catch (error) {
      console.error('Secure verification error:', error);
    }
  };
  const handleFreeVerification = async () => {
    setIsDialogOpen(false);
    await handleRealVerification();
  };
  return;
};