import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CityTheftLookupForm } from '@/components/city-verification/CityTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, TrendingUp, MapPin } from 'lucide-react';

export default function MesaVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();
  const handleSubmit = async (data: { cityCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific('AZ', data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };
  return (
    <>
      <PageSEO title="Mesa Stolen Item Check - Verify VIN, IMEI & Serial Numbers AZ" description="Free Mesa stolen item verification. 3,500+ annual thefts." keywords="Mesa stolen item check" canonical="/mesa-stolen-item-check" />
      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4"><h1 className="text-4xl md:text-5xl font-bold text-foreground">Mesa Stolen Item Verification</h1></div>
        <CityTheftLookupForm onSubmit={handleSubmit} isLoading={isLoading} defaultCity="MSA" cityName="Mesa" />
        {result && <StateTheftResults result={result} stateCode="AZ" stateName="Arizona" />}
      </div>
    </>
  );
}
