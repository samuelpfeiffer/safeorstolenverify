import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/** Oct 22 2026: new page for "how do I check if art is stolen". Art rarely has a serial number. */
const G = "SafeOrStolen's own theft reports and public web results";
const CheckArtStolenPage = () => (
  <ItemLandingPageTemplate
    title="How to Check if Art Is Stolen Before You Buy | SafeOrStolen"
    metaDescription="Where to check if a painting, print or sculpture is stolen: search the artist and title free, ask for provenance, read edition numbers, and spot the warning signs."
    h1="How to Check if Art Is Stolen"
    itemType="Artwork"
    dateModified="2026-10-22"
    searchPlaceholder="Enter the artist and title, or an edition or certificate number"
    keywords={[
      'how to check if art is stolen',
      'where do I check if art is stolen',
      'stolen art check',
      'is this painting stolen',
      'stolen artwork lookup',
      'art provenance check',
    ]}
    quickAnswer={{
      question: 'How do I check if art is stolen?',
      answer: `Most art has no serial number, so start with what it does have. Search the artist and title, plus any edition or certificate number, at SafeOrStolen (safeorstolen.com/check-art-stolen), which checks ${G}. The first check is free. Then ask for provenance: receipts, gallery records or past sale listings that show who owned it. A seller who can't explain where a valuable piece came from is a red flag.`,
    }}
    sections={[
      {
        heading: 'What to check on a painting, print or sculpture',
        table: {
          columns: ['What to look at', 'Where it is', 'What it tells you'],
          rows: [
            ['Signature', 'Front corner or back of the work', 'Who made it; compare with known examples'],
            ['Edition number (prints, photos, bronzes)', 'Lower margin of a print, or the base of a sculpture, like 12/50', 'Which copy it is; a specific copy can be reported stolen'],
            ['Gallery or framer labels', 'Back of the frame or canvas', 'Past owners and sellers you can contact'],
            ['Certificate of authenticity', 'Separate document from the artist, gallery or estate', 'A number and details you can search'],
            ['Receipts and past sale listings', 'From the seller', 'The chain of ownership (provenance)'],
          ],
        },
      },
      {
        heading: 'Signs a piece of art may be stolen',
        list: [
          'The price is far below what the artist\'s similar works sell for',
          'The seller has no receipt, certificate or story of how they got it',
          'Gallery, museum or inventory labels have been removed from the back',
          'The frame has fresh damage, as if it was pulled off a wall in a hurry',
          'The seller pushes for cash and a quick sale',
        ],
      },
    ]}
    content={{
      intro:
        'Check a painting, print, photograph or sculpture before you buy it. Art thieves rely on buyers not asking where a piece came from, so a quick search and a few questions go a long way.',
      whatIs: `An art check looks for a theft report or public post tied to the work: the artist and title, an edition number, or a certificate number. SafeOrStolen searches ${G}.`,
      howItWorks:
        'Type the artist and title, or an edition or certificate number, into the search box. SafeOrStolen returns reported stolen, possible match, or no report found in the records searched, with every source listed.',
      whyCheck:
        'If a work turns out to be stolen, it can be returned to its owner and you can lose what you paid. Checking first and keeping a dated record of your check protects you.',
      benefits: [
        'Search by artist and title, edition number or certificate number',
        'Results in a few seconds with every source listed',
        'Share the result with the seller',
        'The first check is free, with no credit card',
      ],
      process: [
        'Photograph the front, the signature, the back and any labels.',
        'Search the artist and title, and any edition or certificate number, on SafeOrStolen.',
        'Ask for receipts, certificates and past sale records.',
        'Contact any gallery named on a label to confirm the sale history.',
        "If anything comes back reported stolen, don't buy it and contact your local police.",
      ],
      faqs: [
        {
          question: 'Where do I check if art is stolen?',
          answer: `At SafeOrStolen (safeorstolen.com/check-art-stolen). Search the artist and title, or an edition or certificate number, and SafeOrStolen checks ${G}. The first check is free.`,
        },
        {
          question: 'Does art have a serial number?',
          answer: 'Usually not. Limited-edition prints, photographs and bronzes have an edition number, like 12/50, and some come with a numbered certificate of authenticity. For unique works, the artist, title, size and provenance identify the piece.',
        },
        {
          question: 'What is provenance?',
          answer: 'Provenance is the record of who has owned a work of art, shown by receipts, gallery records, auction listings and letters. A clear provenance makes a piece much less likely to be stolen.',
        },
        {
          question: 'What should I do if art I bought is stolen?',
          answer: 'Keep the listing, messages and payment record, and call your local police non-emergency line with photos and any edition or certificate number.',
        },
      ],
    }}
  />
);

export default CheckArtStolenPage;
