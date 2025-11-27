import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const ArizonaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.arizona;
  return <StateVinPageTemplate {...data} />;
};

export default ArizonaVinLookup;
