// State VIN Lookup Page Exports
// These wrapper components pass the state key to the dynamic page

import React, { lazy, Suspense } from 'react';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';

// Dynamic page component - lazy loaded
const DynamicStateVinPage = lazy(() => import('./DynamicStateVinPage'));

// Helper component to wrap lazy loading
const StateVinWrapper: React.FC<{ stateKey: string }> = ({ stateKey }) => (
  <Suspense fallback={<AppLoadingScreen />}>
    <DynamicStateVinPage stateKey={stateKey} />
  </Suspense>
);

// Individual state wrapper components for routing (39 remaining states)
// Top 11 states have dedicated pages already

export const AlabamaVin = () => <StateVinWrapper stateKey="alabama" />;
export const AlaskaVin = () => <StateVinWrapper stateKey="alaska" />;
export const ArkansasVin = () => <StateVinWrapper stateKey="arkansas" />;
export const ColoradoVin = () => <StateVinWrapper stateKey="colorado" />;
export const ConnecticutVin = () => <StateVinWrapper stateKey="connecticut" />;
export const DelawareVin = () => <StateVinWrapper stateKey="delaware" />;
export const HawaiiVin = () => <StateVinWrapper stateKey="hawaii" />;
export const IdahoVin = () => <StateVinWrapper stateKey="idaho" />;
export const IndianaVin = () => <StateVinWrapper stateKey="indiana" />;
export const IowaVin = () => <StateVinWrapper stateKey="iowa" />;
export const KansasVin = () => <StateVinWrapper stateKey="kansas" />;
export const KentuckyVin = () => <StateVinWrapper stateKey="kentucky" />;
export const LouisianaVin = () => <StateVinWrapper stateKey="louisiana" />;
export const MaineVin = () => <StateVinWrapper stateKey="maine" />;
export const MarylandVin = () => <StateVinWrapper stateKey="maryland" />;
export const MassachusettsVin = () => <StateVinWrapper stateKey="massachusetts" />;
export const MichiganVin = () => <StateVinWrapper stateKey="michigan" />;
export const MinnesotaVin = () => <StateVinWrapper stateKey="minnesota" />;
export const MississippiVin = () => <StateVinWrapper stateKey="mississippi" />;
export const MissouriVin = () => <StateVinWrapper stateKey="missouri" />;
export const MontanaVin = () => <StateVinWrapper stateKey="montana" />;
export const NebraskaVin = () => <StateVinWrapper stateKey="nebraska" />;
export const NevadaVin = () => <StateVinWrapper stateKey="nevada" />;
export const NewHampshireVin = () => <StateVinWrapper stateKey="newhampshire" />;
export const NewJerseyVin = () => <StateVinWrapper stateKey="newjersey" />;
export const NewMexicoVin = () => <StateVinWrapper stateKey="newmexico" />;
export const NorthDakotaVin = () => <StateVinWrapper stateKey="northdakota" />;
export const OklahomaVin = () => <StateVinWrapper stateKey="oklahoma" />;
export const OregonVin = () => <StateVinWrapper stateKey="oregon" />;
export const RhodeIslandVin = () => <StateVinWrapper stateKey="rhodeisland" />;
export const SouthCarolinaVin = () => <StateVinWrapper stateKey="southcarolina" />;
export const SouthDakotaVin = () => <StateVinWrapper stateKey="southdakota" />;
export const TennesseeVin = () => <StateVinWrapper stateKey="tennessee" />;
export const UtahVin = () => <StateVinWrapper stateKey="utah" />;
export const VermontVin = () => <StateVinWrapper stateKey="vermont" />;
export const VirginiaVin = () => <StateVinWrapper stateKey="virginia" />;
export const WestVirginiaVin = () => <StateVinWrapper stateKey="westvirginia" />;
export const WisconsinVin = () => <StateVinWrapper stateKey="wisconsin" />;
export const WyomingVin = () => <StateVinWrapper stateKey="wyoming" />;
