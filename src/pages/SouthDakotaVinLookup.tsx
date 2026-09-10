import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const SouthDakotaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.southdakota;
  return <StateVinPageTemplate {...data} />;
};

export default SouthDakotaVinLookup;
