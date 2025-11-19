import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Car, Smartphone, Package, Search } from 'lucide-react';
import { US_STATES } from '@/data/stateVerificationData';

interface UniversalStateVerificationFormProps {
  stateCode?: string;
  itemType?: 'vehicle' | 'phone' | 'serial' | 'plate';
}

export const UniversalStateVerificationForm: React.FC<UniversalStateVerificationFormProps> = ({
  stateCode: defaultStateCode,
  itemType: defaultItemType
}) => {
  const [selectedState, setSelectedState] = useState(defaultStateCode || '');
  const [activeTab, setActiveTab] = useState(defaultItemType || 'vehicle');
  const [identifier, setIdentifier] = useState('');

  const handleVerify = () => {
    console.log({ state: selectedState, type: activeTab, identifier });
  };

  return (
    <Card className="p-6 bg-card border-border">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary" />
          <div>
            <h3 className="text-xl font-semibold text-foreground">Universal Item Verification</h3>
            <p className="text-sm text-muted-foreground">Check vehicles, phones, electronics, and more</p>
          </div>
        </div>

        <div>
          <Label htmlFor="state-select">Select State</Label>
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger id="state-select">
              <SelectValue placeholder="Choose your state" />
            </SelectTrigger>
            <SelectContent>
              {US_STATES.map(state => (
                <SelectItem key={state.code} value={state.code}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="vehicle" className="gap-2">
              <Car className="h-4 w-4" />
              Vehicle
            </TabsTrigger>
            <TabsTrigger value="phone" className="gap-2">
              <Smartphone className="h-4 w-4" />
              Phone
            </TabsTrigger>
            <TabsTrigger value="serial" className="gap-2">
              <Package className="h-4 w-4" />
              Serial
            </TabsTrigger>
            <TabsTrigger value="plate" className="gap-2">
              <Search className="h-4 w-4" />
              Plate
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vehicle" className="space-y-4">
            <div>
              <Label htmlFor="vin">VIN Number</Label>
              <Input
                id="vin"
                placeholder="Enter 17-character VIN"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                maxLength={17}
              />
            </div>
          </TabsContent>

          <TabsContent value="phone" className="space-y-4">
            <div>
              <Label htmlFor="imei">IMEI Number</Label>
              <Input
                id="imei"
                placeholder="Enter 15-digit IMEI"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                maxLength={15}
              />
            </div>
          </TabsContent>

          <TabsContent value="serial" className="space-y-4">
            <div>
              <Label htmlFor="serial">Serial Number</Label>
              <Input
                id="serial"
                placeholder="Enter serial number"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </div>
          </TabsContent>

          <TabsContent value="plate" className="space-y-4">
            <div>
              <Label htmlFor="plate">License Plate</Label>
              <Input
                id="plate"
                placeholder="Enter license plate"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value.toUpperCase())}
              />
            </div>
          </TabsContent>
        </Tabs>

        <Button onClick={handleVerify} className="w-full" size="lg">
          <Shield className="mr-2 h-5 w-5" />
          Verify Now
        </Button>
      </div>
    </Card>
  );
};
