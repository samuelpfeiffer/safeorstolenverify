import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const OregonVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.oregon;
  return <StateVinPageTemplate {...data} />;
};

export default OregonVinLookup;
