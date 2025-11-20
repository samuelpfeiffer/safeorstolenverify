import { Helmet } from 'react-helmet-async';
import { Smartphone, Shield, Zap } from 'lucide-react';

/**
 * Dedicated landing page: /download
 * Full content page (no redirect) to prevent Soft 404
 */
const DownloadAppPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "iOS, Android, Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Download SafeOrStolen app to instantly check if phones, vehicles, and electronics are lost, stolen, or safe to buy. Works on iOS, Android, and as a PWA."
  };

  return (
    <>
      <Helmet>
        <title>Download SafeOrStolen App – Stolen Item Checker</title>
        <meta
          name="description"
          content="Download the SafeOrStolen app to instantly check if phones, vehicles, and electronics are lost, stolen, or safe to buy. Works on iOS, Android, and as a PWA."
        />
        <link rel="canonical" href="https://safeorstolen.com/download" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <noscript>
        <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
          <h1>Download SafeOrStolen – Stolen Item Checker App</h1>
          <p>Install SafeOrStolen on your phone before you meet a stranger, hand over cash, or ship an item. Instantly check serial numbers, IMEIs, and VINs to see if something is lost, stolen, or safe to handle.</p>
          
          <h2>Why Download SafeOrStolen?</h2>
          <ul>
            <li><strong>Protect Your Money</strong> – Avoid buying stolen phones, vehicles, or electronics that can be seized without refund.</li>
            <li><strong>Fast 3-Second Checks</strong> – Enter or scan an IMEI, VIN, or serial number and get instant results.</li>
            <li><strong>Works On Any Device</strong> – Use the web app or install as a mobile app on iOS, Android, and desktop.</li>
          </ul>
          
          <h2>Get the App</h2>
          <p><a href="/mobile-app">Go to Mobile App Install Page</a></p>
          <p><a href="/app/download">View full SafeOrStolen app download guide</a></p>
        </div>
      </noscript>

      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Smartphone className="h-16 w-16 text-primary mx-auto" />

          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Download SafeOrStolen – Stolen Item Checker App
          </h1>

          <p className="text-lg text-muted-foreground">
            Install SafeOrStolen on your phone before you meet a stranger, hand over cash, or ship an item.
            Instantly check serial numbers, IMEIs, and VINs to see if something is lost, stolen, or safe to handle.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-card border border-border rounded-lg p-6">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h2 className="text-lg font-semibold text-foreground mb-2">Protect Your Money</h2>
              <p className="text-sm text-muted-foreground">
                Avoid buying stolen phones, vehicles, or electronics that can be seized without refund and may
                get you into legal trouble.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <Zap className="h-8 w-8 text-primary mb-3" />
              <h2 className="text-lg font-semibold text-foreground mb-2">Fast 3‑Second Checks</h2>
              <p className="text-sm text-muted-foreground">
                Enter or scan an IMEI, VIN, or serial number and get a clear &quot;Safe&quot;, &quot;At Risk&quot;, or &quot;Stolen&quot; result in seconds.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <Smartphone className="h-8 w-8 text-primary mb-3" />
              <h2 className="text-lg font-semibold text-foreground mb-2">Works On Any Device</h2>
              <p className="text-sm text-muted-foreground">
                Use the web app in your browser or install the mobile app experience on iOS, Android, and desktop
                as a Progressive Web App.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-md text-muted-foreground">
              Ready to install? Open the official app download and step‑by‑step install instructions:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="/mobile-app"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors"
              >
                Go to Mobile App Install Page
              </a>
              <a
                href="/app/download"
                className="text-sm font-medium text-primary hover:underline"
              >
                View full SafeOrStolen app download guide →
              </a>
            </div>
          </div>

          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            SafeOrStolen is a stolen‑item verification service, not a marketplace. We help buyers, sellers, and
            businesses verify phones, vehicles, and electronics before money changes hands, reducing fraud and
            protecting you from financial loss and legal risk.
          </p>
        </div>
      </div>
    </>
  );
};

export default DownloadAppPage;
