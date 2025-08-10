
import { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

 type QrScannerProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onScanSuccess: (decodedText: string) => void;
};

const QrScanner = ({ isOpen, onOpenChange, onScanSuccess }: QrScannerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scannerInitialized, setScannerInitialized] = useState(false);
  const scannerRef = useRef<BrowserMultiFormatReader | null>(null);
  const controlsRef = useRef<{ stop: () => void } | null>(null);
  const { toast } = useToast();

  const startScanner = async () => {
    if (scannerInitialized || !videoRef.current) return;

    try {
      const reader = new BrowserMultiFormatReader();
      scannerRef.current = reader;

      const controls = await reader.decodeFromVideoDevice(
        undefined,
        videoRef.current,
        (result, err) => {
          if (result) {
            const text = result.getText();
            if (text) {
              onScanSuccess(text);
              stopScanner();
              onOpenChange(false);
            }
          }
          // ignore frame errors to keep scanning
        }
      );
      controlsRef.current = controls;

      setScannerInitialized(true);
    } catch (err) {
      console.error('Scanner init error:', err);
      toast({
        title: 'Scanner Error',
        description: 'Could not access your camera. Please check permissions.',
        variant: 'destructive',
      });
      onOpenChange(false);
    }
  };

  const stopScanner = () => {
    try {
      controlsRef.current?.stop();
    } catch (err) {
      console.error('Failed to stop scanner:', err);
    } finally {
      setScannerInitialized(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        startScanner();
      }, 300);
    } else {
      stopScanner();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle>Scan Code</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-[300px] bg-gray-100 overflow-hidden rounded-md">
            <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
          </div>
          <p className="text-sm text-muted-foreground mt-2">Position the code (QR or barcode) within the frame</p>
          <Button 
            onClick={() => onOpenChange(false)} 
            className="mt-4 w-full bg-sos-orange hover:bg-sos-orange/90"
          >
            Cancel Scan
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QrScanner;
