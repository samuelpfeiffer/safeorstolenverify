import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const SouthDakotaLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="South Dakota License Plate Lookup - Check SD Stolen Vehicle"
      metaDescription="South Dakota license plate lookup. Free SD plate search."
      h1="South Dakota License Plate Lookup"
      itemType="Vehicle"
      keywords={['south dakota license plate lookup', 'SD plate search']}
      content={{
        intro: "Verify South Dakota vehicles.",
        whatIs: "SD plate lookup.",
        howItWorks: "Query SD DMV.",
        whyCheck: "Screen SD vehicles.",
        benefits: ["Free"],
        process: ["Record SD plate"],
        faqs: [{question: "Check SD?", answer: "Yes."}]
      }}
    />
  );
};

export default SouthDakotaLicensePlateLookupPage;
