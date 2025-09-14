import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Smartphone, 
  Car, 
  Laptop, 
  Upload,
  QrCode,
  Shield,
  Camera
} from 'lucide-react';
import SecurityBadgeStrip from '@/components/security/SecurityBadgeStrip';
import TrustBadges from '@/components/security/TrustBadges';

interface VerificationFormProps {
  onSubmit: (data: { serialNumber: string; itemType: string }) => void;
  isLoading?: boolean;
}

const VerificationForm: React.FC<VerificationFormProps> = ({ onSubmit, isLoading = false }) => {
  const [activeTab, setActiveTab] = useState('manual');
  const [formData, setFormData] = useState({
    serialNumber: '',
    itemType: 'smartphone'
  });

  const itemTypes = [
    { value: 'smartphone', label: 'Smartphone/Tablet', icon: Smartphone },
    { value: 'vehicle', label: 'Vehicle (VIN)', icon: Car },
    { value: 'laptop', label: 'Laptop/Computer', icon: Laptop },
    { value: 'other', label: 'Other Electronics', icon: Search }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.serialNumber.trim()) {
      onSubmit(formData);
    }
  };

  const handleScan = () => {
    // Placeholder for QR/barcode scanning functionality
    console.log('Opening camera for scanning...');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('Processing uploaded image...', file.name);
      // Placeholder for OCR functionality
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Verify Item Legitimacy
          </CardTitle>
          <p className="text-muted-foreground">
            Check if an item is reported stolen, lost, or safe to purchase
          </p>
          <Badge variant="outline" className="mx-auto bg-green-50 text-green-700 border-green-200">
            Instant Results • 25+ Official Databases
          </Badge>
        </CardHeader>

        <CardContent className="space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="manual" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Type Number
              </TabsTrigger>
              <TabsTrigger value="scan" className="flex items-center gap-2">
                <QrCode className="h-4 w-4" />
                Scan Code
              </TabsTrigger>
              <TabsTrigger value="upload" className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Upload Image
              </TabsTrigger>
            </TabsList>

            <TabsContent value="manual" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="itemType" className="text-base font-medium">
                    What type of item are you checking?
                  </Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {itemTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <Button
                          key={type.value}
                          type="button"
                          variant={formData.itemType === type.value ? "default" : "outline"}
                          className="justify-start h-auto p-3"
                          onClick={() => setFormData(prev => ({ ...prev, itemType: type.value }))}
                        >
                          <Icon className="h-4 w-4 mr-2" />
                          <span className="text-sm">{type.label}</span>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <Label htmlFor="serialNumber" className="text-base font-medium">
                    {formData.itemType === 'vehicle' ? 'VIN Number' : 
                     formData.itemType === 'smartphone' ? 'IMEI Number' : 
                     'Serial Number'}
                  </Label>
                  <Input
                    id="serialNumber"
                    type="text"
                    placeholder={
                      formData.itemType === 'vehicle' ? 'Enter 17-digit VIN (e.g., 1HGBH41JXMN109186)' :
                      formData.itemType === 'smartphone' ? 'Enter 15-digit IMEI (e.g., 123456789012345)' :
                      'Enter serial number'
                    }
                    value={formData.serialNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, serialNumber: e.target.value }))}
                    className="text-lg h-12 font-mono"
                    disabled={isLoading}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.itemType === 'smartphone' && 'Find IMEI by dialing *#06# or in Settings > About'}
                    {formData.itemType === 'vehicle' && 'VIN is located on dashboard, door frame, or registration'}
                    {formData.itemType !== 'smartphone' && formData.itemType !== 'vehicle' && 'Usually found on a label or etched on the device'}
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-semibold"
                  disabled={!formData.serialNumber.trim() || isLoading}
                >
                  {isLoading ? (
                    <>Checking Databases...</>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Verify Now - Free
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="scan" className="space-y-4 text-center">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                <QrCode className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Scan QR Code or Barcode</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Use your device camera to scan product codes, serial numbers, or QR codes
                </p>
                <Button onClick={handleScan} className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  Open Camera Scanner
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="upload" className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Upload Image</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take or upload a clear photo of the serial number, IMEI, or VIN
                </p>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <Button asChild className="cursor-pointer">
                    <label htmlFor="image-upload" className="flex items-center gap-2">
                      <Camera className="h-4 w-4" />
                      Choose Image
                    </label>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Security Assurance */}
          <div className="pt-4 border-t">
            <SecurityBadgeStrip placement="form" />
            <p className="text-center text-xs text-muted-foreground mt-2">
              All searches are encrypted and private. We never store your personal information or search history.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Trust Badges */}
      <TrustBadges variant="compact" placement="form" showLabels={false} />
    </div>
  );
};

export default VerificationForm;