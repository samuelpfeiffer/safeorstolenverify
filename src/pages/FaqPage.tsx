
import { Link } from 'react-router-dom';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageSEO } from '@/components/seo/PageSEO';
import { createBreadcrumbSchema } from '@/utils/seo/structuredData';

const FaqPage = () => {
  const faqs = [
    {
      question: "How does Safe or Stolen work?",
      answer: "Safe or Stolen helps you verify if second-hand items are reported as lost or stolen before you purchase them. Simply enter the item details or scan its barcode/QR code to get instant verification results."
    },
    {
      question: "What types of items can I verify?",
      answer: "You can verify a wide range of items including electronics, jewelry, vehicles, musical instruments, sporting goods, and more. Our database covers most valuable personal items that are commonly resold."
    },
    {
      question: "How accurate is the verification?",
      answer: "Our verification system uses multiple databases and sources to provide the most accurate results possible. However, we recommend using this as one tool among others when making purchasing decisions."
    },
    {
      question: "How many free searches do I get?",
      answer: "New users get 4 free verification searches after signing up. You can upgrade to a paid plan for unlimited searches and additional features."
    },
    {
      question: "What happens if an item is flagged as stolen?",
      answer: "If an item is flagged in our system, we recommend not purchasing it and potentially reporting it to local authorities. We provide guidance on next steps in such cases."
    },
    {
      question: "Can I use this service internationally?",
      answer: "Yes, our service works globally, though the coverage and accuracy may vary by region depending on local law enforcement databases and reporting systems."
    },
    {
      question: "How do I report a stolen item?",
      answer: "While our primary service is verification, we can guide you to the appropriate authorities and databases where you can report stolen items."
    },
    {
      question: "Is my search history private?",
      answer: "Yes, your search history is completely private and only visible to you when logged into your account. We do not share individual search data with third parties."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' }
  ]);

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-background to-sos-dark/5">{" "}
      <PageSEO
        title="FAQ - Check if Stolen: IMEI, VIN, Serial Number Questions | Safe or Stolen"
        description="Get answers to common questions about checking if items are stolen. Learn how to verify IMEI, VIN, serial numbers before buying secondhand items."
        keywords="check if stolen FAQ, IMEI check questions, VIN verification help, serial number lookup questions, stolen goods verification FAQ, how to check if stolen, verify before buying FAQ"
        structuredData={[faqSchema, breadcrumbSchema]}
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-sos-dark">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">Find answers to common questions about stolen goods verification</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gradient-to-r from-sos-dark/90 to-sos-dark p-8 rounded-xl border border-sos-orange/20">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-sos-orange/20">
                  <AccordionTrigger className="text-left text-white hover:text-sos-orange text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Internal Links Section */}
          <div className="bg-sos-lime/10 p-6 rounded-xl border border-sos-lime/20">
            <h3 className="text-xl font-semibold text-sos-dark mb-4">Need More Help?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium text-sos-dark">Verification Guides:</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/blog/how-to-check-if-device-is-safe-stolen" className="text-sos-orange hover:underline">Complete Device Safety Guide</Link></li>
                  <li><Link to="/check-phone" className="text-sos-orange hover:underline">How to Check Phone IMEI</Link></li>
                  <li><Link to="/check-car" className="text-sos-orange hover:underline">How to Verify Car VIN</Link></li>
                  <li><Link to="/check-electronics" className="text-sos-orange hover:underline">Electronics Serial Numbers</Link></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-sos-dark">Learn More:</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/how-it-works" className="text-sos-orange hover:underline">How Our Verification Works</Link></li>
                  <li><Link to="/about-problem" className="text-sos-orange hover:underline">The Stolen Goods Crisis</Link></li>
                  <li><Link to="/for-consumers" className="text-sos-orange hover:underline">Consumer Protection</Link></li>
                  <li><Link to="/contact" className="text-sos-orange hover:underline">Contact Support</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Card className="bg-sos-lime/5 border-sos-lime/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-sos-dark">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                Can't find the answer you're looking for? Contact our support team or explore our verification guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sos-orange text-white hover:bg-sos-orange/90 h-10 px-4 py-2"
                >
                  Contact Support
                </Link>
                <Link 
                  to="/blog/how-to-check-if-device-is-safe-stolen"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sos-lime text-sos-dark hover:bg-sos-lime/90 h-10 px-4 py-2"
                >
                  Read Safety Guide
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
