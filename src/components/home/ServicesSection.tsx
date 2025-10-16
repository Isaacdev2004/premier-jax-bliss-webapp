
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Activity, Calendar, Heart, Star, Users } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Services" 
          subtitle="Comprehensive internal medicine services focused on your health and wellbeing." 
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-64 md:h-auto overflow-hidden">
                <img 
                  alt="Internal Medicine - Comprehensive healthcare at JAX Premier Health Center" 
                  src="/lovable-uploads/fda7ddc3-1df2-41c0-8db7-9ab0549f7e46.jpg" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-3">Internal Medicine</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive primary care services for adults, focusing on prevention, diagnosis, and treatment of adult diseases.
                  Available with telehealth options.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <ShieldCheck size={20} className="text-jax-primary mr-2" />
                    <span>Preventive Care</span>
                  </li>
                  <li className="flex items-center">
                    <Activity size={20} className="text-jax-primary mr-2" />
                    <span>Chronic Disease Management</span>
                  </li>
                  <li className="flex items-center">
                    <Calendar size={20} className="text-jax-primary mr-2" />
                    <span>Telehealth Available</span>
                  </li>
                </ul>
                <Button className="w-full bg-jax-primary hover:bg-jax-primary/90" asChild>
                  <Link to="/internal-medicine">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
