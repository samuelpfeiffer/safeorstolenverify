import { PageSEO } from '@/components/seo/PageSEO';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { Badge } from '@/components/ui/badge';

export default function HowToUseIMEICheckerApp() {
  return (
    <>
      <PageSEO
        title="How to Use an IMEI Checker App: Complete Step-by-Step Guide"
        description="Learn how to use an IMEI checker app to verify if a phone is stolen. Step-by-step guide with screenshots showing how to check phones before buying."
        keywords="how to use IMEI checker app, check if phone is stolen, IMEI verification tutorial, phone checking guide"
        canonical="/blog/how-to-use-imei-checker-app"
      />
      
      <article className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge className="mb-4">How-To Guides</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How to Use an IMEI Checker App: Complete Step-by-Step Guide
          </h1>
          
          <div className="text-muted-foreground mb-8">
            Published: January 16, 2025 • 6 min read
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
        <p className="text-xl text-muted-foreground">
          Complete guide to using an IMEI checker app to verify if a phone is stolen before you buy. 
          Follow these simple steps to protect yourself.
        </p>

        <h2 className="text-3xl font-bold mt-12">What You'll Need</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>The phone you want to check (or its IMEI number)</li>
          <li>Smartphone with SafeOrStolen app installed (free download)</li>
          <li>30 seconds of time</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12">Step 1: Find the IMEI Number</h2>
        <p>The IMEI is a unique 15-digit code that identifies every phone. Here's how to find it:</p>
        
        <h3 className="text-2xl font-bold mt-8">Method 1: Dial *#06#</h3>
        <p>
          On any phone (iPhone or Android), open the phone app and dial <code className="bg-muted px-2 py-1 rounded">*#06#</code>. 
          The IMEI appears instantly. No call is made.
        </p>

        <h3 className="text-2xl font-bold mt-8">Method 2: Check Settings</h3>
        <p><strong>iPhone:</strong> Settings → General → About → IMEI</p>
        <p><strong>Android:</strong> Settings → About Phone → Status → IMEI</p>

        <h3 className="text-2xl font-bold mt-8">Method 3: Check the Phone Body</h3>
        <p>
          Look for a label on the SIM tray, back of the phone, or inside the battery compartment (older phones).
        </p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6 my-8">
          <p className="font-semibold">⚠️ Seller Won't Show IMEI?</p>
          <p className="mt-2">
            If a seller refuses to provide the IMEI number, that's a <strong>massive red flag</strong>. 
            Walk away immediately. Legitimate sellers have nothing to hide.
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-12">Step 2: Download SafeOrStolen App</h2>
        <p>Download the free SafeOrStolen mobile app:</p>
        <ul className="list-disc pl-8 space-y-2 mt-4">
          <li><strong>iPhone:</strong> App Store → Search "SafeOrStolen" → Download</li>
          <li><strong>Android:</strong> Google Play Store → Search "SafeOrStolen" → Install</li>
        </ul>

        <AppDownloadCTA variant="compact" />

        <h2 className="text-3xl font-bold mt-12">Step 3: Scan or Enter IMEI</h2>
        <p>Open the SafeOrStolen app. You have two options:</p>
        
        <h3 className="text-2xl font-bold mt-8">Option A: Camera Scan (Fastest)</h3>
        <ol className="list-decimal pl-8 space-y-2">
          <li>Tap the camera icon in the app</li>
          <li>Point your camera at the IMEI number on the phone</li>
          <li>App automatically recognizes and inputs the number</li>
          <li>Tap "Check Now"</li>
        </ol>

        <h3 className="text-2xl font-bold mt-8">Option B: Manual Entry</h3>
        <ol className="list-decimal pl-8 space-y-2">
          <li>Tap "Enter Manually"</li>
          <li>Type the 15-digit IMEI number</li>
          <li>Double-check you entered it correctly</li>
          <li>Tap "Check Now"</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12">Step 4: Read the Results</h2>
        <p>Within 30 seconds, you'll get one of three results:</p>

        <div className="space-y-6 mt-6">
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
            <p className="font-semibold text-green-400">✅ SAFE - Clean Record</p>
            <p className="mt-2 text-muted-foreground">
              Phone has no theft reports, blacklist flags, or red flags. Safe to buy.
            </p>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
            <p className="font-semibold text-amber-400">⚠️ CAUTION - Potential Issues</p>
            <p className="mt-2 text-muted-foreground">
              Phone may have carrier locks, outstanding bills, or unclear history. Investigate further before buying.
            </p>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
            <p className="font-semibold text-destructive">🚨 STOLEN - Do Not Buy</p>
            <p className="mt-2 text-muted-foreground">
              Phone is reported stolen, blacklisted, or has serious red flags. <strong>Walk away immediately.</strong>
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12">Step 5: Make Your Decision</h2>
        
        <h3 className="text-2xl font-bold mt-8">If Result is SAFE ✅</h3>
        <ul className="list-disc pl-8 space-y-2">
          <li>Proceed with confidence</li>
          <li>Still check the phone's condition (screen, battery, etc.)</li>
          <li>Verify seller's identity if possible</li>
          <li>Get a receipt or record of sale</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8">If Result is CAUTION ⚠️</h3>
        <ul className="list-disc pl-8 space-y-2">
          <li>Ask seller about the specific issues flagged</li>
          <li>Check if phone is carrier-locked (ask seller to prove it works on your carrier)</li>
          <li>Consider negotiating a lower price</li>
          <li>Get written assurance from seller about any issues</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8">If Result is STOLEN 🚨</h3>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>Do not buy the phone</strong></li>
          <li>Walk away immediately</li>
          <li>If you feel safe, inform seller the phone is flagged</li>
          <li>Consider reporting the listing to the platform (Craigslist, Facebook, etc.)</li>
          <li>Never confront or accuse the seller directly</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12">Pro Tips for Using IMEI Checker Apps</h2>
        
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <ul className="space-y-3">
            <li>💡 <strong>Check before meeting:</strong> Ask seller for IMEI via text and check it before driving to meet them</li>
            <li>💡 <strong>Check at the meeting:</strong> Verify the IMEI on the actual phone matches what the seller gave you</li>
            <li>💡 <strong>Save the record:</strong> SafeOrStolen app keeps history of all checks for your records</li>
            <li>💡 <strong>Check multiple databases:</strong> SafeOrStolen searches 100+ databases, not just one</li>
            <li>💡 <strong>Trust your gut:</strong> If something feels off, walk away even if the check is clean</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12">What About Website IMEI Checkers?</h2>
        <p>
          Website IMEI checkers work, but they're much slower when you're at a meeting spot or garage sale:
        </p>
        <ul className="list-disc pl-8 space-y-2 mt-4">
          <li>You have to manually type the 15-digit IMEI (error-prone)</li>
          <li>Requires good internet connection</li>
          <li>No history tracking</li>
          <li>No push notifications if status changes later</li>
        </ul>
        <p className="mt-4">
          Mobile apps like SafeOrStolen are purpose-built for real-world verification scenarios.
        </p>

        <h2 className="text-3xl font-bold mt-12">Common Questions</h2>
        
        <h3 className="text-2xl font-bold mt-8">Can I check an IMEI without the phone?</h3>
        <p>
          Yes! Just ask the seller to text you the IMEI number. Dial *#06# on their phone and screenshot it. 
          You can check it before even meeting.
        </p>

        <h3 className="text-2xl font-bold mt-8">What if the phone has 2 IMEI numbers?</h3>
        <p>
          Dual-SIM phones have 2 IMEIs. Check both - if either one is flagged stolen, don't buy.
        </p>

        <h3 className="text-2xl font-bold mt-8">How accurate are IMEI checker apps?</h3>
        <p>
          SafeOrStolen checks 100+ databases including carrier blacklists, police reports, and global registries. 
          It's the most comprehensive check available.
        </p>

        <h3 className="text-2xl font-bold mt-8">Is it legal to buy a phone with a bad IMEI?</h3>
        <p>
          Buying a <strong>stolen</strong> phone is illegal, even if you didn't know. A carrier-locked or blacklisted 
          phone (not stolen) is legal to buy but won't work on that carrier.
        </p>

        <h2 className="text-3xl font-bold mt-12">Start Checking Phones Safely</h2>
        <p>
          Download SafeOrStolen and never worry about buying stolen phones again. Free, instant, and protects you from fraud.
        </p>

        <AppDownloadCTA showBenefits />

        <div className="bg-muted/30 rounded-lg p-6 mt-12">
          <h3 className="text-xl font-bold mb-4">Quick Summary</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Find IMEI by dialing *#06# or checking phone settings</li>
            <li>Download SafeOrStolen mobile app</li>
            <li>Scan IMEI with camera or enter manually</li>
            <li>Read results (Safe, Caution, or Stolen)</li>
            <li>Make informed buying decision</li>
          </ol>
          <p className="mt-4 font-semibold">Time required: 30 seconds</p>
        </div>
          </div>
        </div>
      </article>
    </>
  );
}
