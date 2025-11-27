import { StateVinPageTemplate } from '@/components/seo/StateVinPageTemplate';

const CaliforniaVinLookup = () => {
  return (
    <StateVinPageTemplate
      state="California"
      stateCode="CA"
      title="California VIN Lookup - Free CA Stolen Vehicle Check | SafeOrStolen"
      metaDescription="Free California VIN lookup. Check if a CA vehicle is stolen from DMV and law enforcement databases. Instant verification for cars, trucks, and motorcycles."
      theftStats={{
        vehiclesStolen: "173,000+",
        recoveryRate: "55%",
        topCities: ["Los Angeles", "Oakland", "San Francisco"]
      }}
      dmvLink="https://www.dmv.ca.gov"
      content={{
        intro: "California has the highest vehicle theft rate in America with over 173,000 vehicles stolen annually. Verify any CA vehicle's VIN against DMV and law enforcement databases before buying.",
        whyCheck: "California leads the nation in vehicle theft, particularly in Los Angeles, Oakland, and San Francisco metro areas. Stolen vehicles are frequently 'title washed' through other states and resold in California. Always verify VIN against NICB and California DMV records before purchase.",
        localLaws: "Under California Penal Code 496, possession of stolen property (including vehicles) is a crime punishable by up to 1 year in jail even if you didn't know it was stolen. California DMV requires thorough title verification and will reject stolen vehicle registrations."
      }}
      faqs={[
        {
          question: "How do I check if a California car is stolen?",
          answer: "Use SafeOrStolen's free VIN checker to search NICB, California DMV, and law enforcement databases. Also verify the California title certificate is genuine and matches the VIN on the vehicle."
        },
        {
          question: "What is California's title washing problem?",
          answer: "Thieves steal California vehicles, transport them out of state, obtain clean titles in states with lax requirements, then bring them back to California to sell. Always check NMVTIS (National Motor Vehicle Title Information System) to see complete title history across all states."
        }
      ]}
    />
  );
};

export default CaliforniaVinLookup;
