import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { StateTheftLookupForm } from '@/components/state-verification/StateTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, Database, MapPin } from 'lucide-react';

export default function NewYorkVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { stateCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific(data.stateCode, data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="New York Stolen Item Check - Verify VIN, IMEI, Serial Numbers & License Plates"
        description="Free New York stolen item verification. Check vehicles, phones, electronics instantly. 15,000+ vehicle thefts annually. Protect yourself in NYC, Buffalo, Rochester."
        keywords="New York stolen item check, NY VIN check, NY IMEI check, NYC stolen car, Manhattan phone theft"
        canonical="/new-york-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            New York Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, electronics, and license plates before you buy in New York
          </p>
        </div>

        <StateTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultState="NY"
        />
        
        {result && <StateTheftResults result={result} stateCode="NY" stateName="New York" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <Database className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">NY DMV Database</h3>
            <p className="text-muted-foreground">Direct integration with New York Department of Motor Vehicles</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Real-Time Theft Checks</h3>
            <p className="text-muted-foreground">Instant verification against stolen property databases</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">New York Local Data</h3>
            <p className="text-muted-foreground">NYC, Buffalo, Rochester theft statistics and hotspots</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">New York Theft Statistics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Vehicle Theft</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 15,000+ vehicle thefts reported annually</li>
                <li>• NYC boroughs see majority of incidents</li>
                <li>• Catalytic converter theft epidemic</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Property Crime</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Electronics theft common in tourist areas</li>
                <li>• Organized retail crime in Manhattan, Brooklyn</li>
                <li>• Verify all items from online marketplaces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
