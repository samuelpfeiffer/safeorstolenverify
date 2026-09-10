import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const NewHampshireVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.newhampshire;
  return <StateVinPageTemplate {...data} />;
};

export default NewHampshireVinLookup;
