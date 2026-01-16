import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Search, CheckCircle, Shield, Smartphone, AlertTriangle, Lock, Wifi, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const IMEIBlacklistCheckPage = () => {
  const [imei, setImei] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (imei.trim().length < 14) {
      toast.error('Please enter a valid IMEI (15 digits)');
      return;
    }
    navigate(`/verify?serial=${encodeURIComponent(imei.trim())}&type=smartphone`);
  };

  const faqs = [
    {
      question: "What is an IMEI blacklist?",
      answer: "The IMEI blacklist is a database of phones reported lost, stolen, or unpaid to carriers. When a phone is blacklisted, carriers block it from connecting to their networks, making it essentially useless. SafeOrStolen checks multiple blacklist databases to verify if a phone is blocked."
    },
    {
      question: "Can a blacklisted phone be unblacklisted?",
      answer: "It depends on why it was blacklisted. If blacklisted for non-payment, paying the bill can remove it. If reported stolen, only the original owner can request removal through law enforcement. Phones blacklisted for fraud are typically permanent. Never buy a blacklisted phone expecting to fix it."
    },
    {
      question: "Does blacklist status affect all carriers?",
      answer: "In the US, major carriers share blacklist data through the GSMA Device Registry. A phone blacklisted by one carrier is typically blocked by all major US carriers. Some MVNOs (smaller carriers) may not check, but it's risky as they may block it later."
    },
    {
      question: "How do I find my phone's IMEI?",
      answer: "Dial *#06# on any phone to display the IMEI. You can also find it in Settings > About Phone > IMEI, on the original box, or on the SIM tray for some models. iPhones show IMEI in Settings > General > About."
    },
    {
      question: "What's the difference between blacklist and iCloud lock?",
      answer: "Blacklist blocks network connectivity (calls, texts, data). iCloud lock (Apple) prevents device setup and use. A phone can have both issues. SafeOrStolen checks for stolen status which often correlates with both issues."
    },
    {
      question: "Is the IMEI blacklist check free?",
      answer: "SafeOrStolen offers 2 free IMEI checks. This covers most casual buyers checking a phone before purchase. Additional checks require a paid plan ($9.99/month for unlimited). No credit card required for free searches."
    }
  ];

  const whatWeCheck = [
    { icon: Shield, title: 'Stolen/Lost Status', description: 'Reported to police or carriers as stolen or lost' },
    { icon: Lock, title: 'Carrier Blacklist', description: 'Blocked by carriers for non-payment or fraud' },
    { icon: Wifi, title: 'Network Block', description: 'Unable to connect to cellular networks' },
    { icon: CreditCard, title: 'Finance Lock', description: 'Still being financed or leased' }
  ];

  const supportedBrands = [
    'iPhone', 'Samsung Galaxy', 'Google Pixel', 'OnePlus', 'Xiaomi', 
    'Motorola', 'LG', 'Sony Xperia', 'Nokia', 'Huawei', 'OPPO', 'Vivo'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Free IMEI Blacklist Check",
        "url": "https://safeorstolen.com/imei-blacklist-check",
        "provider": {
          "@type": "Organization",
          "name": "SafeOrStolen",
          "url": "https://safeorstolen.com"
        },
        "serviceType": "Phone Verification",
        "areaServed": "Worldwide",
        "description": "Free IMEI blacklist checker. Check if any phone is stolen, blocked, or blacklisted before buying."
      },
      {
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
    ]
  };

  return (
    <>
      <PageSEO
        title="Free IMEI Blacklist Check - Is This Phone Stolen or Blocked? | SafeOrStolen"
        description="Free IMEI blacklist checker. Check if any phone is stolen, blocked, or blacklisted. Works for iPhone, Samsung, Google Pixel, and all smartphones. Instant results."
        keywords="imei blacklist check free, imei blacklist lookup, phone blacklist check, is my phone blacklisted, check if phone is stolen, imei stolen check, carrier blacklist check"
        canonical="/imei-blacklist-check"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Free IMEI Blacklist Check
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Check if any phone is stolen, blacklisted, or blocked. A blacklisted phone won't connect 
              to networks and is essentially worthless. Verify before you buy.
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Enter IMEI (15 digits) - Dial *#06# to find"
                  value={imei}
                  onChange={(e) => setImei(e.target.value.replace(/\D/g, ''))}
                  className="text-lg py-6"
                  maxLength={15}
                />
                <Button type="submit" size="lg" className="gap-2">
                  <Search className="w-5 h-5" />
                  Check IMEI
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Find IMEI by dialing *#06# on any phone. 2 free checks included.
              </p>
            </form>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                100+ Databases
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                All Carriers Checked
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Instant Results
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free Mobile App
              </span>
            </div>
          </div>
        </section>

        {/* What We Check */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our IMEI Check Reveals</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatWeCheck.map((item) => (
                <div key={item.title} className="text-center p-6 bg-background rounded-lg">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Find IMEI */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Find Your IMEI</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold">Dial *#06#</h3>
                    <p className="text-muted-foreground">Works on every phone. Open the dialer and type *#06# - the IMEI displays instantly.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold">Settings Menu</h3>
                    <p className="text-muted-foreground">iPhone: Settings → General → About. Android: Settings → About Phone → IMEI.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold">Original Box</h3>
                    <p className="text-muted-foreground">The IMEI is printed on a label on the original phone box, usually near the barcode.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold">SIM Tray</h3>
                    <p className="text-muted-foreground">Some iPhone models have the IMEI engraved on the SIM tray.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Blacklisted Phones Are Worthless */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Check Before Buying?</h2>
            <div className="bg-background border border-destructive/30 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-10 h-10 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">A Blacklisted Phone Is Worthless</h3>
                  <p className="text-muted-foreground">
                    Blacklisted phones cannot connect to cellular networks. No calls, no texts, no data. 
                    They're essentially expensive WiFi-only devices. Sellers often know this and try to 
                    pass them off before buyers discover the truth.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 ml-14">
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  <span>Can't make or receive calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  <span>No text messages or cellular data</span>
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  <span>May be seized by police if stolen</span>
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  <span>Cannot be legitimately resold</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Supported Phones */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Supported Phone Brands</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {supportedBrands.map((brand) => (
                <span 
                  key={brand} 
                  className="px-4 py-2 bg-card rounded-full border text-sm font-medium"
                >
                  {brand}
                </span>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">
              And all other smartphones with 15-digit IMEI numbers
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background px-6 rounded-lg">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Verify Before You Buy</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't get stuck with a worthless blacklisted phone. Check the IMEI first.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/verify">
                <Button size="lg" className="gap-2">
                  <Smartphone className="w-4 h-4" />
                  Check IMEI Free
                </Button>
              </Link>
              <Link to="/check-phone">
                <Button size="lg" variant="outline">
                  Learn More About Phone Checks
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-8 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">Related Verification Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/imei-checker" className="text-primary hover:underline">IMEI Checker</Link>
              <Link to="/check-phone" className="text-primary hover:underline">Phone Stolen Check</Link>
              <Link to="/check-iphone-stolen" className="text-primary hover:underline">iPhone IMEI Check</Link>
              <Link to="/check-samsung-stolen" className="text-primary hover:underline">Samsung IMEI Check</Link>
              <Link to="/check-if-stolen" className="text-primary hover:underline">Check If Stolen</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IMEIBlacklistCheckPage;
