import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const TennesseeVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.tennessee;
  return <StateVinPageTemplate {...data} />;
};

export default TennesseeVinLookup;
