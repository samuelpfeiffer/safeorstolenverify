import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const ColoradoVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.colorado;
  return <StateVinPageTemplate {...data} />;
};

export default ColoradoVinLookup;
