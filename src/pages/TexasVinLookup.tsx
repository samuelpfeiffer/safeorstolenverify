import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { STATE_VIN_DATA } from '@/data/stateVinData';

const TexasVinLookup = () => {
  const data = STATE_VIN_DATA.texas;
  return <StateVinPageTemplate {...data} />;
};

export default TexasVinLookup;
