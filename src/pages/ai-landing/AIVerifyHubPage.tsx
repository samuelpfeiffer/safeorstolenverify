import React from 'react';
import { Brain, Workflow, MessageSquare } from 'lucide-react';
import { AILandingLayout } from '@/components/ai-landing/AILandingLayout';

const AIVerifyHubPage: React.FC = () => {
  return (
    <AILandingLayout
      slug="ai-verify"
      title="AI Verify Anything Stolen — IMEI, VIN, Plate, Serial | SafeOrStolen"
      description="The AI-powered way to verify any secondhand item before you buy. Paste, snap, or speak — our AI auto-detects IMEI, VIN, license plates, and serial numbers and runs 100+ database checks in seconds."
      h1="AI Verify Anything — Before You Buy"
      eyebrow="AI-Powered Verification"
      subheadline="Paste an IMEI, VIN, license plate, serial number, or marketplace listing. Our AI auto-detects what you sent, picks the right databases, and gives you a verdict in seconds."
      identifierLabel="Any identifier"
      exampleIdentifier=""
      aiCapabilities={[
        {
          icon: Brain,
          title: 'Auto-detect what you paste',
          body: 'You don\'t need to know whether it\'s an IMEI, VIN, plate, or serial. The AI reads the format, validates the checksum, and routes to the right verification flow.',
        },
        {
          icon: Workflow,
          title: 'Picks the right databases',
          body: 'Phone? It hits GSMA + carrier blacklists. Vehicle? NICB + state DMV. Bike? BikeIndex + community theft reports. The AI fans out — you get one clean answer.',
        },
        {
          icon: MessageSquare,
          title: 'Explains the result in plain English',
          body: 'Every verdict comes with a human-readable summary, confidence score, and next steps. No cryptic "yes/no" — you understand why and what to do.',
        },
      ]}
      sections={[
        {
          heading: 'Why we built an AI-first verification flow',
          paragraphs: [
            'Buying something secondhand should not require knowing the difference between an IMEI, an MEID, a VIN, a HIN, or a serial-with-prefix. For most people, those are just "the number on the box." But the verification industry has spent two decades forcing buyers into the wrong form, on the wrong page, querying the wrong database — and then blaming them when the result comes back inconclusive.',
            'SafeOrStolen\'s AI Verify flow replaces all of that with one chat box. You paste, snap, or speak whatever you have. The AI handles classification, validation, database routing, and result interpretation. The job that used to require five separate lookup tools — and a working knowledge of GSMA, NICB, ATF, and state DMV systems — now takes one sentence.',
            'Behind the scenes we run the same 100+ data sources our enterprise customers pay for: FBI NCIC, NICB, GSMA Device Registry, ATF stolen firearms records, all 50 US state law enforcement feeds, BikeIndex, carrier blacklists, insurance theft reports, and our own community-submitted stolen-item database. The difference is that the AI decides which of those to query — instantly — based on what you sent it.',
          ],
        },
        {
          heading: 'What "AI verification" actually means here',
          paragraphs: [
            'A lot of services slap "AI" on a button and call it a day. Ours actually uses AI in three places where it matters. First, identifier classification: the model reads the raw text or image you send and decides whether it\'s an IMEI (15 digits, Luhn-valid), a VIN (17 alphanumeric, ISO 3779), a license plate (state-aware patterns), a serial number (free-form), or a marketplace URL.',
            'Second, image OCR: if you upload a photo of a phone\'s settings screen, a car\'s VIN plate, or a bike\'s serial sticker, our vision model extracts the identifier, normalizes it, and runs the verification automatically. You don\'t type anything.',
            'Third, result explanation: when results come back from multiple databases — sometimes with conflicting signals — the AI synthesizes them into a single recommendation. "Safe to buy," "do not purchase," or "ask the seller for these specific things first." That last step is what most competitors skip, and it\'s the one buyers actually need.',
          ],
        },
        {
          heading: 'Who uses AI Verify',
          paragraphs: [
            'Marketplace shoppers (eBay, Facebook Marketplace, Craigslist, OfferUp, Mercari) make up the largest segment. They\'re typically checking a phone, laptop, console, or bike before completing a transaction. The AI flow is faster than typing into a 1990s-era form on a competitor site, and the verdict is delivered in plain English.',
            'Used-car buyers paste VINs (or just photograph the dashboard plate) before going to see a vehicle. Pawn-shop owners batch-check inventory at intake. Independent dealers use it to spot title-washed cars. Bike-shop owners check trade-ins against the BikeIndex national registry. Firearms buyers verify serials against ATF stolen-property records before completing a private-party transfer.',
            'Across all of those use cases the workflow is identical: open the chat, paste what you have, get a verdict. The AI absorbs all the format-specific complexity that used to live in the user\'s head.',
          ],
        },
        {
          heading: 'How AI Verify compares to traditional checkers',
          paragraphs: [
            'Legacy services force you to pick the right tool first: an IMEI checker won\'t accept a VIN, a VIN checker won\'t accept a license plate, and almost none of them accept a marketplace URL or a photo. If you\'re wrong about the format, you get an error. If you\'re right but the seller gave you a partial number, you get nothing.',
            'AI Verify is different in three measurable ways. It accepts any input modality (text, image, voice, URL). It auto-corrects partial or noisy identifiers when possible. And it gives you a recommendation, not just a database hit-or-miss. For high-stakes purchases — anything over $100 — that recommendation is the part that prevents you from wiring money to a thief.',
            'You still get raw database results in your downloadable report. The AI doesn\'t hide them. It just translates them into something useful before you make a decision.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Is AI Verify free?',
          a: 'You get 2 free verifications, no credit card required. After that it\'s $0.99 per check or $10/month for unlimited verifications across every category.',
        },
        {
          q: 'What identifiers can the AI detect?',
          a: 'IMEI (phones), VIN (cars, trucks, motorcycles, trailers), license plates (all 50 US states), serial numbers (electronics, bikes, firearms, tools, appliances), HINs (boats), and marketplace URLs from eBay, Facebook Marketplace, Craigslist, OfferUp, Mercari, and others.',
        },
        {
          q: 'Can I upload a photo instead of typing?',
          a: 'Yes. Snap a picture of a phone\'s About screen, a car\'s VIN plate, a bike\'s serial sticker, or a firearm\'s receiver — the AI reads the identifier, validates it, and runs the check automatically.',
        },
        {
          q: 'Which databases does the AI search?',
          a: 'It picks the relevant ones based on what you sent. Phones go to GSMA Device Registry and carrier blacklists. Vehicles go to NICB, NHTSA, and state DMV. Firearms go to ATF stolen-property records and HotGunz. Bikes hit BikeIndex. Plus our own community-submitted stolen-item database for everything.',
        },
        {
          q: 'How accurate is the AI verdict?',
          a: 'AI verdicts come with a confidence score (0–100). Anything above 80 is high-confidence based on direct database matches. Below 60 we recommend treating the result as inconclusive and asking the seller for additional verification (police report, original receipt, second identifier).',
        },
        {
          q: 'Is my search private?',
          a: 'Yes. We don\'t sell search history. Verifications are logged for fraud-prevention and rate-limiting purposes only, and you can request deletion of your history anytime through your account.',
        },
      ]}
      relatedLinks={[
        { label: 'AI IMEI Check', to: '/ai-imei-check' },
        { label: 'AI VIN Check', to: '/ai-vin-check' },
        { label: 'AI License Plate Check', to: '/ai-license-plate-check' },
        { label: 'AI Serial Number Check', to: '/ai-serial-number-check' },
        { label: 'Pricing', to: '/pricing' },
        { label: 'How it works', to: '/how-it-works' },
      ]}
    />
  );
};

export default AIVerifyHubPage;
