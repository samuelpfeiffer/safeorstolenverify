import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const MarylandVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.maryland;
  return <StateVinPageTemplate {...data} />;
};

export default MarylandVinLookup;
