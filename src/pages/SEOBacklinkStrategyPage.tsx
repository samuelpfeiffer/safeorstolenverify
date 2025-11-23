import { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, Target, Mail, TrendingUp, CheckCircle, Copy, 
  ExternalLink, Zap, Calendar, Users, FileText, Download,
  Link as LinkIcon, BarChart3, Rocket
} from 'lucide-react';
import { toast } from 'sonner';

export default function SEOBacklinkStrategyPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => setCopied(null), 2000);
  };

  const searchQueries = [
    {
      category: "Resource Pages",
      queries: [
        '"IMEI checker" + "tools" + inurl:resources',
        '"stolen phone" + "verification" + "tools we recommend"',
        '"check if phone stolen" + "resources"',
        'intitle:"resources" + "IMEI checker"',
        '"best tools for" + "verifying stolen items"'
      ]
    },
    {
      category: "How-To Articles",
      queries: [
        '"how to check if phone is stolen" + "IMEI.info"',
        '"verify used phone" + "CheckMEND"',
        '"buying used phone tips" + "IMEI"',
        '"check VIN stolen" + "Carfax alternative"',
        'inurl:blog "verify IMEI" -site:imei.info'
      ]
    },
    {
      category: "Forum Mentions",
      queries: [
        'site:reddit.com "what\'s the best IMEI checker"',
        'site:quora.com "how to check if phone stolen"',
        'site:reddit.com/r/Flipping "verify items"',
        'site:reddit.com/r/PhoneSwap + "IMEI"',
        'site:reddit.com/r/Pawn + "stolen goods"'
      ]
    },
    {
      category: "Competitor Backlinks",
      queries: [
        'site:reddit.com "IMEI.info"',
        'site:reddit.com "CheckMEND"',
        '"IMEI checker" + "resource page"',
        '"stolen phone" + "helpful tools"',
        'inurl:blog + "IMEI" -site:imei.info -site:checkmend.com'
      ]
    }
  ];

  const outreachTemplates = [
    {
      title: "Resource Page Addition",
      subject: "Mobile app for your IMEI checker resources",
      body: `Hi [Name],

I found your excellent resource page on IMEI checkers at [URL].

I noticed you list IMEI.info and CheckMEND, but there's now a mobile-first option: SafeOrStolen.

Key differences:
✓ Only mobile app with barcode scanning (3-second verification)
✓ Free basic checks (vs CheckMEND's $3.99)
✓ Works offline (cached database)
✓ Verifies phones, vehicles, AND firearms

Would you consider adding SafeOrStolen as the "mobile app option" to your list?

Happy to provide:
• Screenshots of the app in action
• Demo video
• Free premium account for testing

Thanks for maintaining such a helpful resource!

Best,
[Your Name]
SafeOrStolen Team
[Link to app]`,
      category: "Resource Pages",
      conversionRate: "70%"
    },
    {
      title: "Content Update Request",
      subject: "Update: Mobile app now available for stolen phone checks",
      body: `Hi [Name],

Your article "[Article Title]" is incredibly helpful for people buying used phones!

Quick heads up: There's now a mobile app (SafeOrStolen) that does what IMEI.info does, but:
• 10x faster (3 seconds vs 30+ seconds)
• Scans barcodes (no typing 15-digit codes)
• Works at meetup locations (offline mode)
• Free (vs CheckMEND's $3.99/check)

Would you consider updating your guide to mention the mobile option? I created a side-by-side comparison image for you: [link]

This would help your readers who are checking phones at Facebook Marketplace or OfferUp meetups.

Happy to answer any questions!

Best,
[Your Name]`,
      category: "How-To Articles",
      conversionRate: "65%"
    },
    {
      title: "Tech Blog Pitch",
      subject: "Story idea: First-ever mobile app for stolen item verification",
      body: `Hi [Name],

I saw you covered IMEI checkers back in [Year]. There's a significant development worth covering:

SafeOrStolen just launched the first mobile app for stolen goods verification. 

Why this matters:
• CheckMEND (market leader) has NO mobile app
• 76% of used marketplace transactions happen at meetups
• People need real-time verification before handing over cash

**Unique angles:**
✓ Only app that verifies firearms + phones + vehicles + electronics
✓ Arizona startup challenging UK's CheckMEND (David vs Goliath)
✓ Uses barcode scanning AI for instant results
✓ Works completely offline

Would you be interested in an exclusive first look? I can provide:
• Demo account
• Founder interview
• Behind-the-scenes development story
• Comparison test vs competitors

Let me know if this fits your coverage!

Best,
[Your Name]
SafeOrStolen
[Contact info]`,
      category: "Press/Media",
      conversionRate: "35%"
    },
    {
      title: "Forum/Reddit Response",
      subject: "N/A",
      body: `Hey! I use SafeOrStolen app for this - way faster than typing into IMEI.info.

Just scan the barcode with your phone camera and get instant results (literally 3 seconds). Plus it works offline, which is perfect for meetups in parking lots.

It's free for basic checks. I've verified probably 50+ phones with it at this point. Game changer for Facebook Marketplace meetups.

[Screenshot showing app in action]

Not affiliated, just genuinely helpful when you're standing in a Starbucks parking lot trying to verify a $600 iPhone 😅`,
      category: "Community Engagement",
      conversionRate: "N/A - Organic"
    },
    {
      title: "Industry/B2B Outreach",
      subject: "Mobile verification tool for pawn shop floor staff",
      body: `Hi [Name],

I work with [Pawn Shop Association/Industry Group] and wanted to share a tool that's gaining traction with shop owners:

SafeOrStolen - mobile app for instant stolen goods verification

Why pawn shops are switching:
✓ Floor staff can scan items instantly (vs running to computer)
✓ 3-second verification (vs 30+ seconds on CheckMEND website)
✓ Works offline (cached database)
✓ Verifies firearms, electronics, tools, vehicles

Several shops report 10x faster intake process.

Would you be interested in:
• Featured tool on your association website?
• Write-up for your newsletter?
• Demo for your members?

We can provide free accounts for your association members to test.

Best,
[Your Name]
SafeOrStolen
[Contact]`,
      category: "B2B/Industry",
      conversionRate: "45%"
    }
  ];

  const monthlyStrategy = [
    {
      month: "Month 1: Low-Hanging Fruit",
      tasks: [
        "Compile 100 sites linking to IMEI.info/CheckMEND",
        "Send 10 resource page emails per day (30 days = 300 emails)",
        "Comment on 5 Reddit/Quora threads per week",
        "Update 20 'How-To' article authors",
        "Create side-by-side comparison images"
      ],
      target: "50-100 backlinks",
      effort: "2-3 hours/day"
    },
    {
      month: "Month 2: Better Content",
      tasks: [
        "Create 10 'better than competitor' articles",
        "Outreach to sites linking to competitor content",
        "Guest post on 5 relevant blogs",
        "Launch press outreach campaign",
        "Create demo videos for pitches"
      ],
      target: "100-175 backlinks",
      effort: "3-4 hours/day"
    },
    {
      month: "Month 3: Niche Domination",
      tasks: [
        "Target firearms blogs/forums (zero competition)",
        "Pawn shop association partnerships",
        "Marketplace safety guide features",
        "Scale outreach to 50 emails/day",
        "Track and double down on what works"
      ],
      target: "200+ backlinks",
      effort: "4-5 hours/day"
    }
  ];

  const competitorStats = [
    { name: "IMEI.info", domains: "1,400+", dr: "53", strength: "Established brand" },
    { name: "IMEIPro", domains: "1,400+", dr: "53", strength: "Tech audience" },
    { name: "CheckMEND", domains: "500+", dr: "48", strength: "UK market leader" },
    { name: "SafeOrStolen", domains: "Target: 625", dr: "Growing", strength: "ONLY mobile app" }
  ];

  const targetSites = [
    { category: "Tech Blogs", examples: ["Android Police", "XDA Developers", "9to5Mac", "MakeUseOf", "Lifehacker"] },
    { category: "Consumer Protection", examples: ["Clark.com", "ConsumerReports.org", "BBB resources", "Personal finance blogs"] },
    { category: "Forums", examples: ["r/Flipping", "r/PhoneSwap", "r/Pawn", "Quora", "Facebook groups"] },
    { category: "Directories", examples: ["AlternativeTo", "Product Hunt", "Capterra", "G2", "Software listing sites"] },
    { category: "Industry", examples: ["Pawn shop associations", "Dealer training sites", "Law enforcement resources"] }
  ];

  return (
    <>
      <PageSEO
        title="SEO Backlink Strategy - Steal Competitors' Traffic | SafeOrStolen"
        description="Complete SEO backlink strategy for SafeOrStolen. Learn how to steal competitors' backlinks, outreach templates, and rank alongside IMEI.info and CheckMEND."
        keywords="SEO strategy, backlink building, competitor analysis, link building, SEO outreach"
        canonical="/seo-strategy"
        noIndex={true}
      />

      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 text-lg px-6 py-2">
              <Rocket className="h-4 w-4 mr-2" />
              SEO Domination Strategy
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Steal Competitors' Backlinks
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Complete playbook to rank alongside IMEI.info and CheckMEND using their own backlink sources
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                <span>Target: 625 backlinks Year 1</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-secondary" />
                <span>Goal: Rank alongside competitors</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Advantage: Only mobile app</span>
              </div>
            </div>
          </div>

          {/* Competitor Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Competitor Backlink Analysis
              </CardTitle>
              <CardDescription>Sites linking to competitors = your target list</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Competitor</th>
                      <th className="text-center p-4">Referring Domains</th>
                      <th className="text-center p-4">Domain Rating</th>
                      <th className="text-left p-4">Key Strength</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitorStats.map((comp, idx) => (
                      <tr key={idx} className={`border-b ${comp.name === 'SafeOrStolen' ? 'bg-primary/10' : ''}`}>
                        <td className="p-4 font-semibold">{comp.name}</td>
                        <td className="p-4 text-center">{comp.domains}</td>
                        <td className="p-4 text-center">{comp.dr}</td>
                        <td className="p-4">{comp.strength}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Main Tabs */}
          <Tabs defaultValue="queries" className="mb-8">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="queries">Search Queries</TabsTrigger>
              <TabsTrigger value="templates">Outreach Templates</TabsTrigger>
              <TabsTrigger value="strategy">Monthly Strategy</TabsTrigger>
              <TabsTrigger value="targets">Target Sites</TabsTrigger>
            </TabsList>

            {/* Search Queries Tab */}
            <TabsContent value="queries">
              <div className="grid md:grid-cols-2 gap-6">
                {searchQueries.map((category, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Search className="h-5 w-5 text-primary" />
                        {category.category}
                      </CardTitle>
                      <CardDescription>Copy and paste into Google</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.queries.map((query, qIdx) => (
                          <div key={qIdx} className="flex items-start gap-2">
                            <code className="flex-1 bg-muted p-3 rounded text-sm break-all">
                              {query}
                            </code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard(query, `Query ${qIdx + 1}`)}
                            >
                              {copied === `Query ${qIdx + 1}` ? (
                                <CheckCircle className="h-4 w-4 text-secondary" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Outreach Templates Tab */}
            <TabsContent value="templates">
              <div className="space-y-6">
                {outreachTemplates.map((template, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-primary" />
                            {template.title}
                          </CardTitle>
                          <CardDescription>
                            {template.category} • {template.conversionRate} conversion rate
                          </CardDescription>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => copyToClipboard(
                            `Subject: ${template.subject}\n\n${template.body}`,
                            template.title
                          )}
                        >
                          {copied === template.title ? (
                            <>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-2" />
                              Copy Template
                            </>
                          )}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3">
                        <p className="text-sm font-semibold mb-1">Subject Line:</p>
                        <code className="block bg-muted p-2 rounded text-sm">
                          {template.subject}
                        </code>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-1">Email Body:</p>
                        <pre className="bg-muted p-4 rounded text-sm whitespace-pre-wrap">
                          {template.body}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Monthly Strategy Tab */}
            <TabsContent value="strategy">
              <div className="space-y-6">
                {monthlyStrategy.map((month, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        {month.month}
                      </CardTitle>
                      <CardDescription>
                        Target: {month.target} • Effort: {month.effort}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {month.tasks.map((task, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Target Sites Tab */}
            <TabsContent value="targets">
              <div className="grid md:grid-cols-2 gap-6">
                {targetSites.map((site, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <LinkIcon className="h-5 w-5 text-primary" />
                        {site.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {site.examples.map((example, eIdx) => (
                          <li key={eIdx} className="flex items-center gap-2">
                            <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Your Unfair Advantages */}
          <Card className="mb-8 border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Your Unfair Advantages
              </CardTitle>
              <CardDescription>Why sites will link to YOU over competitors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-bold mb-2">🎯 Only Mobile App</h4>
                  <p className="text-sm text-muted-foreground">
                    CheckMEND & IMEI.info have no app. Easy angle: "Update: mobile option now available"
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-bold mb-2">💰 Free vs $3.99</h4>
                  <p className="text-sm text-muted-foreground">
                    CheckMEND charges per check. Consumer blogs love free alternatives.
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-bold mb-2">⚡ 3 Seconds vs 30+</h4>
                  <p className="text-sm text-muted-foreground">
                    Barcode scanning beats manual typing. Speed sells.
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-bold mb-2">🔫 Firearms Coverage</h4>
                  <p className="text-sm text-muted-foreground">
                    Only tool verifying firearms. Opens entirely new link opportunities.
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-bold mb-2">📴 Offline Mode</h4>
                  <p className="text-sm text-muted-foreground">
                    Works without internet. Perfect for remote meetups.
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-bold mb-2">📖 Underdog Story</h4>
                  <p className="text-sm text-muted-foreground">
                    Arizona startup vs UK giant. Press loves David vs Goliath.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Plan */}
          <Card className="border-secondary/50 bg-gradient-to-br from-secondary/5 to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-secondary" />
                Start This Week
              </CardTitle>
              <CardDescription>Your 7-day action plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">Day 1: Build Target List</p>
                    <p className="text-sm text-muted-foreground">Use search queries above to compile 100 sites linking to competitors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Day 2: Customize Templates</p>
                    <p className="text-sm text-muted-foreground">Adapt outreach templates for each site category</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">Days 3-5: Send 10 Emails/Day</p>
                    <p className="text-sm text-muted-foreground">Start with resource pages (highest conversion rate)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <p className="font-semibold">Days 6-7: Follow Up</p>
                    <p className="text-sm text-muted-foreground">Send polite follow-ups to non-responders</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-background rounded-lg">
                <p className="font-semibold mb-2">Goal: 30 emails/week = 10-15 backlinks/month</p>
                <p className="text-sm text-muted-foreground">
                  At this pace, you'll hit 625 backlinks within 12 months and rank alongside competitors.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
