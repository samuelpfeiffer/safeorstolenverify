import React from 'react';
import { Link } from '@/lib/router-compat';
import {
  Shield, Smartphone, Camera, CheckCircle, ArrowRight, Download, Car, Phone, Laptop, Bike,
  Target, History, Users, FileCheck, Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';

const AppFeatures = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Camera scanner",
      description: "Point your phone's camera at a barcode on a box, a VIN sticker or a serial label to fill in the number, so you don't have to type a 17-character VIN in a parking lot.",
      highlight: "Less typing"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Results in a few seconds",
      description: "Every check searches theft reports filed on SafeOrStolen and public web results. Guns, bikes, phones and Arizona vehicles add their own records, and the result lists every source it searched.",
      highlight: "Sources listed"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "For buyers and sellers",
      description: "Buyers check a serial before paying. Sellers can add a $1.99 verification certificate, a dated record with its own link that shows they checked before the sale.",
      highlight: "Both sides of the sale"
    },
    {
      icon: <History className="w-8 h-8" />,
      title: "Saved check history",
      description: "Each check is saved to your account with the date, so you can pull it up later if a question comes up about something you bought or sold.",
      highlight: "Dated records"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Installs from your browser",
      description: "Open safeorstolen.com/app on your phone and add it to your home screen. There's nothing to download from an app store, and it uses the same account as the website.",
      highlight: "Free web app"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Clear result wording",
      description: "You see one of three results: reported stolen, possible match, or no report found in the records searched. No vague scores.",
      highlight: "Plain answers"
    }
  ];

  const itemTypes = [
    { icon: <Phone className="w-6 h-6" />, name: "Phones", description: "IMEI shows make and model; paid blacklist check available" },
    { icon: <Car className="w-6 h-6" />, name: "Vehicles", description: "VIN decode and open recalls; Arizona law-enforcement records for AZ VINs and plates" },
    { icon: <Laptop className="w-6 h-6" />, name: "Electronics", description: "Laptops, TVs and consoles by serial number" },
    { icon: <Bike className="w-6 h-6" />, name: "Bicycles", description: "Also searches a national stolen-bicycle registry" },
    { icon: <Target className="w-6 h-6" />, name: "Firearms", description: "Police theft reports from 33 states and DC, plus live Ohio records" },
    { icon: <FileCheck className="w-6 h-6" />, name: "Tools", description: "Power tools and equipment by serial number" }
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web",
    "description": "Free installable web app for checking whether a phone, car, bike, gun, laptop or tool has been reported stolen. Scan or type the serial, IMEI or VIN and see the result in a few seconds.",
    "featureList": [
      "Camera scanner for barcodes, VINs and serial labels",
      "IMEI phone check",
      "VIN vehicle check with open recalls",
      "Serial number check",
      "Saved check history",
      "Optional $1.99 verification certificate"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen App Features: Scanner, Saved History, Certificates"
        description="What the free SafeOrStolen web app does: scan a VIN, IMEI or serial with your camera, see results in a few seconds, keep a dated history, and add a certificate."
        keywords="stolen check app, IMEI checker app, VIN checker app, serial number scanner, stolen item checker app features"
        canonical="/app/features"
        structuredData={softwareSchema}
      />

      <div className="min-h-screen bg-background">

        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              Web App Features
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What the SafeOrStolen <span className="text-primary">Stolen Item Checker</span> App Does
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              One free web app for phones, vehicles, license plates, electronics, power tools, firearms and bicycles.
              Install it from safeorstolen.com/app and check a serial at the meetup before you pay.
            </p>

            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-primary mb-8">
              <Shield className="w-6 h-6" />
              <span>For buyers and sellers</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/app">
                  <Download className="w-5 h-5 mr-2" />
                  Install the Free Web App
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/verify">
                  Run a Check Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Features
              </h2>
              <p className="text-xl text-muted-foreground">
                Police gun theft records from 33 states and DC, a national stolen-bicycle registry and the phone blacklist (a paid check) are all searched from the same app you use on the website.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {feature.icon}
                    </div>
                    <div className="inline-block bg-green-500/10 text-green-600 text-xs font-medium px-2 py-1 rounded-[0.25rem] mb-3">
                      {feature.highlight}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Item Types Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What you can check
              </h2>
              <p className="text-xl text-muted-foreground">
                Each item type searches SafeOrStolen theft reports and public web results, plus the records listed below
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {itemTypes.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Buyer & Seller */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-2 border-blue-500/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">For Buyers</h3>
                  <p className="text-muted-foreground mb-6">
                    Check the serial, IMEI or VIN before you hand over money, so you don't end up paying for something police later take back.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Check before handing over cash</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Use it at Facebook Marketplace and OfferUp meetups</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Scan the number instead of typing it</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Keep a dated record of every check</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-500/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">For Sellers</h3>
                  <p className="text-muted-foreground mb-6">
                    Show a buyer you checked the item before listing it. A certificate gives them a link they can open themselves.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Add a $1.99 verification certificate (free for monthly members)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Share the certificate link in your listing or messages</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Answer the "is this stolen?" question before it's asked</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How the SafeOrStolen app works
              </h2>
              <p className="text-xl text-muted-foreground">
                Three steps
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Scan or type the number</h3>
                  <p className="text-muted-foreground">
                    Use the camera to read a barcode, VIN sticker or serial label, or type it in. For a phone, dial *#06# to show the IMEI.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">We search the records</h3>
                  <p className="text-muted-foreground">
                    SafeOrStolen searches its own theft reports and public web results, plus the records for that item type. It takes a few seconds and needs a data or Wi-Fi connection.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Read the result</h3>
                  <p className="text-muted-foreground">
                    You'll see "reported stolen", "possible match" or "no report found in the records searched", with every source listed. The check is saved to your account with the date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing summary */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What it costs
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-4">Option</th>
                    <th className="text-left p-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Free account</td>
                    <td className="p-4">2 free checks, no credit card</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Single check</td>
                    <td className="p-4">$0.99</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Monthly plan</td>
                    <td className="p-4">$10 a month for unlimited checks (up to 20 phone blacklist checks), cancel anytime</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Verification certificate</td>
                    <td className="p-4">$1.99, free for monthly members</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Install CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <Download className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Install SafeOrStolen free
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              It's a web app, not an App Store or Google Play download. Open safeorstolen.com/app on your phone and add it to your home screen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link to="/app">
                  <Download className="w-5 h-5 mr-2" />
                  Get the Web App
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/verify">
                  Run a Check Now
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AppFeatures;
