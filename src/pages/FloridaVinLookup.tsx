import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { STATE_VIN_DATA } from '@/data/stateVinData';

const FloridaVinLookup = () => {
  const data = STATE_VIN_DATA.florida;
  return <StateVinPageTemplate {...data} />;
};

export default FloridaVinLookup;
