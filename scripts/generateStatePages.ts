#!/usr/bin/env tsx
import * as fs from 'fs';
import * as path from 'path';

const US_STATES = [
  { code: 'AL', name: 'Alabama', slug: 'alabama', thefts: 8500, cities: ['Birmingham', 'Montgomery'], rate: 2520 },
  { code: 'AK', name: 'Alaska', slug: 'alaska', thefts: 1200, cities: ['Anchorage', 'Fairbanks'], rate: 3180 },
  { code: 'AZ', name: 'Arizona', slug: 'arizona', thefts: 24000, cities: ['Phoenix', 'Tucson'], rate: 2470 },
  { code: 'AR', name: 'Arkansas', slug: 'arkansas', thefts: 5800, cities: ['Little Rock', 'Fort Smith'], rate: 2780 },
  { code: 'CA', name: 'California', slug: 'california', thefts: 187000, cities: ['Los Angeles', 'San Francisco'], rate: 2250 },
  { code: 'CO', name: 'Colorado', slug: 'colorado', thefts: 32000, cities: ['Denver', 'Colorado Springs'], rate: 2520 },
  { code: 'CT', name: 'Connecticut', slug: 'connecticut', thefts: 4200, cities: ['Hartford', 'New Haven'], rate: 1260 },
  { code: 'DE', name: 'Delaware', slug: 'delaware', thefts: 1100, cities: ['Wilmington', 'Dover'], rate: 1820 },
  { code: 'FL', name: 'Florida', slug: 'florida', thefts: 42000, cities: ['Miami', 'Tampa'], rate: 1980 },
  { code: 'GA', name: 'Georgia', slug: 'georgia', thefts: 32000, cities: ['Atlanta', 'Augusta'], rate: 2260 },
  { code: 'HI', name: 'Hawaii', slug: 'hawaii', thefts: 3200, cities: ['Honolulu', 'Hilo'], rate: 1970 },
  { code: 'ID', name: 'Idaho', slug: 'idaho', thefts: 2100, cities: ['Boise', 'Meridian'], rate: 1200 },
  { code: 'IL', name: 'Illinois', slug: 'illinois', thefts: 28000, cities: ['Chicago', 'Aurora'], rate: 1660 },
  { code: 'IN', name: 'Indiana', slug: 'indiana', thefts: 12000, cities: ['Indianapolis', 'Fort Wayne'], rate: 2010 },
  { code: 'IA', name: 'Iowa', slug: 'iowa', thefts: 4200, cities: ['Des Moines', 'Cedar Rapids'], rate: 1520 },
  { code: 'KS', name: 'Kansas', slug: 'kansas', thefts: 6800, cities: ['Wichita', 'Overland Park'], rate: 2130 },
  { code: 'KY', name: 'Kentucky', slug: 'kentucky', thefts: 7200, cities: ['Louisville', 'Lexington'], rate: 1970 },
  { code: 'LA', name: 'Louisiana', slug: 'louisiana', thefts: 12000, cities: ['New Orleans', 'Baton Rouge'], rate: 2690 },
  { code: 'ME', name: 'Maine', slug: 'maine', thefts: 850, cities: ['Portland', 'Lewiston'], rate: 1180 },
  { code: 'MD', name: 'Maryland', slug: 'maryland', thefts: 16000, cities: ['Baltimore', 'Columbia'], rate: 1820 },
  { code: 'MA', name: 'Massachusetts', slug: 'massachusetts', thefts: 7800, cities: ['Boston', 'Worcester'], rate: 1190 },
  { code: 'MI', name: 'Michigan', slug: 'michigan', thefts: 22000, cities: ['Detroit', 'Grand Rapids'], rate: 1650 },
  { code: 'MN', name: 'Minnesota', slug: 'minnesota', thefts: 13000, cities: ['Minneapolis', 'Saint Paul'], rate: 1740 },
  { code: 'MS', name: 'Mississippi', slug: 'mississippi', thefts: 5200, cities: ['Jackson', 'Gulfport'], rate: 2280 },
  { code: 'MO', name: 'Missouri', slug: 'missouri', thefts: 16000, cities: ['Kansas City', 'St. Louis'], rate: 2360 },
  { code: 'MT', name: 'Montana', slug: 'montana', thefts: 1600, cities: ['Billings', 'Missoula'], rate: 1670 },
  { code: 'NE', name: 'Nebraska', slug: 'nebraska', thefts: 4200, cities: ['Omaha', 'Lincoln'], rate: 1970 },
  { code: 'NV', name: 'Nevada', slug: 'nevada', thefts: 11000, cities: ['Las Vegas', 'Reno'], rate: 2340 },
  { code: 'NH', name: 'New Hampshire', slug: 'new-hampshire', thefts: 900, cities: ['Manchester', 'Nashua'], rate: 1030 },
  { code: 'NJ', name: 'New Jersey', slug: 'new-jersey', thefts: 13000, cities: ['Newark', 'Jersey City'], rate: 1300 },
  { code: 'NM', name: 'New Mexico', slug: 'new-mexico', thefts: 9500, cities: ['Albuquerque', 'Las Cruces'], rate: 2760 },
  { code: 'NY', name: 'New York', slug: 'new-york', thefts: 15000, cities: ['New York City', 'Buffalo'], rate: 1080 },
  { code: 'NC', name: 'North Carolina', slug: 'north-carolina', thefts: 18000, cities: ['Charlotte', 'Raleigh'], rate: 2100 },
  { code: 'ND', name: 'North Dakota', slug: 'north-dakota', thefts: 850, cities: ['Fargo', 'Bismarck'], rate: 1290 },
  { code: 'OH', name: 'Ohio', slug: 'ohio', thefts: 24000, cities: ['Columbus', 'Cleveland'], rate: 1800 },
  { code: 'OK', name: 'Oklahoma', slug: 'oklahoma', thefts: 11000, cities: ['Oklahoma City', 'Tulsa'], rate: 2420 },
  { code: 'OR', name: 'Oregon', slug: 'oregon', thefts: 14000, cities: ['Portland', 'Salem'], rate: 2320 },
  { code: 'PA', name: 'Pennsylvania', slug: 'pennsylvania', thefts: 16000, cities: ['Philadelphia', 'Pittsburgh'], rate: 1290 },
  { code: 'RI', name: 'Rhode Island', slug: 'rhode-island', thefts: 1400, cities: ['Providence', 'Warwick'], rate: 1510 },
  { code: 'SC', name: 'South Carolina', slug: 'south-carolina', thefts: 10000, cities: ['Charleston', 'Columbia'], rate: 2330 },
  { code: 'SD', name: 'South Dakota', slug: 'south-dakota', thefts: 1100, cities: ['Sioux Falls', 'Rapid City'], rate: 1240 },
  { code: 'TN', name: 'Tennessee', slug: 'tennessee', thefts: 16000, cities: ['Nashville', 'Memphis'], rate: 2270 },
  { code: 'TX', name: 'Texas', slug: 'texas', thefts: 78000, cities: ['Houston', 'Dallas'], rate: 2680 },
  { code: 'UT', name: 'Utah', slug: 'utah', thefts: 7800, cities: ['Salt Lake City', 'Provo'], rate: 1770 },
  { code: 'VT', name: 'Vermont', slug: 'vermont', thefts: 450, cities: ['Burlington', 'South Burlington'], rate: 1360 },
  { code: 'VA', name: 'Virginia', slug: 'virginia', thefts: 9500, cities: ['Virginia Beach', 'Norfolk'], rate: 1460 },
  { code: 'WA', name: 'Washington', slug: 'washington', thefts: 32000, cities: ['Seattle', 'Spokane'], rate: 2410 },
  { code: 'WV', name: 'West Virginia', slug: 'west-virginia', thefts: 1900, cities: ['Charleston', 'Huntington'], rate: 1560 },
  { code: 'WI', name: 'Wisconsin', slug: 'wisconsin', thefts: 11000, cities: ['Milwaukee', 'Madison'], rate: 1580 },
  { code: 'WY', name: 'Wyoming', slug: 'wyoming', thefts: 750, cities: ['Cheyenne', 'Casper'], rate: 1340 }
];

