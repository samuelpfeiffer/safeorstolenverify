import { useState } from 'react';
import { Camera, Upload, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface IdentificationResult {
  itemType: string;
  brand?: string;
  model?: string;
  serialNumbers?: string[];
  condition?: string;
  features?: string[];
  confidence: string;
  analysis?: string;
}

interface PhotoItemIdentifierProps {
  onIdentified?: (result: IdentificationResult) => void;
}

export const PhotoItemIdentifier = ({ onIdentified }: PhotoItemIdentifierProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<IdentificationResult | null>(null);
  const { toast } = useToast();

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file",
        description: "Please upload an image file.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    setResult(null);

    try {
      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result?.toString().split(',')[1];
        
        const { data, error } = await supabase.functions.invoke('ai-item-identification', {
          body: { imageBase64: base64 }
        });

        if (error) throw error;

        setResult(data.identification);
        if (onIdentified) {
          onIdentified(data.identification);
        }

        toast({
          title: "Item identified!",
          description: `Detected: ${data.identification.itemType || 'Unknown item'}`,
        });
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Identification failed",
        description: "Could not identify the item. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Smart Item Identification</h3>
          <p className="text-sm text-muted-foreground">
            Upload a photo of the item to automatically identify it and extract details
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1"
            disabled={isProcessing}
            onClick={() => document.getElementById('photo-upload')?.click()}
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Photo
          </Button>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
          />
        </div>

        {isProcessing && (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin text-sos-orange" />
            <span className="ml-2 text-sm">Analyzing image...</span>
          </div>
        )}

        {result && (
          <div className="space-y-3">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-2">
                  <div><strong>Type:</strong> {result.itemType}</div>
                  {result.brand && <div><strong>Brand:</strong> {result.brand}</div>}
                  {result.model && <div><strong>Model:</strong> {result.model}</div>}
                  {result.serialNumbers && result.serialNumbers.length > 0 && (
                    <div>
                      <strong>Serial Numbers Found:</strong>
                      <ul className="list-disc list-inside ml-2">
                        {result.serialNumbers.map((sn, idx) => (
                          <li key={idx}>{sn}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {result.condition && <div><strong>Condition:</strong> {result.condition}</div>}
                  {result.features && result.features.length > 0 && (
                    <div>
                      <strong>Features:</strong> {result.features.join(', ')}
                    </div>
                  )}
                  {result.analysis && (
                    <div className="mt-2 pt-2 border-t">
                      <strong>Analysis:</strong>
                      <p className="text-sm mt-1">{result.analysis}</p>
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground mt-2">
                    Confidence: {result.confidence}
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>
    </Card>
  );
};
