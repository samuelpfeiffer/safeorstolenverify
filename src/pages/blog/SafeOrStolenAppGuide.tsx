import { PageSEO } from '@/components/seo/PageSEO';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';

export default function SafeOrStolenAppGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "SafeOrStolen App: Complete Installation & Features Guide",
    "description": "Complete guide to installing and using the SafeOrStolen mobile app. iOS, Android, PWA installation, features, and tips.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Download the App",
        "text": "Visit safeorstolen.com/app/download or install from App Store/Google Play"
      },
      {
        "@type": "HowToStep",
        "name": "Create Account",
        "text": "Sign up with email or continue with Google"
      },
      {
        "@type": "HowToStep",
        "name": "Enable Camera Permissions",
        "text": "Allow camera access for barcode and serial number scanning"
      },
      {
        "@type": "HowToStep",
        "name": "Start Verifying",
        "text": "Scan or enter serial numbers to verify stolen status"
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen App: Complete Installation & Features Guide 2025"
        description="Complete guide to SafeOrStolen mobile app. How to install on iOS, Android, PWA. Features, camera scanning, offline mode, and tips for buyers and sellers."
        keywords="SafeOrStolen app guide, how to install SafeOrStolen, SafeOrStolen features, mobile app tutorial, IMEI VIN checker app"
        canonical="/blog/safeorstolen-app-guide"
        structuredData={structuredData}
      />

      <article className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              SafeOrStolen App: Complete Installation & Features Guide
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl">
                SafeOrStolen is the ONLY mobile app that verifies phones, cars, electronics, and firearms against stolen 
                databases. This complete guide covers installation, features, and how to get the most out of the app.
              </p>

              <AppDownloadCTA variant="compact" />

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">How to Install SafeOrStolen</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">Option 1: iOS (iPhone/iPad)</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Visit <strong>safeorstolen.com/app/ios</strong> in Safari</li>
                <li>Tap the Share button (square with arrow)</li>
                <li>Scroll down and tap "Add to Home Screen"</li>
                <li>Tap "Add" to confirm</li>
                <li>The SafeOrStolen icon will appear on your home screen</li>
              </ol>
              <p className="italic">Note: iOS currently doesn't have a native App Store app, but the PWA works identically to a native app.</p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">Option 2: Android</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Visit <strong>safeorstolen.com/app/android</strong> in Chrome</li>
                <li>Tap the three-dot menu in the top right</li>
                <li>Tap "Add to Home screen" or "Install app"</li>
                <li>Tap "Install" to confirm</li>
                <li>The app will be added to your app drawer and home screen</li>
              </ol>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">Option 3: PWA (Any Device)</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Visit <strong>safeorstolen.com/app/pwa</strong></li>
                <li>Follow the installation prompts for your browser</li>
                <li>Works on all modern browsers: Chrome, Firefox, Edge, Safari</li>
              </ol>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Key Features & How to Use Them</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">1. Camera Scanning (Most Popular Feature)</h3>
              <p><strong>What it does:</strong> Automatically reads IMEI, VIN, and serial numbers with your camera</p>
              <p><strong>How to use it:</strong></p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Open SafeOrStolen app</li>
                <li>Tap "Scan" button on home screen</li>
                <li>Point camera at the serial number</li>
                <li>The app automatically recognizes and verifies it</li>
                <li>Results appear in 30 seconds or less</li>
              </ol>
              <p><strong>Pro tip:</strong> Make sure the serial number is well-lit and in focus for best recognition.</p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">2. Offline Mode</h3>
              <p><strong>What it does:</strong> Verify items without internet connection</p>
              <p><strong>How it works:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Critical stolen item data is cached on your device</li>
                <li>Most-searched items available offline</li>
                <li>Perfect for parking lot meetups with poor signal</li>
                <li>Results sync when you're back online</li>
              </ul>
              <p><strong>Pro tip:</strong> Open the app while you have internet before going to a meetup to ensure latest data is cached.</p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">3. Verification History</h3>
              <p><strong>What it does:</strong> Track every item you've verified</p>
              <p><strong>How to access:</strong></p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Tap "History" tab in bottom navigation</li>
                <li>See all past verifications with timestamps</li>
                <li>Search for specific items</li>
                <li>Export reports as PDF</li>
              </ol>
              <p><strong>Pro tip:</strong> Great for businesses that need compliance records.</p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">4. Push Notifications</h3>
              <p><strong>What it does:</strong> Get alerts if items you checked are later reported stolen</p>
              <p><strong>How to set up:</strong></p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Go to Settings → Notifications</li>
                <li>Enable "Stolen Item Alerts"</li>
                <li>Add items to your watch list</li>
                <li>Get instant notifications if status changes</li>
              </ol>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">5. Multi-Item Verification</h3>
              <p><strong>What you can verify:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>📱 <strong>Phones</strong> - IMEI numbers for all brands</li>
                <li>🚗 <strong>Vehicles</strong> - VIN numbers for cars, trucks, motorcycles</li>
                <li>💻 <strong>Electronics</strong> - Laptops, tablets, cameras, gaming consoles</li>
                <li>🔫 <strong>Firearms</strong> - Gun serial numbers (EXCLUSIVE FEATURE)</li>
                <li>🔧 <strong>Tools</strong> - Power tools, equipment</li>
                <li>🎵 <strong>Musical Instruments</strong> - Guitars, keyboards, etc.</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Tips for Different User Types</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">For Marketplace Buyers</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Always verify BEFORE handing over cash</li>
                <li>Use camera scanning - it's faster than typing</li>
                <li>Save verification results as proof</li>
                <li>Don't let sellers rush you - results take 30 seconds</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">For Sellers</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verify items before listing them</li>
                <li>Include verification screenshots in listings</li>
                <li>Builds buyer trust and sells items faster</li>
                <li>Protects you from accidentally selling flagged items</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">For Pawn Shops & Resellers</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verify all incoming inventory at the counter</li>
                <li>Use verification history for compliance audits</li>
                <li>Enable push notifications for watched items</li>
                <li>Export reports for legal documentation</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Pricing & Plans</h2>
              
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">Free Tier</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>5 free verifications per month</li>
                <li>Basic camera scanning</li>
                <li>Limited history access</li>
                <li>Perfect for occasional buyers</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">Premium Plans</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Basic:</strong> $9.99/month - 50 verifications</li>
                <li><strong>Pro:</strong> $19.99/month - Unlimited verifications</li>
                <li><strong>Business:</strong> $49.99/month - Team features, API access</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Frequently Asked Questions</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">Does SafeOrStolen work offline?</h3>
              <p>
                Yes! Critical stolen item data is cached locally on your device. You can verify items without internet 
                connection. Results sync when you're back online.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">How accurate is the camera scanning?</h3>
              <p>
                Very accurate. Our OCR technology reads serial numbers with 98%+ accuracy. Even works on worn or scratched 
                numbers. If it can't read automatically, you can manually enter the number.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">Can I verify firearms?</h3>
              <p>
                Yes! SafeOrStolen is the ONLY mobile app that verifies firearm serial numbers. Essential for FFL dealers, 
                pawn shops, and private buyers.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-3">How many databases does it search?</h3>
              <p>
                SafeOrStolen searches 100+ databases including police records, insurance claims, manufacturer registries, 
                and user-reported thefts.
              </p>

              <AppDownloadCTA showBenefits />

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-12">
                <h3 className="text-xl font-bold mb-4">Get Started Today</h3>
                <p className="text-muted-foreground">
                  Download SafeOrStolen now and start verifying items with the only mobile app built specifically for 
                  stolen item checking. Available on iOS, Android, and as a PWA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
