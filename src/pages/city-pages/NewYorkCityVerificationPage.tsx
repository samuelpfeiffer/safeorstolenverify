import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CityTheftLookupForm } from '@/components/city-verification/CityTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, TrendingUp, MapPin } from 'lucide-react';

export default function NewYorkCityVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { cityCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific('NY', data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="New York City Stolen Item Check - Verify VIN, IMEI & Serial Numbers"
        description="Free NYC stolen item verification. Check vehicles, phones, electronics. 12,000+ annual vehicle thefts. Protect yourself in all 5 boroughs."
        keywords="NYC stolen item check, New York VIN check, Manhattan IMEI check, Brooklyn stolen car, Queens phone theft"
        canonical="/new-york-city-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            NYC Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, electronics before buying in New York City
          </p>
        </div>

        <CityTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultCity="NYC"
          cityName="New York City"
        />
        
        {result && <StateTheftResults result={result} stateCode="NY" stateName="New York" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <TrendingUp className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">12,000+ Annual Thefts</h3>
            <p className="text-muted-foreground">All 5 boroughs tracked</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">NYPD Database Access</h3>
            <p className="text-muted-foreground">Real-time NYC theft reports</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">5 Borough Coverage</h3>
            <p className="text-muted-foreground">Manhattan, Brooklyn, Queens, Bronx, Staten Island</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">NYC Theft Patterns</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Vehicle Theft Hotspots</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Brooklyn leads in auto theft</li>
                <li>• Queens sees catalytic converter thefts</li>
                <li>• Bronx high-risk for older vehicles</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Electronics & Property</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Manhattan subway iPhone thefts common</li>
                <li>• Always meet sellers in public spaces</li>
                <li>• Verify all Facebook Marketplace items</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
