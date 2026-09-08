import { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  subject: z.string().trim().min(5, "Subject must be at least 5 characters").max(200, "Subject too long"),
  message: z.string().trim().min(20, "Message must be at least 20 characters").max(2000, "Message too long")
});

export const ContactFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent Successfully! ✓",
        description: "Our team will respond within 24 hours. Check your email.",
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please check your form inputs",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Error Sending Message",
          description: "Please try again or email support@safeorstolen.com",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      value: "support@safeorstolen.com",
      description: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      value: "1-800-SAFE-ORS",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: Clock,
      title: "Live Chat",
      value: "Available 24/7",
      description: "Instant support for urgent issues"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      value: "United States",
      description: "Serving customers worldwide"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <MessageSquare className="h-4 w-4" />
            <span>24/7 Customer Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Help or Start a Conversation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Questions about verification? Need enterprise solutions? Our team is here to help buyers, sellers, and businesses
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 lg:p-10 bg-card border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium mb-2 block">
                  Your Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`min-h-[48px] ${errors.name ? 'border-destructive' : ''}`}
                  aria-label="Your Name"
                  required
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground font-medium mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`min-h-[48px] ${errors.email ? 'border-destructive' : ''}`}
                  aria-label="Email Address"
                  required
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="subject" className="text-foreground font-medium mb-2 block">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`min-h-[48px] ${errors.subject ? 'border-destructive' : ''}`}
                  aria-label="Subject"
                  required
                />
                {errors.subject && (
                  <p className="text-sm text-destructive mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground font-medium mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`min-h-[150px] resize-none ${errors.message ? 'border-destructive' : ''}`}
                  aria-label="Message"
                  required
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold min-h-[56px] text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-primary font-medium mb-1">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Questions?</h3>
              <div className="space-y-3">
                <Link 
                  to="/faq" 
                  className="block p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <p className="font-medium text-foreground group-hover:text-primary">
                    Is this free? How many checks do I get?
                  </p>
                  <p className="text-sm text-muted-foreground">View pricing & plans →</p>
                </Link>
                <Link 
                  to="/faq" 
                  className="block p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <p className="font-medium text-foreground group-hover:text-primary">
                    Is this database global?
                  </p>
                  <p className="text-sm text-muted-foreground">Learn about coverage →</p>
                </Link>
                <Link 
                  to="/faq" 
                  className="block p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <p className="font-medium text-foreground group-hover:text-primary">
                    How accurate are the results?
                  </p>
                  <p className="text-sm text-muted-foreground">See how verification works →</p>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
