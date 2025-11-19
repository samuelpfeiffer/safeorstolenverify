import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CityTheftLookupForm } from '@/components/city-verification/CityTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, TrendingUp, MapPin } from 'lucide-react';

export default function PhoenixVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { cityCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific('AZ', data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="Phoenix Stolen Item Check - Verify VIN, IMEI & Serial Numbers AZ"
        description="Free Phoenix, Arizona stolen item verification. Check vehicles, phones, electronics. 12,800+ thefts annually. Protect yourself buying used items in Phoenix metro area."
        keywords="Phoenix stolen item check, Phoenix VIN check, Phoenix IMEI check, stolen car Phoenix, Phoenix phone theft verification"
        canonical="/phoenix-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Phoenix Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, and electronics before buying in Phoenix metro area
          </p>
        </div>

        <CityTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultCity="PHX"
          cityName="Phoenix"
        />
        
        {result && <StateTheftResults result={result} stateCode="AZ" stateName="Arizona" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <TrendingUp className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">12,800+ Annual Thefts</h3>
            <p className="text-muted-foreground">Phoenix leads Arizona in vehicle theft incidents</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Real-Time Verification</h3>
            <p className="text-muted-foreground">Instant checks against multiple databases</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Metro Coverage</h3>
            <p className="text-muted-foreground">Scottsdale, Tempe, Mesa, Glendale included</p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Phoenix Theft Hotspots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">High-Risk Areas</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• South Phoenix (highest vehicle theft rate)</li>
                <li>• Central Avenue corridor</li>
                <li>• West Phoenix near I-10</li>
                <li>• Downtown Phoenix parking areas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Buying Safely in Phoenix</h3>
              <p className="text-muted-foreground">Always verify items before purchase, especially from Facebook Marketplace, OfferUp, and Craigslist Phoenix listings. Meet in public places like police station parking lots.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
