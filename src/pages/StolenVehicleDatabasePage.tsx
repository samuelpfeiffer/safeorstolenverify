import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Car, Database, Shield, CheckCircle } from 'lucide-react';

const StolenVehicleDatabasePage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Stolen Vehicle Database - Free VIN Check for Cars, Motorcycles & More"
        description="Access the stolen vehicle database to check VIN numbers for free. Verify cars, motorcycles, boats, and RVs against police reports. Avoid buying stolen vehicles with our comprehensive VIN lookup."
        keywords="stolen vehicle database, VIN check, stolen car lookup, vehicle theft database, check stolen car, motorcycle VIN check"
        canonical="/stolen-vehicle-database"
      />
      
      <main className="min-h-screen bg-background">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Stolen Vehicle Database
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Check any VIN number against our comprehensive stolen vehicle database
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border text-center">
              <Car className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Cars & Trucks</h3>
              <p className="text-sm text-muted-foreground">All makes and models</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border text-center">
              <Database className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Motorcycles</h3>
              <p className="text-sm text-muted-foreground">Bikes and scooters</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border text-center">
              <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Boats & RVs</h3>
              <p className="text-sm text-muted-foreground">Watercraft and recreational vehicles</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border text-center">
              <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Commercial</h3>
              <p className="text-sm text-muted-foreground">Trailers and equipment</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <Button asChild size="lg">
              <Link to="/verify">Check VIN Now</Link>
            </Button>
          </div>

          <article className="prose prose-invert max-w-4xl mx-auto">
            <h2>About Our Stolen Vehicle Database</h2>
            <p>
              Our stolen vehicle database aggregates millions of records from law enforcement agencies, 
              insurance companies, and verified theft reports across the United States. Enter any VIN 
              (Vehicle Identification Number) to instantly check if a vehicle has been reported stolen.
            </p>

            <h3>What We Check</h3>
            <ul>
              <li>NICB (National Insurance Crime Bureau) database</li>
              <li>State DMV stolen vehicle reports</li>
              <li>Police department theft records</li>
              <li>Insurance company claims</li>
              <li>FBI National Crime Database</li>
            </ul>

            <h3>Why Check the Stolen Vehicle Database?</h3>
            <p>
              Buying a stolen vehicle can result in its confiscation with no compensation to you. 
              Even if you purchased it unknowingly, law enforcement can seize the vehicle and return 
              it to its rightful owner. Protect yourself by checking the VIN before purchase.
            </p>

            <h3>How to Find a VIN Number</h3>
            <p>
              The VIN is a 17-character code located on your vehicle. Common locations include:
            </p>
            <ul>
              <li>Dashboard near the windshield (driver side)</li>
              <li>Driver side door jamb</li>
              <li>Vehicle registration documents</li>
              <li>Insurance cards</li>
            </ul>

            <h3>Instant VIN Verification</h3>
            <p>
              Get results in seconds. Our database is updated daily with new theft reports. 
              Whether you are buying from a dealership, private seller, or auction, always 
              verify the VIN first.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default StolenVehicleDatabasePage;
