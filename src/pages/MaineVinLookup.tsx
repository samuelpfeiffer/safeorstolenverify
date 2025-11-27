import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const MaineVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.maine;
  return <StateVinPageTemplate {...data} />;
};

export default MaineVinLookup;
