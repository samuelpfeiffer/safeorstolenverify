import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const IowaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.iowa;
  return <StateVinPageTemplate {...data} />;
};

export default IowaVinLookup;
