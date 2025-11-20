import { BreadcrumbNavigation } from "@/components/seo/BreadcrumbNavigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, Mail, MessageSquare, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { PageSEO } from '@/components/seo/PageSEO';
import { createBreadcrumbSchema, createLocalBusinessSchema } from '@/utils/seo/structuredData';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ]);

  const localBusinessSchema = createLocalBusinessSchema();

  return (
    <div className="bg-background text-white min-h-screen">
      {/* Bot-visible content */}
      <noscript>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Contact SafeOrStolen - Customer Support & Business Inquiries</h1>
          <p>
            Get in touch with SafeOrStolen for customer support, technical assistance, business partnerships, 
            media inquiries, or general questions about our stolen item verification service.
          </p>
          
          <h2>Contact Information</h2>
          <p><strong>Phone:</strong> (206) 249-2203</p>
          <p><strong>Email:</strong> support@safeorstolen.com</p>
          <p><strong>Location:</strong> Phoenix, Arizona</p>
          
          <h2>Customer Support</h2>
          <p>
            Need help with IMEI check, VIN verification, or serial number lookup? Our support team responds 
            within 24 hours. We help with account issues, subscription management, verification problems, 
            and technical questions.
          </p>
          
          <h2>Business & Partnership Inquiries</h2>
          <p>
            Interested in our enterprise API? Want to integrate SafeOrStolen verification into your marketplace 
            or platform? Contact us for partnership opportunities, bulk verification solutions, and white-label 
            options.
          </p>
          
          <h2>Media & Press</h2>
          <p>
            Media professionals can reach us for press kits, company information, expert quotes, and interviews 
            about stolen goods prevention, marketplace safety, and verification technology.
          </p>
          
          <h2>Report Stolen Item</h2>
          <p>
            To report a stolen item to our database, please email support@safeorstolen.com with item details, 
            police report number, and serial number/IMEI/VIN. We verify all submissions before adding to our 
            stolen goods database.
          </p>
        </div>
      </noscript>

      <PageSEO
        title="Contact Safe or Stolen - Support, Partnerships & Media Inquiries"
        description="Contact Safe or Stolen team for customer support, business partnerships, media inquiries. Phone: (206) 249-2203. Email: support@safeorstolen.com"
        keywords="contact safe or stolen, customer support, stolen goods verification support, IMEI check help, VIN verification support, partnership inquiries, media contact"
        canonical="/contact"
        structuredData={[localBusinessSchema, breadcrumbSchema]}
      />
      <div className="container mx-auto px-4 pt-24 pb-4">
        <BreadcrumbNavigation items={[{ name: 'Contact', href: '/contact' }]} />
      </div>
      <div className="container mx-auto px-4 pb-16">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-lg text-center max-w-2xl mx-auto mb-8">Questions? We're here to help.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-sos-orange" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-foreground/90">(206) 249-2203</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-sos-orange" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-foreground/90">support@safeorstolen.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-sos-orange" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-foreground/90">Phoenix, AZ</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input 
                id="name" 
                className="bg-card border-border" 
                placeholder="Name*"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Input 
                id="email" 
                type="email" 
                className="bg-card border-border" 
                placeholder="Email*"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Textarea 
                id="message" 
                className="bg-card border-border min-h-24" 
                placeholder="Your message*"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="bg-sos-orange hover:bg-sos-orange/90 text-white w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default ContactPage;
