import { MarketplaceLandingTemplate } from '@/components/landing/MarketplaceLandingTemplate';

const MercariStolenCheck = () => {
  return (
    <MarketplaceLandingTemplate
      title="Mercari Stolen Item Check - Verify Before Buying | SafeOrStolen"
      metaDescription="Check if items on Mercari are stolen before buying. Free IMEI, VIN, and serial number verification. Protect yourself from stolen goods on Mercari."
      h1="Check if Mercari Items Are Stolen"
      keywords={[
        'mercari stolen check',
        'verify mercari item',
        'mercari scam protection',
        'mercari phone check',
        'mercari electronics verification',
        'is mercari safe',
        'mercari buyer protection',
        'mercari stolen goods'
      ]}
      canonical="/mercari-stolen-check"
      marketplaceName="Mercari"
      heroSubtitle="Before you buy that electronics, phone, or luxury item on Mercari, verify it isn't stolen. Our free tool checks against SafeOrStolen reports, public web results, and AI analysis."
      problemStats={[
        {
          title: "Stolen Phones",
          description: "iPhones and Android devices are frequently listed on Mercari after being stolen. A blacklisted phone is worthless."
        },
        {
          title: "Electronics & Gaming",
          description: "PS5s, laptops, and cameras stolen from homes and stores often end up on Mercari for quick cash."
        },
        {
          title: "Designer Items",
          description: "Stolen luxury watches, jewelry, and designer goods are sold on Mercari to unsuspecting buyers."
        }
      ]}
      redFlags={[
        { title: "Price Too Good to Be True", description: "Stolen items are often priced 30-50% below market for quick sales" },
        { title: "New Account, No Reviews", description: "Thieves create fresh accounts to avoid detection" },
        { title: "Stock Photos Only", description: "No real photos of the actual item suggests something to hide" },
        { title: "Won't Provide Serial Numbers", description: "Legitimate sellers can easily provide identifiers" },
        { title: "Rushed Shipping", description: "Pressure to complete sale quickly before item is reported stolen" },
        { title: "No Original Packaging", description: "Missing box, accessories, or receipts may indicate theft" }
      ]}
      howItWorksSteps={[
        "Ask seller for IMEI/serial number before purchasing",
        "Enter the identifier into SafeOrStolen",
        "Get instant results from multiple sources",
        "Buy with confidence or walk away if stolen"
      ]}
      faqs={[
        {
          question: "How do I verify Mercari electronics?",
          answer: "Message the seller requesting the IMEI (for phones) or serial number (for electronics). Enter it into SafeOrStolen's free verification tool before purchasing."
        },
        {
          question: "Does Mercari check for stolen items?",
          answer: "Mercari has some protections, but they don't verify serial numbers against stolen databases. You need to verify yourself using SafeOrStolen."
        },
        {
          question: "What if I already bought a stolen item on Mercari?",
          answer: "Contact Mercari support immediately. Do not confront the seller. File a police report. You may be able to get a refund through Mercari's protection program."
        },
        {
          question: "Can I return stolen items on Mercari?",
          answer: "Mercari's return policy may apply, but if the item is stolen, it may be confiscated by authorities. Always verify before buying to avoid this situation."
        }
      ]}
      ctaTitle="Shop Mercari Safely"
      ctaDescription="Protect yourself with a free verification before your next Mercari purchase."
    />
  );
};

export default MercariStolenCheck;
