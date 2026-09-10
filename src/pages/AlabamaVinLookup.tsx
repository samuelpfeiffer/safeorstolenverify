import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const AlabamaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.alabama;
  return <StateVinPageTemplate {...data} />;
};

export default AlabamaVinLookup;
