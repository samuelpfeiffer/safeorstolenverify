import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Search, Smartphone, AlertTriangle } from 'lucide-react';

const CheckAndroidPhonePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Check Android Phone IMEI - Verify Samsung, Google Pixel, OnePlus",
    "description": "Verify Android phone IMEI numbers. Check if Samsung, Google Pixel, OnePlus, and other Android devices are stolen, blacklisted, or have issues.",
    "url": "https://safeorstolen.com/check-android-phone"
  };

  return (
    <>
      <PageSEO
        title="Check Android Phone IMEI - Verify Samsung, Pixel, OnePlus | SafeOrStolen"
        description="Verify Android phone IMEI instantly. Check Samsung Galaxy, Google Pixel, OnePlus, Xiaomi, and other Android devices for theft, blacklist status, and carrier locks."
        keywords="check Android IMEI, verify Samsung phone, Google Pixel IMEI check, Android phone verification, stolen Android checker"
        canonical="/check-android-phone"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-background">
        <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <Smartphone className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Android Phone IMEI Verification
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check any Android phone IMEI for theft, blacklist, and carrier lock status. Verify Samsung, Google Pixel, OnePlus, and all Android brands before buying used.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="w-full sm:w-auto">
                  <Search className="w-5 h-5 mr-2" />
                  Verify Android Phone
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Why Verify Android Phone IMEI?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Stolen Device Risk</h3>
                  <p className="text-muted-foreground">
                    Android phones, especially flagship Samsung Galaxy and Google Pixel models, are frequently stolen. Buying a stolen device means potential confiscation by law enforcement with no refund, plus possible criminal liability for possessing stolen property.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Carrier Blacklist Status</h3>
                  <p className="text-muted-foreground">
                    Carriers blacklist IMEI numbers of stolen, lost, or fraudulently obtained phones. Blacklisted devices can't connect to mobile networks for calls, texts, or data, making them essentially worthless except for WiFi use.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Google Account Lock (FRP)</h3>
                  <p className="text-muted-foreground">
                    Factory Reset Protection (FRP) locks Android devices to the previous owner's Google account. If not properly removed before sale, you cannot activate or use the phone. This is often a sign of a stolen device or scam.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Warranty & Support</h3>
                  <p className="text-muted-foreground">
                    Stolen or improperly transferred phones may have voided warranties. Verification ensures the device is legitimate and eligible for manufacturer support, Samsung Care+, Google Preferred Care, or carrier insurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">How to Find Android Phone IMEI</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Method 1: Dial *#06#</h3>
                <p className="text-muted-foreground">
                  The universal method for all Android phones: Open the phone dialer app and type <code className="px-2 py-1 bg-muted rounded">*#06#</code>. The IMEI(s) will display immediately. Dual-SIM phones show two IMEI numbers.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Method 2: Settings Menu</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Open <strong>Settings</strong></li>
                  <li>• Tap <strong>About Phone</strong> or <strong>About Device</strong></li>
                  <li>• Look for <strong>Status</strong> or <strong>IMEI Information</strong></li>
                  <li>• IMEI is listed here (may be labeled IMEI 1 and IMEI 2 for dual-SIM)</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Method 3: Physical Device</h3>
                <p className="text-muted-foreground mb-3">
                  For phones with removable batteries, the IMEI is often printed on a sticker under the battery. For newer models without removable batteries:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Check the SIM card tray (Samsung often prints IMEI here)</li>
                  <li>• Look on the back of the device near regulatory markings</li>
                  <li>• Check the original box barcode label</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Brand-Specific Locations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Samsung:</strong> Settings → About Phone → Status → IMEI Information</li>
                  <li>• <strong>Google Pixel:</strong> Settings → About Phone → IMEI</li>
                  <li>• <strong>OnePlus:</strong> Settings → About Device → Status → IMEI</li>
                  <li>• <strong>Xiaomi/Redmi:</strong> Settings → About Phone → All Specs → Status</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">What Our Android Verification Checks</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Global Stolen Property Databases</h3>
                <p className="text-muted-foreground">
                  We search law enforcement databases including FBI NCIC, Interpol stolen phone records, insurance claim databases, and crowdsourced theft reports from over 150 countries. This identifies devices reported stolen to police or insurance.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Carrier Blacklist Status (US & International)</h3>
                <p className="text-muted-foreground">
                  We check all major US carriers (Verizon, AT&T, T-Mobile, Sprint) plus international carrier blacklists. Blacklisted phones cannot activate on networks, making them unusable for cellular service. We also check the GSMA Device Registry shared by global carriers.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Google Account Lock (FRP) Status</h3>
                <p className="text-muted-foreground">
                  While we can't directly access Google's FRP database, we check if the IMEI has been reported with FRP lock issues, indicating the previous owner didn't properly remove their account. This is a major red flag for stolen or improperly sold devices.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Manufacturer & Retailer Records</h3>
                <p className="text-muted-foreground">
                  We cross-reference Samsung's IMEI database, manufacturer theft reports, and major retailer loss prevention systems (Best Buy, Target, Walmart) to identify devices stolen from stores or supply chains before reaching consumers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Common Android Phone Scams</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Google Account Locked Phones</h3>
                <p className="text-muted-foreground mb-3">
                  Sellers list phones cheap claiming "forgot Google password" or "previous owner's account." These phones have Factory Reset Protection (FRP) enabled and are effectively locked. Without the original owner's credentials, the phone is a brick.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">How to avoid:</strong> Before buying, ask seller to factory reset the device in front of you and verify it reaches the setup screen without asking for a Google account. If they refuse or can't do it, walk away.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">"Blacklisted but WiFi Works"</h3>
                <p className="text-muted-foreground mb-3">
                  Scammers sell blacklisted phones advertising "perfect for WiFi use" at reduced prices. While technically true, they omit that the phone was stolen or involved in insurance fraud, making you a possessor of stolen property.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Legal risk:</strong> Even if you only use WiFi, possessing a stolen device is illegal. Police can seize it during routine interactions (traffic stop, airport security, etc.). You lose your money and may face criminal charges.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Switched IMEI Scam</h3>
                <p className="text-muted-foreground mb-3">
                  During in-person meetups, scammers show you one phone for inspection but swap it with a similar-looking stolen unit during the transaction. The IMEI you verified doesn't match the phone you receive.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Protection:</strong> Check the IMEI again after exchange and before payment. Verify it matches your initial verification. Use Settings → About Phone to confirm—don't rely on seller telling you it's the same phone.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Insurance Fraud Schemes</h3>
                <p className="text-muted-foreground mb-3">
                  Individuals file false insurance claims for "stolen" or "lost" phones, get replacements from carriers, then sell the original devices. The IMEI gets blacklisted days or weeks after your purchase, leaving you with a worthless phone.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Detection:</strong> Be wary of sellers with multiple high-end phones, no original packaging, or vague stories about why they're selling. Verify IMEI at purchase and again 30 days later to ensure it hasn't been blacklisted.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Can blacklisted Android phones be unlocked or fixed?</h3>
                <p className="text-muted-foreground">
                  No legitimate method exists to remove carrier blacklists. Services claiming to "unblacklist" phones are scams or involve illegal IMEI changing. Don't buy blacklisted phones under any circumstances—they're permanently unusable for cellular service.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">What's the difference between carrier locked and blacklisted?</h3>
                <p className="text-muted-foreground">
                  Carrier locked means the phone only works on one carrier but can be unlocked legally. Blacklisted means the IMEI is blocked from all networks due to theft, loss, or fraud—this cannot be legitimately reversed. Always check blacklist status, not just carrier lock.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Are international Android phones safe to buy?</h3>
                <p className="text-muted-foreground">
                  International models can be legitimate, but verify the IMEI works on US carrier frequencies and isn't blacklisted internationally. The GSMA Device Registry shares blacklist data globally, so phones stolen abroad may be blocked in the US.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">What if the seller won't provide IMEI before meeting?</h3>
                <p className="text-muted-foreground">
                  Refuse to meet. Legitimate sellers have no reason to hide IMEI numbers—they're not private information. Sellers refusing to provide IMEI in advance are likely hiding theft, blacklist, or FRP lock issues. Protect yourself by only dealing with transparent sellers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Verify Your Android Phone Now</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Protect yourself from stolen devices, blacklisted phones, and scams. Check any Android IMEI instantly before buying used.
            </p>
            <Link to="/verify">
              <Button size="lg">
                <Search className="w-5 h-5 mr-2" />
                Start Android Verification
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default CheckAndroidPhonePage;
