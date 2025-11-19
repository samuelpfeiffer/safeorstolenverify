import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { UniversalStateVerificationForm } from '@/components/state-verification/UniversalStateVerificationForm';
import { getStateByCode, StateData } from '@/data/stateVerificationData';
import { Shield, Database, TrendingUp, Phone } from 'lucide-react';

interface StateUniversalVerificationPageProps {
  stateCode: string;
}

export const StateUniversalVerificationPage: React.FC<StateUniversalVerificationPageProps> = ({ stateCode }) => {
  const state = getStateByCode(stateCode);

  if (!state) return null;

  return (
    <>
      <PageSEO
        title={`${state.name} Stolen Item Checker - Verify VIN, IMEI, Serial Numbers & License Plates`}
        description={`Free ${state.name} stolen item verification. Check vehicles (VIN), phones (IMEI), electronics (serial numbers), and license plates instantly. Protect yourself from buying stolen goods in ${state.name}.`}
        keywords={`${state.name} stolen item check, ${state.name} VIN check, ${state.name} IMEI check, ${state.name} license plate lookup, stolen car ${state.name}, stolen phone ${state.name}`}
        canonical={`/${state.slug}-stolen-item-check`}
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {state.name} Stolen Item Verification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify vehicles, phones, electronics, and more before you buy in {state.name}
          </p>
        </div>

        <UniversalStateVerificationForm stateCode={state.code} />

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <Database className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Comprehensive Coverage</h3>
            <p className="text-muted-foreground">Access to {state.databaseAccess.databases.join(', ')} and more</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <TrendingUp className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Local Statistics</h3>
            <p className="text-muted-foreground">{state.theftStatistics.vehicleThefts.toLocaleString()} vehicle thefts annually</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <Phone className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Report Theft</h3>
            <p className="text-muted-foreground">Contact {state.lawEnforcement.statePolice}</p>
          </div>
        </div>
      </div>
    </>
  );
};
