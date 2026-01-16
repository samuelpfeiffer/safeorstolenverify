/**
 * All 50 State VIN Lookup Page Components
 * Generated from stateData config using StateVINLookupPage template
 */

import { StateVINLookupPage } from '@/components/StateVINLookupPage';
import { ALL_STATES, getStateBySlug } from '@/config/stateData';

// Helper to create state VIN page component
const createStateVINPage = (licensePlateSlug: string) => {
  const Component = () => {
    const stateData = getStateBySlug(licensePlateSlug);
    if (!stateData) return null;
    return <StateVINLookupPage stateData={stateData} />;
  };
  Component.displayName = `${licensePlateSlug.split('-')[0]}VINLookupPage`;
  return Component;
};

// Export all 50 state VIN page components
export const AlabamaVinLookup = createStateVINPage('alabama-license-plate-lookup');
export const AlaskaVinLookup = createStateVINPage('alaska-license-plate-lookup');
export const ArizonaVinLookup = createStateVINPage('arizona-license-plate-lookup');
export const ArkansasVinLookup = createStateVINPage('arkansas-license-plate-lookup');
export const CaliforniaVinLookup = createStateVINPage('california-license-plate-lookup');
export const ColoradoVinLookup = createStateVINPage('colorado-license-plate-lookup');
export const ConnecticutVinLookup = createStateVINPage('connecticut-license-plate-lookup');
export const DelawareVinLookup = createStateVINPage('delaware-license-plate-lookup');
export const FloridaVinLookup = createStateVINPage('florida-license-plate-lookup');
export const GeorgiaVinLookup = createStateVINPage('georgia-license-plate-lookup');
export const HawaiiVinLookup = createStateVINPage('hawaii-license-plate-lookup');
export const IdahoVinLookup = createStateVINPage('idaho-license-plate-lookup');
export const IllinoisVinLookup = createStateVINPage('illinois-license-plate-lookup');
export const IndianaVinLookup = createStateVINPage('indiana-license-plate-lookup');
export const IowaVinLookup = createStateVINPage('iowa-license-plate-lookup');
export const KansasVinLookup = createStateVINPage('kansas-license-plate-lookup');
export const KentuckyVinLookup = createStateVINPage('kentucky-license-plate-lookup');
export const LouisianaVinLookup = createStateVINPage('louisiana-license-plate-lookup');
export const MaineVinLookup = createStateVINPage('maine-license-plate-lookup');
export const MarylandVinLookup = createStateVINPage('maryland-license-plate-lookup');
export const MassachusettsVinLookup = createStateVINPage('massachusetts-license-plate-lookup');
export const MichiganVinLookup = createStateVINPage('michigan-license-plate-lookup');
export const MinnesotaVinLookup = createStateVINPage('minnesota-license-plate-lookup');
export const MississippiVinLookup = createStateVINPage('mississippi-license-plate-lookup');
export const MissouriVinLookup = createStateVINPage('missouri-license-plate-lookup');
export const MontanaVinLookup = createStateVINPage('montana-license-plate-lookup');
export const NebraskaVinLookup = createStateVINPage('nebraska-license-plate-lookup');
export const NevadaVinLookup = createStateVINPage('nevada-license-plate-lookup');
export const NewHampshireVinLookup = createStateVINPage('new-hampshire-license-plate-lookup');
export const NewJerseyVinLookup = createStateVINPage('new-jersey-license-plate-lookup');
export const NewMexicoVinLookup = createStateVINPage('new-mexico-license-plate-lookup');
export const NewYorkVinLookup = createStateVINPage('new-york-license-plate-lookup');
export const NorthCarolinaVinLookup = createStateVINPage('north-carolina-license-plate-lookup');
export const NorthDakotaVinLookup = createStateVINPage('north-dakota-license-plate-lookup');
export const OhioVinLookup = createStateVINPage('ohio-license-plate-lookup');
export const OklahomaVinLookup = createStateVINPage('oklahoma-license-plate-lookup');
export const OregonVinLookup = createStateVINPage('oregon-license-plate-lookup');
export const PennsylvaniaVinLookup = createStateVINPage('pennsylvania-license-plate-lookup');
export const RhodeIslandVinLookup = createStateVINPage('rhode-island-license-plate-lookup');
export const SouthCarolinaVinLookup = createStateVINPage('south-carolina-license-plate-lookup');
export const SouthDakotaVinLookup = createStateVINPage('south-dakota-license-plate-lookup');
export const TennesseeVinLookup = createStateVINPage('tennessee-license-plate-lookup');
export const TexasVinLookup = createStateVINPage('texas-license-plate-lookup');
export const UtahVinLookup = createStateVINPage('utah-license-plate-lookup');
export const VermontVinLookup = createStateVINPage('vermont-license-plate-lookup');
export const VirginiaVinLookup = createStateVINPage('virginia-license-plate-lookup');
export const WashingtonVinLookup = createStateVINPage('washington-license-plate-lookup');
export const WestVirginiaVinLookup = createStateVINPage('west-virginia-license-plate-lookup');
export const WisconsinVinLookup = createStateVINPage('wisconsin-license-plate-lookup');
export const WyomingVinLookup = createStateVINPage('wyoming-license-plate-lookup');

// Generate route config for all states VIN pages (used by AppRoutes)
export const STATE_VIN_ROUTES = ALL_STATES.map(state => ({
  path: `/${state.slug.replace('license-plate-lookup', 'vin-lookup')}`,
  component: createStateVINPage(state.slug),
  stateName: state.name
}));
