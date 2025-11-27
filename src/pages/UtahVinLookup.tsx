import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const UtahVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.utah;
  return <StateVinPageTemplate {...data} />;
};

export default UtahVinLookup;
