import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useRealVerification } from '@/hooks/useRealVerification';
import { SimpleSearchForm } from '@/components/hero/SimpleSearchForm';
import QrScanner from '@/components/hero/QrScanner';
import { detectItemType } from '@/utils/itemTypeDetector';
import { useSearchHistory } from '@/hooks/useSearchHistory';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
const Hero = () => {
  const [isQrScannerOpen, setIsQrScannerOpen] = useState(false);
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const {
    verifyItem
  } = useRealVerification();
  const {
    addToSearchHistory
  } = useSearchHistory();
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
            verificationSection.scrollIntoView({
              behavior: 'smooth'
            });
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
  return <ErrorBoundary>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sos-dark to-sos"></div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Logo */}
            <div className="mb-8">
              <img src="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" alt="Safe or Stolen" className="h-20 w-20 md:h-24 md:w-24 mx-auto filter drop-shadow-lg" />
            </div>
            
            {/* FasterCapital Branding */}
            <div className="mb-6">
              <p className="text-lg text-white mb-2">
            </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                <span>Accelerated by</span>
                <a href="https://fastercapital.com" target="_blank" rel="noopener noreferrer" className="text-sos-orange hover:text-sos-orange/80 transition-colors font-semibold">
                  FasterCapital
                </a>
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-red-400">Safe Or Stolen</span>
              <br />
              <span className="text-white">Verify Before You Buy</span>
            </h1>
            
            {/* Simple Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Check if items are stolen before you purchase them. 
              <strong className="text-sos-lime"> Real-time verification</strong> in seconds.
            </p>
            
            {/* Clean Search Form */}
            <div className="mb-12">
              <ErrorBoundary fallback={<div className="text-center p-4 text-gray-500">
                  Search form temporarily unavailable
                </div>}>
                <SimpleSearchForm onOpenQrScanner={handleOpenQrScanner} />
              </ErrorBoundary>
            </div>

            {/* Simple Trust Statement */}
            <p className="text-sm text-gray-400">
              Trusted by 500K+ users • Featured by FasterCapital
            </p>
          </div>
        </div>

        {/* QR Scanner Dialog */}
        <ErrorBoundary fallback={null}>
          <QrScanner isOpen={isQrScannerOpen} onOpenChange={handleCloseQrScanner} onScanSuccess={handleQrCodeSuccess} />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>;
};
export default Hero;