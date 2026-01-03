import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Database, 
  Smartphone, 
  Bike, 
  Wrench,
  Music,
  Camera,
  Target,
  Percent,
  HelpCircle,
  ArrowRight,
  Clock,
  Globe,
  FileSearch,
  Zap
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PartialSerialNumberSearchPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many digits do I need for a partial serial search?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend at least 5-6 consecutive characters for the best results. The more digits you have, the more accurate your results will be. Even 4 digits can sometimes yield useful results when combined with item type and manufacturer information."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate are partial serial number matches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Accuracy depends on how many characters you provide. With 8+ digits, accuracy is typically 95%+. With 5-7 digits, accuracy is around 75-85%. We provide a confidence score with each result so you know how reliable the match is."
        }
      },
      {
        "@type": "Question",
        "name": "Can I search with just 5 digits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can search with as few as 4-5 digits, but you may get more potential matches to review. Adding item type, manufacturer, or other details helps narrow results significantly."
        }
      },
      {
        "@type": "Question",
        "name": "What if I get multiple matches from a partial search?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Review each match carefully. We provide additional details like item type, manufacturer, and theft location to help you identify the correct match. If unsure, contact local law enforcement for assistance."
        }
      },
      {
        "@type": "Question",
        "name": "Is partial serial number search free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer 2 free partial serial searches. Additional searches are available with our subscription plans which provide unlimited verifications and advanced features."
        }
      },
      {
        "@type": "Question",
        "name": "Do police use partial serial number matching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, law enforcement regularly uses partial serial matching through FBI NCIC and state databases. Our technology uses similar advanced matching algorithms to help identify stolen property even with incomplete serial numbers."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Partial Serial Number Search - Stolen Property Verification | SafeOrStolen"
        description="Search stolen property databases using partial serial numbers. Verify bikes, phones, tools, electronics with incomplete or worn serial numbers."
        keywords="partial serial number search, incomplete serial lookup, worn serial number check, damaged serial verification, fuzzy serial matching, stolen property search"
        canonical="https://safeorstolen.com/partial-serial-number-search"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <FileSearch className="w-4 h-4" />
              <span className="text-sm font-medium">Advanced Matching Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Partial Serial Number Search - Verify Stolen Property with Incomplete Serials
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Verify property using partial serial numbers when the full serial is worn, damaged, or partially visible. 
              Our advanced matching technology searches FBI NCIC, police databases, and insurance claims using partial 
              serial information. Essential for older items, bikes, and equipment with degraded markings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/app">
                  <Search className="mr-2 h-5 w-5" />
                  Search Partial Serial Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/how-it-works">
                  Learn How It Works
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center p-6 bg-card border-border">
                <CardContent className="pt-4">
                  <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">95%+</div>
                  <div className="text-sm text-muted-foreground">Match Accuracy (8+ digits)</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-card border-border">
                <CardContent className="pt-4">
                  <Database className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">50M+</div>
                  <div className="text-sm text-muted-foreground">Records Searchable</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-card border-border">
                <CardContent className="pt-4">
                  <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">3 Sec</div>
                  <div className="text-sm text-muted-foreground">Instant Results</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-card border-border">
                <CardContent className="pt-4">
                  <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Database Sources</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 1: How Partial Serial Search Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              How Partial Serial Search Works
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card border-border">
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Advanced Fuzzy Matching Algorithm</h3>
                      <p className="text-muted-foreground">
                        Our proprietary matching technology finds potential matches even when you only have 
                        a portion of the serial number. The algorithm accounts for common wear patterns and 
                        character degradation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Multi-Database Simultaneous Search</h3>
                      <p className="text-muted-foreground">
                        Each partial search queries FBI NCIC, all 50 state police databases, insurance claims, 
                        and manufacturer records at once. This comprehensive approach maximizes your chances 
                        of finding matches.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-card border-border">
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Worn/Damaged Serial Compensation</h3>
                      <p className="text-muted-foreground">
                        The system understands that certain characters degrade similarly over time. For example, 
                        "8" often becomes unclear and could be "0" or "B". We search all likely variations 
                        automatically.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Percent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Confidence Score Results</h3>
                      <p className="text-muted-foreground">
                        Every result includes a confidence percentage so you know how likely it is to be 
                        a true match. Higher confidence scores mean more characters matched exactly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 2: When You Need Partial Serial Search */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              When You Need Partial Serial Search
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-4">
                  <Clock className="w-10 h-10 text-amber-500 mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">Serial Numbers Worn from Age/Use</h3>
                  <p className="text-muted-foreground text-sm">
                    Older items often have serials that have faded or worn down from years of use. 
                    Even if only a portion is readable, partial search can help verify the item.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-4">
                  <AlertTriangle className="w-10 h-10 text-orange-500 mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">Partially Visible Serials</h3>
                  <p className="text-muted-foreground text-sm">
                    Sometimes serial numbers are partially covered by components, stickers, or damage. 
                    Search with whatever portion is visible without disassembly.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-4">
                  <Wrench className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">Damaged or Scratched Markings</h3>
                  <p className="text-muted-foreground text-sm">
                    Accidental scratches, corrosion, or physical damage can obscure serial numbers. 
                    Our system works with whatever characters remain legible.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-4">
                  <Bike className="w-10 h-10 text-blue-500 mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">Bikes with Faded Frame Numbers</h3>
                  <p className="text-muted-foreground text-sm">
                    Bicycle serial numbers on the bottom bracket often wear down. Even 5-6 digits 
                    from a faded bike serial can identify stolen bikes in our database.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-4">
                  <Camera className="w-10 h-10 text-purple-500 mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">Vintage Items with Unclear Serials</h3>
                  <p className="text-muted-foreground text-sm">
                    Vintage cameras, electronics, and collectibles often have serials that are 
                    difficult to read due to age or manufacturing quality of the era.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-4">
                  <Wrench className="w-10 h-10 text-green-500 mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">Tools with Worn Engravings</h3>
                  <p className="text-muted-foreground text-sm">
                    Power tools and equipment in heavy use develop worn serial engravings. 
                    Partial search helps verify construction equipment and professional tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: What You Can Search */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              What You Can Search By Partial Serial
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Bike, name: "Bicycles", desc: "Frame serial numbers" },
                { icon: Smartphone, name: "Phones", desc: "IMEI when partially visible" },
                { icon: Wrench, name: "Tools", desc: "Power equipment serials" },
                { icon: Camera, name: "Electronics", desc: "Laptops, cameras, audio" },
                { icon: Music, name: "Musical Instruments", desc: "Guitars, keyboards, amps" },
                { icon: Target, name: "Sports Equipment", desc: "High-value gear" },
                { icon: Shield, name: "Firearms", desc: "When legally checking" },
                { icon: Database, name: "Any Property", desc: "With unique identifiers" }
              ].map((item, index) => (
                <Card key={index} className="p-4 bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="flex items-center gap-3 p-0">
                    <item.icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: How to Use */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              How to Use Partial Serial Search
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Enter Known Characters", desc: "Type in the digits and letters you can clearly read from the serial number" },
                { step: "2", title: "Mark Unknown Positions", desc: "Use wildcards or leave gaps for characters you cannot identify" },
                { step: "3", title: "Add Item Details", desc: "Include manufacturer, item type, and color to narrow results" },
                { step: "4", title: "Review Matches", desc: "Examine results with confidence scores and additional details" }
              ].map((item, index) => (
                <Card key={index} className="p-6 bg-card border-border text-center">
                  <CardContent className="pt-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/app">
                  <Search className="mr-2 h-5 w-5" />
                  Search Partial Serial Now
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 5: Database Coverage */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Comprehensive Database Coverage
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "FBI NCIC Stolen Property Files", desc: "Federal database of all reported stolen property nationwide" },
                { title: "All 50 State Police Databases", desc: "Direct access to state-level theft reports and records" },
                { title: "Insurance Theft Claims", desc: "Verified claims from major insurance companies" },
                { title: "Manufacturer Stolen Shipment Records", desc: "Items reported stolen before reaching retailers" },
                { title: "Global Stolen Property Registries", desc: "International databases for cross-border verification" },
                { title: "50+ Million Records Searchable", desc: "Continuously updated with new theft reports daily" }
              ].map((item, index) => (
                <Card key={index} className="p-6 bg-card border-border">
                  <CardContent className="pt-0">
                    <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Accuracy & Confidence */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Understanding Accuracy & Confidence Scores
            </h2>
            
            <Card className="p-8 bg-card border-border mb-8">
              <CardContent>
                <h3 className="text-xl font-semibold text-foreground mb-6">Confidence Score by Character Count</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm font-medium text-foreground">8+ digits:</div>
                    <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: '95%' }}></div>
                    </div>
                    <div className="w-16 text-sm font-bold text-green-500">95%+</div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm font-medium text-foreground">6-7 digits:</div>
                    <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: '85%' }}></div>
                    </div>
                    <div className="w-16 text-sm font-bold text-blue-500">85%</div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm font-medium text-foreground">5 digits:</div>
                    <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                      <div className="bg-amber-500 h-full" style={{ width: '75%' }}></div>
                    </div>
                    <div className="w-16 text-sm font-bold text-amber-500">75%</div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm font-medium text-foreground">4 digits:</div>
                    <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                      <div className="bg-orange-500 h-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="w-16 text-sm font-bold text-orange-500">60%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-0">
                  <h3 className="font-semibold text-foreground mb-3">When to Use Full Search</h3>
                  <p className="text-sm text-muted-foreground">
                    If you have the complete serial number clearly visible, always use our standard 
                    search for 100% accuracy and fastest results.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-0">
                  <h3 className="font-semibold text-foreground mb-3">When to Use Partial Search</h3>
                  <p className="text-sm text-muted-foreground">
                    Use partial search when any characters are unclear, worn, damaged, or completely 
                    illegible. It is better to use partial than guess at unclear characters.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-0">
                  <h3 className="font-semibold text-foreground mb-3">Best Practices for Unclear Serials</h3>
                  <p className="text-sm text-muted-foreground">
                    Take photos with different lighting angles, use magnification, and try cleaning 
                    the area gently to reveal more characters before searching.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 7: Common Use Cases */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Common Use Cases for Partial Serial Search
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-0">
                  <div className="flex items-start gap-4">
                    <Bike className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Buying Vintage Bikes on Facebook Marketplace</h3>
                      <p className="text-sm text-muted-foreground">
                        Older bicycles often have worn frame serials. Verify before buying that 
                        vintage Trek, Schwinn, or classic road bike to avoid purchasing stolen property.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-0">
                  <div className="flex items-start gap-4">
                    <Wrench className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Checking Tools from Estate Sales</h3>
                      <p className="text-sm text-muted-foreground">
                        Estate sales often feature older tools with unclear serials. Verify power 
                        tools and expensive equipment before purchasing from unknown sources.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-0">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Verifying Equipment from Pawn Shops</h3>
                      <p className="text-sm text-muted-foreground">
                        Pawn shop items sometimes have wear from handling. Double-check serials even 
                        when partially visible to ensure you are not buying stolen merchandise.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-0">
                  <div className="flex items-start gap-4">
                    <Camera className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Authenticating Older Electronics</h3>
                      <p className="text-sm text-muted-foreground">
                        Vintage cameras, audio equipment, and electronics often have faded or 
                        hard-to-read serials. Partial search helps verify authenticity and ownership.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-0">
                  <div className="flex items-start gap-4">
                    <Music className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Checking Second-Hand Musical Instruments</h3>
                      <p className="text-sm text-muted-foreground">
                        Guitars, keyboards, and professional audio equipment are theft targets. 
                        Verify instruments with worn serial plates before buying from private sellers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <CardContent className="pt-0">
                  <div className="flex items-start gap-4">
                    <Smartphone className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Older Phone IMEI Verification</h3>
                      <p className="text-sm text-muted-foreground">
                        Older phones or those with damaged SIM trays may have partially visible IMEIs. 
                        Verify before activating to avoid blacklisted or stolen devices.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Visual Example Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Worn Serial Number Examples
            </h2>
            
            <Card className="p-8 bg-card border-border">
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Example: Worn Bike Serial</h3>
                    <div className="bg-muted p-4 rounded-lg font-mono text-lg mb-4">
                      <span className="text-foreground">WS</span>
                      <span className="text-muted-foreground/50">?</span>
                      <span className="text-foreground">8</span>
                      <span className="text-muted-foreground/50">??</span>
                      <span className="text-foreground">742</span>
                      <span className="text-muted-foreground/50">?</span>
                      <span className="text-foreground">1</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You can read: WS, 8, 742, 1 (7 characters). 
                      Our system searches all possible combinations for the unknown positions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">What You Enter</h3>
                    <div className="bg-primary/10 p-4 rounded-lg font-mono text-lg mb-4 text-primary">
                      WS*8**742*1
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Use * for unknown characters. The system will search variations matching 
                      this pattern and return results ranked by confidence.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">Sample Search Result</h3>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-foreground">Match Found - 87% Confidence</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p><strong>Full Serial:</strong> WSA823742B1</p>
                      <p><strong>Item Type:</strong> Bicycle - Trek Mountain Bike</p>
                      <p><strong>Status:</strong> Reported Stolen - Phoenix, AZ (2023-08-15)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    How many digits do I need for a partial serial search?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  We recommend at least 5-6 consecutive characters for the best results. The more digits you have, the more accurate your results will be. Even 4 digits can sometimes yield useful results when combined with item type and manufacturer information.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    How accurate are partial serial number matches?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Accuracy depends on how many characters you provide. With 8+ digits, accuracy is typically 95%+. With 5-7 digits, accuracy is around 75-85%. We provide a confidence score with each result so you know how reliable the match is.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Can I search with just 5 digits?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can search with as few as 4-5 digits, but you may get more potential matches to review. Adding item type, manufacturer, or other details helps narrow results significantly.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    What if I get multiple matches from a partial search?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Review each match carefully. We provide additional details like item type, manufacturer, and theft location to help you identify the correct match. If unsure, contact local law enforcement for assistance.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Is partial serial number search free?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer 2 free partial serial searches. Additional searches are available with our subscription plans which provide unlimited verifications and advanced features.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Do police use partial serial number matching?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Yes, law enforcement regularly uses partial serial matching through FBI NCIC and state databases. Our technology uses similar advanced matching algorithms to help identify stolen property even with incomplete serial numbers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Search Your Partial Serial?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Do not let worn or damaged serial numbers stop you from verifying property. 
              Our advanced matching technology can help identify stolen items even with incomplete information.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/app">
                <Search className="mr-2 h-5 w-5" />
                Search Partial Serial Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 border-t border-border">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Related Verification Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/serial-number-checker" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">Serial Number Checker</h3>
                <p className="text-sm text-muted-foreground">Full serial verification</p>
              </Link>
              <Link to="/imei-checker" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">IMEI Checker</h3>
                <p className="text-sm text-muted-foreground">Phone IMEI verification</p>
              </Link>
              <Link to="/vin-checker" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">VIN Checker</h3>
                <p className="text-sm text-muted-foreground">Vehicle VIN verification</p>
              </Link>
              <Link to="/check-bike" className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <h3 className="font-semibold mb-1">Bike Check</h3>
                <p className="text-sm text-muted-foreground">Bicycle serial verification</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartialSerialNumberSearchPage;
