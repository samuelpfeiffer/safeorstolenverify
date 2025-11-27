import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const ArkansasVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.arkansas;
  return <StateVinPageTemplate {...data} />;
};

export default ArkansasVinLookup;
