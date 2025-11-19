import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { StateTheftLookupForm } from '@/components/state-verification/StateTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, Database, MapPin } from 'lucide-react';

export default function TexasVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { stateCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific(data.stateCode, data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="Texas Stolen Item Check - Verify VIN, IMEI, Serial Numbers & License Plates"
        description="Free Texas stolen item verification. Check vehicles, phones, electronics instantly. 80,000+ vehicle thefts annually. Protect yourself in Houston, Dallas, Austin, San Antonio."
        keywords="Texas stolen item check, Texas VIN check, Texas IMEI check, Houston stolen car, Dallas phone theft"
        canonical="/texas-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Texas Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, electronics, and license plates before you buy in Texas
          </p>
        </div>

        <StateTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultState="TX"
        />
        
        {result && <StateTheftResults result={result} stateCode="TX" stateName="Texas" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <Database className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Texas DMV Database</h3>
            <p className="text-muted-foreground">Direct integration with Texas Department of Motor Vehicles</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Real-Time Theft Checks</h3>
            <p className="text-muted-foreground">Instant verification against stolen property databases</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Texas Local Data</h3>
            <p className="text-muted-foreground">Houston, Dallas, Austin, San Antonio theft stats and hotspots</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">Texas Theft Statistics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Vehicle Theft</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 80,000+ vehicle thefts reported annually</li>
                <li>• Houston and Dallas in top 10 nationally</li>
                <li>• Pickup trucks most commonly targeted</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Property Crime</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Electronics theft surging in major metros</li>
                <li>• Border regions see unique challenges</li>
                <li>• Essential to verify items from online sellers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
