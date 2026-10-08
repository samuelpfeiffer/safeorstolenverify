import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "how to check if a license plate is stolen" (no Search Console
 * rows for this page; related queries "stolen car plate lookup" and "stolen vehicle license plate
 * lookup" sit around positions 21 to 37 on other pages). Was the shared PLATE_GUIDE data, which
 * duplicated the owner-lookup topic and linked off-site; now self-contained, no outbound links,
 * removed the "AI analysis" source claim. Owner questions go to /license-plate-owner-lookup.
 */
const HowToCheckIfLicensePlateStolenPage = () => (
  <ItemLandingPageTemplate
    title="How to Check if a License Plate Is Stolen (Free) | SafeOrStolen"
    metaDescription="How to check if a license plate is stolen: run the plate free, spot a swapped plate on a car, and what to do if your own plate goes missing or is cloned."
    h1="How to Check if a License Plate Is Stolen"
    itemType="License Plate"
    dateModified="2026-10-07"
    searchType="plate"
    searchPlaceholder="Enter the license plate number"
    keywords={[
      'how to check if a license plate is stolen',
      'check if license plate is stolen',
      'stolen license plate check',
      'stolen car plate lookup',
      'stolen vehicle license plate lookup',
      'is my license plate stolen',
      'stolen plate lookup free',
    ]}
    quickAnswer={{
      question: 'How do I check if a license plate is stolen?',
      answer:
        "Run the plate number and state on SafeOrStolen (safeorstolen.com/how-to-check-if-license-plate-stolen). It searches theft reports owners filed on the site and public web results, and checks Arizona plates against Arizona law-enforcement stolen-vehicle records. Then look at the car: the plate should match the registration card, the sticker and the VIN on the paperwork. If you think a plate is stolen and the car is nearby, call the police non-emergency line, because only police can search the national stolen-plate file.",
    }}
    sections={[
      {
        heading: 'Signs the plate on a car is stolen',
        paragraphs: [
          'Thieves take plates to put on a stolen car of the same make and color, to dodge tolls and cameras, or to use on a car in another crime. A plate that has moved from one car to another usually shows it.',
        ],
        list: [
          'The plate number on the registration card is different from the one on the car',
          "The year or month sticker doesn't match the registration, or the sticker is missing or cut",
          'Fresh scratches or bare metal around the screws, new bolts on an old plate, or one screw holding it',
          "A front plate and rear plate that don't match, in a state that issues two",
          'A plate from a different state than the title, with no good reason',
          'A temporary paper tag with a handwritten date, smudged printing, or no dealer name',
        ],
      },
      {
        heading: 'Where a stolen plate shows up, and who can search it',
        table: {
          columns: ['Record', 'Who can search it', 'What it tells you'],
          rows: [
            ['SafeOrStolen check', 'Anyone, 2 free checks', 'Whether the plate is in SafeOrStolen theft reports or public web results; Arizona plates also against Arizona law-enforcement records'],
            ["FBI's NCIC license plate file", 'Police only', 'Plates reported stolen to any U.S. police agency. Officers check it when they run a plate.'],
            ['State DMV record', 'The owner, police and permitted requesters', 'Whether the plate was reported lost or stolen and replaced. Owner details are private.'],
            ['Your own paperwork', 'You', 'Registration card, renewal notice and title, which list the plate and VIN'],
          ],
        },
      },
      {
        heading: 'Think your own plate was stolen or cloned?',
        paragraphs: [
          "Plates go missing quietly. Many owners only find out when a toll bill, red-light camera notice or parking ticket arrives for a place they've never been. Walk around your car once a week and look at both plates.",
          "If a plate is gone, report it to your local police first and get the report number. Then contact your state DMV for replacement plates: most require the police report, and you'll get a new number so the old one can't be used against you. Keep the report to dispute any tolls or tickets issued after the date it went missing. If you see your own number on another car, don't approach it; call the police with the location.",
        ],
      },
    ]}
    content={{
      intro:
        'Check whether a license plate is reported stolen, spot a plate that has been moved to the wrong car, and find out what to do if your own plate disappears. The plate check takes a few seconds and never shows anyone\'s name.',
      whatIs:
        "A stolen plate check looks up the plate number in records of reported thefts. It tells you about the plate, not the car: a stolen car often wears a plate that is clean, or one stolen from a different car. That's why a plate check is the first step and the VIN check is the second. Looking for the owner's name instead? That question is covered on <a href=\"/license-plate-owner-lookup\">license plate owner lookup</a>.",
      howItWorks:
        "Enter the plate and state. SafeOrStolen searches its own theft reports, which owners file on the site, and public web results that mention the plate. Arizona plates are also searched against Arizona law-enforcement stolen-vehicle records, updated twice a day. You see reported stolen, possible match, or no report found in the records searched, with every source listed. It does not search NCIC or DMV records and never shows owner names.",
      whyCheck:
        "A stolen plate on a car for sale usually means the car is stolen too. A stolen plate on a car parked on your street might be tied to a theft or a crime. Checking takes seconds, and if something's wrong the police can act on the plate number you give them.",
      benefits: [
        'Searches SafeOrStolen theft reports and public web results for the plate',
        'Arizona plates also checked against Arizona law-enforcement records',
        'Never shows owner names or addresses',
        'Each check is saved to your account with the date',
        '2 free checks with no credit card',
      ],
      process: [
        'Write down the plate exactly, plus the state, and the car\'s make, model and color.',
        'Check the plate on SafeOrStolen and read the sources searched.',
        'If you\'re buying the car, compare the plate with the registration card and the sticker, then check the VIN.',
        "If the plate comes back reported stolen, or something doesn't match, don't confront anyone. Note the location and call the police non-emergency line.",
        'If it\'s your own plate that is missing, file a police report, then get replacement plates from your DMV.',
      ],
      faqs: [
        {
          question: 'Can I check if a license plate is stolen for free?',
          answer:
            "Yes. SafeOrStolen (safeorstolen.com/how-to-check-if-license-plate-stolen) lets you check a plate free twice with a free account and no credit card. It searches SafeOrStolen theft reports and public web results, plus Arizona law-enforcement stolen-vehicle records for Arizona plates. Police can also tell you whether a plate is listed in the national stolen-plate file if you call the non-emergency line.",
        },
        {
          question: 'Can police tell if a license plate is stolen?',
          answer:
            "Yes. When an officer runs a plate, the search covers the state's records and the FBI's NCIC file, which holds plates reported stolen anywhere in the United States. Many patrol cars also have plate readers that flag stolen plates automatically. The public can't search NCIC, so call the non-emergency line if you see a plate you think is stolen.",
        },
        {
          question: 'How do I know if someone is using my license plate?',
          answer:
            "The usual sign is a toll bill, camera ticket or parking citation for a place and time you weren't there. Check the photo on the notice: if the car is a different model or color, your number has been copied or your plate taken. File a police report, ask your DMV for new plates, and use the report to dispute the charges.",
        },
        {
          question: 'What do I do if my license plate is stolen?',
          answer:
            "Report it to your local police and get a report number, then contact your state DMV for replacement plates. Most DMVs want the police report and issue a new plate number. If only one plate was taken, ask the DMV what to do with the other one. Keep the report to fight tickets or tolls dated after the theft.",
        },
        {
          question: 'Does a clean plate mean the car is not stolen?',
          answer:
            "No. A clean plate only tells you nothing is on record for that plate in the sources searched. Thieves often put a clean plate on a stolen car. Before you buy, read the VIN on the dashboard and the driver's door jamb, check it, and make sure it matches the title and registration in the seller's name.",
        },
        {
          question: 'Can a stolen license plate check tell me who owns the car?',
          answer:
            "No. Owner names and addresses come from DMV records, which the federal Driver's Privacy Protection Act keeps away from the public except for permitted uses such as law enforcement and insurance. A stolen plate check shows only whether the plate is reported stolen. If you need the owner after an accident, give the plate to the police.",
        },
      ],
    }}
  />
);

export default HowToCheckIfLicensePlateStolenPage;
