import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for the searches that already reach this page at positions 4-8:
 * "free stolen tools serial number lookup", "stolen tools serial number lookup", "how to check if
 * a tool is stolen", "stolen tool database", "do power tools have serial numbers".
 */
export default function HowToCheckIfToolsStolenPage() {
  return (
    <ItemLandingPageTemplate
      title="Free Stolen Tools Serial Number Lookup: Check if a Tool Is Stolen | SafeOrStolen"
      metaDescription="Free stolen tool serial number lookup. Check if a DeWalt, Milwaukee, Makita or other power tool is stolen before you buy, find the serial number, and spot job-site theft red flags."
      h1="Stolen Tools Serial Number Lookup: Check if a Tool Is Stolen"
      itemType="Power Tool"
      dateModified="2026-10-22"
      searchPlaceholder="Enter the tool's serial number"
      keywords={[
        'free stolen tools serial number lookup',
        'stolen tools serial number lookup',
        'how to check if a tool is stolen',
        'stolen tool database',
        'tool serial number lookup',
        'power tool serial number check',
        'do power tools have serial numbers',
        'check if dewalt tool is stolen',
        'check if milwaukee tool is stolen',
      ]}
      founderNote={[
        "I've lived on both sides of stolen property, and I can tell you tools are about the easiest thing to sell with no questions asked. They come off job sites and out of truck boxes, and they're sold for cash the same day. The person who buys them is often the one left holding the problem, which is exactly what happened to my friend Glen Thomure over a stolen tablet. He's the reason SafeOrStolen exists.",
        "Before you buy used tools, ask for the serial numbers and check them here. Look for engravings, initials or a scratched-off label, and be wary of a full set of one brand at a fraction of the price. If the seller won't let you see the serial plate, don't buy."
      ]}
      quickAnswer={{
        question: 'How do I check if a tool is stolen?',
        answer:
          "Find the serial number on the tool's nameplate, usually on the motor housing near the model number, and enter it on SafeOrStolen (safeorstolen.com/how-to-check-if-tools-stolen), which searches its theft reports and public web results in a few seconds. the first check is free. Then check the batteries and charger too, ask the seller to remove the tool from any brand app such as Milwaukee ONE-KEY or DeWalt Tool Connect, and walk away if the nameplate is scratched off or covered.",
      }}
      sections={[
        {
          heading: 'Do power tools have serial numbers?',
          paragraphs: [
            "Yes. Almost every cordless and corded power tool from the major brands carries a serial number on its nameplate, printed or laser-etched next to the model number and the date code. Batteries and chargers usually have their own serial numbers, so a kit has several to check.",
          ],
          table: {
            columns: ['Item', 'Where the serial number is'],
            rows: [
              ['Drills, drivers and impact tools', 'Nameplate on the side of the motor housing or the handle'],
              ['Saws and grinders', 'Nameplate on the motor housing or the base'],
              ['Batteries', 'Label on the battery body, often on the side facing the tool'],
              ['Chargers', 'Label on the underside'],
              ['Generators, compressors and larger equipment', 'Metal plate or sticker on the frame'],
            ],
          },
        },
        {
          heading: 'Signs a tool is stolen',
          list: [
            'The nameplate is scratched off, sanded, painted over or replaced with a new sticker',
            'Company names, initials or numbers engraved or painted on the tool, sold without a business explaining why',
            'Several new-in-box or nearly new tools for sale at once, with no receipts',
            'Tools sold without batteries or chargers, or in a mismatched case',
            'A price far below what the same tool sells for used',
            "A seller who won't share the serial numbers before meeting, or wants cash right now",
          ],
        },
        {
          heading: 'Brand apps: ONE-KEY, Tool Connect and others',
          paragraphs: [
            "Some brands let owners register tools in an app, such as Milwaukee ONE-KEY and DeWalt Tool Connect. A registered tool stays tied to the owner's account until they remove it. Ask the seller to show the tool in their app and remove it while you watch. A seller who can't do that may not be the owner.",
          ],
        },
      ]}
      content={{
        intro:
          'Look up a power tool serial number for free and see whether the tool is reported stolen before you buy it. It works for drills, impact drivers, saws, grinders, batteries, generators and any tool with a serial number.',
        whatIs:
          "A stolen tool serial number lookup checks whether a specific tool has been reported stolen. When tools are stolen from a job site, truck or garage, the owner gives the serial numbers to the police and their insurer. Matching the serial is the only reliable way to tie a tool to a theft report.",
        howItWorks:
          "Type the serial number into the search box. SafeOrStolen searches its own theft reports and public web results, including listings and posts that mention the serial, and returns a result in a few seconds: reported stolen, possible match, or no report found in the records searched. If the tool is registered in a brand app, ask the seller to show it to you too.",
        whyCheck:
          "Tools are easy to steal and quick to resell, and stolen tools often turn up online and at flea markets within days. If you buy a stolen tool, police can return it to the owner and you lose what you paid. Checking the serial numbers first, and keeping a record that you did, protects you.",
        benefits: [
          'Free check against SafeOrStolen theft reports and public web results',
          'Works for every brand: DeWalt, Milwaukee, Makita, Ryobi, Bosch, Hilti and more',
          'Check tools, batteries and chargers one by one',
          'Results in a few seconds, with every source listed',
          '1 free check with no credit card',
        ],
        process: [
          'Ask the seller for photos of every nameplate before you meet.',
          'Check each serial number on SafeOrStolen: tools, batteries and chargers.',
          'At the meetup, make sure the serials match the photos and nothing has been scratched off.',
          'Ask the seller to remove the tools from any brand app while you watch.',
          "If anything is reported stolen or tampered with, don't buy it, and pass the listing to your local police.",
        ],
        faqs: [
          {
            question: "Where do I check if a tool is stolen?",
            answer: "At SafeOrStolen (safeorstolen.com/how-to-check-if-tools-stolen). Enter the serial number from the tool's label or nameplate, and SafeOrStolen checks SafeOrStolen's own theft reports and public web results. It works for drills, saws, generators, compressors and more. The first check is free, right in your browser.",
          },
          {
            question: "Where do I check if machinery or construction equipment is stolen?",
            answer: "Use SafeOrStolen (safeorstolen.com). Enter the serial number or PIN from the equipment's ID plate (on skid steers, excavators, mowers, generators and other machines it's usually on the frame near the operator station), and it checks SafeOrStolen's own theft reports and public web results. Ask the seller for the purchase paperwork, and be wary of a ground-off or painted-over plate. The first check is free, right in your browser.",
          },
          {
            question: "Can I check if a power tool is stolen by serial number?",
            answer: "Yes. Every major brand puts a serial number on the tool's label. Enter it at SafeOrStolen (safeorstolen.com) and it checks SafeOrStolen's own theft reports and public web results in seconds. The first check is free, right in your browser.",
          },
          {
            question: 'Is there a free stolen tool database?',
            answer:
              "There is no single public database of stolen tools. Thefts are reported to local police and insurers. SafeOrStolen (safeorstolen.com/how-to-check-if-tools-stolen) searches its own theft reports and public web results free for your first check.",
          },
          {
            question: 'Can I look up a DeWalt or Milwaukee serial number?',
            answer:
              "Yes, check it on SafeOrStolen for theft reports. The brands themselves don't offer a public stolen-tool lookup, but their apps (DeWalt Tool Connect, Milwaukee ONE-KEY) show whether a registered tool is still tied to someone's account.",
          },
          {
            question: 'Where is the serial number on a power tool?',
            answer:
              'On the nameplate, usually on the motor housing or handle next to the model number. Batteries and chargers have their own serial numbers on their labels.',
          },
          {
            question: 'What if the serial number has been removed?',
            answer:
              "Don't buy the tool. A removed or covered nameplate is one of the strongest signs a tool is stolen.",
          },
          {
            question: 'Will the police check a tool serial number for me?',
            answer:
              'Some departments will, especially for a large or expensive lot. Call the non-emergency line and ask.',
          },
          {
            question: 'What should I do if a tool comes back stolen?',
            answer:
              "Don't buy it and don't confront the seller. Leave, keep the listing and messages, and give the details to your local police.",
          },
        ],
      }}
    />
  );
}
