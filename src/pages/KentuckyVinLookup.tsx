import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const KentuckyVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.kentucky;
  return <StateVinPageTemplate {...data} />;
};

export default KentuckyVinLookup;
