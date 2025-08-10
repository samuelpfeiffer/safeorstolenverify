import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QrCode, Search, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { useRealVerification } from '@/hooks/useRealVerification';
import { detectItemType } from '@/utils/itemTypeDetector';
import { useSearchHistory } from '@/hooks/useSearchHistory';
import { 
  validateSerialNumberSecurity, 
  sanitizeInputSecurity 
} from '@/utils/securityValidation';
import { handleSecureError, createSecureError } from '@/utils/errorHandling';

interface SimpleSearchFormProps {
  onOpenQrScanner: () => void;
}

export const SimpleSearchForm: React.FC<SimpleSearchFormProps> = ({ onOpenQrScanner }) => {
  const [serialNumber, setSerialNumber] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { consumeSearch } = useSearchLimits();
  const { verifyItem } = useRealVerification();
  const { addToSearchHistory } = useSearchHistory();

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

    const canProceed = await consumeSearch();
    if (!canProceed) return;

    setIsLoading(true);
    try {
      const cleanSerialNumber: string = sanitizeInputSecurity(serialNumber.trim());
      const itemType = detectItemType(cleanSerialNumber);
      
      // Add to search history
      addToSearchHistory(cleanSerialNumber);

      // Perform verification
      const result = await verifyItem(cleanSerialNumber, itemType);
      
      if (result) {
        // Navigate to verification results
        navigate(`/?verificationId=${result.id}`);
        
        // Clear the input
        setSerialNumber('');
        
        // Scroll to verification section
        setTimeout(() => {
          const verificationSection = document.getElementById('verification-results');
          if (verificationSection) {
            verificationSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    } catch (error) {
      console.error('Verification error:', error);
      toast({
        title: "Verification Failed",
        description: "Unable to verify the item. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-xl">
      <div className="text-center mb-6">
        <Shield className="h-8 w-8 text-sos-orange mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Verify Item</h3>
        <p className="text-gray-300 text-sm">
          Enter serial number, IMEI, or unique identifier
        </p>
      </div>

      <div className="space-y-4">
        {/* Type + Input */}
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-3">
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent className="bg-sos-dark border-white/10 text-white">
              <SelectItem value="imei">IMEI</SelectItem>
              <SelectItem value="vin">VIN</SelectItem>
              <SelectItem value="serial">Serial Number</SelectItem>
              <SelectItem value="model">Model</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative">
            <Input 
              type="text" 
              placeholder="Enter IMEI, VIN, Serial Number..." 
              value={serialNumber} 
              onChange={handleInputChange}
              onKeyPress={e => e.key === 'Enter' && handleSearch()} 
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12 pr-12"
              disabled={isLoading}
              maxLength={100}
            />
            <Button 
              onClick={onOpenQrScanner} 
              variant="ghost" 
              size="sm"
              className="absolute right-2 top-2 h-8 w-8 p-0 text-gray-400 hover:text-white"
              disabled={isLoading}
            >
              <QrCode className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Verify button */}
        <Button 
          onClick={handleSearch} 
          size="lg" 
          className="w-full bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold"
          disabled={isLoading || !serialNumber.trim()}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Verifying...
            </>
          ) : (
            <>
              <Search className="mr-2 h-5 w-5" />
              Verify Now
            </>
          )}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          Real-time verification • Results in under 3 seconds
        </p>

      </div>
    </Card>
  );
};