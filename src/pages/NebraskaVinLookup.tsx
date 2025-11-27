import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const NebraskaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.nebraska;
  return <StateVinPageTemplate {...data} />;
};

export default NebraskaVinLookup;
