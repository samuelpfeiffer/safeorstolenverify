import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const WyomingVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.wyoming;
  return <StateVinPageTemplate {...data} />;
};

export default WyomingVinLookup;
