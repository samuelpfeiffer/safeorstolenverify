import { MarketplaceLandingTemplate } from '@/components/landing/MarketplaceLandingTemplate';

const PoshmarkStolenCheck = () => {
  return (
    <MarketplaceLandingTemplate
      title="Poshmark Stolen Item Check - Verify Designer Goods | SafeOrStolen"
      metaDescription="Check if luxury items on Poshmark are stolen. Verify watches, jewelry, and designer goods before buying. Free serial number verification."
      h1="Verify Poshmark Luxury Items Aren't Stolen"
      keywords={[
        'poshmark stolen check',
        'poshmark luxury verification',
        'poshmark watch check',
        'poshmark jewelry stolen',
        'verify poshmark items',
        'poshmark authentication',
        'poshmark designer verification',
        'poshmark scam check'
      ]}
      canonical="/poshmark-stolen-check"
      marketplaceName="Poshmark"
      heroSubtitle="Luxury watches, jewelry, and designer items on Poshmark can be stolen property. Verify serial numbers before buying high-value items. Free instant check."
      problemStats={[
        {
          title: "Stolen Watches",
          description: "Rolex, Omega, and luxury watches stolen from homes often appear on Poshmark at suspicious prices."
        },
        {
          title: "Designer Jewelry",
          description: "High-end jewelry and diamonds are frequently stolen and resold on fashion marketplaces."
        },
        {
          title: "Premium Electronics",
          description: "Apple Watches, AirPods Max, and designer tech items are theft targets sold on Poshmark."
        }
      ]}
      redFlags={[
        { title: "Missing Paperwork", description: "Luxury items without certificates, boxes, or receipts" },
        { title: "Unclear Provenance", description: "Seller can't explain how they acquired the item" },
        { title: "Prices Way Below Retail", description: "30%+ discount on current-model luxury goods" },
        { title: "Won't Show Serial Numbers", description: "Legitimate sellers document their items" },
        { title: "Multiple Luxury Items", description: "New seller with many high-end pieces is suspicious" },
        { title: "Pressure to Buy Quickly", description: "Claims of other buyers or ending sale soon" }
      ]}
      howItWorksSteps={[
        "Request serial number from Poshmark seller",
        "Check luxury watches and jewelry inscriptions",
        "Verify against stolen property databases",
        "Purchase confidently or report suspicious listings"
      ]}
      faqs={[
        {
          question: "Does Poshmark authenticate items?",
          answer: "Poshmark Authenticate is available for some luxury items, but it doesn't check against stolen property databases. You should verify separately."
        },
        {
          question: "How do I verify Rolex on Poshmark?",
          answer: "Request the Rolex serial number (between the lugs or on warranty card). Enter it into SafeOrStolen to check The Watch Register and stolen databases."
        },
        {
          question: "What if a Poshmark item is stolen?",
          answer: "Don't complete the purchase. Report the listing to Poshmark and consider notifying police. The original owner may be searching for their item."
        },
        {
          question: "Can jewelry be verified?",
          answer: "Yes, if it has identifying marks. GIA-certified diamonds have laser inscriptions. Luxury watches have serial numbers. Check any available identifiers."
        }
      ]}
      ctaTitle="Verify Poshmark Luxury Items"
      ctaDescription="Protect yourself from stolen goods with a free verification before purchasing."
    />
  );
};

export default PoshmarkStolenCheck;
