import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CityTheftLookupForm } from '@/components/city-verification/CityTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, TrendingUp, MapPin } from 'lucide-react';

export default function WashingtonDCVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { cityCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific('DC', data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="Washington DC Stolen Item Check - Verify VIN, IMEI & Serial Numbers"
        description="Free Washington DC stolen item verification. Check vehicles, phones, electronics. 4,500+ annual thefts. Protect yourself in DC metro area."
        keywords="Washington DC stolen item check, DC VIN check, DC IMEI check, stolen car Washington DC"
        canonical="/washington-dc-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Washington DC Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, electronics before buying in Washington DC area
          </p>
        </div>

        <CityTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultCity="DCA"
          cityName="Washington DC"
        />
        
        {result && <StateTheftResults result={result} stateCode="DC" stateName="District of Columbia" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <TrendingUp className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">4,500+ Annual Thefts</h3>
            <p className="text-muted-foreground">Washington DC area theft statistics</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Real-Time Verification</h3>
            <p className="text-muted-foreground">Instant checks against District of Columbia databases</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Washington DC Coverage</h3>
            <p className="text-muted-foreground">Metro area and surrounding communities</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">Washington DC Theft Protection</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Why Verify in Washington DC</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 4,500+ items stolen annually</li>
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
