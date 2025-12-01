import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const NewJerseyLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="New Jersey License Plate Lookup - Check NJ Stolen Vehicle"
      metaDescription="New Jersey license plate lookup. Free NJ plate search."
      h1="New Jersey License Plate Lookup"
      itemType="Vehicle"
      keywords={['new jersey license plate lookup', 'NJ plate search']}
      content={{
        intro: "Verify New Jersey vehicles.",
        whatIs: "NJ plate lookup.",
        howItWorks: "Query NJ DMV.",
        whyCheck: "Screen NJ vehicles.",
        benefits: ["Free"],
        process: ["Record NJ plate"],
        faqs: [{question: "Check NJ?", answer: "Yes."}]
      }}
    />
  );
};

export default NewJerseyLicensePlateLookupPage;
