import React, { useRef, useEffect, useState } from 'react';
import QrScanner from 'qr-scanner';
import { Camera, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface QRScannerProps {
  onScan: (result: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

export const QRScanner: React.FC<QRScannerProps> = ({ onScan, onClose, isOpen }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scanner, setScanner] = useState<QrScanner | null>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (isOpen && videoRef.current) {
      const qrScanner = new QrScanner(
        videoRef.current,
        (result) => {
          onScan(result.data);
          onClose();
        },
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );

      qrScanner.start().then(() => {
        setHasPermission(true);
        setScanner(qrScanner);
      }).catch((err) => {
        setError('Camera access denied or not available');
        console.error(err);
      });

      return () => {
        qrScanner.destroy();
      };
    }
  }, [isOpen, onScan, onClose]);

  useEffect(() => {
    return () => {
      scanner?.destroy();
    };
  }, [scanner]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-md mx-auto"
        >
          <div className="cyber-border rounded-xl overflow-hidden">
            <div className="relative aspect-square bg-black">
              {error ? (
                <div className="flex items-center justify-center h-full text-center p-4">
                  <div>
                    <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">{error}</p>
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
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-48 h-48 border-2 border-neon-cyan rounded-lg">
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-l-4 border-t-4 border-neon-cyan rounded-tl"></div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-r-4 border-t-4 border-neon-cyan rounded-tr"></div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-4 border-b-4 border-neon-cyan rounded-bl"></div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-4 border-b-4 border-neon-cyan rounded-br"></div>
                  
                  <motion.div
                    className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
                    animate={{
                      y: [0, 192, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-card/90 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-center">
                <Zap className="w-4 h-4 text-neon-cyan" />
                <p className="text-sm text-muted-foreground">
                  Point camera at QR code or serial number
                </p>
              </div>
            </div>
          </div>
          
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute -top-12 right-0 text-white hover:text-neon-cyan"
          >
            <X className="w-6 h-6" />
          </Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};