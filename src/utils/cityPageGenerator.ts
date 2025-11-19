// City page template generator
export const cities = [
  { name: 'Philadelphia', state: 'PA', stateCode: 'PA', thefts: '8,000+', cityCode: 'PHL' },
  { name: 'San Antonio', state: 'Texas', stateCode: 'TX', thefts: '12,000+', cityCode: 'SAT' },
  { name: 'San Diego', state: 'California', stateCode: 'CA', thefts: '9,000+', cityCode: 'SAN' },
  { name: 'Dallas', state: 'Texas', stateCode: 'TX', thefts: '18,000+', cityCode: 'DFW' },
  { name: 'San Jose', state: 'California', stateCode: 'CA', thefts: '7,500+', cityCode: 'SJC' },
  { name: 'Austin', state: 'Texas', stateCode: 'TX', thefts: '6,500+', cityCode: 'AUS' },
  { name: 'Jacksonville', state: 'Florida', stateCode: 'FL', thefts: '5,000+', cityCode: 'JAX' },
  { name: 'Fort Worth', state: 'Texas', stateCode: 'TX', thefts: '8,500+', cityCode: 'FTW' },
  { name: 'Columbus', state: 'Ohio', stateCode: 'OH', thefts: '5,500+', cityCode: 'CMH' },
  { name: 'Charlotte', state: 'North Carolina', stateCode: 'NC', thefts: '4,800+', cityCode: 'CLT' },
  { name: 'San Francisco', state: 'California', stateCode: 'CA', thefts: '22,000+', cityCode: 'SFO' },
  { name: 'Indianapolis', state: 'Indiana', stateCode: 'IN', thefts: '6,200+', cityCode: 'IND' },
  { name: 'Seattle', state: 'Washington', stateCode: 'WA', thefts: '8,800+', cityCode: 'SEA' },
  { name: 'Denver', state: 'Colorado', stateCode: 'CO', thefts: '7,200+', cityCode: 'DEN' },
  { name: 'Washington DC', state: 'District of Columbia', stateCode: 'DC', thefts: '4,500+', cityCode: 'DCA' },
  { name: 'Boston', state: 'Massachusetts', stateCode: 'MA', thefts: '3,800+', cityCode: 'BOS' },
  { name: 'Nashville', state: 'Tennessee', stateCode: 'TN', thefts: '5,000+', cityCode: 'BNA' },
  { name: 'Detroit', state: 'Michigan', stateCode: 'MI', thefts: '12,500+', cityCode: 'DTW' },
  { name: 'Portland', state: 'Oregon', stateCode: 'OR', thefts: '8,000+', cityCode: 'PDX' },
  { name: 'Las Vegas', state: 'Nevada', stateCode: 'NV', thefts: '9,500+', cityCode: 'LAS' },
  { name: 'Memphis', state: 'Tennessee', stateCode: 'TN', thefts: '6,800+', cityCode: 'MEM' },
  { name: 'Louisville', state: 'Kentucky', stateCode: 'KY', thefts: '4,200+', cityCode: 'SDF' },
  { name: 'Baltimore', state: 'Maryland', stateCode: 'MD', thefts: '7,500+', cityCode: 'BWI' },
  { name: 'Milwaukee', state: 'Wisconsin', stateCode: 'WI', thefts: '6,000+', cityCode: 'MKE' },
  { name: 'Albuquerque', state: 'New Mexico', stateCode: 'NM', thefts: '5,500+', cityCode: 'ABQ' },
  { name: 'Tucson', state: 'Arizona', stateCode: 'AZ', thefts: '4,800+', cityCode: 'TUS' },
  { name: 'Fresno', state: 'California', stateCode: 'CA', thefts: '5,200+', cityCode: 'FAT' },
  { name: 'Sacramento', state: 'California', stateCode: 'CA', thefts: '6,800+', cityCode: 'SAC' },
  { name: 'Mesa', state: 'Arizona', stateCode: 'AZ', thefts: '3,500+', cityCode: 'MSA' },
  { name: 'Kansas City', state: 'Missouri', stateCode: 'MO', thefts: '7,000+', cityCode: 'MCI' },
  { name: 'Atlanta', state: 'Georgia', stateCode: 'GA', thefts: '15,000+', cityCode: 'ATL' },
  { name: 'Omaha', state: 'Nebraska', stateCode: 'NE', thefts: '3,200+', cityCode: 'OMA' },
  { name: 'Colorado Springs', state: 'Colorado', stateCode: 'CO', thefts: '3,800+', cityCode: 'COS' },
  { name: 'Raleigh', state: 'North Carolina', stateCode: 'NC', thefts: '3,500+', cityCode: 'RDU' },
  { name: 'Long Beach', state: 'California', stateCode: 'CA', thefts: '5,500+', cityCode: 'LGB' },
  { name: 'Virginia Beach', state: 'Virginia', stateCode: 'VA', thefts: '2,800+', cityCode: 'VBH' },
  { name: 'Oakland', state: 'California', stateCode: 'CA', thefts: '12,000+', cityCode: 'OAK' },
  { name: 'Minneapolis', state: 'Minnesota', stateCode: 'MN', thefts: '6,500+', cityCode: 'MSP' },
  { name: 'Tulsa', state: 'Oklahoma', stateCode: 'OK', thefts: '4,500+', cityCode: 'TUL' },
  { name: 'Tampa', state: 'Florida', stateCode: 'FL', thefts: '5,800+', cityCode: 'TPA' },
  { name: 'Arlington', state: 'Texas', stateCode: 'TX', thefts: '4,000+', cityCode: 'ARL' },
  { name: 'New Orleans', state: 'Louisiana', stateCode: 'LA', thefts: '7,200+', cityCode: 'MSY' },
  { name: 'Wichita', state: 'Kansas', stateCode: 'KS', thefts: '3,000+', cityCode: 'ICT' },
  { name: 'Cleveland', state: 'Ohio', stateCode: 'OH', thefts: '5,500+', cityCode: 'CLE' },
];

