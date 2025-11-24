import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { StateTheftLookupForm } from '@/components/state-verification/StateTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, Database, MapPin } from 'lucide-react';
import { createStatePageSchema } from '@/utils/seo/statePageSchema';

export default function AlaskaVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();
  const structuredData = createStatePageSchema('Alaska', 'AK');

  const handleSubmit = async (data: { stateCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific(data.stateCode, data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="Alaska Stolen Item Check - Verify VIN, IMEI, Serial Numbers & License Plates"
        description="Free Alaska stolen item verification. Check vehicles, phones, electronics instantly. 1,200 vehicle thefts annually. Protect yourself in Anchorage, Fairbanks."
        keywords="Alaska stolen item check, Alaska VIN check, Alaska IMEI check, Anchorage stolen car, Alaska phone theft"
        canonical="/alaska-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Alaska Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, electronics, and license plates before you buy in Alaska
          </p>
        </div>

        <StateTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultState="AK"
        />
        
        {result && <StateTheftResults result={result} stateCode="AK" stateName="Alaska" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <Database className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">NICB VINCheck Access</h3>
            <p className="text-muted-foreground">Instant access to national theft databases</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">1,200 Annual Vehicle Thefts</h3>
            <p className="text-muted-foreground">Protect yourself from Alaska's theft statistics</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Top Cities Covered</h3>
            <p className="text-muted-foreground">Anchorage, Fairbanks</p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">About Alaska Theft Statistics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Vehicle Theft Rate</h3>
              <p className="text-muted-foreground">3,180 thefts per 100,000 residents - verify before purchasing any used vehicle</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What We Verify</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• VIN numbers (vehicles, motorcycles, boats)</li>
                <li>• License plates</li>
                <li>• IMEI numbers (phones, tablets)</li>
                <li>• Serial numbers (electronics, tools)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
