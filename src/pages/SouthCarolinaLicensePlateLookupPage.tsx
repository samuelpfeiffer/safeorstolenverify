import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const SouthCarolinaLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="South Carolina License Plate Lookup - Check SC Stolen Vehicle"
      metaDescription="South Carolina license plate lookup. Free SC plate search."
      h1="South Carolina License Plate Lookup"
      itemType="Vehicle"
      keywords={['south carolina license plate lookup', 'SC plate search']}
      content={{
        intro: "Verify South Carolina vehicles.",
        whatIs: "SC plate lookup.",
        howItWorks: "Query SC DMV.",
        whyCheck: "Screen SC vehicles.",
        benefits: ["Free"],
        process: ["Record SC plate"],
        faqs: [{question: "Check SC?", answer: "Yes."}]
      }}
    />
  );
};

export default SouthCarolinaLicensePlateLookupPage;
