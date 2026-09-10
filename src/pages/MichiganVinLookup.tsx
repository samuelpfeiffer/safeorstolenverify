import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const MichiganVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.michigan;
  return <StateVinPageTemplate {...data} />;
};

export default MichiganVinLookup;
