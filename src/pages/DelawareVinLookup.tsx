import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

const DelawareVinLookup = () => {
  const data = COMPLETE_STATE_VIN_DATA.delaware;
  return <StateVinPageTemplate {...data} />;
};

export default DelawareVinLookup;
