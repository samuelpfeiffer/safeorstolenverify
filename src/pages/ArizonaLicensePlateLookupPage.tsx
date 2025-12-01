import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const ArizonaLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Arizona License Plate Lookup - Check AZ Stolen Vehicle by Plate"
      metaDescription="Arizona license plate lookup to verify if a vehicle is stolen. Free AZ license plate search from ADOT and law enforcement databases. Instant results in 3 seconds."
      h1="Arizona License Plate Lookup - Check AZ Vehicles"
      itemType="Vehicle"
      keywords={[
        'arizona license plate lookup',
        'AZ license plate search',
        'check arizona license plate stolen',
        'arizona stolen vehicle plate lookup',
        'verify AZ plate number',
        'arizona dmv plate lookup'
      ]}
      content={{
        intro: "Verify Arizona vehicles using license plate number in 3 seconds. Free Arizona license plate lookup from ADOT (Arizona Department of Transportation) and law enforcement databases. Check if cars, trucks, or motorcycles with AZ plates are stolen before buying.",
        whatIs: "Arizona license plate lookup verifies whether a vehicle registered in Arizona is reported stolen by checking the AZ license plate number against ADOT registration databases and law enforcement stolen vehicle records.",
        howItWorks: "Our Arizona license plate lookup system queries ADOT databases to resolve the plate number to the vehicle's VIN and registration information. Within 3 seconds, receive theft status and registered owner information.",
        whyCheck: "Arizona license plate lookups help screen vehicles quickly in Phoenix, Tucson, Mesa markets. Verify seller is ADOT registered owner, detect stolen plates, check registration status.",
        benefits: [
          "Quick Arizona vehicle screening using AZ license plate",
          "Verify seller is the ADOT registered owner",
          "Check Arizona registration status",
          "Resolve AZ plate to VIN for full verification",
          "Check vehicles from Phoenix, Tucson, Mesa sellers",
          "Free Arizona license plate lookup - 2 free searches",
          "Instant 3-second results from ADOT databases"
        ],
        process: [
          "Record the Arizona license plate number",
          "Note the vehicle's details for comparison",
          "Enter the AZ plate number into verification tool",
          "Review Arizona registered owner and theft status",
          "Verify ADOT registered owner matches seller",
          "ALWAYS verify VIN before final purchase"
        ],
        faqs: [
          {
            question: "Can I check if a car is stolen in Arizona using just the license plate?",
            answer: "Yes, for initial screening, but always verify VIN before purchase. Arizona license plates can be swapped."
          },
          {
            question: "What information can I get from an Arizona license plate lookup?",
            answer: "ADOT registered owner name, vehicle make/model/year, VIN, Arizona registration status, and theft status."
          },
          {
            question: "Is Arizona license plate lookup really free?",
            answer: "Yes, SafeOrStolen offers 2 free Arizona license plate lookups."
          }
        ]
      }}
    />
  );
};

export default ArizonaLicensePlateLookupPage;