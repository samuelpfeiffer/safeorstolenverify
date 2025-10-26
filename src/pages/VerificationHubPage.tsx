import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/utils/seo/structuredData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, Search, CheckCircle, Car, Smartphone, Bike, Monitor, 
  Gamepad2, Camera, Laptop, Watch, Home, Zap, AlertTriangle,
  HeartHandshake, Headphones, Guitar, Diamond, Hammer
} from 'lucide-react';
import { Link } from 'react-router-dom';

const VerificationHubPage: React.FC = () => {
  const serviceSchema = createServiceSchema();
  const faqSchema = createFAQSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Verification Hub', url: '/verification-hub' }
  ]);

  const verificationCategories = [
    {
      category: "Vehicles & Transportation",
      items: [
        { name: "Cars & Trucks", icon: Car, link: "/check-car", desc: "VIN lookup for stolen vehicles" },
        { name: "Motorcycles", icon: Bike, link: "/check-car", desc: "Motorcycle VIN verification" },
        { name: "Bicycles", icon: Bike, link: "/check-bike", desc: "Bike frame number check" },
        { name: "Boats & Marine", icon: Car, link: "/check-car", desc: "Hull number verification" }
      ]
    },
    {
      category: "Electronics & Tech",
      items: [
        { name: "Phones & Tablets", icon: Smartphone, link: "/check-phone", desc: "IMEI/ESN blacklist check" },
        { name: "Laptops & Computers", icon: Laptop, link: "/check-electronics", desc: "Serial number verification" },
        { name: "TVs & Monitors", icon: Monitor, link: "/check-electronics", desc: "Model & serial check" },
        { name: "Gaming Consoles", icon: Gamepad2, link: "/check-electronics", desc: "Console serial lookup" },
        { name: "Cameras & Equipment", icon: Camera, link: "/check-electronics", desc: "Camera gear verification" },
        { name: "Audio Equipment", icon: Headphones, link: "/check-electronics", desc: "Speakers, headphones check" }
      ]
    },
    {
      category: "Weapons & Firearms",
      items: [
        { name: "Firearms & Guns", icon: Shield, link: "/firearms-check", desc: "Serial number database check" },
        { name: "Knives & Blades", icon: Shield, link: "/firearms-check", desc: "Weapon verification" }
      ]
    },
    {
      category: "Jewelry & Valuables",
      items: [
        { name: "Watches & Timepieces", icon: Watch, link: "/check-electronics", desc: "Luxury watch verification" },
        { name: "Jewelry & Diamonds", icon: Diamond, link: "/check-electronics", desc: "Precious metal check" },
        { name: "Art & Collectibles", icon: Diamond, link: "/check-electronics", desc: "Fine art verification" }
      ]
    },
    {
      category: "Tools & Equipment",
      items: [
        { name: "Power Tools", icon: Hammer, link: "/check-electronics", desc: "Tool serial verification" },
        { name: "Musical Instruments", icon: Guitar, link: "/check-electronics", desc: "Instrument serial check" },
        { name: "Sports Equipment", icon: HeartHandshake, link: "/check-electronics", desc: "Gear verification" }
      ]
    },
    {
      category: "Home & Appliances",
      items: [
        { name: "Appliances", icon: Home, link: "/check-electronics", desc: "Appliance model check" },
        { name: "Furniture", icon: Home, link: "/check-electronics", desc: "High-value furniture" }
      ]
    }
  ];

  const quickSearchTerms = [
    "stolen car", "hot phone", "stolen bike", "stolen gun", "stolen laptop", 
    "stolen TV", "stolen jewelry", "stolen tools", "stolen motorcycle", "stolen tablet",
    "hot goods", "stolen items", "theft records", "stolen property", "hot merchandise"
  ];

  const faqData = [
    {
      question: "Can I check if anything is stolen for free?",
      answer: "Yes! Our verification hub covers cars, phones, bikes, electronics, firearms, jewelry, tools, and more. Basic checks are completely free using official databases."
    },
    {
      question: "How do I know if something is hot before buying?",
      answer: "Always get the serial number, VIN, IMEI, or model number and check it here. If the seller won't provide these numbers, walk away immediately."
    },
    {
      question: "What should I do if I find stolen goods for sale?",
      answer: "Do not purchase the item. Screenshot the listing, contact local police, and report it to the platform. You could help recover someone's stolen property."
    },
    {
      question: "What makes something 'hot' vs just used?",
      answer: "Hot goods are stolen items being sold to unsuspecting buyers. Legitimate sellers provide receipts, serial numbers, and can answer detailed questions about the item."
    },
    {
      question: "Is there really a way to check if something is legitimate?",
      answer: "Yes! We search law enforcement databases, insurance claims, manufacturer records, and theft reports to verify if items are reported stolen or lost."
    }
  ];

  return (
    <>
      <PageSEO
        title="Check if ANYTHING is Stolen - Free Hub for Cars, Phones, Guns, Electronics"
        description="THE hub to check if anything is stolen, hot, lost, or legitimate. Free verification for cars, phones, bikes, guns, electronics, jewelry, tools - everything!"
        keywords="check if anything stolen, is this hot, stolen goods checker, verify if legitimate, check if something hot, stolen car phone gun bike electronics jewelry tools, theft records database"
        canonical="/verification-hub"
        structuredData={[serviceSchema, faqSchema, breadcrumbSchema]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-lg px-4 py-2">
              <Shield className="h-5 w-5 mr-2" />
              THE Verification Hub
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Check if <span className="text-primary">ANYTHING</span> is Stolen
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              The definitive hub to verify if cars, phones, bikes, guns, electronics, jewelry, tools, or ANY item is stolen, hot, lost, or legitimate before you buy
            </p>
            
            {/* Quick Search Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {quickSearchTerms.slice(0, 8).map((term, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {term}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats Banner */}
          <Card className="mb-12 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">$13B</div>
                  <p className="text-sm text-muted-foreground">Lost to stolen goods annually</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">1 in 7</div>
                  <p className="text-sm text-muted-foreground">Secondhand purchases are stolen</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">2.4M</div>
                  <p className="text-sm text-muted-foreground">Items stolen every year</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">FREE</div>
                  <p className="text-sm text-muted-foreground">Verification checks here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification Categories */}
          <div className="space-y-12">
            {verificationCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold mb-6 text-center">{category.category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-all hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                        <Link to={item.link}>
                          <Button size="sm" className="w-full">
                            Check Now
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Warning Section */}
          <Card className="my-12 border-orange-200 bg-orange-50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-orange-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-orange-900 mb-3">RED FLAGS: How to Spot Stolen Goods</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-orange-800">
                    <ul className="space-y-2 text-sm">
                      <li>• Seller won't provide serial numbers</li>
                      <li>• Price seems too good to be true</li>
                      <li>• No original packaging or receipts</li>
                      <li>• Seller wants cash only, no questions</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• Meeting in parking lots or secluded areas</li>
                      <li>• Multiple identical items for sale</li>
                      <li>• Seller can't answer basic questions about item</li>
                      <li>• Pressure to buy immediately</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">How to Check if ANYTHING is Stolen</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-blue-500/10 rounded-full w-fit mx-auto mb-4">
                    <Search className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Get ID Number</h3>
                  <p className="text-sm text-muted-foreground">
                    Find VIN, IMEI, serial number, model number, or any identifying info
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-purple-500/10 rounded-full w-fit mx-auto mb-4">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Search Databases</h3>
                  <p className="text-sm text-muted-foreground">
                    We check law enforcement, insurance, and manufacturer databases
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-green-500/10 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Get Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Know instantly if it's safe to buy or if you should walk away
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-orange-500/10 rounded-full w-fit mx-auto mb-4">
                    <Zap className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">4. Take Action</h3>
                  <p className="text-sm text-muted-foreground">
                    Buy with confidence or report stolen goods to authorities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Everything You Need to Know</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqData.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Don't Get Scammed</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join millions of smart buyers who verify before they buy. It's free, it's fast, and it could save you thousands.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Checking Items
                    <Shield className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/auth?tab=signup">
                  <Button variant="outline" size="lg">
                    Create Free Account
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default VerificationHubPage;