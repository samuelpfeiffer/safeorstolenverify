import React, { useCallback } from 'react';
import { Shield, FileText, ShoppingBag, Wrench, Lock, Bike, Copy, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateCompliancePDF } from '@/utils/complianceCertificate';
import { useNavigate } from 'react-router-dom';
import type { VerificationResult } from './UniversalTrustEngine';

interface OfferCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  link: string;
}

const OFFERS_BY_TYPE: Record<string, OfferCard[]> = {
  phone: [
    { icon: <Shield className="w-5 h-5" />, title: 'Device Insurance', description: 'Protect your verified phone from damage, theft & accidents. Plans from $5/month.', cta: 'Get Protected →', link: '/go/device-insurance' },
    { icon: <FileText className="w-5 h-5" />, title: 'Full Phone History Report', description: 'Get carrier unlock status, warranty info, previous owners & more.', cta: 'Get Full Report →', link: '/go/phone-report' },
    { icon: <ShoppingBag className="w-5 h-5" />, title: 'Phone Accessories', description: 'Case, screen protector & charger for your verified device.', cta: 'Shop Now →', link: '/go/phone-accessories' },
  ],
  vehicle: [
    { icon: <FileText className="w-5 h-5" />, title: 'Full Vehicle History Report', description: 'Accident history, service records, ownership timeline, odometer readings.', cta: 'Get Full Report →', link: '/go/vehicle-report' },
    { icon: <Shield className="w-5 h-5" />, title: 'Auto Insurance Quote', description: 'Compare rates from top insurers. Average savings of $600/year.', cta: 'Compare Rates →', link: '/go/auto-insurance' },
    { icon: <Wrench className="w-5 h-5" />, title: 'Extended Warranty', description: 'Protect your verified vehicle with an extended warranty plan.', cta: 'Get Quote →', link: '/go/vehicle-warranty' },
  ],
  bicycle: [
    { icon: <Bike className="w-5 h-5" />, title: 'Register Your Bike', description: 'Register on BikeIndex for free — if it\'s ever stolen, you\'ll have proof of ownership.', cta: 'Register Free →', link: '/go/bike-register' },
    { icon: <Shield className="w-5 h-5" />, title: 'Bicycle Insurance', description: 'Theft, damage & liability coverage for your verified bike.', cta: 'Get Covered →', link: '/go/bike-insurance' },
  ],
  firearm: [
    { icon: <Shield className="w-5 h-5" />, title: 'Firearm Insurance', description: 'Coverage for theft, damage & liability on your verified firearm.', cta: 'Get Covered →', link: '/go/firearm-insurance' },
    { icon: <Lock className="w-5 h-5" />, title: 'Gun Safe', description: 'Secure storage for your verified firearm. Top-rated safes from $149.', cta: 'Shop Safes →', link: '/go/gun-safe' },
  ],
  default: [
    { icon: <Shield className="w-5 h-5" />, title: 'Device Insurance', description: 'Accidental damage, theft & malfunction coverage from $5/month.', cta: 'Get Protected →', link: '/go/device-insurance' },
    { icon: <Wrench className="w-5 h-5" />, title: 'Extended Warranty', description: 'Extend manufacturer coverage on your verified device.', cta: 'Get Warranty →', link: '/go/extended-warranty' },
  ],
};

function getOffers(itemType: string): OfferCard[] {
  const t = itemType.toLowerCase();
  if (t.includes('phone') || t.includes('imei') || t.includes('iphone') || t.includes('samsung') || t.includes('android')) return OFFERS_BY_TYPE.phone;
  if (t.includes('vehicle') || t.includes('vin') || t.includes('car') || t.includes('motorcycle') || t.includes('plate')) return OFFERS_BY_TYPE.vehicle;
  if (t.includes('bike') || t.includes('bicycle') || t.includes('ebike')) return OFFERS_BY_TYPE.bicycle;
  if (t.includes('firearm') || t.includes('gun')) return OFFERS_BY_TYPE.firearm;
  return OFFERS_BY_TYPE.default;
}

interface CleanResultOffersProps {
  result: VerificationResult;
}

export const CleanResultOffers: React.FC<CleanResultOffersProps> = ({ result }) => {
  const navigate = useNavigate();
  const offers = getOffers(result.itemType);

  const handleCopyLink = useCallback(() => {
    const url = `${window.location.origin}/verify?ref=${result.hash}`;
    navigator.clipboard.writeText(url);
  }, [result.hash]);

  const handleDownloadPDF = useCallback(() => {
    generateCompliancePDF(result);
  }, [result]);

  if (result.status !== 'clean') return null;

  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-sm font-semibold text-foreground">
        ✅ Your item is verified clean. Recommended next steps:
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {offers.map((offer) => (
          <div
            key={offer.link}
            className="border border-border rounded-lg p-4 bg-card hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2 text-primary">
              {offer.icon}
              <span className="font-semibold text-sm text-foreground">{offer.title}</span>
            </div>
            <p className="text-xs text-muted-foreground flex-1 mb-3">{offer.description}</p>
            <Button
              size="sm"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-xs"
              onClick={() => navigate(offer.link)}
            >
              {offer.cta}
            </Button>
          </div>
        ))}
      </div>

      {/* Share / Download section */}
      <div className="bg-muted/50 border border-border rounded-lg p-4 text-center">
        <p className="text-xs text-muted-foreground mb-3">
          Share your verification with the seller to negotiate a better price, or add it to your listing to sell faster.
        </p>
        <div className="flex gap-2 justify-center">
          <Button variant="outline" size="sm" onClick={handleCopyLink} className="text-xs">
            <Copy className="w-3 h-3 mr-1" /> Copy Verification Link
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownloadPDF} className="text-xs">
            <Download className="w-3 h-3 mr-1" /> Download PDF Certificate
          </Button>
        </div>
      </div>

      <p className="text-[10px] text-muted-foreground text-center">
        SafeOrStolen may earn a commission from partner links at no extra cost to you.
      </p>
    </div>
  );
};
