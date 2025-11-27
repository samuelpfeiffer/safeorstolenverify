import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const WashingtonVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.washington;
  return <StateVinPageTemplate {...data} />;
};

export default WashingtonVinLookup;
