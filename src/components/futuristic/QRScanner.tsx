import React, { useRef, useEffect, useState } from 'react';
import QrScanner from 'qr-scanner';
import { Camera, X, Zap, Upload, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface QRScannerProps {
  onScan: (result: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

export const QRScanner: React.FC<QRScannerProps> = ({ onScan, onClose, isOpen }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scannerRef = useRef<QrScanner | null>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState<string>('');
  const [starting, setStarting] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;
    setError('');
    setStarting(true);

    const start = async () => {
      try {
        const hasCamera = await QrScanner.hasCamera();
        if (!hasCamera) {
          setError('No camera detected on this device. Use “Upload image” to scan a QR code from a photo.');
          setStarting(false);
          return;
        }
        if (!videoRef.current) return;
        const qrScanner = new QrScanner(
          videoRef.current,
          (result) => {
            onScan(result.data);
            onClose();
          },
          { highlightScanRegion: true, highlightCodeOutline: true, preferredCamera: 'environment' }
        );
        scannerRef.current = qrScanner;
        await qrScanner.start();
        if (cancelled) {
          qrScanner.destroy();
          return;
        }
        setHasPermission(true);
        setStarting(false);
      } catch (err: any) {
        console.error('[QRScanner] start failed', err);
        const msg = String(err?.message || err || '');
        if (msg.toLowerCase().includes('permission') || msg.toLowerCase().includes('denied') || msg.toLowerCase().includes('notallowed')) {
          setError('Camera permission was blocked. Allow camera access in your browser, or upload an image instead.');
        } else if (msg.toLowerCase().includes('secure') || msg.toLowerCase().includes('https')) {
          setError('Camera scanning requires a secure (HTTPS) page. Upload an image instead.');
        } else {
          setError('Camera unavailable in this view. Upload an image to scan, or open the site in a new tab.');
        }
        setStarting(false);
      }
    };

    start();

    return () => {
      cancelled = true;
      scannerRef.current?.destroy();
      scannerRef.current = null;
    };
  }, [isOpen, onScan, onClose]);

  const handleFile = async (file: File) => {
    try {
      const result = await QrScanner.scanImage(file, { returnDetailedScanResult: true });
      onScan(result.data);
      onClose();
    } catch (err) {
      console.error('[QRScanner] image scan failed', err);
      setError('Could not read a QR code from that image. Try a clearer photo.');
    }
  };

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
                <div className="flex items-center justify-center h-full text-center p-6">
                  <div>
                    <AlertCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">{error}</p>
                  </div>
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    playsInline
                    muted
                  />
                  {starting && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-sm text-muted-foreground">
                      Starting camera…
                    </div>
                  )}
                </>
              )}

              {!error && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-48 h-48 border-2 border-neon-cyan rounded-lg">
                    <div className="absolute -top-1 -left-1 w-6 h-6 border-l-4 border-t-4 border-neon-cyan rounded-tl"></div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 border-r-4 border-t-4 border-neon-cyan rounded-tr"></div>
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-4 border-b-4 border-neon-cyan rounded-bl"></div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-4 border-b-4 border-neon-cyan rounded-br"></div>
                    <motion.div
                      className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
                      animate={{ y: [0, 192, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-card/90 backdrop-blur-sm space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-neon-cyan shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Point camera at a QR code, or upload a photo
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload image to scan
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                  e.target.value = '';
                }}
              />
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
