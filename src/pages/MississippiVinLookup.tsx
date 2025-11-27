import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const MississippiVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.mississippi;
  return <StateVinPageTemplate {...data} />;
};

export default MississippiVinLookup;
