import { PageSEO } from '@/components/seo/PageSEO';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Search, Shield, AlertTriangle, CheckCircle, ArrowRight, Info, Phone, FileText } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const faqs = [
  {
    question: "Can I check if a gun is stolen for free?",
    answer: "Yes. Use our search above - it's completely free and always will be. We check against multiple databases including NCIC records, state databases, and police reports."
  },
  {
    question: "How do I find the serial number on a gun?",
    answer: "Look on the barrel, frame, or receiver. For handguns, check the right side of the frame. For rifles, check the receiver or barrel. If it's been removed or altered, that's a huge red flag - don't buy it."
  },
  {
    question: "Will police know if I check if a gun is stolen?",
    answer: "Nope. Completely anonymous. We don't track searches or report anything to law enforcement. You're just doing your due diligence as a responsible buyer."
  },
  {
    question: "What happens if the gun I bought is stolen?",
    answer: "First, don't panic. If you bought it legally and have proof (receipt, seller info, etc.), you're usually protected from prosecution. But you WILL lose the gun - it goes back to the original owner. That's why checking BEFORE buying is so important."
  },
  {
    question: "Is it illegal to own a stolen gun if I didn't know it was stolen?",
    answer: "Generally, you won't face criminal charges if you genuinely didn't know. But you'll lose the gun and your money. In some states, buying from unlicensed sellers without verification can create legal issues."
  },
  {
    question: "How long does a gun stay on the stolen list?",
    answer: "Forever, or until recovered. Unlike some items, stolen firearms remain in NCIC indefinitely. A gun stolen in 1990 will still show up as stolen today."
  }
];

const IsMyGunStolenPage = () => {
  return (
    <>
      <PageSEO
        title="Is My Gun Stolen? Here's How to Check for Free | SafeOrStolen"
        description="Found a gun? Inherited firearms? Buying used? Here's exactly how to check if a gun is stolen - it takes about 30 seconds. Free, anonymous, instant results."
        keywords="is my gun stolen, check if gun is stolen, gun serial number lookup, stolen gun check, verify firearm not stolen, NCIC gun check"
        canonical="/is-my-gun-stolen"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>Quick check takes 30 seconds</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Is My Gun Stolen? Here's How to Check for Free
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Found a gun? Inherited firearms? Buying used? Here's exactly how to check 
              if a gun is stolen - it takes about 30 seconds.
            </p>

            <div className="pt-4 max-w-xl mx-auto">
              <HomeSearchFormWithURL />
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-green-500" /> 100% Free</span>
              <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-blue-500" /> Anonymous</span>
              <span className="flex items-center gap-1"><Search className="h-4 w-4 text-primary" /> Instant Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* When to Check Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">When Should You Check?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Search className="h-5 w-5 text-primary" />
                    Buying Used
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    That great deal at a gun show or private sale? Check it first. 
                    A "clean" gun from a stranger might not be clean at all.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="h-5 w-5 text-primary" />
                    Inherited Firearms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Grandpa's gun collection might have a surprise. Old guns can have 
                    complicated histories - better to know before you take possession.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Info className="h-5 w-5 text-primary" />
                    Found a Gun
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Found one in a house you bought? In storage? Check it before 
                    you do anything else. Then contact local police.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              How to Check (Step by Step)
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Find the Serial Number</h3>
                      <p className="text-muted-foreground mb-3">
                        Look on the gun's frame, receiver, or barrel. Here's where to look by type:
                      </p>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li><strong>Handguns:</strong> Right side of the frame, near trigger guard</li>
                        <li><strong>Revolvers:</strong> Bottom of the grip frame or cylinder crane</li>
                        <li><strong>Rifles:</strong> Left side of the receiver</li>
                        <li><strong>Shotguns:</strong> Left side of the receiver or barrel</li>
                      </ul>
                      <p className="text-amber-600 dark:text-amber-400 mt-3 text-sm font-medium">
                        ⚠️ If the serial number is scratched off or hard to read, walk away immediately. 
                        That's a federal crime in most cases.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Enter It Above</h3>
                      <p className="text-muted-foreground">
                        Type the serial number into our search box at the top of this page. 
                        We'll check it against NCIC records, state databases, and reported 
                        stolen firearms. Takes about 3 seconds.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Understand the Results</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <p className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <strong className="text-foreground">Clear:</strong> No theft reports found. You're good to proceed.
                        </p>
                        <p className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-500" />
                          <strong className="text-foreground">Flagged:</strong> This gun has been reported stolen. Do NOT buy it.
                        </p>
                        <p className="flex items-center gap-2">
                          <Info className="h-5 w-5 text-amber-500" />
                          <strong className="text-foreground">Unknown:</strong> No records found - could be new or not in system.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What If It IS Stolen */}
      <section className="py-12 bg-red-500/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              What If It IS Stolen?
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              First, don't panic. Here's exactly what to do:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-amber-500/50">
                <CardHeader>
                  <CardTitle className="text-lg">If You Haven't Bought It Yet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>✓ Walk away from the deal immediately</p>
                  <p>✓ Note the seller's information if you can</p>
                  <p>✓ Consider reporting to local police (optional but helpful)</p>
                  <p>✓ You just saved yourself from a felony - good job!</p>
                </CardContent>
              </Card>

              <Card className="border-red-500/50">
                <CardHeader>
                  <CardTitle className="text-lg">If You Already Own It</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>✓ Do NOT try to sell or dispose of it</p>
                  <p>✓ Contact your local police department</p>
                  <p>✓ Explain you discovered it's stolen and want to surrender it</p>
                  <p>✓ Keep any purchase receipts - they protect you legally</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">{faq.question}</CardTitle>
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

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Check?</h2>
            <p className="text-muted-foreground">
              It takes 30 seconds. Could save you thousands of dollars and a lot of legal headaches.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/verify">
                  <Search className="mr-2 h-4 w-4" />
                  Check Gun Serial Number
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/gun-serial-number-lookup">
                  Learn More About Gun Checks
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Related Resources</h2>
            <nav className="flex flex-wrap gap-2">
              <Link to="/gun-serial-number-lookup" className="text-primary hover:underline">Gun Serial Number Lookup</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/check-firearm-serial" className="text-primary hover:underline">Firearm Serial Check</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/blog/firearm-serial-number-verification" className="text-primary hover:underline">Firearm Verification Guide</Link>
              <span className="text-muted-foreground">·</span>
              <Link to="/for-pawn-shops" className="text-primary hover:underline">For Pawn Shops</Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default IsMyGunStolenPage;
