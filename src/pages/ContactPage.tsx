
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, Mail, MessageSquare, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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

  return (
    <div className="bg-sos text-white min-h-screen">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4 mr-1" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-12">Have questions or need assistance? We're here to help.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-secondary/80 p-3">
                <Phone className="h-6 w-6 text-sos-orange" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-300">(206) 249-2203</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-secondary/80 p-3">
                <Mail className="h-6 w-6 text-sos-orange" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email Us</h3>
                <p className="text-gray-300">safeorstolenmail@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-secondary/80 p-3">
                <MapPin className="h-6 w-6 text-sos-orange" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-gray-300">Phoenix, AZ</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-secondary/80 p-3">
                <MessageSquare className="h-6 w-6 text-sos-orange" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Live Chat</h3>
                <p className="text-gray-300">Available Monday-Friday, 9am-5pm MST</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name*</label>
                <Input 
                  id="name" 
                  className="bg-secondary/50" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email*</label>
                <Input 
                  id="email" 
                  type="email" 
                  className="bg-secondary/50" 
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <Input 
                id="subject" 
                className="bg-secondary/50" 
                placeholder="Subject of your message"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message*</label>
              <Textarea 
                id="message" 
                className="bg-secondary/50 min-h-32" 
                placeholder="Your message..."
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
      
  );
};

export default ContactPage;
