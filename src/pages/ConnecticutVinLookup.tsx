import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const ConnecticutVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.connecticut;
  return <StateVinPageTemplate {...data} />;
};

export default ConnecticutVinLookup;
