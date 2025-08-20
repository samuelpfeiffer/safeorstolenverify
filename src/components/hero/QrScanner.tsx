
import { useEffect, useRef, useState } from 'react';
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  const [detectedFormat, setDetectedFormat] = useState<string>('');
  const { toast } = useToast();

  // Enhanced scanner configuration for multiple formats
  const getScannerConfig = () => ({
    fps: 10,
    qrbox: { width: 280, height: 280 },
    aspectRatio: 1.0,
    // Support multiple formats including barcodes and QR codes
    formatsToSupport: [
      Html5QrcodeSupportedFormats.QR_CODE,
      Html5QrcodeSupportedFormats.CODE_128,
      Html5QrcodeSupportedFormats.CODE_39,
      Html5QrcodeSupportedFormats.CODE_93,
      Html5QrcodeSupportedFormats.CODABAR,
      Html5QrcodeSupportedFormats.EAN_13,
      Html5QrcodeSupportedFormats.EAN_8,
      Html5QrcodeSupportedFormats.ITF,
      Html5QrcodeSupportedFormats.UPC_A,
      Html5QrcodeSupportedFormats.UPC_E,
      Html5QrcodeSupportedFormats.DATA_MATRIX,
    ]
  });

  // Detect what type of code was scanned
  const detectCodeType = (decodedText: string, format?: any) => {
    const text = decodedText.toUpperCase();
    
    // VIN Detection (17 characters, alphanumeric)
    if (/^[A-HJ-NPR-Z0-9]{17}$/.test(text)) {
      setDetectedFormat('VIN Number');
      return 'VIN';
    }
    
    // IMEI Detection (15 digits)
    if (/^\d{15}$/.test(text)) {
      setDetectedFormat('IMEI Number');
      return 'IMEI';
    }
    
    // Serial Number Detection (various patterns)
    if (/^[A-Z0-9]{6,20}$/.test(text) && text.length >= 6) {
      setDetectedFormat('Serial Number');
      return 'Serial';
    }
    
    // Default detection based on format
    if (format) {
      setDetectedFormat(`${format} Code`);
    } else {
      setDetectedFormat('Code Detected');
    }
    
    return 'Unknown';
  };

  const startQrScanner = async () => {
    if (!qrScannerRef.current || scannerInitialized || scannerInstanceRef.current) return;

    try {
      // Clear any existing scanner first
      await stopQrScanner();
      
      const scanner = new Html5Qrcode("qr-scanner");
      scannerInstanceRef.current = scanner;
      
      const config = getScannerConfig();
      
      await scanner.start(
        { facingMode: "environment" },
        config,
        (decodedText, decodedResult) => {
          // Detect the type of code scanned
          const codeType = detectCodeType(decodedText, decodedResult?.result?.format);
          
          console.log(`Scanned ${codeType}: ${decodedText}`);
          
          // Show success toast with detected format
          toast({
            title: `${detectedFormat} Detected!`,
            description: `Found: ${decodedText.substring(0, 20)}${decodedText.length > 20 ? '...' : ''}`,
          });
          
          // QR code/barcode successfully scanned
          onScanSuccess(decodedText);
          stopQrScanner();
          onOpenChange(false);
        },
        (errorMessage) => {
          // Ignore error messages during normal scanning
        }
      );
      
      setScannerInitialized(true);
      
      toast({
        title: "Scanner Ready",
        description: "Point your camera at QR codes, barcodes, VINs, or serial numbers",
      });
      
    } catch (err) {
      console.error("Scanner error:", err);
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
        setDetectedFormat('');
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
          <DialogTitle className="text-center">Universal Scanner</DialogTitle>
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Scan QR codes, barcodes, VINs, IMEIs, and serial numbers</p>
            {detectedFormat && (
              <Badge variant="secondary" className="bg-sos-orange text-white">
                {detectedFormat}
              </Badge>
            )}
          </div>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center">
          <div 
            id="qr-scanner" 
            ref={qrScannerRef} 
            className="w-full h-[350px] bg-gray-100 rounded-lg overflow-hidden border-2 border-sos-orange/30" 
          />
          <div className="mt-3 text-center space-y-2">
            <p className="text-sm text-muted-foreground">Point camera at:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="text-xs">QR Codes</Badge>
              <Badge variant="outline" className="text-xs">Barcodes</Badge>
              <Badge variant="outline" className="text-xs">VIN Numbers</Badge>
              <Badge variant="outline" className="text-xs">Serial Numbers</Badge>
              <Badge variant="outline" className="text-xs">IMEI Numbers</Badge>
            </div>
          </div>
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
