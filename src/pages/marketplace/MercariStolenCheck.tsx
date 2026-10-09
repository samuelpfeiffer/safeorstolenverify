import { MarketplaceLandingTemplate } from '@/components/landing/MarketplaceLandingTemplate';

const MercariStolenCheck = () => {
  return (
    <MarketplaceLandingTemplate
      title="Mercari Stolen Item Check - Verify Before Buying | SafeOrStolen"
      metaDescription="Check if a Mercari item is stolen before you buy. Ask the seller for the IMEI or serial, enter it on SafeOrStolen and see theft reports in seconds. 2 free checks."
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
      heroSubtitle="Before you buy a phone, console, camera or watch on Mercari, ask the seller for the IMEI or serial number and check it. SafeOrStolen searches its theft reports and public web results in a few seconds."
      problemStats={[
        {
          title: "Stolen Phones",
          description: "A stolen phone can be blacklisted by the carrier and stop working on networks after you've paid for it."
        },
        {
          title: "Electronics & Gaming",
          description: "Consoles, laptops and cameras are easy to ship and resell, which makes them easy to move after a theft."
        },
        {
          title: "Designer Items",
          description: "Watches and other high-value items with serial numbers can be checked the same way before you pay."
        }
      ]}
      redFlags={[
        { title: "Price Too Good to Be True", description: "A price far below similar listings is a reason to ask where the item came from" },
        { title: "New Account, No Reviews", description: "A brand-new account selling something expensive deserves extra caution" },
        { title: "Stock Photos Only", description: "No real photos of the actual item suggests something to hide" },
        { title: "Won't Provide Serial Numbers", description: "Legitimate sellers can easily provide identifiers" },
        { title: "Rushed Shipping", description: "Pressure to complete sale quickly before item is reported stolen" },
        { title: "No Original Packaging", description: "Missing box, accessories, or receipts may indicate theft" }
      ]}
      howItWorksSteps={[
        "Ask seller for IMEI/serial number before purchasing",
        "Enter the identifier into SafeOrStolen",
        "Read the result in a few seconds, with every source listed",
        "Buy only if the result and the seller's answers add up; walk away if it's reported stolen"
      ]}
      faqs={[
        {
          question: "How do I verify Mercari electronics?",
          answer: "Message the seller through Mercari and ask for the IMEI (phones) or serial number (electronics), plus a photo of it on the device. Enter it at safeorstolen.com/verify before you buy. The first 2 checks are free, and each one is saved to your account with the date."
        },
        {
          question: "Does Mercari check for stolen items?",
          answer: "Mercari has buyer protections for problems like items not as described, but checking a serial number for theft reports is up to you. SafeOrStolen does that in a few seconds from the IMEI or serial."
        },
        {
          question: "What if I already bought a stolen item on Mercari?",
          answer: "Contact Mercari support right away and don't confront the seller. File a police report with the serial number, the listing and your messages. Ask Mercari whether the purchase qualifies for a refund under its policies."
        },
        {
          question: "Can I return stolen items on Mercari?",
          answer: "Mercari's return policy may apply, but if the item is stolen, it may be confiscated by authorities. Always verify before buying to avoid this situation."
        }
      ]}
      ctaTitle="Shop Mercari Safely"
      ctaDescription="Check the IMEI or serial before your next Mercari purchase. 2 free checks, no credit card."
    />
  );
};

export default MercariStolenCheck;
