import { PageSEO } from '@/components/seo/PageSEO';
import { AlertTriangle, Phone, Shield, FileText, HelpCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function WhatToDoIfBoughtStolenPhone() {
  const navigate = useNavigate();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What to Do If You Bought a Stolen Phone (2025 Legal Guide)",
    "description": "Complete legal guide for what to do if you accidentally bought a stolen phone. Learn your rights, how to report it, and how to recover your money.",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "datePublished": "2025-01-14"
  };

  return (
    <>
      <PageSEO
        title="What to Do If You Bought a Stolen Phone - Complete Legal Guide"
        description="Accidentally bought a stolen phone? Learn exactly what to do, your legal rights, how to report it, and how to potentially recover your money in 2025."
        keywords="bought stolen phone what to do, accidentally bought stolen phone, stolen phone legal advice, bought blacklisted phone, can I keep stolen phone, report stolen phone purchase"
        canonical="/blog/what-to-do-if-bought-stolen-phone"
        structuredData={[articleSchema]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What to Do If You Bought a Stolen Phone
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Complete 2025 legal guide for handling the discovery that you accidentally purchased a stolen phone. 
            Learn your rights and next steps.
          </p>

          {/* Emergency Alert */}
          <Card className="p-6 mb-8 border-destructive bg-destructive/10">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-destructive mb-2">Urgent: Do NOT Ignore This</h3>
                <p className="text-sm text-foreground mb-3">
                  If you discover you bought a stolen phone, taking immediate action is critical. Failing to act can result in:
                </p>
                <ul className="text-sm text-foreground space-y-1 ml-4">
                  <li>• Criminal charges for possession of stolen property</li>
                  <li>• Phone being remotely bricked/locked</li>
                  <li>• Complete financial loss with no recourse</li>
                  <li>• Legal liability if original owner presses charges</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Immediate Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Immediate Steps (First 24 Hours)</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive text-destructive-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Stop Using the Phone Immediately</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Turn off the phone and remove SIM card</li>
                      <li>Do not activate or register the phone with carriers</li>
                      <li>Do not attempt to unlock or factory reset</li>
                      <li>Preserve all data/settings as evidence</li>
                    </ul>
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Why:</strong> Using a stolen phone can be seen as "knowingly possessing stolen property" 
                        even if you were the victim. Protect yourself legally by ceasing use immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive text-destructive-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Gather All Evidence</h3>
                    <p className="text-muted-foreground mb-3">Collect and save:</p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li><strong>Seller Information:</strong> Name, phone number, Facebook/marketplace profile, meeting location</li>
                      <li><strong>Transaction Records:</strong> Payment receipts (Venmo, PayPal, Cash App), bank statements</li>
                      <li><strong>Communication:</strong> Screenshots of ALL messages with seller</li>
                      <li><strong>Listing Details:</strong> Original ad, photos, description (screenshot before it's deleted)</li>
                      <li><strong>Phone Details:</strong> IMEI number, serial number, model</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive text-destructive-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Report to Police</h3>
                    <p className="text-muted-foreground mb-3">
                      File a police report within 24-48 hours. Bring:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>The stolen phone (in OFF state)</li>
                      <li>All evidence you collected</li>
                      <li>Your ID and proof of payment</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong className="text-green-600">Important:</strong> You are the VICTIM, not the criminal. 
                        Police reports protect you legally and help catch the seller. Cooperating shows you had no knowledge it was stolen.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive text-destructive-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Contact the Original Owner (If Known)</h3>
                    <p className="text-muted-foreground mb-3">
                      If you can identify the original owner:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Reach out via their carrier or police report number</li>
                      <li>Offer to return the phone</li>
                      <li>Ask if they're willing to reimburse you (not required but possible)</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3">
                      <strong>Note:</strong> Legally, stolen property must be returned to owner even if you paid for it. 
                      This is unfortunate but the law favors the theft victim over the unknowing buyer.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Legal Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Your Legal Rights & Obligations</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-3 text-foreground">✅ You Have the Right To:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• File police report against seller</li>
                  <li>• Sue seller for fraud (if identifiable)</li>
                  <li>• Report to marketplace (Facebook, OfferUp, Craigslist)</li>
                  <li>• Keep evidence for legal proceedings</li>
                  <li>• Refuse to return phone to seller (only to rightful owner/police)</li>
                </ul>
              </Card>

              <Card className="p-6 border-destructive bg-destructive/10">
                <AlertTriangle className="h-8 w-8 text-destructive mb-4" />
                <h3 className="font-bold mb-3 text-destructive">❌ You MUST:</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• Return phone to rightful owner if requested</li>
                  <li>• Cooperate with police investigation</li>
                  <li>• Stop using the phone immediately</li>
                  <li>• NOT attempt to sell or trade the phone</li>
                  <li>• NOT destroy evidence or alter phone</li>
                </ul>
              </Card>
            </div>

            <Card className="p-6 mt-6">
              <h3 className="font-bold mb-3 text-foreground">⚖️ What Happens if You Keep It?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                If you knowingly keep a stolen phone after discovering it's stolen, you can be charged with:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li><strong>Possession of Stolen Property</strong> - Misdemeanor or felony depending on phone value</li>
                <li><strong>Receiving Stolen Goods</strong> - Even if you didn't know initially</li>
                <li><strong>Fraud</strong> - If you attempt to sell or activate it</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Penalties:</strong> Up to 1 year jail time, fines up to $5,000, criminal record
              </p>
            </Card>
          </section>

          {/* Recovery Options */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Can You Recover Your Money?</h2>
            
            <div className="space-y-6">
              <Card className="p-6 border-green-500/50 bg-green-500/10">
                <h3 className="font-bold mb-3 text-green-600">✅ Best Chance: Small Claims Court</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  If you have seller's identity:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Sue for fraud in small claims court (no lawyer needed)</li>
                  <li>Filing fee: $30-100 depending on state</li>
                  <li>Can claim: Purchase price + court fees + damages</li>
                  <li>Success rate: 60-70% if seller is identifiable</li>
                </ul>
                <p className="text-sm font-bold text-foreground mt-3">
                  Requirements: Seller's real name and address (police report helps find this)
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-3 text-foreground">💳 Payment App Disputes</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold text-foreground">PayPal Goods & Services:</p>
                    <p className="text-xs text-muted-foreground">File claim within 180 days. Buyer protection may cover stolen goods. Success: 50%</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Venmo/Zelle/Cash App:</p>
                    <p className="text-xs text-muted-foreground">NO buyer protection. Report fraud but unlikely to get refund. Success: 5-10%</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Credit Card:</p>
                    <p className="text-xs text-muted-foreground">File chargeback for "item not as described" if paid via CC. Success: 70-80%</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Cash Payment:</p>
                    <p className="text-xs text-muted-foreground">Cannot be recovered through financial institutions. Only option: Sue seller. Success: 30%</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-orange-500/50 bg-orange-500/10">
                <h3 className="font-bold mb-3 text-orange-600">⚠️ Limited Options: Insurance</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Your homeowners/renters insurance may cover purchase fraud:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>File claim under "fraud/theft" coverage</li>
                  <li>Requires police report + evidence</li>
                  <li>Subject to deductible (often $500-1000)</li>
                  <li>May increase premiums</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Reality:</strong> Most policies won't cover if you willingly handed over cash. Read policy carefully.
                </p>
              </Card>
            </div>
          </section>

          {/* Prevention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">How to Prevent This in the Future</h2>
            
            <Card className="p-6">
              <h3 className="font-bold mb-4 text-primary text-xl">Never Buy Without Verification</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-sm text-foreground mb-1">Step 1: Get IMEI/Serial Number BEFORE Meeting</p>
                    <p className="text-xs text-muted-foreground">Ask seller to send IMEI via message. Dial *#06# on phone in photos to verify it matches.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-sm text-foreground mb-1">Step 2: Check on SafeOrStolen (2 Free Searches)</p>
                    <p className="text-xs text-muted-foreground">Enter IMEI to check blacklist, stolen status, and insurance claims in 30 seconds.</p>
                    <Button onClick={() => navigate('/check-phone')} size="sm" className="mt-2">
                      Verify IMEI Free →
                    </Button>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-sm text-foreground mb-1">Step 3: Verify Seller Identity & Receipt</p>
                    <p className="text-xs text-muted-foreground">Ask for photo ID and proof of purchase. Meet in police station parking lot.</p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Common Questions</h2>
            
            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2 text-foreground">Can I get in trouble even if I didn't know it was stolen?</h3>
                    <p className="text-sm text-muted-foreground">
                      Initially, no - you're the victim. However, if you discover it's stolen and continue using/selling it, 
                      you CAN be charged. Report it immediately to protect yourself legally.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2 text-foreground">What if the phone gets locked remotely?</h3>
                    <p className="text-sm text-muted-foreground">
                      iPhone: Original owner can use Find My iPhone to lock/erase it. Phone becomes a paperweight.
                      Android: Google can remotely lock via Find My Device. You cannot unlock without owner's account.
                      This proves it's stolen - report to police immediately.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2 text-foreground">Should I contact the seller?</h3>
                    <p className="text-sm text-muted-foreground">
                      NO. Do not warn them. They will delete evidence and disappear. Report to police first, then block/report 
                      on marketplace. Let law enforcement handle contact.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Don't Let This Happen to You</h2>
            <p className="text-lg mb-6">
              Always verify phones, cars, and electronics BEFORE buying. Check IMEI, VIN, and serial numbers in 30 seconds.
            </p>
            <Button onClick={() => navigate('/stolen-item-checker')} size="lg" variant="secondary">
              Verify Before You Buy (2 Free Searches)
            </Button>
            <p className="text-sm mt-4 opacity-80">
              Protect yourself - verify first, avoid the nightmare
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
