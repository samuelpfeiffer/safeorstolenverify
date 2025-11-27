import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { STATE_VIN_DATA } from '@/data/stateVinData';

const NewYorkVinLookup = () => {
  const data = STATE_VIN_DATA.newyork;
  return <StateVinPageTemplate {...data} />;
};

export default NewYorkVinLookup;
