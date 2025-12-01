import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const GeorgiaLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Georgia License Plate Lookup - Check GA Stolen Vehicle by Plate"
      metaDescription="Georgia license plate lookup to verify if a vehicle is stolen. Free GA license plate search from Georgia DMV. Instant results."
      h1="Georgia License Plate Lookup - Check GA Vehicles"
      itemType="Vehicle"
      keywords={['georgia license plate lookup', 'GA license plate search', 'atlanta vehicle check']}
      content={{
        intro: "Verify Georgia vehicles in 3 seconds. Free Georgia license plate lookup. Check vehicles in Atlanta, Savannah, Augusta.",
        whatIs: "Georgia license plate lookup verifies if vehicle is stolen in GA.",
        howItWorks: "Query Georgia DMV to resolve GA plate to VIN.",
        whyCheck: "Screen vehicles in Atlanta and Georgia markets.",
        benefits: ["GA vehicle screening", "Atlanta coverage", "Free lookup"],
        process: ["Record GA plate", "Enter tool", "Review"],
        faqs: [{question: "Check GA stolen car?", answer: "Yes, initial screening. Verify VIN."}]
      }}
    />
  );
};

export default GeorgiaLicensePlateLookupPage;