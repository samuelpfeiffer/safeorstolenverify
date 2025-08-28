import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  AlertTriangle, 
  Eye, 
  Brain, 
  Clock, 
  Users, 
  MessageCircle,
  Shield,
  Target,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { CommercialCTA } from '@/components/blog/CommercialCTA';

const ScammerTacticsExposed = () => {
  const scammerTactics = [
    {
      tactic: "Urgency Pressure",
      description: "\"Someone else is coming to see it in an hour\"",
      psychology: "Creates fear of missing out (FOMO)",
      counter: "Take time to verify. Real sellers wait for serious buyers.",
      icon: Clock
    },
    {
      tactic: "Emotional Manipulation", 
      description: "\"I need the money for my sick child\"",
      psychology: "Exploits empathy to bypass logical thinking",
      counter: "Separate emotions from the transaction. Verify first.",
      icon: Brain
    },
    {
      tactic: "Social Proof Fraud",
      description: "Fake reviews, stolen profile photos",
      psychology: "Hijacks trust through false credibility",
      counter: "Reverse image search photos, check profile age.",
      icon: Users
    },
    {
      tactic: "Price Anchoring",
      description: "\"It's worth $1000 but I'll take $400\"",
      psychology: "Makes inflated price seem like a deal",
      counter: "Research actual market value independently.",
      icon: Target
    },
    {
      tactic: "Communication Control",
      description: "\"Let's talk on WhatsApp instead\"",
      psychology: "Moves off-platform to avoid accountability",
      counter: "Keep all communication on the platform.",
      icon: MessageCircle
    },
    {
      tactic: "Information Withholding",
      description: "\"I don't have the serial number with me\"",
      psychology: "Prevents verification until after commitment",
      counter: "No verification = no purchase. Walk away.",
      icon: Eye
    }
  ];

  const redFlags = [
    "Price significantly below market value (50%+ discount)",
    "Seller can't meet during normal business hours", 
    "Refuses to provide serial numbers or documentation",
    "Insists on cash-only transactions",
    "Photos appear to be stock images or professionally taken",
    "New account with limited selling history",
    "Won't allow inspection or testing before purchase",
    "Pressures for immediate decision without time to research",
    "Asks to move communication off the platform",
    "Story keeps changing or has inconsistencies"
  ];

  const protectionSteps = [
    {
      step: "1",
      title: "Research Market Value",
      description: "Check completed sales on eBay, Amazon, other platforms",
      icon: TrendingUp
    },
    {
      step: "2",
      title: "Verify Seller Identity", 
      description: "Check profile age, reviews, and previous listings",
      icon: Users
    },
    {
      step: "3",
      title: "Demand Verification",
      description: "Get serial number and run stolen goods check",
      icon: Shield
    },
    {
      step: "4",
      title: "Meet Safely",
      description: "Public place, daylight hours, bring a friend",
      icon: CheckCircle
    }
  ];

  const realExamples = [
    {
      scam: "iPhone 14 Pro \"Urgent Sale\"",
      tactic: "Listed at $400 (retail $999), seller claimed \"moving tomorrow\"",
      outcome: "Buyer lost $400, phone was stolen and unusable",
      lesson: "Price too good to be true + artificial urgency = scam"
    },
    {
      scam: "MacBook \"Graduation Gift\"",
      tactic: "Seller said it was a gift, didn't know specs, no original box",
      outcome: "Laptop had reported stolen serial number",
      lesson: "Vague seller knowledge + missing accessories = red flag"
    },
    {
      scam: "Car \"Estate Sale\"",
      tactic: "Emotional story about deceased relative, needed quick sale",
      outcome: "VIN showed stolen vehicle, buyer faced legal issues",
      lesson: "Emotional manipulation + pressure = verify everything"
    }
  ];

  return (
    <>
      <PageSEO
        title="Scammer Tactics Exposed: How Criminals Sell Stolen Goods (2024 Guide)"
        description="Learn the psychology behind marketplace scams. Discover the 6 tactics scammers use to sell stolen goods and how to protect yourself with proven countermeasures."
        keywords="marketplace scams, scammer tactics, stolen goods scams, Facebook Marketplace fraud, eBay scams, Craigslist fraud, how scammers operate, marketplace psychology"
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Scammer Tactics Exposed: How Criminals Sell Stolen Goods",
          "description": "Learn the psychology behind marketplace scams and how to protect yourself",
          "author": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "publisher": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "datePublished": "2024-12-27",
          "dateModified": "2024-12-27"
        }}
      />

      <div className="bg-sos text-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-red-600/10 text-red-400 border-red-600/20">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Scammer Alert
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Scammer <span className="text-gradient">Tactics</span> Exposed
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the psychological tricks criminals use to sell stolen goods online. Learn their methods, understand their psychology, and protect yourself with proven countermeasures.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-sos-orange" />
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-sos-lime" />
                <span>Updated Dec 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>Crime prevention guide</span>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-red-600/10 to-orange-600/10 border-red-500/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Know Your Enemy
                </h2>
                <p className="text-gray-300 mb-6">
                  Scammers aren't just random criminals - they're sophisticated manipulators who study human psychology to exploit your emotions and bypass your logical thinking. Understanding their tactics is your first line of defense.
                </p>
                <div className="grid gap-4 md:grid-cols-3 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-400">$2.8B</div>
                    <div className="text-sm text-gray-400">Lost annually to scams</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-400">68%</div>
                    <div className="text-sm text-gray-400">Success rate on victims</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-400">2.1M</div>
                    <div className="text-sm text-gray-400">Americans scammed yearly</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* The 6 Core Tactics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              The 6 <span className="text-red-400">Core Tactics</span> Scammers Use
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              These psychological manipulation techniques work because they target fundamental human behaviors. Recognizing them gives you power.
            </p>
            <div className="grid gap-6">
              {scammerTactics.map((tactic, index) => (
                <Card key={index} className="bg-card border-red-500/20 hover:border-red-500/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                          <tactic.icon className="h-6 w-6 text-red-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{tactic.tactic}</h3>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">What They Say</h4>
                        <p className="text-sm text-red-300 italic">"{tactic.description}"</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">The Psychology</h4>
                        <p className="text-sm text-gray-400">{tactic.psychology}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">Your Counter</h4>
                        <p className="text-sm text-sos-lime">{tactic.counter}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Red Flags Checklist */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              🚩 The Ultimate <span className="text-red-400">Red Flags</span> Checklist
            </h2>
            <Card className="bg-card border-red-500/20">
              <CardHeader>
                <CardTitle className="text-center">
                  If you see ANY of these, walk away immediately
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  {redFlags.map((flag, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{flag}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Real Scam Examples */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Real Scam <span className="text-sos-orange">Case Studies</span>
            </h2>
            <div className="grid gap-6">
              {realExamples.map((example, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="grid gap-4 md:grid-cols-4">
                      <div>
                        <h4 className="font-semibold text-sos-orange mb-2">The Scam</h4>
                        <p className="text-sm text-white">{example.scam}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">The Tactic</h4>
                        <p className="text-sm text-gray-300">{example.tactic}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-300 mb-2">The Outcome</h4>
                        <p className="text-sm text-gray-400">{example.outcome}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sos-lime mb-2">The Lesson</h4>
                        <p className="text-sm text-sos-lime">{example.lesson}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Protection Strategy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Your <span className="text-sos-lime">Protection Strategy</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-4">
              {protectionSteps.map((step, index) => (
                <Card key={index} className="bg-card border-sos-lime/20 text-center">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-sos-lime/10 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-sos-lime" />
                    </div>
                    <div className="text-3xl font-bold text-sos-lime mb-2">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Scammer Psychology Deep Dive */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Inside the Scammer's Mind
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-bold text-purple-400 mb-4">Why These Tactics Work</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <div>• <strong>Cognitive load:</strong> Multiple decisions overwhelm logical thinking</div>
                      <div>• <strong>Social proof:</strong> We follow what others seem to be doing</div>
                      <div>• <strong>Loss aversion:</strong> Fear of missing out overrides caution</div>
                      <div>• <strong>Authority bias:</strong> We trust confident, knowledgeable-seeming people</div>
                      <div>• <strong>Reciprocity:</strong> Sob stories make us want to help</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-400 mb-4">How to Break Free</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <div>• <strong>Slow down:</strong> Take time to think clearly</div>
                      <div>• <strong>Verify independently:</strong> Don't trust their word alone</div>
                      <div>• <strong>Question urgency:</strong> Real deals don't require instant decisions</div>
                      <div>• <strong>Separate emotion:</strong> Logic should drive purchase decisions</div>
                      <div>• <strong>Use tools:</strong> Verification services cut through deception</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Quick Reference Guide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              📱 Save This <span className="text-sos-orange">Quick Reference</span>
            </h2>
            <Card className="bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 border-sos-orange/20">
              <CardContent className="p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-bold text-red-400 mb-4">🛑 STOP if you hear:</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div>"Someone else is interested"</div>
                      <div>"I need the money urgently"</div>
                      <div>"Let's talk off this platform"</div>
                      <div>"I don't have the serial number"</div>
                      <div>"Cash only, no exceptions"</div>
                      <div>"You have to decide now"</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sos-lime mb-4">✅ PROCEED if you have:</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div>Serial number verified as safe</div>
                      <div>Market-rate pricing</div>
                      <div>Complete seller information</div>
                      <div>Time to research and think</div>
                      <div>Public meeting location</div>
                      <div>Full item inspection allowed</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <CommercialCTA 
            title="Don't Let Scammers Win"
            description="Use verification tools to see through their deception and buy safely"
            primaryAction={{
              text: "Verify Your Next Purchase",
              href: "/"
            }}
            secondaryAction={{
              text: "Read More Safety Guides",
              href: "/blog"
            }}
            features={[
              "Instant verification results",
              "See through scammer tactics",
              "Protect yourself from fraud",
              "Join 25,000+ safe buyers"
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default ScammerTacticsExposed;