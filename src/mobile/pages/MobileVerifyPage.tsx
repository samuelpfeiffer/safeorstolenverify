import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Search, History } from 'lucide-react';
import { CameraScanner } from '../components/CameraScanner';
import { useAdvancedVerification } from '@/verification/hooks/useAdvancedVerification';
import { useNavigate } from 'react-router-dom';
import { useHapticFeedback } from '../hooks/useHapticFeedback';
import { useSmartDetection } from '@/hooks/useSmartDetection';
import { mapDetectedTypeToItemType } from '@/lib/aiDetection';
import { SmartDetectionIndicator } from '@/components/verification/SmartDetectionIndicator';

const MobileVerifyPage: React.FC = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const [manualOverrideType, setManualOverrideType] = useState('');
  const [showManualSelect, setShowManualSelect] = useState(false);
  const { verifyItem, isLoading } = useAdvancedVerification();
  const navigate = useNavigate();
  const haptics = useHapticFeedback();
  const { detection, isDetecting, detectionError, detect } = useSmartDetection(500);

  const effectiveType = manualOverrideType || (detection ? mapDetectedTypeToItemType(detection.type) : undefined);

  const handleInputChange = (value: string) => {
    setSerialNumber(value);
    setManualOverrideType('');
    setShowManualSelect(false);
    detect(value);
  };

  const handleScan = (result: string) => {
    setSerialNumber(result);
    detect(result);
    setShowScanner(false);
    haptics.notification('success');
  };

  const handleVerify = async () => {
    if (!serialNumber.trim()) return;

    haptics.impact('medium');
    const result = await verifyItem(serialNumber, effectiveType || undefined);
    
    if (result) {
      if (result.risk_level === 'critical' || result.risk_level === 'high') {
        haptics.notification('error');
      } else {
        haptics.notification('success');
      }
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
        title="Mobile Verify - Quick Item Verification"
        description="Verify items instantly on your mobile device"
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
              {/* Serial Number Input */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Serial / IMEI / VIN Number
                </label>
                <Input
                  placeholder="Paste IMEI, VIN, Plate, or Serial Number..."
                  value={serialNumber}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="text-lg h-14"
                />
                <SmartDetectionIndicator
                  isDetecting={isDetecting}
                  detection={detection}
                  detectionError={detectionError}
                  showManualSelect={showManualSelect}
                  onToggleManual={() => setShowManualSelect(!showManualSelect)}
                  manualType={manualOverrideType}
                  onManualTypeChange={(t) => { setManualOverrideType(t); setShowManualSelect(false); }}
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
