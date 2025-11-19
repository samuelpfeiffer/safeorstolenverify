import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CityTheftLookupForm } from '@/components/city-verification/CityTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, TrendingUp, MapPin } from 'lucide-react';

export default function LosAngelesVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { cityCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific('CA', data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="Los Angeles Stolen Item Check - Verify VIN, IMEI & Serial Numbers CA"
        description="Free Los Angeles stolen item verification. Check vehicles, phones, electronics. 50,000+ annual thefts. Protect yourself buying used items in LA metro area."
        keywords="Los Angeles stolen item check, LA VIN check, LA IMEI check, stolen car LA, Los Angeles phone theft"
        canonical="/los-angeles-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Los Angeles Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, and electronics before buying in LA metro area
          </p>
        </div>

        <CityTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultCity="LAX"
          cityName="Los Angeles"
        />
        
        {result && <StateTheftResults result={result} stateCode="CA" stateName="California" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <TrendingUp className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">50,000+ Annual Thefts</h3>
            <p className="text-muted-foreground">LA leads California in property crime</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Real-Time Verification</h3>
            <p className="text-muted-foreground">Instant checks against stolen property databases</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">LA County Coverage</h3>
            <p className="text-muted-foreground">Hollywood, Downtown, Santa Monica, Valley areas</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">Los Angeles Theft Hotspots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">High-Risk Areas</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Downtown LA - highest vehicle theft rate</li>
                <li>• Hollywood - electronics theft prevalent</li>
                <li>• Venice/Santa Monica - tourist area scams</li>
                <li>• San Fernando Valley - catalytic converter theft</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Protection Tips</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Always verify VIN before buying vehicles</li>
                <li>• Check IMEI on phones from Craigslist/OfferUp</li>
                <li>• Meet sellers in public police station parking lots</li>
                <li>• Avoid deals that seem too good to be true</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
