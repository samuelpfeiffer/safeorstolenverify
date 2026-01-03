// State License Plate Page Exports
// These wrapper components pass the state key to the dynamic page

import React, { lazy, Suspense } from 'react';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';

// Dynamic page component - lazy loaded
const DynamicStateLicensePlatePage = lazy(() => import('./DynamicStateLicensePlatePage'));

// Helper component to wrap lazy loading
const StatePageWrapper: React.FC<{ stateKey: string }> = ({ stateKey }) => (
  <Suspense fallback={<AppLoadingScreen />}>
    <DynamicStateLicensePlatePage stateKey={stateKey} />
  </Suspense>
);

// Individual state wrapper components for routing
export const AlabamaLicensePlate = () => <StatePageWrapper stateKey="alabama" />;
export const AlaskaLicensePlate = () => <StatePageWrapper stateKey="alaska" />;
export const ArkansasLicensePlate = () => <StatePageWrapper stateKey="arkansas" />;
export const ColoradoLicensePlate = () => <StatePageWrapper stateKey="colorado" />;
export const ConnecticutLicensePlate = () => <StatePageWrapper stateKey="connecticut" />;
export const DelawareLicensePlate = () => <StatePageWrapper stateKey="delaware" />;
export const HawaiiLicensePlate = () => <StatePageWrapper stateKey="hawaii" />;
export const IdahoLicensePlate = () => <StatePageWrapper stateKey="idaho" />;
export const IndianaLicensePlate = () => <StatePageWrapper stateKey="indiana" />;
export const IowaLicensePlate = () => <StatePageWrapper stateKey="iowa" />;
export const KansasLicensePlate = () => <StatePageWrapper stateKey="kansas" />;
export const KentuckyLicensePlate = () => <StatePageWrapper stateKey="kentucky" />;
export const LouisianaLicensePlate = () => <StatePageWrapper stateKey="louisiana" />;
export const MaineLicensePlate = () => <StatePageWrapper stateKey="maine" />;
export const MarylandLicensePlate = () => <StatePageWrapper stateKey="maryland" />;
export const MassachusettsLicensePlate = () => <StatePageWrapper stateKey="massachusetts" />;
export const MichiganLicensePlate = () => <StatePageWrapper stateKey="michigan" />;
export const MinnesotaLicensePlate = () => <StatePageWrapper stateKey="minnesota" />;
export const MississippiLicensePlate = () => <StatePageWrapper stateKey="mississippi" />;
export const MissouriLicensePlate = () => <StatePageWrapper stateKey="missouri" />;
export const MontanaLicensePlate = () => <StatePageWrapper stateKey="montana" />;
export const NebraskaLicensePlate = () => <StatePageWrapper stateKey="nebraska" />;
export const NevadaLicensePlate = () => <StatePageWrapper stateKey="nevada" />;
export const NewHampshireLicensePlate = () => <StatePageWrapper stateKey="newhampshire" />;
export const NewJerseyLicensePlate = () => <StatePageWrapper stateKey="newjersey" />;
export const NewMexicoLicensePlate = () => <StatePageWrapper stateKey="newmexico" />;
export const NorthDakotaLicensePlate = () => <StatePageWrapper stateKey="northdakota" />;
export const OklahomaLicensePlate = () => <StatePageWrapper stateKey="oklahoma" />;
export const OregonLicensePlate = () => <StatePageWrapper stateKey="oregon" />;
export const RhodeIslandLicensePlate = () => <StatePageWrapper stateKey="rhodeisland" />;
export const SouthCarolinaLicensePlate = () => <StatePageWrapper stateKey="southcarolina" />;
export const SouthDakotaLicensePlate = () => <StatePageWrapper stateKey="southdakota" />;
export const TennesseeLicensePlate = () => <StatePageWrapper stateKey="tennessee" />;
export const UtahLicensePlate = () => <StatePageWrapper stateKey="utah" />;
export const VermontLicensePlate = () => <StatePageWrapper stateKey="vermont" />;
export const VirginiaLicensePlate = () => <StatePageWrapper stateKey="virginia" />;
export const WestVirginiaLicensePlate = () => <StatePageWrapper stateKey="westvirginia" />;
export const WisconsinLicensePlate = () => <StatePageWrapper stateKey="wisconsin" />;
export const WyomingLicensePlate = () => <StatePageWrapper stateKey="wyoming" />;
