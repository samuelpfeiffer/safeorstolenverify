import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CityTheftLookupForm } from '@/components/city-verification/CityTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, TrendingUp, MapPin } from 'lucide-react';

export default function AtlantaVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();
  const handleSubmit = async (data: { cityCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific('GA', data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };
  return (
    <>
      <PageSEO title="Atlanta Stolen Item Check - Verify VIN, IMEI & Serial Numbers GA" description="Free Atlanta stolen item verification. 15,000+ annual thefts." keywords="Atlanta stolen item check" canonical="/atlanta-stolen-item-check" />
      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4"><h1 className="text-4xl md:text-5xl font-bold text-foreground">Atlanta Stolen Item Verification</h1></div>
        <CityTheftLookupForm onSubmit={handleSubmit} isLoading={isLoading} defaultCity="ATL" cityName="Atlanta" />
        {result && <StateTheftResults result={result} stateCode="GA" stateName="Georgia" />}
      </div>
    </>
  );
}
