import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const MinnesotaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.minnesota;
  return <StateVinPageTemplate {...data} />;
};

export default MinnesotaVinLookup;
