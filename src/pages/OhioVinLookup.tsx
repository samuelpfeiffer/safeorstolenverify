import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const OhioVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.ohio;
  return <StateVinPageTemplate {...data} />;
};

export default OhioVinLookup;
