import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const AlaskaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.alaska;
  return <StateVinPageTemplate {...data} />;
};

export default AlaskaVinLookup;
