import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

const CheckPhonePage = () => {
  return (
    <ItemLandingPageTemplate
      title="Check if Phone is Stolen - Free iPhone Android Verify"
      metaDescription="Check if a phone is stolen before buying. Free IMEI verification for iPhone, Samsung, Google Pixel. Search carrier blacklists in 3 seconds. Free check."
      h1="Check if Phone is Stolen Before Buying"
      itemType="Phone"
      keywords={[
        'check if phone stolen',
        'check phone stolen',
        'stolen phone check',
        'verify phone not stolen',
        'iPhone stolen check',
        'Android stolen check',
        'check phone IMEI'
      ]}
      content={{
        intro: "Verify if any smartphone is stolen in 3 seconds. Free IMEI and serial number verification for iPhone, Samsung, Google Pixel, OnePlus, and all phones. Check before buying from Facebook Marketplace, Craigslist, eBay, or any secondhand seller.",
        whatIs: "Checking if a phone is stolen means verifying the device hasn't been reported lost, stolen, or blacklisted by carriers or authorities. Every smartphone has a unique IMEI number (15 digits) and serial number that can be traced across global databases. SafeOrStolen's phone checker instantly searches carrier blacklists (AT&T, Verizon, T-Mobile, Sprint), GSMA Device Registry, law enforcement databases, and user-reported theft databases to determine if a phone is safe to buy. This works for all smartphones: iPhone (all models), Samsung Galaxy, Google Pixel, OnePlus, Motorola, LG, and any device with an IMEI number.",
        howItWorks: "Our phone verification system checks multiple data sources simultaneously. We query the GSMA Device Registry (the global stolen phone database used by carriers worldwide), all major US carrier blacklists, FBI and law enforcement stolen property databases, iCloud/Find My iPhone activation lock status (for iPhones), Google Find My Device status (for Android), insurance claim databases, and user-reported theft registries. Within 3 seconds, you receive a comprehensive report showing: (1) Whether the phone is reported stolen or lost, (2) Carrier lock/blacklist status, (3) Outstanding finance or insurance claims, (4) Activation lock status (iCloud for iPhone, Google for Android), (5) Whether the phone will work on your carrier network.",
        whyCheck: "Buying a stolen phone is a guaranteed way to lose your money and potentially face criminal charges. Here's what happens: (1) The phone can be remotely locked or wiped by the original owner at any time, (2) Carriers will blacklist the phone making it unusable on any US network, (3) Police can confiscate the phone as stolen property with zero compensation, (4) You could face criminal charges for possession of stolen property, (5) You lose your entire purchase price with no legal recourse. In 2024 alone, over 2.4 million smartphones were reported stolen in the United States. Many end up on Facebook Marketplace, Craigslist, OfferUp, and eBay. Scammers target buyers who don't check the IMEI before purchasing. Our free phone checker prevents you from becoming a victim.",
        benefits: [
          "Check iPhone stolen status - all models (iPhone 16, 15, 14, 13, 12, 11, X, 8, 7)",
          "Check Android phones - Samsung Galaxy, Google Pixel, OnePlus, Motorola",
          "Verify IMEI number against carrier blacklists and law enforcement databases",
          "Check iCloud activation lock status on iPhones",
          "Check Google Find My Device lock on Android phones",
          "Instant 3-second verification from multiple databases",
          "Free phone check - 2 free verifications, no credit card required",
          "Works for phones from any country or carrier"
        ],
        process: [
          "Get the IMEI number: Dial *#06# on the phone (works on all phones), OR check Settings > About Phone > IMEI, OR look at the original box, OR check the SIM tray (iPhone)",
          "Verify the IMEI physically on the phone - don't trust just a screenshot or what the seller tells you",
          "Enter the 15-digit IMEI into our verification tool at SafeOrStolen.com/verify",
          "Review the instant report showing theft status, carrier blacklist, and activation locks",
          "For iPhones, also check Activation Lock status at iCloud.com/activationlock",
          "Only buy if the report shows CLEAN status with no red flags"
        ],
        faqs: [
          {
            question: "How do I check if an iPhone is stolen before buying?",
            answer: "To check if an iPhone is stolen: (1) Get the IMEI by dialing *#06# or checking Settings > General > About, (2) Use SafeOrStolen's free IMEI checker to search carrier blacklists and law enforcement databases, (3) Check iCloud Activation Lock status at iCloud.com/activationlock - enter the IMEI or serial number, (4) Ask the seller to sign out of iCloud in front of you (Settings > [Name] > Sign Out), (5) Verify Find My iPhone is turned off. If the phone is activation locked or the seller refuses to sign out, it's likely stolen. Walk away."
          },
          {
            question: "How do I check if a Samsung or Android phone is stolen?",
            answer: "To check if an Android phone is stolen: (1) Get the IMEI by dialing *#06# or checking Settings > About Phone > IMEI, (2) Use SafeOrStolen's free IMEI checker to search carrier blacklists and law enforcement databases, (3) Check if Google Find My Device is enabled - go to Settings > Security > Find My Device. If it's locked to a Google account and the seller can't remove it, the phone is likely stolen, (4) Ask the seller to do a factory reset in front of you - if they can't bypass the Google account lock, walk away, (5) Verify the phone can make calls and access cellular data (not just WiFi)."
          },
          {
            question: "What is an IMEI number and why is it important?",
            answer: "IMEI (International Mobile Equipment Identity) is a unique 15-digit number assigned to every mobile phone. It's like a fingerprint for your phone - no two phones have the same IMEI. The IMEI is critical because: (1) Carriers use it to blacklist stolen phones, (2) Law enforcement uses it to track stolen devices, (3) It's the primary identifier for theft reports, (4) It cannot be easily changed (changing IMEI is illegal). Always verify the IMEI on the physical phone matches what the seller tells you. Scammers may provide fake IMEI numbers or numbers from different phones."
          },
          {
            question: "Can a stolen phone be unlocked or unblacklisted?",
            answer: "No, legitimate carriers will NOT unlock or unblacklist stolen phones. If someone claims they can 'unlock' or 'unblacklist' a stolen phone, they're either lying or involved in illegal activity. Once a phone is reported stolen and blacklisted: (1) It cannot be activated on any major US carrier, (2) It may work temporarily on prepaid carriers, but will eventually be blocked, (3) It may work overseas, but this doesn't make it legal, (4) The original owner can still track and remotely lock it. Anyone offering to 'unblacklist' a phone is scamming you. Walk away immediately."
          },
          {
            question: "What's the difference between blacklisted and stolen?",
            answer: "Blacklisted means the phone's IMEI has been blocked by carriers from working on their networks. This usually happens when a phone is reported stolen, but can also occur for unpaid bills or insurance fraud. Stolen means the phone has been reported to police or databases as stolen property. A phone can be stolen without being blacklisted (owner didn't report it yet), or blacklisted without being legally stolen (unpaid bills). Our checker searches both - you need CLEAN status on both to safely buy."
          },
          {
            question: "How long does a phone check take?",
            answer: "Our phone verification takes only 3 seconds. Simply enter the 15-digit IMEI number, click verify, and receive instant results showing whether the phone is clean, stolen, blacklisted, or has issues. Much faster than checking individual carrier websites or calling customer service."
          },
          {
            question: "Is the phone check really free?",
            answer: "Yes, SafeOrStolen offers 2 free phone checks. This allows you to verify phones before buying without any cost. Additional checks require a paid plan ($9.99/month for unlimited), but our free tier is designed to protect casual buyers purchasing one or two used phones per year."
          },
          {
            question: "What should I do if the phone check shows it's stolen?",
            answer: "If our check shows the phone is reported stolen: (1) Do NOT buy it under any circumstances, (2) Walk away immediately without confronting the seller (they may become aggressive), (3) Report the listing to the platform (Facebook Marketplace, Craigslist, OfferUp), (4) Screenshot the listing and seller information, (5) File an anonymous tip with local police and GSMA at gsma.com/imei, (6) If you already bought it, contact police immediately - you're a victim of fraud, not a criminal."
          }
        ]
      }}
    />
  );
};

export default CheckPhonePage;
