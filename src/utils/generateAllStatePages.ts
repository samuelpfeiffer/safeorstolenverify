import { US_STATES } from '@/data/stateVerificationData';

// This utility generates the code structure for all 50 state pages
// Run this to get the complete list of routes and imports needed

export const generateStatePageImports = () => {
  return US_STATES.map(state => {
    const componentName = `${state.name.replace(/\s+/g, '')}VerificationPage`;
    return `const ${componentName} = lazy(() => import('@/pages/state-pages/${componentName}'));`;
  }).join('\n');
};

export const generateStateRoutes = () => {
  return US_STATES.map(state => {
    const componentName = `${state.name.replace(/\s+/g, '')}VerificationPage`;
    return `<Route path="/${state.slug}-stolen-item-check" element={<${componentName} />} />`;
  }).join('\n          ');
};

export const generateSitemapUrls = () => {
  return US_STATES.map(state => {
    return `  <url><loc>https://safeorstolen.com/${state.slug}-stolen-item-check</loc><lastmod>2025-01-19</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`;
  }).join('\n');
};

export const generatePrerenderRoutes = () => {
  return US_STATES.map(state => `  '/${state.slug}-stolen-item-check',`).join('\n');
};

// Generate page template for a specific state
export const generateStatePageTemplate = (stateCode: string) => {
  const state = US_STATES.find(s => s.code === stateCode);
  if (!state) return '';

  return `import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { StateTheftLookupForm } from '@/components/state-verification/StateTheftLookupForm';
import { Shield, Database, MapPin } from 'lucide-react';

export default function ${state.name.replace(/\s+/g, '')}VerificationPage() {
  return (
    <>
      <PageSEO
        title="${state.name} Stolen Item Check - Verify VIN, IMEI, Serial Numbers & License Plates"
        description="Free ${state.name} stolen item verification. Check vehicles, phones, electronics instantly. ${state.theftStatistics.vehicleThefts.toLocaleString()} vehicle thefts annually. Protect yourself in ${state.topCities.join(', ')}."
        keywords="${state.name} stolen item check, ${state.name} VIN check, ${state.name} IMEI check, ${state.topCities[0]} stolen car, ${state.name} phone theft"
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

        <StateTheftLookupForm stateCode="${state.code}" />

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <Database className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">${state.databaseAccess.databases.join(', ')}</h3>
            <p className="text-muted-foreground">Instant access to theft databases</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">${state.theftStatistics.vehicleThefts.toLocaleString()} Annual Vehicle Thefts</h3>
            <p className="text-muted-foreground">Protect yourself from ${state.name}'s theft statistics</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Top Cities Covered</h3>
            <p className="text-muted-foreground">${state.topCities.join(', ')}</p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">About ${state.name} Theft Statistics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Vehicle Theft Rate</h3>
              <p className="text-muted-foreground">${state.theftStatistics.theftRate.toLocaleString()} thefts per 100,000 residents - verify before purchasing any used vehicle</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Report Stolen Items</h3>
              <p className="text-muted-foreground">Contact ${state.lawEnforcement.statePolice}: <a href="${state.lawEnforcement.reportingUrl}" className="text-primary hover:underline">${state.lawEnforcement.reportingUrl}</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`;
};
