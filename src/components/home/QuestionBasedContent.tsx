import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Database, Shield, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const QuestionBasedContent = () => {
  const questions = [
    {
      question: "How to check if a phone is stolen before buying?",
      answer: "Use the IMEI number (dial *#06# on the phone) to verify against our stolen phone database. Enter the 15-digit IMEI into our free checker and get instant results. Our database searches 3,000+ sources including carrier blacklists, police reports, and insurance claims.",
      icon: Search,
      link: "/imei-check"
    },
    {
      question: "Can I check if something is stolen before buying?",
      answer: "Yes! You can verify phones (IMEI), cars (VIN), electronics, and any item with a serial number. Our database checks against law enforcement records, insurance theft claims, and global stolen goods registries. Get 2 free searches (14-day trial) to protect yourself.",
      icon: Database,
      link: "/verification-hub"
    },
    {
      question: "How do I verify a car isn't stolen?",
      answer: "Check the VIN (Vehicle Identification Number) found on the dashboard or driver's door. Enter the 17-character VIN into our free database search. We verify against NICB stolen vehicle database, police records, and DMV theft reports. Results in 30 seconds.",
      icon: Shield,
      link: "/vin-verification"
    },
    {
      question: "Is there a free database to check stolen items?",
      answer: "Yes! SafeOrStolen offers 2 free database searches (14-day trial). We check IMEI numbers, VIN numbers, and serial numbers against 3,000+ databases including NICB, GSMA, police records, and insurance claims. No credit card required for free searches.",
      icon: CheckCircle2,
      link: "/verification-hub"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {questions.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      {item.question}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.answer}
                    </p>
                    <Link to={item.link}>
                      <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                        Try Free Verification →
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};