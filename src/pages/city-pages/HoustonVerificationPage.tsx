import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CityTheftLookupForm } from '@/components/city-verification/CityTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, TrendingUp, MapPin } from 'lucide-react';

export default function HoustonVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { cityCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific('TX', data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="Houston Stolen Item Check - Verify VIN, IMEI & Serial Numbers TX"
        description="Free Houston stolen item verification. Check vehicles, phones, electronics. 30,000+ annual vehicle thefts. Protect yourself in Houston metro area."
        keywords="Houston stolen item check, Houston VIN check, Houston IMEI check, stolen car Houston, Houston phone theft"
        canonical="/houston-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Houston Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, and electronics before buying in Houston metro
          </p>
        </div>

        <CityTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultCity="HOU"
          cityName="Houston"
        />
        
        {result && <StateTheftResults result={result} stateCode="TX" stateName="Texas" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <TrendingUp className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">30,000+ Annual Thefts</h3>
            <p className="text-muted-foreground">Houston leads Texas in vehicle theft</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Texas DMV Integration</h3>
            <p className="text-muted-foreground">Direct access to Harris County records</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Greater Houston Area</h3>
            <p className="text-muted-foreground">Downtown, Galleria, Katy, Woodlands coverage</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">Houston Theft Trends</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Most Stolen Vehicles</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ford F-150 trucks #1 target</li>
                <li>• Chevrolet Silverado pickups common</li>
                <li>• Honda Civic/Accord frequent targets</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">High-Risk Areas</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Southwest Houston hotspot</li>
                <li>• Near Galleria shopping district</li>
                <li>• Always verify before buying on OfferUp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
