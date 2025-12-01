import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const HawaiiLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Hawaii License Plate Lookup - Check HI Stolen Vehicle by Plate"
      metaDescription="Hawaii license plate lookup to verify if a vehicle is stolen. Free HI license plate search. Instant results."
      h1="Hawaii License Plate Lookup - Check HI Vehicles"
      itemType="Vehicle"
      keywords={['hawaii license plate lookup', 'HI license plate search']}
      content={{
        intro: "Verify Hawaii vehicles in 3 seconds. Free Hawaii license plate lookup.",
        whatIs: "Hawaii license plate lookup verifies if vehicle is stolen.",
        howItWorks: "Query HI DMV to resolve plate to VIN.",
        whyCheck: "Screen Hawaii vehicles.",
        benefits: ["HI vehicle screening", "Free lookup"],
        process: ["Record HI plate", "Enter tool", "Review"],
        faqs: [{question: "Check HI stolen car?", answer: "Yes. Verify VIN."}]
      }}
    />
  );
};

export default HawaiiLicensePlateLookupPage;