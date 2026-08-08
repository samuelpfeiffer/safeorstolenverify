import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const ArizonaLicensePlateLookupPage = () => {
  return (
    <ItemLandingPageTemplate
      title="TheftAZ Alternative — Free Arizona Stolen Property & License Plate Search | SafeOrStolen"
      metaDescription="Search Arizona stolen property and vehicles using TheftAZ databases plus NICB, stolen property reports from all 50 states, and Arizona MVD records. Free results in 3 seconds. Check any AZ license plate for theft status."
      h1="Free Arizona License Plate Lookup — TheftAZ Alternative"
      itemType="Vehicle"
      keywords={[
        'arizona license plate lookup',
        'AZ license plate search',
        'arizona stolen vehicle check',
        'theftaz lookup',
        'free arizona plate search',
        'check arizona license plate'
      ]}
      content={{
        intro: "Search Arizona's TheftAZ database and 100+ other sources to verify any AZ vehicle. Free Arizona license plate lookup for buyers AND sellers. Check stolen status in 3 seconds before any used car purchase.",
        
        whatIs: "Arizona license plate lookup verifies whether a vehicle registered in Arizona is reported stolen by checking the AZ license plate number against TheftAZ (Arizona Attorney General's stolen property database), NICB, NHTSA vehicle records, and police databases. Perfect for anyone buying or selling a used vehicle in Phoenix, Tucson, Mesa, Chandler, or anywhere in Arizona.",
        
        howItWorks: "Our Arizona license plate lookup searches multiple databases simultaneously: (1) TheftAZ - the Arizona Attorney General's official stolen property database, (2) NICB (National Insurance Crime Bureau) VINCheck, (3) Arizona MVD vehicle registration records, (4) stolen property reports from all 50 states, (5) Local law enforcement records statewide. You receive comprehensive results in 3 seconds showing theft status, registration validity, and any red flags.",
        
        whyCheck: "Arizona has one of the highest vehicle theft rates in the country, particularly in Phoenix and Tucson metro areas. Vehicles stolen in California often end up in Arizona due to proximity. The Arizona-Mexico border creates additional stolen vehicle trafficking. TheftAZ tracks stolen property across Arizona - always verify before buying a used vehicle in the Grand Canyon State.",
        
        benefits: [
          "Search TheftAZ Arizona stolen property database",
          "Check NICB and 100+ other databases",
          "Verify Arizona MVD registration status",
          "Phoenix, Tucson, Mesa, Chandler coverage",
          "Free Arizona license plate lookup",
          "Instant 3-second results",
          "For buyers AND sellers",
          "Mobile app available for on-the-go checks"
        ],
        
        process: [
          "Record the Arizona license plate number from the vehicle",
          "Enter AZ plate into our verification tool",
          "Review TheftAZ, NICB, and DMV results",
          "Check for any theft reports or red flags",
          "Verify VIN if you're ready to purchase"
        ],
        
        faqs: [
          {
            question: "What is TheftAZ and how does SafeOrStolen use it?",
 answer: "TheftAZ is the Arizona Attorney General's official stolen property database. It tracks stolen vehicles, firearms, electronics, and tools reported in Arizona. SafeOrStolen searches TheftAZ as one of 100+ databases we check, giving you comprehensive stolen property verification for Arizona and nationwide."
          },
          {
            question: "Can I check if a car is stolen in Phoenix using the license plate?",
            answer: "Yes, our Arizona license plate lookup works statewide including Phoenix, Tucson, Mesa, Chandler, Scottsdale, and all Arizona cities. Enter the AZ plate and we'll search TheftAZ, NICB, and other databases instantly."
          },
          {
            question: "Should I also run a VIN check for Arizona vehicles?",
            answer: "Yes, we recommend running both a license plate lookup AND a VIN check before purchasing. License plate lookup provides quick screening, while VIN check gives you complete history including accidents, title brands, and odometer fraud. Use our free VIN checker at safeorstolen.com/check-car."
          }
        ]
      }}
    />
  );
};

export default ArizonaLicensePlateLookupPage;
