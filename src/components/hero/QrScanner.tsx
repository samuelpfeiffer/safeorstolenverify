
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

  const startQrScanner = () => {
    if (!qrScannerRef.current || scannerInitialized) return;

    const scanner = new Html5Qrcode("qr-scanner");
    scannerInstanceRef.current = scanner;
    
    const qrConfig = { fps: 10, qrbox: { width: 250, height: 250 } };
    
    scanner.start(
      { facingMode: "environment" },
      qrConfig,
      (decodedText) => {
        // QR code successfully scanned
        onScanSuccess(decodedText);
        stopQrScanner();
        onOpenChange(false);
      },
      (errorMessage) => {
        console.log(`QR scan error: ${errorMessage}`);
      }
    ).catch((err) => {
      console.error("QR scanner error:", err);
      toast({
        title: "Scanner Error",
        description: "Could not access your camera. Please check permissions.",
        variant: "destructive",
      });
      onOpenChange(false);
    });
    
    setScannerInitialized(true);
  };

  const stopQrScanner = () => {
    if (scannerInstanceRef.current && scannerInstanceRef.current.isScanning) {
      scannerInstanceRef.current.stop().then(() => {
        setScannerInitialized(false);
      }).catch(err => {
        console.error("Failed to stop scanner:", err);
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Initialize scanner when dialog opens
      setTimeout(() => {
        startQrScanner();
      }, 500);
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
          <div id="qr-scanner" ref={qrScannerRef} className="w-full h-[300px] bg-gray-100" />
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
