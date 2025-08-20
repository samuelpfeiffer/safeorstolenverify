
import { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type QrScannerProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onScanSuccess: (decodedText: string) => void;
};

const QrScanner = ({ isOpen, onOpenChange, onScanSuccess }: QrScannerProps) => {
  const qrScannerRef = useRef<HTMLDivElement>(null);
  const [scannerInitialized, setScannerInitialized] = useState(false);
  const scannerInstanceRef = useRef<Html5Qrcode | null>(null);
  const { toast } = useToast();

  const startQrScanner = async () => {
    if (!qrScannerRef.current || scannerInitialized || scannerInstanceRef.current) return;

    try {
      // Clear any existing scanner first
      await stopQrScanner();
      
      const scanner = new Html5Qrcode("qr-scanner");
      scannerInstanceRef.current = scanner;
      
      const qrConfig = { fps: 10, qrbox: { width: 250, height: 250 } };
      
      await scanner.start(
        { facingMode: "environment" },
        qrConfig,
        (decodedText) => {
          // QR code successfully scanned
          onScanSuccess(decodedText);
          stopQrScanner();
          onOpenChange(false);
        },
        (errorMessage) => {
          // Ignore error messages during normal scanning
        }
      );
      
      setScannerInitialized(true);
    } catch (err) {
      console.error("QR scanner error:", err);
      toast({
        title: "Scanner Error",
        description: "Could not access your camera. Please check permissions.",
        variant: "destructive",
      });
      onOpenChange(false);
    }
  };

  const stopQrScanner = async () => {
    if (scannerInstanceRef.current) {
      try {
        if (scannerInstanceRef.current.isScanning) {
          await scannerInstanceRef.current.stop();
        }
        await scannerInstanceRef.current.clear();
      } catch (err) {
        console.error("Failed to stop scanner:", err);
      } finally {
        scannerInstanceRef.current = null;
        setScannerInitialized(false);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Initialize scanner when dialog opens
      setTimeout(() => {
        startQrScanner();
      }, 300);
    } else {
      // Clean up scanner when dialog closes
      stopQrScanner();
    }
  }, [isOpen]);

  // Clean up scanner on component unmount
  useEffect(() => {
    return () => {
      stopQrScanner();
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle>Scan QR Code</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center">
          <div 
            id="qr-scanner" 
            ref={qrScannerRef} 
            className="w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden" 
          />
          <p className="text-sm text-muted-foreground mt-2">Position the QR code within the frame</p>
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
