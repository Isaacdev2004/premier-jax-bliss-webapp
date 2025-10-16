
import { Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Dr. Donzo is incredibly thorough and caring. I've never felt rushed during my appointments, and she takes the time to explain everything clearly.",
      service: "Internal Medicine"
    },
    {
      name: "Michael Rodriguez",
      text: "Dr. Donzo's comprehensive approach to my health has made a real difference. She addresses not just symptoms but the root causes of health issues.",
      service: "Internal Medicine"
    },
    {
      name: "Emma Wilson",
      text: "JAX Premier Health Center provides exceptional, personalized care. Dr. Donzo truly listens and creates treatment plans that work for me.",
      service: "Internal Medicine"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="What Our Patients Say" 
          subtitle="Read about the experiences of patients who have visited JAX Premier Health Center." 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-jax-primary text-jax-primary" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
