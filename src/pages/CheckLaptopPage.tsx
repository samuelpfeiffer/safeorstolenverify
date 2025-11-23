import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Search, Laptop, AlertTriangle, CheckCircle } from 'lucide-react';

const CheckLaptopPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Check Laptop Serial Number - Verify Computer Not Stolen",
    "description": "Verify laptop and computer serial numbers. Check MacBook, Dell, HP, Lenovo, and other laptops for theft, stolen status, and ownership issues.",
    "url": "https://safeorstolen.com/check-laptop"
  };

  return (
    <>
      <PageSEO
        title="Check Laptop Serial Number - Verify MacBook, Dell, HP | SafeOrStolen"
        description="Verify laptop serial numbers instantly. Check if MacBook, Dell, HP, Lenovo, Asus, and other computers are stolen before buying used. Protect your investment."
        keywords="check laptop serial number, verify MacBook, Dell serial lookup, HP laptop verification, stolen laptop checker"
        canonical="/check-laptop"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-background">
        <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <Laptop className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Laptop Serial Number Verification
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check any laptop or computer serial number for theft, stolen status, and ownership issues. Verify MacBook, Dell, HP, Lenovo, and more before buying used.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="w-full sm:w-auto">
                  <Search className="w-5 h-5 mr-2" />
                  Verify Laptop Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Why Check Laptop Serial Numbers?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">High Theft Target</h3>
                  <p className="text-muted-foreground">
                    Laptops are among the most stolen electronics globally. MacBooks, high-end gaming laptops, and business ultrabooks are especially targeted due to high resale value and portability. Buying a stolen laptop means law enforcement can seize it with no compensation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Activation Lock & Remote Wipe</h3>
                  <p className="text-muted-foreground">
                    Stolen laptops may have Apple's Activation Lock, Windows Device Guard, or Absolute Software tracking enabled. The original owner can remotely lock, locate, or wipe the device at any time, making your purchase worthless.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Warranty Protection</h3>
                  <p className="text-muted-foreground">
                    Manufacturers void warranties on stolen or improperly transferred devices. Verifying the serial ensures the laptop is legitimately owned and eligible for warranty service, AppleCare, Dell support, or manufacturer repairs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Corporate Tracking</h3>
                  <p className="text-muted-foreground">
                    Many laptops are corporate-owned with tracking software (Computrace, LoJack for Laptops). These devices can be remotely monitored and disabled. Buying corporate laptops without proper decommissioning can trigger remote locks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">How to Find Laptop Serial Numbers</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">MacBook (Apple Laptops)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong className="text-foreground">Physical location:</strong> Bottom case near regulatory markings, or inside battery compartment on older models</li>
                  <li>• <strong className="text-foreground">Software:</strong> Apple Menu → About This Mac → Serial Number</li>
                  <li>• <strong className="text-foreground">Original packaging:</strong> On the box barcode label</li>
                  <li>• <strong className="text-foreground">Format:</strong> 12 characters (letters and numbers), e.g., C02VWACFHTD5</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Dell Laptops</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong className="text-foreground">Physical location:</strong> Bottom of laptop on sticker with barcode, or inside battery compartment</li>
                  <li>• <strong className="text-foreground">Software:</strong> Command Prompt → type "wmic bios get serialnumber"</li>
                  <li>• <strong className="text-foreground">Service Tag:</strong> Dell uses Service Tag (7 characters) instead of traditional serial</li>
                  <li>• <strong className="text-foreground">BIOS:</strong> Press F2 during boot to see serial in BIOS menu</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">HP Laptops</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong className="text-foreground">Physical location:</strong> Bottom case sticker, or inside battery compartment</li>
                  <li>• <strong className="text-foreground">Software:</strong> HP Support Assistant, or Command Prompt "wmic bios get serialnumber"</li>
                  <li>• <strong className="text-foreground">Product Number:</strong> HP also uses Product Number alongside serial number</li>
                  <li>• <strong className="text-foreground">Format:</strong> Usually 10 characters alphanumeric</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Lenovo Laptops</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong className="text-foreground">Physical location:</strong> Bottom case, or under battery on removable battery models</li>
                  <li>• <strong className="text-foreground">Software:</strong> Lenovo Vantage app, or Command Prompt "wmic bios get serialnumber"</li>
                  <li>• <strong className="text-foreground">ThinkPad:</strong> Serial often starts with specific letter codes (L, S, P, etc.)</li>
                  <li>• <strong className="text-foreground">Machine Type Model (MTM):</strong> Lenovo uses MTM alongside serial</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Asus, Acer, MSI, and Other Brands</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong className="text-foreground">Physical location:</strong> Bottom case sticker with barcode</li>
                  <li>• <strong className="text-foreground">Software:</strong> Command Prompt → "wmic bios get serialnumber" (Windows)</li>
                  <li>• <strong className="text-foreground">BIOS/UEFI:</strong> Access during boot (usually F2, DEL, or F10 key)</li>
                  <li>• <strong className="text-foreground">Original receipt/invoice:</strong> Serial often listed on proof of purchase</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">What Our Laptop Verification Checks</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Stolen Property Databases</h3>
                <p className="text-muted-foreground">
                  We search law enforcement databases (FBI's NCIC), insurance claim records, university/corporate loss prevention systems, and international theft registries. This identifies laptops reported stolen to police or insurance companies.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Manufacturer Blacklists</h3>
                <p className="text-muted-foreground">
                  Apple maintains records of stolen MacBooks tied to Activation Lock. Dell, HP, and Lenovo track devices reported stolen through their support systems. We cross-reference manufacturer databases to identify flagged devices.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Corporate Asset Tracking</h3>
                <p className="text-muted-foreground">
                  Many businesses tag laptops in asset management systems. We identify if the serial is registered to corporations, government agencies, or educational institutions without proper decommissioning documentation.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Remote Management Software</h3>
                <p className="text-muted-foreground">
                  We check for presence of Absolute Software (LoJack for Laptops), Computrace, Intel Anti-Theft, or corporate MDM enrollment. These can remotely lock or track the laptop even after factory reset.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Common Laptop Purchase Scenarios</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Buying Used MacBooks</h3>
                <p className="text-muted-foreground mb-3">
                  MacBooks retain high value and are frequently stolen. Activation Lock prevents use if the previous owner doesn't sign out of iCloud. Even with a factory reset, locked MacBooks are unusable.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Verification steps:</strong> Check serial on Apple's Coverage Check page before meeting. At purchase, ensure seller can sign out of iCloud in front of you. Boot to recovery and verify no firmware password. Test that you can create a new Apple ID and sign in.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Corporate Laptops & Surplus Sales</h3>
                <p className="text-muted-foreground mb-3">
                  Companies liquidating old laptops may not properly decommission them. These devices can have BIOS passwords, tracking software, or MDM enrollment that prevents full use or allows remote tracking.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">What to check:</strong> Request proof of proper IT decommissioning. Verify no BIOS/admin passwords. Check Windows Registry for MDM enrollment. Test that Windows Update and Store access work (corporate policies often block these).
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Online Marketplace Purchases</h3>
                <p className="text-muted-foreground mb-3">
                  eBay, Facebook Marketplace, OfferUp, and Craigslist are common channels for stolen laptop sales. Prices "too good to be true" are red flags. Sellers may use stock photos and refuse to show actual device.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Safe buying practices:</strong> Request serial number before meeting. Verify through our service. Meet in public place (police station parking lot ideal). Test laptop fully before payment. Get written receipt with serial number and seller contact info.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">University/Student Laptop Sales</h3>
                <p className="text-muted-foreground mb-3">
                  College students selling laptops may have obtained them through financial aid programs with ownership restrictions, or the laptops may actually be university-owned property.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Due diligence:</strong> Ask for original purchase receipt. Verify the student's name matches their ID. Check if laptop has university asset tags. Contact university IT if you suspect it's institutional property.
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
                <h3 className="text-xl font-semibold mb-3 text-foreground">Can stolen laptops be unlocked or wiped?</h3>
                <p className="text-muted-foreground">
                  Modern security measures like Apple's Activation Lock, Windows BitLocker, and firmware passwords cannot be bypassed. Even with a complete wipe, security features persist at firmware level. Don't buy laptops with these locks—they're effectively worthless.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">What about laptops without serial numbers?</h3>
                <p className="text-muted-foreground">
                  All legitimate laptops have serial numbers. If the serial is missing, scratched off, or the sticker is removed, this is a massive red flag indicating theft. Do not purchase such devices under any circumstances.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">How do I check Apple iCloud lock status?</h3>
                <p className="text-muted-foreground">
                  Visit checkcoverage.apple.com and enter the serial number. If it shows "Activation Lock: On" or "Find My iPhone/Mac: On," the device is locked to the owner's Apple ID. Do not purchase unless the seller can disable it in front of you.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">What if I already bought a stolen laptop?</h3>
                <p className="text-muted-foreground">
                  Stop using it immediately. Contact local law enforcement and file a report. You may lose both the laptop and your money. If you have the seller's information, you can potentially pursue civil action in small claims court, but outcomes vary.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Verify Your Laptop Now</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Protect your investment. Check any laptop serial number for theft and ownership issues before buying used.
            </p>
            <Link to="/verify">
              <Button size="lg">
                <Search className="w-5 h-5 mr-2" />
                Start Laptop Verification
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default CheckLaptopPage;
