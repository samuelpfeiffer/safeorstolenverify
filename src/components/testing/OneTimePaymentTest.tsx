import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { Badge } from '@/components/ui/badge';
import { formatPrice, SUBSCRIPTION_TIERS } from '@/features/pricing';
import { ShieldCheck, Receipt } from 'lucide-react';

const OneTimePaymentTest: React.FC = () => {
  const { isAuthenticated } = useUnifiedAuth();
  const [serialNumber, setSerialNumber] = useState('');
  const [itemType, setItemType] = useState('phone');

  const handlePurchase = () => {
    if (!serialNumber.trim()) return;
    
    // CRITICAL FIX: Redirect to checkout page OUTSIDE iframe
    // This page will then create the Stripe session and redirect to Stripe
    const { escapeIframeAndNavigate } = require('@/utils/navigationUtils');
    
    const params = new URLSearchParams({
      priceId: 'price_1Rz83i2eGaMDLFHonAmu86lS', // $10 Report
      planName: 'Single Verification',
      isSubscription: 'false',
      serialNumber,
      itemType,
    });
    
    escapeIframeAndNavigate(`/checkout-redirect?${params.toString()}`);
  };

  const reportProduct = SUBSCRIPTION_TIERS.payPerUse; // Single payment option

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Receipt className="h-6 w-6 text-sos-orange" />
          <Badge variant="outline" className="bg-sos-orange/10 text-sos-orange border-sos-orange/20">
            ONE-TIME PURCHASE TEST
          </Badge>
        </div>
        <CardTitle className="text-xl">{reportProduct.name}</CardTitle>
        <CardDescription>
          <span className="text-2xl font-bold text-sos-orange">
            {formatPrice(reportProduct.price)}
          </span>
          <span className="text-muted-foreground ml-2">per report</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="serial-number">Serial Number *</Label>
          <Input
            id="serial-number"
            placeholder="Enter serial number to verify"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="item-type">Item Type</Label>
          <Select value={itemType} onValueChange={setItemType}>
            <SelectTrigger>
              <SelectValue placeholder="Select item type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="laptop">Laptop</SelectItem>
              <SelectItem value="bike">Bike</SelectItem>
              <SelectItem value="car">Car</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="general">General Item</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-green-600" />
            What you'll get:
          </h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {reportProduct.features?.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>

        {!isAuthenticated && (
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
            <p className="text-sm text-amber-800">
              You need to be signed in to purchase a report.
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button 
          onClick={handlePurchase}
          disabled={!isAuthenticated || !serialNumber.trim()}
          className="w-full"
          size="lg"
        >
          Purchase Report for {formatPrice(reportProduct.price)}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OneTimePaymentTest;