export const generateCityPageTemplate = (city: typeof cities[0]) => {
  const urlSlug = city.name.toLowerCase().replace(/\s+/g, '-');
  return `import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CityTheftLookupForm } from '@/components/city-verification/CityTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, TrendingUp, MapPin } from 'lucide-react';

export default function ${city.name.replace(/\s+/g, '')}VerificationPage() {
  const [result, setResult] = useState(null);
  const { checkStateSpecific, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { cityCode: string; type: string; value: string }) => {
    const lookupResult = await checkStateSpecific('${city.stateCode}', data.type as 'vin' | 'license_plate', data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="${city.name} Stolen Item Check - Verify VIN, IMEI & Serial Numbers ${city.stateCode}"
        description="Free ${city.name} stolen item verification. Check vehicles, phones, electronics. ${city.thefts} annual thefts. Protect yourself in ${city.name} metro area."
        keywords="${city.name} stolen item check, ${city.name} VIN check, ${city.name} IMEI check, stolen car ${city.name}, ${city.name} phone theft"
        canonical="/${urlSlug}-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            ${city.name} Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, and electronics before buying in ${city.name} area
          </p>
        </div>

        <CityTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultCity="${city.cityCode}"
          cityName="${city.name}"
        />
        
        {result && <StateTheftResults result={result} stateCode="${city.stateCode}" stateName="${city.state}" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <TrendingUp className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">${city.thefts} Annual Thefts</h3>
            <p className="text-muted-foreground">${city.name} area theft statistics</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Real-Time Verification</h3>
            <p className="text-muted-foreground">Instant checks against ${city.state} databases</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">${city.name} Coverage</h3>
            <p className="text-muted-foreground">Metro area and surrounding communities</p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">${city.name} Theft Protection</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Why Verify in ${city.name}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ${city.thefts} items stolen annually</li>
                <li>• Protect yourself from financial loss</li>
                <li>• Avoid legal complications</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Safety Tips</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Always verify VIN before buying vehicles</li>
                <li>• Check IMEI on all used phones</li>
                <li>• Meet sellers in public police parking lots</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`;
};
