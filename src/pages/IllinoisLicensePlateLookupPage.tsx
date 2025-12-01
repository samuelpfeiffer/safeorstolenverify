import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const IllinoisLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Illinois License Plate Lookup - Check IL Stolen Vehicle by Plate"
      metaDescription="Illinois license plate lookup to verify if a vehicle is stolen. Free IL license plate search. Check Chicago vehicles."
      h1="Illinois License Plate Lookup - Check IL Vehicles"
      itemType="Vehicle"
      keywords={['illinois license plate lookup', 'IL license plate search', 'chicago vehicle check']}
      content={{
        intro: "Verify Illinois vehicles in 3 seconds. Free Illinois license plate lookup. Check vehicles in Chicago, Springfield.",
        whatIs: "Illinois license plate lookup verifies if vehicle is stolen in IL.",
        howItWorks: "Query IL DMV to resolve plate to VIN.",
        whyCheck: "Screen vehicles in Chicago and Illinois markets.",
        benefits: ["IL vehicle screening", "Chicago coverage", "Free lookup"],
        process: ["Record IL plate", "Enter tool", "Review"],
        faqs: [{question: "Check IL stolen car?", answer: "Yes. Verify VIN."}]
      }}
    />
  );
};

export default IllinoisLicensePlateLookupPage;