import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const DelawareLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Delaware License Plate Lookup - Check DE Stolen Vehicle by Plate"
      metaDescription="Delaware license plate lookup to verify if a vehicle is stolen. Free DE license plate search from Delaware DMV. Instant results."
      h1="Delaware License Plate Lookup - Check DE Vehicles"
      itemType="Vehicle"
      keywords={['delaware license plate lookup', 'DE license plate search']}
      content={{
        intro: "Verify Delaware vehicles using license plate in 3 seconds. Free Delaware license plate lookup.",
        whatIs: "Delaware license plate lookup verifies if vehicle is stolen.",
        howItWorks: "Query DE DMV to resolve plate to VIN.",
        whyCheck: "Screen Delaware vehicles quickly.",
        benefits: ["DE vehicle screening", "Free lookup"],
        process: ["Record DE plate", "Enter tool", "Review"],
        faqs: [{question: "Check DE stolen car?", answer: "Yes. Verify VIN too."}]
      }}
    />
  );
};

export default DelawareLicensePlateLookupPage;