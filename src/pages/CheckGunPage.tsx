import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, Search, Check, AlertTriangle, Database, 
  FileText, Users, Clock, Smartphone, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckGunPage = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (serialNumber.trim()) {
      navigate(`/verify?q=${encodeURIComponent(serialNumber.trim())}&type=firearm`);
    }
  };

  const databases = [
    "NCIC National Stolen Gun Database",
    "ATF Records",
    "State Stolen Firearm Databases",
    "Insurance Claims",
    "Police Reports"
  ];

  const firearms = [
    "Handguns", "Pistols", "Revolvers", 
    "Rifles", "Shotguns", "All Manufacturers"
  ];

  const faqs = [
    {
      question: "How do I find my gun's serial number?",
      answer: "The serial number is typically engraved on the frame or receiver of the firearm. For handguns, check the slide, frame, or barrel. For rifles and shotguns, look on the receiver. Always ensure the firearm is unloaded before handling."
    },
    {
      question: "Is it illegal to buy a stolen gun?",
      answer: "Yes. Purchasing a stolen firearm is a federal crime, even if you didn't know it was stolen. You can face felony charges, the firearm will be confiscated, and you'll lose your money. Always verify before buying."
    },
    {
      question: "What databases does SafeOrStolen search?",
      answer: "We search the NCIC National Stolen Gun Database, ATF records, state stolen firearm databases, insurance claims, and police reports. Our comprehensive search helps ensure the firearm isn't reported stolen anywhere in the US."
    },
    {
      question: "Why should I check a gun's serial number before buying?",
      answer: "Over 300,000 firearms are reported stolen in the US each year. Many end up being resold on private markets. Checking protects you from criminal liability, losing your purchase, and potentially aiding criminals."
    },
    {
      question: "How long does a gun serial number check take?",
      answer: "Our verification takes approximately 3 seconds. Enter the serial number, click verify, and receive instant results showing whether the firearm has been reported stolen in any of our databases."
    }
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Gun Serial Number Lookup",
    "description": "Free gun serial number lookup. Check if a firearm is stolen before buying. Search NCIC, ATF, and state stolen gun databases.",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  };

  return (
    <>
      <PageSEO
        title="Free Gun Serial Number Lookup - Check If Stolen | SafeOrStolen"
        description="Free gun serial number lookup for buyers and sellers. Check if a firearm is stolen. Search NCIC, ATF, and state databases instantly."
        keywords="gun serial number lookup, check if gun is stolen, firearm serial number check, stolen gun database, NCIC gun check, ATF firearm verification"
        canonical="/check-gun"
        structuredData={pageSchema}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <Shield className="h-4 w-4 mr-2" />
                Free Firearm Verification
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Free Gun Serial Number Lookup
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Check if a firearm is stolen before you buy
              </p>

              {/* Search Form */}
              <Card className="max-w-2xl mx-auto mb-8">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="text"
                      placeholder="Enter gun serial number..."
                      value={serialNumber}
                      onChange={(e) => setSerialNumber(e.target.value)}
                      className="flex-1 h-14 text-lg"
                    />
                    <Button type="submit" size="lg" className="h-14 px-8">
                      <Search className="mr-2 h-5 w-5" />
                      Check Gun Serial Number
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  3-second results
                </span>
                <span className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-primary" />
                  100+ databases
                </span>
                <span className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-primary" />
                  Mobile app available
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* What We Search */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What We Search</h2>
              <div className="grid md:grid-cols-5 gap-4">
                {databases.map((db, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-4">
                      <Database className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">{db}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Firearms We Verify */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Firearms We Verify</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {firearms.map((type, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="font-medium">{type}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Check Before Buying */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Check Before Buying</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <AlertTriangle className="h-8 w-8 text-destructive mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Legal Protection</h3>
                    <p className="text-muted-foreground">
                      Purchasing a stolen firearm is a federal felony. Even if you didn't know it was stolen, 
                      you can face criminal charges, fines, and imprisonment.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <FileText className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Financial Protection</h3>
                    <p className="text-muted-foreground">
                      If a firearm is identified as stolen, law enforcement will confiscate it. 
                      You'll lose the gun AND your money with no recourse against the seller.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Shield className="h-8 w-8 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
                    <p className="text-muted-foreground">
                      Know your firearm has a clean history. Our verification gives you confidence 
                      that your purchase is legitimate and legally clear.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Community Safety</h3>
                    <p className="text-muted-foreground">
                      Every stolen firearm you don't buy reduces demand for illegal gun trafficking. 
                      Checking helps keep your community safer.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-8">Trusted by Buyers Nationwide</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2">
                  <Shield className="h-4 w-4 mr-2" />
                  100+ Database Sources
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Check className="h-4 w-4 mr-2" />
                  NCIC Connected
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Clock className="h-4 w-4 mr-2" />
                  3-Second Results
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Mobile App Available
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Verify Before You Buy</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Don't risk your freedom or your money. Check any firearm's serial number 
                before purchasing from a private seller.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/verify">
                    <Search className="mr-2 h-5 w-5" />
                    Check Gun Serial Number
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/app">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Download Mobile App
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CheckGunPage;
