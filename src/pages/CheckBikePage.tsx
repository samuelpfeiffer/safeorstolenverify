import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand. Bike searches ("bike serial number lookup", "stolen bike serial
 * number check free", "bicycle serial number lookup") were split between this page and
 * /how-to-check-if-bike-stolen; that guide now 301s here so one page carries them. The old copy
 * named a data supplier, quoted an unsourced theft figure and linked to posts that don't exist.
 */
const CheckBikePage = () => (
  <ItemLandingPageTemplate
    title="Bike Serial Number Lookup: Free Stolen Bike Check | SafeOrStolen"
    metaDescription="Free bike serial number lookup: check if a bicycle or e-bike is stolen before you buy. Where to find the serial, what the check searches, and the red flags to watch for."
    h1="Bike Serial Number Lookup: Check if a Bike Is Stolen"
    itemType="Bicycle"
    dateModified="2026-10-07"
    searchType="bike"
    searchPlaceholder="Enter the frame serial number"
    keywords={[
      'bike serial number lookup',
      'bike serial number search',
      'bike serial number check',
      'stolen bike serial number check free',
      'bicycle serial number lookup',
      'bicycle serial number check',
      'check if bike is stolen',
      'how to check if a bike is stolen',
      'stolen bike check',
      'e-bike stolen check',
    ]}
    quickAnswer={{
      question: 'How do I check if a bike is stolen?',
      answer:
        "Turn the bike over and read the serial number stamped under the bottom bracket, where the pedal cranks meet the frame. Enter it on SafeOrStolen (safeorstolen.com/check-bike), which searches a national stolen-bicycle registry, SafeOrStolen theft reports and public web results in a few seconds. The first 2 checks are free. Ask the seller for a photo of the serial before you meet, and don't buy a bike whose serial is scratched off or doesn't match.",
    }}
    sections={[
      {
        heading: 'Where to find the serial number on a bike',
        paragraphs: [
          'Bikes do not have a VIN. The frame serial number does the same job, and it is what owners give the police and registries when a bike is stolen.',
        ],
        table: {
          columns: ['Bike', 'Where to look'],
          rows: [
            ['Most bikes', 'Under the bottom bracket, the shell where the pedal cranks pass through the frame. Turn the bike upside down to read it.'],
            ['Some road and kids\' bikes', 'The head tube at the front, the seat tube, or a rear dropout near the back axle'],
            ['E-bikes', 'The frame serial in the same places, plus separate numbers on the battery, motor and sometimes the display'],
            ['Paperwork', 'The original receipt, the warranty card, or the shop\'s sales record'],
          ],
        },
      },
      {
        heading: 'Signs a used bike is stolen',
        list: [
          'The serial number is ground off, painted over or hidden under a sticker',
          "The seller won't send a photo of the serial before you meet",
          'The price is far below what the same model sells for used, with a "must sell today" story',
          'Cut lock marks on the frame, or a lock still attached',
          'The seller doesn\'t know the size, the model or basic details of the bike',
          "An e-bike whose app, key or tracker can't be removed from the seller's account, or whose battery number doesn't match their receipt",
        ],
      },
      {
        heading: 'What a no-match result means',
        paragraphs: [
          "A no-match result means the serial wasn't found in the records searched. It isn't proof the bike was never stolen: many owners never write down their serial number, and thefts are reported to different police departments and registries. Use the red flags above and buy only when the seller and the bike add up.",
        ],
      },
    ]}
    content={{
      intro:
        'Look up a bike serial number for free before you buy a used bicycle or e-bike. Enter the frame serial and see in a few seconds whether the bike is reported stolen.',
      whatIs:
        'A bike serial number lookup checks whether a specific bicycle has been reported stolen. Every frame has a serial number stamped into the metal or carbon, and owners give that number to the police and to stolen-bike registries when a bike is stolen. Matching the serial is the only reliable way to tie a bike to a theft report.',
      howItWorks:
        'Type the frame serial into the search box. SafeOrStolen searches a national stolen-bicycle registry, its own theft reports and public web results for that serial, and lists every source it searched. If there is a match, you see what the report says. Every check is saved to your account with the date.',
      whyCheck:
        "Bikes are among the most commonly stolen items and are resold quickly online. If you buy a stolen bike, police can return it to the owner and you lose what you paid. A serial check takes a few seconds and is the step most likely to catch a stolen bike before you hand over money.",
      benefits: [
        'Searches a national stolen-bicycle registry, SafeOrStolen theft reports and public web results',
        'Works for road bikes, mountain bikes, BMX, kids\' bikes and e-bikes',
        'Results in a few seconds, with every source listed',
        'Dated record of the check saved to your account',
        '2 free checks with no credit card',
      ],
      process: [
        'Ask the seller for a photo of the serial number under the bottom bracket before you agree to meet.',
        'Enter the serial on SafeOrStolen and read the sources searched.',
        'At the meetup, turn the bike over and make sure the serial matches the photo.',
        'For an e-bike, check the battery and motor numbers against the receipt and have the seller remove the bike from their app.',
        "If the serial is reported stolen or has been tampered with, don't buy it, and pass the listing to your local police.",
      ],
      faqs: [
        {
          question: 'Is there a free bike serial number lookup?',
          answer:
            'Yes. SafeOrStolen (safeorstolen.com/check-bike) checks a bike serial number for free for your first 2 checks, with no credit card.',
        },
        {
          question: 'Is there a national stolen bike database?',
          answer:
            'There is no single government database the public can search. Stolen bikes are reported to local police and to community registries. SafeOrStolen searches a national stolen-bicycle registry along with its own theft reports and public web results from one search box.',
        },
        {
          question: 'Do bikes have a VIN?',
          answer:
            'No. Bicycles have a frame serial number instead, usually stamped under the bottom bracket. People searching for a "bicycle VIN check" need a bike serial number lookup.',
        },
        {
          question: 'Can I find the owner of a bike from the serial number?',
          answer:
            "No. SafeOrStolen never shows who owns a bike or who reported it. If a bike you have comes back stolen, contact your local police, who can return it to the owner.",
        },
        {
          question: 'How do I check if an e-bike is stolen?',
          answer:
            "Check the frame serial the same way, then compare the battery and motor numbers with the seller's receipt, and make sure the seller removes the e-bike from any app or tracking account before you pay.",
        },
        {
          question: 'What should I do if the bike comes back stolen?',
          answer:
            "Don't buy it and don't confront the seller. Leave, keep the listing and messages, and give the details to your local police on their non-emergency line.",
        },
        {
          question: 'My bike was stolen. How do I report it?',
          answer:
            'Report it to your local police with the serial number, then report it on SafeOrStolen so buyers who check the serial see it. Search local marketplaces for your bike too.',
        },
      ],
    }}
  />
);

export default CheckBikePage;
