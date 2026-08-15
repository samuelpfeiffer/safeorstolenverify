import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
 Smartphone, Download, Apple, Chrome, Share, Plus,
 Menu, Check, ArrowRight, QrCode, Shield, Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { HowToSchema } from '@/components/seo/schemas/HowToSchema';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';

const InstallAppPage = () => {
 const navigate = useNavigate();

 const faqs = [
 { question: "How does SafeOrStolen install on my phone?", answer: "SafeOrStolen is a Progressive Web App (PWA) that installs directly from your browser. This means instant updates and support for all devices including iPhone, Android, tablets, and computers." },
 { question: "Is installing SafeOrStolen safe?", answer: "Yes! PWAs are sandboxed by your browser with the same security as regular websites. SafeOrStolen doesn't require any special permissions and can't access your personal data without consent." },
 { question: "Will SafeOrStolen work offline?", answer: "Yes. Once installed, SafeOrStolen caches recent verifications so you can access them without internet—perfect for marketplace meetups in areas with poor signal." },
 { question: "How much storage does SafeOrStolen use?", answer: "Less than 5MB. SafeOrStolen is lightweight and won't slow down your device or consume significant storage space." },
 { question: "Can I uninstall SafeOrStolen?", answer: "Yes, just like any app. iPhone: Long-press the icon → Remove App. Android: Long-press → Uninstall. Desktop: Right-click → Uninstall." },
 { question: "Do I need to create an account?", answer: "No account required for your first 2 free checks. Create a free account to save your verification history and access unlimited checks for $10/month." },
 ];

 const iosSteps = [
 { name: "Open Safari", text: "Open Safari browser on your iPhone or iPad. The install feature only works in Safari, not Chrome or Firefox on iOS." },
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
 { name: "Mobile App", url: "/mobile-app" },
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
 <title>Install SafeOrStolen App - Free Download Guide (iPhone & Android)</title>
 <meta name="description" content="Install SafeOrStolen in 30 seconds. Step-by-step guide for iPhone (Safari) and Android (Chrome). Free stolen item verification app with barcode scanner." />
 <meta name="keywords" content="install SafeOrStolen, download SafeOrStolen app, SafeOrStolen iPhone, SafeOrStolen Android, PWA install guide" />
 <link rel="canonical" href="https://safeorstolen.com/install-app" />
 <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
 
 <meta property="og:title" content="Install SafeOrStolen App - Free Download" />
 <meta property="og:description" content="30-second install guide for iPhone & Android. Free stolen item checker." />
 <meta property="og:url" content="https://safeorstolen.com/install-app" />
 
 <meta name="ai:purpose" content="Installation guide for SafeOrStolen PWA on mobile devices" />
 <meta name="ai:service_type" content="Progressive Web App installation tutorial" />
 
 <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
 <script type="application/ld+json">{JSON.stringify(appSchema)}</script>
 </Helmet>
 
 <FAQSchema faqs={faqs} />
 <BreadcrumbSchema items={breadcrumbs} />

 <noscript>
 <article>
 <h1>How to Install SafeOrStolen App</h1>
 <p>Install the SafeOrStolen stolen item verification app on your iPhone or Android in 30 seconds.</p>
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
 <span>30-Second Installation</span>
 </div>
 
 <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
 Install SafeOrStolen App
 </h1>
 
 <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
 Put SafeOrStolen on your phone. No app store needed—install directly from your browser in 30 seconds.
 </p>

 <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
 <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Free to install</span>
 <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Works offline</span>
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
 <strong>Note:</strong> On iOS, you must use Safari. The "Add to Home Screen" option is not available in Chrome or Firefox on iPhone.
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
 <strong>Tip:</strong> Some Android phones show an "Install" banner at the bottom of the screen automatically. Tap it for instant installation!
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
 <p className="text-sm text-muted-foreground">Scan IMEI, VIN, or serial numbers—no typing needed</p>
 </div>
 <div className="text-center p-6">
 <Shield className="h-10 w-10 mx-auto text-primary mb-4" />
 <h3 className="font-semibold mb-2">100+ Databases</h3>
 <p className="text-sm text-muted-foreground">FBI, vehicle theft and title databases, and all 50 state databases</p>
 </div>
 <div className="text-center p-6">
 <Zap className="h-10 w-10 mx-auto text-primary mb-4" />
 <h3 className="font-semibold mb-2">3-Second Results</h3>
 <p className="text-sm text-muted-foreground">Instant verification at marketplace meetups</p>
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
 Open this page on your phone and follow the steps above. Takes 30 seconds.
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
