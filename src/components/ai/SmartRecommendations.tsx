import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, ArrowRight, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface Recommendation {
  id: string;
  icon: string;
  title: string;
  description: string;
  cta: string;
  action: 'navigate' | 'upsell' | 'check';
  target: string;
  priority: number;
}

interface SmartRecommendationsProps {
  itemType: string;
  status: string;
  score: number;
  identifier: string;
  userSearchCount?: number;
}

function generateRecommendations(
  itemType: string,
  status: string,
  score: number,
  identifier: string,
  searchCount: number
): Recommendation[] {
  const recs: Recommendation[] = [];

  // After phone check → suggest carrier unlock check
  if (itemType.toLowerCase().includes('phone') || itemType.toLowerCase().includes('imei') || itemType.toLowerCase().includes('smartphone')) {
    recs.push({
      id: 'carrier-check',
      icon: '📶',
      title: 'Check Carrier Lock Status',
      description: 'Verify this device is unlocked and works with your carrier before buying.',
      cta: 'Learn More',
      action: 'navigate',
      target: '/check-phone',
      priority: 1,
    });
  }

  // After VIN check → suggest license plate lookup
  if (itemType.toLowerCase().includes('vehicle') || itemType.toLowerCase().includes('vin')) {
    recs.push({
      id: 'plate-check',
      icon: '🪪',
      title: 'Also Check the License Plate',
      description: 'Cross-reference the license plate for a complete vehicle verification.',
      cta: 'Check Plate',
      action: 'navigate',
      target: '/license-plate-lookup',
      priority: 1,
    });
  }

  // After firearm check → legal reminder
  if (itemType.toLowerCase().includes('firearm') || itemType.toLowerCase().includes('gun')) {
    recs.push({
      id: 'firearm-legal',
      icon: '⚖️',
      title: 'Know Your Legal Obligations',
      description: 'Possessing a stolen firearm is a federal felony (18 U.S.C. § 922). Always get a bill of sale.',
      cta: 'Read Guide',
      action: 'navigate',
      target: '/firearms-check',
      priority: 1,
    });
  }

  // After bike check → suggest registering
  if (itemType.toLowerCase().includes('bike') || itemType.toLowerCase().includes('bicycle')) {
    recs.push({
      id: 'bike-register',
      icon: '🔐',
      title: 'Register This Bike',
      description: 'Protect your new purchase by registering it on BikeIndex — free forever.',
      cta: 'Register Free',
      action: 'navigate',
      target: '/check-bike',
      priority: 1,
    });
  }

  // If flagged or stolen → suggest reporting
  if (status === 'flagged' || status === 'stolen') {
    recs.push({
      id: 'report-item',
      icon: '🚨',
      title: 'Report This to Authorities',
      description: 'Contact local law enforcement immediately. Do not complete the purchase.',
      cta: 'Report Guide',
      action: 'navigate',
      target: '/report-stolen',
      priority: 0,
    });
  }

  // After clean result → seller badge
  if (status === 'clean') {
    recs.push({
      id: 'seller-badge',
      icon: '✅',
      title: 'Selling This Item? Get a Verified Badge',
      description: 'Generate a shareable verification certificate to build buyer trust and sell faster.',
      cta: 'Get Badge — $0.99',
      action: 'navigate',
      target: '/for-sellers',
      priority: 2,
    });
  }

  // After 2+ searches → upgrade prompt
  if (searchCount >= 2) {
    recs.push({
      id: 'upgrade',
      icon: '⚡',
      title: 'You\'ve Used Your Free Checks',
      description: 'Unlock unlimited verifications for just $4.99/month — that\'s less than a coffee.',
      cta: 'See Plans',
      action: 'navigate',
      target: '/pricing',
      priority: 3,
    });
  }

  // Always suggest the marketplace advisor
  recs.push({
    id: 'marketplace-advisor',
    icon: '🔍',
    title: 'Buying from a Marketplace?',
    description: 'Paste any listing URL and our AI will detect scams, fake photos, and pricing red flags.',
    cta: 'Try AI Advisor',
    action: 'navigate',
    target: '/marketplace-advisor',
    priority: 4,
  });

  // Sort by priority
  return recs.sort((a, b) => a.priority - b.priority).slice(0, 3);
}

export const SmartRecommendations: React.FC<SmartRecommendationsProps> = ({
  itemType,
  status,
  score,
  identifier,
  userSearchCount = 0,
}) => {
  const navigate = useNavigate();
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    const recs = generateRecommendations(itemType, status, score, identifier, userSearchCount);
    setRecommendations(recs);
  }, [itemType, status, score, identifier, userSearchCount]);

  const visibleRecs = recommendations.filter(r => !dismissed.has(r.id));

  if (visibleRecs.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
        <Sparkles className="w-3.5 h-3.5 text-primary" />
        AI Smart Recommendations
      </div>
      <AnimatePresence mode="popLayout">
        {visibleRecs.map((rec, i) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: i * 0.1 }}
            className="relative group flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors"
          >
            <span className="text-xl flex-shrink-0">{rec.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">{rec.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{rec.description}</p>
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 mt-1.5 text-primary text-xs font-semibold"
                onClick={() => navigate(rec.target)}
              >
                {rec.cta} <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
            <button
              onClick={() => setDismissed(prev => new Set(prev).add(rec.id))}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground p-1"
              aria-label="Dismiss recommendation"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
