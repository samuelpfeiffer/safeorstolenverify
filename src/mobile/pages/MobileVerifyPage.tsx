import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Search, History, Smartphone, Car, Package } from 'lucide-react';
import { CameraScanner } from '../components/CameraScanner';
import { useAdvancedVerification } from '@/verification/hooks/useAdvancedVerification';
import { useNavigate } from 'react-router-dom';
import { useHapticFeedback } from '../hooks/useHapticFeedback';

const MobileVerifyPage: React.FC = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('');
  const { verifyItem, isLoading } = useAdvancedVerification();
  const navigate = useNavigate();
  const haptics = useHapticFeedback();

  const itemTypes = [
    { id: 'phone', label: 'Phone', icon: Smartphone },
    { id: 'vehicle', label: 'Vehicle', icon: Car },
    { id: 'electronics', label: 'Electronics', icon: Package }
  ];

  const handleScan = (result: string) => {
    setSerialNumber(result);
    setShowScanner(false);
    haptics.notification('success');
  };

  const handleVerify = async () => {
    if (!serialNumber.trim()) return;

    haptics.impact('medium');
    const result = await verifyItem(serialNumber, selectedType || undefined);
    
    if (result) {
      if (result.risk_level === 'critical' || result.risk_level === 'high') {
        haptics.notification('error');
      } else {
        haptics.notification('success');
      }
      
      // Navigate to results
      navigate('/mobile-dashboard');
    }
  };

  if (showScanner) {
    return (
      <CameraScanner
        onScan={handleScan}
        onClose={() => setShowScanner(false)}
      />
    );
  }

  return (
    <>
      <PageSEO
        title="Mobile Verify - Quick IMEI, VIN & Serial Scan | SafeOrStolen"
        description="Verify items instantly on your mobile device. Scan barcodes, check IMEI, VIN, and serial numbers against 100+ stolen databases in 3 seconds."
        canonical="/mobile-verify"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted pb-20">
        <div className="container mx-auto px-4 py-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Verify Item</h1>
            <p className="text-muted-foreground">
              Scan or enter serial number to check
            </p>
          </div>

          {/* Quick Scan Button */}
          <Card className="mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <Button
                size="lg"
                onClick={() => setShowScanner(true)}
                className="w-full h-20 text-lg"
              >
                <Camera className="mr-3 h-6 w-6" />
                Scan with Camera
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-3">
                Point at QR code, barcode, or serial number
              </p>
            </CardContent>
          </Card>

          {/* Manual Entry */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Or Enter Manually</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Item Type Selection */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Item Type (Optional)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {itemTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <Button
                        key={type.id}
                        variant={selectedType === type.id ? 'default' : 'outline'}
                        onClick={() => setSelectedType(type.id)}
                        className="h-20 flex-col gap-2"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-xs">{type.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Serial Number Input */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Serial / IMEI / VIN Number
                </label>
                <Input
                  placeholder="Enter number..."
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                  className="text-lg h-14"
                />
              </div>

              {/* Verify Button */}
              <Button
                size="lg"
                onClick={handleVerify}
                disabled={!serialNumber.trim() || isLoading}
                className="w-full h-14"
              >
                <Search className="mr-2 h-5 w-5" />
                {isLoading ? 'Verifying...' : 'Verify Now'}
              </Button>
            </CardContent>
          </Card>

          {/* Recent Checks */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Recent Checks</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/mobile-dashboard')}
                >
                  <History className="h-4 w-4 mr-1" />
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center py-4">
                Your recent verifications will appear here
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MobileVerifyPage;
