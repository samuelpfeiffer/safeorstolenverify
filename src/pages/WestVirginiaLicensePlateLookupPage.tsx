import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const WestVirginiaLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="West Virginia License Plate Lookup - Check WV Stolen Vehicle"
      metaDescription="West Virginia license plate lookup. Free WV plate search."
      h1="West Virginia License Plate Lookup"
      itemType="Vehicle"
      keywords={['west virginia license plate lookup', 'WV plate search']}
      content={{
        intro: "Verify West Virginia vehicles.",
        whatIs: "WV plate lookup.",
        howItWorks: "Query WV DMV.",
        whyCheck: "Screen WV vehicles.",
        benefits: ["Free"],
        process: ["Record WV plate"],
        faqs: [{question: "Check WV?", answer: "Yes."}]
      }}
    />
  );
};

export default WestVirginiaLicensePlateLookupPage;
