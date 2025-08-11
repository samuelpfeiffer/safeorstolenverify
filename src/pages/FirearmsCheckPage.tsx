import React, { useMemo, useState, useRef } from 'react';
import HotGunzWidget from '@/components/integrations/HotGunzWidget';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Search, AlertTriangle } from 'lucide-react';

const FirearmsCheckPage: React.FC = () => {
  const [style, setStyle] = useState<'style1' | 'style2' | 'style3' | 'style4'>('style4');
  const [serial, setSerial] = useState('');
  const widgetRef = useRef<HTMLDivElement>(null);

  const faqSchema = useMemo(() => ([{
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I search for a stolen firearm?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enter the firearm\'s serial number without spaces or special characters, then run a search against the HotGunz stolen firearms database.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is this linked to NCIC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. HotGunz is a community-sourced database. Always contact your local police department to run an official NCIC check for complete verification.'
        }
      },
      {
        '@type': 'Question',
        name: 'Why should I check before buying?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Purchasing stolen firearms can result in legal complications and loss of property. Responsible buyers verify the legitimacy before purchase.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you log my search results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Searches through this tool are intended to help people make informed decisions. Refer to HotGunz\'s policies for their logging practices.'
        }
      },
      {
        '@type': 'Question',
        name: "What if I don't know the serial number?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you purchased from a licensed dealer, you can contact them for the serial number as they are required by the ATF to maintain sales records.'
        }
      }
    ]
  }]), []);

  const handleSearch = () => {
    const cleaned = serial.replace(/\s+/g, '');
    // Keep users on this page: scroll to the embedded search tool below
    const el = widgetRef.current;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-sos text-white pt-20">
      <EnhancedSEOHead
        title="Search Stolen Firearms Database (HotGunz)"
        description="Check if a firearm has been reported stolen before purchasing. Search HotGunz via the embedded widget on this page."
        canonical="/firearms-check"
        additionalSchemas={faqSchema as unknown as Array<Record<string, any>>}
      />

      <main className="container mx-auto container-padding py-12">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Search Stolen Firearms Database</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check if a firearm has been reported stolen before purchasing.
          </p>
        </header>

        <section aria-labelledby="notice" className="mb-6">
          <Alert>
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle id="notice">Important Notice</AlertTitle>
            <AlertDescription>
              This search uses the HotGunz stolen firearms database. Always verify with local law enforcement and run NCIC checks for complete verification.
            </AlertDescription>
          </Alert>
        </section>

        <section aria-labelledby="search" className="mb-8">
          <Card className="bg-card border-border">
            <CardContent className="space-y-5 pt-6">
              <div className="flex items-center gap-2 text-base font-semibold">
                <Search className="h-5 w-5" />
                <h2 id="search">Firearm Serial Number Search</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="serial" className="block text-sm text-muted-foreground mb-2">
                    Enter Firearm Serial Number
                  </label>
                  <Input
                    id="serial"
                    value={serial}
                    onChange={(e) => setSerial(e.target.value)}
                    placeholder="Enter serial number (spaces and special characters will be removed automatically)"
                    className="bg-background"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleSearch} className="sm:w-auto">
                    <Search className="mr-2 h-4 w-4" />
                    Search Below
                  </Button>
                  <div className="text-xs text-muted-foreground sm:self-center">
                    Your search stays on this site. Use the embedded tool below to run your query.
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-sm text-muted-foreground">Embedded widget style</div>
                <div className="w-full sm:w-64">
                  <Select value={style} onValueChange={(v) => setStyle(v as any)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="style1">Style 1</SelectItem>
                      <SelectItem value="style2">Style 2</SelectItem>
                      <SelectItem value="style3">Style 3</SelectItem>
                      <SelectItem value="style4">Style 4 (Transparent)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-border" ref={widgetRef}>
                <HotGunzWidget style={style} height={440} />
              </div>
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="faq" className="mt-10">
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="mb-4">
                <h2 id="faq" className="text-2xl font-semibold">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-6 text-sm leading-relaxed text-foreground">
                <article>
                  <h3 className="font-semibold mb-1">How do I search for a stolen firearm?</h3>
                  <p>Enter the serial number of the firearm in question without spaces, dashes, or other special characters. We will strip spaces automatically when you search.</p>
                </article>
                <article>
                  <h3 className="font-semibold mb-1">Is this linked to NCIC?</h3>
                  <p>No, this database includes firearms reported to HotGunz. Absence in this database does not guarantee the firearm is not stolen. To be 100% sure, contact your local police department and request they run the serial number through NCIC.</p>
                </article>
                <article>
                  <h3 className="font-semibold mb-1">Why should I check before buying?</h3>
                  <p>Purchasing stolen firearms, even unknowingly, can result in legal complications and loss of the firearm. Always verify legitimacy before purchase.</p>
                </article>
                <article>
                  <h3 className="font-semibold mb-1">Do you log my search results?</h3>
                  <p>This service is designed to help people make informed decisions. For HotGunz\'s logging and privacy policies, please refer to their website.</p>
                </article>
                <article>
                  <h3 className="font-semibold mb-1">What if I don't know the serial number?</h3>
                  <p>If purchased from a licensed firearm dealer (gun store, pawn shop, or licensed gun show dealer), you can contact them for the serial number. They are required by the ATF to maintain records.</p>
                </article>
                <hr className="my-4 border-border" />
                <p className="text-xs text-muted-foreground">Disclaimer: This service uses the HotGunz stolen firearms database. Always verify with local law enforcement for complete verification.</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default FirearmsCheckPage;
