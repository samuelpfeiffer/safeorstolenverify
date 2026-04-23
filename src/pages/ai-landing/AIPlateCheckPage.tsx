import React from 'react';
import { Hash, MapPin, Eye } from 'lucide-react';
import { AILandingLayout } from '@/components/ai-landing/AILandingLayout';

const AIPlateCheckPage: React.FC = () => {
  return (
    <AILandingLayout
      slug="ai-license-plate-check"
      title="AI License Plate Lookup — Stolen Vehicle Check | SafeOrStolen"
      description="AI-powered license plate verification. Snap a photo of any US plate or type it in — the AI detects the state, finds the linked VIN, and checks stolen-vehicle databases."
      h1="AI License Plate Check — Photograph It, Verify It"
      eyebrow="AI · Plate Verification"
      subheadline="Snap a photo of any US license plate, type it in, or just describe it. Our AI auto-detects the issuing state, cross-references the VIN, and flags stolen vehicles instantly."
      identifierLabel="License plate"
      exampleIdentifier="7XYZ123"
      aiCapabilities={[
        {
          icon: Hash,
          title: 'State-aware pattern matching',
          body: 'The AI recognizes plate formats from all 50 US states + DC. Tell it the state, or let it guess from the plate format and surrounding visual context.',
        },
        {
          icon: Eye,
          title: 'Reads plates from photos',
          body: 'Snap any angle — front, back, dash-cam, security camera. The vision model normalizes letters/numbers and runs the check even with partial occlusion.',
        },
        {
          icon: MapPin,
          title: 'Cross-references the VIN',
          body: 'When state DMV linkage is available, the AI pulls the registered VIN behind the plate and runs the full stolen-vehicle check on the underlying car.',
        },
      ]}
      sections={[
        {
          heading: 'Why plate-first verification matters',
          paragraphs: [
            'In most secondhand-vehicle transactions, the seller shows up with the car before they show up with the title or VIN. That\'s a problem: the most powerful stolen-vehicle databases (NICB, state DMV) work off the VIN, not the plate. Buyers who only have the plate end up unable to verify anything until they\'re standing next to the vehicle — at which point walking away gets awkward.',
            'AI License Plate Check fixes that gap. Photograph the plate from a parking lot, a Craigslist listing, or a dash cam. The AI auto-detects the issuing state from the plate format, and where state DMV linkage allows, retrieves the registered VIN. From there it runs the full stolen-vehicle verification across NICB, state law-enforcement, and our community theft database.',
            'For sellers who try to hide the VIN, this is a major problem — for buyers, it\'s a major win. You can verify a vehicle\'s status before you ever leave your house.',
          ],
        },
        {
          heading: 'What we check on every plate',
          paragraphs: [
            'Plate-level: active stolen-plate flags from state law enforcement (where available), expired or revoked registration status, and any community-submitted reports tying the plate to a known stolen vehicle.',
            'VIN-level (when DMV linkage is available): NICB stolen-vehicle status, salvage/junk/rebuilt title brands, lien status, total-loss declarations from participating insurers, and active recalls.',
            'Pattern-level: the AI also flags plate formats that don\'t match the claimed state, "Z plates" (temporary tags being used past expiration), and visually altered plates — common signs of a stolen vehicle being moved between jurisdictions.',
          ],
        },
        {
          heading: 'How AI plate detection works on a photo',
          paragraphs: [
            'Upload a photo and the vision model first locates the plate region using object detection, then runs OCR on just that region. It compensates for angle, glare, partial occlusion, and low light. The output is a normalized plate string plus a confidence score.',
            'If state isn\'t obvious from the photo (some states have dozens of specialty designs), the AI matches the plate format against known state patterns. California 7-character plates, Texas 7-character plates, New York 8-character plates, and Florida 7-character plates each have distinct rules — the model knows them all.',
            'When confidence is below 75%, the AI asks you to confirm the state and individual characters before running the check. That keeps you from wasting a verification credit on a misread plate.',
          ],
        },
        {
          heading: 'Legal use of plate lookups',
          paragraphs: [
            'Reading a license plate visible on a public road is legal in all 50 US states. Running it against publicly accessible stolen-vehicle databases is also legal. What\'s regulated is the use of full DMV records (owner name, address) — those are restricted under the federal Driver\'s Privacy Protection Act (DPPA) and state equivalents, and SafeOrStolen does not return owner-identifying information.',
            'Our plate check returns vehicle-related signals only: stolen status, title brand, recall data, registration validity. We do not return owner names, addresses, phone numbers, or any other personal information. That keeps the tool legal for buyers, journalists, repo operators, and recovery agents to use without DPPA exposure.',
            'If you need full DMV records for a legitimate business purpose (insurance investigation, tow recovery, legal discovery), you\'ll need to go through a DPPA-compliant data broker. We don\'t replace those services — we replace the much-larger market of buyers who just want to know if a car is stolen.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Is AI License Plate Check free?',
          a: '2 free plate checks with no credit card. After that, $0.99 per check or $10/month unlimited across all categories.',
        },
        {
          q: 'Does it work for all 50 states?',
          a: 'Yes — the AI recognizes plate formats from all 50 US states plus DC. VIN linkage availability varies by state DMV data-sharing rules.',
        },
        {
          q: 'Can it read a plate from a dash cam or security footage?',
          a: 'Yes. Upload any image with a visible plate. The AI handles angle, glare, and partial occlusion. Below 75% confidence it asks you to confirm individual characters.',
        },
        {
          q: 'Will I see the owner\'s name or address?',
          a: 'No. We do not return owner-identifying information — that\'s restricted under the DPPA. Plate lookup returns vehicle-status signals only (stolen, salvage, recall, registration).',
        },
        {
          q: 'What if I only have a partial plate?',
          a: 'Partial plate checks are limited but possible if combined with state, vehicle make/model, or approximate location. The AI will tell you when the partial is too sparse to verify.',
        },
        {
          q: 'Is this legal to use as a private buyer?',
          a: 'Yes. Reading plates visible on a public road and checking them against stolen-vehicle databases is legal in all US jurisdictions. We never return personal owner data, which is the part the DPPA regulates.',
        },
      ]}
      relatedLinks={[
        { label: 'AI Verify Hub', to: '/ai-verify' },
        { label: 'AI IMEI Check', to: '/ai-imei-check' },
        { label: 'AI VIN Check', to: '/ai-vin-check' },
        { label: 'AI Serial Check', to: '/ai-serial-number-check' },
        { label: 'License Plate Lookup (classic)', to: '/license-plate-lookup' },
        { label: 'Check car before buying', to: '/check-car' },
      ]}
    />
  );
};

export default AIPlateCheckPage;
