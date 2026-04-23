import React from 'react';
import { Barcode, Layers, Wrench } from 'lucide-react';
import { AILandingLayout } from '@/components/ai-landing/AILandingLayout';

const AISerialCheckPage: React.FC = () => {
  return (
    <AILandingLayout
      slug="ai-serial-number-check"
      title="AI Serial Number Check — Verify Stolen Items | SafeOrStolen"
      description="AI-powered serial number verification for electronics, bikes, firearms, tools, appliances, and more. Paste it, snap a photo, or speak it — the AI handles the rest."
      h1="AI Serial Number Check — Any Item, One Tool"
      eyebrow="AI · Serial Verification"
      subheadline="Whether it's a laptop, a bike, a firearm, a power tool, or a high-end appliance — paste the serial, photograph the label, or describe the item. The AI picks the right database and runs the check."
      identifierLabel="Serial number"
      exampleIdentifier="C7XJK2P9LMN0"
      aiCapabilities={[
        {
          icon: Barcode,
          title: 'Reads any serial format',
          body: 'No standard format means no easy lookup — unless the AI normalizes it first. Paste anything, the model strips noise and validates against known manufacturer patterns.',
        },
        {
          icon: Layers,
          title: 'Routes to the right database',
          body: 'Bikes go to BikeIndex. Firearms to ATF + HotGunz. Apple electronics to GSX-equivalent checks. Tools to brand-specific theft databases. The AI picks based on what you tell it.',
        },
        {
          icon: Wrench,
          title: 'Catches common scams',
          body: 'Mismatched serials between item and packaging, fake "verification" QR codes, and sellers who change one digit between listing photos — the AI flags all of them.',
        },
      ]}
      sections={[
        {
          heading: 'The problem with traditional serial checks',
          paragraphs: [
            'Serial numbers are the wild west of identification. There\'s no global standard, no validation algorithm like a VIN check digit, and most manufacturers use formats that change between product lines and even between model years. A buyer staring at a sticker on the back of a stolen MacBook has no way of knowing whether the format is even valid, let alone which database to query.',
            'AI Serial Number Check absorbs all of that complexity. You tell the AI what kind of item it is (or just upload a photo) and paste whatever serial you have. The AI matches the format against known manufacturer patterns, picks the appropriate database, and runs the check.',
            'For categories without a centralized stolen-property database — most consumer electronics, power tools, jewelry, musical instruments, appliances — the AI falls back to our proprietary community theft database, which contains user-submitted reports from victims who don\'t have access to law-enforcement-grade systems.',
          ],
        },
        {
          heading: 'Categories we cover',
          paragraphs: [
            'Bikes and e-bikes: BikeIndex (the largest international stolen-bicycle registry, 1M+ entries) plus our community database. The AI accepts brand-specific serial locations — under the bottom bracket on most bikes, on the frame near the seat post on others.',
            'Firearms: ATF stolen-gun records, HotGunz peer-to-peer firearm registry, and state law-enforcement feeds where available. The AI handles legal variations between states (some states require additional disclosure for private-party transfers — we surface that).',
            'Apple electronics: serial validation against Apple\'s public format rules, blacklist status, Activation Lock status (for iPhones, iPads, Macs with T2/M-series chips), AppleCare status, and stolen-device community reports.',
            'Power tools, appliances, jewelry, musical instruments, sporting goods: brand-specific theft databases (where available — Milwaukee, DeWalt, Stihl, Snap-on all maintain anti-theft tracking) plus our community submissions.',
          ],
        },
        {
          heading: 'How AI handles serial OCR',
          paragraphs: [
            'Upload a photo of any product label, sticker, engraved plate, or QR code. The vision model finds the serial region, reads it character-by-character, and validates against the expected format for the item type.',
            'Common OCR pitfalls — confusing 0 with O, 1 with I, 5 with S — are handled automatically using context. If the AI sees a serial like "OO0001" it knows that\'s ambiguous and flags it for confirmation rather than guessing.',
            'For items where the serial appears in multiple places (under a battery, on a sticker, etched into a frame), the AI can compare them. Mismatches between the visible label and the underlying engraved serial are a near-certain sign of a stolen item with a swapped sticker.',
          ],
        },
        {
          heading: 'Red flags the AI watches for',
          paragraphs: [
            'Removed or scratched serial numbers: in most US states, possession of an item with an obliterated serial is itself a crime, regardless of whether you knew. The AI flags these immediately.',
            'Serials that don\'t match the manufacturer\'s known format: a "Macbook Pro" with a 6-character serial isn\'t real. A bike with a serial that doesn\'t match the brand\'s pattern is suspicious. The AI catches these.',
            'Sellers who refuse to provide a clear photo of the serial, send a blurred image, or change the serial between listing photos and in-person viewing. Each of those is a strong predictor of a stolen-property listing — the AI surfaces all three as part of the verdict.',
          ],
        },
      ]}
      faqs={[
        {
          q: 'What item types does AI Serial Check support?',
          a: 'Bikes, e-bikes, firearms, Apple electronics, laptops, smartphones (use AI IMEI Check for cellular phones), power tools, appliances, jewelry, musical instruments, sporting goods, marine equipment (HIN), and more.',
        },
        {
          q: 'Where do I find a serial number?',
          a: 'It depends on the item: under the bottom bracket on bikes, on the receiver of a firearm, on the bottom of a laptop, inside the battery compartment of power tools, on the back panel of appliances. The AI can read any of these from a photo.',
        },
        {
          q: 'What if the serial isn\'t in any database?',
          a: 'The AI returns "no theft reports found" with a confidence score. That\'s usually a good sign — but for high-value items we recommend cross-checking with a second identifier (purchase receipt, original packaging) before completing the transaction.',
        },
        {
          q: 'Can the AI tell if the serial sticker has been swapped?',
          a: 'In some cases, yes — when the item type has a serial in multiple locations (etched + sticker), the AI compares them. Mismatches are flagged as high-risk.',
        },
        {
          q: 'Does this work for stolen firearms?',
          a: 'Yes. We check ATF stolen-firearms records, HotGunz, and state law-enforcement feeds. For private-party firearm transfers, we recommend completing a serial check before any money changes hands.',
        },
        {
          q: 'Is this free?',
          a: '2 free serial checks across all categories with no credit card. After that, $0.99 per check or $10/month unlimited.',
        },
      ]}
      relatedLinks={[
        { label: 'AI Verify Hub', to: '/ai-verify' },
        { label: 'AI IMEI Check', to: '/ai-imei-check' },
        { label: 'AI VIN Check', to: '/ai-vin-check' },
        { label: 'AI Plate Check', to: '/ai-license-plate-check' },
        { label: 'Serial Number Checker (classic)', to: '/serial-number-checker' },
        { label: 'Check bike before buying', to: '/check-bike' },
        { label: 'Firearms stolen check', to: '/firearms-check' },
      ]}
    />
  );
};

export default AISerialCheckPage;
