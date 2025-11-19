import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CityTheftLookupForm } from '@/components/city-verification/CityTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, TrendingUp, MapPin } from 'lucide-react';

export default function KansasCityVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();
  const handleSubmit = async (data: { cityCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific('MO', data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };
  return (
    <>
      <PageSEO title="Kansas City Stolen Item Check - Verify VIN, IMEI & Serial Numbers MO" description="Free Kansas City stolen item verification. 7,000+ annual thefts." keywords="Kansas City stolen item check" canonical="/kansas-city-stolen-item-check" />
      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4"><h1 className="text-4xl md:text-5xl font-bold text-foreground">Kansas City Stolen Item Verification</h1></div>
        <CityTheftLookupForm onSubmit={handleSubmit} isLoading={isLoading} defaultCity="MCI" cityName="Kansas City" />
        {result && <StateTheftResults result={result} stateCode="MO" stateName="Missouri" />}
      </div>
    </>
  );
}
