import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import QrScanner from '@/components/hero/QrScanner';
import { Search, ScanLine, CheckCircle, X, Receipt, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { useToast } from '@/hooks/use-toast';

interface VerificationSectionProps {
  prePopulatedData?: {
    serial: string;
    type: string;
    intent: string;
  } | null;
}

interface VerificationResult {
  status: 'safe' | 'stolen' | 'lost';
  item: {
    name: string;
    image: string;
    description: string;
    serialNumber: string;
  };
}

export const VerificationSection = ({ prePopulatedData }: VerificationSectionProps) => {
  const [searchQuery, setSearchQuery] = useState(prePopulatedData?.serial || '');
  const [isScanning, setIsScanning] = useState(false);
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showReceiptGenerator, setShowReceiptGenerator] = useState(false);
  const [isBusinessAccount] = useState(false); // This would come from user profile
  
  const { user } = useAuth();
  const { remainingSearches, hasReachedLimit, isSubscribed } = useSearchLimits();
  const { toast } = useToast();

  // Auto-populate and focus when pre-populated data is available
  useEffect(() => {
    if (prePopulatedData) {
      setSearchQuery(prePopulatedData.serial);
      // Show helpful message about the pre-populated data
      toast({
        title: `Ready to verify item ${prePopulatedData.intent === 'seller' ? 'for selling' : 'before buying'}`,
        description: `Serial: ${prePopulatedData.serial.substring(0, 10)}...`,
      });
    }
  }, [prePopulatedData, toast]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    if (hasReachedLimit && !isSubscribed) {
      toast({
        title: "Search Limit Reached",
        description: "Please upgrade to continue verifying items.",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      const isStolen = Math.random() < 0.2; // 20% chance of stolen/lost
      const result: VerificationResult = {
        status: isStolen ? (Math.random() < 0.5 ? 'stolen' : 'lost') : 'safe',
        item: {
          name: 'iPhone 14 Pro',
          image: '/placeholder.svg',
          description: 'Apple iPhone 14 Pro 128GB Space Black',
          serialNumber: searchQuery,
        },
      };
      
      setVerificationResult(result);
      setIsVerifying(false);
      
      if (result.status === 'safe') {
        setShowReceiptGenerator(true);
      }
    }, 2000);
  };

  const handleQrScan = (result: string) => {
    setSearchQuery(result);
    setIsScanning(false);
    handleSearch();
  };

  const generateReceipt = () => {
    toast({
      title: "Receipt Generated",
      description: "Verification receipt has been created and saved.",
    });
    setShowReceiptGenerator(false);
  };

  const resetVerification = () => {
    setVerificationResult(null);
    setSearchQuery('');
    setShowReceiptGenerator(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe':
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case 'stolen':
      case 'lost':
        return <X className="h-8 w-8 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'stolen':
      case 'lost':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  if (verificationResult) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Verification Result</CardTitle>
          <CardDescription>
            Here's what we found for serial number: {verificationResult.item.serialNumber}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="relative mx-auto w-48 h-48 mb-4">
              <img
                src={verificationResult.item.image}
                alt={verificationResult.item.name}
                className="w-full h-full object-cover rounded-lg border"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{verificationResult.item.name}</h3>
            <p className="text-muted-foreground mb-4">{verificationResult.item.description}</p>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              {getStatusIcon(verificationResult.status)}
              <Badge className={`text-lg px-4 py-2 ${getStatusColor(verificationResult.status)}`}>
                {verificationResult.status === 'safe' ? 'Safe' : 'Lost/Stolen'}
              </Badge>
            </div>
          </div>

          {verificationResult.status === 'safe' && showReceiptGenerator && (
            <Card className="border-green-200 bg-green-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Receipt className="h-5 w-5" />
                  Generate Receipt
                </CardTitle>
                <CardDescription>
                  Create a verification receipt for your records
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="Buyer Name" />
                  <Input placeholder="Purchase Price" />
                </div>
                <Input placeholder="Purchase Location" />
                <Input placeholder="Additional Notes" />
                
                {isBusinessAccount && (
                  <Card className="border-blue-200 bg-blue-50 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Business Account - ID Scanner</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Scan Customer ID
                    </Button>
                  </Card>
                )}
                
                <div className="flex gap-2">
                  <Button onClick={generateReceipt} className="flex-1">
                    Generate Receipt
                  </Button>
                  <Button variant="outline" onClick={() => setShowReceiptGenerator(false)}>
                    Skip
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-3">
            <Button onClick={resetVerification} variant="outline" className="flex-1">
              New Verification
            </Button>
            <Button asChild className="flex-1">
              <a href={`mailto:?subject=Verification Result&body=Item: ${verificationResult.item.name}%0AStatus: ${verificationResult.status}%0ASerial: ${verificationResult.item.serialNumber}`}>
                Email Result
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Verify Before You Buy</CardTitle>
        <CardDescription>
          Check if a second-hand item is safe to purchase
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter serial number, IMEI, or VIN"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1"
            />
            <Button onClick={handleSearch} disabled={isVerifying || !searchQuery.trim()}>
              {isVerifying ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
              ) : (
                <Search className="h-4 w-4" />
              )}
            </Button>
          </div>

          <div className="text-center">
            <span className="text-muted-foreground">or</span>
          </div>

          <Button
            variant="outline"
            onClick={() => setIsScanning(true)}
            className="w-full gap-2"
            disabled={isVerifying}
          >
            <ScanLine className="h-4 w-4" />
            Scan QR Code / Barcode
          </Button>
        </div>

        {!isSubscribed && (
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950">
            <CardContent className="pt-4">
              <div className="text-center space-y-2">
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  {remainingSearches} free searches remaining
                </p>
                {hasReachedLimit && (
                  <Button asChild size="sm">
                    <Link to="/subscription">Upgrade for Unlimited</Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {isScanning && (
          <QrScanner
            isOpen={isScanning}
            onOpenChange={setIsScanning}
            onScanSuccess={handleQrScan}
          />
        )}
      </CardContent>
    </Card>
  );
};