import React, { useState, useRef } from 'react';
import { Camera, Upload, Loader2, CheckCircle2, AlertTriangle, X, Scan } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

interface ExtractedIdentifier {
  type: string;
  rawText: string;
  extractedValue: string;
  confidence: number;
  location: string;
}

interface OCRResult {
  found: boolean;
  identifiers: ExtractedIdentifier[];
  deviceInfo?: string;
  tip?: string;
}

interface VisualOCRVerificationProps {
  onIdentifierExtracted?: (value: string, type: string) => void;
}

export const VisualOCRVerification: React.FC<VisualOCRVerificationProps> = ({ onIdentifierExtracted }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<OCRResult | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const processImage = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({ title: 'Invalid file', description: 'Please upload an image.', variant: 'destructive' });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast({ title: 'File too large', description: 'Maximum 10MB.', variant: 'destructive' });
      return;
    }

    setIsProcessing(true);
    setResult(null);
    setPreviewUrl(URL.createObjectURL(file));

    try {
      const base64 = await fileToBase64(file);

      const { data, error } = await supabase.functions.invoke('ai-visual-ocr', {
        body: { imageBase64: base64 }
      });

      if (error) throw error;

      setResult(data);

      if (data.found && data.identifiers?.length > 0) {
        const best = data.identifiers.reduce((a: ExtractedIdentifier, b: ExtractedIdentifier) =>
          b.confidence > a.confidence ? b : a
        );
        toast({
          title: `✓ Found: ${getTypeLabel(best.type)}`,
          description: `Extracted: ${best.extractedValue} (${best.confidence}% confident)`,
        });
      } else {
        toast({
          title: 'No identifiers found',
          description: data.tip || 'Try a clearer photo of the serial number or IMEI.',
          variant: 'destructive',
        });
      }
    } catch (err) {
      console.error('OCR error:', err);
      toast({ title: 'Scan failed', description: 'Could not process image. Try again.', variant: 'destructive' });
    } finally {
      setIsProcessing(false);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result?.toString().split(',')[1];
        if (result) resolve(result);
        else reject(new Error('Failed to read file'));
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      imei: 'IMEI (Phone)',
      vin: 'VIN (Vehicle)',
      plate: 'License Plate',
      serial: 'Serial Number',
      firearm: 'Firearm Serial',
      bike: 'Bicycle Serial',
    };
    return labels[type] || type.toUpperCase();
  };

  const handleUseIdentifier = (id: ExtractedIdentifier) => {
    onIdentifierExtracted?.(id.extractedValue, id.type);
    toast({ title: 'Identifier loaded', description: `${id.extractedValue} ready to verify` });
  };

  const reset = () => {
    setResult(null);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  return (
    <Card className="border-dashed border-2 border-primary/20 bg-muted/30">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Scan className="w-5 h-5 text-primary" />
          📷 Visual Verification — Scan to Verify
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          Upload or take a photo of a VIN plate, IMEI sticker, serial number, or phone settings screen. AI extracts the identifier instantly.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Upload buttons */}
        {!isProcessing && !result && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Photo
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => cameraInputRef.current?.click()}
            >
              <Camera className="w-4 h-4 mr-2" />
              Take Photo
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && processImage(e.target.files[0])}
            />
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && processImage(e.target.files[0])}
            />
          </div>
        )}

        {/* Processing state */}
        <AnimatePresence>
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center py-8 gap-3"
            >
              {previewUrl && (
                <img src={previewUrl} alt="Scanning" className="w-32 h-32 object-cover rounded-lg opacity-70" />
              )}
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin text-primary" />
                <span className="text-sm font-medium">🤖 AI is scanning your image...</span>
              </div>
              <p className="text-xs text-muted-foreground">Extracting identifiers with AI Vision</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              {/* Preview + close */}
              <div className="flex justify-between items-start">
                {previewUrl && (
                  <img src={previewUrl} alt="Scanned" className="w-20 h-20 object-cover rounded-lg" />
                )}
                <Button variant="ghost" size="sm" onClick={reset}>
                  <X className="w-4 h-4" /> New Scan
                </Button>
              </div>

              {result.found && result.identifiers.length > 0 ? (
                <div className="space-y-2">
                  {result.identifiers.map((id, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-background border border-border"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-semibold">{getTypeLabel(id.type)}</span>
                          <Badge variant={id.confidence >= 90 ? 'default' : 'secondary'} className="text-[10px] px-1.5">
                            {id.confidence}%
                          </Badge>
                        </div>
                        <p className="text-sm font-mono text-foreground ml-6">{id.extractedValue}</p>
                        {id.location && (
                          <p className="text-xs text-muted-foreground ml-6 mt-0.5">{id.location}</p>
                        )}
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleUseIdentifier(id)}
                        className="ml-2 flex-shrink-0"
                      >
                        Verify This
                      </Button>
                    </motion.div>
                  ))}
                  {result.deviceInfo && (
                    <p className="text-xs text-muted-foreground ml-1">
                      📱 Device: {result.deviceInfo}
                    </p>
                  )}
                </div>
              ) : (
                <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                  <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-destructive">No identifiers found</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {result.tip || 'Try a clearer photo with the serial number or IMEI visible.'}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tips */}
        {!isProcessing && !result && (
          <div className="text-xs text-muted-foreground space-y-1">
            <p className="font-medium">📸 Best photos for scanning:</p>
            <ul className="list-disc list-inside space-y-0.5 ml-1">
              <li>VIN plate on car dashboard (through windshield)</li>
              <li>IMEI in phone Settings → About Phone</li>
              <li>Serial number sticker on back/bottom of device</li>
              <li>Bike serial stamped under the bottom bracket</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
