import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Download, FileSpreadsheet, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';

interface BulkVerificationResult {
  identifier: string;
  status: 'safe' | 'stolen' | 'lost' | 'error';
  message: string;
  providers: string[];
}

export const BulkVerification = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<BulkVerificationResult[]>([]);
  const { user } = useAuth();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      toast.error('Please upload a CSV file');
      return;
    }

    setIsUploading(true);
    try {
      const text = await file.text();
      const lines = text.split('\n').filter(line => line.trim());
      
      // Skip header if present
      const identifiers = lines.slice(1).map(line => {
        const values = line.split(',');
        return values[0]?.trim(); // First column is identifier
      }).filter(Boolean);

      if (identifiers.length === 0) {
        toast.error('No valid identifiers found in CSV');
        return;
      }

      if (identifiers.length > 100) {
        toast.error('Maximum 100 items per bulk upload');
        return;
      }

      toast.success(`Found ${identifiers.length} items to verify`);
      await processBulkVerification(identifiers);
    } catch (error) {
      toast.error('Failed to process CSV file');
    } finally {
      setIsUploading(false);
    }
  };

  const processBulkVerification = async (identifiers: string[]) => {
    setIsProcessing(true);
    const results: BulkVerificationResult[] = [];

    try {
      // Process in batches of 10 to avoid rate limits
      for (let i = 0; i < identifiers.length; i += 10) {
        const batch = identifiers.slice(i, i + 10);
        
        const batchResults = await Promise.all(
          batch.map(async (identifier) => {
            try {
              const { data, error } = await supabase.functions.invoke('verify-item', {
                body: { identifier }
              });

              if (error) throw error;

              return {
                identifier,
                status: data.status,
                message: data.message,
                providers: data.providers || []
              };
            } catch (error) {
              return {
                identifier,
                status: 'error' as const,
                message: 'Verification failed',
                providers: []
              };
            }
          })
        );

        results.push(...batchResults);
        setResults([...results]);

        // Small delay between batches
        if (i + 10 < identifiers.length) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      toast.success('Bulk verification complete');
    } catch (error) {
      toast.error('Bulk verification failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadResults = () => {
    const csv = [
      ['Identifier', 'Status', 'Message', 'Databases Checked'].join(','),
      ...results.map(r => [
        r.identifier,
        r.status,
        `"${r.message}"`,
        r.providers.length
      ].join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `verification-results-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Bulk Verification</h3>
        </div>
        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
          Professional Feature
        </span>
      </div>

      <div className="space-y-4">
        {/* Upload Section */}
        <div className="border-2 border-dashed rounded-lg p-8 text-center">
          <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-sm font-medium mb-2">Upload CSV File</p>
          <p className="text-xs text-muted-foreground mb-4">
            Maximum 100 items per upload. First column should contain identifiers (VIN, IMEI, Serial).
          </p>
          <Button asChild disabled={isUploading || isProcessing}>
            <label className="cursor-pointer">
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Choose File
                </>
              )}
              <input
                type="file"
                accept=".csv"
                className="hidden"
                onChange={handleFileUpload}
                disabled={isUploading || isProcessing}
              />
            </label>
          </Button>
        </div>

        {/* Processing Status */}
        {isProcessing && (
          <div className="p-4 bg-primary/5 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm font-medium">Processing verifications...</span>
            </div>
            <div className="text-xs text-muted-foreground">
              {results.length} items verified
            </div>
          </div>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium">Results ({results.length})</h4>
              <Button onClick={downloadResults} size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
            
            <div className="max-h-64 overflow-y-auto space-y-2">
              {results.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded text-sm">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    {result.status === 'safe' ? (
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    ) : result.status === 'error' ? (
                      <XCircle className="h-4 w-4 text-gray-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                    )}
                    <span className="font-mono truncate">{result.identifier}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    result.status === 'safe' ? 'bg-green-500/10 text-green-600' :
                    result.status === 'error' ? 'bg-gray-500/10 text-gray-600' :
                    'bg-red-500/10 text-red-600'
                  }`}>
                    {result.status.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-4 p-4 bg-primary/5 rounded-lg text-sm">
          <p className="font-semibold mb-2">📋 CSV Format Example:</p>
          <pre className="bg-muted p-2 rounded text-xs overflow-x-auto">
{`Identifier,Type,Description
1HGBH41JXMN109186,Vehicle,2021 Honda Accord
356789012345678,Phone,iPhone 13 Pro
ABC12345XYZ,Bike,Mountain Bike`}
          </pre>
          <p className="text-xs text-muted-foreground mt-2">
            Only the first column (Identifier) is required. Other columns are optional and for your reference.
          </p>
        </div>
      </div>
    </Card>
  );
};
