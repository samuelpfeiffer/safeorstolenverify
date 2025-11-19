import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CityTheftLookupForm } from '@/components/city-verification/CityTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, TrendingUp, MapPin } from 'lucide-react';

export default function ChicagoVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { cityCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific('IL', data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="Chicago Stolen Item Check - Verify VIN, IMEI & Serial Numbers IL"
        description="Free Chicago stolen item verification. Check vehicles, phones, electronics. 25,000+ annual vehicle thefts. Protect yourself in Chicago metro area."
        keywords="Chicago stolen item check, Chicago VIN check, Chicago IMEI check, stolen car Chicago, Chicago phone theft"
        canonical="/chicago-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Chicago Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, and electronics before buying in Chicago area
          </p>
        </div>

        <CityTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultCity="CHI"
          cityName="Chicago"
        />
        
        {result && <StateTheftResults result={result} stateCode="IL" stateName="Illinois" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <TrendingUp className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">25,000+ Annual Thefts</h3>
            <p className="text-muted-foreground">Chicago ranks top 5 nationally for auto theft</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Illinois State Database</h3>
            <p className="text-muted-foreground">Connected to Cook County theft records</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Metro Coverage</h3>
            <p className="text-muted-foreground">Loop, South Side, North Shore, suburbs</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">Chicago Theft Statistics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Vehicle Theft</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 25,000+ vehicles stolen annually</li>
                <li>• Hyundai/Kia models most targeted</li>
                <li>• South and West sides highest risk</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Electronics & Property</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• iPhone theft rampant in downtown Loop</li>
                <li>• Package theft increasing in suburbs</li>
                <li>• Always verify items from Facebook Marketplace</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
