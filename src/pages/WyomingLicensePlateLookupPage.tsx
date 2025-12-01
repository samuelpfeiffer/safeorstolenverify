import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const WyomingLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Wyoming License Plate Lookup - Check WY Stolen Vehicle"
      metaDescription="Wyoming license plate lookup. Free WY plate search."
      h1="Wyoming License Plate Lookup"
      itemType="Vehicle"
      keywords={['wyoming license plate lookup', 'WY plate search']}
      content={{
        intro: "Verify Wyoming vehicles.",
        whatIs: "WY plate lookup.",
        howItWorks: "Query WY DMV.",
        whyCheck: "Screen WY vehicles.",
        benefits: ["Free"],
        process: ["Record WY plate"],
        faqs: [{question: "Check WY?", answer: "Yes."}]
      }}
    />
  );
};

export default WyomingLicensePlateLookupPage;
