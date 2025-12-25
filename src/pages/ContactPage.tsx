import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { toast } from 'sonner';
import { Mail, MessageSquare, Clock, MapPin, Send, Phone, Shield, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <>
      <PageSEO
        title="Contact Us - SafeOrStolen Support"
        description="Contact SafeOrStolen for support, partnership inquiries, or feedback. We respond within 24 hours. Email support@safeorstolen.com or use our contact form."
        keywords="contact safeorstolen, safeorstolen support, stolen item checker help, IMEI checker support"
        canonical="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact SafeOrStolen",
          "description": "Get in touch with SafeOrStolen for support, partnerships, or feedback",
          "url": "https://safeorstolen.com/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "SafeOrStolen",
            "email": "support@safeorstolen.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "support@safeorstolen.com",
              "contactType": "Customer Support",
              "availableLanguage": ["English"]
            }
          }
        }}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'Contact Us', href: '/contact' }]} />
        </div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Need help with verification? Want to partner with us? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Email Support</h3>
              <a href="mailto:support@safeorstolen.com" className="text-primary hover:underline">
                support@safeorstolen.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">For general inquiries and support</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Response Time</h3>
              <p className="text-green-500 font-medium">Within 24 Hours</p>
              <p className="text-sm text-muted-foreground mt-2">We prioritize every message</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-foreground">United States</p>
              <p className="text-sm text-muted-foreground mt-2">Serving customers worldwide</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-card/50 border border-border rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-4">Quick Help</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link to="/faq" className="flex items-center gap-2 p-3 rounded-lg hover:bg-background transition-colors">
                <HelpCircle className="w-5 h-5 text-primary" />
                <span>View FAQs</span>
              </Link>
              <Link to="/how-it-works" className="flex items-center gap-2 p-3 rounded-lg hover:bg-background transition-colors">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>How It Works</span>
              </Link>
              <Link to="/pricing" className="flex items-center gap-2 p-3 rounded-lg hover:bg-background transition-colors">
                <Shield className="w-5 h-5 text-primary" />
                <span>Pricing & Plans</span>
              </Link>
              <Link to="/for-businesses" className="flex items-center gap-2 p-3 rounded-lg hover:bg-background transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span>Business Inquiries</span>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Common Topics</h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-bold mb-1">Technical Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Issues with verification, app problems, or account access? We'll help you troubleshoot.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-bold mb-1">Billing Questions</h3>
                  <p className="text-sm text-muted-foreground">
                    Questions about your subscription, refunds, or payment methods.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-bold mb-1">Business & Partnerships</h3>
                  <p className="text-sm text-muted-foreground">
                    Interested in API access, white-label solutions, or partnership opportunities.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-bold mb-1">Feature Requests</h3>
                  <p className="text-sm text-muted-foreground">
                    Have an idea for improving SafeOrStolen? We love hearing from our users.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-bold mb-1">Press & Media</h3>
                  <p className="text-sm text-muted-foreground">
                    For press inquiries, please visit our <Link to="/press-kit" className="text-primary hover:underline">Press Kit</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ContactPage;
