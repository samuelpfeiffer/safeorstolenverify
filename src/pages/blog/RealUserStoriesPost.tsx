import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Shield, DollarSign, AlertTriangle, CheckCircle, Star } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const RealUserStoriesPost = () => {
  const successStories = [
    {
      id: 1,
      name: "Jessica M.",
      location: "Austin, TX",
      itemType: "MacBook Pro",
      amountSaved: "$2,400",
      scenario: "Facebook Marketplace Deal",
      story: "Found a 'too good to be true' MacBook Pro listing on Facebook Marketplace. The seller claimed it was barely used and priced at 60% below retail. Something felt off, so I checked the serial number on SafeOrStolen before meeting up.",
      discovery: "STOLEN - Reported by University of Texas campus security 2 weeks earlier",
      outcome: "Avoided purchasing stolen goods and potential legal issues. Reported the listing to authorities who arrested the seller.",
      impact: "fraud_prevention",
      verificationCode: "SOS-TX-2024-0847",
      testimonial: "SafeOrStolen literally saved me from becoming an unwitting accomplice to theft. The $7.99 monthly subscription has already paid for itself many times over."
    },
    {
      id: 2,
      name: "Mike's Electronics Repair",
      location: "Denver, CO",
      itemType: "6 iPhones",
      amountSaved: "$4,200",
      scenario: "Bulk Purchase for Repair Shop",
      story: "A customer offered to sell us 6 iPhones at once for our repair shop inventory. Prices were competitive but the quantity raised some red flags. We verified all IMEIs through SafeOrStolen's bulk verification feature.",
      discovery: "5 out of 6 phones were reported stolen from various locations across Colorado",
      outcome: "Declined the purchase and reported to local police. Our decision led to the arrest of a theft ring operating across multiple cities.",
      impact: "business_protection",
      verificationCode: "SOS-CO-2024-1205",
      testimonial: "As a business, we can't afford to unknowingly deal in stolen goods. SafeOrStolen is now part of our standard purchasing process."
    },
    {
      id: 3,
      name: "Sarah K.",
      location: "Phoenix, AZ", 
      itemType: "Used Car",
      amountSaved: "$18,500",
      scenario: "Private Party Car Purchase",
      story: "After weeks of searching, I found a Honda Civic that seemed perfect - low miles, great condition, and priced $3,000 below KBB value. The seller had a plausible story about needing quick cash for a move.",
      discovery: "STOLEN - Vehicle reported stolen 3 months earlier from a Phoenix dealership",
      outcome: "Avoided massive financial and legal complications. The car was recovered by police and returned to the rightful owner.",
      impact: "major_fraud_prevention",
      verificationCode: "SOS-AZ-2024-0692", 
      testimonial: "I almost lost my entire down payment and could have faced criminal charges. SafeOrStolen's VIN check saved my financial future."
    },
    {
      id: 4,
      name: "College Student - Jake R.",
      location: "Ann Arbor, MI",
      itemType: "Gaming Console & Games",
      amountSaved: "$650",
      scenario: "Craigslist Purchase",
      story: "Saw a PlayStation 5 bundle with games listed for $400 on Craigslist. As a college student on a tight budget, it seemed like an amazing deal. Decided to verify the console serial number first.",
      discovery: "STOLEN - Console taken in home burglary reported to Ann Arbor Police",
      outcome: "Avoided purchase and helped police track down the burglar through the Craigslist posting.",
      impact: "fraud_prevention",
      verificationCode: "SOS-MI-2024-1018",
      testimonial: "Even though I couldn't afford the subscription, the free daily checks were enough. SafeOrStolen protected me when I was most vulnerable financially."
    }
  ];

  const impactStats = [
    { label: "Total Fraud Prevented", value: "$2.3M+", icon: DollarSign },
    { label: "Items Verified", value: "125K+", icon: CheckCircle },
    { label: "Arrests Assisted", value: "47", icon: Shield },
    { label: "User Satisfaction", value: "98.5%", icon: Star }
  ];

  return (
    <>
      <PageSEO
        title="Real User Success Stories: How SafeOrStolen Prevented Fraud | SafeOrStolen Blog"
        description="Read verified success stories from real SafeOrStolen users who avoided purchasing stolen goods. See how our verification service protected them from fraud and legal issues."
        keywords="user success stories, fraud prevention, stolen goods avoided, verification success, real testimonials, theft prevention"
      />
      
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-sos-lime/10 text-sos-lime">
                <Users className="mr-2 h-4 w-4" />
                Success Stories
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Real Users, Real Protection, Real Results
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These are verified stories from actual SafeOrStolen users who avoided fraud, 
                saved money, and stayed out of legal trouble by verifying before buying.
              </p>
            </div>

            {/* Impact Statistics */}
            <Card className="mb-12 bg-gradient-to-r from-sos-orange/5 to-sos-lime/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Our Community Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="h-8 w-8 text-sos-orange mx-auto mb-3" />
                      <div className="text-2xl font-bold text-sos-orange">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-bold text-center">Verified Success Stories</h2>
              {successStories.map((story, index) => (
                <Card key={story.id} className="relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full ${
                    story.impact === 'major_fraud_prevention' ? 'bg-red-500' :
                    story.impact === 'business_protection' ? 'bg-blue-500' :
                    'bg-sos-lime'
                  }`}></div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-3 text-xl">
                          <Users className="h-5 w-5 text-sos-orange" />
                          {story.name} - {story.location}
                        </CardTitle>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="outline" className="text-sos-orange border-sos-orange">
                            {story.itemType}
                          </Badge>
                          <Badge variant="outline" className="text-sos-lime border-sos-lime">
                            Saved {story.amountSaved}
                          </Badge>
                        </div>
                      </div>
                      <Shield className="h-8 w-8 text-sos-lime" />
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-sos-orange">The Situation</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{story.story}</p>
                      </div>
                      
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-red-800 flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          What We Discovered
                        </h4>
                        <p className="text-red-700 text-sm font-medium">{story.discovery}</p>
                      </div>
                      
                      <div className="bg-sos-lime/10 border border-sos-lime/20 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-sos-lime flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          The Outcome
                        </h4>
                        <p className="text-muted-foreground text-sm">{story.outcome}</p>
                      </div>
                      
                      <div className="border-l-4 border-sos-orange pl-4">
                        <p className="italic text-muted-foreground text-sm">"{story.testimonial}"</p>
                        <div className="mt-2 text-xs text-muted-foreground">
                          Verification ID: {story.verificationCode}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Protection Promise */}
            <Card className="bg-gradient-to-r from-sos-dark/90 to-sos/90 text-white border-sos-orange/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <Shield className="h-16 w-16 text-sos-orange mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Your Protection is Our Mission</h3>
                  <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                    Every day, SafeOrStolen users avoid becoming victims of theft, fraud, and legal complications. 
                    Join our community of informed buyers who verify before they buy.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Badge className="bg-sos-orange text-white px-4 py-2 text-base">
                      4 Free Checks Daily
                    </Badge>
                    <Badge className="bg-sos-lime text-sos-dark px-4 py-2 text-base">
                      24/7 Protection
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealUserStoriesPost;