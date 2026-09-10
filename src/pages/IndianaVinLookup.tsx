import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const IndianaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.indiana;
  return <StateVinPageTemplate {...data} />;
};

export default IndianaVinLookup;
