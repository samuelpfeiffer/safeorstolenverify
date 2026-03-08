import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { ReportStolenItemForm } from '@/components/ReportStolenItemForm';
import { ProtectedRoute } from '@/core/routing/ProtectedRoute';
import { AlertTriangle, Shield, Users, Bell, FileText, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ReportStolenPageContent = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I report a stolen item on SafeOrStolen?",
        "acceptedAnswer": { "@type": "Answer", "text": "Fill out the form on this page with your item's details including type, brand, model, serial number (or IMEI/VIN), location stolen, and date. All reports are reviewed before being added to our searchable stolen database." }
      },
      {
        "@type": "Question",
        "name": "Is it free to report a stolen item?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, reporting a stolen item on SafeOrStolen is completely free. You need a free account to submit a report, but there is no charge to file a stolen item report." }
      },
      {
        "@type": "Question",
        "name": "What happens after I report a stolen item?",
        "acceptedAnswer": { "@type": "Answer", "text": "Your report is reviewed by our team, then added to our stolen items database. When anyone searches for your item's serial number, IMEI, or VIN, they'll be alerted that it was reported stolen. You'll receive a notification if someone searches for your item." }
      },
      {
        "@type": "Question",
        "name": "Should I also file a police report?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, absolutely. Filing a police report is essential for legal recovery of your property. SafeOrStolen supplements law enforcement databases by alerting potential buyers, but a police report is the official legal record. Include your police report number when filing your SafeOrStolen report." }
      },
      {
        "@type": "Question",
        "name": "What information do I need to report a stolen item?",
        "acceptedAnswer": { "@type": "Answer", "text": "You'll need the item type, brand, model, and at least one identifier: serial number, IMEI (for phones), or VIN (for vehicles). The more details you provide — including date stolen, location, police report number, and description — the better chance of recovery." }
      },
      {
        "@type": "Question",
        "name": "Can I report a stolen car or vehicle?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can report stolen vehicles by providing the VIN (Vehicle Identification Number). When anyone runs a VIN check on SafeOrStolen, they'll see your stolen report. We also cross-reference with NICB and state DMV databases." }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Report Stolen Item Free — Phone, Car, Laptop, Electronics | SafeOrStolen"
        description="Report your stolen phone, vehicle, laptop, or valuables to SafeOrStolen's database. Free. Help prevent others from buying stolen goods and increase your chance of recovery."
        keywords="report stolen item, report stolen phone, report stolen car, report stolen laptop, stolen property report, report stolen electronics, stolen item database"
        canonical="/report-stolen"
        structuredData={faqSchema}
      />
      
      <TopNavigation />
      
      <noscript>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1>Report a Stolen Item — Free</h1>
          <p>Submit your stolen item details to SafeOrStolen's database. When anyone checks the serial number, IMEI, or VIN, they'll be alerted it was reported stolen — helping prevent the sale of stolen goods and increasing your chance of recovery.</p>
          <h2>What You Can Report</h2>
          <ul>
            <li>Stolen phones (IMEI number)</li>
            <li>Stolen vehicles (VIN number)</li>
            <li>Stolen laptops, tablets, gaming consoles (serial number)</li>
            <li>Stolen bicycles, watches, cameras, firearms</li>
          </ul>
          <h2>How It Works</h2>
          <ol>
            <li>Fill out the report form with your item's details</li>
            <li>Our team reviews the report</li>
            <li>Item is added to the searchable stolen database</li>
            <li>Buyers checking the item will see the stolen alert</li>
            <li>You get notified if someone searches your item</li>
          </ol>
          <h2>FAQ</h2>
          <h3>Is it free to report?</h3>
          <p>Yes, reporting stolen items is completely free.</p>
          <h3>Should I also file a police report?</h3>
          <p>Yes. A police report is essential for legal recovery. SafeOrStolen supplements law enforcement by alerting potential buyers.</p>
          <a href="/verify">Verify an Item</a> | <a href="/stolen-database">Browse Stolen Database</a>
        </div>
      </noscript>
      
      <main className="min-h-screen bg-background pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Report a Stolen Item — Free
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Submit your stolen item details to our database. When anyone checks the serial number, IMEI, or VIN, 
              they'll be alerted it was reported stolen — helping prevent the sale of stolen goods and increasing 
              your chance of recovery.
            </p>
          </div>

          {/* How It Works */}
          <div className="grid sm:grid-cols-4 gap-4 mb-10">
            {[
              { icon: FileText, title: 'Submit Report', desc: 'Fill out item details below' },
              { icon: Shield, title: 'Team Reviews', desc: 'We verify and approve' },
              { icon: Users, title: 'Buyers Alerted', desc: 'Searches show stolen flag' },
              { icon: Bell, title: 'You\'re Notified', desc: 'If someone searches your item' },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="text-center">
                <CardContent className="pt-4 pb-3 px-3">
                  <Icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-semibold text-sm">{title}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What Can You Report */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">What Items Can You Report?</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Smartphones & Tablets (IMEI number)',
                'Vehicles — Cars, Trucks, Motorcycles (VIN)',
                'Laptops & Computers (serial number)',
                'Gaming Consoles — PS5, Xbox, Switch',
                'Bicycles (serial number)',
                'Firearms (serial number — checked against ATF)',
                'Watches — Rolex, Omega, Tag Heuer',
                'Cameras & Photography Equipment',
                'Power Tools & Construction Equipment',
                'Musical Instruments',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
          
          {/* Form */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg mb-10">
            <h2 className="text-xl font-bold mb-4">Stolen Item Report Form</h2>
            <ReportStolenItemForm />
          </div>
          
          {/* Important Info */}
          <div className="p-4 bg-muted/50 rounded-lg border border-border mb-10">
            <h2 className="font-semibold text-foreground mb-2">Important Information</h2>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• All reports are reviewed before being added to our database</li>
              <li>• False reports may result in account suspension</li>
              <li>• We strongly recommend also filing a police report for your stolen item</li>
              <li>• Your contact information will remain private</li>
              <li>• Include your police report number for faster processing</li>
              <li>• Reports with serial numbers, IMEI, or VIN are most effective</li>
            </ul>
          </div>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="how">
                <AccordionTrigger>How do I report a stolen item on SafeOrStolen?</AccordionTrigger>
                <AccordionContent>
                  Fill out the form above with your item's details including type, brand, model, serial number (or IMEI/VIN), location stolen, and date. All reports are reviewed by our team before being added to our searchable stolen database.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="free">
                <AccordionTrigger>Is it free to report a stolen item?</AccordionTrigger>
                <AccordionContent>
                  Yes, reporting a stolen item on SafeOrStolen is completely free. You need a free account to submit a report, but there is no charge.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="after">
                <AccordionTrigger>What happens after I report a stolen item?</AccordionTrigger>
                <AccordionContent>
                  Your report is reviewed by our team, then added to our stolen items database. When anyone searches for your item's serial number, IMEI, or VIN using SafeOrStolen, they'll be alerted that it was reported stolen. You'll also receive a notification if someone searches for your item.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="police">
                <AccordionTrigger>Should I also file a police report?</AccordionTrigger>
                <AccordionContent>
                  Yes, absolutely. Filing a police report is essential for legal recovery of your property. SafeOrStolen supplements law enforcement databases by alerting potential buyers, but a police report is the official legal record. Include your police report number when filing your SafeOrStolen report for faster processing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="info">
                <AccordionTrigger>What information do I need to report a stolen item?</AccordionTrigger>
                <AccordionContent>
                  You'll need the item type, brand, model, and at least one identifier: serial number, IMEI (for phones — dial *#06#), or VIN (for vehicles — on dashboard or driver's door). The more details you provide — date stolen, location, police report number, and description — the better chance of recovery.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="vehicle">
                <AccordionTrigger>Can I report a stolen car or vehicle?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can report stolen vehicles by providing the VIN (Vehicle Identification Number). When anyone runs a VIN check on SafeOrStolen, they'll see your stolen report. We also cross-reference with NICB and state DMV databases for comprehensive coverage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Internal Links */}
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p className="font-medium text-foreground">Related Tools</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/verify" className="text-primary hover:underline">Verify an Item</Link>
              <span>•</span>
              <Link to="/stolen-database" className="text-primary hover:underline">Browse Stolen Database</Link>
              <span>•</span>
              <Link to="/imei-checker" className="text-primary hover:underline">IMEI Checker</Link>
              <span>•</span>
              <Link to="/vin-checker" className="text-primary hover:underline">VIN Checker</Link>
              <span>•</span>
              <Link to="/faq" className="text-primary hover:underline">FAQ</Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

const ReportStolenPage = () => {
  return (
    <ProtectedRoute>
      <ReportStolenPageContent />
    </ProtectedRoute>
  );
};

export default ReportStolenPage;