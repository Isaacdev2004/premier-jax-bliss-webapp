
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .trim()
    .regex(/^[\d\s\-\(\)]+$/, "Invalid phone number format")
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 characters"),
  service: z.string(),
});

const AppointmentBookingForm = ({ onClose }: { onClose: () => void }) => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "internal-medicine",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validationResult = bookingSchema.safeParse(formData);
      if (!validationResult.success) {
        const firstError = validationResult.error.errors[0];
        toast({
          title: "Validation Error",
          description: firstError.message,
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      // Format the selected date
      const formattedDate = date ? format(date, "yyyy-MM-dd") : null;
      const displayDate = date ? format(date, "MMMM dd, yyyy") : "No date selected";
      
      if (!formattedDate) {
        toast({
          title: "Date Required",
          description: "Please select a preferred appointment date",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      
      // Create the service options mapping
      const serviceOptions = {
        "internal-medicine": "Internal Medicine"
      };
      
      const selectedService = serviceOptions[formData.service as keyof typeof serviceOptions] || formData.service;
      
      // Save booking to Supabase database
      const { error: dbError } = await supabase
        .from('bookings')
        .insert({
          patient_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: selectedService,
          date: formattedDate,
          time: "To be scheduled", // Default time until scheduled
          status: "pending",
          notes: "Requested via website booking form"
        });
      
      if (dbError) {
        console.error("Error saving booking to database:", dbError);
        throw new Error(dbError.message);
      }

      // Also prepare email content (keeping the email notification feature)
      const subject = encodeURIComponent(`Appointment Request from ${formData.name}`);
      const body = encodeURIComponent(
        `Appointment Request Details:\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Service Type: ${selectedService}\n` +
        `Preferred Date: ${displayDate}\n\n` +
        `Sent from: ${window.location.origin}`
      );
      
      // Open mailto link in a new window
      window.open(`mailto:info@jaxpremierhealth.com?subject=${subject}&body=${body}`);
      
      toast({
        title: "Appointment Request Submitted",
        description: "Your appointment request has been received. We'll contact you to confirm details.",
      });
      onClose();
    } catch (error) {
      console.error("Error sending appointment request:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem sending your request. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="(555) 123-4567"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Service Type</Label>
          <RadioGroup
            value={formData.service}
            onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="internal-medicine" id="internal-medicine" />
              <Label htmlFor="internal-medicine">Internal Medicine</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Preferred Date</Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Book Appointment"}
        </Button>
      </div>
    </form>
  );
};

export default AppointmentBookingForm;
