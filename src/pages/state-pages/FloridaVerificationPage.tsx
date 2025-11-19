import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { StateTheftLookupForm } from '@/components/state-verification/StateTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, Database, MapPin } from 'lucide-react';

export default function FloridaVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { stateCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific(data.stateCode, data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="Florida Stolen Item Check - Verify VIN, IMEI, Serial Numbers & License Plates"
        description="Free Florida stolen item verification. Check vehicles, phones, electronics instantly. 42,000+ vehicle thefts annually. Protect yourself in Miami, Tampa, Orlando."
        keywords="Florida stolen item check, Florida VIN check, Florida IMEI check, Miami stolen car, Tampa phone theft"
        canonical="/florida-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Florida Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, electronics, and license plates before you buy in Florida
          </p>
        </div>

        <StateTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultState="FL"
        />
        
        {result && <StateTheftResults result={result} stateCode="FL" stateName="Florida" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <Database className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Florida DHSMV Database</h3>
            <p className="text-muted-foreground">Direct integration with Florida Highway Safety and Motor Vehicles</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Real-Time Theft Checks</h3>
            <p className="text-muted-foreground">Instant verification against stolen property databases</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Florida Local Data</h3>
            <p className="text-muted-foreground">Miami, Tampa, Orlando theft statistics and hotspots</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">Florida Theft Statistics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Vehicle Theft</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 42,000+ vehicle thefts reported annually</li>
                <li>• Miami-Dade County leads in auto theft</li>
                <li>• Tourist areas see higher property crime rates</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Property Crime</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Beach areas targeted for electronics theft</li>
                <li>• Online marketplace scams increasing</li>
                <li>• Hurricane season drives opportunistic theft</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
