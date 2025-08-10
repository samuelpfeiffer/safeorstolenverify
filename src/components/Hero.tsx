
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useRealVerification } from '@/hooks/useRealVerification';
import { SimpleSearchForm } from '@/components/hero/SimpleSearchForm';
import QrScanner from '@/components/hero/QrScanner';
import { detectItemType } from '@/utils/itemTypeDetector';
import { useSearchHistory } from '@/hooks/useSearchHistory';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { Button } from '@/components/ui/button';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const [isQrScannerOpen, setIsQrScannerOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { verifyItem } = useRealVerification();
  const { addToSearchHistory } = useSearchHistory();
  const { remainingSearches, isSubscribed, isLoading: limitsLoading } = useSearchLimits();

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
  }, [verifyItem, addToSearchHistory, navigate, toast]);

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:bg-white/10 transition-colors mb-6"
              title="Accelerated By FasterCapital"
            >
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2d0d27ab5_image.png" alt="FasterCapital" className="h-4 w-4 object-contain" />
              <span className="text-xs uppercase tracking-wide">Accelerated By</span>
              <span className="font-semibold">FasterCapital</span>
            </a>

            {/* Domain Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-sos-orange">safeorstolen.com</h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-2">Check if items are stolen before you purchase them.</p>
            <p className="text-base md:text-lg text-sos-lime font-semibold mb-10">Real-time verification in seconds.</p>

            {/* Verify Card */}
            <div className="mb-6">
              <ErrorBoundary fallback={
                <div className="text-center p-4 text-gray-500">Search form temporarily unavailable</div>
              }>
                <SimpleSearchForm onOpenQrScanner={handleOpenQrScanner} />
              </ErrorBoundary>
            </div>

            {/* Extra actions below verify card */}
            <div className="flex flex-col items-center gap-4">
              <Button
                variant="destructive"
                className="px-5"
                onClick={() => navigate('/real-time-verification?category=firearms')}
              >
                Search Stolen Firearms Database
              </Button>

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
