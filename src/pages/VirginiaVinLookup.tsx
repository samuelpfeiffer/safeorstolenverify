import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const VirginiaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.virginia;
  return <StateVinPageTemplate {...data} />;
};

export default VirginiaVinLookup;