const generateStatePageTemplate = (state: typeof US_STATES[0]) => {
  return `import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { StateTheftLookupForm } from '@/components/state-verification/StateTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useStateTheftLookup } from '@/hooks/useStateTheftLookup';
import { Shield, Database, MapPin } from 'lucide-react';

export default function ${state.name.replace(/\s+/g, '')}VerificationPage() {
  const [result, setResult] = useState(null);
  const { lookupStateTheft, isLoading } = useStateTheftLookup();

  const handleSubmit = async (data: { stateCode: string; type: string; value: string }) => {
    const lookupResult = await lookupStateTheft(data.stateCode, data.type, data.value);
    setResult(lookupResult);
  };

  return (
    <>
      <PageSEO
        title="${state.name} Stolen Item Check - Verify VIN, IMEI, Serial Numbers & License Plates"
        description="Free ${state.name} stolen item verification. Check vehicles, phones, electronics instantly. ${state.thefts.toLocaleString()} vehicle thefts annually. Protect yourself in ${state.cities.join(', ')}."
        keywords="${state.name} stolen item check, ${state.name} VIN check, ${state.name} IMEI check, ${state.cities[0]} stolen car, ${state.name} phone theft"
        canonical="/${state.slug}-stolen-item-check"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            ${state.name} Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, electronics, and license plates before you buy in ${state.name}
          </p>
        </div>

        <StateTheftLookupForm 
          onSubmit={handleSubmit}
          isLoading={isLoading}
          defaultState="${state.code}"
        />
        
        {result && <StateTheftResults result={result} stateCode="${state.code}" stateName="${state.name}" />}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <Database className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">NICB VINCheck Access</h3>
            <p className="text-muted-foreground">Instant access to national theft databases</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">${state.thefts.toLocaleString()} Annual Vehicle Thefts</h3>
            <p className="text-muted-foreground">Protect yourself from ${state.name}'s theft statistics</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Top Cities Covered</h3>
            <p className="text-muted-foreground">${state.cities.join(', ')}</p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">About ${state.name} Theft Statistics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Vehicle Theft Rate</h3>
              <p className="text-muted-foreground">${state.rate.toLocaleString()} thefts per 100,000 residents - verify before purchasing any used vehicle</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What We Verify</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• VIN numbers (vehicles, motorcycles, boats)</li>
                <li>• License plates</li>
                <li>• IMEI numbers (phones, tablets)</li>
                <li>• Serial numbers (electronics, tools)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`;
};

