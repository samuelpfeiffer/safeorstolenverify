import { useState } from 'react'
import { supabase } from '@/integrations/supabase/client'
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate'
import { X, Shield, Star, Zap, Building2 } from 'lucide-react'

interface Plan {
  id: string
  name: string
  price: string
  period: string
  tagline: string
  features: string[]
  stripePriceId: string
  highlighted: boolean
  cta: string
  icon: React.ReactNode
}

const PLANS: Plan[] = [
  {
    id: 'single',
    name: 'Single Check',
    price: '$0.99',
    period: 'one-time',
    tagline: 'Just need one check',
    features: [
      '1 full verification',
      'All 100+ databases',
      'PDF certificate included',
      'No subscription needed',
    ],
    stripePriceId: 'price_1T3nfCGxnZLw8J7OwqSRSPel',
    highlighted: false,
    cta: 'Buy 1 Check — $0.99',
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: 'basic',
    name: 'Basic',
    price: '$4.99',
    period: '/month',
    tagline: '50 checks/month',
    features: [
      '50 verifications/month',
      'PDF certificates',
      'Check history',
      'Email support',
      'Cancel anytime',
    ],
    stripePriceId: 'price_1SHEOxGxnZLw8J7O2zzfPVBK',
    highlighted: false,
    cta: 'Start Basic — $4.99/mo',
    icon: <Star className="w-5 h-5" />,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    tagline: 'Unlimited verifications',
    features: [
      'Unlimited verifications',
      'PDF certificates + history',
      'Priority results',
      'API access (100 calls/mo)',
      'Shareable report links',
      'Phone support',
    ],
    stripePriceId: 'price_1T3nhDGxnZLw8J7OaK2fkVM1',
    highlighted: true,
    cta: 'Go Pro — $9.99/mo',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 'business',
    name: 'Business',
    price: '$49.99',
    period: '/month',
    tagline: 'For pawn shops & dealers',
    features: [
      'Unlimited verifications',
      'Bulk CSV upload',
      'Compliance PDF reports',
      'Full API access',
      'Audit trail + export',
      'Multi-user seats (5)',
      'Dedicated support',
    ],
    stripePriceId: 'price_1T3niCGxnZLw8J7OO2aGfQ0R',
    highlighted: false,
    cta: 'Get Business — $49.99/mo',
    icon: <Building2 className="w-5 h-5" />,
  },
]

interface UpgradeModalProps {
  isOpen: boolean
  reason: string | null
  onClose: () => void
}

export function UpgradeModal({ isOpen, reason, onClose }: UpgradeModalProps) {
  const [loading, setLoading] = useState<string | null>(null)

  if (!isOpen) return null

  const headline =
    reason === 'monthly_limit'
      ? "You've Hit Your Monthly Limit"
      : reason === 'single_used'
      ? "Your Single Check Has Been Used"
      : "You've Used Your 2 Free Checks"

  const subtext =
    reason === 'monthly_limit'
      ? 'Upgrade to Pro or Business for unlimited verifications.'
      : "Upgrade to keep verifying — protect yourself from stolen property and legal risk."

  async function handleUpgrade(plan: Plan) {
    setLoading(plan.id)
    try {
      const { data: { user } } = await supabase.auth.getUser()

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: plan.stripePriceId,
          planName: plan.id,
          isSubscription: plan.id !== 'single',
          fingerprint: getOrCreateFingerprint(),
        },
        headers: user ? undefined : {},
      })

      if (error) throw new Error(error.message)
      if (data?.url) window.location.href = data.url
    } catch (err: any) {
      console.error('Checkout error:', err)
      alert('Something went wrong starting checkout. Please try again.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <div className="bg-background border border-border rounded-2xl max-w-5xl w-full p-6 md:p-8 relative max-h-[95vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-1"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🔒</div>
          <h2 className="text-2xl md:text-3xl font-black text-foreground">{headline}</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">{subtext}</p>
          <div className="mt-3 text-sm text-muted-foreground">
            CheckMEND charges $1.99+ per check with no free option. Carfax is $44.99/report.
            We start at $2.99.
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl flex flex-col p-5 transition-all ${
                plan.highlighted
                  ? 'bg-primary border-2 border-primary/80 shadow-lg shadow-primary/20'
                  : 'bg-card border border-border hover:border-primary/40'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                  ⭐ Most Popular
                </div>
              )}

              <div className={`flex items-center gap-2 mb-1 ${plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {plan.icon}
                <span className="font-bold text-sm">{plan.name}</span>
              </div>

              <div className="mt-2 mb-1">
                <span className={`text-3xl font-black ${plan.highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-xs mb-4 ${plan.highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                {plan.tagline}
              </p>

              <ul className="space-y-2 flex-1 mb-5">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-xs ${plan.highlighted ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleUpgrade(plan)}
                disabled={loading === plan.id}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all disabled:opacity-60 ${
                  plan.highlighted
                    ? 'bg-primary-foreground text-primary hover:opacity-90'
                    : 'bg-primary text-primary-foreground hover:opacity-90'
                }`}
              >
                {loading === plan.id ? 'Loading...' : plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-muted-foreground text-xs">
            🔒 Secured by Stripe · Cancel anytime · No hidden fees
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
