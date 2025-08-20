
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useRealVerification } from '@/hooks/useRealVerification';
import { TwoSidedSearchForm } from '@/components/hero/TwoSidedSearchForm';
import QrScanner from '@/components/hero/QrScanner';
import { detectItemType } from '@/utils/itemTypeDetector';
import { useSearchHistory } from '@/hooks/useSearchHistory';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { Button } from '@/components/ui/button';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { Badge } from '@/components/ui/badge';
import { Shield, Users } from 'lucide-react';

const Hero = () => {
  const [isQrScannerOpen, setIsQrScannerOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { verifyItem } = useRealVerification();
  const { addToSearchHistory } = useSearchHistory();
  const { remainingSearches, isSubscribed, isLoading: limitsLoading, consumeSearch } = useSearchLimits();

  const handleQrCodeSuccess = useCallback(async (decodedText: string) => {
    if (!decodedText?.trim()) {
      toast({
        title: "Invalid QR Code",
        description: "The QR code appears to be empty or invalid.",
        variant: "destructive"
      });
      return;
    }

    try {
      const itemType = detectItemType(decodedText);
      const trimmedText = decodedText.trim();

      // Check search limits
      const canProceed = await consumeSearch();
      if (!canProceed) {
        setIsQrScannerOpen(false);
        return;
      }

      // Add to search history
      addToSearchHistory(trimmedText);
      
      toast({
        title: "QR Code Scanned Successfully",
        description: `Starting real verification for ${itemType}: ${trimmedText}`
      });

      // Perform real verification
      const result = await verifyItem(trimmedText, itemType);
      if (result?.id) {
        // Navigate to verification results with the result ID
        navigate(`/?verificationId=${result.id}`);

        // Scroll to verification section after a slight delay
        setTimeout(() => {
          const verificationSection = document.getElementById('verification-results');
          if (verificationSection) {
            verificationSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      } else {
        throw new Error('No verification result received');
      }
    } catch (error) {
      console.error('QR verification error:', error);
      toast({
        title: "Verification Failed",
        description: error instanceof Error ? error.message : "Unable to verify the scanned item. Please try again.",
        variant: "destructive"
      });
    }
  }, [verifyItem, addToSearchHistory, navigate, toast, consumeSearch]);

  const handleOpenQrScanner = useCallback(() => {
    setIsQrScannerOpen(true);
  }, []);

  const handleCloseQrScanner = useCallback((open: boolean) => {
    setIsQrScannerOpen(open);
  }, []);

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sos-dark to-sos"></div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Accelerated By pill */}
            <a
              href="https://fastercapital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-gray-100 hover:text-white hover:bg-white/10 transition-colors mb-6"
              title="Accelerated by FasterCapital"
              aria-label="FasterCapital accelerator"
            >
              <span className="text-base md:text-lg uppercase tracking-wide text-muted-foreground">ACCELERATED BY</span>
              <img src="/images/partners/fastercapital-logo.png" alt="FasterCapital official logo" className="h-16 md:h-20 w-auto object-contain" loading="lazy" />
            </a>

            {/* Domain Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-sos-orange">Buy and Sell with Confidence</h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-6">
              Verify items aren't stolen before you buy. Protect your reputation before you sell.
            </p>
            <p className="text-base md:text-lg text-sos-lime font-semibold mb-8">
              Real-time database checks in under 3 seconds
            </p>
            
            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-sos-orange hover:bg-sos-orange/90 text-white font-semibold px-8 py-4 text-lg"
                onClick={() => navigate('/?intent=buyer')}
              >
                <Shield className="mr-2 h-5 w-5" />
                Check an Item to Buy
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-sos-lime text-sos-lime hover:bg-sos-lime hover:text-sos-dark font-semibold px-8 py-4 text-lg"
                onClick={() => navigate('/?intent=seller')}
              >
                <Badge className="mr-2 h-5 w-5" />
                Verify an Item to Sell
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-sos-lime" />
                50+ Global Databases
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-sos-lime" />
                500K+ Protected Users
              </span>
              <span className="flex items-center gap-2">
                <Badge className="h-4 w-4 text-sos-lime" />
                98.7% Accuracy Rate
              </span>
            </div>

            {/* Verify Card */}
            <div className="mb-6">
              <ErrorBoundary fallback={
                <div className="text-center p-4 text-gray-500">Search form temporarily unavailable</div>
              }>
                <TwoSidedSearchForm onOpenQrScanner={handleOpenQrScanner} />
              </ErrorBoundary>
            </div>

            {/* Sign up notice for free searches */}
            <div className="text-center -mt-2 mb-8">
              <p className="text-sm md:text-base text-gray-300">
                Sign up to receive <span className="text-sos-lime font-semibold">4 free searches</span>.{' '}
                <a href="/auth" className="text-sos-orange hover:text-sos-orange/90 font-semibold underline-offset-4 hover:underline">Create your free account</a>.
              </p>
            </div>

            {/* Extra actions below verify card */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-2xl mx-auto">
                <Button
                  variant="destructive"
                  className="w-full px-5"
                  onClick={() => navigate('/firearms-check')}
                  aria-label="Search Stolen Firearms Database"
                >
                  Search Stolen Firearms Database
                </Button>
              </div>

              {/* Credits pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-gray-200">
                <span className="text-sm">Verification Credits:</span>
                <Badge variant="outline" className="rounded-full border-white/20 text-white">
                  {limitsLoading ? 'checking...' : (isSubscribed ? 'unlimited' : `${remainingSearches} remaining`)}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* QR Scanner Dialog */}
        <ErrorBoundary fallback={null}>
          <QrScanner 
            isOpen={isQrScannerOpen} 
            onOpenChange={handleCloseQrScanner} 
            onScanSuccess={handleQrCodeSuccess} 
          />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default Hero;
