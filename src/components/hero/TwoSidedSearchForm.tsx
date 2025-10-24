import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSafeSearchParams } from '@/hooks/useSafeSearchParams';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QrCode, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { usePendingVerification } from '@/hooks/usePendingVerification';
import { detectItemType } from '@/utils/itemTypeDetector';
import { validateSerialNumberSecurity } from '@/utils/simpleValidation';
import { useAuth } from '@/lib/auth';

interface TwoSidedSearchFormProps {
  onOpenQrScanner: () => void;
}

export const TwoSidedSearchForm = ({ onOpenQrScanner }: TwoSidedSearchFormProps) => {
  const [serialNumber, setSerialNumber] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSafeSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { savePendingVerification } = usePendingVerification();
  const { user } = useAuth();

  const userIntent = searchParams.get('intent') as 'buyer' | 'seller' | null;

  // Get display text based on user intent
  const getIntentText = () => {
    switch (userIntent) {
      case 'buyer':
        return {
          title: 'Check Item Before You Buy',
          subtitle: 'Verify it\'s not stolen before purchase',
          badge: 'For Buyers',
          badgeColor: 'bg-blue-500'
        };
      case 'seller':
        return {
          title: 'Verify Item Before You Sell',
          subtitle: 'Protect your reputation and avoid trouble',
          badge: 'For Sellers', 
          badgeColor: 'bg-green-500'
        };
      default:
        return {
          title: 'Verify Any Item',
          subtitle: 'Check serial numbers, IMEI, VIN codes',
          badge: 'Universal Check',
          badgeColor: 'bg-sos-orange'
        };
    }
  };

  const intentText = getIntentText();

  const handleInputChange = (value: string) => {
    // Basic input sanitization
    const sanitized = value.replace(/[<>]/g, '').trim();
    setSerialNumber(sanitized);
    
    // Auto-detect item type
    if (sanitized.length > 3) {
      const detectedType = detectItemType(sanitized);
      setSelectedType(detectedType);
    }
  };

  const handleSearch = async () => {
    if (!serialNumber.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter a serial number, IMEI, or VIN code.",
        variant: "destructive"
      });
      return;
    }

    // Security validation
    const validation = await validateSerialNumberSecurity(serialNumber);
    if (!validation.isValid) {
      toast({
        title: "Invalid Input",
        description: validation.errors[0],
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const sanitizedSerial = validation.sanitizedValue;
      const itemType = selectedType || detectItemType(sanitizedSerial);

      // If user is authenticated, redirect to dashboard
      if (user) {
        // Store in URL params and redirect to dashboard
        navigate(`/dashboard?serial=${encodeURIComponent(sanitizedSerial)}&type=${encodeURIComponent(itemType)}&intent=${userIntent || 'buyer'}`);
        return;
      }

      // Save pending verification and redirect to auth
      const saved = await savePendingVerification(sanitizedSerial, itemType, userIntent || 'buyer');
      if (saved) {
        toast({
          title: "Ready to Verify",
          description: "Sign in to continue with your verification.",
        });
        navigate('/auth?tab=signup');
      }
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card/95 backdrop-blur-lg border-2 border-sos-lime/20 shadow-2xl">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <Badge className={`${intentText.badgeColor} text-white mb-4 text-sm px-4 py-2`}>
            {intentText.badge}
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-3">
            {intentText.title}
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            {intentText.subtitle}
          </p>
        </div>

        <div className="space-y-5">
          {/* Item Type Selector */}
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="bg-background border-2 border-input hover:border-sos-lime/50 text-foreground h-12 text-base transition-colors">
              <SelectValue placeholder="Select item type (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="IMEI">Phone / Mobile Device</SelectItem>
              <SelectItem value="VIN">Vehicle / Car</SelectItem>
              <SelectItem value="Serial Number">Electronics / Laptop</SelectItem>
              <SelectItem value="Bike Serial">Bicycle</SelectItem>
              <SelectItem value="Other">Other Item</SelectItem>
            </SelectContent>
          </Select>

          {/* Serial Number Input */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter IMEI, VIN, or serial number to check stolen status"
              value={serialNumber}
              onChange={(e) => handleInputChange(e.target.value)}
              className="bg-background border-2 border-input hover:border-sos-lime/50 text-foreground placeholder:text-muted-foreground pr-14 h-12 text-base transition-colors focus:border-sos-lime"
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSearch()}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-2 top-2 h-8 w-8 p-0 text-muted-foreground hover:text-sos-lime hover:bg-sos-lime/10"
              onClick={onOpenQrScanner}
            >
              <QrCode className="h-5 w-5" />
            </Button>
          </div>

          {/* Verify Button */}
          <Button 
            onClick={handleSearch} 
            disabled={!serialNumber.trim() || isLoading}
            className="w-full bg-sos-orange hover:bg-sos-orange/90 text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Processing...
              </div>
            ) : (
              <>
                <Search className="mr-3 h-5 w-5" />
                {user ? 'Verify Now' : 'Sign Up & Verify Free'}
              </>
            )}
          </Button>

          {/* Auth hint for non-authenticated users */}
          {!user && (
            <p className="text-center text-base text-muted-foreground pt-2">
              Get <span className="text-sos-lime font-bold text-lg">4 FREE verifications</span> when you create your account
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};