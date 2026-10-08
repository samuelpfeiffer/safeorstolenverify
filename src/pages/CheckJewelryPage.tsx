import { ItemLandingPageTemplate } from '@/components/seo/ItemLandingPageTemplate';

/**
 * Oct 7 2026: rewritten by hand for "does jewelry have serial numbers" (the one query reaching this
 * page, position 4) and "how to check if jewelry is stolen". Removed: "$5 billion stolen in 2024",
 * "pawned within 72 hours in 80% of cases", "40-70% below retail", dollar-loss figures, the claim that
 * we search pawn databases and validate GIA reports against manufacturer/GIA databases (we don't), and
 * the false "3 seconds" timing tied to "AI analysis". Watches now point to /check-watch-stolen.
 */
const CheckJewelryPage = () => (
  <ItemLandingPageTemplate
    title="Does Jewelry Have Serial Numbers? Check if Jewelry Is Stolen | SafeOrStolen"
    metaDescription="Most jewelry has no serial number. Here's what to check instead before buying used jewelry: GIA laser inscriptions, engravings, maker's marks, papers and the seller."
    h1="Does Jewelry Have Serial Numbers? How to Check if Jewelry Is Stolen"
    itemType="Jewelry"
    dateModified="2026-10-07"
    searchPlaceholder="Enter a serial, GIA report or inscription number"
    keywords={[
      'does jewelry have serial numbers',
      'how to check if jewelry is stolen',
      'check if jewelry is stolen',
      'stolen jewelry check',
      'diamond laser inscription lookup',
      'gia number stolen diamond',
      'is this ring stolen',
      'buying used jewelry stolen',
    ]}
    quickAnswer={{
      question: 'Does jewelry have serial numbers?',
      answer:
        "Most jewelry doesn't. Rings and chains usually carry only a metal stamp (14K, 750, 925) and maybe a maker's mark, which aren't unique. The pieces that can be traced are diamonds with a grading-lab laser inscription on the girdle, some designer pieces with an engraved serial, and anything with a personal engraving. Check any number you find on SafeOrStolen (safeorstolen.com/check-jewelry), and judge the rest by the papers and the seller.",
    }}
    sections={[
      {
        heading: 'What identifies a piece of jewelry',
        table: {
          columns: ['Mark', 'Where to look', 'Unique to this piece?'],
          rows: [
            ['Diamond laser inscription', 'The girdle, the thin outer edge of the stone. Needs a 10x loupe and good light.', 'Yes. It is the grading report number, so it ties the stone to one lab report.'],
            ['Designer serial number', 'Some high-end brands engrave one near the clasp, inside a band, or on the back of a pendant.', 'Yes, where the brand uses them.'],
            ['Personal engraving', 'Inside a ring band or on the back of a pendant or watch: names, initials, dates.', 'Effectively yes. It belongs to someone.'],
            ['Metal stamp', 'Inside the band or on the clasp: 10K, 14K, 18K, 750, 925, PT950.', 'No. It only states the metal.'],
            ['Maker\'s mark', 'Next to the metal stamp.', 'No. It names the maker, not the piece.'],
            ['Appraisal or grading report', 'Paperwork the seller should have, often with photos and measurements.', 'Yes, if the measurements and photos match the piece.'],
          ],
        },
      },
      {
        heading: 'How to check a diamond\'s laser inscription',
        paragraphs: [
          "Many diamonds graded by a lab like GIA carry the report number laser-inscribed on the girdle. Ask the seller for the report, then read the inscription with a 10x loupe (a jeweler will do it in a minute). The number on the stone should match the report, and the report's carat weight, measurements and clarity plot should match the stone. GIA's own Report Check service confirms a report number is real. Then run the number on SafeOrStolen to see if it appears in a theft report or online.",
          "A missing inscription isn't proof of anything; many stones were never inscribed. A report whose number doesn't match the stone, or an inscription that looks polished away, is a reason to walk away.",
        ],
      },
      {
        heading: 'Signs used jewelry may be stolen',
        list: [
          'A personal engraving (someone else\'s name, initials or wedding date) and a seller who can\'t explain it',
          'A patch inside a band that has been freshly polished, where an engraving used to be',
          'A grading report that doesn\'t match the stone, or a seller who "lost" the papers for an expensive piece',
          'Several unrelated pieces for sale at once: a man\'s ring, a woman\'s ring, a child\'s bracelet, loose stones',
          'A seller who wants to sell by weight, quickly, for cash, and doesn\'t care about the design',
          'Pressure to meet in a car or a parking lot instead of at a jeweler where the piece can be looked at',
        ],
      },
    ]}
    content={{
      intro:
        "Buying a used ring, necklace or diamond? Most jewelry has no serial number, so checking it takes a different approach than a phone or a bike. Here is what can be traced, what can't, and what to look at before you pay.",
      whatIs:
        'Checking if jewelry is stolen means finding anything that ties the piece to one owner (a laser inscription, a designer serial, an engraving, a grading report) and checking it, then judging the seller. For a watch, use the <a href="/check-watch-stolen">watch check guide</a>, since watches carry their own serial and case numbers.',
      howItWorks:
        "Enter a designer serial, a grading report number or an engraved number into the search box. SafeOrStolen searches its own theft reports, where owners list stolen items with their numbers and descriptions, and public web results that mention the number. You see reported stolen, possible match, or no report found in the records searched, with every source listed. It does not search pawn databases, insurer records or the grading labs.",
      whyCheck:
        "Stolen jewelry is easy to carry and easy to sell, and when police recover it they return it to the owner. A buyer who paid for it loses the money. Most pieces can't be checked by number at all, so the checks you can do, on the stone, the paperwork and the seller, matter more.",
      benefits: [
        'Checks GIA and other lab report numbers, designer serials and engraved numbers',
        'Searches SafeOrStolen theft reports and public web results',
        'Every source searched is listed with the result',
        'A dated record of the check is saved to your account',
        'Optional $1.99 verification certificate showing you checked before the sale',
        '2 free checks with no credit card',
      ],
      process: [
        'Ask the seller for the grading report, appraisal, receipt or box before you meet.',
        'Look for any number on the piece with a 10x loupe: girdle inscription, designer serial, engraving.',
        'Check each number on SafeOrStolen, and confirm a grading report number with the lab that issued it.',
        'Meet at a jeweler and have them confirm the stone and metal match the paperwork.',
        "If a number comes back reported stolen or the engraving has been polished off, don't buy, and give the details to your local police.",
      ],
      faqs: [
        {
          question: 'Does jewelry have serial numbers?',
          answer:
            "Most jewelry doesn't. The stamps inside a ring (14K, 925, PT950) show the metal, not the piece. What can be traced is a lab laser inscription on a diamond's girdle, a serial number some designer brands engrave, a personal engraving, or a grading report with matching measurements.",
        },
        {
          question: 'How do I check if a diamond is stolen?',
          answer:
            "Read the laser inscription on the girdle with a 10x loupe and match it to the grading report. Confirm the report number with the lab that issued it, then check the number on SafeOrStolen (safeorstolen.com/check-jewelry), which searches its theft reports and public web results. If the stone isn't inscribed, rely on the report's measurements and a jeweler's opinion.",
        },
        {
          question: 'Can stolen jewelry be traced?',
          answer:
            "Only some of it. An inscribed diamond, a designer piece with a serial, or a ring with an engraving can be tied back to an owner's theft report. Plain gold chains and rings without engravings usually can't, which is why stolen jewelry is often sold by weight or melted.",
        },
        {
          question: 'Is there a stolen jewelry database?',
          answer:
            "There is no single public database. Thefts are reported to local police and insurers, and pawn shops report what they buy to police in many areas. SafeOrStolen lets owners report stolen pieces with their numbers and lets buyers search those reports and public web results for free for their first 2 checks.",
        },
        {
          question: 'What does a polished area inside a ring mean?',
          answer:
            "It can mean an engraving has been removed. Owners do resize and polish rings, so it isn't proof, but combined with a seller who has no papers and wants cash quickly, it is a strong reason to walk away.",
        },
        {
          question: 'What should I do if I think jewelry I bought is stolen?',
          answer:
            "Stop wearing or reselling it, keep the listing, messages and payment record, and call your local police non-emergency line. If it is returned to the owner, the record of what you paid and to whom helps any claim against the seller.",
        },
      ],
    }}
  />
);

export default CheckJewelryPage;
