import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, MapPin, Download } from 'lucide-react';

const StolenCheckDallas = () => {
  return (
    <>
      <Helmet>
        <title>Dallas Stolen Item Check - Verify Before Buying | SafeOrStolen</title>
        <meta name="description" content="Check if items are stolen in Dallas. Free IMEI, VIN, and serial number verification. Dallas-Fort Worth has high vehicle theft rates." />
        <link rel="canonical" href="https://safeorstolen.com/stolen-check-dallas" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Dallas, Texas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dallas Stolen Item Check</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Dallas-Fort Worth has one of the highest vehicle theft rates in Texas. Verify before buying.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify"><Shield className="w-5 h-5" />Verify Item - Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app"><Download className="w-5 h-5" />Download App</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Verify Before You Buy in Dallas</h2>
            <Button asChild size="lg" variant="secondary">
              <Link to="/verify">Verify Item Free</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default StolenCheckDallas;
