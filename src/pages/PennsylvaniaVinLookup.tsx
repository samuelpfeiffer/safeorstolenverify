import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { STATE_VIN_DATA } from '@/data/stateVinData';

const PennsylvaniaVinLookup = () => {
  const data = STATE_VIN_DATA.pennsylvania;
  return <StateVinPageTemplate {...data} />;
};

export default PennsylvaniaVinLookup;
