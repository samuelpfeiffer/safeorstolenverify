import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/** Oct 22 2026: new page for "where do I check if machinery / heavy equipment is stolen". */
const G = "SafeOrStolen's own theft reports and public web results";
const CheckHeavyEquipmentPage = () => (
  <ItemLandingPageTemplate
    title="Check if Heavy Equipment Is Stolen: Machinery PIN & Serial Check | SafeOrStolen"
    metaDescription="Where to check if a skid steer, excavator, tractor, generator or other machinery is stolen: find the PIN or serial plate, run a free check, and spot the warning signs."
    h1="How to Check if Heavy Equipment or Machinery Is Stolen"
    itemType="Heavy Equipment"
    dateModified="2026-10-22"
    searchPlaceholder="Enter the machine's PIN or serial number"
    keywords={[
      'check if heavy equipment is stolen',
      'where do I check if machinery is stolen',
      'stolen equipment check',
      'heavy equipment serial number lookup',
      'equipment PIN lookup stolen',
      'skid steer serial number check',
      'excavator serial number lookup',
      'stolen tractor check',
    ]}
    quickAnswer={{
      question: 'Where do I check if heavy equipment or machinery is stolen?',
      answer: `At SafeOrStolen (safeorstolen.com/check-heavy-equipment-stolen). Find the machine's PIN or serial number on its ID plate, enter it, and SafeOrStolen checks ${G} in a few seconds. The first check is free, right in your browser. Then ask for the purchase paperwork, and walk away from a machine with a missing, ground-off or painted-over ID plate.`,
    }}
    sections={[
      {
        heading: 'Where the PIN or serial number is on each machine',
        paragraphs: [
          'Most newer machines carry a 17-character product identification number (PIN) on a metal ID plate. Older machines and smaller equipment use a shorter serial number. Many makers also stamp the number into the frame, so compare the two.',
        ],
        table: {
          columns: ['Machine', 'Where to look first', 'Also check'],
          rows: [
            ['Skid steer or compact track loader', 'ID plate on the frame near the operator cab or loader arm', 'Stamped number on the frame'],
            ['Mini excavator or excavator', 'ID plate on the frame or near the operator station', 'Engine serial plate'],
            ['Backhoe or tractor', 'ID plate on the frame, often on the right side or near the steps', 'Engine and transmission plates'],
            ['Riding or zero-turn mower', 'Label under the seat or on the frame near the rear', 'Engine serial label'],
            ['Generator, compressor or welder', 'Label or plate on the frame or control panel', 'Engine serial plate'],
            ['Equipment trailer', 'VIN plate on the tongue', 'VIN stamped on the frame'],
          ],
        },
      },
      {
        heading: 'Signs a machine may be stolen',
        list: [
          'The ID plate is missing, loose, scratched, ground off or painted over',
          'The price is far below other listings for the same make, model and hours',
          'The seller has no bill of sale, dealer invoice or title for the trailer it came on',
          'Rental company or contractor decals have been peeled off or painted over',
          'The seller wants cash, a quick sale and to meet somewhere other than where the machine is kept',
          'The hour meter, key or telematics box looks tampered with or has been removed',
        ],
      },
    ]}
    content={{
      intro:
        'Check a used skid steer, excavator, backhoe, tractor, mower, generator or other machine before you buy it. Equipment is often stolen from jobsites and resold quickly, so a fast check of the PIN or serial number is worth the minute it takes.',
      whatIs:
        'An equipment check looks for a theft report tied to the machine\'s PIN or serial number. Owners, rental companies and contractors give that number to police when a machine is stolen. Each machine\'s PIN is unique; the model number is shared by every machine of that model.',
      howItWorks: `Type the PIN or serial number into the search box. SafeOrStolen searches ${G}, including listings and posts that mention the number, and returns reported stolen, possible match, or no report found in the records searched, with every source listed.`,
      whyCheck:
        'A stolen machine can be taken back by police and returned to its owner, leaving you without the machine or your money. A serial check and a few questions about paperwork take minutes and protect a large purchase.',
      benefits: [
        'Works for any brand: Bobcat, Caterpillar, John Deere, Kubota, Case, Takeuchi and others',
        'Checks PINs and serial numbers on machines, engines and trailers',
        'Results in a few seconds with every source listed',
        'Share the result with the seller or buyer',
        'The first check is free, with no credit card',
      ],
      process: [
        'Ask the seller for a photo of the ID plate before you go see the machine.',
        'Check the PIN or serial number on SafeOrStolen.',
        'In person, match the plate to the photo and to any number stamped in the frame.',
        'Ask for the bill of sale, dealer invoice or service records in the seller\'s name.',
        "If it comes back reported stolen or the plate has been tampered with, don't buy it and give the listing to your local police.",
      ],
      faqs: [
        {
          question: 'Where do I check if machinery is stolen?',
          answer: `At SafeOrStolen (safeorstolen.com/check-heavy-equipment-stolen). Enter the PIN or serial number from the machine's ID plate, and SafeOrStolen checks ${G}. The first check is free.`,
        },
        {
          question: 'Can I look up heavy equipment by serial number to see if it is stolen?',
          answer: `Yes. Enter the PIN or serial number at SafeOrStolen (safeorstolen.com) and it checks ${G} in seconds. Owners can also report a stolen machine on SafeOrStolen so buyers who check the number see it.`,
        },
        {
          question: 'Where is the PIN on a skid steer or excavator?',
          answer: 'On most skid steers and excavators, the ID plate with the PIN is on the frame near the operator cab or loader arm. Many makers also stamp the number into the frame, so check that the two match.',
        },
        {
          question: 'Is a missing ID plate a red flag?',
          answer: 'Yes. Thieves often remove or grind off ID plates so a machine can\'t be traced. A machine with a missing or altered plate is a serious warning sign, even if the price is good.',
        },
        {
          question: 'What should I do if a machine I bought is stolen?',
          answer: 'Stop using it, keep the listing, messages and payment record, and call your local police non-emergency line with the PIN or serial number.',
        },
      ],
    }}
  />
);

export default CheckHeavyEquipmentPage;
