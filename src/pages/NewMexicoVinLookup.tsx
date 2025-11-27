import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const NewMexicoVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.newmexico;
  return <StateVinPageTemplate {...data} />;
};

export default NewMexicoVinLookup;
