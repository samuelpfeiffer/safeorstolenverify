import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CityTheftLookupForm } from '@/components/city-verification/CityTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, TrendingUp, MapPin } from 'lucide-react';

export default function FresnoVerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();
  const handleSubmit = async (data: { cityCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific('CA', data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };
  return (
    <>
      <PageSEO title="Fresno Stolen Item Check - Verify VIN, IMEI & Serial Numbers CA" description="Free Fresno stolen item verification. Check vehicles, phones, electronics. 5,200+ annual thefts." keywords="Fresno stolen item check, Fresno VIN check" canonical="/fresno-stolen-item-check" />
      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4"><h1 className="text-4xl md:text-5xl font-bold text-foreground">Fresno Stolen Item Verification</h1><p className="text-xl text-muted-foreground max-w-3xl mx-auto">Verify vehicles, phones, electronics before buying in Fresno area</p></div>
        <CityTheftLookupForm onSubmit={handleSubmit} isLoading={isLoading} defaultCity="FAT" cityName="Fresno" />
        {result && <StateTheftResults result={result} stateCode="CA" stateName="California" />}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6"><TrendingUp className="h-8 w-8 text-primary mb-3" /><h3 className="font-semibold text-lg mb-2">5,200+ Annual Thefts</h3><p className="text-muted-foreground">Fresno area theft statistics</p></div>
          <div className="bg-card border border-border rounded-lg p-6"><Shield className="h-8 w-8 text-primary mb-3" /><h3 className="font-semibold text-lg mb-2">Real-Time Verification</h3><p className="text-muted-foreground">Instant checks against California databases</p></div>
          <div className="bg-card border border-border rounded-lg p-6"><MapPin className="h-8 w-8 text-primary mb-3" /><h3 className="font-semibold text-lg mb-2">Fresno Coverage</h3><p className="text-muted-foreground">Metro area and surrounding communities</p></div>
        </div>
      </div>
    </>
  );
}
