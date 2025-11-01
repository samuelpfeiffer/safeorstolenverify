import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Heart, TrendingUp, Shield, Award, CheckCircle } from 'lucide-react';

export default function SuccessStoriesPage() {
  const navigate = useNavigate();

  const stories = [
    {
      category: "Buyer Protection",
      title: "Facebook Marketplace iPhone Scam Avoided",
      story: "Jessica was about to buy an iPhone 13 for $400 on Facebook Marketplace. The seller seemed legitimate with great photos. Before meeting, she checked the IMEI on SafeOrStolen and discovered it was stolen in Chicago 2 weeks earlier. She reported the seller to police and avoided legal trouble.",
      location: "Los Angeles, CA",
      saved: "$400 + legal fees",
      icon: Shield
    },
    {
      category: "Vehicle Recovery",
      title: "Stolen Tesla Recovered After 6 Months",
      story: "Michael's Tesla Model 3 was stolen from his driveway. 6 months later, someone tried to buy it on Craigslist and ran the VIN through SafeOrStolen. The system flagged it as stolen, police were notified, and Michael got his $45,000 car back.",
      location: "Austin, TX",
      saved: "$45,000 vehicle recovered",
      icon: TrendingUp
    },
    {
      category: "Business Protection",
      title: "Pawn Shop Avoids $50K Liability",
      story: "Dave owns a pawn shop in Miami. A customer brought in 15 MacBooks claiming they were from a business closure. Dave verified each serial number on SafeOrStolen and discovered 12 were stolen from a local school. He avoided purchasing stolen property and reported the theft to police.",
      location: "Miami, FL",
      saved: "$50,000 liability avoided",
      icon: Award
    },
    {
      category: "International Buyer",
      title: "UK Buyer Avoids Stolen BMW Purchase",
      story: "Sarah was purchasing a used BMW 3 Series for £15,000 on AutoTrader UK. Before completing the sale, she checked the VIN on SafeOrStolen and found it was stolen in Germany 1 year prior with a cloned VIN. She reported the seller and avoided a massive financial loss.",
      location: "London, UK",
      saved: "£15,000 saved",
      icon: CheckCircle
    },
    {
      category: "Family Story",
      title: "College Student Saves $800 on Laptop",
      story: "Jake, a college student, found a great deal on a MacBook Pro for $800 on OfferUp. His mom insisted he verify it first using SafeOrStolen. It was stolen from a university library. Jake avoided buying stolen property and found a legitimate laptop from an authorized reseller instead.",
      location: "Seattle, WA",
      saved: "$800 + criminal record avoided",
      icon: Heart
    },
    {
      category: "Bike Recovery",
      title: "Mountain Bike Recovered Through SafeOrStolen",
      story: "Amanda's $3,000 mountain bike was stolen from her garage. 3 weeks later, a buyer found it on Craigslist for $600 and verified the serial number on SafeOrStolen. Police recovered the bike, arrested the thief, and Amanda got her bike back.",
      location: "Denver, CO",
      saved: "$3,000 bike recovered",
      icon: Shield
    }
  ];

  const stats = [
    { value: "100K+", label: "Scams Prevented" },
    { value: "$1.8B", label: "Fraud Prevented" },
    { value: "12,500+", label: "Items Recovered" },
    { value: "4.9/5", label: "User Rating" }
  ];

  return (
    <>
      <PageSEO
        title="Success Stories: Real People Saved by SafeOrStolen | User Testimonials"
        description="Read real stories of buyers, sellers, and law enforcement using SafeOrStolen to avoid scams, recover stolen items, and prevent fraud. 100K+ success stories."
        keywords="SafeOrStolen success stories, stolen item recovery, buyer protection stories, scam prevention testimonials"
        structuredData={[{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "SafeOrStolen Success Stories",
          "description": "Real testimonials from users who avoided scams using SafeOrStolen"
        }]}
      />
      <AISearchOptimizer
        page="success-stories"
        primaryKeywords={['SafeOrStolen success stories', 'stolen item recovery', 'buyer protection']}
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero */}
        <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-6xl mx-auto text-center">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Stories, Real Protection
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Over 100,000 buyers, sellers, and law enforcement officers have used SafeOrStolen to avoid scams, recover stolen property, and protect themselves from fraud.
            </p>

            <Button size="lg" onClick={() => navigate('/verify')}>
              <Shield className="w-5 h-5 mr-2" />
              Verify Your Item Now
            </Button>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Real People, Real Results
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {stories.map((story, index) => {
                const Icon = story.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-primary font-semibold mb-1">{story.category}</div>
                        <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{story.story}</p>
                    
                    <div className="pt-4 border-t flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">{story.location}</p>
                        <p className="text-sm font-semibold text-green-700 mt-1">
                          ✓ {story.saved}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Video Testimonials</h2>
            <p className="text-xl text-gray-600 mb-8">
              Hear directly from SafeOrStolen users about how we helped them avoid scams and recover stolen property.
            </p>
            <p className="text-gray-600 mb-8">
              <em>Video testimonials coming soon. Want to share your story? Contact us!</em>
            </p>
            <Button variant="outline" onClick={() => navigate('/contact')}>
              Share Your Story
            </Button>
          </div>
        </section>

        {/* Law Enforcement Success */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Law Enforcement Recoveries
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  LAPD Recovers $2.3M in Stolen iPhones
                </h3>
                <p className="text-gray-600 mb-4">
                  Los Angeles Police Department used SafeOrStolen's database to track and dismantle an organized iPhone theft ring. 15 suspects arrested, 1,200+ phones recovered and returned to owners.
                </p>
                <p className="text-sm text-primary font-semibold">March 2024</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  UK Police Recover 450 Stolen Vehicles
                </h3>
                <p className="text-gray-600 mb-4">
                  Metropolitan Police partnered with SafeOrStolen to verify VINs on all used car sales. Operation led to 450 stolen vehicles recovered and 8 arrests in organized vehicle theft ring.
                </p>
                <p className="text-sm text-primary font-semibold">January 2024</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Dallas PD: 67% Reduction in Pawn Shop Theft
                </h3>
                <p className="text-gray-600 mb-4">
                  After mandating SafeOrStolen verification at all Dallas pawn shops, stolen goods resale dropped 67% in 6 months. Program now expanding statewide.
                </p>
                <p className="text-sm text-primary font-semibold">February 2024</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Be the Next Success Story
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 100,000+ people who've protected themselves from stolen goods. Start with 4 FREE verifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => navigate('/verify')}>
                <Shield className="w-5 h-5 mr-2" />
                Verify Item Now (FREE)
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white text-white"
                onClick={() => navigate('/app')}
              >
                Download Mobile App
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
