import { Navigate } from 'react-router-dom';
import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';
import { COMPLETE_STATE_VIN_DATA } from '@/data/completeStateVinData';

interface DynamicStateVinPageProps {
  stateKey: string;
}

const DynamicStateVinPage = ({ stateKey }: DynamicStateVinPageProps) => {
  const stateData = COMPLETE_STATE_VIN_DATA[stateKey];
  
  if (!stateData) {
    return <Navigate to="/vin-checker" replace />;
  }
  
  const { state, stateCode, slug, title, metaDescription, topCities, dmvLink, content, faqs } = stateData;
  
  return (
    <StateVinPageTemplate
      state={state}
      stateCode={stateCode}
      title={title || `${state} VIN Lookup - Free ${stateCode} Stolen Vehicle Check | SafeOrStolen`}
      metaDescription={metaDescription || `Free ${state} VIN lookup. Check if a ${stateCode} vehicle is stolen from DMV and law enforcement databases. Instant verification.`}
      topCities={topCities || []}
      dmvLink={dmvLink || `https://www.${stateCode.toLowerCase()}.gov/dmv`}
      content={content || {
        intro: `Verify any ${state} vehicle's VIN against available databases before buying.`,
        whyCheck: `${state} has vehicle theft concerns. Always verify VIN records before purchase.`,
        localLaws: `${state} laws prohibit possession of stolen property including vehicles.`
      }}
      faqs={faqs || [
        {
          question: `How do I check if a ${state} car is stolen?`,
          answer: `Use SafeOrStolen's free VIN checker to search available databases and verify the title.`
        }
      ]}
      slug={slug || `${state.toLowerCase().replace(/\s+/g, '-')}-vin-lookup`}
    />
  );
};

export default DynamicStateVinPage;
