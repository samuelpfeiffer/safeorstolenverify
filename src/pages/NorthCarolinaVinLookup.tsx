import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const NorthCarolinaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.northcarolina;
  return <StateVinPageTemplate {...data} />;
};

export default NorthCarolinaVinLookup;
