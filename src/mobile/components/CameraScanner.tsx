import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, X, Flashlight, FlashlightOff, RotateCw } from 'lucide-react';
import { Html5Qrcode } from 'html5-qrcode';
import { useCameraPermission } from '../hooks/useCameraPermission';
import { useToast } from '@/hooks/use-toast';
import { capacitorBridge } from '../utils/capacitorBridge';

interface CameraScannerProps {
  onScan: (result: string) => void;
  onClose: () => void;
  scanType?: 'qr' | 'barcode' | 'all';
}

export const CameraScanner: React.FC<CameraScannerProps> = ({
  onScan,
  onClose,
  scanType = 'all'
}) => {
  const [isScanning, setIsScanning] = useState(false);
  const [hasFlash, setHasFlash] = useState(false);
  const [flashEnabled, setFlashEnabled] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const { hasPermission, requestPermission } = useCameraPermission();
  const { toast } = useToast();

  useEffect(() => {
    if (hasPermission) {
      startScanner();
    } else if (hasPermission === false) {
      requestPermission();
    }

    return () => {
      stopScanner();
    };
  }, [hasPermission]);

  const startScanner = async () => {
    try {
      const scanner = new Html5Qrcode('qr-reader');
      scannerRef.current = scanner;

      const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0
      };

      await scanner.start(
        { facingMode: 'environment' },
        config,
        (decodedText) => {
          handleScanSuccess(decodedText);
        },
        (errorMessage) => {
          // Scan error - ignore
        }
      );

      setIsScanning(true);

      // Check if flash is available
      const cameras = await Html5Qrcode.getCameras();
      setHasFlash(cameras.length > 0);
    } catch (error) {
      console.error('Scanner start error:', error);
      toast({
        title: 'Camera Error',
        description: 'Failed to start camera scanner',
        variant: 'destructive'
      });
    }
  };

  const stopScanner = async () => {
    if (scannerRef.current && isScanning) {
      try {
        await scannerRef.current.stop();
        setIsScanning(false);
      } catch (error) {
        console.error('Scanner stop error:', error);
      }
    }
  };

  const handleScanSuccess = (decodedText: string) => {
    stopScanner();
    onScan(decodedText);
    toast({
      title: '✅ Scanned Successfully',
      description: `Detected: ${decodedText}`,
    });
  };

  const toggleFlash = () => {
    // Note: HTML5 QR Code doesn't support flash control
    // This would work with native camera via Capacitor
    setFlashEnabled(!flashEnabled);
  };

  const handleClose = () => {
    stopScanner();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-white font-bold text-lg">Scan Code</h2>
            <p className="text-white/70 text-sm">Position code within frame</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Scanner View */}
      <div className="flex-1 flex items-center justify-center">
        <div id="qr-reader" className="w-full max-w-md"></div>
        
        {!isScanning && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Card className="max-w-sm mx-4">
              <CardContent className="p-6 text-center">
                <Camera className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {hasPermission === false
                    ? 'Camera permission is required to scan codes'
                    : 'Initializing camera...'}
                </p>
                {hasPermission === false && (
                  <Button
                    onClick={requestPermission}
                    className="mt-4"
                  >
                    Grant Permission
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Controls */}
      {isScanning && (
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex justify-center gap-4">
            {hasFlash && (
              <Button
                variant="secondary"
                size="icon"
                className="h-14 w-14 rounded-full"
                onClick={toggleFlash}
              >
                {flashEnabled ? (
                  <FlashlightOff className="h-6 w-6" />
                ) : (
                  <Flashlight className="h-6 w-6" />
                )}
              </Button>
            )}
            
            <Button
              variant="secondary"
              size="icon"
              className="h-14 w-14 rounded-full"
              onClick={() => {
                stopScanner();
                setTimeout(startScanner, 100);
              }}
            >
              <RotateCw className="h-6 w-6" />
            </Button>
          </div>
          
          <p className="text-center text-white/70 text-sm mt-4">
            Point your camera at a QR code or barcode
          </p>
        </div>
      )}
    </div>
  );
};
