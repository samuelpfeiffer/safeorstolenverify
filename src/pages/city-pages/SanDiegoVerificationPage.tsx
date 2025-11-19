import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CityTheftLookupForm } from '@/components/city-verification/CityTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, TrendingUp, MapPin } from 'lucide-react';

export default function SanDiegoVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { cityCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific('CA', data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="San Diego Stolen Item Check - Verify VIN, IMEI & Serial Numbers CA"
        description="Free San Diego stolen item verification. Check vehicles, phones, electronics. 9,000+ annual thefts. Protect yourself in San Diego metro area."
        keywords="San Diego stolen item check, San Diego VIN check, San Diego IMEI check, stolen car San Diego"
        canonical="/san-diego-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            San Diego Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, and electronics before buying in San Diego area
          </p>
        </div>

        <CityTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultCity="SAN"
          cityName="San Diego"
        />
        
        {result && <StateTheftResults result={result} stateCode="CA" stateName="California" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <TrendingUp className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">9,000+ Annual Thefts</h3>
            <p className="text-muted-foreground">San Diego area theft statistics</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Real-Time Verification</h3>
            <p className="text-muted-foreground">Instant checks against California databases</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">San Diego Coverage</h3>
            <p className="text-muted-foreground">Metro area and surrounding communities</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">San Diego Theft Protection</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Why Verify in San Diego</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 9,000+ items stolen annually</li>
                <li>• Protect yourself from financial loss</li>
                <li>• Avoid legal complications</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Safety Tips</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Always verify VIN before buying vehicles</li>
                <li>• Check IMEI on all used phones</li>
                <li>• Meet sellers in public police parking lots</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
