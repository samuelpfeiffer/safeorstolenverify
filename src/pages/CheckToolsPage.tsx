import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 8 2026: audited by hand for "check if tools stolen". Removed claims that SafeOrStolen searches
 * pawn (LeadsOnline), manufacturer or contractor databases, invented theft/dollar figures and
 * percentages, "AI-powered"/"3 seconds" wording, and a wrong statute citation.
 */
const CheckToolsPage = () => {
  return (
    <ItemLandingPageTemplate
      title="Check if Tools Are Stolen: Power Tool Serial Number Check | SafeOrStolen"
      metaDescription="Check a DeWalt, Milwaukee, Makita or Bosch serial number before you buy used tools. Where to find the serial, what the check searches, and red flags to watch for."
      h1="Check if Power Tools Are Stolen Before Buying"
      itemType="Tools & Equipment"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the tool serial number"
      keywords={[
        'check if tools stolen',
        'stolen power tools check',
        'tool serial number lookup',
        'verify tools not stolen',
        'construction equipment stolen check'
      ]}
      quickAnswer={{
        question: 'How do I check if a power tool is stolen?',
        answer:
          "Find the serial number on the tool's label, usually on the motor housing or near the battery mount, and enter it on SafeOrStolen (safeorstolen.com/check-tools). It searches theft reports filed on SafeOrStolen and public web results in a few seconds. Then compare the serial with the receipt and look for scraped-off labels, engraved company names or spray-painted markings. If the seller won't show you the serial, walk away.",
      }}
      sections={[
        {
          heading: 'Where to find the serial number on a power tool',
          table: {
            columns: ['Brand', 'Where to look'],
            rows: [
              ['DeWalt', 'Label on the motor housing or the side of the handle'],
              ['Milwaukee', 'Label near the battery mount or on the side of the tool body'],
              ['Makita', 'Label on the tool body near the model number, or on the base'],
              ['Bosch, Ryobi, Ridgid', 'Label on the motor housing or near the battery connection'],
              ['Batteries and chargers', 'Their own labels with separate serials; record each one'],
            ],
          },
        },
        {
          heading: 'What a SafeOrStolen tool check searches',
          table: {
            columns: ['Searched', 'Not searched'],
            rows: [
              ['Theft reports tool owners filed on SafeOrStolen', 'Manufacturer registration or tracking accounts'],
              ['Public web results that mention the serial', 'Pawn shop, police or insurance records'],
            ],
          },
        },
      ]}
      content={{
        intro: "Check a power tool's serial number before you buy it on Facebook Marketplace, Craigslist or at a job site. SafeOrStolen searches theft reports and public web results in a few seconds. Sellers can check first to show a tool is clean, and pawn shops and tool resellers can check at intake.",
        whatIs: "Checking if a tool is stolen means looking up its serial number to see whether an owner has reported it stolen. Professional-grade tools from DeWalt, Milwaukee, Makita, Bosch and Hilti carry a serial on a label or plate. Owners give that number to police and to SafeOrStolen when tools are stolen, so it's the one thing that ties a tool to a theft report.",
        howItWorks: "Type the serial into the search box. SafeOrStolen searches theft reports owners filed on SafeOrStolen and public web results that mention the serial, then shows reported stolen, possible match, or no report found in the records searched. Every source is listed, and the check is saved to your account with the date.",
        whyCheck: "Tools get taken from work trucks, job trailers, garages and sheds, and resold quickly online or at swap meets. If police identify a stolen tool, it goes back to its owner and you lose what you paid. Many tools carry the owner's name or company markings, which makes them easy for police to trace back.",
        benefits: [
          "Works for DeWalt, Milwaukee, Makita, Bosch, Ryobi, Craftsman, Ridgid, Hilti and Festool",
          "Covers generators, compressors, welders and saws with a serial plate",
          "Searches SafeOrStolen theft reports and public web results",
          "Results in a few seconds, saved to your account with the date",
          "2 free checks with a free account, then $0.99 a check or $10 a month unlimited"
        ],
        process: [
          "Find the serial number on the tool's label: usually on the motor housing, near the battery mount or on the base plate.",
          "Write down the full serial, including letters and dashes, and photograph the label. One wrong character changes the result.",
          "Look the tool over for scraped labels, fresh paint or tape over areas where an owner might have engraved a name.",
          "Enter the serial on SafeOrStolen and read the result.",
          "Compare the serial with the seller's receipt or box. Check batteries and chargers too.",
          "If the result shows reported stolen, or the serial is missing, don't buy. Leave and call your local police non-emergency line."
        ],
        faqs: [
          {
            question: "What types of tools can I check?",
            answer: "Anything with a serial number: cordless drills, impact drivers, saws, grinders and rotary hammers; table, miter and band saws; chainsaws, blowers and pressure washers; generators, compressors and welders; and professional tools from Hilti, Festool and Fein. For combo kits, check each tool and battery separately."
          },
          {
            question: "Where do I find the serial number on power tools?",
            answer: "Most brands put it on a label on the motor housing or near the battery mount. DeWalt usually uses the motor housing, Milwaukee the area near the battery connection, and Makita the tool body near the model number. The box and receipt should show the same number. A missing or scraped-off label is a red flag."
          },
          {
            question: "How much does the tool stolen check cost?",
            answer: "A free SafeOrStolen account comes with 2 free checks, no credit card. After that it's $0.99 a check or $10 a month for unlimited checks, cancel anytime."
          },
          {
            question: "What should I do if my tool check shows it's stolen?",
            answer: "Don't buy it and don't confront the seller. Screenshot the listing, save the messages, write down the serial, and report the listing to the marketplace. Then call your local police non-emergency line. If you already paid, keep the tool as it is and contact police and your payment provider."
          },
          {
            question: "Can tool serial numbers be removed or faked?",
            answer: "Yes. Thieves sometimes peel off labels, sand down plates or paint over engraved names. Watch for a label that's missing, replaced or doesn't match the tool's wear, fresh paint, or tape over spots where a name could be. If the serial has been tampered with, don't buy the tool."
          },
          {
            question: "How long does a tool serial number check take?",
            answer: "A few seconds. SafeOrStolen searches its own theft reports and public web results for the serial, lists every source it searched, and saves the check to your account with the date."
          },
          {
            question: "What are red flags when buying used power tools?",
            answer: "A price far below what the tool sells for used, a seller who won't show the serial, scraped labels or fresh paint, no batteries, charger, case or receipt, a pile of professional tools with no story, company names engraved on the tool, or a meetup in a parking lot with cash only. Two or more of these together is a reason to walk away."
          }
        ]
      }}
    />
  );
};

export default CheckToolsPage;
