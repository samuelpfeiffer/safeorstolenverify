import React from 'react';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { CanonicalUrl } from '@/components/seo/CanonicalUrl';
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '@/utils/seo/structuredData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Search, CheckCircle, Smartphone, Car, Bike, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItemCategoriesPage: React.FC = () => {
  const serviceSchema = createServiceSchema();
  const faqSchema = createFAQSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Check Items', url: '/item-categories' }
  ]);

  const itemCategories = [
    {
      title: "Cars & Vehicles",
      description: "Check if car, truck, motorcycle is stolen using VIN",
      icon: Car,
      link: "/check-car",
      keywords: "VIN, vehicle, car, truck, motorcycle",
      color: "bg-blue-500"
    },
    {
      title: "Phones & Electronics", 
      description: "Verify if phone, tablet, laptop is stolen using IMEI",
      icon: Smartphone,
      link: "/check-phone",
      keywords: "IMEI, iPhone, Android, phone, tablet",
      color: "bg-green-500"
    },
    {
      title: "Bikes & Cycles",
      description: "Check if bicycle, motorcycle is reported stolen",
      icon: Bike,
      link: "/check-bike", 
      keywords: "bicycle, bike, cycle, frame number",
      color: "bg-purple-500"
    },
    {
      title: "TVs & Electronics",
      description: "Verify if TV, computer, gaming console is stolen",
      icon: Monitor,
      link: "/check-electronics",
      keywords: "TV, television, computer, gaming, console",
      color: "bg-orange-500"
    },
    {
      title: "Firearms & Guns",
      description: "Check if gun, rifle, pistol is stolen using serial number",
      icon: Shield,
      link: "/firearms-check",
      keywords: "gun, firearm, rifle, pistol, serial number",
      color: "bg-red-500"
    }
  ];

  const faqData = [
    {
      question: "Can I check if this is stolen for free?",
      answer: "Yes! Use our free verification tools above. Each category checks against official stolen goods databases including law enforcement and insurance company records."
    },
    {
      question: "How do I know if something is hot before buying?",
      answer: "Always verify the item's serial number, VIN, or IMEI before purchase. If the seller can't provide these numbers or seems evasive, walk away."
    },
    {
      question: "What should I do if this item shows as stolen?",
      answer: "Do not purchase the item. Contact local law enforcement immediately and report the seller. You could be helping recover stolen property."
    },
    {
      question: "Is there a way to find out if this is legit?",
      answer: "Yes, our database checks give you instant results. We search law enforcement, insurance, and manufacturer databases to verify legitimacy."
    }
  ];

  return (
    <>
      <CanonicalUrl url="https://safeorstolen.com/item-categories" />
      <EnhancedSEOHead
        title="What Website Can I Check if Something is Stolen? How to Tell if Hot"
        description="What website can I use to check if something is stolen? How do I know if this item is hot? Free way to check cars, phones, bikes, guns before buying."
        keywords="what website can I check if something stolen, how do I know if this is hot, can I check if this is stolen, is there a way to find out if stolen, how to tell if something hot"
        canonical="/item-categories"
        additionalSchemas={[serviceSchema, faqSchema, breadcrumbSchema]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Search className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              What Website Can I Check if Something is Stolen?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Free way to check if cars, phones, bikes, electronics, or guns are hot before you buy them
            </p>
          </div>

          {/* Item Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {itemCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 ${category.color} rounded-lg`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{category.description}</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Check:</strong> {category.keywords}
                  </p>
                  <Link to={category.link}>
                    <Button className="w-full">
                      <Shield className="h-4 w-4 mr-2" />
                      Check {category.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Stats */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$13B</div>
                  <p className="text-sm text-muted-foreground">Lost annually to stolen goods</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1 in 7</div>
                  <p className="text-sm text-muted-foreground">Second-hand purchases are stolen</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Free</div>
                  <p className="text-sm text-muted-foreground">Verification checks to protect you</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">How Do I Know if This is Stolen?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Find ID Number</h3>
                  <p className="text-sm text-muted-foreground">
                    Locate VIN, IMEI, serial number, or model number
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Check Database</h3>
                  <p className="text-sm text-muted-foreground">
                    We search law enforcement and insurance databases
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Get Answer</h3>
                  <p className="text-sm text-muted-foreground">
                    Know immediately if it's safe to buy or avoid
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Common Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCategoriesPage;