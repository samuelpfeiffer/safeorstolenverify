import type { StateVinData } from './allStateVinData';

/**
 * Washington, DC VIN lookup page data.
 * Uses general, non-jurisdiction-specific guidance (no statute numbers, fees,
 * or database names) plus the agency's established name: DC DMV.
 */
export const DC_VIN_DATA: StateVinData = {
  state: 'Washington, DC',
  stateCode: 'DC',
  slug: 'washington-dc-vin-lookup',
  title: 'Washington DC VIN Lookup - Free DC Stolen Vehicle Check | SafeOrStolen',
  metaDescription:
    'Free Washington, DC VIN lookup. Check whether a DC vehicle is reported stolen before you buy, and verify the title matches the VIN on the car.',
  topCities: ['Washington'],
  dmvLink: 'https://dmv.dc.gov',
  content: {
    intro:
      'Buying a used vehicle in Washington, DC? Check the VIN before money changes hands. A VIN check helps you confirm the vehicle has not been reported stolen and that the paperwork lines up with the car in front of you.',
    whyCheck:
      'Washington, DC sits at the center of a dense multi-state metro area, so vehicles routinely cross jurisdiction lines between sales. That makes it especially important to verify a VIN against theft reports rather than relying on the seller\'s paperwork alone. Always match the VIN on the dashboard, the door jamb sticker, and the title document.',
    localLaws:
      'Buying a stolen vehicle can leave you without the car and without your money, even when you had no idea it was stolen. The DC DMV verifies vehicle documentation at titling and registration, so a vehicle with theft or title problems can be rejected at the counter. Verify before you pay, and report anything suspicious to local law enforcement.',
  },
  faqs: [
    {
      question: 'How do I check whether a Washington, DC vehicle is stolen?',
      answer:
        'Enter the 17-character VIN into SafeOrStolen\'s free VIN checker. We search the theft and verification sources we integrate with and return a clear result in seconds. Also confirm the VIN on the vehicle matches the VIN on the title.',
    },
    {
      question: 'What should I check before buying a used car in DC?',
      answer:
        'Verify the VIN against theft records, confirm the seller\'s name matches the title, look for signs the VIN plate has been tampered with, and make sure there are no outstanding liens before you hand over payment. The DC DMV handles the title transfer once the sale is complete.',
    },
  ],
};
