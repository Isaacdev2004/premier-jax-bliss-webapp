import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "internal-medicine",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMapOptions, setShowMapOptions] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceOptions = {
        "internal-medicine": "Internal Medicine",
        "med-spa": "Vivid Bliss Med Spa",
        "telehealth": "Telehealth Appointment",
        "other": "Other Inquiry"
      };
      
      const selectedService = serviceOptions[formData.service as keyof typeof serviceOptions] || formData.service;
      
      // Store message in Supabase database
      const { error } = await supabase
        .from('messages')
        .insert({
          name: formData.name,
          email: formData.email,
          subject: `New Contact - ${selectedService}`,
          message: `Phone: ${formData.phone}\nInterested In: ${selectedService}\n\n${formData.message}`,
          date: format(new Date(), 'yyyy-MM-dd'),
          read: false
        });
      
      if (error) {
        throw error;
      }

      // Also send email via mailto (as backup)
      const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Interested In: ${selectedService}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Sent from: ${window.location.origin}`
      );
      
      window.open(`mailto:info@jaxpremierhealth.com?subject=${subject}&body=${body}`);
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll get back to you soon."
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "internal-medicine",
        message: ""
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Get in touch with our team for appointments, consultations, or any questions." />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader title="Get In Touch" align="left" className="mb-8" />

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin size={24} className="mr-4 mt-1 text-jax-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">9010 R G Skinner Parkway, Jacksonville, FL 32068</p>
                    <div className="mt-2">
                      <button
                        onClick={() => setShowMapOptions(!showMapOptions)}
                        className="inline-flex items-center text-jax-primary hover:underline"
                      >
                        Get Directions <ArrowRight size={16} className="ml-1" />
                      </button>
                      
                      {showMapOptions && (
                        <div className="mt-2 ml-4 flex gap-4">
                          <a 
                            href="https://maps.google.com/?q=9010+R+G+Skinner+Parkway,+Jacksonville,+FL+32068" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center text-jax-primary hover:underline"
                          >
                            Google Maps
                          </a>
                          <a 
                            href="https://maps.apple.com/?q=9010+R+G+Skinner+Parkway,+Jacksonville,+FL+32068" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center text-jax-primary hover:underline"
                          >
                            Apple Maps
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone size={24} className="mr-4 mt-1 text-jax-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">(904) 468-2055</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={24} className="mr-4 mt-1 text-jax-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@jaxpremierhealth.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock size={24} className="mr-4 mt-1 text-jax-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Hours of Operation</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium">Standard Hours:</p>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Weekend Appointments:</p>
                        <p className="text-gray-600">Available by scheduling only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <Label>Interested In</Label>
                    <RadioGroup value={formData.service} onValueChange={handleServiceChange} className="flex flex-col space-y-2 mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="internal-medicine" id="internal-medicine" />
                        <Label htmlFor="internal-medicine" className="cursor-pointer">
                          Internal Medicine
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="med-spa" id="med-spa" />
                        <Label htmlFor="med-spa" className="cursor-pointer">
                          Vivid Bliss Med Spa
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="telehealth" id="telehealth" />
                        <Label htmlFor="telehealth" className="cursor-pointer">
                          Telehealth Appointment
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="cursor-pointer">
                          Other Inquiry
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your needs or questions..." rows={5} required />
                  </div>

                  <Button type="submit" className="w-full bg-jax-primary hover:bg-jax-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
