import React from 'react';
import { Smartphone, ScanLine, ShieldAlert } from 'lucide-react';
import { AILandingLayout } from '@/components/ai-landing/AILandingLayout';

const AIIMEICheckPage: React.FC = () => {
  return (
    <AILandingLayout
      slug="ai-imei-check"
      title="AI IMEI Check — Verify a Stolen Phone in Seconds | SafeOrStolen"
      description="AI-powered IMEI verification. Paste your 15-digit IMEI, snap the About screen, or speak it — we check GSMA, carrier blacklists, and stolen-phone databases in seconds."
      h1="AI IMEI Check — Verify Any Phone Before You Buy"
      eyebrow="AI · IMEI Verification"
      subheadline="Paste a 15-digit IMEI, photograph the phone's About screen, or just say it out loud. Our AI validates the IMEI, checks GSMA + carrier blacklists, and tells you in plain English whether the phone is safe to buy."
      identifierLabel="IMEI"
      exampleIdentifier="359123456789012"
      aiCapabilities={[
        {
          icon: Smartphone,
          title: 'Reads any IMEI format',
          body: '15-digit IMEI, 14-digit IMEISV, dashed, spaced, copied from a screenshot — the AI normalizes and Luhn-validates it before running the check.',
        },
        {
          icon: ScanLine,
          title: 'OCRs the About screen',
          body: 'Snap a photo of Settings → About Phone or the box label. The vision model extracts the IMEI, validates it, and runs the verification automatically.',
        },
        {
          icon: ShieldAlert,
          title: 'Spots blacklist + carrier locks',
          body: 'Beyond stolen status, the AI flags blacklisted IMEIs, financial blocks, carrier locks, iCloud activation locks, and previous insurance claims.',
        },
      ]}
      sections={[
        {
          heading: 'Why an AI-driven IMEI check beats a regular one',
          paragraphs: [
            'A standard IMEI checker takes a 15-digit number, hits one or two databases, and returns a status. That works fine if you already know what an IMEI is, where to find it, and how to copy it correctly. For most secondhand-phone buyers — especially those buying off Facebook Marketplace or Craigslist — none of those things are obvious.',
            'AI IMEI Check is built for the way buyers actually shop. You can paste the number, type it with extra spaces or dashes, photograph the seller\'s About screen, or even ask the AI "is this iPhone IMEI safe: 359123456789012" — all of those work. The AI handles parsing, validation, and routing to the right databases automatically.',
            'When the result comes back, it\'s not just a green or red dot. The AI tells you whether the phone is reported stolen, blacklisted by carriers, locked to a financial institution, has an active iCloud lock, or has any prior insurance claims that should make you walk away from the deal.',
          ],
        },
        {
          heading: 'What we check on every IMEI',
          paragraphs: [
            'GSMA Device Registry: the global database carriers use to blacklist devices reported lost or stolen. A blacklisted IMEI cannot be activated on most major networks worldwide, which means even if the phone turns on today, the next owner could end up with a brick.',
            'Carrier blacklists for AT&T, T-Mobile, Verizon, Sprint, and major international carriers. These overlap with GSMA but sometimes contain newer entries not yet propagated globally.',
            'Stolen-phone databases including FBI NCIC entries, state law-enforcement feeds, and our own community-submitted reports. Plus financial-block status (a phone still being paid off through a carrier financing plan), iCloud activation lock for Apple devices, and Knox/Samsung lock status for compatible Android devices.',
          ],
        },
        {
          heading: 'How to find your phone\'s IMEI',
          paragraphs: [
            'The fastest method works on every phone: dial *#06# on the keypad. The IMEI appears on screen instantly. You can read it to the AI (voice mode), type it, or screenshot it and upload the photo.',
            'On iPhone: Settings → General → About → IMEI. On most Android phones: Settings → About Phone → Status → IMEI. The IMEI is also printed on the original box and inside the SIM tray on iPhones.',
            'If you only have a partial IMEI — say the seller blurred part of a screenshot for "privacy" — the AI can flag that as a red flag and give you next-step advice. Sellers who refuse to share a complete IMEI are almost always hiding something.',
          ],
        },
        {
          heading: 'What to do if the AI flags a phone',
          paragraphs: [
            'If the verification comes back stolen, blacklisted, or financially blocked: walk away. Don\'t send money. Don\'t meet the seller in person if the meeting was set up specifically around this device. A stolen IMEI is a federal-level signal — buying the phone exposes you to possession-of-stolen-property charges in most US states, regardless of whether you knew.',
            'If the result is inconclusive (low confidence), ask the seller for a second identifier: the original purchase receipt, the box, or a video showing the IMEI displayed live on the device. Legitimate sellers can produce at least one of those instantly.',
            'If the result is clean, your AI report includes a downloadable PDF you can share with the seller as proof you did your due diligence. Many of our users use that report to negotiate price (a verified-clean phone is worth more) or to satisfy marketplace dispute requirements if something goes wrong post-sale.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'Is the AI IMEI check free?',
          a: 'You get 2 free IMEI checks with no credit card. After that it\'s $0.99 per check or $10/month unlimited.',
        },
        {
          q: 'Can the AI read an IMEI from a photo?',
          a: 'Yes. Upload a photo of the phone\'s About screen, the box label, or a *#06# screenshot. The AI extracts the IMEI, validates it, and runs the verification.',
        },
        {
          q: 'What does "blacklisted" mean?',
          a: 'A blacklisted IMEI has been reported lost, stolen, or unpaid to GSMA or a carrier. Blacklisted phones cannot be activated on most major networks. Avoid buying.',
        },
        {
          q: 'Does the AI check iPhone iCloud lock?',
          a: 'Yes. For Apple devices, we report iCloud activation lock status. A locked iPhone is unusable until the original owner removes it — which a thief cannot do.',
        },
        {
          q: 'How accurate is the IMEI database?',
          a: 'GSMA, carrier, and law-enforcement databases are updated continuously, but no database is 100% complete. For high-value phones we recommend cross-checking with a second identifier.',
        },
        {
          q: 'Will the seller know I checked?',
          a: 'No. IMEI verification is read-only. The seller and the carrier are not notified that you ran a check.',
        },
      ]}
      relatedLinks={[
        { label: 'AI Verify Hub', to: '/ai-verify' },
        { label: 'AI VIN Check', to: '/ai-vin-check' },
        { label: 'AI Plate Check', to: '/ai-license-plate-check' },
        { label: 'AI Serial Check', to: '/ai-serial-number-check' },
        { label: 'IMEI Checker (classic)', to: '/imei-checker' },
        { label: 'Check phone before buying', to: '/check-phone' },
      ]}
    />
  );
};

export default AIIMEICheckPage;
