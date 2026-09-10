import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const MissouriVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.missouri;
  return <StateVinPageTemplate {...data} />;
};

export default MissouriVinLookup;
