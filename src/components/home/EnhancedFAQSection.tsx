import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from '@/lib/router-compat';
import { HelpCircle, Shield, DollarSign, Globe, Smartphone, Lock, Clock, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const EnhancedFAQSection = () => {
 const faqCategories = [
 {
 category: "Getting Started",
 icon: Smartphone,
 faqs: [
 {
 question: "How much does SafeOrStolen cost?",
  answer: "A free account includes 2 checks. Additional checks cost $0.99 each, or $10 per month for unlimited supported checks."
 },
 {
 question: "What items can I verify with SafeOrStolen?",
  answer: "You can check phones, vehicles, license plates, laptops, power tools, bicycles, cameras, firearms, and other serial-numbered items. Checks use SafeOrStolen reports, public web results, and AI analysis, with Bike Index for bicycles and HotGunz for firearms."
 },
 {
 question: "Do I need to download an app?",
  answer: "No native app download is required. SafeOrStolen is an installable web app that runs in a supported browser and requires an internet connection for checks."
 }
 ]
 },
 {
 category: "Database & Accuracy",
 icon: Globe,
 faqs: [
 {
 question: "Is this database global? What countries are covered?",
 answer: "Yes! We search SafeOrStolen's own reports, public web results, and apply AI analysis. For bicycles, we check BikeIndex, and for firearms, HotGunz. We also perform IMEI device lookups for phones (model/details only, not blacklist checks)."
 },
 {
 question: "How accurate are SafeOrStolen results?",
 answer: "We search SafeOrStolen's own reports, public web results, and apply AI analysis. For bicycles, we check BikeIndex, and for firearms, HotGunz. Results appear in 30 seconds with sources cited."
 },
 {
 question: "What if an item shows 'Safe' but turns out stolen?",
  answer: "A clear result means no matching stolen report was found in the sources checked at that time. It is not a guarantee; compare the identifier, seller records, physical item, and relevant official resources before buying."
 }
 ]
 },
 {
 category: "Pricing & Plans",
 icon: DollarSign,
 faqs: [
 {
 question: "What's included in the $10/month plan?",
 answer: "The $10/month Unlimited Plan includes unlimited verifications across all item types, PDF certificates, AI-powered analysis, seller badges, and access to multiple sources. Cancel anytime — no contracts. Or pay $0.99 per individual check."
 },
 {
 question: "Can I verify in bulk for my business?",
 answer: "Yes! Our $10/month Unlimited plan includes unlimited checks, downloadable certificates, and priority support. Perfect for pawn shops, resellers, auction houses, and marketplace sellers. Contact us for enterprise API access."
 },
 {
 question: "Do you offer refunds if I'm not satisfied?",
  answer: "Review the published refund policy for current eligibility and contact support with your account and payment details."
 }
 ]
 },
 {
 category: "Security & Privacy",
 icon: Lock,
 faqs: [
 {
 question: "Is my personal information safe with SafeOrStolen?",
 answer: "Yes. We use bank-level encryption. Payments are processed by Stripe. Card details never touch our servers. We're GDPR compliant and never sell your data. Your verification history is encrypted and private."
 },
 {
 question: "Do you share verification data with law enforcement?",
  answer: "SafeOrStolen does not claim police partnerships. Requests for account information are handled under the privacy policy and applicable legal process."
 },
 {
 question: "Can sellers see if I checked their item?",
 answer: "No. All verifications are 100% confidential. Sellers cannot see who verified their items. Only YOU see the results. Use it discreetly before meeting sellers on Facebook Marketplace, OfferUp, or Craigslist."
 }
 ]
 },
 {
 category: "Using SafeOrStolen",
 icon: Shield,
 faqs: [
 {
 question: "How fast do I get verification results?",
  answer: "Response time depends on the sources available for the item. The result page shows the verdict and sources checked when processing completes."
 },
 {
 question: "Can I verify items before meeting a seller in person?",
 answer: "YES—that's exactly what we're built for! Before handing over cash on Facebook Marketplace, OfferUp, or Craigslist, use our app ON-SITE to verify the IMEI, VIN, or serial number. Takes 30 seconds, could save you thousands."
 },
 {
 question: "What if the seller refuses to provide serial numbers?",
  answer: "Refusing to share an identifier is a reason not to proceed, but it does not by itself prove the item is stolen. Ask for the identifier, receipt, and an in-person match before paying."
 }
 ]
 }
 ];

 return (
 <section className="py-24 bg-gradient-to-br from-background via-muted/10 to-background">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
 <HelpCircle className="h-4 w-4" />
 <span>Frequently Asked Questions</span>
 </div>
 <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
 How to Check if Something is Stolen Before Buying?
 </h2>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
 Common questions about verifying stolen items, checking databases, and protecting yourself when buying secondhand
 </p>
 </div>

 <div className="max-w-5xl mx-auto space-y-12">
 {faqCategories.map((category, categoryIndex) => (
 <Card key={categoryIndex} className="p-8 bg-card border-border">
 <div className="flex items-center gap-3 mb-6">
 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
 <category.icon className="h-6 w-6 text-primary" />
 </div>
 <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
 </div>

 <Accordion type="single" collapsible className="space-y-4">
 {category.faqs.map((faq, faqIndex) => (
 <AccordionItem
 key={faqIndex}
 value={`${categoryIndex}-${faqIndex}`}
 className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/30"
 >
 <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pt-2">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </Card>
 ))}
 </div>

 {/* Still Have Questions CTA */}
 <Card className="max-w-3xl mx-auto mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 text-center">
 <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
 <h3 className="text-2xl font-bold text-foreground mb-3">
 Still Have Questions?
 </h3>
 <p className="text-muted-foreground mb-6">
 Our support team is available 24/7 to help with any questions about verification, pricing, or technical issues.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link 
 to="/about" 
 className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all min-h-[56px]"
 >
 Contact Support
 </Link>
 <Link 
 to="/faq" 
 className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-all min-h-[56px]"
 >
 View Full FAQ
 </Link>
 </div>
 </Card>
 </div>
 </section>
 );
};
