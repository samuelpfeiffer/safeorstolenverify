import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const RhodeIslandLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Rhode Island License Plate Lookup - Check RI Stolen Vehicle"
      metaDescription="Rhode Island license plate lookup. Free RI plate search."
      h1="Rhode Island License Plate Lookup"
      itemType="Vehicle"
      keywords={['rhode island license plate lookup', 'RI plate search']}
      content={{
        intro: "Verify Rhode Island vehicles.",
        whatIs: "RI plate lookup.",
        howItWorks: "Query RI DMV.",
        whyCheck: "Screen RI vehicles.",
        benefits: ["Free"],
        process: ["Record RI plate"],
        faqs: [{question: "Check RI?", answer: "Yes."}]
      }}
    />
  );
};

export default RhodeIslandLicensePlateLookupPage;
