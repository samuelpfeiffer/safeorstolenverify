import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const IllinoisVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.illinois;
  return <StateVinPageTemplate {...data} />;
};

export default IllinoisVinLookup;
