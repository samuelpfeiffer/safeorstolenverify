import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Smartphone, AlertTriangle } from 'lucide-react';

/**
 * Free IMEI Validator Tool - Attracts backlinks and traffic
 * Validates IMEI format without requiring login
 */
export const FreeIMEIValidator = () => {
  const [imei, setImei] = useState('');
  const [result, setResult] = useState<{
    valid: boolean;
    message: string;
    details?: string[];
  } | null>(null);

  const validateIMEI = (imeiStr: string): boolean => {
    // Remove spaces and dashes
    const cleanIMEI = imeiStr.replace(/[\s-]/g, '');
    
    // IMEI must be 15 digits
    if (!/^\d{15}$/.test(cleanIMEI)) {
      return false;
    }

    // Luhn algorithm check
    let sum = 0;
    for (let i = 0; i < 15; i++) {
      let digit = parseInt(cleanIMEI[i], 10);
      if (i % 2 === 1) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
    }
    
    return sum % 10 === 0;
  };

  const getIMEIInfo = (imeiStr: string) => {
    const cleanIMEI = imeiStr.replace(/[\s-]/g, '');
    const tac = cleanIMEI.substring(0, 8);
    
    // Common TAC prefixes (simplified)
    const knownPrefixes: Record<string, string> = {
      '35': 'Mobile Phone',
      '86': 'Mobile Phone',
      '01': 'Mobile Phone',
      '99': 'Test Device',
    };

    const prefix = cleanIMEI.substring(0, 2);
    const deviceType = knownPrefixes[prefix] || 'Mobile Device';

    return {
      tac,
      deviceType,
      serialNumber: cleanIMEI.substring(8, 14),
      checkDigit: cleanIMEI.substring(14, 15),
    };
  };

  const handleValidate = () => {
    const cleanIMEI = imei.replace(/[\s-]/g, '');
    
    if (!cleanIMEI) {
      setResult({
        valid: false,
        message: 'Please enter an IMEI number',
      });
      return;
    }

    if (!/^\d+$/.test(cleanIMEI)) {
      setResult({
        valid: false,
        message: 'IMEI must contain only numbers',
      });
      return;
    }

    if (cleanIMEI.length !== 15) {
      setResult({
        valid: false,
        message: `IMEI must be 15 digits (you entered ${cleanIMEI.length})`,
      });
      return;
    }

    const isValid = validateIMEI(cleanIMEI);
    const info = getIMEIInfo(cleanIMEI);

    if (isValid) {
      setResult({
        valid: true,
        message: 'Valid IMEI format!',
        details: [
          `Device Type: ${info.deviceType}`,
          `TAC (Type Allocation Code): ${info.tac}`,
          `Serial Number: ${info.serialNumber}`,
          `Check Digit: ${info.checkDigit}`,
        ],
      });
    } else {
      setResult({
        valid: false,
        message: 'Invalid IMEI - checksum failed',
        details: [
          'This IMEI number does not pass the Luhn algorithm check.',
          'It may be mistyped or fake.',
        ],
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Smartphone className="h-6 w-6 text-primary" />
          <CardTitle>Free IMEI Format Validator</CardTitle>
        </div>
        <CardDescription>
          Check if an IMEI number has a valid format. This validates the structure only - 
          to check if the phone is stolen, use our full verification.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter 15-digit IMEI number..."
            value={imei}
            onChange={(e) => setImei(e.target.value)}
            maxLength={17}
            className="font-mono"
          />
          <Button onClick={handleValidate}>
            Validate
          </Button>
        </div>

        {result && (
          <div className={`p-4 rounded-lg ${result.valid ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
            <div className="flex items-center gap-2 mb-2">
              {result.valid ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <X className="h-5 w-5 text-red-500" />
              )}
              <span className={`font-semibold ${result.valid ? 'text-green-500' : 'text-red-500'}`}>
                {result.message}
              </span>
            </div>
            {result.details && (
              <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                {result.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium">Format validation only</p>
            <p className="text-muted-foreground">
              This tool checks if the IMEI structure is valid. To check if a phone is 
              <strong> stolen, lost, or blacklisted</strong>, use our{' '}
              <a href="/verify" className="text-primary underline">full verification service</a>.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
