import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Search, Gamepad2, AlertTriangle, Info } from 'lucide-react';

const CheckGamingConsolePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Check Gaming Console Serial Number - Verify PlayStation, Xbox, Nintendo",
    "description": "Verify gaming console serial numbers for PlayStation, Xbox, and Nintendo Switch. Check if consoles are stolen, banned, or have ownership issues.",
    "url": "https://safeorstolen.com/check-gaming-console"
  };

  return (
    <>
      <PageSEO
        title="Check Gaming Console Serial - Verify PS5, Xbox, Nintendo Switch | SafeOrStolen"
        description="Verify gaming console serial numbers instantly. Check PlayStation 5, Xbox Series X/S, Nintendo Switch, and older consoles for theft, bans, and ownership issues before buying used."
        keywords="check gaming console serial, verify PS5, Xbox serial number, Nintendo Switch verification, stolen console checker"
        canonical="/check-gaming-console"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-background">
        <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <Gamepad2 className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Gaming Console Verification
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check PlayStation, Xbox, and Nintendo consoles for theft, bans, and ownership issues. Protect your gaming investment before buying used.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="w-full sm:w-auto">
                  <Search className="w-5 h-5 mr-2" />
                  Verify Console Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Why Verify Gaming Consoles?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Avoid Stolen Consoles</h3>
                  <p className="text-muted-foreground">
                    Gaming consoles are among the most commonly stolen electronics. PlayStation 5 and Xbox Series X are high-value targets due to scarcity and demand. Buying a stolen console means you could lose it to law enforcement with no refund.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Check for Console Bans</h3>
                  <p className="text-muted-foreground">
                    Banned consoles cannot access online services (PSN, Xbox Live, Nintendo Online). Sony, Microsoft, and Nintendo ban consoles for violations like chargebacks, piracy, or modified firmware. A banned console has significantly reduced value and functionality.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Info className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Verify Ownership History</h3>
                  <p className="text-muted-foreground">
                    Consoles sold with "iCloud locked" or account-linked issues can't be fully used. The original owner may remotely lock or wipe the device. Our verification reveals if the console has clear ownership or is tied to accounts.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Warranty & Support</h3>
                  <p className="text-muted-foreground">
                    Stolen consoles may have warranties voided or be ineligible for manufacturer support. Verifying the serial helps confirm the console is legitimate and eligible for warranty claims or repairs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">How to Find Console Serial Numbers</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">PlayStation Consoles</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground">PS5:</strong> On the back of the console near the ports, or under the bottom stand. Serial starts with "C" or "X" followed by 14 digits.</p>
                  <p><strong className="text-foreground">PS4:</strong> On the back of the console on a sticker. Also visible in Settings → System → System Information.</p>
                  <p><strong className="text-foreground">PS3:</strong> On the back near the bar code sticker, or in System Settings → System Information.</p>
                </div>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Xbox Consoles</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground">Xbox Series X/S:</strong> On the back panel near the ports. Serial is 12 digits long.</p>
                  <p><strong className="text-foreground">Xbox One:</strong> On the back or bottom of console. Also in Settings → System → Console info.</p>
                  <p><strong className="text-foreground">Xbox 360:</strong> Behind the faceplate or on the back. Check Settings → System Settings → Console Settings.</p>
                </div>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Nintendo Consoles</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground">Nintendo Switch:</strong> On the bottom of the console near the USB-C port. Serial starts with "XA", "XJ", or "XK" followed by digits.</p>
                  <p><strong className="text-foreground">Switch OLED/Lite:</strong> Same location on bottom of device. Also in System Settings → System → Serial Information.</p>
                  <p><strong className="text-foreground">Wii U/Wii:</strong> On the bottom or back of the console on a sticker with bar code.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">What Our Verification Checks</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Stolen Property Databases</h3>
                <p className="text-muted-foreground">
                  We search law enforcement databases, insurance claims, and retailer loss prevention systems to identify if the console was reported stolen. This includes theft from homes, stores, shipments, and vehicles.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Manufacturer Ban Status</h3>
                <p className="text-muted-foreground">
                  Our system checks if the console is banned from online services by Sony (PSN ban), Microsoft (Xbox Live ban), or Nintendo (Nintendo Online ban). Banned consoles cannot play online multiplayer or access digital stores.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Warranty & Registration Status</h3>
                <p className="text-muted-foreground">
                  We verify if the console is registered to the seller and check warranty validity. Consoles under warranty from the original owner are more legitimate than unregistered units.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Marketplace History</h3>
                <p className="text-muted-foreground">
                  We track if the serial has been listed multiple times on online marketplaces, which can indicate scams, stolen devices being resold, or consoles with unresolved issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Common Console Scams to Avoid</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">"Too Good to Be True" Pricing</h3>
                <p className="text-muted-foreground mb-3">
                  PS5 and Xbox Series X/S consoles listed significantly below retail price are often stolen. Legitimate sellers don't take massive losses on in-demand consoles. If a console retailing for $500 is listed at $250, it's almost certainly stolen or a scam.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Red flags:</strong> No original packaging, seller claims "need money fast," refuses to meet in person, won't provide serial number in advance, cash-only transactions.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Account-Locked Consoles</h3>
                <p className="text-muted-foreground mb-3">
                  Some sellers don't fully factory reset consoles, leaving them tied to their PlayStation Network, Xbox Live, or Nintendo accounts. The original owner can remotely lock, deactivate, or reclaim the console after you've paid.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Protection:</strong> Always test console before finalizing purchase. Ensure it's factory reset and can create new accounts. Verify the serial matches the box and original receipt if available.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Banned Console Resales</h3>
                <p className="text-muted-foreground mb-3">
                  Sellers may not disclose that a console is banned from online services. Without verifying, you won't discover the ban until you try to go online. Banned consoles are nearly worthless for modern gaming.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">How to check:</strong> Before meeting, verify the serial with our service. At the meeting, connect to WiFi and attempt to sign in to online services (PSN, Xbox Live, Nintendo Online) to confirm functionality.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Modified or Jailbroken Consoles</h3>
                <p className="text-muted-foreground mb-3">
                  Modified consoles with custom firmware (CFW) can play pirated games but are permanently banned from official online services. Some sellers market these as "features" without disclosing the ban.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Risks:</strong> Modified consoles can't receive official updates, play online, or access digital stores. They may also become unstable or brick during updates. Only buy modified consoles if you fully understand the limitations.
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
                <h3 className="text-xl font-semibold mb-3 text-foreground">Can I check console ban status directly?</h3>
                <p className="text-muted-foreground">
                  Sony, Microsoft, and Nintendo don't publicly share ban databases. Our service uses alternative verification methods including community reports, marketplace history, and cross-referencing with theft databases. For definitive ban status, test the console's online connectivity in person.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">What if I already bought a stolen console?</h3>
                <p className="text-muted-foreground">
                  Stop using it immediately and contact local law enforcement. Do not try to return it to the seller, as this could appear as theft. You may lose your money, but cooperating with police protects you from criminal liability. Consider small claims court against the seller if you have their information.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Are refurbished consoles safe to buy?</h3>
                <p className="text-muted-foreground">
                  Refurbished consoles from official retailers (GameStop, Best Buy, manufacturer refurb programs) are generally safe. They're tested, cleaned, and verified. Avoid "refurbished" units from unknown sellers on classifieds, as these could be stolen units cleaned and relisted.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Should I buy consoles without original boxes?</h3>
                <p className="text-muted-foreground">
                  Missing boxes reduce value but aren't necessarily theft indicators. However, stolen consoles often lack original packaging because thieves discard it. If buying without a box, verify the serial extra carefully and request original receipt or proof of purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Verify Your Gaming Console Now</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Protect your gaming investment. Check PlayStation, Xbox, and Nintendo consoles for theft and bans before buying used.
            </p>
            <Link to="/verify">
              <Button size="lg">
                <Search className="w-5 h-5 mr-2" />
                Start Console Verification
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default CheckGamingConsolePage;
