/**
 * All 50 State License Plate Lookup Page Components
 * Generated from stateData config using StateLicensePlatePage template
 */

import { StateLicensePlatePage } from '@/components/StateLicensePlatePage';
import { ALL_STATES, getStateBySlug } from '@/config/stateData';

// Helper to create state page component
const createStatePage = (slug: string) => {
  const Component = () => {
    const stateData = getStateBySlug(slug);
    if (!stateData) return null;
    return <StateLicensePlatePage stateData={stateData} />;
  };
  Component.displayName = `${slug.split('-')[0]}LicensePlatePage`;
  return Component;
};

// Export all 50 state page components
export const AlabamaLicensePlateLookup = createStatePage('alabama-license-plate-lookup');
export const AlaskaLicensePlateLookup = createStatePage('alaska-license-plate-lookup');
export const ArizonaLicensePlateLookup = createStatePage('arizona-license-plate-lookup');
export const ArkansasLicensePlateLookup = createStatePage('arkansas-license-plate-lookup');
export const ColoradoLicensePlateLookup = createStatePage('colorado-license-plate-lookup');
export const ConnecticutLicensePlateLookup = createStatePage('connecticut-license-plate-lookup');
export const DelawareLicensePlateLookup = createStatePage('delaware-license-plate-lookup');
export const HawaiiLicensePlateLookup = createStatePage('hawaii-license-plate-lookup');
export const IdahoLicensePlateLookup = createStatePage('idaho-license-plate-lookup');
export const IndianaLicensePlateLookup = createStatePage('indiana-license-plate-lookup');
export const IowaLicensePlateLookup = createStatePage('iowa-license-plate-lookup');
export const KansasLicensePlateLookup = createStatePage('kansas-license-plate-lookup');
export const KentuckyLicensePlateLookup = createStatePage('kentucky-license-plate-lookup');
export const LouisianaLicensePlateLookup = createStatePage('louisiana-license-plate-lookup');
export const MaineLicensePlateLookup = createStatePage('maine-license-plate-lookup');
export const MarylandLicensePlateLookup = createStatePage('maryland-license-plate-lookup');
export const MassachusettsLicensePlateLookup = createStatePage('massachusetts-license-plate-lookup');
export const MichiganLicensePlateLookup = createStatePage('michigan-license-plate-lookup');
export const MinnesotaLicensePlateLookup = createStatePage('minnesota-license-plate-lookup');
export const MississippiLicensePlateLookup = createStatePage('mississippi-license-plate-lookup');
export const MissouriLicensePlateLookup = createStatePage('missouri-license-plate-lookup');
export const MontanaLicensePlateLookup = createStatePage('montana-license-plate-lookup');
export const NebraskaLicensePlateLookup = createStatePage('nebraska-license-plate-lookup');
export const NevadaLicensePlateLookup = createStatePage('nevada-license-plate-lookup');
export const NewHampshireLicensePlateLookup = createStatePage('new-hampshire-license-plate-lookup');
export const NewJerseyLicensePlateLookup = createStatePage('new-jersey-license-plate-lookup');
export const NewMexicoLicensePlateLookup = createStatePage('new-mexico-license-plate-lookup');
export const NorthDakotaLicensePlateLookup = createStatePage('north-dakota-license-plate-lookup');
export const OklahomaLicensePlateLookup = createStatePage('oklahoma-license-plate-lookup');
export const OregonLicensePlateLookup = createStatePage('oregon-license-plate-lookup');
export const RhodeIslandLicensePlateLookup = createStatePage('rhode-island-license-plate-lookup');
export const SouthCarolinaLicensePlateLookup = createStatePage('south-carolina-license-plate-lookup');
export const SouthDakotaLicensePlateLookup = createStatePage('south-dakota-license-plate-lookup');
export const TennesseeLicensePlateLookup = createStatePage('tennessee-license-plate-lookup');
export const UtahLicensePlateLookup = createStatePage('utah-license-plate-lookup');
export const VermontLicensePlateLookup = createStatePage('vermont-license-plate-lookup');
export const VirginiaLicensePlateLookup = createStatePage('virginia-license-plate-lookup');
export const WestVirginiaLicensePlateLookup = createStatePage('west-virginia-license-plate-lookup');
export const WisconsinLicensePlateLookup = createStatePage('wisconsin-license-plate-lookup');
export const WyomingLicensePlateLookup = createStatePage('wyoming-license-plate-lookup');

// Generate route config for all states (used by AppRoutes)
export const STATE_LICENSE_PLATE_ROUTES = ALL_STATES.map(state => ({
  path: `/${state.slug}`,
  component: createStatePage(state.slug),
  stateName: state.name
}));
