import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from '@/hooks/useAuthState';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Search, CheckCircle, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const { user, loading } = useAuthState();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Safe or Stolen</h1>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">Welcome, {user.email}</span>
                <Button asChild variant="default">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/auth?tab=signup">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Verify Before You Buy
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Protect yourself from stolen goods. Verify the authenticity and legitimacy of second-hand items before making a purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify">
                  <Search className="h-5 w-5" />
                  Start Verification
                </Link>
              </Button>
            ) : (
              <>
                <Button asChild size="lg" className="gap-2">
                  <Link to="/auth?tab=signup">
                    Get Started Free
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/verify">Try Demo</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our advanced verification system helps you make informed decisions about second-hand purchases.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-muted">
            <CardHeader className="text-center">
              <Search className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Search & Scan</CardTitle>
              <CardDescription>
                Enter product details or scan QR codes to begin verification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use our smart search or QR scanner to quickly identify items and start the verification process.
              </p>
            </CardContent>
          </Card>

          <Card className="border-muted">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Verify Authenticity</CardTitle>
              <CardDescription>
                Cross-reference with databases of stolen goods and authenticity markers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our system checks multiple databases and uses AI to verify product authenticity.
              </p>
            </CardContent>
          </Card>

          <Card className="border-muted">
            <CardHeader className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Get Results</CardTitle>
              <CardDescription>
                Receive instant verification results and purchase recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get clear, actionable results to help you make safe purchasing decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="text-center py-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who are protecting themselves from stolen goods and counterfeit items.
            </p>
            {user ? (
              <Button asChild size="lg">
                <Link to="/verify">Start Verification</Link>
              </Button>
            ) : (
              <Button asChild size="lg">
                <Link to="/auth?tab=signup">Create Free Account</Link>
              </Button>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold">Safe or Stolen</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Safe or Stolen. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;