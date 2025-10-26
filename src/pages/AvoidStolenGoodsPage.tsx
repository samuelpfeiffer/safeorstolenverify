import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Eye,
  FileText,
  Phone,
  Search,
  XCircle,
  DollarSign
} from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';

const AvoidStolenGoodsPage: React.FC = () => {
  const preventionTips = [
    {
      title: "Verify Seller Identity",
      description: "Always check seller's ID and get their full contact information",
      icon: <Eye className="h-6 w-6" />,
      tips: [
        "Ask for government-issued photo ID",
        "Verify phone number and address", 
        "Meet at seller's home or workplace",
        "Check seller's online reputation/reviews"
      ]
    },
    {
      title: "Request Documentation",
      description: "Ask for original receipts and proof of ownership",
      icon: <FileText className="h-6 w-6" />,
      tips: [
        "Original purchase receipt",
        "Warranty cards or manuals",
        "Registration documents",
        "Insurance documentation"
      ]
    },
    {
      title: "Check Serial Numbers",
      description: "Verify all identifying numbers against stolen databases",
      icon: <Search className="h-6 w-6" />,
      tips: [
        "IMEI numbers for phones",
        "VIN numbers for vehicles", 
        "Serial numbers for electronics",
        "Model and part numbers"
      ]
    },
    {
      title: "Inspect Physical Condition",
      description: "Look for signs of theft or tampering",
      icon: <Shield className="h-6 w-6" />,
      tips: [
        "Check for scratched-off labels",
        "Look for forced entry damage",
        "Verify all parts are original",
        "Check for password locks"
      ]
    }
  ];

  const redFlags = [
    {
      flag: "Price Too Good to Be True",
      description: "Significantly below market value pricing",
      severity: "High"
    },
    {
      flag: "No Proof of Purchase",
      description: "Cannot provide receipt or documentation",
      severity: "High"
    },
    {
      flag: "Cash Only Transaction",
      description: "Refuses other payment methods",
      severity: "Medium"
    },
    {
      flag: "Multiple Similar Items",
      description: "Selling many identical high-value items",
      severity: "High"
    },
    {
      flag: "Avoids Meeting in Person",
      description: "Only wants to meet in secluded areas",
      severity: "Medium"
    },
    {
      flag: "Altered Serial Numbers",
      description: "Numbers scratched off or tampered with",
      severity: "High"
    },
    {
      flag: "Pressure to Buy Quickly",
      description: "Creates urgency to complete sale",
      severity: "Medium"
    },
    {
      flag: "Limited Product Knowledge",
      description: "Knows little about the item they're selling",
      severity: "Medium"
    }
  ];

  const consequences = [
    {
      title: "Legal Consequences",
      items: [
        "Criminal charges for receiving stolen property",
        "Civil liability to rightful owner",
        "Court appearances and legal fees",
        "Potential jail time or probation"
      ]
    },
    {
      title: "Financial Losses", 
      items: [
        "Loss of purchase money",
        "Item confiscated by police",
        "No insurance coverage",
        "Additional fees and costs"
      ]
    },
    {
      title: "Personal Impact",
      items: [
        "Damage to reputation and credit",
        "Stress and emotional burden",
        "Time lost dealing with authorities",
        "Risk to personal safety"
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="How to Avoid Buying Stolen Goods - Complete Protection Guide 2024"
        description="Learn how to avoid buying stolen goods with our comprehensive guide. Tips to identify stolen merchandise, verify sellers, check documentation, and protect yourself legally and financially."
        keywords="avoid buying stolen goods, how to avoid stolen merchandise, prevent buying stolen items, stolen goods prevention, check if stolen before buying, avoid stolen property, stolen goods protection, verify not stolen"
        canonical="/avoid-stolen-goods"
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How to Avoid Buying Stolen Goods
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Protect yourself from legal and financial consequences by learning how to identify stolen merchandise 
            and verify legitimate sellers before making any purchase.
          </p>
          
          <Alert className="mb-8 bg-destructive/10 border-destructive max-w-4xl mx-auto">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> Buying stolen goods is illegal even if you didn't know they were stolen. 
              You can face criminal charges and lose both your money and the item.
            </AlertDescription>
          </Alert>
        </header>

        {/* Prevention Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Essential Prevention Steps</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {preventionTips.map((tip, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      {tip.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                      <CardDescription>{tip.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tip.tips.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Red Flags */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Warning Signs of Stolen Goods</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {redFlags.map((item, index) => (
              <Card key={index} className="relative">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm">{item.flag}</h3>
                    <Badge 
                      variant={item.severity === 'High' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {item.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="absolute top-4 right-4">
                    {item.severity === 'High' ? (
                      <XCircle className="h-5 w-5 text-destructive" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Consequences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Consequences of Buying Stolen Goods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {consequences.map((category, index) => (
              <Card key={index} className="bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="text-amber-800 dark:text-amber-200">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-amber-800 dark:text-amber-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Verification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Verification Checklist</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4 text-green-600 dark:text-green-400">✅ Safe to Buy When:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Seller provides valid ID and contact info</li>
                    <li>• Has original receipts/documentation</li>
                    <li>• Serial numbers check clean</li>
                    <li>• Price is reasonable for market value</li>
                    <li>• Item is in expected condition</li>
                    <li>• Seller is knowledgeable about product</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-destructive">❌ Don't Buy When:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• No identification or proof of ownership</li>
                    <li>• Price is suspiciously low</li>
                    <li>• Serial numbers are missing/altered</li>
                    <li>• Seller is evasive or pressuring</li>
                    <li>• Item shows signs of forced entry</li>
                    <li>• Multiple red flags present</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Action Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What to Do Right Now</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Check Any Item</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Use our free database to verify if any item is reported stolen before you buy.
                </p>
                <Button asChild className="w-full">
                  <Link to="/stolen-items-database">Check Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Learn the Process</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get detailed guidance on how to properly verify items and sellers.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/how-to-check-if-item-stolen">Learn How</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Report Suspicious</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact authorities if you encounter suspicious sellers or stolen goods.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/contact">Get Help</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-4">Stay Protected When Buying Used Items</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't risk legal troubles and financial losses. Verify every purchase with our comprehensive 
                stolen goods prevention tools and databases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/stolen-items-database">Verify Item Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/stolen-goods-checker">Prevention Guide</Link>
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

export default AvoidStolenGoodsPage;