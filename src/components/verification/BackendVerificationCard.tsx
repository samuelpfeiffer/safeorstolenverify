import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Search, CheckCircle, XCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useBackendVerification } from '@/hooks/useBackendVerification';
import { useAuth } from '@/lib/auth';

const itemTypes = [
  { value: 'mobile_phone', label: 'Mobile Phone' },
  { value: 'laptop', label: 'Laptop' },
  { value: 'tablet', label: 'Tablet' },
  { value: 'bicycle', label: 'Bicycle' },
  { value: 'motorcycle', label: 'Motorcycle' },
  { value: 'vehicle', label: 'Vehicle' },
  { value: 'watch', label: 'Watch' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'other', label: 'Other' },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'safe':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'stolen':
      return <XCircle className="h-5 w-5 text-red-500" />;
    default:
      return <AlertCircle className="h-5 w-5 text-yellow-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'safe':
      return 'text-green-700 bg-green-50 border-green-200';
    case 'stolen':
      return 'text-red-700 bg-red-50 border-red-200';
    default:
      return 'text-yellow-700 bg-yellow-50 border-yellow-200';
  }
};

export const BackendVerificationCard = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [itemType, setItemType] = useState('');
  const { verifyItem, verificationResults, isLoading } = useBackendVerification();
  const { user } = useAuth();

  const handleVerify = async () => {
    if (!serialNumber.trim() || !itemType) {
      return;
    }

    await verifyItem(serialNumber.trim(), itemType);
    setSerialNumber('');
    setItemType('');
  };

  if (!user) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Safe or Stolen Verification
          </CardTitle>
          <CardDescription>
            Sign in to verify if your items are safe or stolen
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center py-8">
          <p className="text-muted-foreground mb-4">
            Please sign in to use the verification service
          </p>
          <Button variant="outline">
            Sign In
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Safe or Stolen Verification
          </CardTitle>
          <CardDescription>
            Enter your item's serial number to check if it's been reported stolen
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="serial-number">Serial Number</Label>
              <Input
                id="serial-number"
                placeholder="Enter serial number..."
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="item-type">Item Type</Label>
              <Select value={itemType} onValueChange={setItemType} disabled={isLoading}>
                <SelectTrigger>
                  <SelectValue placeholder="Select item type" />
                </SelectTrigger>
                <SelectContent>
                  {itemTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button 
            onClick={handleVerify} 
            disabled={!serialNumber.trim() || !itemType || isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Verify Item
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {verificationResults.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Verifications</CardTitle>
            <CardDescription>
              Your recent verification results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {verificationResults.slice(0, 5).map((result) => (
                <div
                  key={result.id}
                  className={`p-4 rounded-lg border ${getStatusColor(result.status)}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      {getStatusIcon(result.status)}
                      <div>
                        <p className="font-medium">
                          {result.item_type} - {result.serial_number}
                        </p>
                        <p className="text-sm opacity-75">
                          Status: {result.status.toUpperCase()} • Confidence: {result.confidence}%
                        </p>
                        {result.message && (
                          <p className="text-sm mt-1">{result.message}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-xs opacity-60">
                      {new Date(result.verified_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};