const statePageDir = path.join(process.cwd(), 'src/pages/state-pages');
if (!fs.existsSync(statePageDir)) {
  fs.mkdirSync(statePageDir, { recursive: true });
}

console.log('Generating 50 state verification pages...\n');

US_STATES.forEach((state) => {
  const componentName = `${state.name.replace(/\s+/g, '')}VerificationPage`;
  const fileName = `${componentName}.tsx`;
  const filePath = path.join(statePageDir, fileName);
  
  const pageContent = generateStatePageTemplate(state);
  fs.writeFileSync(filePath, pageContent);
  
  console.log(`✅ Generated: ${fileName}`);
});

console.log(`\n✅ Successfully generated all 50 state pages in: ${statePageDir}`);
console.log('\n🔗 Add these imports to AppRoutes.tsx:');
US_STATES.forEach((state) => {
  const componentName = `${state.name.replace(/\s+/g, '')}VerificationPage`;
  console.log(`const ${componentName} = lazy(() => import('@/pages/state-pages/${componentName}'));`);
});

console.log('\n🛣️  Add these routes to AppRoutes.tsx:');
US_STATES.forEach((state) => {
  const componentName = `${state.name.replace(/\s+/g, '')}VerificationPage`;
  console.log(`<Route path="/${state.slug}-stolen-item-check" element={<${componentName} />} />`);
});
