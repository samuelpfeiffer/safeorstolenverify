import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { 
  Shield, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  ShoppingBag,
  Eye,
  FileText,
  Phone
} from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';

const StolenGoodsCheckerPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const checklistItems = [
    {
      title: "Request Proof of Purchase",
      description: "Ask for original receipt, warranty card, or purchase documentation",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Verify Seller Identity", 
      description: "Get seller's full name, ID, and contact information",
      icon: <Eye className="h-5 w-5" />
    },
    {
      title: "Check Serial Numbers",
      description: "Verify all identifying numbers against stolen databases",
      icon: <Search className="h-5 w-5" />
    },
    {
      title: "Inspect for Damage",
      description: "Look for signs of forced entry, missing labels, or tampering",
      icon: <AlertTriangle className="h-5 w-5" />
    }
  ];

  const redFlags = [
    "Seller refuses to provide serial number or IMEI",
    "Price is significantly below market value", 
    "Seller insists on cash-only transaction",
    "Multiple identical items for sale",
    "No original packaging or accessories",
    "Seller avoids meeting in public places",
    "Story about item's origin keeps changing",
    "Pressure to buy immediately without inspection",
    "Item has scratched-off or altered serial numbers",
    "Seller has no knowledge about the product"
  ];

  return (
    <>
      <PageSEO
        title="Stolen Goods Checker - Avoid Buying Stolen Merchandise | Free Verification Tool"
        description="Free stolen goods checker tool. Learn how to identify stolen merchandise, verify items before buying, and protect yourself from fraud. Check serial numbers against stolen goods databases instantly."
        keywords="stolen goods checker, stolen merchandise, avoid buying stolen goods, check stolen items, stolen property verification, how to avoid stolen goods, stolen goods database, merchandise theft checker"
        canonical="/stolen-goods-checker"
      />
      <div className="min-h-screen bg-background">

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Stolen Goods Checker
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Protect yourself from buying stolen merchandise. Our free verification tool helps you identify stolen goods 
            and avoid legal complications from purchasing stolen property.
          </p>
          
          <Alert className="mb-8 bg-destructive/10 border-destructive max-w-4xl mx-auto">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Legal Warning:</strong> Buying stolen goods is illegal, even if you didn't know they were stolen. 
              Always verify items before purchase to protect yourself legally and financially.
            </AlertDescription>
          </Alert>

          {/* Quick Check */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                placeholder="Enter serial number, IMEI, or item details to check..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button asChild>
                <Link to={`/stolen-items-database?search=${encodeURIComponent(searchQuery)}`}>
                  Check Now
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* How to Avoid Stolen Goods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Avoid Buying Stolen Goods</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {checklistItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Red Flags Warning Signs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Red Flags: Signs of Stolen Goods</h2>
          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-5 w-5" />
                Warning Signs to Watch For
              </CardTitle>
              <CardDescription>
                If you notice any of these red flags, do not proceed with the purchase and consider reporting to authorities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3">
                {redFlags.map((flag, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">{flag}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What to Do Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What to Do If You Suspect Stolen Goods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-destructive text-destructive-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Don't Buy</h3>
                <p className="text-sm text-muted-foreground">
                  Immediately stop the transaction. Do not proceed with purchasing any item you suspect might be stolen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Report It</h3>
                <p className="text-sm text-muted-foreground">
                  Contact local law enforcement with details about the seller, item, and location where it was offered for sale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Protect Others</h3>
                <p className="text-sm text-muted-foreground">
                  Share information with others and report suspicious listings on marketplace platforms to prevent others from buying stolen goods.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Legal Consequences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Legal Consequences of Buying Stolen Goods</h2>
          <Card className="bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-amber-800 dark:text-amber-200">Financial Losses</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Loss of purchase money</li>
                    <li>• Item confiscated by police</li>
                    <li>• Legal fees and court costs</li>
                    <li>• No insurance coverage for stolen goods</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-amber-800 dark:text-amber-200">Legal Issues</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Criminal charges possible</li>
                    <li>• Civil liability to rightful owner</li>
                    <li>• Damage to credit and reputation</li>
                    <li>• Requirement to cooperate with investigation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Verification Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Step-by-Step Verification Process</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Get Item Details",
                description: "Collect serial number, IMEI, VIN, model number, and any other identifying information"
              },
              {
                step: 2, 
                title: "Run Database Check",
                description: "Use our stolen goods checker to search multiple databases for theft reports"
              },
              {
                step: 3,
                title: "Verify Seller",
                description: "Check seller's identity, request proof of purchase, and assess their credibility"
              },
              {
                step: 4,
                title: "Physical Inspection", 
                description: "Examine the item for signs of tampering, damage, or altered identification numbers"
              },
              {
                step: 5,
                title: "Make Decision",
                description: "Only proceed if all checks pass and you're confident the item is legitimate"
              }
            ].map((step, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-4">Verify Before You Buy</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't risk the legal and financial consequences of buying stolen goods. 
                Use our free verification tools to check any item before purchase.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/stolen-items-database">Check Item Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/how-to-check-if-item-stolen">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
    </>
  );
};

export default StolenGoodsCheckerPage;