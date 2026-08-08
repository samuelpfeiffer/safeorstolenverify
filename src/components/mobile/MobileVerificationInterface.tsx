import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Car, 
  Laptop, 
  Search, 
  Camera,
  Shield,
  ChevronRight
} from 'lucide-react';
import QrScanner from '@/components/hero/QrScanner';
import { useToast } from '@/hooks/use-toast';

/**
 * Mobile-Optimized Verification Interface
 * Supports all verification types: IMEI, VIN, Serial Numbers, Firearms
 * Exclusive to SafeOrStolen mobile app
 */
export const MobileVerificationInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState('phone');
  const [searchQuery, setSearchQuery] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();

  const verificationTypes = [
    {
      id: 'phone',
      label: 'Phone',
      icon: Smartphone,
      placeholder: 'Enter 15-digit IMEI number',
      example: '123456789012345',
      color: 'text-primary'
    },
    {
      id: 'vehicle',
      label: 'Vehicle',
      icon: Car,
      placeholder: 'Enter 17-character VIN',
      example: '1HGBH41JXMN109186',
      color: 'text-secondary'
    },
    {
      id: 'electronics',
      label: 'Electronics',
      icon: Laptop,
      placeholder: 'Enter serial number',
      example: 'SN123ABC456',
      color: 'text-accent'
    },
    {
      id: 'firearms',
      label: 'Firearms',
      icon: Shield,
      placeholder: 'Enter firearm serial number',
      example: 'FN12345',
      color: 'text-destructive'
    }
  ];

  const handleVerify = async () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Please enter a number",
        description: "Enter the serial number, IMEI, or VIN to verify",
        variant: "destructive"
      });
      return;
    }

    setIsVerifying(true);
    
    // In production, this would call the actual verification API
    setTimeout(() => {
      toast({
        title: "Verification Complete",
        description: "Item verification results ready",
      });
      setIsVerifying(false);
    }, 2000);
  };

  const handleScan = () => {
    setIsScanning(true);
  };

  const handleQrScan = (result: string) => {
    setSearchQuery(result);
    setIsScanning(false);
    toast({
      title: "Code Scanned",
      description: "Ready to verify item",
    });
  };

  const currentType = verificationTypes.find(t => t.id === activeTab);
  const CurrentIcon = currentType?.icon || Search;

  return (
    <div className="min-h-screen bg-background p-4 pb-safe">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Mobile Verification</CardTitle>
          </div>
          <Badge variant="secondary" className="mx-auto">
            EXCLUSIVE: Only on SafeOrStolen App
          </Badge>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Verification Type Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 w-full">
              {verificationTypes.map(type => (
                <TabsTrigger key={type.id} value={type.id} className="flex flex-col gap-1 py-2">
                  <type.icon className={`h-4 w-4 ${type.color}`} />
                  <span className="text-xs">{type.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {verificationTypes.map(type => (
              <TabsContent key={type.id} value={type.id} className="space-y-4 mt-6">
                {/* Search Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <type.icon className={`h-4 w-4 ${type.color}`} />
                    {type.label} Verification
                  </label>
                  
                  <div className="flex gap-2">
                    <Input
                      placeholder={type.placeholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleVerify()}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleVerify} 
                      disabled={isVerifying || !searchQuery.trim()}
                      size="icon"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    Example: {type.example}
                  </p>
                </div>

                {/* Special Notice for Firearms */}
                {type.id === 'firearms' && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Firearm Database Verification</p>
                        <p className="text-xs text-muted-foreground">
 We check the HotGunz national stolen-firearms registry and validate serial number integrity. 
                          Results include theft reports and law enforcement alerts.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Camera Scan Option */}
                <Button 
                  variant="outline" 
                  className="w-full gap-2" 
                  onClick={handleScan}
                >
                  <Camera className="h-4 w-4" />
                  Scan with Camera (QR/Barcode)
                </Button>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {type.id === 'phone' ? '50M+' : 
                       type.id === 'vehicle' ? '30M+' :
                       type.id === 'firearms' ? '5M+' : '20M+'}
                    </div>
                    <div className="text-xs text-muted-foreground">Database</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">&lt;3s</div>
                    <div className="text-xs text-muted-foreground">Verify</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">99%</div>
                    <div className="text-xs text-muted-foreground">Accurate</div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Mobile App Exclusive Features */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 space-y-3">
              <p className="text-sm font-semibold text-center">Mobile App Exclusive Features</p>
              <div className="space-y-2">
                {[
                  'Camera scanning for instant capture',
                  'Offline history access',
                  'Push notifications for alerts',
                  'Save unlimited verifications',
                  'Quick share to contacts'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* QR Scanner Modal */}
      {isScanning && (
        <QrScanner
          isOpen={isScanning}
          onOpenChange={setIsScanning}
          onScanSuccess={handleQrScan}
        />
      )}
    </div>
  );
};
