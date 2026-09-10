import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const MassachusettsVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.massachusetts;
  return <StateVinPageTemplate {...data} />;
};

export default MassachusettsVinLookup;
