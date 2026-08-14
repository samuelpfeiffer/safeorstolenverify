import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle2, Building2, User, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';
import { toast } from 'sonner';

export default function BusinessSignup() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    contactName: '',
    email: '',
    phone: '',
    locations: '1',
    plan: searchParams.get('plan') || 'starter'
  });

  const update = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // For now, redirect to auth with business context
      // Full B2B signup will create business_accounts after DB tables are ready
      toast.success('Thank you! We\'ll contact you within 24 hours to set up your account.');
      navigate('/auth?mode=signup&business=true');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { num: 1, label: 'Business Info', icon: Building2 },
    { num: 2, label: 'Contact Details', icon: User },
    { num: 3, label: 'Choose Plan', icon: CreditCard },
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'For Businesses', url: '/for-businesses' },
    { name: 'Sign Up', url: '/business/signup' }
  ];

  return (
    <>
      <PageSEO
        title="Business Sign Up - 30-Day Free Trial | SafeOrStolen"
        description="Sign up for SafeOrStolen business verification. 30-day free trial, unlimited checks, widget integration, compliance reporting. No credit card required."
        keywords="safeorstolen business signup, verification widget trial, pawn shop verification free trial"
        canonical="/business/signup"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background pt-20 py-12">
        <div className="container mx-auto px-4 max-w-xl">
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  step >= s.num ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {step > s.num ? <CheckCircle2 className="h-5 w-5" /> : s.num}
                </div>
                <span className={`text-sm hidden sm:inline ${step >= s.num ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  {s.label}
                </span>
                {i < steps.length - 1 && <div className={`w-8 h-0.5 ${step > s.num ? 'bg-primary' : 'bg-muted'}`} />}
              </div>
            ))}
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <h1 className="text-2xl font-bold">Start Your Free Trial</h1>
                </div>
                <p className="text-muted-foreground">30 days free. No credit card required. Cancel anytime.</p>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Business Name *</label>
                      <Input
                        value={formData.businessName}
                        onChange={e => update('businessName', e.target.value)}
                        placeholder="Phoenix Pawn & Jewelry"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Business Type *</label>
                      <select
                        value={formData.businessType}
                        onChange={e => update('businessType', e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        required
                      >
                        <option value="">Select business type</option>
                        <option value="pawn-shop">Pawn Shop</option>
                        <option value="car-dealer">Used Car Dealer</option>
                        <option value="electronics">Electronics Reseller</option>
                        <option value="auction-house">Auction House</option>
                        <option value="online-seller">Online Seller (eBay/Mercari)</option>
                        <option value="law-enforcement">Law Enforcement</option>
                        <option value="insurance">Insurance Company</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Number of Locations</label>
                      <Input
                        type="number"
                        min="1"
                        max="100"
                        value={formData.locations}
                        onChange={e => update('locations', e.target.value)}
                      />
                    </div>
                    <Button type="button" className="w-full" onClick={() => {
                      if (!formData.businessName || !formData.businessType) {
                        toast.error('Please fill in all required fields');
                        return;
                      }
                      setStep(2);
                    }}>
                      Continue
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Contact Name *</label>
                      <Input
                        value={formData.contactName}
                        onChange={e => update('contactName', e.target.value)}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Business Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={e => update('email', e.target.value)}
                        placeholder="john@phoenixpawn.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={e => update('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(1)}>Back</Button>
                      <Button type="button" className="flex-1" onClick={() => {
                        if (!formData.contactName || !formData.email) {
                          toast.error('Please fill in all required fields');
                          return;
                        }
                        setStep(3);
                      }}>
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div className="space-y-3">
                      {[
                        { id: 'starter', name: 'Starter', price: '$49/month', desc: 'Unlimited verifications, 1 location' },
                        { id: 'professional', name: 'Professional', price: '$99/month', desc: 'Everything + priority support, 5 locations' },
                      ].map(plan => (
                        <label key={plan.id} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                          formData.plan === plan.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                        }`}>
                          <input
                            type="radio"
                            name="plan"
                            value={plan.id}
                            checked={formData.plan === plan.id}
                            onChange={e => update('plan', e.target.value)}
                            className="mt-1"
                          />
                          <div>
                            <div className="font-semibold">{plan.name} — {plan.price}</div>
                            <div className="text-sm text-muted-foreground">{plan.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>

                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-xl p-4">
                      <div className="font-semibold text-green-700 dark:text-green-400 mb-1">🎉 30-Day Free Trial</div>
                      <p className="text-sm text-green-600 dark:text-green-500">Start your trial today. No credit card required. Full access to all features including unlimited verifications, widget, and API.</p>
                    </div>

                    <div className="flex gap-3">
                      <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(2)}>Back</Button>
                      <Button type="submit" className="flex-1" disabled={loading}>
                        {loading ? 'Creating Account...' : 'Start Free Trial'}
                      </Button>
                    </div>
                  </div>
                )}
              </form>

              <p className="text-center text-xs text-muted-foreground mt-6">
                By signing up, you agree to our <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and{' '}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have a business account? <Link to="/auth" className="text-primary hover:underline font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
}
