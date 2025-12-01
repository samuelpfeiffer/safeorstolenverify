import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const ArkansasLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Arkansas License Plate Lookup - Check AR Stolen Vehicle by Plate"
      metaDescription="Arkansas license plate lookup to verify if a vehicle is stolen. Free AR license plate search from Arkansas DMV and law enforcement databases. Instant results in 3 seconds."
      h1="Arkansas License Plate Lookup - Check AR Vehicles"
      itemType="Vehicle"
      keywords={[
        'arkansas license plate lookup',
        'AR license plate search',
        'check arkansas license plate stolen',
        'arkansas stolen vehicle plate lookup'
      ]}
      content={{
        intro: "Verify Arkansas vehicles using license plate number in 3 seconds. Free Arkansas license plate lookup from Arkansas DMV and law enforcement databases.",
        whatIs: "Arkansas license plate lookup verifies whether a vehicle registered in Arkansas is reported stolen by checking the AR license plate number against Arkansas DMV databases.",
        howItWorks: "Query Arkansas DMV databases to resolve plate to VIN and check theft status. Receive results in 3 seconds.",
        whyCheck: "Screen vehicles quickly in Arkansas markets. Verify seller is Arkansas DMV registered owner.",
        benefits: [
          "Quick Arkansas vehicle screening",
          "Verify Arkansas DMV registered owner",
          "Check Arkansas registration status",
          "Free Arkansas license plate lookup",
          "Instant 3-second results"
        ],
        process: [
          "Record Arkansas license plate number",
          "Enter AR plate into verification tool",
          "Review registered owner and theft status",
          "Verify owner matches seller",
          "Check VIN before purchase"
        ],
        faqs: [
          {
            question: "Can I check if a car is stolen in Arkansas using the license plate?",
            answer: "Yes, for initial screening. Always verify VIN before final purchase."
          }
        ]
      }}
    />
  );
};

export default ArkansasLicensePlateLookupPage;