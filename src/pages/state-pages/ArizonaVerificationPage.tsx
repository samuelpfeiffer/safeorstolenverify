import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { StateTheftLookupForm } from '@/components/state-verification/StateTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, Database, MapPin } from 'lucide-react';

export default function ArizonaVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { stateCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific(data.stateCode, data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="Arizona Stolen Item Check - Verify VIN, IMEI, Serial Numbers & License Plates"
        description="Free Arizona stolen item verification. Check vehicles, phones, electronics instantly. 12,800 vehicle thefts annually. Protect yourself in Phoenix, Tucson, Mesa."
        keywords="Arizona stolen item check, Arizona VIN check, Arizona IMEI check, Phoenix stolen car, Tucson phone theft"
        canonical="/arizona-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Arizona Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, electronics, and license plates before you buy in Arizona
          </p>
        </div>

        <StateTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultState="AZ"
        />
        
        {result && <StateTheftResults result={result} stateCode="AZ" stateName="Arizona" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <Database className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Arizona MVD Database Access</h3>
            <p className="text-muted-foreground">Direct integration with Arizona Motor Vehicle Division</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Real-Time Theft Checks</h3>
            <p className="text-muted-foreground">Instant verification against stolen property databases</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Arizona Local Data</h3>
            <p className="text-muted-foreground">Phoenix, Tucson, Mesa theft statistics and hotspots</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">Arizona Theft Statistics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Vehicle Theft</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 12,800 vehicle thefts reported annually</li>
                <li>• Phoenix ranks in top 10 US cities for auto theft</li>
                <li>• Higher rates in Phoenix, Tucson, Mesa</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Property Crime</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Electronics theft increasing 15% year-over-year</li>
                <li>• Online marketplace scams prevalent</li>
                <li>• Verify before buying from Facebook Marketplace, Craigslist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
