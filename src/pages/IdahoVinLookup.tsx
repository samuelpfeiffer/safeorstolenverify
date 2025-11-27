import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const IdahoVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.idaho;
  return <StateVinPageTemplate {...data} />;
};

export default IdahoVinLookup;
