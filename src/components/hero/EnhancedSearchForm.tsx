
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
import { 
  validateSerialNumberSecurity, 
  sanitizeInputSecurity 
} from '@/utils/securityValidation';
import { handleSecureError, createSecureError } from '@/utils/errorHandling';

interface EnhancedSearchFormProps {
  onOpenQrScanner: () => void;
}

export const EnhancedSearchForm: React.FC<EnhancedSearchFormProps> = ({ onOpenQrScanner }) => {
  const [serialNumber, setSerialNumber] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { remainingSearches, hasReachedLimit, isSubscribed, consumeSearch } = useSearchLimits();
  const { verifyItem, isLoading } = useRealVerification();
  const { addToSearchHistory } = useSearchHistory();
  const { isOnline } = usePWA();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = sanitizeInputSecurity(e.target.value);
    setSerialNumber(value);
  };

  const handleSearch = async () => {
    const validation = validateSerialNumberSecurity(serialNumber);
    
    if (!validation.isValid) {
      const error = createSecureError(
        validation.errors[0],
        `Invalid serial number input: ${serialNumber}`,
        'INVALID_INPUT'
      );
      handleSecureError(error, toast);
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

  return (
    <Card className="glass-effect p-8 max-w-2xl mx-auto animate-slideUp border-2 border-border/20 hover:border-border/40 transition-all duration-300" style={{ animationDelay: '0.3s' }}>
      {/* Header */}
      <div className="text-center mb-6">
        <Badge variant="secondary" className="mb-4 bg-sos-orange/10 text-sos-orange border-sos-orange/20">
          <Shield className="h-3 w-3 mr-1" />
          Secure Real-Time Verification
        </Badge>
        <h3 className="text-xl font-semibold mb-2">Enter Item Details</h3>
        <p className="text-sm text-muted-foreground">
          We'll check against multiple databases instantly
        </p>
      </div>

      {/* Search Input */}
      <div className="space-y-4">
        <div className="relative">
          <div className={`
            relative rounded-xl border-2 transition-all duration-300
            ${isInputFocused ? 'border-sos-lime shadow-lg shadow-sos-lime/20' : 'border-border/30'}
            ${serialNumber ? 'border-sos-orange/50' : ''}
          `}>
            <Input 
              type="text" 
              placeholder="Enter IMEI, VIN, Serial Number, or Model..." 
              value={serialNumber} 
              onChange={handleInputChange}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              onKeyPress={e => e.key === 'Enter' && handleSearch()} 
              className="border-0 bg-transparent text-lg py-6 px-6 focus:ring-0 focus:outline-none placeholder:text-muted-foreground/60"
              disabled={isLoading}
              maxLength={100}
            />
            
            {/* Input decorations */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              {serialNumber && (
                <CheckCircle className="h-5 w-5 text-sos-lime" />
              )}
              <Button 
                onClick={onOpenQrScanner} 
                variant="ghost" 
                size="sm"
                className="h-8 w-8 p-0 hover:bg-sos-lime/10 hover:text-sos-lime"
                disabled={isLoading || !isOnline}
              >
                <QrCode className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Input hint */}
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Supports IMEI, VIN, Serial Numbers, Model Numbers & More
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            onClick={handleSearch} 
            size="lg" 
            className="flex-1 h-14 text-base font-semibold bg-gradient-to-r from-sos-orange to-sos-orange/90 hover:from-sos-orange/90 hover:to-sos-orange text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            disabled={isLoading || !serialNumber.trim()}
          >
            {!isOnline ? (
              <>
                <WifiOff className="mr-2 h-5 w-5" />
                Search Offline Cache
              </>
            ) : (
              <>
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    Verify Now - Real Database
                  </>
                )}
              </>
            )}
          </Button>
        </div>

        {/* Features showcase */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/20">
          <div className="text-center">
            <div className="text-sos-lime text-sm font-semibold">< 3sec</div>
            <div className="text-xs text-muted-foreground">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-sos-orange text-sm font-semibold">98.7%</div>
            <div className="text-xs text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-green-400 text-sm font-semibold">50+</div>
            <div className="text-xs text-muted-foreground">Data Sources</div>
          </div>
        </div>
      </div>
      
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
    </Card>
  );
};
