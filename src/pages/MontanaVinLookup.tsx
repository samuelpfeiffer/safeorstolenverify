import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const MontanaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.montana;
  return <StateVinPageTemplate {...data} />;
};

export default MontanaVinLookup;
