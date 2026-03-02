import { useState } from 'react'
import { supabase } from '@/integrations/supabase/client'
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate'
import { redirectToStripe } from '@/utils/stripeRedirect'
import { X, Zap, BadgeCheck, Building2 } from 'lucide-react'

interface UpgradeModalProps {
  isOpen: boolean
  reason: string | null
  onClose: () => void
}

const PLANS = {
  buyer: {
    id: 'pro',
    icon: <Zap className="w-5 h-5" />,
    label: 'Unlimited Verifications',
    price: '$9.99/month',
    desc: 'Check unlimited items across all 6 categories. Save history, share reports, and verify with confidence.',
    cta: 'Upgrade to Unlimited — $9.99/mo',
    priceId: 'price_1T3nhDGxnZLw8J7OaK2fkVM1',
    planName: 'Personal Plan',
    isSub: true,
  },
  sellerBadge: {
    id: 'seller-badge',
    icon: <BadgeCheck className="w-5 h-5" />,
    label: 'Single Verified Badge',
    price: '$2.99 one-time',
    desc: 'Get a shareable "✓ Verified Safe" badge for one listing. Valid 90 days.',
    cta: 'Get Badge — $2.99',
    priceId: 'price_1T6fNGGxnZLw8J7OrKLSrnAx',
    planName: 'Seller Per-Listing',
    isSub: false,
  },
  sellerUnlimited: {
    id: 'seller-unlimited',
    icon: <BadgeCheck className="w-5 h-5" />,
    label: 'Unlimited Badges',
    price: '$19.99/month',
    desc: 'Unlimited verifications + badges. Seller profile page. Sell faster, earn more.',
    cta: 'Start Selling — $19.99/mo',
    priceId: 'price_1T6fOWGxnZLw8J7O2njgDUgM',
    planName: 'Verified Seller',
    isSub: true,
  },
  business: {
    id: 'business',
    icon: <Building2 className="w-5 h-5" />,
    label: 'Business Plan',
    price: '$49.99/month',
    desc: 'Unlimited checks, embeddable widget, API access, compliance reporting, and 5 staff seats.',
    cta: 'Start Free Trial — $49.99/mo',
    priceId: 'price_1T3niCGxnZLw8J7OO2aGfQ0R',
    planName: 'Professional Plan',
    isSub: true,
  },
}

export function UpgradeModal({ isOpen, reason, onClose }: UpgradeModalProps) {
  const [loading, setLoading] = useState<string | null>(null)

  if (!isOpen) return null

  const headline =
    reason === 'monthly_limit'
      ? "You've Hit Your Monthly Limit"
      : reason === 'single_used'
      ? 'Your Single Check Has Been Used'
      : "You've Used Your 2 Free Checks"

  async function handleCheckout(plan: typeof PLANS.buyer) {
    setLoading(plan.id)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: plan.priceId,
          planName: plan.planName,
          isSubscription: plan.isSub,
          fingerprint: getOrCreateFingerprint(),
        },
        headers: user ? undefined : {},
      })
      if (error) throw new Error(error.message)
      if (data?.url) redirectToStripe(data.url)
    } catch {
      alert('Something went wrong starting checkout. Please try again.')
    } finally {
      setLoading(null)
    }
  }

  function PlanOption({ plan, highlight = false }: { plan: typeof PLANS.buyer; highlight?: boolean }) {
    return (
      <button
        onClick={() => handleCheckout(plan)}
        disabled={loading === plan.id}
        className={`w-full text-left rounded-xl p-4 border-2 transition-all disabled:opacity-60 ${
          highlight
            ? 'border-primary bg-primary/5 hover:bg-primary/10'
            : 'border-border bg-card hover:border-primary/40'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${highlight ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
            {plan.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-foreground text-sm">{plan.label}</span>
              <span className={`font-black text-sm whitespace-nowrap ${highlight ? 'text-primary' : 'text-foreground'}`}>{plan.price}</span>
            </div>
            <p className="text-muted-foreground text-xs mt-0.5 line-clamp-2">{plan.desc}</p>
          </div>
        </div>
        <div className={`mt-3 text-center py-2.5 rounded-lg font-bold text-xs transition-all ${
          highlight
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted text-foreground'
        }`}>
          {loading === plan.id ? 'Loading...' : plan.cta}
        </div>
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <div className="bg-background border border-border rounded-2xl max-w-md w-full p-6 relative max-h-[95vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-1"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">🔒</div>
          <h2 className="text-xl font-black text-foreground">{headline}</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Choose the plan that fits your needs:
          </p>
        </div>

        {/* Smart options */}
        <div className="space-y-3 mb-5">
          {/* Always show buyer upgrade first (highlighted) */}
          <PlanOption plan={PLANS.buyer} highlight />

          {/* Seller options */}
          <div className="relative">
            <div className="absolute -top-2 left-4 bg-muted text-muted-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
              Selling items?
            </div>
            <div className="border border-border rounded-xl p-3 pt-4 space-y-2">
              <PlanOption plan={PLANS.sellerBadge} />
              <PlanOption plan={PLANS.sellerUnlimited} />
            </div>
          </div>

          {/* Business option */}
          <div className="relative">
            <div className="absolute -top-2 left-4 bg-muted text-muted-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
              Pawn shop or dealer?
            </div>
            <div className="border border-border rounded-xl p-3 pt-4">
              <PlanOption plan={PLANS.business} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-muted-foreground text-xs">
            🔒 Secured by Stripe · Cancel anytime · 30-day money-back guarantee
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Already subscribed?{' '}
            <a href="/auth?tab=signin" className="text-primary hover:underline">
              Sign in to restore access
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
