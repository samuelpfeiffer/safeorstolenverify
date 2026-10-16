import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
 Smartphone, Download, Apple, Chrome, Share, Plus,
 Menu, Check, ArrowRight, QrCode, Shield, Zap
} from 'lucide-react';
import { useNavigate } from '@/lib/router-compat';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { HowToSchema } from '@/components/seo/schemas/HowToSchema';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';

/** Oct 8 2026: audited by hand for "install safeorstolen app". Removed offline, storage-size, AI-analysis and "3-second" claims. */
const InstallAppPage = () => {
 const navigate = useNavigate();

 const faqs = [
 { question: "How does SafeOrStolen install on my phone?", answer: "SafeOrStolen is a web app (a PWA) that installs from your browser at safeorstolen.com/app. It isn't in the App Store or Google Play. Once added to your home screen it opens full screen like an app and updates itself each time you open it. It works on iPhone, Android, tablets and computers." },
 { question: "Is installing SafeOrStolen safe?", answer: "Yes. An installed web app runs inside your browser with the same protections as a regular website. SafeOrStolen only asks for your camera if you tap Scan to read a barcode, and you can say no and type the number instead." },
 { question: "Will SafeOrStolen work offline?", answer: "No. Each check searches SafeOrStolen's records and the public web, so you need a data connection. If the meetup spot has weak signal, ask the seller for the IMEI, VIN or serial number ahead of time and run the check before you go." },
 { question: "How much storage does SafeOrStolen use?", answer: "Very little. An installed web app is mostly a home-screen shortcut plus some cached pages, so it takes far less room than a typical app store app. You can clear it any time by removing the icon." },
 { question: "Can I uninstall SafeOrStolen?", answer: "Yes, just like any app. iPhone: Long-press the icon → Remove App. Android: Long-press → Uninstall. Desktop: Right-click → Uninstall." },
 { question: "Do I need to create an account?", answer: "Yes. A free account is required to run checks. It gives you 2 free checks with no credit card and saves each check with the date. After that it's $0.99 a check or $10 a month for unlimited checks." },
 ];

 const iosSteps = [
 { name: "Open Safari", text: "Open Safari on your iPhone or iPad. Safari is the most reliable browser for this; on recent iOS versions some other browsers also offer Add to Home Screen in their share menu." },
 { name: "Visit SafeOrStolen", text: "Go to safeorstolen.com in Safari's address bar. Wait for the page to fully load." },
 { name: "Tap Share Button", text: "Tap the Share icon (square with arrow pointing up) at the bottom of Safari." },
 { name: "Add to Home Screen", text: "Scroll down and tap 'Add to Home Screen'. You may need to scroll down in the share menu." },
 { name: "Confirm Install", text: "Tap 'Add' in the top right corner. SafeOrStolen will appear on your home screen like any other app." },
 ];

 const androidSteps = [
 { name: "Open Chrome", text: "Open Google Chrome browser on your Android phone. Works with Samsung Internet, Edge, and other Chromium browsers too." },
 { name: "Visit SafeOrStolen", text: "Go to safeorstolen.com in Chrome's address bar. Wait for the page to fully load." },
 { name: "Tap Menu", text: "Tap the three-dot menu icon (⋮) in the top right corner of Chrome." },
 { name: "Install App", text: "Tap 'Install app' or 'Add to Home screen' from the menu options." },
 { name: "Confirm Install", text: "Tap 'Install' in the popup. SafeOrStolen will appear on your home screen and app drawer." },
 ];

 const breadcrumbs = [
 { name: "Home", url: "/" },
 { name: "Web App", url: "/app" },
 { name: "Install Guide", url: "/install-app" },
 ];

 const howToSchema = {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How to Install SafeOrStolen App",
 "description": "Step-by-step guide to install the SafeOrStolen stolen item verification app on iPhone, Android, or desktop",
 "totalTime": "PT30S",
 "step": [
 { "@type": "HowToStep", "position": 1, "name": "Open Browser", "text": "Open Safari (iPhone) or Chrome (Android)" },
 { "@type": "HowToStep", "position": 2, "name": "Visit Website", "text": "Go to safeorstolen.com" },
 { "@type": "HowToStep", "position": 3, "name": "Install", "text": "Tap Share → Add to Home Screen (iOS) or Menu → Install App (Android)" },
 ]
 };


 return (
 <>
 <Helmet>
 <title>How to Install the SafeOrStolen Web App on iPhone and Android</title>
 <meta name="description" content="Add SafeOrStolen to your home screen from Safari on iPhone or Chrome on Android. No app store needed. Step-by-step install guide for the free web app." />
 <meta name="keywords" content="install SafeOrStolen, download SafeOrStolen app, SafeOrStolen iPhone, SafeOrStolen Android, PWA install guide" />
 <link rel="canonical" href="https://safeorstolen.com/install-app" />
 <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
 
 <meta property="og:title" content="Install the SafeOrStolen Web App" />
 <meta property="og:description" content="Add SafeOrStolen to your home screen on iPhone or Android. No app store needed." />
 <meta property="og:url" content="https://safeorstolen.com/install-app" />
 
 <meta name="ai:purpose" content="Installation guide for SafeOrStolen PWA on mobile devices" />
 <meta name="ai:service_type" content="Progressive Web App installation tutorial" />
 
 <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
 </Helmet>
 
 <FAQSchema faqs={faqs} />
 <BreadcrumbSchema items={breadcrumbs} />

 <noscript>
 <article>
 <h1>How to Install SafeOrStolen App</h1>
 <p>SafeOrStolen is a free web app. Add it to your iPhone or Android home screen from your browser; it is not in the App Store or Google Play.</p>
 <h2>iPhone Installation (Safari)</h2>
 <ol>
 <li>Open Safari and go to safeorstolen.com</li>
 <li>Tap the Share button (square with arrow)</li>
 <li>Tap "Add to Home Screen"</li>
 <li>Tap "Add" to confirm</li>
 </ol>
 <h2>Android Installation (Chrome)</h2>
 <ol>
 <li>Open Chrome and go to safeorstolen.com</li>
 <li>Tap the menu (three dots)</li>
 <li>Tap "Install app" or "Add to Home screen"</li>
 <li>Tap "Install" to confirm</li>
 </ol>
 </article>
 </noscript>

 <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
 {/* Hero */}
 <section className="container mx-auto px-4 py-16">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
 <Download className="h-4 w-4" />
 <span>No app store needed</span>
 </div>
 
 <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
 Install the SafeOrStolen Web App
 </h1>
 
 <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
 Put SafeOrStolen on your phone's home screen. It installs from your browser, not from an app store, and takes under a minute.
 </p>

 <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
 <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Free to install</span>
 <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Updates itself</span>
 <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 2 free checks</span>
 </div>
 </div>
 </section>

 {/* iOS Instructions */}
 <section className="container mx-auto px-4 py-8">
 <div className="max-w-4xl mx-auto">
 <Card className="border-border/50">
 <CardHeader className="text-center">
 <div className="inline-flex items-center justify-center gap-2 mx-auto mb-4">
 <Apple className="h-8 w-8" />
 </div>
 <CardTitle className="text-2xl">iPhone & iPad Installation</CardTitle>
 <p className="text-muted-foreground">Safari browser required</p>
 </CardHeader>
 <CardContent>
 <div className="space-y-6">
 {iosSteps.map((step, idx) => (
 <div key={idx} className="flex gap-4">
 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
 {idx + 1}
 </div>
 <div>
 <h3 className="font-semibold">{step.name}</h3>
 <p className="text-muted-foreground">{step.text}</p>
 </div>
 </div>
 ))}
 </div>
 
 <div className="mt-8 p-4 bg-muted/50 rounded-lg">
 <p className="text-sm text-muted-foreground">
 <strong>Note:</strong> If you don't see "Add to Home Screen" in another browser, open safeorstolen.com in Safari and try again.
 </p>
 </div>
 </CardContent>
 </Card>
 </div>
 </section>

 {/* Android Instructions */}
 <section className="container mx-auto px-4 py-8">
 <div className="max-w-4xl mx-auto">
 <Card className="border-border/50">
 <CardHeader className="text-center">
 <div className="inline-flex items-center justify-center gap-2 mx-auto mb-4">
 <Chrome className="h-8 w-8" />
 </div>
 <CardTitle className="text-2xl">Android Installation</CardTitle>
 <p className="text-muted-foreground">Chrome or Samsung Internet</p>
 </CardHeader>
 <CardContent>
 <div className="space-y-6">
 {androidSteps.map((step, idx) => (
 <div key={idx} className="flex gap-4">
 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
 {idx + 1}
 </div>
 <div>
 <h3 className="font-semibold">{step.name}</h3>
 <p className="text-muted-foreground">{step.text}</p>
 </div>
 </div>
 ))}
 </div>

 <div className="mt-8 p-4 bg-muted/50 rounded-lg">
 <p className="text-sm text-muted-foreground">
 <strong>Tip:</strong> Some Android phones show an "Install" banner at the bottom of the screen automatically. Tap it to install.
 </p>
 </div>
 </CardContent>
 </Card>
 </div>
 </section>

 {/* Benefits */}
 <section className="container mx-auto px-4 py-16 bg-muted/30">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-2xl font-bold text-center mb-8">What You Get</h2>
 <div className="grid md:grid-cols-3 gap-6">
 <div className="text-center p-6">
 <QrCode className="h-10 w-10 mx-auto text-primary mb-4" />
 <h3 className="font-semibold mb-2">Barcode Scanner</h3>
 <p className="text-sm text-muted-foreground">Point your camera at the barcode on an IMEI label, VIN door sticker or serial tag instead of typing it</p>
 </div>
 <div className="text-center p-6">
 <Shield className="h-10 w-10 mx-auto text-primary mb-4" />
 <h3 className="font-semibold mb-2">Every Source Listed</h3>
 <p className="text-sm text-muted-foreground">Each check searches SafeOrStolen's own theft reports and public web results, plus extra records for guns, bikes and Arizona vehicles</p>
 </div>
 <div className="text-center p-6">
 <Zap className="h-10 w-10 mx-auto text-primary mb-4" />
 <h3 className="font-semibold mb-2">Results in a Few Seconds</h3>
 <p className="text-sm text-muted-foreground">Fast enough to run while you're standing with the seller</p>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="container mx-auto px-4 py-16">
 <div className="max-w-3xl mx-auto">
 <h2 className="text-2xl font-bold text-center mb-8">Installation FAQs</h2>
 <div className="space-y-4">
 {faqs.map((faq, idx) => (
 <div key={idx} className="bg-card p-6 rounded-lg border border-border">
 <h3 className="font-semibold mb-2">{faq.question}</h3>
 <p className="text-muted-foreground text-sm">{faq.answer}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="container mx-auto px-4 py-16 bg-muted/30">
 <div className="max-w-2xl mx-auto text-center">
 <h2 className="text-2xl font-bold mb-4">Ready to Install?</h2>
 <p className="text-muted-foreground mb-8">
 Open this page on your phone and follow the steps above. It takes under a minute.
 </p>
 <Button size="lg" className="px-8 gap-2" onClick={() => navigate('/')}>
 Go to SafeOrStolen
 <ArrowRight className="h-4 w-4" />
 </Button>
 </div>
 </section>
 </div>
 </>
 );
};

export default InstallAppPage;
