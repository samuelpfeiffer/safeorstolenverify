import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const RhodeIslandVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.rhodeisland;
  return <StateVinPageTemplate {...data} />;
};

export default RhodeIslandVinLookup;
