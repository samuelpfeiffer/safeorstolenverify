import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const VermontVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.vermont;
  return <StateVinPageTemplate {...data} />;
};

export default VermontVinLookup;
