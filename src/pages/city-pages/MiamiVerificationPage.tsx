import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CityTheftLookupForm } from '@/components/city-verification/CityTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, TrendingUp, MapPin } from 'lucide-react';

export default function MiamiVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { cityCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific('FL', data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="Miami Stolen Item Check - Verify VIN, IMEI & Serial Numbers FL"
        description="Free Miami stolen item verification. Check vehicles, phones, electronics. 15,000+ annual thefts. Protect yourself in Miami-Dade County."
        keywords="Miami stolen item check, Miami VIN check, Miami Beach IMEI check, stolen car Miami, Florida phone theft"
        canonical="/miami-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Miami Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, electronics before buying in Miami metro area
          </p>
        </div>

        <CityTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultCity="MIA"
          cityName="Miami"
        />
        
        {result && <StateTheftResults result={result} stateCode="FL" stateName="Florida" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <TrendingUp className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">15,000+ Annual Thefts</h3>
            <p className="text-muted-foreground">Miami-Dade leads Florida</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Florida DHSMV Database</h3>
            <p className="text-muted-foreground">Real-time South Florida theft data</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Metro Coverage</h3>
            <p className="text-muted-foreground">Miami Beach, Hialeah, Coral Gables, Doral</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">Miami Theft Statistics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Vehicle Theft</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Tourist areas targeted heavily</li>
                <li>• Luxury vehicles at high risk</li>
                <li>• Miami Beach sees high theft rates</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Electronics Crime</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Beach area phone thefts common</li>
                <li>• Always verify items from Craigslist</li>
                <li>• Meet in police station parking lots</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
