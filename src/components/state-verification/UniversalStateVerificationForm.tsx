import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Car, Smartphone, Package, Search, MapPin, CheckCircle2 } from 'lucide-react';
import { US_STATES } from '@/data/stateVerificationData';
import { toast } from 'sonner';

interface UniversalStateVerificationFormProps {
  stateCode?: string;
  itemType?: 'vehicle' | 'phone' | 'serial' | 'plate';
  showStateSelector?: boolean;
}

export const UniversalStateVerificationForm: React.FC<UniversalStateVerificationFormProps> = ({
  stateCode: defaultStateCode,
  itemType: defaultItemType,
  showStateSelector = true
}) => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState(defaultStateCode || '');
  const [activeTab, setActiveTab] = useState(defaultItemType || 'vehicle');
  const [identifier, setIdentifier] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getPlaceholder = () => {
    switch (activeTab) {
      case 'vehicle': return 'Enter 17-character VIN (e.g., 1HGBH41JXMN109186)';
      case 'phone': return 'Enter 15-digit IMEI (e.g., 353456789012345)';
      case 'serial': return 'Enter serial number';
      case 'plate': return 'Enter license plate (e.g., ABC1234)';
      default: return 'Enter identifier';
    }
  };

  const getMinLength = () => {
    switch (activeTab) {
      case 'vehicle': return 17;
      case 'phone': return 15;
      case 'plate': return 2;
      default: return 1;
    }
  };

  const validateInput = (): boolean => {
    if (!identifier.trim()) {
      toast.error('Please enter an identifier to verify');
      return false;
    }

    if (activeTab === 'vehicle' && identifier.length !== 17) {
      toast.error('VIN must be exactly 17 characters');
      return false;
    }

    if (activeTab === 'phone' && identifier.length !== 15) {
      toast.error('IMEI must be exactly 15 digits');
      return false;
    }

    if (activeTab === 'plate' && identifier.length < 2) {
      toast.error('License plate must be at least 2 characters');
      return false;
    }

    return true;
  };

  const handleVerify = async () => {
    if (!validateInput()) return;

    setIsLoading(true);
    
    // Build search query with state context
    const stateInfo = selectedState ? US_STATES.find(s => s.code === selectedState) : null;
    const searchQuery = stateInfo 
      ? `${identifier} ${stateInfo.name}` 
      : identifier;
    
    // Navigate to verify page with the search query
    navigate(`/verify?q=${encodeURIComponent(searchQuery)}&type=${activeTab}${selectedState ? `&state=${selectedState}` : ''}`);
    
    toast.success(`Searching ${activeTab} verification databases...`);
  };

  const selectedStateName = selectedState 
    ? US_STATES.find(s => s.code === selectedState)?.name 
    : null;

  return (
    <Card className="p-6 bg-card border-border shadow-lg">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-primary/10">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Universal Item Verification</h3>
            <p className="text-sm text-muted-foreground">
              Check vehicles, phones, electronics, and more across all 50 states
            </p>
          </div>
        </div>

        {/* State Selector */}
        {showStateSelector && (
          <div className="space-y-2">
            <Label htmlFor="state-select" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              Select State (Optional)
            </Label>
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger id="state-select" className="bg-background">
                <SelectValue placeholder="All States - Nationwide Search" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border max-h-[300px]">
                <SelectItem value="">All States - Nationwide Search</SelectItem>
                {US_STATES.map(state => (
                  <SelectItem key={state.code} value={state.code}>
                    {state.name} ({state.code})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedStateName && (
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-500" />
                Searching {selectedStateName} DMV + National databases
              </p>
            )}
          </div>
        )}

        {/* Item Type Tabs */}
        <Tabs value={activeTab} onValueChange={(v) => {
          setActiveTab(v as any);
          setIdentifier('');
        }}>
          <TabsList className="grid grid-cols-4 w-full bg-muted/50">
            <TabsTrigger value="vehicle" className="gap-1 text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Car className="h-4 w-4" />
              <span className="hidden sm:inline">Vehicle</span>
              <span className="sm:hidden">VIN</span>
            </TabsTrigger>
            <TabsTrigger value="phone" className="gap-1 text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Smartphone className="h-4 w-4" />
              <span className="hidden sm:inline">Phone</span>
              <span className="sm:hidden">IMEI</span>
            </TabsTrigger>
            <TabsTrigger value="serial" className="gap-1 text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Package className="h-4 w-4" />
              <span>Serial</span>
            </TabsTrigger>
            <TabsTrigger value="plate" className="gap-1 text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Search className="h-4 w-4" />
              <span>Plate</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vehicle" className="space-y-4 mt-4">
            <div>
              <Label htmlFor="vin" className="text-sm font-medium">VIN Number</Label>
              <Input
                id="vin"
                placeholder={getPlaceholder()}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, ''))}
                maxLength={17}
                className="mt-1.5 font-mono bg-background"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Find VIN on dashboard (driver's side) or driver door jamb
              </p>
            </div>
          </TabsContent>

          <TabsContent value="phone" className="space-y-4 mt-4">
            <div>
              <Label htmlFor="imei" className="text-sm font-medium">IMEI Number</Label>
              <Input
                id="imei"
                placeholder={getPlaceholder()}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value.replace(/\D/g, ''))}
                maxLength={15}
                className="mt-1.5 font-mono bg-background"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Dial *#06# on any phone to display IMEI
              </p>
            </div>
          </TabsContent>

          <TabsContent value="serial" className="space-y-4 mt-4">
            <div>
              <Label htmlFor="serial" className="text-sm font-medium">Serial Number</Label>
              <Input
                id="serial"
                placeholder={getPlaceholder()}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="mt-1.5 font-mono bg-background"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Check manufacturer sticker, box, or device settings
              </p>
            </div>
          </TabsContent>

          <TabsContent value="plate" className="space-y-4 mt-4">
            <div>
              <Label htmlFor="plate" className="text-sm font-medium">License Plate</Label>
              <Input
                id="plate"
                placeholder={getPlaceholder()}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
                maxLength={8}
                className="mt-1.5 font-mono bg-background"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {selectedStateName ? `Searching ${selectedStateName} plate database` : 'Select a state for state-specific plate search'}
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Verify Button */}
        <Button 
          onClick={handleVerify} 
          className="w-full" 
          size="lg"
          disabled={isLoading || !identifier.trim()}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
              Searching Databases...
            </>
          ) : (
            <>
              <Shield className="mr-2 h-5 w-5" />
              Verify Now - Free
            </>
          )}
        </Button>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-green-500" />
            NICB Database
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-green-500" />
            DMV Records
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-green-500" />
            Law Enforcement
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-green-500" />
            Insurance Claims
          </span>
        </div>
      </div>
    </Card>
  );
};
