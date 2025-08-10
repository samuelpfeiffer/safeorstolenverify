
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about Safe or Stolen</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Common Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">
                Can't find the answer you're looking for? Contact our support team.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sos-orange text-white hover:bg-sos-orange/90 h-10 px-4 py-2"
              >
                Contact Support
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
