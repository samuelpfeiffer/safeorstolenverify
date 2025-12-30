import { SEOLandingPageTemplate } from '@/components/landing/SEOLandingPageTemplate';

const IPhoneIMEICheck = () => {
  return (
    <SEOLandingPageTemplate
      title="Is This iPhone Stolen? How to Check Before Buying | SafeOrStolen"
      metaDescription="Buying a used iPhone? Check if it's stolen before you pay. Free verification - just enter the serial number. Works on Facebook Marketplace, Craigslist, eBay."
      h1="Is This iPhone Stolen? Check Before You Buy"
      keywords={[
        'is this iphone stolen',
        'how to check if iphone is stolen',
        'check iphone before buying',
        'is my iphone stolen',
        'how to tell if iphone is stolen',
        'buying used iphone what to check',
        'facebook marketplace iphone stolen',
        'used iphone verification',
        'iphone blacklist check',
        'can i check if iphone is stolen'
      ]}
      canonical="/check-iphone-stolen"
      itemType="iPhone"
      identifierType="IMEI"
      heroBadge="Protect Yourself Before Buying"
      heroSubtitle="That $300 iPhone deal on Facebook Marketplace could be stolen property. Check before you meet the seller - it takes 2 seconds and could save you from losing your money AND facing criminal charges."
      stats={[
        { value: "1.2M+", label: "iPhones Stolen Every Year" },
        { value: "2 sec", label: "To Check" },
        { value: "Free", label: "First 2 Checks" },
        { value: "$800+", label: "Average Loss Avoided" }
      ]}
      whatIsTitle="How Do I Know If an iPhone Is Stolen?"
      whatIsContent="Every iPhone has a unique 15-digit serial number (also called IMEI). When an iPhone gets stolen, the owner reports it and the number goes into blacklist databases. If you buy that iPhone, it won't work on any carrier - and police can take it from you. Our free checker lets you verify the iPhone isn't stolen before you hand over your cash. Just ask the seller for the serial number (or dial *#06# on the phone) and enter it above."
      howItWorksSteps={[
        "Ask the seller: 'Can you send me the serial number?' (Or dial *#06# on the iPhone)",
        "Enter the number above - takes 2 seconds",
        "See if it's SAFE ✅ or STOLEN ❌",
        "If safe, meet the seller. If stolen, walk away and report them."
      ]}
      howItWorksDescription="We check Apple's blacklist, carrier databases (AT&T, Verizon, T-Mobile), police stolen phone records, and insurance claims. All in 2 seconds. If the iPhone is stolen, you'll know before you waste time meeting a scammer."
      whyVerifyTitle="What Happens If I Buy a Stolen iPhone?"
      whyVerifyContent="Buying a stolen iPhone - even if you didn't know it was stolen - has serious consequences. Here's what you're risking:"
      whyVerifyBenefits={[
        "Police can confiscate it - you lose the phone AND your money with no refund",
        "It's a crime - receiving stolen property is illegal in all 50 states",
        "The phone won't work - carriers blacklist stolen iPhones so they can't connect to any network",
        "iCloud lock - the original owner can remotely lock it, making it a useless brick",
        "Seller disappears - private sellers don't offer refunds, they just block you",
        "No insurance - your home or renters insurance won't cover stolen property you bought",
        "Criminal record - you could face charges that show up on background checks",
        "Total loss - you paid for a phone you can't use and can't sell"
      ]}
      useCases={[
        {
          title: "Buying on Facebook Marketplace",
          description: "Before you meet the seller at Starbucks, check the serial number. Scammers won't show up if you ask for it first."
        },
        {
          title: "Found a Great Deal on Craigslist",
          description: "That iPhone for $200 seems too good to be true? It probably is. Check before you meet."
        },
        {
          title: "Buying from a Coworker or Friend-of-Friend",
          description: "Even people you sort-of-know can sell stolen phones. A quick check protects the relationship."
        }
      ]}
      testimonial={{
        quote: "Was about to buy an iPhone 14 for $400 on Facebook Marketplace. Checked here first - STOLEN. The seller blocked me immediately when I asked about it. Saved me $400 and a police visit!",
        author: "Sarah M.",
        role: "Chicago"
      }}
      faqs={[
        {
          question: "How do I find the iPhone's serial number?",
          answer: "Ask the seller to text you a screenshot from Settings > General > About (scroll to 'Serial Number' or 'IMEI'). Or ask them to dial *#06# and send you that number. If they won't provide it - that's a huge red flag."
        },
        {
          question: "What if the seller won't give me the serial number?",
          answer: "Walk away. Legitimate sellers have nothing to hide and will happily provide it. If they refuse, make excuses, or pressure you to buy without checking - they're selling a stolen phone."
        },
        {
          question: "Is this check really free?",
          answer: "Yes! You get 2 free checks, no credit card required. That's enough to verify before your next purchase."
        },
        {
          question: "What if the iPhone shows as stolen?",
          answer: "DO NOT buy it. Don't meet the seller. Report the listing to Facebook/Craigslist/eBay and block the seller. You can also report to local police if you want to help catch the thief."
        },
        {
          question: "Can the seller change the serial number?",
          answer: "No. Apple's security makes it impossible to change an iPhone's serial number. But scammers might send you a fake number. Always verify by checking the actual phone - dial *#06# yourself when you meet them."
        },
        {
          question: "What about iCloud lock? Can you check that?",
          answer: "Our check indicates if the phone may be iCloud locked. But the safest way is to ask the seller to sign out of iCloud in front of you, then try to set it up. If you see an 'Activation Lock' screen, don't buy it."
        },
        {
          question: "Should I check even if the seller seems legit?",
          answer: "Yes! The best scammers seem completely trustworthy. They have convincing stories about why they're selling. 2 seconds of checking beats weeks of regret."
        },
        {
          question: "What if I already bought a stolen iPhone?",
          answer: "Contact local police and report it. You're a victim too. Keep all messages from the seller as evidence. Unfortunately, you likely won't get your money back, which is why checking BEFORE buying is so important."
        }
      ]}
      ctaTitle="Check Before You Pay"
      ctaDescription="Don't become another victim. Enter the iPhone's serial number and know if it's stolen in 2 seconds. It's free."
      relatedLinks={[
        { title: "Is This Samsung Stolen?", href: "/check-samsung-stolen" },
        { title: "Facebook Marketplace Safety", href: "/facebook-marketplace-stolen-check" },
        { title: "Craigslist Safety Tips", href: "/craigslist-safety-verification" }
      ]}
    />
  );
};

export default IPhoneIMEICheck;
