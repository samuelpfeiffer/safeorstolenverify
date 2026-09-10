import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const NorthDakotaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.northdakota;
  return <StateVinPageTemplate {...data} />;
};

export default NorthDakotaVinLookup;
