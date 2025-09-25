
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { QrCode, Search, WifiOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useEnhancedSearchLimits } from '@/hooks/useEnhancedSearchLimits';
import { useRealVerification } from '@/hooks/useRealVerification';
import { VerificationDialog } from './VerificationDialog';
import { SearchLimitDisplay } from './SearchLimitDisplay';
import { detectItemType } from '@/utils/itemTypeDetector';
import { useSearchHistory } from '@/hooks/useSearchHistory';
import { usePWA } from '@/hooks/usePWA';
import { pwaService } from '@/services/pwaService';
import { 
  validateSerialNumberSecurity, 
  sanitizeInputSecurity 
} from '@/utils/simpleValidation';
import { handleSecureError, createSecureError } from '@/utils/errorHandling';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { usePendingVerification } from '@/hooks/usePendingVerification';
import { FreemiumPaywall } from '@/components/FreemiumPaywall';

interface SearchFormProps {
  onOpenQrScanner: () => void;
}

const SearchForm = ({ onOpenQrScanner }: SearchFormProps) => {
  const [serialNumber, setSerialNumber] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { remainingSearches, hasReachedLimit, isSubscribed, consumeSearch } = useEnhancedSearchLimits();
  const { verifyItem, isLoading } = useRealVerification();
  const { addToSearchHistory } = useSearchHistory();
  const { isOnline } = usePWA();
  const { isAuthenticated } = useUnifiedAuth();
  const { savePendingVerification } = usePendingVerification();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = sanitizeInputSecurity(e.target.value);
    setSerialNumber(value);
  };

  const handleSearch = async () => {
    const validation = await validateSerialNumberSecurity(serialNumber);
    
    if (!validation.isValid) {
      const error = createSecureError(
        validation.errors[0],
        `Invalid serial number input: ${serialNumber}`,
        'INVALID_INPUT'
      );
      handleSecureError(error, toast);
      return;
    }

    // Require authentication before any verification
    if (!isAuthenticated) {
      const cleanSerialNumber: string = sanitizeInputSecurity(serialNumber.trim());
      const itemType = detectItemType(cleanSerialNumber);
      await savePendingVerification(cleanSerialNumber, itemType, 'buyer');
      toast({
        title: 'Sign in required',
        description: 'Please create an account or sign in to verify items.',
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
          description: "Showing previously verified result (offline mode)",
        });
        navigate(`/?verificationId=${cachedData.result.id}&cached=true`);
        return;
      } else {
        toast({
          title: "Offline Mode",
          description: "No cached data available. Connect to internet for verification.",
          variant: "destructive",
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
            verificationSection.scrollIntoView({ behavior: 'smooth' });
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

  const handleUpgrade = () => {
    navigate('/subscriptions');
  };

  const searchCount = 4 - remainingSearches; // Calculate how many searches used

  return (
    <div className="w-full max-w-lg mx-auto animate-slideUp" style={{ animationDelay: '0.3s' }}>
      {/* Show paywall before search form if approaching limit */}
      {isAuthenticated && !isSubscribed && (remainingSearches <= 1) && (
        <FreemiumPaywall 
          searchCount={searchCount}
          maxFreeSearches={4}
          onUpgrade={handleUpgrade}
        />
      )}
      
      <div className="flex gap-2 mb-4">
        <Input 
          type="text" 
          placeholder="Enter IMEI, VIN, or Serial Number" 
          value={serialNumber} 
          onChange={handleInputChange}
          onKeyPress={e => e.key === 'Enter' && handleSearch()} 
          className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-sos-lime focus:ring-sos-lime"
          disabled={isLoading}
          maxLength={100}
        />
        <Button 
          onClick={onOpenQrScanner} 
          variant="outline" 
          size="icon" 
          className="border-sos-lime hover:text-sos-lime-light bg-zinc-50 text-zinc-950"
          disabled={isLoading || !isOnline}
        >
          <QrCode className="h-4 w-4" />
        </Button>
      </div>
      
      <Button 
        onClick={handleSearch} 
        size="lg" 
        className="w-full hover:bg-sos-lime-light text-black font-semibold transition-all duration-300 bg-orange-500 hover:bg-orange-400"
        disabled={isLoading}
      >
        {!isOnline ? (
          <>
            <WifiOff className="mr-2 h-5 w-5" />
            Search Offline Cache
          </>
        ) : (
          <>
            <Search className="mr-2 h-5 w-5" />
            {isLoading ? 'Verifying...' : 'Verify Now - Real Database Check'}
          </>
        )}
      </Button>
      
      <SearchLimitDisplay 
        hasReachedLimit={hasReachedLimit} 
        remainingSearches={remainingSearches} 
        isSubscribed={isSubscribed} 
      />

      <VerificationDialog 
        isOpen={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        hasReachedLimit={hasReachedLimit} 
        onFreeVerification={handleFreeVerification} 
      />
    </div>
  );
};

export default SearchForm;
