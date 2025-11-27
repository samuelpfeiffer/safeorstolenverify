import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const GeorgiaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.georgia;
  return <StateVinPageTemplate {...data} />;
};

export default GeorgiaVinLookup;
