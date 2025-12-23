import { MarketplaceLandingTemplate } from '@/components/landing/MarketplaceLandingTemplate';

const LetgoStolenCheck = () => {
  return (
    <MarketplaceLandingTemplate
      title="Letgo/OfferUp Stolen Item Check - Verify Before Meeting | SafeOrStolen"
      metaDescription="Check if items on Letgo (now OfferUp) are stolen before buying. Free IMEI and serial number verification for phones, electronics, vehicles."
      h1="Check Letgo/OfferUp Items Before Buying"
      keywords={[
        'letgo stolen check',
        'offerup stolen verification',
        'letgo phone check',
        'offerup imei check',
        'letgo scam protection',
        'verify offerup items',
        'letgo electronics check',
        'offerup car verification'
      ]}
      canonical="/letgo-stolen-check"
      marketplaceName="Letgo/OfferUp"
      heroSubtitle="Letgo merged with OfferUp - but stolen goods still appear. Before meeting a seller, verify the item's serial number against stolen databases. Free instant check."
      problemStats={[
        {
          title: "Stolen Phones",
          description: "iPhones and Android devices are commonly stolen and quickly listed on local marketplaces like OfferUp."
        },
        {
          title: "Vehicle Scams",
          description: "Cars, motorcycles, and ATVs with stolen or cloned VINs appear on local selling apps."
        },
        {
          title: "Electronics & Tools",
          description: "Power tools, gaming consoles, and electronics stolen from homes and job sites end up on Letgo/OfferUp."
        }
      ]}
      redFlags={[
        { title: "Meet in Private Location", description: "Legitimate sellers meet in public places" },
        { title: "Cash Only, No Questions", description: "Avoiding any documentation is suspicious" },
        { title: "Can't Demonstrate Item Works", description: "Phone is off, car won't start, etc." },
        { title: "Story Doesn't Add Up", description: "Vague explanations about why selling" },
        { title: "Low Price for Quick Sale", description: "Stolen items are underpriced for fast cash" },
        { title: "New Account, No History", description: "Created just to sell the stolen item" }
      ]}
      howItWorksSteps={[
        "Ask for IMEI/VIN/serial before meeting",
        "Verify with SafeOrStolen for free",
        "Meet in public police station parking lot",
        "Re-verify the number on the actual item matches"
      ]}
      faqs={[
        {
          question: "Is Letgo the same as OfferUp?",
          answer: "Yes, Letgo merged with OfferUp in 2020. The same safety precautions apply - always verify items before purchasing."
        },
        {
          question: "Should I verify before meeting the seller?",
          answer: "Absolutely! Ask for the serial number before you meet. This saves time and ensures you're not wasting a trip on stolen goods."
        },
        {
          question: "What if the seller won't provide a serial number?",
          answer: "This is a major red flag. Legitimate sellers have nothing to hide and will provide identifiers. Walk away if they refuse."
        },
        {
          question: "Where should I meet for local sales?",
          answer: "Many police stations have designated safe exchange zones in their parking lots. Well-lit, recorded public areas are safest."
        }
      ]}
      ctaTitle="Stay Safe on Local Marketplaces"
      ctaDescription="Verify any item's serial number before meeting a Letgo/OfferUp seller."
    />
  );
};

export default LetgoStolenCheck;
