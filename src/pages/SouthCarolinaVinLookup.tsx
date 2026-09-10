import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const SouthCarolinaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.southcarolina;
  return <StateVinPageTemplate {...data} />;
};

export default SouthCarolinaVinLookup;
