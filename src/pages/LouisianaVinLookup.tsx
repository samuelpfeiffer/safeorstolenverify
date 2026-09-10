import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const LouisianaVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.louisiana;
  return <StateVinPageTemplate {...data} />;
};

export default LouisianaVinLookup;
