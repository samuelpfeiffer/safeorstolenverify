import React, { useRef, useEffect, useState, useCallback } from 'react';
import QrScanner from 'qr-scanner';
import { Camera, X, Zap, ScanLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface QRScannerProps {
  onScan: (result: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

export const QRScanner: React.FC<QRScannerProps> = ({ onScan, onClose, isOpen }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scannerRef = useRef<QrScanner | null>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState<string>('');
  const [isInitializing, setIsInitializing] = useState(true);

  const handleClose = useCallback(() => {
    if (scannerRef.current) {
      scannerRef.current.stop();
      scannerRef.current.destroy();
      scannerRef.current = null;
    }
    setHasPermission(false);
    setError('');
    setIsInitializing(true);
    onClose();
  }, [onClose]);

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen && videoRef.current && !scannerRef.current) {
      setIsInitializing(true);
      setError('');
      
      const qrScanner = new QrScanner(
        videoRef.current,
        (result) => {
          onScan(result.data);
          handleClose();
        },
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
          returnDetailedScanResult: true,
        }
      );

      scannerRef.current = qrScanner;

      qrScanner.start().then(() => {
        setHasPermission(true);
        setIsInitializing(false);
      }).catch((err) => {
        setError('Camera access denied. Please allow camera access to scan barcodes.');
        setIsInitializing(false);
        console.error('Scanner error:', err);
      });
    }

    return () => {
      if (scannerRef.current && !isOpen) {
        scannerRef.current.stop();
        scannerRef.current.destroy();
        scannerRef.current = null;
      }
    };
  }, [isOpen, onScan, handleClose]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current.destroy();
        scannerRef.current = null;
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
      >
        {/* Large Close Button at Top */}
        <div className="absolute top-4 left-0 right-0 flex justify-center z-10">
          <Button
            onClick={handleClose}
            variant="destructive"
            size="lg"
            className="gap-2 px-6 py-3 text-base font-semibold shadow-lg"
          >
            <X className="w-5 h-5" />
            Close Scanner
          </Button>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-md mx-auto mt-16"
        >
          <div className="rounded-xl overflow-hidden border-2 border-primary/50 shadow-2xl">
            <div className="relative aspect-square bg-black">
              {isInitializing && !error ? (
                <div className="flex items-center justify-center h-full text-center p-4">
                  <div className="space-y-4">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-muted-foreground">Starting camera...</p>
                  </div>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center h-full text-center p-6">
                  <div className="space-y-4">
                    <Camera className="w-16 h-16 text-destructive mx-auto" />
                    <p className="text-destructive font-medium">{error}</p>
                    <Button onClick={handleClose} variant="outline">
                      Go Back
                    </Button>
                  </div>
                </div>
              ) : (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                />
              )}
              
              {/* Scanning overlay */}
              {hasPermission && !error && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-56 h-56 border-2 border-primary rounded-lg">
                    <div className="absolute -top-1 -left-1 w-8 h-8 border-l-4 border-t-4 border-primary rounded-tl"></div>
                    <div className="absolute -top-1 -right-1 w-8 h-8 border-r-4 border-t-4 border-primary rounded-tr"></div>
                    <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-4 border-b-4 border-primary rounded-bl"></div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-4 border-b-4 border-primary rounded-br"></div>
                    
                    <motion.div
                      className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                      animate={{
                        y: [0, 220, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 bg-card/95 backdrop-blur-sm space-y-3">
              <div className="flex items-center justify-center gap-2 text-center">
                <ScanLine className="w-5 h-5 text-primary" />
                <p className="text-sm font-medium">
                  Point camera at barcode or QR code
                </p>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Works with IMEI barcodes, VIN plates, serial numbers, and QR codes
              </p>
            </div>
          </div>

          {/* Bottom close option */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            Tap outside or press <kbd className="px-2 py-1 bg-muted rounded text-xs">ESC</kbd> to close
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};