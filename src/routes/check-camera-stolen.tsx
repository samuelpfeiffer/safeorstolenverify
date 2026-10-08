import { createFileRoute } from "@tanstack/react-router";
import { ItemLandingPageTemplate } from "@/components/seo/ItemLandingPageTemplate";

/**
 * Oct 7 2026: rewritten by hand for "how to check if a camera is stolen" / "camera serial number
 * check" (no Search Console data yet). Now self-contained instead of reading CAMERA_GUIDE from the
 * shared data file. Adds the buyer-side tricks that only work for cameras: the body serial in a test
 * photo's metadata and the owner/copyright name in the camera menu.
 */
function GuidePage() {
  return (
    <ItemLandingPageTemplate
      title="How to Check if a Camera Is Stolen: Camera & Lens Serial Check | SafeOrStolen"
      metaDescription="How to check if a used camera or lens is stolen: where the body and lens serials are, how to read the serial from a test photo, and what the owner name in the menu tells you."
      h1="How to Check if a Camera or Lens Is Stolen"
      itemType="Camera"
      dateModified="2026-10-07"
      searchPlaceholder="Enter the camera body or lens serial number"
      keywords={[
        'how to check if a camera is stolen',
        'camera serial number check',
        'stolen camera check',
        'lens serial number check',
        'stolen lens check',
        'where is the serial number on a camera',
        'camera serial number in exif',
        'buying used camera stolen',
      ]}
      quickAnswer={{
        question: 'How do I check if a camera is stolen?',
        answer:
          "Read the body serial number on the bottom plate and each lens serial on the barrel or mount, and enter them on SafeOrStolen (safeorstolen.com/check-camera-stolen), which searches theft reports and public web results in a few seconds. At the meetup, take a test photo: many cameras write the body serial into the photo's data, so you can confirm it matches the plate. Also look for someone else's name in the camera's copyright or owner setting.",
      }}
      sections={[
        {
          heading: 'Where to find camera and lens serial numbers',
          table: {
            columns: ['Item', 'Where to look', 'Notes'],
            rows: [
              ['Camera body (Canon, Nikon, Sony, Fujifilm, Panasonic, OM System)', 'On the bottom plate, near the tripod socket. On some models, inside the battery or card door.', 'Check this one first. It is the number owners report.'],
              ['Lens', 'On the barrel, on the underside, or around the rear mount', 'Every lens has its own serial. Check each one separately.'],
              ['Test photo', "The photo file's data (EXIF). On most recent bodies the field is called Serial Number or Body Serial Number.", 'View it in any photo-info app or on a computer. It should match the bottom plate.'],
              ['Box, warranty card, receipt', 'A label on the box end; the receipt often lists the serial', 'Should match the body, not just the model.'],
              ['Drones and action cameras', 'Under the battery, on the body, or in the companion app', 'Ask the seller to unbind the drone from their app account.'],
            ],
          },
        },
        {
          heading: 'Two checks that only work on cameras',
          paragraphs: [
            "The test photo. Take a picture with the camera at the meetup and look at the file's data on your phone or laptop. Many cameras write the body serial into every photo. If it doesn't match the bottom plate, the plate has been swapped or the camera isn't what the seller says it is.",
            "The owner name. Canon, Nikon, Sony and other brands let owners set an author or copyright name in the menu, often under Copyright information, and stamp it into every photo. Open that setting. If it shows a name that isn't the seller's, ask about it, and expect a clear answer before you pay.",
          ],
        },
        {
          heading: 'Signs a camera may be stolen',
          list: [
            'The serial plate on the bottom is scraped, covered with tape, or missing',
            'A body serial in the test photo that doesn\'t match the plate',
            'Someone else\'s name in the copyright or owner setting, or on a strap or label',
            'A full kit (body, several lenses, flash, bag) sold cheap, quickly, with no receipts',
            'Rental-house, school or newsroom stickers, or marks where stickers were peeled off',
            'A seller who doesn\'t know the gear: no idea of the shutter count, the lenses\' names, or what the settings do',
          ],
        },
      ]}
      content={{
        intro:
          'Check a used camera body, lens or drone before you buy it. Find each serial, check it for theft reports, and use a test photo to confirm the body is what the seller says.',
        whatIs:
          'A camera stolen check looks for theft reports tied to the serial numbers of the body and each lens. Owners give these serials to the police and their insurer after a theft, and can report them on SafeOrStolen. For laptops, phones and other gear, see the <a href="/check-electronics">electronics check</a>.',
        howItWorks:
          "Type the body or lens serial into the search box. SafeOrStolen searches its own theft reports and public web results, including listings and posts that mention the serial, and returns reported stolen, possible match, or no report found in the records searched, with every source listed. It does not search the camera makers' or insurers' records. Check each serial separately.",
        whyCheck:
          "Camera kits are valuable, light and easy to resell piece by piece, and stolen gear recovered by police goes back to the owner. Checking every serial, and confirming the body serial in a test photo, takes a few minutes and catches the cases a buyer can catch.",
        benefits: [
          'Works for camera bodies, lenses, drones and action cameras from any brand',
          'Searches SafeOrStolen theft reports and public web results',
          'Results in a few seconds with every source listed',
          'A dated record of each check is saved to your account',
          '2 free checks with no credit card',
        ],
        process: [
          'Ask the seller for photos of the bottom plate and each lens serial before you meet.',
          'Check every serial on SafeOrStolen.',
          'At the meetup, take a test photo and confirm the body serial in the photo data matches the plate.',
          'Open the copyright or owner setting in the menu and ask the seller to clear it in front of you.',
          "If any serial comes back reported stolen or the plate has been tampered with, don't buy, and give the details to your local police.",
        ],
        faqs: [
          {
            question: 'Where is the serial number on a camera?',
            answer:
              "On most Canon, Nikon, Sony, Fujifilm and Panasonic bodies, the serial number is on the bottom plate near the tripod socket. Some models put it inside the battery or card door. Lenses have their own serial on the barrel, the underside or around the rear mount.",
          },
          {
            question: 'Can you find a camera serial number from a photo?',
            answer:
              "Often, yes. Many cameras write the body serial number into each photo's data, in a field such as Serial Number or Body Serial Number. Open the photo's info on a computer or in a photo-info app. Photos posted online usually have this data removed, so use an original file straight from the camera.",
          },
          {
            question: 'Can I check a camera serial number for free?',
            answer:
              'Yes. SafeOrStolen (safeorstolen.com/check-camera-stolen) checks camera body and lens serials against its theft reports and public web results for free for your first 2 checks, with no credit card. After that, a single check is $3.99 or unlimited checks are $14.99 a month.',
          },
          {
            question: 'Do lenses have serial numbers?',
            answer:
              "Yes. Almost every interchangeable lens has its own serial number on the barrel, the underside, or around the mount. Owners list lens serials in theft reports separately from the body, so check each lens on its own. A lens with its serial scraped off is a warning sign.",
          },
          {
            question: 'What does a name in the camera\'s copyright setting mean?',
            answer:
              "It is the name the owner set to stamp on their photos. Sellers often forget to clear it. If the name isn't the seller's, ask whose it is. A clear answer (a family member, a business they owned) is fine; a vague one, with no receipt, is a reason to walk away.",
          },
          {
            question: 'What should I do if a camera comes back reported stolen?',
            answer:
              "Don't buy it and don't confront the seller. Leave, keep the listing and messages, and give the serial numbers and listing to your local police on their non-emergency line.",
          },
        ],
      }}
    />
  );
}

export const Route = createFileRoute("/check-camera-stolen")({
  component: GuidePage,
});
