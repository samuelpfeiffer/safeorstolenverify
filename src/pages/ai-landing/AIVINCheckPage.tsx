import React from 'react';
import { Car, Camera, FileSearch } from 'lucide-react';
import { AILandingLayout } from '@/components/ai-landing/AILandingLayout';

const AIVINCheckPage: React.FC = () => {
  return (
    <AILandingLayout
      slug="ai-vin-check"
      title="AI VIN Check — Verify Any Vehicle Stolen Status | SafeOrStolen"
      description="AI-powered VIN lookup. Paste a 17-character VIN, photograph the dashboard plate, or speak it — we check NICB, NHTSA, and all 50 state DMV records in seconds."
      h1="AI VIN Check — Verify Any Vehicle Before You Buy"
      eyebrow="AI · VIN Verification"
      subheadline="Paste a 17-character VIN, photograph the dashboard plate, or describe the vehicle. The AI validates the VIN, checks NICB and 50-state DMV records, and tells you whether to walk away."
      identifierLabel="VIN"
      exampleIdentifier="1HGBH41JXMN109186"
      aiCapabilities={[
        {
          icon: Car,
          title: 'Validates VINs the right way',
          body: 'The AI confirms ISO 3779 format (17 characters, no I/O/Q), runs the VIN check digit, and rejects malformed numbers before they waste a database query.',
        },
        {
          icon: Camera,
          title: 'OCRs dashboard + door-jamb plates',
          body: 'Snap a picture of the VIN plate through the windshield or on the driver-side door jamb. The vision model extracts and normalizes the VIN automatically.',
        },
        {
          icon: FileSearch,
          title: 'Cross-references title status',
          body: 'Beyond stolen status, the AI flags salvage titles, flood damage, total losses, odometer rollback, and lien holders — all from the same VIN entry.',
        },
      ]}
      sections={[
        {
          heading: 'Why AI changes the VIN check workflow',
          paragraphs: [
            'A traditional VIN check is a five-step process: find the VIN, copy it correctly, navigate to the right database, pay for a single report, and try to interpret the legalese in the response. For most used-car buyers — especially those meeting a private seller in a parking lot — that process is so painful they skip it. The result: thousands of stolen, salvage-titled, and odometer-rolled-back vehicles change hands every week in the US alone.',
            'AI VIN Check collapses all of that into one interaction. You photograph the VIN through the windshield, paste it from a Craigslist listing, or just say it out loud. The AI validates the 17-character format, runs the check-digit math (catching typos and tampering), and queries NICB plus state DMV systems in parallel.',
            'The verdict is delivered in plain English with a confidence score, full source breakdown, and a downloadable PDF you can show the seller or use in a dispute. The whole flow takes under 30 seconds — about the time it would take you to type the VIN into a competitor\'s broken form.',
          ],
        },
        {
          heading: 'What we check on every VIN',
          paragraphs: [
            'NICB (National Insurance Crime Bureau) VINCheck: the authoritative US database for vehicles reported stolen and not recovered, plus vehicles declared total losses by participating insurers. Coverage extends across all 50 states.',
            'State DMV stolen-vehicle feeds: where available, we query the state\'s law-enforcement title-and-registration system for active stolen flags, salvage titles, junk titles, and rebuilt-title designations.',
            'NHTSA recall and safety records: the AI surfaces any open recalls associated with the VIN, which sellers often "forget" to mention. Plus our community-submitted stolen-vehicle reports — useful for cars stolen in the last 24 hours that haven\'t hit official feeds yet.',
          ],
        },
        {
          heading: 'Where to find a VIN on a vehicle',
          paragraphs: [
            'The most accessible location is the lower-left corner of the windshield, visible from outside the vehicle. You can photograph it without even opening the door — useful when meeting a seller who hasn\'t shown up yet, or doing a drive-by check on a "for sale" car parked on a street.',
            'The driver-side door jamb sticker also has the VIN, plus the manufacture date and original tire-pressure spec. Inside the engine bay, the VIN is stamped on the firewall or strut tower on most vehicles. On title documents, registration cards, and insurance cards, the VIN appears in the top-right area.',
            'If the seller refuses to provide the VIN, or only provides a partial VIN ("the last 6 digits"), treat that as a major red flag. The AI will flag it and recommend you walk away. Legitimate sellers have no reason to hide a VIN — it\'s public information visible from the street.',
          ],
        },
        {
          heading: 'What to do when AI flags a VIN',
          paragraphs: [
            'Stolen vehicle: do not buy, do not meet the seller in a private location, and consider reporting the listing to local law enforcement (most departments have an online tip form). Possession of a stolen vehicle exposes you to felony charges and immediate vehicle seizure.',
            'Salvage or junk title: this means the vehicle was previously declared a total loss by an insurer. It can sometimes be rebuilt and resold legally, but the resale value is 20–60% lower than a clean-title equivalent and most lenders will not finance it. The AI tells you which type of branded title is on file.',
            'Lien on file: an active lien means someone else (usually a bank) still has a financial interest in the vehicle. You cannot legally take ownership until the lien is released. The AI flags this so you can ask the seller for a current payoff letter from the lienholder before transferring any money.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Is the AI VIN check free?',
          a: '2 free VIN checks with no credit card. After that, $0.99 per check or $10/month unlimited.',
        },
        {
          q: 'Can the AI read a VIN from a photo?',
          a: 'Yes. Photograph the windshield plate, door jamb, or title document. The AI extracts and validates the VIN automatically.',
        },
        {
          q: 'What\'s the difference between AI VIN Check and Carfax?',
          a: 'Carfax is a paid history report focused on accidents and service. AI VIN Check is real-time stolen-status verification across NICB, state DMV, and law enforcement feeds — and it\'s free for your first 2 checks.',
        },
        {
          q: 'Does this work for motorcycles and trailers?',
          a: 'Yes. Any vehicle with a 17-character ISO 3779 VIN: cars, trucks, motorcycles, RVs, trailers, and most powersports vehicles. Boats use HINs (different format) — try the AI Serial Check for those.',
        },
        {
          q: 'What if the VIN is shorter than 17 characters?',
          a: 'Pre-1981 vehicles used VINs of varying lengths (5–13 characters). The AI accepts these but coverage is limited — older vehicles are outside most modern stolen-vehicle databases.',
        },
        {
          q: 'Can I run a VIN before viewing the car?',
          a: 'Yes — we recommend it. Run the check before you drive across town to see the vehicle. If it comes back flagged, you\'ve saved yourself a trip and avoided a potentially dangerous in-person meeting.',
        },
      ]}
      relatedLinks={[
        { label: 'AI Verify Hub', to: '/ai-verify' },
        { label: 'AI IMEI Check', to: '/ai-imei-check' },
        { label: 'AI Plate Check', to: '/ai-license-plate-check' },
        { label: 'AI Serial Check', to: '/ai-serial-number-check' },
        { label: 'VIN Checker (classic)', to: '/vin-checker' },
        { label: 'Check car before buying', to: '/check-car' },
      ]}
    />
  );
};

export default AIVINCheckPage;
