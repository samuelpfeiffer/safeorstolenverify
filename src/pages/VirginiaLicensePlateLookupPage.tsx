import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const VirginiaLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Virginia License Plate Lookup - Check VA Stolen Vehicle"
      metaDescription="Virginia license plate lookup. Free VA plate search."
      h1="Virginia License Plate Lookup"
      itemType="Vehicle"
      keywords={['virginia license plate lookup', 'VA plate search']}
      content={{
        intro: "Verify Virginia vehicles.",
        whatIs: "VA plate lookup.",
        howItWorks: "Query VA DMV.",
        whyCheck: "Screen VA vehicles.",
        benefits: ["Free"],
        process: ["Record VA plate"],
        faqs: [{question: "Check VA?", answer: "Yes."}]
      }}
    />
  );
};

export default VirginiaLicensePlateLookupPage;
