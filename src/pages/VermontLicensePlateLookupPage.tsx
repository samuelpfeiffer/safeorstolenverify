import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const VermontLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Vermont License Plate Lookup - Check VT Stolen Vehicle"
      metaDescription="Vermont license plate lookup. Free VT plate search."
      h1="Vermont License Plate Lookup"
      itemType="Vehicle"
      keywords={['vermont license plate lookup', 'VT plate search']}
      content={{
        intro: "Verify Vermont vehicles.",
        whatIs: "VT plate lookup.",
        howItWorks: "Query VT DMV.",
        whyCheck: "Screen VT vehicles.",
        benefits: ["Free"],
        process: ["Record VT plate"],
        faqs: [{question: "Check VT?", answer: "Yes."}]
      }}
    />
  );
};

export default VermontLicensePlateLookupPage;
