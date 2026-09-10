import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { DC_VIN_DATA } from '@/data/districtOfColumbiaVinData';

const WashingtonDcVinLookup = () => <StateVinPageTemplate {...DC_VIN_DATA} />;

export default WashingtonDcVinLookup;
