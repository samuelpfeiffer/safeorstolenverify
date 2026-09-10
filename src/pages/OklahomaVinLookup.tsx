import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const OklahomaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.oklahoma;
  return <StateVinPageTemplate {...data} />;
};

export default OklahomaVinLookup;
