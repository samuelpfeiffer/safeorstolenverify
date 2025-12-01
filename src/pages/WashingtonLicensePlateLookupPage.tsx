import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const WashingtonLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Washington License Plate Lookup - Check WA Stolen Vehicle"
      metaDescription="Washington license plate lookup. Free WA plate search. Seattle coverage."
      h1="Washington License Plate Lookup"
      itemType="Vehicle"
      keywords={['washington license plate lookup', 'WA plate search', 'seattle vehicle check']}
      content={{
        intro: "Verify Washington vehicles. Seattle coverage.",
        whatIs: "WA plate lookup.",
        howItWorks: "Query WA DMV.",
        whyCheck: "Screen WA vehicles.",
        benefits: ["Free"],
        process: ["Record WA plate"],
        faqs: [{question: "Check WA?", answer: "Yes."}]
      }}
    />
  );
};

export default WashingtonLicensePlateLookupPage;
