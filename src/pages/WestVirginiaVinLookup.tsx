import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const WestVirginiaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.westvirginia;
  return <StateVinPageTemplate {...data} />;
};

export default WestVirginiaVinLookup;
