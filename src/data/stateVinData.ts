export interface StateVinData {
  state: string;
  stateCode: string;
  title: string;
  metaDescription: string;
  theftStats: {
    vehiclesStolen: string;
    recoveryRate: string;
    topCities: string[];
  };
  dmvLink: string;
  content: {
    intro: string;
    whyCheck: string;
    localLaws: string;
  };
  faqs: { question: string; answer: string }[];
}

export const STATE_VIN_DATA: Record<string, StateVinData> = {
  california: {
    state: "California",
    stateCode: "CA",
    title: "California VIN Lookup - Free CA Stolen Vehicle Check | SafeOrStolen",
    metaDescription: "Free California VIN lookup. Check if a CA vehicle is stolen from DMV and law enforcement databases. Instant verification for cars, trucks, and motorcycles.",
    theftStats: { vehiclesStolen: "173,000+", recoveryRate: "55%", topCities: ["Los Angeles", "Oakland", "San Francisco"] },
    dmvLink: "https://www.dmv.ca.gov",
    content: {
      intro: "California has the highest vehicle theft rate in America with over 173,000 vehicles stolen annually. Verify any CA vehicle's VIN against DMV and law enforcement databases before buying.",
      whyCheck: "California leads the nation in vehicle theft, particularly in Los Angeles, Oakland, and San Francisco metro areas. Stolen vehicles are frequently 'title washed' through other states and resold in California. Always verify VIN against NICB and California DMV records before purchase.",
      localLaws: "Under California Penal Code 496, possession of stolen property (including vehicles) is a crime punishable by up to 1 year in jail even if you didn't know it was stolen. California DMV requires thorough title verification and will reject stolen vehicle registrations."
    },
    faqs: [
      { question: "How do I check if a California car is stolen?", answer: "Use SafeOrStolen's free VIN checker to search NICB, California DMV, and law enforcement databases. Also verify the California title certificate is genuine and matches the VIN on the vehicle." },
      { question: "What is California's title washing problem?", answer: "Thieves steal California vehicles, transport them out of state, obtain clean titles in states with lax requirements, then bring them back to California to sell. Always check NMVTIS (National Motor Vehicle Title Information System) to see complete title history across all states." }
    ]
  },
  texas: {
    state: "Texas",
    stateCode: "TX",
    title: "Texas VIN Lookup - Free TX Stolen Vehicle Check | SafeOrStolen",
    metaDescription: "Free Texas VIN lookup. Check if a TX vehicle is stolen from DMV and law enforcement databases. Instant verification for all Texas vehicles.",
    theftStats: { vehiclesStolen: "85,000+", recoveryRate: "48%", topCities: ["Houston", "Dallas", "San Antonio"] },
    dmvLink: "https://www.txdmv.gov",
    content: {
      intro: "Texas reports over 85,000 vehicle thefts annually, with Houston, Dallas, and San Antonio being theft hotspots. Verify any Texas vehicle's VIN before purchase.",
      whyCheck: "Texas's massive size and border location make it a prime target for vehicle theft rings. Stolen vehicles are often transported to Mexico or other states. Texas DMV requires thorough verification.",
      localLaws: "Under Texas Penal Code § 31.03, theft of property (including vehicles) is a felony with penalties up to 10 years in prison. Possession of stolen vehicles carries severe penalties even for unknowing buyers."
    },
    faqs: [
      { question: "How do I verify a Texas title?", answer: "Check the Texas DMV website for title verification, use SafeOrStolen's VIN checker, and physically inspect the title certificate for security features like watermarks and holograms." },
      { question: "What should I know about buying cars in Texas?", answer: "Texas requires a VIN inspection for out-of-state vehicles. Always verify the VIN matches the title, check for liens, and use SafeOrStolen to search stolen vehicle databases before purchase." }
    ]
  },
  florida: {
    state: "Florida",
    stateCode: "FL",
    title: "Florida VIN Lookup - Free FL Stolen Vehicle Check | SafeOrStolen",
    metaDescription: "Free Florida VIN lookup. Check if a FL vehicle is stolen from DMV and law enforcement databases. Verify cars, trucks, boats, and RVs.",
    theftStats: { vehiclesStolen: "42,000+", recoveryRate: "52%", topCities: ["Miami", "Jacksonville", "Tampa"] },
    dmvLink: "https://www.flhsmv.gov",
    content: {
      intro: "Florida experiences over 42,000 vehicle thefts annually, with Miami leading in theft rates. Verify any Florida vehicle's VIN against DHSMV and law enforcement databases.",
      whyCheck: "Florida's extensive coastline makes it a hub for stolen vehicle export to Caribbean and Latin America. Flood-damaged vehicles from hurricanes are also frequently title-washed and resold. Always verify complete history.",
      localLaws: "Under Florida Statutes § 812.014, dealing in stolen property is a felony. Possession of a stolen vehicle, even unknowingly, can result in vehicle confiscation and criminal charges."
    },
    faqs: [
      { question: "How do I check for flood damage in Florida vehicles?", answer: "Use SafeOrStolen's VIN checker which searches insurance total loss databases. Also check NICB's VINCheck for flood/salvage history, especially after hurricane seasons." },
      { question: "What is Florida's title washing problem?", answer: "Flood-damaged vehicles from hurricanes are often title-washed through other states and resold in Florida with clean titles. Always check NMVTIS for complete title history across all states." }
    ]
  },
  newyork: {
    state: "New York",
    stateCode: "NY",
    title: "New York VIN Lookup - Free NY Stolen Vehicle Check | SafeOrStolen",
    metaDescription: "Free New York VIN lookup. Check if a NY vehicle is stolen from DMV and law enforcement databases. Instant NYC and statewide verification.",
    theftStats: { vehiclesStolen: "14,000+", recoveryRate: "62%", topCities: ["New York City", "Buffalo", "Rochester"] },
    dmvLink: "https://dmv.ny.gov",
    content: {
      intro: "New York reports over 14,000 vehicle thefts annually, with NYC accounting for the majority. Verify any NY vehicle's VIN before purchase to avoid stolen property.",
      whyCheck: "NYC's dense population and proximity to international ports make it a target for organized vehicle theft rings that export stolen cars overseas. NY DMV has strict verification requirements.",
      localLaws: "Under NY Penal Law § 165.45, criminal possession of stolen property in the first degree (vehicles over $1,000) is a class D felony punishable by up to 7 years in prison."
    },
    faqs: [
      { question: "How strict is NY DMV on title verification?", answer: "New York DMV requires thorough documentation and will reject suspicious titles. They cross-reference NICB and NMVTIS databases. Use SafeOrStolen to pre-verify before attempting registration." },
      { question: "What are common vehicle theft methods in NYC?", answer: "Professional thieves target high-end vehicles using key cloning and signal jamming. Always verify VIN against theft databases, especially for luxury brands like BMW, Mercedes, and Range Rover." }
    ]
  },
  pennsylvania: {
    state: "Pennsylvania",
    stateCode: "PA",
    title: "Pennsylvania VIN Lookup - Free PA Stolen Vehicle Check | SafeOrStolen",
    metaDescription: "Free Pennsylvania VIN lookup. Check if a PA vehicle is stolen from DMV and law enforcement databases. Verify all Pennsylvania vehicles.",
    theftStats: { vehiclesStolen: "11,500+", recoveryRate: "58%", topCities: ["Philadelphia", "Pittsburgh", "Allentown"] },
    dmvLink: "https://www.dmv.pa.gov",
    content: {
      intro: "Pennsylvania experiences over 11,500 vehicle thefts annually, concentrated in Philadelphia and Pittsburgh metro areas. Verify PA vehicle VINs before buying.",
      whyCheck: "Pennsylvania's location between major metropolitan areas makes it a transit point for stolen vehicles moving between states. PA DMV requires verification for all title transfers.",
      localLaws: "Under 18 Pa. C.S. § 3925, receiving stolen property (including vehicles) is a felony. Even unknowing possession can result in vehicle confiscation and prosecution."
    },
    faqs: [
      { question: "How do I verify a Pennsylvania title?", answer: "Check PA DMV records, use SafeOrStolen's VIN checker for theft verification, and inspect the title for security features. Pennsylvania titles have distinctive watermarks and security threads." },
      { question: "What should I know about Pennsylvania salvage titles?", answer: "Pennsylvania requires salvage vehicles to pass safety inspections before receiving rebuilt titles. Always check vehicle history using SafeOrStolen and NICB to verify salvage status." }
    ]
  }
};
