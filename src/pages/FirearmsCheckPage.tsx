import React, { useMemo, useState } from 'react';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Search, AlertTriangle, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useNavigate } from 'react-router-dom';
import { ContextualAdPlacement } from '@/components/advertising/ContextualAdPlacement';
const FirearmsCheckPage: React.FC = () => {
  const [serial, setSerial] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultHtml, setResultHtml] = useState<string | null>(null);
  const [found, setFound] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const {
    isAuthenticated
  } = useUnifiedAuth();
  const navigate = useNavigate();
  const faqSchema = useMemo(() => [{
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: 'How do I search for a stolen firearm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter the firearm\'s serial number without spaces or special characters, then run a search using the button. Results will appear below.'
      }
    }, {
      '@type': 'Question',
      name: 'Is this linked to NCIC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. HotGunz is a community-sourced database. Always contact your local police department to run an official NCIC check for complete verification.'
      }
    }, {
      '@type': 'Question',
      name: 'Why should I check before buying?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Purchasing stolen firearms can result in legal complications and loss of property. Responsible buyers verify the legitimacy before purchase.'
      }
    }, {
      '@type': 'Question',
      name: 'Do you log my search results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Searches are intended to help people make informed decisions. Refer to HotGunz\'s policies for their logging practices.'
      }
    }, {
      '@type': 'Question',
      name: "What if I don't know the serial number?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you purchased from a licensed dealer, you can contact them for the serial number as they are required by the ATF to maintain sales records.'
      }
    }]
  }], []);
  const handleSearch = async () => {
    if (!isAuthenticated) {
      navigate('/auth?tab=signup');
      return;
    }
    const cleaned = serial.replace(/\s+/g, '');
    if (!cleaned) return;
    setError(null);
    setLoading(true);
    setResultHtml(null);
    setFound(null);
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('verify-firearm-hotgunz', {
        body: {
          serial: cleaned
        }
      });
      if (error) throw error;
      if (data?.status === 'ok') {
        setResultHtml(data.html || null);
        setFound(typeof data.found === 'boolean' ? data.found : null);
      } else {
        setError(data?.error || 'Verification failed.');
      }
    } catch (err: any) {
      setError(err?.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };
  return <div className="min-h-screen bg-sos text-white pt-20">
      <EnhancedSEOHead title="Can I Check if This Gun is Stolen? How Do I Know if Firearm is Hot?" description="Can I check if this gun is stolen? How do I know if this firearm is hot? Free serial number check to verify gun is legit before buying." canonical="/firearms-check" additionalSchemas={faqSchema as unknown as Array<Record<string, any>>} />

      <main className="container mx-auto container-padding py-12">
        <header className="text-center mb-2">
          <h1 className="text-sm font-medium mb-1">🔫 Stolen Firearms Database</h1>
          <p className="text-xs text-muted-foreground max-w-xl mx-auto">
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
                  <Input id="serial" value={serial} onChange={e => setSerial(e.target.value)} placeholder="Enter serial number (spaces and special characters will be removed automatically)" className="bg-background" />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleSearch} className="sm:w-auto" disabled={loading}>
                    {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Checking...</> : <><Search className="mr-2 h-4 w-4" /> Check Serial</>}
                  </Button>
                  <div className="text-xs text-muted-foreground sm:self-center">
                    Results will appear below. Always confirm via local law enforcement (NCIC).
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="pt-4 space-y-3">
                {error && <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Search failed</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>}

                {found !== null && <div className="text-sm font-medium">
                    {found === false ? <span className="text-green-500">No stolen records found on HotGunz for this serial.</span> : <span className="text-destructive">Potential stolen records found on HotGunz. Review details below.</span>}
                  </div>}

                <div className="rounded-lg overflow-hidden border border-border min-h-[200px]">
                  {loading && <div className="p-6 text-sm text-muted-foreground flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Fetching results from HotGunz...
                    </div>}
                  {!loading && resultHtml && <iframe title="HotGunz Results" className="w-full h-[480px] bg-background" sandbox="allow-same-origin" srcDoc={resultHtml} />}
                  {!loading && !resultHtml && !error && <div className="p-6 text-sm text-muted-foreground">No results yet. Enter a serial and click Check.</div>}
                </div>
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
                  <h3 className="font-semibold mb-1">Why should I check before buying?</h3>
                  <p>Purchasing stolen firearms, even unknowingly, can result in legal complications and loss of the firearm. Always verify legitimacy before purchase.</p>
                </article>
                <article>
                  <h3 className="font-semibold mb-1">Do you log my search results?</h3>
                  <p>This service is designed to help people make informed decisions. For HotGunz's logging and privacy policies, please refer to their website.</p>
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
        
        {/* Firearm Verification Ad */}
        <div className="mt-10">
          <ContextualAdPlacement context="firearm" placement="banner" />
        </div>
      </main>
    </div>;
};
export default FirearmsCheckPage;